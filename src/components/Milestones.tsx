import Link from "next/link";
import Reveal from "./Reveal";
import { milestones } from "@/data/content";

export default function Milestones() {
  return (
    <section id="milestones">
      <div className="mile-l">
        <Reveal className="mile-l-inner">
          <div className="mile-l-tag">Latest Milestones</div>
          <h2>A Conglomerate That Keeps Moving Forward</h2>
          <p>
            From Nepal&apos;s first automotive distributors to Nepal&apos;s first EV journey to
            Kailash, VOITH has never stopped pioneering.
          </p>
        </Reveal>
      </div>
      <Reveal className="mile-r">
        {milestones.map((m) => (
          <div className="ms-item" key={m.slug}>
            <div className="ms-date">{m.date}</div>
            <Link href={`/milestones/${m.slug}`} className="ms-title-link">
              <div className="ms-title">{m.title}</div>
            </Link>
            <p className="ms-desc">{m.description}</p>
            <Link href={`/milestones/${m.slug}`} className="ms-more">
              Read more →
            </Link>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
