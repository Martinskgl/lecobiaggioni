"use client";

import { useState } from "react";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-wine/15">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left md:py-6"
              onClick={() => setOpen(active ? null : index)}
              aria-expanded={active}
            >
              <span className="font-display text-xl leading-snug md:text-2xl">{item.q}</span>
              <span className="mt-1 shrink-0 text-lg text-rose">{active ? "–" : "+"}</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-base leading-8 text-wine/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
