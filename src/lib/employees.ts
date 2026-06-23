/**
 * Server-side fetch for the VOITH employee directory.
 *
 * The upstream API (api_employee.php) sits behind HTTP Basic Auth and does NOT
 * send CORS headers, so it cannot be called from the browser. We fetch it here
 * on the server with credentials from env vars and pass plain data to the client.
 * Employee photos, by contrast, are public and load directly via <img>.
 *
 * TLS note: the server presents its leaf certificate WITHOUT the intermediate
 * CA, so Node's verifier rejects it ("unable to verify the first certificate")
 * even though browsers/curl accept it via the OS trust store. This is a single,
 * trusted, internal host, so we skip chain verification for this one request.
 * (Ideally, fix the server to send the full chain, then set EMPLOYEE_API_STRICT_TLS=1.)
 *
 * Configure in .env.local:
 *   EMPLOYEE_API_URL          (optional — defaults to the known endpoint)
 *   EMPLOYEE_API_USER
 *   EMPLOYEE_API_PASS
 *   EMPLOYEE_API_STRICT_TLS   (optional — set to "1" once the cert chain is fixed)
 */

import https from "node:https";
import {
  isExcludedDepartment,
  resolveEmployeeCompany,
  type Employee,
} from "@/lib/employee-shared";

export type { Employee, EmployeeCompany } from "@/lib/employee-shared";
export { employeeCompanyOrder, resolveEmployeeCompany } from "@/lib/employee-shared";

type ApiRow = {
  IOEMPID?: string | number;
  IOEMPName?: string;
  EMPPhoto?: string;
  DEG_NAME?: string;
  DEPT_NAME?: string;
};

const DEFAULT_URL = "https://dms.voith.com.np:8444/dashboard1/api_employee.php";

const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function fetchJson(url: string, headers: Record<string, string>): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers,
        rejectUnauthorized: process.env.EMPLOYEE_API_STRICT_TLS === "1",
      },
      (res) => {
        const status = res.statusCode ?? 0;
        if (status < 200 || status >= 300) {
          res.resume();
          reject(new Error(`API responded ${status} ${res.statusMessage ?? ""}`));
          return;
        }
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        });
      },
    );
    req.on("error", reject);
    req.setTimeout(15_000, () => req.destroy(new Error("request timed out")));
  });
}

/**
 * Returns the full employee list, or an empty array on any failure (missing
 * credentials, network error, non-200, bad payload). Callers fall back to the
 * curated team view when this is empty, so the page never breaks.
 */
export async function getEmployees(): Promise<Employee[]> {
  const url = process.env.EMPLOYEE_API_URL || DEFAULT_URL;
  const user = process.env.EMPLOYEE_API_USER;
  const pass = process.env.EMPLOYEE_API_PASS;

  const headers: Record<string, string> = { Accept: "application/json" };
  if (user && pass) {
    headers.Authorization =
      "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
  } else {
    console.warn("[employees] EMPLOYEE_API_USER / EMPLOYEE_API_PASS not set");
  }

  try {
    const json = await fetchJson(url, headers);
    const rows =
      json &&
      typeof json === "object" &&
      Array.isArray((json as { data?: unknown }).data)
        ? (json as { data: ApiRow[] }).data
        : [];

    return rows
      .map((r) => {
        const department = clean(r.DEPT_NAME);
        return {
          id: String(r.IOEMPID ?? ""),
          name: clean(r.IOEMPName),
          photo: clean(r.EMPPhoto),
          designation: clean(r.DEG_NAME),
          department,
          company: resolveEmployeeCompany(department),
        };
      })
      .filter((e) => e.id && e.name && !isExcludedDepartment(e.department));
  } catch (err) {
    console.error("[employees] fetch failed:", err);
    return [];
  }
}
