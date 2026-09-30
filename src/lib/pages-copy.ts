import { about } from "@/lib/pages/about";
import { destination } from "@/lib/pages/destination";
import { elopement } from "@/lib/pages/elopement";
import { legal } from "@/lib/pages/legal";
import { packages } from "@/lib/pages/packages";
import { rio } from "@/lib/pages/rio";
import { sameSex } from "@/lib/pages/same-sex";
import type { Locale, PageKey } from "@/lib/site";

/**
 * Textos das páginas internas (Words 01–07). PT: texto do Word; EN / ES: tradução literal.
 *
 * Destinos (href):
 * - "#rsvp"               → formulário da Home no mesmo idioma
 * - "page:<key>"          → página interna (ex.: "page:packages")
 * - "page:<key>#<id>"     → âncora em página interna
 * - "#<id>"               → âncora na própria página
 * - "#"                   → link ainda não definido (portfólio)
 */
export type Cta = { label: string; href: string };

export type PageSection =
  /** B · #presentation */
  | { type: "presentation"; id?: string; kicker?: string; title: string; paragraphs: string[]; cta?: Cta }
  /** D · #destination */
  | { type: "destination"; id?: string; title: string; paragraphs: string[]; cta?: Cta; note?: string }
  /** F · diferenciais com ícones */
  | { type: "icons"; id?: string; title: string; items: { title: string; body: string }[] }
  /** G · cards com imagem (#formas) */
  | {
      type: "cards";
      id?: string;
      title: string;
      cards: { title: string; text: string; action?: string; href?: string }[];
      paragraph?: string;
      cta?: Cta;
    }
  /** H · imagem + texto (#about) */
  | {
      type: "split";
      id?: string;
      kicker?: string;
      title: string;
      paragraphs: string[];
      list?: { label: string; items: string[] };
      cta?: Cta;
    }
  /** I · etapas numeradas (#theday) */
  | { type: "steps"; id?: string; title: string; steps: { n: string; title: string; body: string }[] }
  /** J · faixa de destaque */
  | { type: "band"; id?: string; title: string; paragraphs: string[]; cta?: Cta }
  /** K · #details (2 cards) */
  | {
      type: "options";
      id?: string;
      kicker?: string;
      title: string;
      packs: [{ title: string; paragraphs: string[] }, { title: string; paragraphs: string[] }];
      cta?: Cta;
    }
  /** L · FAQ */
  | { type: "faq"; id?: string; title: string; items: { q: string; a: string }[] };

export type PageCopy = {
  hero: { kicker: string; title: string; paragraphs: string[]; cta: Cta; secondary: Cta };
  sections: PageSection[];
};

export const pagesCopy: Record<PageKey, Record<Locale, PageCopy>> = {
  elopement,
  sameSex,
  destination,
  legal,
  rio,
  about,
  packages,
};
