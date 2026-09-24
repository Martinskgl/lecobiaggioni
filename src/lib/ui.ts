import { ipsum, ipsumLong } from "@/lib/ipsum";
import type { Locale } from "@/lib/site";

export type UiCopy = {
  flip: string;
  maps: string;
  menu: string;
  close: string;
  heartLine: string;
  saveTitle: string;
  saveDate: string;
  countdownLabel: string;
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  storyKicker: string;
  storyTitle: string;
  storyLead: string;
  storyBody: string;
  storyHow: string;
  locationKicker: string;
  locationTitle: string;
  locationAddress: string;
  travelKicker: string;
  travelTitle: string;
  travel: { title: string; body: string }[];
  hotelExtra: { title: string; body: string }[];
  lookingForward: string;
  gatheringKicker: string;
  gatheringTitle: string;
  gatheringBody: string;
  gatheringMeta: { label: string; value: string }[];
  dayKicker: string;
  giftsKicker: string;
  giftsTitle: string;
  giftsNote: string;
  giftsDetails: string[];
  detailsKicker: string;
  packATitle: string;
  packABody: string;
  packBTitle: string;
  packBBody: string;
  rsvpKicker: string;
  faqKicker: string;
  footerLine: string;
  footerNote: string;
  anchors: {
    location: string;
    hotels: string;
    day: string;
    civil: string;
    celebration: string;
    packages: string;
    about: string;
    faq: string;
    rsvp: string;
  };
  chapters: { title: string; date: string; body: string }[];
};

