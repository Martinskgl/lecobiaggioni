"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Photo } from "@/components/photo";

const DESKTOP_SLOTS = [
  { x: 18, y: 58, rotate: -9 },
  { x: 32, y: 52, rotate: 8 },
  { x: 46, y: 62, rotate: -6 },
  { x: 59, y: 50, rotate: 11 },
  { x: 72, y: 60, rotate: -8 },
  { x: 84, y: 54, rotate: 5 },
] as const;

const MOBILE_SLOTS = [
  { x: 20, y: 58, rotate: -8 },
  { x: 34, y: 52, rotate: 9 },
  { x: 47, y: 64, rotate: -6 },
  { x: 60, y: 50, rotate: 10 },
  { x: 72, y: 61, rotate: -7 },
  { x: 82, y: 55, rotate: 5 },
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

function PolaroidCard({ item }: { item: PolaroidItem }) {
  return (
    <div className="polaroid polaroid-collect">
      <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="240px" quiet />
    </div>
  );
}

export function PolaroidStack({
  items,
  clock,
}: {
  items: PolaroidItem[];
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
      const travel = root.offsetHeight - window.innerHeight;
      if (travel <= 0) return;

      const progress = clamp(-root.getBoundingClientRect().top / travel, 0, 1);
      const mobile = window.innerWidth < 768;
      const slots = mobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
      const shrink = easeInOut(clamp((progress - 0.14) / 0.22, 0, 1));

      if (clockRef.current) {
        const scale = lerp(1, mobile ? 0.62 : 0.52, shrink);
        clockRef.current.style.maxWidth = `${lerp(1400, mobile ? 220 : 280, shrink)}px`;
        clockRef.current.style.transform = `scale(${scale})`;
      }

      const firstAt = 0.26;
      const span = 0.58 / Math.max(items.length, 1);

      items.forEach((_, index) => {
        const node = cardRefs.current[index];
        if (!node) return;
        const slot = slots[index % slots.length];
        const local = easeOutCubic(clamp((progress - (firstAt + index * span)) / 0.16, 0, 1));
        const fromBelow = lerp(mobile ? 42 : 48, 0, local);
        node.style.left = `${slot.x}%`;
        node.style.top = `${slot.y}%`;
        node.style.opacity = String(local);
        node.style.transform = `translate(-50%, calc(-50% + ${fromBelow}vh)) rotate(${slot.rotate}deg)`;
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
        <div className="relative mx-auto mt-16 h-[420px] w-full max-w-[1100px] overflow-hidden md:h-[520px]">
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
                <PolaroidCard item={item} />
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
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-cream">
        <div className="absolute inset-x-5 top-24 z-20 md:inset-x-10 md:top-28">
          <div
            ref={clockRef}
            className="clock-pin w-full max-w-[1400px] origin-top-left will-change-transform"
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
              className="absolute z-[2] will-change-transform"
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                zIndex: index + 2,
                opacity: 0,
                transform: `translate(-50%, calc(-50% + 48vh)) rotate(${slot.rotate}deg)`,
              }}
            >
              <PolaroidCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
