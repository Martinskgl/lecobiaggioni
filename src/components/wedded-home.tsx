import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { Photo } from "@/components/photo";
import { MethodTimeline } from "@/components/method-timeline";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PolaroidStack } from "@/components/polaroid-stack";
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
    <div className="bg-white text-wine">
      <HeroIntro src={photos.hero} kicker={copy.heartLine} name={brand.name} />

      <div className="site-shell mx-auto bg-cream">
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

        <section id="location" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center">
            <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.locationKicker}</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-wine md:text-6xl">{copy.locationTitle}</h2>
            <p className="mt-5 text-base text-wine/70">{copy.locationAddress}</p>
            <a
              href="https://maps.google.com/?q=Rio+de+Janeiro"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-blush"
            >
              {copy.maps}
            </a>
          </div>
        </section>

        <PhotoCarousel photos={[photos.rio, photos.christ, photos.garden, photos.terrace]} />

        <TravelIcons kicker={copy.travelKicker} title={copy.travelTitle} items={copy.travel} />

        <section id="hotels" className="scroll-mt-24 bg-cream px-6 py-16 md:px-10 md:py-20">
          <div className="page-frame mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{dict.venuesHome.kicker}</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.05] text-wine md:text-5xl">{dict.venuesHome.title}</h2>
            </div>
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

        <GatheringSplit
          caption={copy.lookingForward}
          kicker={copy.gatheringKicker}
          title={copy.gatheringTitle}
          body={copy.gatheringBody}
          meta={copy.gatheringMeta}
          photo={photos.dinner}
        />

        <MethodTimeline
          kicker={copy.dayKicker}
          title={dict.method.title}
          lead={dict.method.cta}
          steps={dict.method.steps}
          photos={[photos.vows, photos.table, photos.flowers]}
        />

        <section className="bg-cream px-6 py-10 md:px-10 md:py-14">
          <div className="page-frame relative mx-auto min-h-[70vh] max-w-[1100px] overflow-hidden rounded-[0.5rem] md:min-h-[76vh]">
            <Photo src={photos.flowers} alt="" fillParent quiet />
            <div className="absolute inset-0 bg-cream/55" />
            <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center md:min-h-[76vh] md:px-16">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.giftsKicker}</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">{copy.giftsTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-wine/75">{copy.giftsNote}</p>
              {copy.giftsDetails.map((line) => (
                <p key={line} className="mt-3 text-sm font-medium text-wine">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <FormatsDressCode
          kicker={copy.detailsKicker}
          title={dict.included.title}
          lead={dict.included.lead}
          packATitle={copy.packATitle}
          packABody={copy.packABody}
          packBTitle={copy.packBTitle}
          packBBody={copy.packBBody}
        />

        <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2">
          <Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" />
          <div className="flex items-center px-6 py-16 md:px-12">
            <div className="w-full max-w-md">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.rsvpKicker}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{dict.finalCta.title}</h2>
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

        <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
          <div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.faqKicker}</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{dict.faq.title}</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-wine/75">{dict.editorial.subtitle}</p>
            </div>
            <FaqList items={dict.faq.items} />
          </div>
        </section>
      </div>
    </div>
  );
}
