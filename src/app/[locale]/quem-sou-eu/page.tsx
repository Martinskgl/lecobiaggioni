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
  return { title: `${dict.aboutPage.subtitle} — Leco Biaggìoni`, description: dict.aboutPage.meta };
}

export default async function AboutPage({
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
        <Photo src={photos.portrait} alt="Leco Biaggìoni" fillParent priority kenburns />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/55 to-transparent" />
        <h1 className="absolute bottom-12 left-6 max-w-3xl font-display text-5xl leading-[0.95] text-cream md:left-12 md:text-7xl">
          {dict.aboutPage.title}
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 lg:grid-cols-2 md:px-10">
        <Reveal>
          <p className="font-script text-2xl text-rose">{dict.aboutPage.subtitle}</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">{copy.storyLead}</h2>
          <p className="mt-6 text-base leading-8 text-wine/75">{dict.aboutPage.history}</p>
          <p className="mt-6 text-base leading-8 text-wine/75">{dict.aboutPage.philosophy}</p>
        </Reveal>
        <div className="relative h-[520px]">
          <div className="polaroid absolute left-0 top-0 w-[70%] -rotate-6">
            <Photo src={photos.hands} alt="" className="aspect-[4/5]" sizes="420px" />
          </div>
          <div className="polaroid absolute right-0 bottom-0 w-[62%] rotate-6">
            <Photo src={photos.vows} alt="" className="aspect-[4/5]" sizes="420px" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Photo src={photos.rio} alt="" className="min-h-[60vh]" sizes="50vw" />
        <div className="flex items-center px-6 py-16 md:px-12">
          <div>
            <h2 className="font-display text-4xl">{dict.aboutPage.teamTitle}</h2>
            <p className="mt-4 text-base leading-8 text-wine/75">{dict.aboutPage.team}</p>
            <h2 className="mt-10 font-display text-4xl">{dict.aboutPage.destinationsTitle}</h2>
            <p className="mt-4 text-base leading-8 text-wine/75">{dict.aboutPage.destinations}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <Link href={`${localizedPath(loc)}#rsvp`} className="btn-wine">
          {dict.aboutPage.cta}
        </Link>
      </section>
    </article>
  );
}
