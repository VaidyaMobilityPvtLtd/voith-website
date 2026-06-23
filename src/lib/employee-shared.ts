/** Client-safe employee types and company mapping (no Node.js imports). */

export type Employee = {
  id: string;
  name: string;
  photo: string;
  designation: string;
  department: string;
  company: string;
};

/** Display order for the People page company filter. */
export const employeeCompanyOrder = [
  "United Traders Syndicate",
  "Trayana",
  "Vaidya Energy",
  "UHEEM",
  "Pitstop",
  "Philippines Consulate",
  "Huaxin Cement Narayani",
  "Tadi Cement & Lime Industries",
  "VOITH Hospitality",
  "VOITH Group",
  "Other",
] as const;

export type EmployeeCompany = (typeof employeeCompanyOrder)[number];

/**
 * Departments hidden from the People directory (e.g. residence/household staff
 * that shouldn't surface in the public team listing).
 */
export function isExcludedDepartment(department: string): boolean {
  const d = department.trim().toLowerCase();
  // Only the President House / Jasutara Niwas residences — not President Office.
  return d.includes("jasutara") || (d.includes("president") && d.includes("house"));
}

/** Map API department names to a VOITH operating company. */
export function resolveEmployeeCompany(department: string): EmployeeCompany {
  const d = department.trim().toLowerCase();
  if (!d) return "Other";

  if (
    d.includes("ultra violette") ||
    d.includes("ultraviolette") ||
    d.includes("trayana")
  ) {
    return "Trayana";
  }
  if (d.includes("ve head") || d.includes("ather")) {
    return "Vaidya Energy";
  }
  if (d.includes("heavy equipment")) return "UHEEM";
  if (d.includes("pitstop")) return "Pitstop";
  if (d.includes("consulate") || d.includes("philippines")) {
    return "Philippines Consulate";
  }
  if (d.includes("sasvata") || d.includes("hospitality")) {
    return "VOITH Hospitality";
  }
  if (d.includes("tadi") || d.includes("accounts tadi")) {
    return "Tadi Cement & Lime Industries";
  }
  if (d.includes("huaxin") || d.includes("narayani")) {
    return "Huaxin Cement Narayani";
  }
  if (
    d.startsWith("uts-") ||
    d.startsWith("ec ") ||
    d.startsWith("outlet-") ||
    d.includes("benelli") ||
    d.includes("morbidelli") ||
    d.includes("after sales") ||
    d.includes("credit control") ||
    d.includes("service station") ||
    d.includes("dent & paint") ||
    d === "vsd" ||
    d === "spd" ||
    d === "sc patan" ||
    d === "workshop"
  ) {
    return "United Traders Syndicate";
  }
  if (
    d.includes("it & hr") ||
    d.includes("finance") ||
    d.includes("legal") ||
    d.includes("project management") ||
    d.startsWith("adm-") ||
    d.includes("admin") ||
    d.includes("web development") ||
    d.includes("president") ||
    d.includes("board of director") ||
    d.includes("lukla outdoor")
  ) {
    return "VOITH Group";
  }

  return "Other";
}
