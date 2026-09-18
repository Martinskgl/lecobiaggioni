"use client";

import { useEffect, useRef } from "react";
import { Photo } from "@/components/photo";

export function PhotoCarousel({ photos }: { photos: readonly string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let paused = false;

    const step = () => {
      if (!paused) {
        x -= 0.45;
        const loopAt = track.scrollWidth / 2;
        if (-x >= loopAt) x = 0;
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      frame = window.requestAnimationFrame(step);
    };

    const stop = () => {
      paused = true;
    };
    const start = () => {
      paused = false;
    };

    track.addEventListener("pointerenter", stop);
    track.addEventListener("pointerleave", start);
    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener("pointerenter", stop);
      track.removeEventListener("pointerleave", start);
    };
  }, []);

  const loop = [...photos, ...photos];

  return (
    <section className="overflow-hidden bg-cream py-10 md:py-14">
      <div ref={trackRef} className="flex w-max gap-5 will-change-transform md:gap-7">
        {loop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="carousel-card w-[min(72vw,22rem)] shrink-0 overflow-hidden md:w-[26rem]"
          >
            <Photo src={src} alt="" className="aspect-[4/3]" sizes="420px" quiet />
          </div>
        ))}
      </div>
    </section>
  );
}
