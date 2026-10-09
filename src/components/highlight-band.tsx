import { pillClass } from "@/components/destination-cta";
import { Photo } from "@/components/photo";
import { photos } from "@/lib/photos";

/** Faixa de destaque (fundo rosado sobre foto). */
export function HighlightBand({
  id,
  title,
  paragraphs,
  cta,
  photo = photos.flowers,
}: {
  id?: string;
  /** Foto de fundo (atrás do véu rosado). */
  photo?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <section id={id} className={`${id ? "scroll-mt-24 " : ""}bg-cream px-6 py-10 md:px-10 md:py-14`}>
      <div className="page-frame relative mx-auto min-h-[70vh] max-w-[1100px] overflow-hidden rounded-[0.5rem] md:min-h-[76vh]">
        <Photo src={photo} alt="" fillParent quiet sizes="(max-width: 1100px) 100vw, 1100px" />
        <div className={`absolute inset-0 ${photo.startsWith("/") ? "bg-cream/70" : "bg-cream/55"}`} />
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center md:min-h-[76vh] md:px-16">
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-xl text-base leading-8 text-wine/75">
              {paragraph}
            </p>
          ))}
          {cta ? (
            <a href={cta.href} className={pillClass}>
              {cta.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
