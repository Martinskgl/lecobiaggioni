"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { plain, rich } from "@/lib/rich";

const STACK = [
  { x: -12, y: 8, rotate: -8 },
  { x: 16, y: -4, rotate: 7 },
  { x: -4, y: 12, rotate: -3 },
  { x: 10, y: -10, rotate: 5 },
] as const;

/** Distância (px) que o painel de texto percorre ao entrar e ao sair. */
const PANEL_IN = 44;
const PANEL_OUT = 40;

export type ServiceIcon = "flower" | "heart" | "plane" | "document";

export type PolaroidItem = {
  src: string;
  name: string;
  icon: ServiceIcon;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: string;
  href: string;
  note?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function Icon({ name }: { name: ServiceIcon }) {
  if (name === "flower") {
    return (
      <svg viewBox="0 0 48 48" className="size-6 shrink-0 stroke-rose" fill="none" aria-hidden>
        <path d="M16 34c0-6 4-10 8-14 4 4 8 8 8 14" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 34h8" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 20c2-4 4.5-7 6-9 1.5 2 4 5 6 9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0 fill-none stroke-rose" aria-hidden>
        <path
          d="M12 20.4S3.6 15.2 3.6 9.4C3.6 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 0.6-1.2 2-2 3.6-2 2.6 0 4.8 2 4.8 4.9 0 5.8-8.4 11-8.4 11z"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  if (name === "plane") {
    return (
      <svg viewBox="0 0 48 48" className="size-6 shrink-0 stroke-rose" fill="none" aria-hidden>
        <path
          d="M14 26.5c6-1.5 10-4.2 16.5-9.5l2.2 2.2c-4.8 6.2-7.2 10.4-8.4 16.5l-3.1-3.8-4.6.9-1.4-1.4.9-4.6L14 26.5Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="size-6 shrink-0 stroke-rose" fill="none" aria-hidden>
      <rect x="12" y="14" width="24" height="22" rx="2" strokeWidth="1.8" />
      <path d="M18 14v-2a6 6 0 0 1 12 0v2" strokeWidth="1.8" />
      <path d="M12 22h24" strokeWidth="1.8" />
    </svg>
  );
}

/** Polaroid: só a foto e a legenda manuscrita com o nome do serviço. */
function Card({ item, className = "" }: { item: PolaroidItem; className?: string }) {
  return (
    <div className={`bg-white p-[0.7rem] pb-3 ${className}`}>
      <Photo src={item.src} alt={item.name} className="aspect-[4/5]" sizes="280px" quiet />
      <p className="mt-2 -rotate-3 px-1 font-script text-2xl leading-tight text-wine">{item.name}</p>
    </div>
  );
}

/** Painel de texto do serviço (coluna direita no desktop, abaixo da polaroid no mobile). */
function Panel({ item }: { item: PolaroidItem }) {
  // Títulos com duas frases quebram em duas linhas, como no mockup.
  const titleLines = item.title.split(/(?<=\.)\s+(?=\S)/);

  return (
    <div className="max-w-md">
      <p className="flex items-center gap-3 font-display text-2xl leading-none text-rose">
        <Icon name={item.icon} />
        {item.name}
      </p>
      <p className="mt-5 text-[0.62rem] font-medium tracking-[0.18em] text-rose uppercase">{item.eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-[0.95] text-wine">
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {item.paragraphs.map((paragraph) => (
        <p key={plain(paragraph)} className="mt-3 text-sm leading-6 text-wine/70">
          {rich(paragraph)}
        </p>
      ))}
      <a href={item.href} className="btn-wine mt-6 inline-flex">
        {item.cta}
      </a>
      {item.note ? <p className="mt-5 text-[0.68rem] leading-5 text-wine/45">{item.note}</p> : null}
    </div>
  );
}

/** Fallback sem animação (mobile e prefers-reduced-motion): blocos um embaixo do outro. */
function StackedList({ items }: { items: PolaroidItem[] }) {
  return (
    <div className="page-frame mx-auto grid max-w-[1100px] gap-20 px-6 py-24 md:px-10 md:py-32">
      {items.map((item, index) => {
        const slot = STACK[index % STACK.length];
        return (
          <Reveal key={item.name} className="grid items-center gap-10 md:grid-cols-2">
            <div style={{ rotate: `${slot.rotate}deg` }}>
              <Card
                item={item}
                className="mx-auto w-[min(72vw,16.5rem)] shadow-[0_18px_50px_rgba(84,39,46,0.16)]"
              />
            </div>
            <Panel item={item} />
          </Reveal>
        );
      })}
    </div>
  );
}

export function PolaroidStack({ items }: { items: PolaroidItem[] }) {
  const [pinned, setPinned] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPinned(false);
    }
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;

    const paint = () => {
      const travel = root.offsetHeight - window.innerHeight;
      if (travel <= 0) return;
      const progress = clamp(-root.getBoundingClientRect().top / travel, 0, 1);
      const span = 0.7 / Math.max(items.length, 1);

      // Progresso de entrada de cada etapa (mesma curva para foto e texto).
      const locals = items.map((_, index) =>
        index === 0 ? 1 : easeOutCubic(clamp((progress - index * span) / 0.18, 0, 1)),
      );
      let active = 0;
      locals.forEach((local, index) => {
        if (local >= 0.5) active = index;
      });

      items.forEach((_, index) => {
        const local = locals[index];
        const next = locals[index + 1] ?? 0;

        const card = cardRefs.current[index];
        if (card) {
          const slot = STACK[index % STACK.length];
          const rise = index === 0 ? 0 : (1 - local) * 48;
          card.style.opacity = String(local);
          card.style.transform = `translate(-50%, calc(-50% + ${rise}vh)) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`;
        }

        const panel = panelRefs.current[index];
        if (panel) {
          // Entra de baixo junto com a foto; sai para cima quando a próxima etapa entra.
          // A saída termina antes de a entrada seguinte ficar legível.
          const enter = clamp((local - 0.35) / 0.65, 0, 1);
          const leave = clamp(next / 0.6, 0, 1);
          const y = (1 - local) * PANEL_IN - next * PANEL_OUT;
          panel.style.opacity = String(enter * (1 - leave));
          panel.style.transform = `translateY(${y}px)`;
          const isActive = index === active;
          panel.style.pointerEvents = isActive ? "auto" : "none";
          panel.setAttribute("aria-hidden", isActive ? "false" : "true");
        }
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        paint();
      });
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items.length, pinned]);

  if (!pinned) {
    return (
      <section id="story" className="scroll-mt-24 bg-cream">
        <StackedList items={items} />
      </section>
    );
  }

  return (
    <section id="story" className="scroll-mt-24 bg-cream">
      {/* Mobile e tablet: sem sticky, blocos empilhados (o texto não cabe em 100svh) */}
      <div className="lg:hidden">
        <StackedList items={items} />
      </div>

      {/* Desktop: sticky + progresso da rolagem */}
      <div
        ref={rootRef}
        className="relative hidden lg:block"
        style={{ height: `${(1.25 + items.length * 0.58) * 100}svh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div className="page-frame relative mx-auto grid h-full max-w-[1100px] grid-cols-2 items-center gap-10 px-10">
            <div className="relative h-full w-full">
              {items.map((item, index) => {
                const slot = STACK[index % STACK.length];
                return (
                  <div
                    key={item.name}
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className="absolute left-1/2 top-1/2 w-[min(22vw,16.5rem)] shadow-[0_18px_50px_rgba(84,39,46,0.16)] will-change-transform"
                    style={{
                      zIndex: index + 2,
                      opacity: index === 0 ? 1 : 0,
                      transform:
                        index === 0
                          ? `translate(-50%, -50%) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`
                          : `translate(-50%, calc(-50% + 48vh)) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`,
                    }}
                  >
                    <Card item={item} />
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 h-full">
              {items.map((item, index) => (
                <div
                  key={item.name}
                  ref={(node) => {
                    panelRefs.current[index] = node;
                  }}
                  className="absolute inset-0 flex flex-col justify-center will-change-transform"
                  aria-hidden={index === 0 ? "false" : "true"}
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? "translateY(0px)" : `translateY(${PANEL_IN}px)`,
                    pointerEvents: index === 0 ? "auto" : "none",
                  }}
                >
                  <Panel item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
