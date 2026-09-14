import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FlipCard } from "@/components/flip-card";
import { HeroIntro } from "@/components/hero-intro";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SinceClock } from "@/components/since-clock";
import type { Dictionary } from "@/lib/dictionaries";
import { chapterPhotos, photos, venuePhotos } from "@/lib/photos";
import { brand, localizedPath, placeholderContent, venueSlugs, type Locale } from "@/lib/site";
import { ui } from "@/lib/ui";

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = ui[locale];
  const line1 = placeholderContent ? "Lorem" : "Leco";
  const line2 = placeholderContent ? "Ipsum" : "Biaggìoni";

  return (
    <div className="bg-cream text-wine">
      <HeroIntro
        src={photos.hero}
        kicker={copy.heartLine}
        line1={line1}
        line2={line2}
        dateLine={`${copy.saveTitle} · ${copy.saveDate}`}
      />

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-3xl text-wine/80 md:text-4xl">{brand.name}</p>
            <h2 className="mt-16 font-display text-6xl leading-[0.9] md:text-8xl">
              {copy.saveTitle}
              <span className="mt-3 block text-5xl md:text-7xl">{copy.saveDate}</span>
            </h2>
          </Reveal>
          <Reveal className="md:pt-28">
            <h3 className="font-display text-3xl leading-snug md:text-4xl">{dict.editorial.body}</h3>
          </Reveal>
        </div>
        <div className="mx-auto mt-20 max-w-[1400px]">
          <SinceClock copy={copy} />
        </div>
      </section>

      <section className="px-3 pb-8 md:px-6">
        <div className="mx-auto grid max-w-[1400px] gap-3 md:grid-cols-2">
          {copy.chapters.map((chapter, index) => (
            <Reveal key={chapter.title}>
              <FlipCard
                src={chapterPhotos[index]}
                title={chapter.title}
                date={chapter.date}
                body={chapter.body}
                flipLabel={copy.flip}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="story" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-2xl text-rose">{copy.storyKicker}</p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">{copy.storyTitle}</h2>
            <p className="mt-6 text-sm tracking-[0.08em] text-wine/55 uppercase">{copy.storyHow}</p>
            <h3 className="mt-10 font-display text-3xl leading-snug md:text-4xl">{copy.storyLead}</h3>
            <p className="mt-6 max-w-md text-base leading-8 text-wine/75">{copy.storyBody}</p>
            <Link href={localizedPath(locale, "/quem-sou-eu")} className="mt-8 inline-block underline">
              {dict.aboutHome.cta}
            </Link>
          </Reveal>
          <div className="relative mx-auto h-[560px] w-full max-w-lg md:h-[640px]">
            <div className="polaroid absolute left-0 top-8 w-[68%] -rotate-6">
              <Photo src={photos.portrait} alt="" className="aspect-[4/5]" sizes="400px" zoom />
            </div>
            <div className="polaroid absolute right-0 bottom-0 w-[62%] rotate-6">
              <Photo src={photos.hands} alt="" className="aspect-[4/5]" sizes="400px" zoom />
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-24">
        <div className="relative min-h-[80vh]">
          <Photo src={photos.rio} alt={copy.locationTitle} fillParent kenburns />
          <div className="absolute inset-0 bg-wine/25" />
          <div className="absolute inset-x-0 bottom-0 px-6 py-16 text-cream md:px-12">
            <p className="font-script text-2xl text-rose">{copy.locationKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{copy.locationTitle}</h2>
            <p className="mt-4 text-lg">{copy.locationAddress}</p>
            <a
              href="https://maps.google.com/?q=Rio+de+Janeiro"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 underline"
            >
              {copy.maps}
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-4 px-4 py-10 md:grid-cols-4 md:px-8">
          {venueSlugs.map((slug) => {
            const card = dict.venuesHome.cards[slug];
            return (
              <Link key={slug} href={localizedPath(locale, `/onde-casar/${slug}`)} className="group block">
                <Photo
                  src={venuePhotos[slug]}
                  alt={card.title}
                  className="aspect-[4/5]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  zoom
                />
                <h3 className="mt-4 font-display text-3xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-wine/70">{card.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <Reveal className="mx-auto max-w-[1400px]">
          <p className="font-script text-2xl text-rose">{copy.travelKicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{copy.travelTitle}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {copy.travel.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-wine/75">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="hotels" className="scroll-mt-24 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-script text-2xl text-rose">{dict.hotelsHome.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
            {dict.hotelsHome.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.hotelsHome.lead}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                src: photos.hotel,
                title: dict.hotelsPage.featuredName,
                body: dict.hotelsPage.featuredText,
              },
              {
                src: photos.suite,
                title: copy.hotelExtra[0].title,
                body: copy.hotelExtra[0].body,
              },
              {
                src: photos.boutique,
                title: copy.hotelExtra[1].title,
                body: copy.hotelExtra[1].body,
              },
            ].map((hotel) => (
              <article key={hotel.title}>
                <Photo src={hotel.src} alt={hotel.title} className="aspect-[4/5]" sizes="33vw" zoom />
                <h3 className="mt-5 font-display text-3xl">{hotel.title}</h3>
                <p className="mt-3 text-sm leading-7 text-wine/75">{hotel.body}</p>
                <Link href={localizedPath(locale, "/hoteis-parceiros")} className="mt-4 inline-block underline">
                  {copy.maps}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-10 min-h-[70vh]">
        <Photo src={photos.kiss} alt="" fillParent />
        <div className="absolute inset-0 bg-wine/30" />
        <div className="relative flex min-h-[70vh] items-end px-6 py-16 md:px-12">
          <h2 className="max-w-3xl font-display text-5xl leading-tight text-cream md:text-7xl">
            {copy.lookingForward}
          </h2>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Photo src={photos.dinner} alt="" className="min-h-[70vh]" sizes="50vw" />
        <div className="flex items-center px-6 py-16 md:px-12">
          <Reveal>
            <p className="font-script text-2xl text-rose">{copy.gatheringKicker}</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">{copy.gatheringTitle}</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-wine/75">{copy.gatheringBody}</p>
            <dl className="mt-10 grid gap-6">
              {copy.gatheringMeta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.7rem] tracking-[0.16em] text-wine/50 uppercase">{item.label}</dt>
                  <dd className="mt-1 font-display text-2xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="theday" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-script text-2xl text-rose">{copy.dayKicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{dict.method.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.method.cta}</p>
          <div className="mt-16 grid gap-12">
            {dict.method.steps.map((step) => (
              <Reveal key={step.n} className="grid items-start gap-6 border-t border-wine/15 pt-10 md:grid-cols-[160px_1fr]">
                <p className="font-display text-6xl leading-none md:text-7xl">{step.n}</p>
                <div>
                  <h3 className="font-display text-4xl">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-wine/75">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
          <Photo src={photos.flowers} alt="" className="min-h-[60vh]" sizes="50vw" zoom />
          <Reveal>
            <p className="font-script text-2xl text-rose">{copy.giftsKicker}</p>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">{dict.quote.text}</h2>
            <p className="mt-6 text-sm tracking-[0.12em] uppercase">{dict.quote.author}</p>
            <p className="mt-6 text-base leading-8 text-wine/75">{copy.giftsNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-script text-2xl text-rose">{copy.detailsKicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">{dict.included.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.included.lead}</p>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article>
              <Photo src={photos.suit} alt={copy.packATitle} className="aspect-[4/5]" sizes="50vw" zoom />
              <h3 className="mt-6 font-display text-4xl">{copy.packATitle}</h3>
              <p className="mt-4 text-base leading-8 text-wine/75">{copy.packABody}</p>
            </article>
            <article>
              <Photo src={photos.aisle} alt={copy.packBTitle} className="aspect-[4/5]" sizes="50vw" zoom />
              <h3 className="mt-6 font-display text-4xl">{copy.packBTitle}</h3>
              <p className="mt-4 text-base leading-8 text-wine/75">{copy.packBBody}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2">
        <Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" />
        <div className="flex items-center px-6 py-16 md:px-12">
          <div className="w-full max-w-md">
            <p className="font-script text-2xl text-rose">{copy.rsvpKicker}</p>
            <h2 className="mt-3 font-display text-5xl leading-tight">{dict.finalCta.title}</h2>
            <p className="mt-5 text-base leading-8 text-wine/75">{dict.finalCta.body}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`mailto:${brand.email}`} className="underline">
                {brand.email}
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} className="underline">
                {brand.whatsappDisplay}
              </a>
            </div>
            <div className="mt-10">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[900px]">
          <p className="font-script text-2xl text-rose">{copy.faqKicker}</p>
          <h2 className="mt-3 font-display text-5xl md:text-7xl">{dict.faq.title}</h2>
          <p className="mt-6 text-base leading-8 text-wine/75">{dict.editorial.subtitle}</p>
          <div className="mt-12">
            <FaqList items={dict.faq.items} />
          </div>
        </div>
      </section>

      <BottomNav locale={locale} />
    </div>
  );
}
