import { Reveal } from "@/components/reveal";
import { SinceClock } from "@/components/since-clock";
import { brand } from "@/lib/site";
import type { UiCopy } from "@/lib/ui";

function CoupleMark() {
  return (
    <svg viewBox="0 0 120 72" className="mx-auto h-16 w-auto stroke-wine md:h-20" fill="none" aria-hidden>
      <circle cx="42" cy="18" r="8" strokeWidth="1.5" />
      <path d="M28 52c2-12 8-18 14-18s12 6 14 18" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="78" cy="18" r="8" strokeWidth="1.5" />
      <path d="M64 52c2-12 8-18 14-18s12 6 14 18" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 28c4 4 8 4 12 0" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M36 10c2-6 8-8 12-2M72 10c2-6 8-8 12-2" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function SaveSince({
  copy,
  body,
}: {
  copy: UiCopy;
  body: string;
}) {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28">
      <div className="page-frame mx-auto max-w-[760px] text-center">
        <Reveal>
          <CoupleMark />
          <p className="mt-8 font-display text-2xl text-wine/70 md:text-3xl">{brand.name}</p>
          <h2 className="mt-8 font-display text-5xl leading-[0.92] md:text-7xl">
            {copy.saveTitle}
            <span className="mt-3 block">{copy.saveDate}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-wine/75 md:text-lg">{body}</p>
        </Reveal>
        <div className="mt-16 md:mt-20">
          <SinceClock copy={copy} />
        </div>
      </div>
    </section>
  );
}
