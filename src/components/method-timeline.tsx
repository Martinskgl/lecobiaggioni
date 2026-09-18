"use client";

import { useEffect, useRef } from "react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const ROTATES = [-7, 8, -5] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function MethodTimeline({
  kicker,
  title,
  lead,
  steps,
  photos,
}: {
  kicker: string;
  title: string;
  lead: string;
  steps: { n: string; title: string; body: string }[];
  photos: readonly string[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.transform = "scaleY(1)";
      dotRefs.current.forEach((dot) => dot?.classList.add("is-reached"));
      return;
    }

    let frame = 0;

    const paint = () => {
      const rect = track.getBoundingClientRect();
      if (rect.height <= 0) return;

      const marker = window.innerHeight * 0.45;
      const progress = clamp((marker - rect.top) / rect.height, 0, 1);
      fill.style.transform = `scaleY(${progress})`;

      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        const d = dot.getBoundingClientRect();
        const center = d.top + d.height / 2;
        dot.classList.toggle("is-reached", center <= marker + 6);
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
  }, [steps.length]);

  return (
    <section id="theday" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="font-script text-2xl text-rose">{kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{lead}</p>
        </Reveal>

        <div className="relative mt-20">
          <div
            ref={trackRef}
            className="absolute bottom-8 left-4 top-8 w-0.5 overflow-hidden bg-wine/15 md:left-1/2 md:-translate-x-1/2"
          >
            <div ref={fillRef} className="timeline-fill absolute left-0 top-0 h-full w-full bg-wine" />
          </div>

          <div className="grid gap-16 md:gap-24">
            {steps.map((step, index) => {
              const photoLeft = index % 2 === 0;
              const polaroid = (
                <div
                  className={`polaroid w-[min(72%,17.5rem)] ${photoLeft ? "md:ml-auto md:mr-6" : "md:ml-6"}`}
                  style={{ rotate: `${ROTATES[index % ROTATES.length]}deg` }}
                >
                  <Photo src={photos[index] ?? photos[0]} alt="" className="aspect-[4/5]" sizes="320px" zoom />
                </div>
              );
              const copy = (
                <div className={photoLeft ? "md:pl-6" : "md:pr-6 md:text-right"}>
                  <p className="font-display text-5xl leading-none text-wine/25 md:text-6xl">{step.n}</p>
                  <h3 className="mt-4 font-display text-4xl leading-none md:text-5xl">{step.title}</h3>
                  <p className={`mt-4 max-w-md text-base leading-8 text-wine/75 ${photoLeft ? "" : "md:ml-auto"}`}>
                    {step.body}
                  </p>
                </div>
              );

              return (
                <Reveal key={step.n} className="relative grid items-center gap-8 md:grid-cols-2 md:gap-x-24">
                  <span
                    ref={(node) => {
                      dotRefs.current[index] = node;
                    }}
                    className="timeline-dot absolute left-4 top-8 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5 md:size-4" aria-hidden>
                      <path d="M12 20.4S3.6 15.2 3.6 9.4C3.6 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 0.6-1.2 2-2 3.6-2 2.6 0 4.8 2 4.8 4.9 0 5.8-8.4 11-8.4 11z" />
                    </svg>
                  </span>
                  <div className={`pl-10 md:pl-0 ${photoLeft ? "" : "md:order-2"}`}>{polaroid}</div>
                  <div className={`pl-10 md:pl-0 ${photoLeft ? "" : "md:order-1"}`}>{copy}</div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
