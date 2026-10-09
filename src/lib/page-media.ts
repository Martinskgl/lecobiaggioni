import { foto, photos, realPhotos } from "@/lib/photos";
import type { PageKey } from "@/lib/site";

/**
 * Fotos de cada página interna. As listas seguem a ordem em que cada tipo de seção
 * aparece na página (ex.: split[0] = primeira seção "split", split[1] = segunda...).
 * Fotos de casais com nome (cards) só usam a foto quando é do próprio casal; os demais seguem como placeholder.
 */
export type PageMedia = {
  hero?: string;
  split?: string[];
  band?: string[];
  steps?: string[][];
  cards?: (string[] | undefined)[];
};

const stories = [photos.christ, realPhotos.santaTeresa, photos.garden];

export const pageMedia: Partial<Record<PageKey, PageMedia>> = {
  sameSex: {
    hero: realPhotos.homoafetivo,
    split: [foto("homoafetivo-niteroi-beijo-pao")],
    // Elopement a dois · Festa com quem faz parte da história · Destination Wedding
    cards: [[foto("homoafetivo-niteroi-beijo"), foto("homoafetivo-noivas"), foto("homoafetivo-niteroi-saida")]],
    band: [foto("homoafetivo-niteroi-votos")],
  },
  legal: {
    hero: foto("homoafetivo-cerimonia-civil"),
    steps: [
      [
        foto("homoafetivo-niteroi-por-do-sol"),
        foto("homoafetivo-niteroi-silhueta"),
        foto("casal-aliancas-noite"),
        foto("carro-antigo-chegada"),
        foto("homoafetivo-niteroi-votos"),
      ],
    ],
    band: [foto("homoafetivo-niteroi-saida")],
  },
  elopement: {
    hero: foto("praia-noiva-calcadao"),
    // Pacotes: Essential · Signature · Luxury Experience
    cards: [[foto("praia-casal-maos"), foto("praia-casal-veu"), realPhotos.altarFlores]],
    band: [foto("praia-casal-beijo")],
  },
  destination: {
    hero: realPhotos.santaTeresa,
    split: [foto("rio-casal-com-familia")],
    cards: [stories],
    band: [foto("praia-celebracao-convidados")],
  },
  rio: {
    hero: foto("cristo-casal-beijo"),
    // Perto do mar · Jardins e natureza · Hotéis · Casas, villas e espaços históricos
    cards: [
      [foto("praia-casal-palmeiras"), foto("jardim-casal-beijo"), realPhotos.atrio, foto("casa-serra-noiva-cavalo")],
      stories,
    ],
    split: [foto("rio-casal-pao-de-acucar")],
    band: [foto("rio-casal-cerimonia")],
  },
  about: {
    hero: foto("equipe-ajusta-veu"),
    split: [foto("igreja-casal-tapete")],
    // Felipe & Juan · Mariana & Mario · Sarah & Rodrigo · Louhayne & Charles · Ana Paula & Lucas · Jaluza & Luiz
    cards: [
      [
        foto("homoafetivo-felipe-juan-bolo"),
        photos.christ,
        realPhotos.santaTeresa,
        photos.garden,
        photos.terrace,
        photos.hotel,
      ],
    ],
    band: [foto("festa-saida-convidados")],
  },
  packages: {
    hero: foto("praia-casal-caminhando"),
    // Essential · Signature · Luxury Experience
    split: [foto("praia-casal-calcadao"), foto("jardim-casal-palmeiras"), foto("praia-arco-flores")],
    band: [foto("festa-bolo-casal")],
  },
};
