"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/components/photo";

function LetterLine({ text }: { text: string }) {
  // Letters are grouped per word so long titles wrap between words, never mid-word.
  let index = 0;
  const words = text.split(" ");
  return (
    <span className="hero-line flex-wrap">
      {words.map((word, wordIndex) => (
        <span className="flex" key={`${word}-${wordIndex}`}>
          {Array.from(wordIndex < words.length - 1 ? `${word} ` : word).map((char) => {
            const delay = index++ * 0.032;
            return (
              <span className="hero-char-mask" key={`${char}-${index}`}>
                <span className="hero-char" style={{ transitionDelay: `${delay}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export function HeroIntro({
  src,
  kicker,
  name,
  subtitle,
  lead,
  cta,
  ctaHref = "#rsvp",
  secondary,
  alt = "",
  video,
}: {
  src: string;
  alt?: string;
  /** Vídeo de fundo opcional; a foto `src` vira a capa (poster). */
  video?: string;
  kicker: string;
  name: string;
  subtitle?: string;
  lead?: string | string[];
  cta?: string;
  ctaHref?: string;
  secondary?: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotion(!reduced);
    if (reduced) {
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
    <section className="relative flex min-h-[max(100svh,640px)] flex-col justify-end overflow-hidden bg-cream">
      <div className={`hero-window ${open ? "is-open" : ""}`}>
        <Photo src={src} alt={alt} fillParent kenburns={!video} quiet priority sizes="100vw" />
        {video && motion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={video}
            poster={src}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/20 to-wine/35" />
        {/* Reforço atrás do texto (canto inferior esquerdo) para manter a leitura sobre fotos claras. */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine/60 via-wine/15 to-transparent" />
      </div>
      {/* Texto no fluxo (não absoluto): títulos longos empurram a altura em vez de invadir o menu. */}
      <div
        className={`relative z-10 px-5 pt-32 pb-[14vh] text-cream md:px-10 md:pb-[12vh] ${
          text ? "hero-copy-in" : "hero-copy-wait"
        }`}
      >
        <p className="hero-kicker font-display text-[0.95rem] leading-snug md:text-xl">{kicker}</p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,5vw,5.2rem)] leading-none md:mt-3">
          <LetterLine text={name} />
        </h1>
        {subtitle ? (
          <p className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.6rem)] leading-tight md:mt-4">{subtitle}</p>
        ) : null}
        {(Array.isArray(lead) ? lead : lead ? [lead] : []).map((paragraph) => (
          <p key={paragraph} className="mt-5 max-w-xl text-base leading-7 text-cream/90 md:text-lg">{paragraph}</p>
        ))}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          {cta ? <a href={ctaHref} className="btn-cream inline-flex">{cta}</a> : null}
          {secondary ? <a href={secondary.href} className="inline-block underline">{secondary.label}</a> : null}
        </div>
      </div>
    </section>
  );
}
