const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  hero: u("photo-1519741497674-611481863552", 2400),
  picnic: u("photo-1519741497674-611481863552", 1600),
  vows: u("photo-1606800052052-a08af7148866", 1600),
  table: u("photo-1519225421980-715cb0215aed", 1600),
  flowers: u("photo-1460978816454-eb22ce39c7d8", 1400),
  dance: u("photo-1520854221256-17451cc331bf", 1600),
  rings: u("photo-1520854221256-17451cc331bf", 1400),
  rio: u("photo-1483728642387-6c3bdd6c93e5", 2000),
  christ: u("photo-1483729558449-99ef03a8ba58", 1600),
  garden: u("photo-1464366400600-7168b8af9bc3", 1600),
  terrace: u("photo-1507525428034-b723cf961d3e", 1600),
  hotel: u("photo-1551882547-ff40c63ea294", 1600),
  suite: u("photo-1566073771259-6a8506099945", 1600),
  boutique: u("photo-1582719478250-c89cae4dc85b", 1600),
  portrait: u("photo-1515934751635-c81c6bc9a2d8", 1400),
  hands: u("photo-1520854221256-17451cc331bf", 1400),
  dinner: u("photo-1470337458703-46ad1756a187", 1600),
  dress: u("photo-1515934751635-c81c6bc9a2d8", 1400),
  suit: u("photo-1507679799987-c73779587ccf", 1400),
  kiss: u("photo-1583939003579-730e3918a45a", 1800),
  aisle: u("photo-1460978816454-eb22ce39c7d8", 1600),
} as const;

export const venuePhotos = {
  xian: photos.rio,
  "cristo-redentor": photos.christ,
  zefira: photos.garden,
  "outros-lugares": photos.terrace,
} as const;

export const chapterPhotos = [
  photos.picnic,
  photos.vows,
  photos.flowers,
  photos.rio,
  photos.table,
  photos.kiss,
] as const;

/** Fotos reais enviadas pelo cliente (public/media/fotos/<nome>.jpg). */
export const foto = (name: string) => `/media/fotos/${name}.jpg`;
const real = foto;

export const realPhotos = {
  atrio: real("foto-01-noiva-atrio"),
  santaTeresa: real("foto-02-casal-santa-teresa"),
  homoafetivo: real("foto-03-noivos-homoafetivo"),
  entradaNoite: real("foto-04-entrada-noiva-noite"),
  casalPb: real("foto-05-casal-pb"),
  altarFlores: real("foto-06-casal-altar-flores"),
} as const;

/** Enquadramento (object-position) de cada foto real, para não cortar rostos. */
export const photoPositions: Record<string, string> = {
  [realPhotos.atrio]: "50% 40%",
  [realPhotos.santaTeresa]: "50% 62%",
  [realPhotos.homoafetivo]: "50% 25%",
  [realPhotos.entradaNoite]: "50% 45%",
  [realPhotos.casalPb]: "50% 15%",
  [realPhotos.altarFlores]: "50% 35%",
  [foto("cristo-casal-por-do-sol")]: "40% 30%",
  [foto("rio-casal-pao-de-acucar")]: "50% 30%",
  [foto("rio-casal-cerimonia")]: "50% 20%",
  [foto("rio-casal-com-familia")]: "50% 30%",
  [foto("homoafetivo-cerimonia-civil")]: "50% 40%",
  [foto("homoafetivo-noivas")]: "50% 25%",
  [foto("homoafetivo-niteroi-beijo")]: "50% 30%",
  [foto("homoafetivo-niteroi-beijo-pao")]: "50% 40%",
  [foto("homoafetivo-niteroi-por-do-sol")]: "50% 55%",
  [foto("equipe-ajusta-veu")]: "50% 55%",
  [foto("praia-noiva-calcadao")]: "55% 60%",
  [foto("praia-casal-beijo")]: "50% 75%",
  [foto("praia-casal-calcadao")]: "50% 75%",
  [foto("praia-casal-caminhando")]: "50% 80%",
  [foto("praia-casal-maos")]: "50% 80%",
  [foto("praia-casal-veu")]: "50% 45%",
  [foto("praia-casal-retrato")]: "50% 35%",
  [foto("casa-serra-noiva-cavalo")]: "65% 55%",
  [foto("carro-antigo-chegada")]: "50% 65%",
  [foto("igreja-casal-tapete")]: "50% 40%",
  [foto("casal-pb-sorrindo")]: "50% 35%",
};