export const ui: Record<Locale, UiCopy> = {
  pt: {
    flip: "VIRAR",
    maps: "Conhecer as possibilidades",
    menu: "Menu",
    close: "Fechar",
    heartLine: "RIO DE JANEIRO · BRASIL",
    saveTitle: "Casamento civil no Brasil",
    saveDate: "O casamento de vocês pode acontecer legalmente aqui.",
    countdownLabel: "Cada caso é analisado individualmente.",
    years: "Anos",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    storyKicker: "O caminho",
    storyTitle: "Do primeiro contato ao casamento civil.",
    storyLead: "",
    storyBody: "",
    storyHow: "",
    locationKicker: "Rio de Janeiro",
    locationTitle: "Casar no Brasil. Celebrar no Rio.",
    locationAddress: "",
    travelKicker: "",
    travelTitle: "",
    travel: [
      {
        title: "De avião",
        body: ipsum,
      },
      {
        title: "De transfer",
        body: ipsum,
      },
      {
        title: "De carro",
        body: ipsum,
      },
    ],
    hotelExtra: [
      {
        title: "Zona Sul",
        body: ipsum,
      },
      {
        title: "Santa Teresa & mais",
        body: ipsum,
      },
    ],
    lookingForward: "Vocês planejam de onde estiverem. Nossa equipe cuida do Brasil.",
    gatheringKicker: "Para casais que vivem no exterior",
    gatheringTitle: "Análise à distância",
    gatheringBody: "A primeira conversa e a análise inicial podem acontecer online, antes de qualquer viagem ou contratação local. Mantemos contato com cartório, tradutores e profissionais envolvidos no processo brasileiro.",
    gatheringMeta: [
      { label: "Desde:", value: "2004" },
      { label: "Idiomas:", value: "PT · EN · ES" },
      { label: "Agenda:", value: "Limitada de propósito" },
    ],
    dayKicker: "O método",
    giftsKicker: "O direito de dizer sim",
    giftsTitle: "O casamento civil pode ser o começo de uma experiência inesquecível.",
    giftsNote: "Vocês podem vir ao Brasil para oficializar a união e também viver esse momento em um dos cenários mais marcantes do Rio de Janeiro. A celebração pode ser íntima ou incluir as pessoas que fizeram parte dessa história.",
    giftsDetails: ["CASAMENTO CIVIL · ELOPEMENT WEDDING", "RIO DE JANEIRO · DESTINATION WEDDING"],
    detailsKicker: "Como podemos ajudar",
    packATitle: "Legal Gay Wedding Brazil",
    packABody: "Para casais que desejam realizar o casamento civil no Brasil. O serviço começa com uma análise inicial e pode incluir organização documental, coordenação com cartório, traduções e apoio profissional especializado.",
    packBTitle: "Legal Wedding + Rio Experience",
    packBBody: "Para casais que desejam unir o casamento civil a uma experiência no Rio. Além da coordenação legal, planejamos cerimônia, local, fotografia, beleza, transporte, flores e celebração.",
    rsvpKicker: "Contato",
    faqKicker: "FAQ",
    footerLine: "Legal Gay Wedding Brazil by Leco Biaggìoni",
    footerNote: "Casamento civil e celebrações no Rio de Janeiro para casais homoafetivos do mundo inteiro. Documentos, requisitos, prazos e elegibilidade variam conforme o casal e o cartório responsável.",
    anchors: {
      location: "Casamento civil",
      hotels: "Celebração no Rio",
      day: "Como funciona",
      civil: "Casamento civil",
      celebration: "Celebração no Rio",
      packages: "Pacotes",
      about: "Sobre o Leco",
      faq: "FAQ",
      rsvp: "Analisar nosso caso",
    },
    chapters: [
      { title: "Análise inicial", date: "Análise", body: "Primeiro, precisamos entender o caso de vocês: nacionalidade, residência, estado civil, documentos disponíveis e o tipo de casamento desejado." },
      { title: "Checklist personalizado", date: "Documentos", body: "Depois da análise inicial, organizamos a lista de documentos, traduções, registros e etapas aplicáveis ao caso." },
      { title: "Preparação documental", date: "Traduções", body: "Orientamos a preparação do processo e coordenamos traduções juramentadas e outros apoios profissionais quando necessários." },
      { title: "Coordenação com o cartório", date: "Cartório", body: "Uma equipe local acompanha a comunicação com o cartório responsável, os prazos e cada etapa do processo brasileiro." },
      { title: "Casamento civil", date: "O sim", body: "Com a habilitação concluída, coordenamos os detalhes locais para a realização do casamento civil no Brasil." },
      { title: "Celebração no Rio", date: "Rio", body: "O casamento civil pode ser acompanhado de um Elopement Wedding ou de uma celebração criada em torno da história de vocês." },
    ],
  },
  en: {
    flip: "FLIP",
    maps: "Find on Google Maps",
    menu: "Menu",
    close: "Close",
    heartLine: "Celebration with direction  ♥  Rio de Janeiro, since 2004",
    saveTitle: "Since 2004",
    saveDate: "Rio | Brazil",
    countdownLabel: "Conducting celebrations for",
    years: "Years",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    storyKicker: "The story",
    storyTitle: "Our Story",
    storyLead: "Meeting the right direction at exactly the right time.",
    storyBody: ipsum,
    storyHow: "How it began · 2004",
    locationKicker: "Venue",
    locationTitle: "We'll see you in Rio",
    locationAddress: "Rio de Janeiro, Brazil",
    travelKicker: "Getting here",
    travelTitle: "Travel & Transportation",
    travel: [
      {
        title: "By Air",
        body: ipsum,
      },
      {
        title: "By Shuttle",
        body: ipsum,
      },
      {
        title: "By Car",
        body: ipsum,
      },
    ],
    hotelExtra: [
      {
        title: "South Zone",
        body: ipsum,
      },
      {
        title: "Santa Teresa & more",
        body: ipsum,
      },
    ],
    lookingForward: "We are so looking forward to seeing you.",
    gatheringKicker: "The first meeting",
    gatheringTitle: "A conversation to begin",
    gatheringBody: ipsumLong,
    gatheringMeta: [
      { label: "Since:", value: "2004" },
      { label: "Languages:", value: "PT · EN · ES" },
      { label: "Diary:", value: "Limited on purpose" },
    ],
    dayKicker: "The method",
    giftsKicker: "Wedding Gifts",
    giftsTitle: "Your presence is truly the greatest gift.",
    giftsNote:
      "Having you there is the greatest gift of all. If you'd like to do something extra special, a contribution to our honeymoon adventures would be deeply appreciated.",
    giftsDetails: ['Bank Transfer: DE1234567890', 'Message: "Honeymoon Fund"'],
    detailsKicker: "Formats",
    packATitle: "Full planning",
    packABody: ipsumLong,
    packBTitle: "Coordination + ceremony",
    packBBody: ipsumLong,
    rsvpKicker: "RSVP",
    faqKicker: "FAQ",
    footerLine: "We can't wait to conduct this day with you.",
    footerNote: ipsum,
    anchors: {
      location: "Civil wedding",
      hotels: "Rio celebration",
      day: "How it works",
      civil: "Civil wedding",
      celebration: "Rio celebration",
      packages: "Packages",
      about: "About Leco",
      faq: "FAQ",
      rsvp: "RSVP",
    },
    chapters: [
      {
        title: "The beginning",
        date: "2004",
        body: ipsum,
      },
      {
        title: "Rio",
        date: "Home",
        body: ipsum,
      },
      {
        title: "Listening",
        date: "Method",
        body: ipsum,
      },
      {
        title: "Destination",
        date: "World",
        body: ipsum,
      },
      {
        title: "Direction",
        date: "Presence",
        body: ipsum,
      },
      {
        title: "The day",
        date: "You",
        body: ipsum,
      },
    ],
  },
  es: {
    flip: "GIRAR",
    maps: "Ver en Google Maps",
    menu: "Menú",
    close: "Cerrar",
    heartLine: "Celebración con dirección  ♥  Río de Janeiro, desde 2004",
    saveTitle: "Desde 2004",
    saveDate: "Río | Brasil",
    countdownLabel: "Conduciendo celebraciones desde hace",
    years: "Años",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    storyKicker: "La historia",
    storyTitle: "Our Story",
    storyLead: "Encontrar la dirección correcta en el momento exacto.",
    storyBody: ipsum,
    storyHow: "Cómo empezó · 2004",
    locationKicker: "El lugar",
    locationTitle: "Nos vemos en Río",
    locationAddress: "Río de Janeiro, Brasil",
    travelKicker: "Cómo llegar",
    travelTitle: "Viaje & transporte",
    travel: [
      {
        title: "En avión",
        body: ipsum,
      },
      {
        title: "En transfer",
        body: ipsum,
      },
      {
        title: "En auto",
        body: ipsum,
      },
    ],
    hotelExtra: [
      {
        title: "Zona Sur",
        body: ipsum,
      },
      {
        title: "Santa Teresa y más",
        body: ipsum,
      },
    ],
    lookingForward: "Estamos listos para recibirlos.",
    gatheringKicker: "El primer encuentro",
    gatheringTitle: "Una conversación para empezar",
    gatheringBody: ipsumLong,
    gatheringMeta: [
      { label: "Desde:", value: "2004" },
      { label: "Idiomas:", value: "PT · EN · ES" },
      { label: "Agenda:", value: "Limitada a propósito" },
    ],
    dayKicker: "El método",
    giftsKicker: "Wedding Gifts",
    giftsTitle: "Your presence is truly the greatest gift.",
    giftsNote:
      "Having you there is the greatest gift of all. If you'd like to do something extra special, a contribution to our honeymoon adventures would be deeply appreciated.",
    giftsDetails: ['Bank Transfer: DE1234567890', 'Message: "Honeymoon Fund"'],
    detailsKicker: "Formatos",
    packATitle: "Paquete completo",
    packABody: ipsumLong,
    packBTitle: "Asesoría + ceremonial",
    packBBody: ipsumLong,
    rsvpKicker: "Contacto",
    faqKicker: "FAQ",
    footerLine: "No vemos la hora de conducir el día de ustedes.",
    footerNote: ipsum,
    anchors: {
      location: "Boda civil",
      hotels: "Celebración en Río",
      day: "Cómo funciona",
      civil: "Boda civil",
      celebration: "Celebración en Río",
      packages: "Paquetes",
      about: "Sobre Leco",
      faq: "FAQ",
      rsvp: "Contacto",
    },
    chapters: [
      {
        title: "El comienzo",
        date: "2004",
        body: ipsum,
      },
      {
        title: "Río",
        date: "Casa",
        body: ipsum,
      },
      {
        title: "La escucha",
        date: "Método",
        body: ipsum,
      },
      {
        title: "Destination",
        date: "Mundo",
        body: ipsum,
      },
      {
        title: "La dirección",
        date: "Presencia",
        body: ipsum,
      },
      {
        title: "El día",
        date: "Ustedes",
        body: ipsum,
      },
    ],
  },
};
