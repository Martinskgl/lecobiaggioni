"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Photo } from "@/components/photo";

const POSES = [
  { rotate: -10, x: "7vw", y: "0vh" },
  { rotate: 8, x: "-8vw", y: "6vh" },
  { rotate: -6, x: "10vw", y: "-2vh" },
  { rotate: 12, x: "-3vw", y: "8vh" },
  { rotate: -9, x: "-10vw", y: "3vh" },
  { rotate: 5, x: "6vw", y: "5vh" },
] as const;

export type PolaroidItem = {
  src: string;
  title: string;
  date: string;
  body: string;
};

function PolaroidCard({
  item,
  pose,
  flipLabel,
}: {
  item: PolaroidItem;
  pose: (typeof POSES)[number];
  flipLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="origin-center [transform-style:preserve-3d]"
      style={{
        translate: `${pose.x} ${pose.y}`,
        rotate: `${pose.rotate}deg`,
      }}
    >
      <button
        type="button"
        className={`pointer-events-auto flip flip-click polaroid-flip ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((value) => !value)}
        aria-label={`${item.title}. ${flipLabel}`}
      >
        <div className="flip-inner">
          <div className="flip-face polaroid overflow-hidden">
            <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="320px" quiet />
            <div className="px-1 pt-3 text-left">
              <h3 className="font-display text-2xl leading-none text-wine">{item.title}</h3>
              <p className="mt-1 font-script text-lg text-rose">{item.date}</p>
            </div>
            <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[0.58rem] font-semibold tracking-[0.16em] text-wine uppercase">
              {flipLabel}
            </span>
          </div>
          <div className="flip-face flip-back flex flex-col justify-end bg-wine p-6 text-left text-cream shadow-[0_18px_50px_rgba(84,39,46,0.16)]">
            <p className="font-script text-lg text-rose">{item.date}</p>
            <h3 className="mt-1 font-display text-3xl leading-none">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-cream/85">{item.body}</p>
          </div>
        </div>
      </button>
    </div>
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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPinned(false);
    }
  }, []);

  if (!pinned) {
    return (
      <section className="bg-cream px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">{clock}</div>
        <div className="relative mx-auto mt-16 h-[560px] max-w-[720px]">
          {items.map((item, index) => (
            <div key={item.title} className="absolute bottom-8 right-4 md:right-16">
              <PolaroidCard item={item} pose={POSES[index % POSES.length]} flipLabel={flipLabel} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-cream">
      <div className="sticky top-0 z-0 flex h-[100svh] items-start px-6 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-[1400px]">{clock}</div>
      </div>

      <div className="relative -mt-[100svh]">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="pointer-events-none sticky top-0 flex h-[100svh] items-end justify-center overflow-visible px-4 pb-[8vh] sm:pb-[6vh]"
            style={{ zIndex: index + 1 }}
          >
            <PolaroidCard item={item} pose={POSES[index % POSES.length]} flipLabel={flipLabel} />
          </div>
        ))}
      </div>
    </section>
  );
}
