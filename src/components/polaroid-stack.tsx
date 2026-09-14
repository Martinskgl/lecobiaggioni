"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Photo } from "@/components/photo";

const DESKTOP_SLOTS = [
  { x: 36, y: 46, rotate: -9 },
  { x: 48, y: 40, rotate: 8 },
  { x: 59, y: 50, rotate: -6 },
  { x: 70, y: 38, rotate: 11 },
  { x: 81, y: 48, rotate: -8 },
  { x: 91, y: 42, rotate: 5 },
] as const;

const MOBILE_SLOTS = [
  { x: 22, y: 42, rotate: -8 },
  { x: 38, y: 36, rotate: 9 },
  { x: 52, y: 46, rotate: -6 },
  { x: 66, y: 34, rotate: 10 },
  { x: 79, y: 44, rotate: -7 },
  { x: 91, y: 38, rotate: 5 },
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

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function PolaroidCard({
  item,
  flipLabel,
}: {
  item: PolaroidItem;
  flipLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`pointer-events-auto flip flip-click polaroid-flip polaroid-collect ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((value) => !value)}
      aria-label={`${item.title}. ${flipLabel}`}
    >
      <div className="flip-inner">
        <div className="flip-face polaroid overflow-hidden">
          <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="240px" quiet />
          <div className="px-1 pt-2 text-left">
            <h3 className="font-display text-lg leading-none text-wine md:text-xl">{item.title}</h3>
            <p className="mt-1 font-script text-sm text-rose md:text-base">{item.date}</p>
          </div>
          <span className="absolute right-2 top-2 rounded-full bg-cream/90 px-2.5 py-0.5 text-[0.52rem] font-semibold tracking-[0.16em] text-wine uppercase">
            {flipLabel}
          </span>
        </div>
        <div className="flip-face flip-back flex flex-col justify-end bg-wine p-4 text-left text-cream shadow-[0_18px_50px_rgba(84,39,46,0.16)]">
          <p className="font-script text-base text-rose">{item.date}</p>
          <h3 className="mt-1 font-display text-2xl leading-none">{item.title}</h3>
          <p className="mt-3 text-xs leading-5 text-cream/85 md:text-sm md:leading-6">{item.body}</p>
        </div>
      </div>
    </button>
  );
}

export function PolaroidStack({
  items,
  flipLabel,
  clock,
}: {
  items: PolaroidItem[];
  flipLabel: string;
  clock: ReactNode;
}) {
  const [pinned, setPinned] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);
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
      const stageHeight = window.innerHeight;
      const travel = root.offsetHeight - stageHeight;
      if (travel <= 0) return;

      const progress = clamp(-root.getBoundingClientRect().top / travel, 0, 1);
      const mobile = window.innerWidth < 768;
      const slots = mobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
      const shrink = easeInOut(clamp((progress - 0.14) / 0.22, 0, 1));

      if (clockRef.current) {
        const scale = lerp(1, mobile ? 0.72 : 0.78, shrink);
        const shiftY = lerp(0, stageHeight * (mobile ? 0.5 : 0.58), shrink);
        clockRef.current.style.maxWidth = `${lerp(1400, mobile ? 210 : 260, shrink)}px`;
        clockRef.current.style.transform = `translate3d(0, ${shiftY}px, 0) scale(${scale})`;
      }

      const firstAt = 0.26;
      const span = 0.58 / Math.max(items.length, 1);

      items.forEach((_, index) => {
        const node = cardRefs.current[index];
        if (!node) return;
        const slot = slots[index % slots.length];
        const local = easeOutCubic(clamp((progress - (firstAt + index * span)) / 0.16, 0, 1));
        const fromBelow = lerp(mobile ? 46 : 52, 0, local);
        node.style.left = `${slot.x}%`;
        node.style.top = `${slot.y}%`;
        node.style.opacity = String(local);
        node.style.transform = `translate(-50%, calc(-50% + ${fromBelow}vh)) rotate(${slot.rotate}deg)`;
        node.style.pointerEvents = local > 0.72 ? "auto" : "none";
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
      <section className="bg-cream px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">{clock}</div>
        <div className="relative mx-auto mt-16 h-[420px] max-w-[1100px] md:h-[520px]">
          {items.map((item, index) => {
            const slot = DESKTOP_SLOTS[index % DESKTOP_SLOTS.length];
            return (
              <div
                key={item.title}
                className="absolute"
                style={{
                  left: `${slot.x}%`,
                  top: `${slot.y}%`,
                  transform: `translate(-50%, -50%) rotate(${slot.rotate}deg)`,
                }}
              >
                <PolaroidCard item={item} flipLabel={flipLabel} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={rootRef}
      className="relative bg-cream"
      style={{ height: `${(1.45 + items.length * 0.72) * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-visible bg-cream">
        <div className="absolute inset-x-5 top-28 z-10 md:inset-x-10 md:top-36">
          <div
            ref={clockRef}
            className="clock-pin mx-auto w-full max-w-[1400px] origin-top-left will-change-transform"
          >
            {clock}
          </div>
        </div>

        {items.map((item, index) => {
          const slot = DESKTOP_SLOTS[index % DESKTOP_SLOTS.length];
          return (
            <div
              key={item.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="absolute will-change-transform"
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                zIndex: index + 2,
                opacity: 0,
                transform: `translate(-50%, calc(-50% + 52vh)) rotate(${slot.rotate}deg)`,
                pointerEvents: "none",
              }}
            >
              <PolaroidCard item={item} flipLabel={flipLabel} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
