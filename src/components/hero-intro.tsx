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
}: {
  src: string;
  kicker: string;
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      setText(true);
      return;
    }
    const timer = window.setTimeout(() => {
      setOpen(true);
      setText(true);
    }, 60);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-wine">
      <div className={`hero-window ${open ? "is-open" : ""}`}>
        <Photo src={src} alt="" fillParent kenburns quiet />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/35 via-wine/10 to-wine/20" />
      </div>
      <div className={`absolute inset-0 z-10 text-cream ${text ? "hero-copy-in" : "hero-copy-wait"}`}>
        <p className="hero-kicker absolute left-5 top-[5.75rem] max-w-[22rem] font-display text-[0.95rem] leading-snug md:left-10 md:top-[6.75rem] md:max-w-none md:text-xl">
          {kicker}
        </p>
        <h1 className="absolute inset-x-5 bottom-[14vh] font-display text-[clamp(2.6rem,11.6vw,9.6rem)] leading-none md:inset-x-10 md:bottom-[12vh]">
          <LetterLine text={name} />
        </h1>
      </div>
    </section>
  );
}
