import { pillClass } from "@/components/destination-cta";
import { Photo } from "@/components/photo";
import { photos as allPhotos } from "@/lib/photos";

const DEFAULT_PHOTOS = [allPhotos.rio, allPhotos.christ, allPhotos.terrace] as const;

export type MemoryCard = { title: string; text: string; action?: string; href?: string };

/** Cards com imagem placeholder (seção #formas da Home). */
export function MemoryCards({
  id,
  title,
  cards,
  photos: photosProp,
  paragraph,
  cta,
}: {
  id?: string;
  title: string;
  cards: MemoryCard[];
  photos?: readonly string[];
  paragraph?: string;
  cta?: { label: string; href: string };
}) {
  const photos = photosProp?.length ? photosProp : DEFAULT_PHOTOS;
  return (
    <section id={id} className={`${id ? "scroll-mt-24 " : ""}bg-cream px-6 py-16 md:px-10 md:py-20`}>
      <div className="page-frame mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-[1.05] text-wine md:text-5xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const content = (
              <>
                <Photo
                  src={photos[index % photos.length]}
                  alt={card.title}
                  className="aspect-[4/5]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  zoom
                />
                <h3 className="mt-5 font-display text-3xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-wine/75">{card.text}</p>
                {card.action ? <span className="mt-4 inline-block underline">{card.action}</span> : null}
              </>
            );
            return card.href ? (
              <a key={card.title} href={card.href} className="group block">
                {content}
              </a>
            ) : (
              <div key={card.title} className="group block">
                {content}
              </div>
            );
          })}
        </div>
        {paragraph ? (
          <p className="mx-auto mt-12 max-w-xl text-center text-[0.95rem] leading-7 text-wine/70 md:text-base md:leading-8">
            {paragraph}
          </p>
        ) : null}
        {cta ? (
          <div className="text-center">
            <a href={cta.href} className={pillClass}>
              {cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
