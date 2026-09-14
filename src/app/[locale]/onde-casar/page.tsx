import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { getDictionary, localeFromParam } from "@/lib/i18n";
import { photos, venuePhotos } from "@/lib/photos";
import { localizedPath, venueSlugs } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const dict = await getDictionary((await params).locale);
  return { title: `${dict.venuesPage.title} — Leco Biaggìoni`, description: dict.venuesPage.meta };
}

export default async function VenuesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const loc = localeFromParam(locale);

  return (
    <article className="bg-cream pt-24 text-wine">
      <section className="px-6 pb-12 md:px-10">
        <p className="font-script text-2xl text-rose">{dict.nav.venues}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{dict.venuesPage.title}</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-wine/75">{dict.venuesPage.lead}</p>
      </section>
      <div className="grid md:grid-cols-2">
        {venueSlugs.map((slug, index) => {
          const card = dict.venuesHome.cards[slug];
          return (
            <Link key={slug} href={localizedPath(loc, `/onde-casar/${slug}`)} className="group relative min-h-[70vh]">
              <Photo src={index === 0 ? photos.rio : venuePhotos[slug]} alt={card.title} fillParent zoom />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/55 to-transparent" />
              <div className="absolute bottom-10 left-6 text-cream md:left-10">
                <p className="font-script text-xl text-rose">0{index + 1}</p>
                <h2 className="mt-2 font-display text-4xl md:text-6xl">{card.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
