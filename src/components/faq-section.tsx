import { FaqList } from "@/components/faq-list";

/** Bloco de FAQ: título à esquerda (sticky) + acordeão. */
export function FaqSection({
  id = "faq",
  title,
  items,
}: {
  id?: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{title}</h2>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
