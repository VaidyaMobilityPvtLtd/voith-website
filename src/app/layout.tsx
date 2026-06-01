import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { companyFullName } from "@/data/content";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: `VOITH — ${companyFullName}`,
  description:
    "From Toyota to Ather Energy to cement — VOITH has been pioneering Nepal's industrial and economic growth for over six decades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlex.variable}>
      <body className={ibmPlex.className}>{children}</body>
    </html>
  );
}
