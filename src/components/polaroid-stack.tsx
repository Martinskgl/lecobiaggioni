import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const STACK = [
  { rotate: -7, x: 8, y: 0, z: 1 },
  { rotate: 5, x: 42, y: 18, z: 2 },
] as const;

export type PolaroidItem = {
  src: string;
  title: string;
  date: string;
  body: string;
};

function RingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-11 stroke-wine" fill="none" aria-hidden>
      <rect x="10" y="18" width="28" height="20" rx="2.5" strokeWidth="1.4" />
      <path d="M16 18v-3a8 8 0 0 1 16 0v3" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="28" r="5" strokeWidth="1.4" />
      <circle cx="24" cy="28" r="2.2" strokeWidth="1.2" />
    </svg>
  );
}

export function PolaroidStack({
  items,
  kicker,
  title,
  how,
  lead,
  body,
}: {
  items: PolaroidItem[];
  kicker: string;
  title: string;
  how: string;
  lead: string;
  body: string;
}) {
  const shown = items.slice(0, 2);

  return (
    <section id="story" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="page-frame mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto h-[420px] w-full max-w-md md:h-[480px]">
          {shown.map((item, index) => {
            const slot = STACK[index % STACK.length];
            return (
              <div
                key={item.title}
                className="absolute w-[min(68%,16.5rem)] bg-white p-[0.7rem] pb-3 shadow-[0_18px_50px_rgba(84,39,46,0.16)]"
                style={{
                  left: `${slot.x}%`,
                  top: `${slot.y}%`,
                  zIndex: slot.z,
                  rotate: `${slot.rotate}deg`,
                }}
              >
                <Photo src={item.src} alt={item.title} className="aspect-[4/5]" sizes="280px" quiet />
                <div className="mt-2 px-1 pb-1">
                  <p className="font-display text-xl leading-none text-wine">{item.title}</p>
                  <p className="mt-1 text-xs tracking-[0.04em] text-wine/50">{item.date}</p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="max-w-md lg:justify-self-end">
          <RingIcon />
          <p className="mt-5 font-script text-2xl text-rose">{kicker}</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9] md:text-7xl">{title}</h2>
          <p className="mt-5 font-script text-xl text-rose/90">{how}</p>
          <h3 className="mt-8 font-display text-3xl leading-snug md:text-4xl">{lead}</h3>
          <p className="mt-5 text-base leading-8 text-wine/75">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
