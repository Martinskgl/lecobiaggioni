import { Reveal } from "@/components/reveal";

function CoupleMark() {
  return (
    <svg viewBox="0 0 120 72" className="mx-auto h-14 w-auto stroke-wine md:h-16" fill="none" aria-hidden>
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
  kicker,
  title,
  paragraphs,
  note,
}: {
  kicker: string;
  title: string;
  paragraphs: string[];
  note?: string;
}) {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-24">
      <div className="page-frame mx-auto max-w-[720px] text-center">
        <Reveal>
          <CoupleMark />
          <p className="mt-6 font-display text-xl tracking-wide text-wine md:text-2xl">{kicker}</p>
          <h2 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-wine md:text-6xl">{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mx-auto mt-7 max-w-xl text-[0.95rem] leading-7 text-wine/70 md:text-base md:leading-8">
              {paragraph}
            </p>
          ))}
          {note ? (
            <p className="mx-auto mt-8 max-w-lg border-t border-wine/15 pt-6 text-[0.82rem] leading-6 text-wine/60 italic">{note}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
