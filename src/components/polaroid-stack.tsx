"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const STACK = [
  { x: -12, y: 8, rotate: -8 },
  { x: 16, y: -4, rotate: 7 },
  { x: -4, y: 12, rotate: -3 },
  { x: 10, y: -10, rotate: 5 },
  { x: -16, y: 2, rotate: -6 },
  { x: 6, y: 10, rotate: 4 },
] as const;

export type PolaroidItem = {
  src: string;
  title: string;
  date: string;
  body: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function RingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-11 stroke-wine" fill="none" aria-hidden>
      <rect x="10" y="18" width="28" height="20" rx="2.5" strokeWidth="1.4" />
      <path d="M16 18v-3a8 8 0 0 1 16 0v3" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="28" r="5" strokeWidth="1.4" />
      <circle cx="24" cy="28" r="2.2" strokeWidth="1.2" />
    </svg>
  );
}

export function PolaroidStack({
  items,
  kicker,
  title,
  how,
  lead,
  body,
}: {
  items: PolaroidItem[];
  kicker: string;
  title: string;
  how: string;
  lead: string;
  body: string;
}) {
  const [pinned, setPinned] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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

      items.forEach((_, index) => {
        const node = cardRefs.current[index];
        if (!node) return;
        const slot = STACK[index % STACK.length];
        const local = easeOutCubic(clamp((progress - index * span) / 0.18, 0, 1));
        const rise = (1 - local) * 48;
        node.style.opacity = String(local);
        node.style.transform = `translate(-50%, calc(-50% + ${rise}vh)) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`;
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

  const copy = (
    <div className="max-w-md">
      <RingIcon />
      <p className="mt-5 font-script text-2xl text-rose">{kicker}</p>
      <h2 className="mt-3 font-display text-5xl leading-[0.9] md:text-7xl">{title}</h2>
      <p className="mt-5 font-script text-xl text-rose/90">{how}</p>
      <h3 className="mt-8 font-display text-3xl leading-snug md:text-4xl">{lead}</h3>
      <p className="mt-5 text-base leading-8 text-wine/75">{body}</p>
    </div>
  );

  if (!pinned) {
    return (
      <section id="story" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="page-frame mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto h-[420px] w-full max-w-md">
            {items.slice(0, 4).map((item, index) => {
              const slot = STACK[index % STACK.length];
              return (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2 w-[min(62%,15rem)] bg-white p-[0.7rem] pb-3 shadow-[0_18px_50px_rgba(84,39,46,0.16)]"
                  style={{
                    zIndex: index + 1,
                    transform: `translate(-50%, -50%) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`,
                  }}
                >
                  <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="240px" quiet />
                  <div className="mt-2 px-1">
                    <p className="font-display text-lg leading-none">{item.title}</p>
                    <p className="mt-1 text-xs text-wine/50">{item.date}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Reveal>{copy}</Reveal>
        </div>
      </section>
    );
  }

  return (
    <section
      id="story"
      ref={rootRef}
      className="relative scroll-mt-24 bg-cream"
      style={{ height: `${(1.25 + items.length * 0.58) * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="page-frame relative mx-auto grid h-full max-w-[1100px] items-center px-6 md:grid-cols-2 md:gap-10 md:px-10">
          <div className="relative h-[70vh] w-full md:h-full">
            {items.map((item, index) => {
              const slot = STACK[index % STACK.length];
              return (
                <div
                  key={item.title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="absolute left-1/2 top-1/2 w-[min(58vw,15.5rem)] bg-white p-[0.7rem] pb-3 shadow-[0_18px_50px_rgba(84,39,46,0.16)] will-change-transform md:w-[min(22vw,16.5rem)]"
                  style={{
                    zIndex: index + 2,
                    opacity: 0,
                    transform: `translate(-50%, calc(-50% + 48vh)) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`,
                  }}
                >
                  <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="280px" quiet />
                  <div className="mt-2 px-1">
                    <p className="font-display text-lg leading-none md:text-xl">{item.title}</p>
                    <p className="mt-1 text-xs text-wine/50">{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 hidden md:block">{copy}</div>
        </div>

        <div className="absolute inset-x-6 bottom-10 z-10 md:hidden">
          <Reveal>{copy}</Reveal>
        </div>
      </div>
    </section>
  );
}
