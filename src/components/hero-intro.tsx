"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/components/photo";

function LetterLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="hero-line">
      {Array.from(text).map((char, index) => (
        <span className="hero-char-mask" key={`${char}-${index}`}>
          <span className="hero-char" style={{ transitionDelay: `${delay + index * 0.038}s` }}>
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
  line1,
  line2,
  dateLine,
}: {
  src: string;
  kicker: string;
  line1: string;
  line2: string;
  dateLine: string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      setText(true);
      return;
    }
    const openTimer = window.setTimeout(() => setOpen(true), 120);
    const textTimer = window.setTimeout(() => setText(true), 1520);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-cream">
      <div className={`hero-window ${open ? "is-open" : ""}`}>
        <Photo src={src} alt="" fillParent kenburns />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/55 via-wine/10 to-wine/20" />
      </div>
      <div
        className={`absolute inset-x-0 bottom-[14%] px-6 text-center text-cream md:bottom-[16%] ${
          text ? "hero-copy-in" : "hero-copy-wait"
        }`}
      >
        <p className="hero-kicker font-display text-lg italic md:text-2xl">{kicker}</p>
        <h1 className="mx-auto mt-5 max-w-5xl font-display text-[15vw] leading-[0.88] md:text-[7.4rem]">
          <LetterLine text={line1} />
          <LetterLine text={line2} delay={0.14} />
        </h1>
        <p className="hero-date mt-6 text-sm tracking-[0.12em] uppercase md:text-base">{dateLine}</p>
      </div>
    </section>
  );
}
