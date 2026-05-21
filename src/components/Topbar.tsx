"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes, topbarSectors } from "@/data/content";

export default function Topbar() {
  const pathname = usePathname();
  const onIndustries = pathname === routes.industries || pathname.startsWith(`${routes.industries}/`);

  return (
    <div className="topbar">
      <div className="tb-links">
        {topbarSectors.map((s) => (
          <Link
            key={s}
            href={routes.industries}
            className={`tb-link${onIndustries ? " on" : ""}`}
          >
            {s}
          </Link>
        ))}
      </div>
      <div className="tb-right">
        <div className="tb-dot" />
        Kathmandu, Nepal
      </div>
    </div>
  );
}
