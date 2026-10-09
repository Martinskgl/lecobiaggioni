import { DestinationCta } from "@/components/destination-cta";
import { FaqSection } from "@/components/faq-section";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { HighlightBand } from "@/components/highlight-band";
import { MemoryCards } from "@/components/memory-cards";
import { MethodTimeline } from "@/components/method-timeline";
import { SaveSince } from "@/components/save-since";
import { TravelIcons } from "@/components/travel-icons";
import type { Cta, PageCopy, PageSection } from "@/lib/pages-copy";
import { pageMedia, type PageMedia } from "@/lib/page-media";
import { altBySrc, photoAlt, photos, realPhotos } from "@/lib/photos";
import { localizedPath, pagePath, pages, type Locale, type PageKey } from "@/lib/site";

const STEP_PHOTOS = [photos.vows, photos.table, photos.flowers, photos.rio, photos.kiss] as const;

/** Resolve os destinos escritos em pages-copy.ts para URLs do idioma atual. */
function resolveHref(locale: Locale, href: string) {
  if (href === "#rsvp") return `${localizedPath(locale)}#rsvp`;
  if (href.startsWith("page:")) {
    const [key, anchor] = href.slice(5).split("#");
    if (!(key in pages)) throw new Error(`Página desconhecida: ${key}`);
    const path = pagePath(locale, key as PageKey);
    return anchor ? `${path}#${anchor}` : path;
  }
  return href;
}

function link(locale: Locale, cta?: Cta) {
  return cta ? { label: cta.label, href: resolveHref(locale, cta.href) } : undefined;
}

/** Envolve seções cujo componente não recebe `id`, para as âncoras da página. */
function Anchor({ id, children }: { id?: string; children: React.ReactNode }) {
  if (!id) return children;
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

function Section({
  locale,
  section,
  media,
  nth,
}: {
  locale: Locale;
  section: PageSection;
  media: PageMedia;
  /** Posição desta seção entre as seções do mesmo tipo na página. */
  nth: number;
}) {
  switch (section.type) {
    case "presentation":
      return (
        <Anchor id={section.id}>
          <SaveSince
            kicker={section.kicker}
            title={section.title}
            paragraphs={section.paragraphs}
            cta={link(locale, section.cta)}
          />
        </Anchor>
      );
    case "destination":
      return (
        <DestinationCta
          id={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          cta={link(locale, section.cta)}
          note={section.note}
        />
      );
    case "icons":
      return (
        <Anchor id={section.id}>
          <TravelIcons title={section.title} items={section.items} />
        </Anchor>
      );
    case "cards":
      return (
        <MemoryCards
          id={section.id}
          title={section.title}
          cards={section.cards.map((card) => ({ ...card, href: card.href && resolveHref(locale, card.href) }))}
          photos={media.cards?.[nth] ?? section.photos}
          paragraph={section.paragraph}
          cta={link(locale, section.cta)}
        />
      );
    case "split":
      return (
        <Anchor id={section.id}>
          <GatheringSplit
            kicker={section.kicker}
            title={section.title}
            body={section.paragraphs}
            list={section.list}
            photo={media.split?.[nth] ?? photos.portrait}
            cta={link(locale, section.cta)}
          />
        </Anchor>
      );
    case "steps":
      return (
        <Anchor id={section.id}>
          <MethodTimeline title={section.title} steps={section.steps} photos={media.steps?.[nth] ?? STEP_PHOTOS} />
        </Anchor>
      );
    case "band":
      return (
        <HighlightBand
          id={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          cta={link(locale, section.cta)}
          photo={media.band?.[nth]}
        />
      );
    case "options":
      return (
        <Anchor id={section.id}>
          <FormatsDressCode
            kicker={section.kicker}
            title={section.title}
            packATitle={section.packs[0].title}
            packABody={section.packs[0].paragraphs}
            packBTitle={section.packs[1].title}
            packBBody={section.packs[1].paragraphs}
            cta={link(locale, section.cta)}
          />
        </Anchor>
      );
    case "faq":
      return <FaqSection id={section.id ?? "faq"} title={section.title} items={section.items} />;
  }
}

/** Alt da foto do topo: primeiro pelas fotos conhecidas, depois pelo mapa das 6 fotos iniciais. */
function heroAlt(locale: Locale, src: string) {
  const bySrc = altBySrc[src]?.[locale];
  if (bySrc) return bySrc;
  const key = (Object.keys(realPhotos) as (keyof typeof realPhotos)[]).find((item) => realPhotos[item] === src);
  return key ? photoAlt[locale][key] : "";
}

export function InnerPage({ locale, copy, page }: { locale: Locale; copy: PageCopy; page: PageKey }) {
  const media = pageMedia[page] ?? {};
  const hero = media.hero;
  const seen: Partial<Record<PageSection["type"], number>> = {};
  return (
    <div className="bg-white text-wine">
      <HeroIntro
        src={hero ?? photos.hero}
        alt={hero ? heroAlt(locale, hero) : ""}
        kicker={copy.hero.kicker}
        name={copy.hero.title}
        subtitle={copy.hero.subtitle}
        lead={copy.hero.paragraphs}
        cta={copy.hero.cta.label}
        ctaHref={resolveHref(locale, copy.hero.cta.href)}
        secondary={link(locale, copy.hero.secondary)}
      />
      <div className="site-shell mx-auto bg-cream">
        {copy.sections.map((section, index) => {
          const nth = seen[section.type] ?? 0;
          seen[section.type] = nth + 1;
          return <Section key={`${section.type}-${index}`} locale={locale} section={section} media={media} nth={nth} />;
        })}
      </div>
    </div>
  );
}
