import { navLinks } from "@/data/content";
import Logo from "@/public/voithlogo.png"
import Image from "next/image";
export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-l">
        {/* <div className="nav-mark"> */}
          <Image src={Logo} alt="logo" width={50} />
        {/* </div> */}
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-r">
        <span className="nav-est">Est. 1962</span>
        <button className="nav-btn">Contact VOITH</button>
      </div>
    </nav>
  );
}
