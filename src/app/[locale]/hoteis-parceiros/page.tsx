import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { getDictionary, localeFromParam } from "@/lib/i18n";
import { photos } from "@/lib/photos";
import { localizedPath } from "@/lib/site";
import { ui } from "@/lib/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const dict = await getDictionary((await params).locale);
  return { title: `${dict.hotelsPage.title} — Leco Biaggìoni`, description: dict.hotelsPage.meta };
}

export default async function HotelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const loc = localeFromParam(locale);
  const copy = ui[loc];

  return (
    <article className="bg-cream text-wine">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Photo src={photos.hotel} alt={dict.hotelsPage.featuredName} fillParent priority kenburns />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/50 to-transparent" />
        <div className="absolute bottom-12 left-6 text-cream md:left-12">
          <p className="font-script text-2xl text-rose">{dict.nav.hotels}</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">{dict.hotelsPage.title}</h1>
          <p className="mt-4 max-w-xl font-display text-2xl italic">{dict.hotelsPage.quote}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-6 py-24 md:grid-cols-3 md:px-10">
        {[
          { src: photos.hotel, title: dict.hotelsPage.featuredName, body: dict.hotelsPage.featuredText },
          { src: photos.suite, title: copy.hotelExtra[0].title, body: copy.hotelExtra[0].body },
          { src: photos.boutique, title: copy.hotelExtra[1].title, body: copy.hotelExtra[1].body },
        ].map((hotel) => (
          <Reveal key={hotel.title}>
            <Photo src={hotel.src} alt={hotel.title} className="aspect-[4/5]" sizes="33vw" zoom />
            <h2 className="mt-6 font-display text-3xl">{hotel.title}</h2>
            <p className="mt-3 text-sm leading-7 text-wine/75">{hotel.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="px-6 pb-28 text-center">
        <Link href={`${localizedPath(loc)}#rsvp`} className="btn-wine">
          {dict.hotelsPage.cta}
        </Link>
      </section>
    </article>
  );
}
