"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, routes } from "@/data/content";
import Logo from "@/public/voithlogo.png";

function isActive(pathname: string, href: string) {
  if (href === routes.industries) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav id="nav">
      <div className="nav-l">
        <Link href={routes.home} className="nav-logo" aria-label="VOITH home">
          <Image src={Logo} alt="VOITH" width={48} height={48} priority />
        </Link>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(pathname, l.href) ? "active" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-r">
        <span className="nav-est">Est. 1964</span>
        <button type="button" className="nav-btn">
          Contact VOITH
        </button>
      </div>
    </nav>
  );
}
