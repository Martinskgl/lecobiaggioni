import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { Photo } from "@/components/photo";
import { MethodTimeline } from "@/components/method-timeline";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PolaroidStack } from "@/components/polaroid-stack";
import { Reveal } from "@/components/reveal";
import { SaveSince } from "@/components/save-since";
import { TravelIcons } from "@/components/travel-icons";
import type { Dictionary } from "@/lib/dictionaries";
import { homeCopy } from "@/lib/home-copy";
import { chapterPhotos, photos } from "@/lib/photos";
import { brand, type Locale } from "@/lib/site";

const WAYS_PHOTOS = [photos.rio, photos.christ, photos.terrace] as const;

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = homeCopy[locale];

  return (
    <div className="bg-white text-wine">
      {/* Hero */}
      <HeroIntro src={photos.hero} kicker={dict.hero.line} name={dict.hero.title} lead={dict.hero.lead} cta={dict.hero.cta} />

      <div className="site-shell mx-auto bg-cream">
        {/* Indicadores */}
        <section className="bg-cream px-6 pt-16 md:px-10 md:pt-20">
          <Reveal className="page-frame mx-auto grid max-w-[1100px] grid-cols-2 gap-y-10 text-center sm:grid-cols-3 md:grid-cols-5">
            {copy.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl leading-none text-wine md:text-5xl">{stat.n}</p>
                <p className="mt-3 text-[0.62rem] tracking-[0.16em] text-wine/60 uppercase md:text-[0.68rem]">{stat.label}</p>
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
            note={copy.presentation.note}
          />
        </section>

        {/* O caminho (#story) */}
        <PolaroidStack
          kicker={copy.path.kicker}
          title={copy.path.title}
          items={copy.path.chapters.map((chapter, index) => ({
            label: chapter.label,
            title: chapter.title,
            date: chapter.nav,
            body: chapter.body,
            src: chapterPhotos[index],
          }))}
        />

        {/* Destino */}
        <section id="destination" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center">
            <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.destination.kicker}</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-wine md:text-6xl">{copy.destination.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-wine/75">{copy.destination.body}</p>
            <a href="#formas" className="mt-8 inline-flex rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-blush">
              {copy.destination.cta}
            </a>
          </div>
        </section>

        <PhotoCarousel photos={[photos.rio, photos.christ, photos.garden, photos.terrace]} />

        {/* Planejamento internacional */}
        <TravelIcons kicker={copy.planning.kicker} title={copy.planning.title} items={copy.planning.items} />

        {/* Formas de viver esse momento */}
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
                  <span className="mt-4 inline-block underline">{card.action}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre o Leco */}
        <section id="about" className="scroll-mt-24">
          <GatheringSplit
            caption={copy.about.caption}
            kicker={copy.about.kicker}
            title={copy.about.title}
            body={copy.about.paragraphs}
            meta={copy.about.meta}
            photo={photos.portrait}
          />
        </section>

        {/* Como trabalhamos */}
        <MethodTimeline
          kicker={copy.method.kicker}
          title={copy.method.title}
          steps={copy.method.steps}
          photos={[photos.vows, photos.table, photos.flowers]}
        />

        {/* Bloco emocional */}
        <section className="bg-cream px-6 py-10 md:px-10 md:py-14">
          <div className="page-frame relative mx-auto min-h-[70vh] max-w-[1100px] overflow-hidden rounded-[0.5rem] md:min-h-[76vh]">
            <Photo src={photos.flowers} alt="" fillParent quiet />
            <div className="absolute inset-0 bg-cream/55" />
            <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center md:min-h-[76vh] md:px-16">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.emotional.kicker}</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">{copy.emotional.title}</h2>
              {copy.emotional.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-6 max-w-xl text-base leading-8 text-wine/75">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6">
                {copy.emotional.lines.map((line) => (
                  <p key={line} className="mt-3 text-sm font-medium text-wine">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formatos de atendimento */}
        <section id="details" className="scroll-mt-24">
          <FormatsDressCode
            kicker={copy.formats.kicker}
            title={copy.formats.title}
            packATitle={copy.formats.packA.title}
            packABody={copy.formats.packA.body}
            packACta={copy.formats.packA.cta}
            packBTitle={copy.formats.packB.title}
            packBBody={copy.formats.packB.body}
            packBCta={copy.formats.packB.cta}
          />
        </section>

        {/* Contato */}
        <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2">
          <Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" />
          <div className="flex items-center px-6 py-16 md:px-12">
            <div className="w-full max-w-md">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.contact.kicker}</p>
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
                <ContactForm dict={dict} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
          <div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.faq.kicker}</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{copy.faq.title}</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-wine/75">{copy.faq.lead}</p>
            </div>
            <FaqList items={copy.faq.items} />
          </div>
        </section>
      </div>
    </div>
  );
}
