import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

function CocktailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-11 stroke-wine" fill="none" aria-hidden>
      <path d="M14 10h20l-8.5 14v8h5v4H17.5v-4h5v-8L14 10z" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M18 14h12" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="30" cy="16" r="1.6" fill="currentColor" stroke="none" className="fill-wine" />
    </svg>
  );
}

function HeartDivider() {
  return (
    <div className="pointer-events-none absolute inset-y-6 left-1/2 z-10 hidden w-px -translate-x-1/2 md:block" aria-hidden>
      <div className="absolute inset-0 bg-rose/35" />
      <span className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-cream">
        <svg viewBox="0 0 24 24" className="size-4 fill-rose/70" aria-hidden>
          <path d="M12 20.4S3.6 15.2 3.6 9.4C3.6 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 0.6-1.2 2-2 3.6-2 2.6 0 4.8 2 4.8 4.9 0 5.8-8.4 11-8.4 11z" />
        </svg>
      </span>
    </div>
  );
}

export function GatheringSplit({
  caption,
  kicker,
  title,
  body,
  meta,
  photo,
}: {
  caption: string;
  kicker: string;
  title: string;
  body: string | string[];
  meta: { label: string; value: string }[];
  photo: string;
}) {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="page-frame relative mx-auto max-w-[1100px]">
        <HeartDivider />

        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <figure className="mx-auto w-full max-w-md bg-white p-3 pb-8 shadow-[0_18px_50px_rgba(84,39,46,0.12)] md:max-w-none">
              <Photo src={photo} alt="" className="aspect-square" sizes="480px" quiet />
              <figcaption className="mt-5 px-2 text-center font-display text-2xl leading-snug italic md:text-[1.7rem]">
                {caption}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <CocktailIcon />
            <p className="mt-5 text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{kicker}</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">{title}</h2>
            {(Array.isArray(body) ? body : [body]).map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-md text-base leading-8 text-wine/75">
                {paragraph}
              </p>
            ))}

            <dl className="mt-10 max-w-md">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-t border-wine/12 py-4 first:border-t-0 first:pt-0"
                >
                  <dt className="font-display text-xl">{item.label}</dt>
                  <dd className="text-right text-sm leading-6 text-wine/70 md:text-base">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
