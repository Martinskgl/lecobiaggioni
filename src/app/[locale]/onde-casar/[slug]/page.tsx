import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/i18n";
import { photos, venuePhotos } from "@/lib/photos";
import { isLocale, venueSlugs, type VenueSlug } from "@/lib/site";

function isVenue(value: string): value is VenueSlug {
  return venueSlugs.includes(value as VenueSlug);
}

export function generateStaticParams() {
  return venueSlugs.flatMap((slug) =>
    ["pt", "en", "es"].map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isVenue(slug)) return {};
  const dict = await getDictionary(locale);
  const page = dict.venuePages[slug];
  return { title: `${page.hero} — Leco Biaggìoni`, description: page.why };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isVenue(slug)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.venuePages[slug];
  const gallery = [photos.table, photos.flowers, photos.dance, photos.vows];

  return (
    <article className="bg-cream text-wine">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Photo src={venuePhotos[slug]} alt={page.name} fillParent priority kenburns />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/50 via-transparent to-wine/20" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 text-cream md:px-12">
          <p className="font-script text-2xl text-rose">{dict.nav.venues}</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl">{page.hero}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">{page.whyTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-wine/75">{page.why}</p>
        </Reveal>
      </section>

      <div className="grid md:grid-cols-2">
        {gallery.map((src) => (
          <Photo key={src} src={src} alt="" className="min-h-[50vh]" sizes="50vw" zoom />
        ))}
      </div>

      <section className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="font-display text-4xl">{page.lecoTitle}</h2>
        <p className="mt-6 text-lg leading-8 text-wine/75">{page.leco}</p>
        <ul className="mt-10 grid gap-3 text-sm leading-7 text-wine/70">
          {page.consider.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </section>

      <section id="rsvp" className="mx-auto max-w-md px-6 pb-28">
        <h2 className="font-display text-4xl">{page.ctaTitle}</h2>
        <p className="mt-4 text-base leading-8 text-wine/75">{page.ctaBody}</p>
        <div className="mt-10">
          <ContactForm dict={dict} venueDefault={dict.venuesHome.cards[slug].title} />
        </div>
      </section>
    </article>
  );
}
