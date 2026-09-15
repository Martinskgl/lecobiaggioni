import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const ROTATES = [-7, 8, -5] as const;

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
  return (
    <section id="theday" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="font-script text-2xl text-rose">{kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{lead}</p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute bottom-8 left-4 top-8 w-px bg-wine/15 md:left-1/2 md:-translate-x-1/2" />

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
                  <span className="absolute left-4 top-8 z-10 size-2.5 -translate-x-1/2 rounded-full bg-wine md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
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
