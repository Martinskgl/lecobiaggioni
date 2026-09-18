import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { HeroIntro } from "@/components/hero-intro";
import { Photo } from "@/components/photo";
import { MethodTimeline } from "@/components/method-timeline";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PolaroidStack } from "@/components/polaroid-stack";
import { Reveal } from "@/components/reveal";
import { SaveSince } from "@/components/save-since";
import { TravelIcons } from "@/components/travel-icons";
import type { Dictionary } from "@/lib/dictionaries";
import { chapterPhotos, photos, venuePhotos } from "@/lib/photos";
import { brand, localizedPath, type Locale, type VenueSlug } from "@/lib/site";
import { ui } from "@/lib/ui";

const HOME_VENUES: VenueSlug[] = ["cristo-redentor", "xian", "outros-lugares"];

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = ui[locale];

  return (
    <div className="bg-cream text-wine">
      <HeroIntro src={photos.hero} kicker={copy.heartLine} name={brand.name} />

      <SaveSince copy={copy} body={dict.editorial.body} />

      <PolaroidStack
        kicker={copy.storyKicker}
        title={copy.storyTitle}
        how={copy.storyHow}
        lead={copy.storyLead}
        body={copy.storyBody}
        items={copy.chapters.map((chapter, index) => ({
          ...chapter,
          src: chapterPhotos[index],
        }))}
      />

      <section id="location" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="page-frame mx-auto max-w-[760px] text-center">
          <p className="font-script text-2xl text-rose">{copy.locationKicker}</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">{copy.locationTitle}</h2>
          <p className="mt-6 text-lg text-wine/75">{copy.locationAddress}</p>
          <a
            href="https://maps.google.com/?q=Rio+de+Janeiro"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 underline"
          >
            {copy.maps}
          </a>
        </div>
      </section>

      <PhotoCarousel photos={[photos.rio, photos.christ, photos.garden, photos.terrace]} />

      <TravelIcons kicker={copy.travelKicker} title={copy.travelTitle} items={copy.travel} />

      <section className="scroll-mt-24 bg-cream px-6 py-16 md:px-10 md:py-24">
        <div className="page-frame mx-auto max-w-[1100px]">
          <p className="font-script text-2xl text-rose">{dict.venuesHome.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
            {dict.venuesHome.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.venuesHome.lead}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {HOME_VENUES.map((slug) => {
              const card = dict.venuesHome.cards[slug];
              return (
                <Link key={slug} href={localizedPath(locale, `/onde-casar/${slug}`)} className="group block">
                  <Photo
                    src={venuePhotos[slug]}
                    alt={card.title}
                    className="aspect-[4/5]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    zoom
                  />
                  <h3 className="mt-5 font-display text-3xl">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-wine/75">{card.text}</p>
                  <span className="mt-4 inline-block underline">{copy.maps}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="hotels" className="scroll-mt-24 bg-cream px-6 py-10 md:px-10">
        <div className="page-frame mx-auto max-w-[1100px]">
          <p className="font-script text-2xl text-rose">{dict.hotelsHome.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
            {dict.hotelsHome.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.hotelsHome.lead}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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

      <MethodTimeline
        kicker={copy.dayKicker}
        title={dict.method.title}
        lead={dict.method.cta}
        steps={dict.method.steps}
        photos={[photos.vows, photos.table, photos.flowers]}
      />

      <section className="px-6 py-10 md:px-10">
        <div className="page-frame mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
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
        <div className="page-frame mx-auto max-w-[1200px]">
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
        <div className="page-frame mx-auto max-w-[900px]">
          <p className="font-script text-2xl text-rose">{copy.faqKicker}</p>
          <h2 className="mt-3 font-display text-5xl md:text-7xl">{dict.faq.title}</h2>
          <p className="mt-6 text-base leading-8 text-wine/75">{dict.editorial.subtitle}</p>
          <div className="mt-12">
            <FaqList items={dict.faq.items} />
          </div>
        </div>
      </section>
    </div>
  );
}
