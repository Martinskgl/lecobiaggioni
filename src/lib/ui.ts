import { loremizeStrings } from "@/lib/lorem";
import { placeholderContent, type Locale } from "@/lib/site";

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
  giftsNote: string;
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
    faq: string;
    rsvp: string;
  };
  chapters: { title: string; date: string; body: string }[];
};

const rawUi: Record<Locale, UiCopy> = {
  pt: {
    flip: "VIRAR",
    maps: "Ver no mapa",
    menu: "Menu",
    close: "Fechar",
    heartLine: "Celebração com direção  ♥  Rio de Janeiro, desde 2004",
    saveTitle: "Desde 2004",
    saveDate: "Rio · Brasil",
    countdownLabel: "Conduzindo celebrações há",
    years: "Anos",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    storyKicker: "A história",
    storyTitle: "Our Story",
    storyLead: "Encontrar a direção certa na hora certa.",
    storyBody:
      "As histórias mais bonitas começam em silêncio — um casal, uma cidade, e alguém que já sabe o que vem depois.",
    storyHow: "Como começou · 2004",
    locationKicker: "Onde casar",
    locationTitle: "A gente se encontra no Rio",
    locationAddress: "Rio de Janeiro, Brasil",
    travelKicker: "Chegando",
    travelTitle: "Casar no Rio precisa parecer empolgante. Não complicado.",
    travel: [
      {
        title: "De fora do Brasil",
        body: "Equipe bilíngue e condução local. Vocês planejam de onde estiverem — a gente segura o chão do evento no Rio.",
      },
      {
        title: "De outro estado",
        body: "Logística de convidados, hospedagem e fornecedores alinhados para que a viagem vire celebração, não lista de pendências.",
      },
      {
        title: "Já no Rio",
        body: "Escuta, plano e presença. Indicamos caminhos, antecipamos decisões e cuidamos para que cada parte esteja no lugar certo.",
      },
    ],
    hotelExtra: [
      {
        title: "Zona Sul",
        body: "Copacabana, Ipanema e arredores — para famílias e amigos que querem a cidade à porta.",
      },
      {
        title: "Santa Teresa & mais",
        body: "Casas e hotéis com alma, quando o casamento pede um Rio mais íntimo.",
      },
    ],
    lookingForward: "Estamos prontos para receber vocês.",
    gatheringKicker: "O primeiro encontro",
    gatheringTitle: "Uma conversa para começar",
    gatheringBody:
      "Tudo começa com uma conversa. Entendemos quem vocês são, o que imaginam para esse dia, prioridades, convidados, estilo e budget — sem pressa artificial.",
    gatheringMeta: [
      { label: "Desde", value: "2004" },
      { label: "Idiomas", value: "PT · EN · ES" },
      { label: "Agenda", value: "Limitada de propósito" },
    ],
    dayKicker: "O método",
    giftsKicker: "A direção",
    giftsNote: "Se quiserem ir além, o próximo passo é uma conversa sobre a data.",
    detailsKicker: "Formatos",
    packATitle: "Pacote Completo",
    packABody:
      "Do planejamento ao grande dia. Uma equipe olhando para o todo — fornecedores, cronograma, identidade, decoração e a experiência dos convidados.",
    packBTitle: "Assessoria + Cerimonial",
    packBBody:
      "Para quem já tem caminhos escolhidos e precisa de alguém conduzindo o processo e o dia — com a mesma presença, em outro formato.",
    rsvpKicker: "Contato",
    faqKicker: "FAQ",
    footerLine: "Mal podemos esperar para conduzir o dia de vocês.",
    footerNote: "Deixem os dados e nossa equipe responde para entender o casamento e a agenda daquele período.",
    anchors: {
      location: "Locais",
      hotels: "Hotéis",
      day: "O método",
      faq: "FAQ",
      rsvp: "Contato",
    },
    chapters: [
      {
        title: "O começo",
        date: "2004",
        body: "Nenhum casamento começa pelo fornecedor. Começa pelo casal — e pela escuta de quem vai conduzir o resto.",
      },
      {
        title: "Rio",
        date: "Casa",
        body: "Duas décadas no chão do evento: vista, horário, acesso, gastronomia. O Rio como cenário, nunca como clichê.",
      },
      {
        title: "A escuta",
        date: "Método",
        body: "Uma conversa para entender quem vocês são, o que imaginam, o que faz sentido investir e o que vocês querem sentir.",
      },
      {
        title: "Destination",
        date: "Mundo",
        body: "Casais que planejam de outro estado ou país. Ter alguém local conduzindo decisões muda tudo.",
      },
      {
        title: "A direção",
        date: "Presença",
        body: "Premium pela qualidade da presença, não pela ostentação. Elegância sem excesso. Romance sem clichê.",
      },
      {
        title: "O dia",
        date: "Vocês",
        body: "Enquanto vocês vivem, a equipe cuida para que cada parte esteja no lugar certo, na hora certa.",
      },
    ],
  },
  en: {
    flip: "FLIP",
    maps: "Find on Google Maps",
    menu: "Menu",
    close: "Close",
    heartLine: "Celebration with direction  ♥  Rio de Janeiro, since 2004",
    saveTitle: "Since 2004",
    saveDate: "Rio · Brazil",
    countdownLabel: "Conducting celebrations for",
    years: "Years",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    storyKicker: "The story",
    storyTitle: "Our Story",
    storyLead: "Meeting the right direction at exactly the right time.",
    storyBody:
      "The most beautiful stories begin quietly — two people, one city, and someone who already knows what comes next.",
    storyHow: "How it began · 2004",
    locationKicker: "Venue",
    locationTitle: "We'll see you in Rio",
    locationAddress: "Rio de Janeiro, Brazil",
    travelKicker: "Getting here",
    travelTitle: "Getting married in Rio should feel exciting. Not complicated.",
    travel: [
      {
        title: "From abroad",
        body: "A bilingual local team. You plan from wherever you are — we hold the ground in Rio.",
      },
      {
        title: "From another city",
        body: "Guest logistics, hotels and vendors aligned so the trip becomes a celebration, not a to-do list.",
      },
      {
        title: "Already in Rio",
        body: "Listening, a clear plan, and presence. We anticipate decisions and keep every part in its place.",
      },
    ],
    hotelExtra: [
      {
        title: "South Zone",
        body: "Copacabana, Ipanema and nearby — for family and friends who want the city at the door.",
      },
      {
        title: "Santa Teresa & more",
        body: "Houses and hotels with soul, when the wedding asks for a more intimate Rio.",
      },
    ],
    lookingForward: "We are so looking forward to seeing you.",
    gatheringKicker: "The first meeting",
    gatheringTitle: "A conversation to begin",
    gatheringBody:
      "It starts with a conversation. Who you are, what you imagine, priorities, guests, style and budget — without artificial hurry.",
    gatheringMeta: [
      { label: "Since", value: "2004" },
      { label: "Languages", value: "PT · EN · ES" },
      { label: "Diary", value: "Limited on purpose" },
    ],
    dayKicker: "The method",
    giftsKicker: "The direction",
    giftsNote: "If you want to go further, the next step is a conversation about your date.",
    detailsKicker: "Formats",
    packATitle: "Full planning",
    packABody:
      "From planning to the day. One team looking at the whole — vendors, timeline, identity, design and the guest experience.",
    packBTitle: "Coordination + ceremony",
    packBBody:
      "For couples who already have a path and need someone conducting the process and the day — same presence, another format.",
    rsvpKicker: "RSVP",
    faqKicker: "FAQ",
    footerLine: "We can't wait to conduct this day with you.",
    footerNote: "Leave your details. Our team will reply to understand the wedding and that season's diary.",
    anchors: {
      location: "Location",
      hotels: "Hotels",
      day: "The day",
      faq: "FAQ",
      rsvp: "RSVP",
    },
    chapters: [
      {
        title: "The beginning",
        date: "2004",
        body: "A wedding never starts with a vendor. It starts with the couple — and with whoever will conduct the rest.",
      },
      {
        title: "Rio",
        date: "Home",
        body: "Two decades on the floor of the event: view, timing, access, food. Rio as a setting, never a postcard cliché.",
      },
      {
        title: "Listening",
        date: "Method",
        body: "A conversation to understand who you are, what you imagine, what is worth investing in, and how you want to feel.",
      },
      {
        title: "Destination",
        date: "World",
        body: "Couples planning from another state or country. A local team holding the decisions changes everything.",
      },
      {
        title: "Direction",
        date: "Presence",
        body: "Premium through the quality of presence, not ostentation. Elegance without excess. Romance without cliché.",
      },
      {
        title: "The day",
        date: "You",
        body: "While you live it, the team keeps every part in the right place, at the right time.",
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
    saveDate: "Río · Brasil",
    countdownLabel: "Conduciendo celebraciones desde hace",
    years: "Años",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    storyKicker: "La historia",
    storyTitle: "Our Story",
    storyLead: "Encontrar la dirección correcta en el momento exacto.",
    storyBody:
      "Las historias más hermosas empiezan en silencio — una pareja, una ciudad, y alguien que ya sabe lo que viene después.",
    storyHow: "Cómo empezó · 2004",
    locationKicker: "El lugar",
    locationTitle: "Nos vemos en Río",
    locationAddress: "Río de Janeiro, Brasil",
    travelKicker: "Cómo llegar",
    travelTitle: "Casarse en Río debería emocionar. No complicar.",
    travel: [
      {
        title: "Desde el exterior",
        body: "Equipo bilingüe y conducción local. Planean desde donde estén — nosotros sostenemos el piso del evento en Río.",
      },
      {
        title: "Desde otro estado",
        body: "Logística de invitados, hospedaje y proveedores alineados para que el viaje sea celebración, no una lista.",
      },
      {
        title: "Ya en Río",
        body: "Escucha, plan y presencia. Anticipamos decisiones y cuidamos que cada parte esté en su lugar.",
      },
    ],
    hotelExtra: [
      {
        title: "Zona Sur",
        body: "Copacabana, Ipanema y alrededores — para familias y amigos que quieren la ciudad a la puerta.",
      },
      {
        title: "Santa Teresa y más",
        body: "Casas y hoteles con alma, cuando la boda pide un Río más íntimo.",
      },
    ],
    lookingForward: "Estamos listos para recibirlos.",
    gatheringKicker: "El primer encuentro",
    gatheringTitle: "Una conversación para empezar",
    gatheringBody:
      "Todo empieza con una conversación. Quiénes son, qué imaginan, prioridades, invitados, estilo y presupuesto — sin prisa artificial.",
    gatheringMeta: [
      { label: "Desde", value: "2004" },
      { label: "Idiomas", value: "PT · EN · ES" },
      { label: "Agenda", value: "Limitada a propósito" },
    ],
    dayKicker: "El método",
    giftsKicker: "La dirección",
    giftsNote: "Si quieren ir más allá, el siguiente paso es una conversación sobre la fecha.",
    detailsKicker: "Formatos",
    packATitle: "Paquete completo",
    packABody:
      "Del planning al gran día. Un equipo mirando el conjunto — proveedores, cronograma, identidad, decoración y la experiencia de los invitados.",
    packBTitle: "Asesoría + ceremonial",
    packBBody:
      "Para quienes ya tienen caminos elegidos y necesitan a alguien conduciendo el proceso y el día — la misma presencia, otro formato.",
    rsvpKicker: "Contacto",
    faqKicker: "FAQ",
    footerLine: "No vemos la hora de conducir el día de ustedes.",
    footerNote: "Dejen sus datos. El equipo responde para entender la boda y la agenda de ese período.",
    anchors: {
      location: "Lugares",
      hotels: "Hoteles",
      day: "El día",
      faq: "FAQ",
      rsvp: "Contacto",
    },
    chapters: [
      {
        title: "El comienzo",
        date: "2004",
        body: "Ninguna boda empieza por el proveedor. Empieza por la pareja — y por quien va a conducir el resto.",
      },
      {
        title: "Río",
        date: "Casa",
        body: "Dos décadas en el piso del evento: vista, horario, acceso, gastronomía. Río como escenario, nunca como cliché.",
      },
      {
        title: "La escucha",
        date: "Método",
        body: "Una conversación para entender quiénes son, qué imaginan, qué vale invertir y qué quieren sentir.",
      },
      {
        title: "Destination",
        date: "Mundo",
        body: "Parejas que planean desde otro estado o país. Tener a alguien local conduciendo las decisiones lo cambia todo.",
      },
      {
        title: "La dirección",
        date: "Presencia",
        body: "Premium por la calidad de la presencia, no por la ostentación. Elegancia sin exceso. Romance sin cliché.",
      },
      {
        title: "El día",
        date: "Ustedes",
        body: "Mientras ustedes viven, el equipo cuida que cada parte esté en el lugar correcto, a la hora correcta.",
      },
    ],
  },
};

export const ui = placeholderContent ? loremizeStrings(rawUi) : rawUi;
