/** Botão pill vinho do CTA da seção #destination (reutilizado onde o Word pede um botão). */
export const pillClass =
  "mt-8 inline-flex rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-blush";

/** Nota legal pequena (mesmo estilo da nota do bloco Brazil Wedding Legal em #story). */
export const noteClass = "mt-5 text-[0.68rem] leading-5 text-wine/45";

export function DestinationCta({
  id,
  title,
  paragraphs,
  cta,
  note,
}: {
  id?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
  note?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="page-frame mx-auto max-w-[720px] text-center">
        <h2 className="mt-4 font-display text-4xl leading-[0.95] text-wine md:text-6xl">{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mx-auto mt-6 max-w-xl text-base leading-8 text-wine/75">{paragraph}</p>
        ))}
        {cta ? (
          <a href={cta.href} className={pillClass}>
            {cta.label}
          </a>
        ) : null}
        {note ? <p className={noteClass}>{note}</p> : null}
      </div>
    </section>
  );
}
