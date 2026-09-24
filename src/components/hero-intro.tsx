"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/components/photo";

function LetterLine({ text }: { text: string }) {
  return (
    <span className="hero-line">
      {Array.from(text).map((char, index) => (
        <span className="hero-char-mask" key={`${char}-${index}`}>
          <span className="hero-char" style={{ transitionDelay: `${index * 0.032}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

export function HeroIntro({
  src,
  kicker,
  name,
  lead,
  cta,
}: {
  src: string;
  kicker: string;
  name: string;
  lead?: string;
  cta?: string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      setText(true);
      return;
    }
    const openTimer = window.setTimeout(() => setOpen(true), 60);
    const textTimer = window.setTimeout(() => setText(true), 560);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-cream">
      <div className={`hero-window ${open ? "is-open" : ""}`}>
        <Photo src={src} alt="" fillParent kenburns quiet />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/35 via-wine/10 to-wine/20" />
      </div>
      <div
        className={`absolute inset-x-5 bottom-[14vh] z-10 text-cream md:inset-x-10 md:bottom-[12vh] ${
          text ? "hero-copy-in" : "hero-copy-wait"
        }`}
      >
        <p className="hero-kicker font-display text-[0.95rem] leading-snug md:text-xl">{kicker}</p>
        <h1 className="mt-2 font-display text-[clamp(2.6rem,11.6vw,9.6rem)] leading-none md:mt-3">
          <LetterLine text={name} />
        </h1>
        {lead ? <p className="mt-5 max-w-xl text-base leading-7 text-cream/90 md:text-lg">{lead}</p> : null}
        {cta ? <a href="#rsvp" className="btn-cream mt-6 inline-flex">{cta}</a> : null}
      </div>
    </section>
  );
}
