import Image from "next/image";
import Link from "next/link";
import {
  companyFullName,
  footerContact,
  footerLinks,
  footerSocial,
  routes,
} from "@/data/content";
import Logo from "../../public/voithlogo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="foot-main">
        <div className="foot-col">
          <h3 className="foot-heading">Links</h3>
          <ul className="foot-list">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h3 className="foot-heading">Follow us</h3>
          <ul className="foot-list">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col foot-col--contact">
          <h3 className="foot-heading">General inquiries</h3>
          <a className="foot-email" href={`mailto:${footerContact.email}`}>
            {footerContact.email}
          </a>
          <address className="foot-address">
            {footerContact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <div className="foot-brand">
          <Link href={routes.home} className="foot-logo" aria-label="VOITH home">
            <Image src={Logo} alt="VOITH" width={160} height={160} />
          </Link>
          <p className="foot-full-name">{companyFullName}</p>
        </div>
      </div>

      <hr className="foot-rule" />

      <p className="foot-copy">
        © {year} {companyFullName}. All rights reserved.
      </p>
    </footer>
  );
}
