"use client";

import { useState } from "react";
import { Photo } from "@/components/photo";

export function FlipCard({
  src,
  title,
  date,
  body,
  flipLabel,
}: {
  src: string;
  title: string;
  date: string;
  body: string;
  flipLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip group relative h-[420px] w-full text-left md:h-[520px] ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((value) => !value)}
      aria-label={`${title}. ${flipLabel}`}
    >
      <div className="flip-inner">
        <div className="flip-face overflow-hidden">
          <Photo src={src} alt={title} className="h-full min-h-[420px] md:min-h-[520px]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
            <p className="font-script text-xl text-rose">{date}</p>
            <h3 className="mt-1 text-3xl leading-none md:text-4xl">{title}</h3>
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-wine uppercase">
            {flipLabel}
          </span>
        </div>
        <div className="flip-back flex flex-col justify-end bg-wine p-8 text-cream">
          <p className="font-script text-xl text-rose">{date}</p>
          <h3 className="mt-2 text-4xl leading-none">{title}</h3>
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/85">{body}</p>
        </div>
      </div>
    </button>
  );
}
