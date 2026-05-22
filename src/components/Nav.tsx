"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industryDropdown, navLinks, routes } from "@/data/content";
import Logo from "@/public/voithlogo.png";

function isActive(pathname: string, href: string) {
  if (href === routes.industries) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpenDropdown(false);
  }, [pathname]);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(true);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(false), 120);
  };

  return (
    <nav id="nav">
      <div className="nav-l">
        <Link href={routes.home} className="nav-logo" aria-label="VOITH home">
          <Image src={Logo} alt="VOITH" width={48} height={48} priority />
        </Link>
        <ul className="nav-links">
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            if (l.href === routes.industries) {
              return (
                <li
                  key={l.href}
                  className="nav-has-dd"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    href={l.href}
                    className={active ? "active" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openDropdown}
                  >
                    {l.label}
                    <span className="nav-caret" aria-hidden="true">
                      ▾
                    </span>
                  </Link>
                  <div
                    className={`nav-dd${openDropdown ? " is-open" : ""}`}
                    role="menu"
                  >
                    <Link
                      href={routes.industries}
                      className="nav-dd-overview"
                      role="menuitem"
                    >
                      <span className="nav-dd-overview-label">
                        All Industries
                      </span>
                      <span className="nav-dd-overview-sub">
                        VOITH's four core sectors
                      </span>
                    </Link>
                    <ul className="nav-dd-list">
                      {industryDropdown.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`${routes.industries}/${item.slug}`}
                            className="nav-dd-item"
                            role="menuitem"
                          >
                            <span className="nav-dd-item-label">
                              {item.label}
                            </span>
                            <span className="nav-dd-item-tag">
                              {item.tagline}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={l.href}>
                <Link href={l.href} className={active ? "active" : undefined}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-r">
        <span className="nav-est">Est. 1964</span>
        <Link href={routes.contact} className="nav-btn">
          Contact VOITH
        </Link>
      </div>
    </nav>
  );
}
