"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { industryDropdown, navLinks, routes } from "@/data/content";
import Logo from "../../public/voithlogo-nav.png";

const DRAWER_MQ = "(max-width: 900px)";

function isActive(pathname: string, href: string) {
  if (href === routes.industries) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toggleId = useId();
  const drawerId = `${toggleId}-drawer`;

  useEffect(() => {
    setOpenDropdown(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(DRAWER_MQ);
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleEnter = () => {
    if (menuOpen) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(true);
  };
  const handleLeave = () => {
    if (menuOpen) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(false), 120);
  };

  return (
    <nav id="nav" className={menuOpen ? "nav-open" : undefined}>
      <div className="nav-l">
        <Link href={routes.home} className="nav-logo" aria-label="VOITH home">
          <Image
            src={Logo}
            alt="VOITH"
            width={128}
            height={128}
            priority
            className="nav-logo-img"
          />
        </Link>
        <ul className="nav-links" id={drawerId}>
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
                    aria-expanded={openDropdown || menuOpen}
                  >
                    {l.label}
                    <span className="nav-caret" aria-hidden="true">
                      ▾
                    </span>
                  </Link>
                  <div
                    className={`nav-dd${openDropdown || menuOpen ? " is-open" : ""}`}
                    role="menu"
                  >
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
          <li className="nav-drawer-cta">
            <Link href={routes.contact} className="nav-btn">
              Contact VOITH
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-r">  
        <span className="nav-est">Est. 1964</span>
        <Link href={routes.contact} className="nav-btn nav-btn-desk">
          Contact VOITH
        </Link>
        <a
          className="nav-phil"
          href="https://philcongen.voith.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          title="Consulate of the Philippines in Nepal"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/phil_logo.svg"
            alt="Consulate of the Philippines in Nepal"
            className="nav-phil-img"
          />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={drawerId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
      </div>
      <button
        type="button"
        className="nav-backdrop"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />
    </nav>
  );
}
