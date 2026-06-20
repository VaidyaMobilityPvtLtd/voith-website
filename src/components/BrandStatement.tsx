import Image from "next/image";
import Reveal from "./Reveal";
import { companyFullName } from "@/data/content";
import logo from "../../public/voithlogo.png";

export default function BrandStatement() {
  return (
    <section id="brand-statement">
      <div className="bs-wrap">
        <Reveal className="bs-mark">
          <Image
            src={logo}
            alt="VOITH emblem"
            width={264}
            height={264}
            className="bs-mark-img"
          />
        </Reveal>
        <Reveal className="bs-name" delay={1}>
          <p className="bs-full-name">{companyFullName}</p>
        </Reveal>
        <Reveal className="bs-copy" delay={2}>
          <p>
            <span className="bs-accent">We</span> believe remarkable futures are created when
            people, ideas, and industries move forward together. Through collaboration and shared
            purpose, we empower our group of companies to achieve sustainable growth and national
            impact.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
