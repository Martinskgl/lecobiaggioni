import { ContactForm } from "@/components/contact-form";
import { DestinationCta } from "@/components/destination-cta";
import { FaqSection } from "@/components/faq-section";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { HighlightBand } from "@/components/highlight-band";
import { MemoryCards } from "@/components/memory-cards";
import { Photo } from "@/components/photo";
import { MethodTimeline } from "@/components/method-timeline";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PolaroidStack, type ServiceIcon } from "@/components/polaroid-stack";
import { Reveal } from "@/components/reveal";
import { SaveSince } from "@/components/save-since";
import { TravelIcons } from "@/components/travel-icons";
import type { Dictionary } from "@/lib/dictionaries";
import { homeCopy } from "@/lib/home-copy";
import { altBySrc, foto, homeHeroVideo, homeHeroVideoMobile, photoAlt, realPhotos } from "@/lib/photos";
import { brand, pagePath, type Locale, type PageKey } from "@/lib/site";

/** Mosaico do contato: vertical grande, dois pequenos e um horizontal embaixo. */
const contactMosaic = ["atrio", "casalPb", "altarFlores", "entradaNoite"] as const;

/** Fotos dos cartões de serviço, pela página de destino de cada um. */
const SERVICE_PHOTOS: Partial<Record<PageKey, string>> = {
  elopement: foto("praia-casal-retrato"),
  sameSex: foto("homoafetivo-niteroi-beijo-pao"),
  destination: foto("cristo-casal-comemora"),
  legal: foto("homoafetivo-cerimonia-civil"),
};

const HERO_PHOTO = foto("cristo-casal-por-do-sol");

const SERVICE_ICONS: ServiceIcon[] = ["flower", "heart", "plane", "document"];

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = homeCopy[locale];
  const alt = photoAlt[locale];

  return (
    <div className="bg-white text-wine">
      {/* Hero */}
      <HeroIntro
        src={HERO_PHOTO}
        alt={altBySrc[HERO_PHOTO][locale]}
        video={homeHeroVideo}
        videoMobile={homeHeroVideoMobile}
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
            src: SERVICE_PHOTOS[service.page] ?? realPhotos.santaTeresa,
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
        <DestinationCta
          id="destination"
          title={copy.destination.title}
          paragraphs={copy.destination.paragraphs}
          cta={{ label: copy.destination.cta, href: pagePath(locale, "rio") }}
        />

        <PhotoCarousel
          photos={[
            foto("cristo-casal-beijo"),
            foto("homoafetivo-niteroi-silhueta"),
            foto("jardim-casal-padrinhos"),
            foto("homoafetivo-niteroi-saida"),
          ]}
        />

        {/* Planejamento internacional */}
        <TravelIcons title={copy.planning.title} items={copy.planning.items} />

        {/* Galeria: três cartões */}
        <MemoryCards
          id="formas"
          title={copy.ways.title}
          photos={[realPhotos.casalPb, realPhotos.homoafetivo, realPhotos.santaTeresa]} cards={copy.ways.cards.map((card) => ({ ...card, href: "#rsvp" }))} />

        {/* Sobre o Leco */}
        <section id="about" className="scroll-mt-24">
          <GatheringSplit
            kicker={copy.about.kicker}
            title={copy.about.title}
            body={copy.about.paragraphs}
            photo={foto("equipe-ajusta-veu")}
            cta={{ label: copy.about.cta, href: pagePath(locale, "about") }}
          />
        </section>

        {/* Como funciona */}
        <MethodTimeline
          title={copy.method.title}
          steps={copy.method.steps}
          photos={[foto("casal-pb-sorrindo"), foto("detalhe-torre-champanhe"), foto("festa-saida-estrelinhas")]}
        />

        {/* Faixa de destaque */}
        <HighlightBand
          title={copy.emotional.title}
          paragraphs={copy.emotional.paragraphs}
          photo={foto("casal-entrada-flores-noite")}
        />

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
          {/* Mosaico de fotos */}
          <div className="grid min-h-[70vh] grid-cols-2 grid-rows-3 gap-1.5">
            {contactMosaic.map((key, index) => (
              <Photo
                key={key}
                src={realPhotos[key]}
                alt={alt[key]}
                className={`!min-h-0 ${index === 0 ? "row-span-2" : ""} ${index === 3 ? "col-span-2" : ""}`}
                sizes={index === 3 ? "50vw" : "25vw"}
              />
            ))}
          </div>
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
        <FaqSection title={copy.faq.title} items={copy.faq.items} />
      </div>
    </div>
  );
}
