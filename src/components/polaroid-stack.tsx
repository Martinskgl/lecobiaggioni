"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const STACK = [
  { x: -18, y: 10, rotate: -8 },
  { x: 14, y: -6, rotate: 7 },
  { x: -6, y: 4, rotate: -3 },
  { x: 10, y: 12, rotate: 5 },
  { x: -12, y: -8, rotate: -6 },
  { x: 4, y: 6, rotate: 4 },
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
      const span = 0.72 / Math.max(items.length, 1);

      items.forEach((_, index) => {
        const node = cardRefs.current[index];
        if (!node) return;
        const slot = STACK[index % STACK.length];
        const local = easeOutCubic(clamp((progress - index * span) / 0.18, 0, 1));
        const rise = (1 - local) * 42;
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
    <Reveal className="relative z-10 max-w-md">
      <p className="font-script text-2xl text-rose">{kicker}</p>
      <h2 className="mt-4 font-display text-5xl leading-[0.9] md:text-7xl">{title}</h2>
      <p className="mt-6 text-sm tracking-[0.08em] text-wine/55 uppercase">{how}</p>
      <h3 className="mt-10 font-display text-3xl leading-snug md:text-4xl">{lead}</h3>
      <p className="mt-6 text-base leading-8 text-wine/75">{body}</p>
    </Reveal>
  );

  if (!pinned) {
    return (
      <section id="story" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="page-frame mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
          {copy}
          <div className="relative mx-auto h-[420px] w-full max-w-md">
            {items.slice(0, 4).map((item, index) => {
              const slot = STACK[index % STACK.length];
              return (
                <div
                  key={item.title}
                  className="polaroid absolute left-1/2 top-1/2 w-[min(58%,15rem)]"
                  style={{
                    transform: `translate(-50%, -50%) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`,
                    zIndex: index + 1,
                  }}
                >
                  <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="240px" quiet />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="story"
      ref={rootRef}
      className="relative scroll-mt-24 bg-cream"
      style={{ height: `${(1.2 + items.length * 0.55) * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="page-frame absolute inset-y-0 left-0 z-10 flex w-full max-w-[520px] items-center px-6 md:px-10 lg:left-[max(0px,calc((100%-1200px)/2))]">
          {copy}
        </div>

        {items.map((item, index) => {
          const slot = STACK[index % STACK.length];
          return (
            <div
              key={item.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="polaroid absolute left-1/2 top-1/2 z-[2] w-[min(42vw,15.5rem)] will-change-transform md:left-[62%] md:w-[min(28vw,17rem)]"
              style={{
                zIndex: index + 2,
                opacity: 0,
                transform: `translate(-50%, calc(-50% + 42vh)) translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg)`,
              }}
            >
              <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="280px" quiet />
            </div>
          );
        })}
      </div>
    </section>
  );
}
