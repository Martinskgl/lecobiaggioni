import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { Photo } from "@/components/photo";
import { MethodTimeline } from "@/components/method-timeline";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PolaroidStack, type ServiceIcon } from "@/components/polaroid-stack";
import { Reveal } from "@/components/reveal";
import { SaveSince } from "@/components/save-since";
import { TravelIcons } from "@/components/travel-icons";
import type { Dictionary } from "@/lib/dictionaries";
import { homeCopy } from "@/lib/home-copy";
import { chapterPhotos, photos } from "@/lib/photos";
import { brand, pagePath, type Locale } from "@/lib/site";

const WAYS_PHOTOS = [photos.rio, photos.christ, photos.terrace] as const;
const SERVICE_ICONS: ServiceIcon[] = ["flower", "heart", "plane", "document"];

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = homeCopy[locale];

  return (
    <div className="bg-white text-wine">
      {/* Hero */}
      <HeroIntro
        src={photos.hero}
        kicker={copy.hero.kicker}
        name={copy.hero.title}
        lead={copy.hero.paragraphs}
        cta={copy.hero.cta}
        secondary={{ label: copy.hero.secondary, href: "#story" }}
      />

      <div className="site-shell mx-auto bg-cream">
        {/* Indicadores */}
        <section className="bg-cream px-6 pt-16 md:px-10 md:pt-20">
          <Reveal className="page-frame mx-auto grid max-w-[1100px] grid-cols-2 gap-y-10 text-center sm:grid-cols-3 md:grid-cols-3">
            {copy.stats.map((stat) => (
              <div key={stat}>
                <p className="mt-3 text-[0.62rem] tracking-[0.16em] text-wine/60 uppercase md:text-[0.68rem]">{stat}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Apresentação */}
        <section id="presentation" className="scroll-mt-24">
          <SaveSince
            kicker={copy.presentation.kicker}
            title={copy.presentation.title}
            paragraphs={copy.presentation.paragraphs}
          />
        </section>

        {/* Serviços (#story) */}
        <PolaroidStack
          items={copy.services.map((service, index) => ({
            src: chapterPhotos[index],
            name: service.name,
            icon: SERVICE_ICONS[index],
            eyebrow: service.eyebrow,
            title: service.title,
            paragraphs: service.paragraphs,
            cta: service.cta,
            href: pagePath(locale, service.page),
            note: service.note,
          }))}
        />

        {/* Destino */}
        <section id="destination" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center">
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-wine md:text-6xl">{copy.destination.title}</h2>
            {copy.destination.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mx-auto mt-6 max-w-xl text-base leading-8 text-wine/75">{paragraph}</p>
            ))}
            <a href={pagePath(locale, "rio")} className="mt-8 inline-flex rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-blush">
              {copy.destination.cta}
            </a>
          </div>
        </section>

        <PhotoCarousel photos={[photos.rio, photos.christ, photos.garden, photos.terrace]} />

        {/* Planejamento internacional */}
        <TravelIcons title={copy.planning.title} items={copy.planning.items} />

        {/* Galeria: três cartões */}
        <section id="formas" className="scroll-mt-24 bg-cream px-6 py-16 md:px-10 md:py-20">
          <div className="page-frame mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl leading-[1.05] text-wine md:text-5xl">{copy.ways.title}</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {copy.ways.cards.map((card, index) => (
                <a key={card.title} href="#rsvp" className="group block">
                  <Photo
                    src={WAYS_PHOTOS[index % WAYS_PHOTOS.length]}
                    alt={card.title}
                    className="aspect-[4/5]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    zoom
                  />
                  <h3 className="mt-5 font-display text-3xl">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-wine/75">{card.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre o Leco */}
        <section id="about" className="scroll-mt-24">
          <GatheringSplit
            kicker={copy.about.kicker}
            title={copy.about.title}
            body={copy.about.paragraphs}
            photo={photos.portrait}
            cta={{ label: copy.about.cta, href: pagePath(locale, "about") }}
          />
        </section>

        {/* Como funciona */}
        <MethodTimeline
          title={copy.method.title}
          steps={copy.method.steps}
          photos={[photos.vows, photos.table, photos.flowers]}
        />

        {/* Faixa de destaque */}
        <section className="bg-cream px-6 py-10 md:px-10 md:py-14">
          <div className="page-frame relative mx-auto min-h-[70vh] max-w-[1100px] overflow-hidden rounded-[0.5rem] md:min-h-[76vh]">
            <Photo src={photos.flowers} alt="" fillParent quiet />
            <div className="absolute inset-0 bg-cream/55" />
            <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center md:min-h-[76vh] md:px-16">
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">{copy.emotional.title}</h2>
              {copy.emotional.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-6 max-w-xl text-base leading-8 text-wine/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Brazil Wedding Legal: duas possibilidades */}
        <section id="details" className="scroll-mt-24">
          <FormatsDressCode
            kicker={copy.formats.kicker}
            title={copy.formats.title}
            packATitle={copy.formats.packA.title}
            packABody={copy.formats.packA.paragraphs}
            packACta={copy.formats.packA.cta}
            packBTitle={copy.formats.packB.title}
            packBBody={copy.formats.packB.paragraphs}
            packBCta={copy.formats.packB.cta}
            ctaHref={pagePath(locale, "legal")}
          />
        </section>

        {/* Contato */}
        <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2">
          <Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" />
          <div className="flex items-center px-6 py-16 md:px-12">
            <div className="w-full max-w-md">
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{copy.contact.title}</h2>
              {copy.contact.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-8 text-wine/75">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <a href={`mailto:${brand.email}`} className="underline">
                  {brand.email}
                </a>
                <a href={`https://wa.me/${brand.whatsapp}`} className="underline">
                  {brand.whatsappDisplay}
                </a>
              </div>
              <div className="mt-10">
                <ContactForm dict={dict} form={copy.contact.form} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
          <div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{copy.faq.title}</h2>
            </div>
            <FaqList items={copy.faq.items} />
          </div>
        </section>
      </div>
    </div>
  );
}
