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
      <HeroIntro src={photos.hero} kicker={dict.hero.line} name={dict.hero.title} lead={dict.hero.lead} cta={dict.hero.cta} />

      <div className="site-shell mx-auto bg-cream">
        <SaveSince copy={copy} body={dict.editorial.body} />

        <section id="presentation" className="scroll-mt-24">
          <PolaroidStack
          kicker={dict.editorial.title}
          title={copy.storyTitle}
          how={copy.storyHow}
          lead={copy.storyLead}
          body={copy.storyBody}
          items={copy.chapters.map((chapter, index) => ({
            ...chapter,
            src: chapterPhotos[index],
          }))}
          />
        </section>

        <section id="destination" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center">
            <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">Rio de Janeiro</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-wine md:text-6xl">{dict.destination.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-wine/75">{dict.destination.body}</p>
            <a href="#rsvp" className="mt-8 inline-flex rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream">{dict.destination.cta}</a>
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

        <section id="about" className="scroll-mt-24">
          <GatheringSplit
            caption={copy.lookingForward}
            kicker={copy.gatheringKicker}
            title={copy.gatheringTitle}
            body={copy.gatheringBody}
            meta={copy.gatheringMeta}
            photo={photos.dinner}
          />
        </section>

        <section id="details" className="scroll-mt-24">
        <FormatsDressCode
          kicker={copy.detailsKicker}
          title={dict.included.title}
          lead={dict.included.lead}
          packATitle={copy.packATitle}
          packABody={copy.packABody}
          packBTitle={copy.packBTitle}
          packBBody={copy.packBBody}
        />
        </section>

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