/** Vídeo de fundo da Home. Quando o arquivo chegar, salvar em public/media/home-hero.mp4 e trocar para "/media/home-hero.mp4". */
export const homeHeroVideo: string | undefined = undefined;

type RealPhoto = keyof typeof realPhotos;
type AltLocale = "pt" | "en" | "es";

/** Texto alternativo das fotos reais em cada idioma. */
export const photoAlt: Record<AltLocale, Record<RealPhoto, string>> = {
  pt: {
    atrio: "Noiva segurando o véu em um saguão iluminado",
    santaTeresa: "Casal se beijando nos trilhos do bondinho em Santa Teresa, no Rio",
    homoafetivo: "Dois noivos de terno azul emocionados durante a cerimônia",
    entradaNoite: "Entrada da noiva à noite, sob um varal de luzes, com os convidados ao redor",
    casalPb: "Casal abraçado e sorrindo, em preto e branco",
    altarFlores: "Casal posando diante de uma cortina de flores",
  },
  en: {
    atrio: "Bride holding her veil in a sunlit lobby",
    santaTeresa: "Couple kissing on the tram tracks in Santa Teresa, Rio",
    homoafetivo: "Two grooms in blue suits, moved during the ceremony",
    entradaNoite: "Bride's entrance at night under string lights, surrounded by guests",
    casalPb: "Couple embracing and laughing, in black and white",
    altarFlores: "Couple posing in front of a curtain of flowers",
  },
  es: {
    atrio: "Novia sosteniendo el velo en un vestíbulo iluminado",
    santaTeresa: "Pareja besándose sobre las vías del tranvía en Santa Teresa, Río",
    homoafetivo: "Dos novios de traje azul emocionados durante la ceremonia",
    entradaNoite: "Entrada de la novia de noche bajo luces colgantes, rodeada de invitados",
    casalPb: "Pareja abrazada y riendo, en blanco y negro",
    altarFlores: "Pareja posando frente a una cortina de flores",
  },
};

/** Texto alternativo por foto (src) nos 3 idiomas, para as fotos de topo e destaques. */
export const altBySrc: Record<string, Record<AltLocale, string>> = {
  [foto("cristo-casal-por-do-sol")]: {
    pt: "Casal ao pôr do sol no mirante do Cristo Redentor, com o Pão de Açúcar ao fundo",
    en: "Couple at sunset on the Christ the Redeemer lookout, with Sugarloaf Mountain behind",
    es: "Pareja al atardecer en el mirador del Cristo Redentor, con el Pan de Azúcar al fondo",
  },
  [foto("cristo-casal-beijo")]: {
    pt: "Casal se beijando no mirante do Cristo Redentor, diante dos convidados",
    en: "Couple kissing on the Christ the Redeemer lookout, in front of their guests",
    es: "Pareja besándose en el mirador del Cristo Redentor, frente a sus invitados",
  },
  [foto("homoafetivo-cerimonia-civil")]: {
    pt: "Dois noivos diante do celebrante durante a cerimônia civil",
    en: "Two grooms before the officiant during the civil ceremony",
    es: "Dos novios ante el oficiante durante la ceremonia civil",
  },
  [foto("praia-noiva-calcadao")]: {
    pt: "Noiva no calçadão da praia no Rio de Janeiro",
    en: "Bride on the beach promenade in Rio de Janeiro",
    es: "Novia en el paseo de la playa en Río de Janeiro",
  },
  [foto("rio-casal-pao-de-acucar")]: {
    pt: "Casal de noivos com o Pão de Açúcar ao fundo",
    en: "Bride and groom with Sugarloaf Mountain behind them",
    es: "Novios con el Pan de Azúcar al fondo",
  },
  [foto("equipe-ajusta-veu")]: {
    pt: "Equipe de Leco Biaggìoni ajustando o véu da noiva na porta da igreja",
    en: "Leco Biaggìoni's team adjusting the bride's veil at the church door",
    es: "Equipo de Leco Biaggìoni ajustando el velo de la novia en la puerta de la iglesia",
  },
  [foto("praia-casal-caminhando")]: {
    pt: "Casal caminhando na areia da praia",
    en: "Couple walking on the beach",
    es: "Pareja caminando por la playa",
  },
};
