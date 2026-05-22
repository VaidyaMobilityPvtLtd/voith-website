import Image from "next/image";
import { founderSpotlight } from "@/data/content";
import founderPhoto from "@/public/dr-vaidya.png";

export default function Features() {
  return (
    <section id="features">
      <div className="features-founder">
        <div className="founder-copy">
          <h2 className="founder-name">{founderSpotlight.name}</h2>
          <div className="founder-rule" aria-hidden="true" />
          {founderSpotlight.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div className="founder-photo">
          <Image
            src={founderPhoto}
            alt={founderSpotlight.name}
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
            className="founder-photo-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
