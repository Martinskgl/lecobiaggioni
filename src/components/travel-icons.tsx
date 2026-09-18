function IconPlane() {
  return (
    <svg viewBox="0 0 48 48" className="size-12 stroke-wine" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="14" strokeWidth="1.4" />
      <path
        d="M14 26.5c6-1.5 10-4.2 16.5-9.5l2.2 2.2c-4.8 6.2-7.2 10.4-8.4 16.5l-3.1-3.8-4.6.9-1.4-1.4.9-4.6L14 26.5Z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShuttle() {
  return (
    <svg viewBox="0 0 48 48" className="size-12 stroke-wine" fill="none" aria-hidden>
      <rect x="10" y="14" width="28" height="16" rx="3" strokeWidth="1.4" />
      <path d="M10 22h28M16 30v4M32 30v4M14 18h6M28 18h6" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="17" cy="34" r="2" strokeWidth="1.4" />
      <circle cx="31" cy="34" r="2" strokeWidth="1.4" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg viewBox="0 0 48 48" className="size-12 stroke-wine" fill="none" aria-hidden>
      <path
        d="M12 28h24l-2.2-8.2A3 3 0 0 0 30.9 17H17.1a3 3 0 0 0-2.9 2.8L12 28Z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10 28h28v4a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-4Z" strokeWidth="1.4" />
      <circle cx="16.5" cy="34.5" r="2.2" strokeWidth="1.4" />
      <circle cx="31.5" cy="34.5" r="2.2" strokeWidth="1.4" />
    </svg>
  );
}

const ICONS = [IconPlane, IconShuttle, IconCar] as const;

export function TravelIcons({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="page-frame mx-auto max-w-[1100px] text-center">
        <p className="font-script text-2xl text-rose">{kicker}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
        <div className="mt-16 grid gap-12 text-left md:grid-cols-3 md:gap-10">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={item.title} className="flex flex-col items-start">
                <Icon />
                <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-wine/75">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
