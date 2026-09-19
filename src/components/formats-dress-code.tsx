import { Reveal } from "@/components/reveal";

const SWATCHES = ["#54272e", "#db465d", "#c4a8ad", "#8a5a62"] as const;

function DetailsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto size-12 stroke-wine" fill="none" aria-hidden>
      <path d="M16 34c0-6 4-10 8-14 4 4 8 8 8 14" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20 34h8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 20c2-4 4.5-7 6-9 1.5 2 4 5 6 9" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="12" r="1.5" fill="currentColor" className="fill-wine" stroke="none" />
    </svg>
  );
}

function PackIcon({ variant }: { variant: "a" | "b" }) {
  if (variant === "a") {
    return (
      <svg viewBox="0 0 48 48" className="mx-auto size-11 stroke-wine" fill="none" aria-hidden>
        <rect x="12" y="14" width="24" height="22" rx="2" strokeWidth="1.4" />
        <path d="M18 14v-2a6 6 0 0 1 12 0v2" strokeWidth="1.4" />
        <path d="M12 22h24" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="mx-auto size-11 stroke-wine" fill="none" aria-hidden>
      <circle cx="18" cy="22" r="6" strokeWidth="1.4" />
      <circle cx="30" cy="22" r="6" strokeWidth="1.4" />
      <path d="M18 28c2.5 4 9.5 4 12 0" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function FormatsDressCode({
  kicker,
  title,
  lead,
  packATitle,
  packABody,
  packBTitle,
  packBBody,
}: {
  kicker: string;
  title: string;
  lead: string;
  packATitle: string;
  packABody: string;
  packBTitle: string;
  packBBody: string;
}) {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="page-frame mx-auto max-w-[1100px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <DetailsIcon />
          <p className="mt-5 text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{kicker}</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          <p className="mt-6 text-base leading-8 text-wine/75">{lead}</p>
          <div className="mt-10 flex items-center justify-center gap-4 md:gap-5">
            {SWATCHES.map((color) => (
              <span
                key={color}
                className="size-14 rounded-full md:size-16"
                style={{ background: color }}
                aria-hidden
              />
            ))}
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
          <div className="pointer-events-none absolute inset-y-4 left-1/2 hidden w-px -translate-x-1/2 bg-rose/30 md:block" aria-hidden>
            <span className="absolute left-1/2 top-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-cream">
              <svg viewBox="0 0 24 24" className="size-3.5 fill-rose/70" aria-hidden>
                <path d="M12 20.4S3.6 15.2 3.6 9.4C3.6 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 0.6-1.2 2-2 3.6-2 2.6 0 4.8 2 4.8 4.9 0 5.8-8.4 11-8.4 11z" />
              </svg>
            </span>
          </div>

          <Reveal className="px-2 text-center md:px-12">
            <PackIcon variant="a" />
            <h3 className="mt-5 font-display text-4xl md:text-5xl">{packATitle}</h3>
            <p className="mx-auto mt-5 max-w-sm text-base leading-8 text-wine/75">{packABody}</p>
          </Reveal>

          <div className="flex items-center justify-center md:hidden" aria-hidden>
            <span className="h-px w-24 bg-rose/30" />
            <svg viewBox="0 0 24 24" className="mx-3 size-3.5 fill-rose/70">
              <path d="M12 20.4S3.6 15.2 3.6 9.4C3.6 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 0.6-1.2 2-2 3.6-2 2.6 0 4.8 2 4.8 4.9 0 5.8-8.4 11-8.4 11z" />
            </svg>
            <span className="h-px w-24 bg-rose/30" />
          </div>

          <Reveal className="px-2 text-center md:px-12">
            <PackIcon variant="b" />
            <h3 className="mt-5 font-display text-4xl md:text-5xl">{packBTitle}</h3>
            <p className="mx-auto mt-5 max-w-sm text-base leading-8 text-wine/75">{packBBody}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
