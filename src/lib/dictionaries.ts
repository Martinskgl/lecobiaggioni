import { ipsumLong } from "@/lib/ipsum";
import type { Locale, VenueSlug } from "@/lib/site";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { venues: string; hotels: string; contact: string };
  venuesHome: { cards: Record<VenueSlug, { title: string }> };
  form: { success: string };
  footer: { copyright: string; whatsapp: string };
  venuesPage: { title: string; lead: string; meta: string };
  hotelsPage: { title: string; quote: string; featuredName: string; featuredText: string; cta: string; meta: string };
  aboutPage: {
    title: string;
    subtitle: string;
    history: string;
    philosophy: string;
    teamTitle: string;
    team: string;
    destinationsTitle: string;
    destinations: string;
    cta: string;
    meta: string;
  };
  contactPage: { title: string; lead: string; whatsapp: string; meta: string };
  venuePages: Record<
    VenueSlug,
    {
      name: string;
      hero: string;
      whyTitle: string;
      why: string;
      considerTitle: string;
      consider: string[];
      lecoTitle: string;
      leco: string;
      ctaTitle: string;
      ctaBody: string;
    }
  >;
};

const pt: Dictionary = {
  meta: {
    title: "Legal Gay Wedding Brazil | Casamento civil LGBTQIA+ no Brasil",
    description: "Coordenação de casamento civil no Brasil para casais homoafetivos estrangeiros, com suporte documental e celebrações no Rio de Janeiro.",
  },
  nav: {
    venues: "Onde fazer meu casamento",
    hotels: "Hotéis parceiros",
    contact: "Contato",
  },
  venuesHome: {
    cards: {
      xian: {
        title: "Casamento civil",
      },
      "cristo-redentor": {
        title: "Civil + Elopement",
      },
      zefira: {
        title: "Civil + Destination Wedding",
      },
      "outros-lugares": {
        title: "Renovação de votos",
      },
    },
  },
  form: {
    success: "Abrimos o WhatsApp com a sua mensagem.",
  },
  footer: {
    copyright: "© Leco Biaggìoni",
    whatsapp: "WhatsApp",
  },
  venuesPage: {
    title: "Onde fazer meu casamento",
    lead: "Cada espaço pede um planejamento diferente. Comece pelo lugar — ou deixe a gente ajudar vocês a escolher.",
    meta: "Locais para casar no Rio com Leco Biaggìoni: Xian, Cristo Redentor, Zéfira e outros destinos.",
  },
  hotelsPage: {
    title: "Hotéis parceiros",
    quote: "A experiência dos convidados começa antes da cerimônia.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredText: ipsumLong,
    cta: "Quero orientação de hospedagem para os convidados",
    meta: "Hotéis parceiros do Leco Biaggìoni para convidados de casamento no Rio.",
  },
  aboutPage: {
    title: "Experiência sem distância. Direção sem rigidez.",
    subtitle: "Quem sou eu",
    history: "Desde 2004, Leco Biaggìoni conduz celebrações de alto envolvimento no Rio e em destination weddings. O repertório veio do chão do evento: escuta, timing, fornecedores e a presença de quem sabe o que vem depois.",
    philosophy: "Premium pela qualidade da presença, não pela ostentação. Experiência sem distância; elegância sem excesso; romance sem clichê. Clareza para transformar centenas de decisões em um caminho possível.",
    teamTitle: "Equipe",
    team: "Um time próximo, com atendimento em português, inglês e espanhol. A agenda é limitada de propósito: acompanhamento real em cada casamento.",
    destinationsTitle: "Destinos",
    destinations: "Rio de Janeiro, outras cidades do Brasil e celebrações fora do país. Destination wedding deixa de ser logística e vira condução local.",
    cta: "Consultar disponibilidade da minha data",
    meta: "A história e a filosofia de Leco Biaggìoni, wedding planner no Rio desde 2004.",
  },
  contactPage: {
    title: "Deixe seu contato e nossa equipe entrará em contato",
    lead: "Conte a data, o lugar que imaginam e de onde vocês falam. Respondemos para entender o casamento e verificar a agenda daquele período.",
    whatsapp: "Falar no WhatsApp",
    meta: "Consultar disponibilidade de data com o escritório Leco Biaggìoni.",
  },
  venuePages: {
    xian: {
      name: "Xian",
      hero: "Casar no Xian",
      whyTitle: "Por que escolher o Xian",
      why: "Uma das vistas mais emblemáticas do Rio entra na celebração como cenário e como emoção. O espaço pede um casamento que respire a cidade — sem parecer cartão-postal.",
      considerTitle: "O que considerar",
      consider: [
        "A vista define horário, luz e o ritmo da cerimônia.",
        "Logística de acesso e chegada dos convidados precisa ser desenhada cedo.",
        "Capacidade e operação do espaço pedem um plano de fornecedores alinhado.",
        "Publicamos apenas informações operacionais confirmadas com o local.",
      ],
      lecoTitle: "A visão do Leco",
      leco: "No Xian, o erro mais comum é competir com a paisagem. A direção certa é deixar a vista trabalhar — e cuidar de tudo o que o casal não precisa ver.",
      ctaTitle: "Quer casar no Xian?",
      ctaBody: "Deixe seus dados e verifique a disponibilidade da data.",
    },
    "cristo-redentor": {
      name: "Cristo Redentor",
      hero: "Casar no Cristo Redentor",
      whyTitle: "Por que casar no Cristo",
      why: "Uma cerimônia em um dos lugares mais icônicos do mundo. Poucos gestos são tão memoráveis — e poucos pedem tanta precisão de condução.",
      considerTitle: "O que considerar",
      consider: [
        "Janelas de horário, acesso e operação são específicos deste destino.",
        "Clima e logística de subida precisam de plano B discreto e elegante.",
        "O número de convidados e o formato da cerimônia definem o que é possível.",
        "Trabalhamos somente com informações oficiais confirmadas.",
      ],
      lecoTitle: "A visão do Leco",
      leco: "Casar no Cristo não é um cenário para improvisar. É um rito. A equipe existe para que o casal viva o instante — e não a operação.",
      ctaTitle: "Quer casar no Cristo?",
      ctaBody: "Deixe seus dados e verifique a disponibilidade da data.",
    },
    zefira: {
      name: "Zéfira",
      hero: "Casar no Zéfira",
      whyTitle: "Por que escolher o Zéfira",
      why: "Arquitetura, natureza e uma atmosfera que transforma a celebração. O Zéfira serve a casais que querem presença, não espetáculo.",
      considerTitle: "O que considerar",
      consider: [
        "A arquitetura e o entorno pedem um projeto de decoração sob medida.",
        "Horários, capacidade e operação devem ser confirmados para cada data.",
        "Acesso e experiência dos convidados fazem parte do desenho do dia.",
        "Só publicamos o que estiver oficialmente alinhado com o espaço.",
      ],
      lecoTitle: "A visão do Leco",
      leco: "O Zéfira pede escuta. Quando o espaço já tem alma, a direção é editar — não sobrecarregar.",
      ctaTitle: "Quer casar no Zéfira?",
      ctaBody: "Deixe seus dados e verifique a disponibilidade da data.",
    },
    "outros-lugares": {
      name: "Outros lugares",
      hero: "Casar em outros destinos",
      whyTitle: "Rio, Brasil ou fora dele",
      why: "Nem todo casamento começa com um espaço já escolhido. Às vezes o ponto de partida é o casal, a cidade, a família — e o lugar vem depois.",
      considerTitle: "O que consideramos juntos",
      consider: [
        "Perfil do casal, número de convidados e forma de receber.",
        "Destino no Rio, em outra cidade ou fora do Brasil.",
        "Logística de convidados, hospedagem e janela de data.",
        "Fornecedores que fazem sentido para aquele lugar — não para um catálogo genérico.",
      ],
      lecoTitle: "A visão do Leco",
      leco: "O lugar certo é o que organiza o restante das decisões. A gente ajuda a chegar nele sem pressa artificial.",
      ctaTitle: "Ainda escolhendo o lugar?",
      ctaBody: "Deixe seus dados. Vamos entender o casamento e os destinos possíveis.",
    },
  },
};

const en: Dictionary = {
  meta: {
    title: "Legal Gay Wedding Brazil | LGBTQIA+ civil marriage in Brazil",
    description: "Civil marriage coordination in Brazil for foreign same-sex couples, with document support and celebrations in Rio de Janeiro.",
  },
  nav: {
    venues: "How it works",
    hotels: "Packages",
    contact: "FAQ",
  },
  venuesHome: {
    cards: {
      xian: {
        title: "Xian",
      },
      "cristo-redentor": {
        title: "Christ the Redeemer",
      },
      zefira: {
        title: "Zéfira",
      },
      "outros-lugares": {
        title: "Other destinations",
      },
    },
  },
  form: {
    success: "We opened WhatsApp with your message.",
  },
  footer: {
    copyright: "© Leco Biaggìoni",
    whatsapp: "WhatsApp",
  },
  venuesPage: {
    title: "Where to marry",
    lead: "Each venue asks for a different plan. Start with the place — or let us help you choose.",
    meta: "Wedding venues in Rio with Leco Biaggìoni: Xian, Christ the Redeemer, Zéfira and other destinations.",
  },
  hotelsPage: {
    title: "Partner hotels",
    quote: "Your guests’ experience begins before the ceremony.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredText: ipsumLong,
    cta: "I need guest lodging guidance",
    meta: "Partner hotels for Leco Biaggìoni wedding guests in Rio.",
  },
  aboutPage: {
    title: "Experience without distance. Direction without rigidity.",
    subtitle: "About Leco",
    history: "Since 2004, Leco Biaggìoni has been conducting high-touch celebrations in Rio and on destination weddings. The repertoire comes from the floor of the event: listening, timing, vendors, and the presence of someone who knows what comes next.",
    philosophy: "Premium through the quality of presence, not ostentation. Experience without distance; elegance without excess; romance without cliché. Clarity that turns hundreds of decisions into a possible path.",
    teamTitle: "Team",
    team: "A close team, working in Portuguese, English and Spanish. The calendar is limited on purpose: real accompaniment for every wedding.",
    destinationsTitle: "Destinations",
    destinations: "Rio de Janeiro, other cities in Brazil, and celebrations abroad. A destination wedding becomes local direction — not remote logistics.",
    cta: "Check availability for my date",
    meta: "The story and philosophy of Leco Biaggìoni, wedding planner in Rio since 2004.",
  },
  contactPage: {
    title: "Leave your details and our team will reach out",
    lead: "Tell us the date, the place you imagine, and where you are writing from. We reply to understand the wedding and check that season’s calendar.",
    whatsapp: "Message on WhatsApp",
    meta: "Check date availability with Leco Biaggìoni.",
  },
  venuePages: {
    xian: {
      name: "Xian",
      hero: "Marry at Xian",
      whyTitle: "Why Xian",
      why: "One of Rio’s most emblematic views becomes both setting and emotion. The space asks for a wedding that breathes the city — without looking like a postcard.",
      considerTitle: "What to consider",
      consider: [
        "The view shapes timing, light and the pace of the ceremony.",
        "Access and guest arrival need to be designed early.",
        "Capacity and operations ask for a vendor plan that fits the venue.",
        "We only publish operational details confirmed with the space.",
      ],
      lecoTitle: "Leco’s view",
      leco: "At Xian, the usual mistake is competing with the landscape. The right direction is to let the view work — and take care of everything the couple should not see.",
      ctaTitle: "Want to marry at Xian?",
      ctaBody: "Leave your details and we will check that date.",
    },
    "cristo-redentor": {
      name: "Christ the Redeemer",
      hero: "Marry at Christ the Redeemer",
      whyTitle: "Why the Christ",
      why: "A ceremony in one of the most iconic places on earth. Few gestures are this memorable — and few ask for this much precision.",
      considerTitle: "What to consider",
      consider: [
        "Time windows, access and operations are specific to this destination.",
        "Weather and the ascent need an elegant, discreet plan B.",
        "Guest count and ceremony format define what is possible.",
        "We work only with officially confirmed information.",
      ],
      lecoTitle: "Leco’s view",
      leco: "Marrying at the Christ is not a backdrop to improvise. It is a rite. The team exists so the couple lives the moment — not the operation.",
      ctaTitle: "Want to marry at the Christ?",
      ctaBody: "Leave your details and we will check that date.",
    },
    zefira: {
      name: "Zéfira",
      hero: "Marry at Zéfira",
      whyTitle: "Why Zéfira",
      why: "Architecture, nature, and an atmosphere that changes the celebration. Zéfira is for couples who want presence, not spectacle.",
      considerTitle: "What to consider",
      consider: [
        "Architecture and landscape ask for a made-to-measure design.",
        "Timing, capacity and operations must be confirmed for each date.",
        "Access and guest experience are part of how the day is drawn.",
        "We only publish what is officially aligned with the venue.",
      ],
      lecoTitle: "Leco’s view",
      leco: "Zéfira asks for listening. When a space already has a soul, direction means editing — not overloading.",
      ctaTitle: "Want to marry at Zéfira?",
      ctaBody: "Leave your details and we will check that date.",
    },
    "outros-lugares": {
      name: "Other places",
      hero: "Marry in other destinations",
      whyTitle: "Rio, Brazil, or beyond",
      why: "Not every wedding starts with a venue already chosen. Sometimes the starting point is the couple, the city, the family — and the place comes after.",
      considerTitle: "What we consider together",
      consider: [
        "Who you are, how you host, and how many people you gather.",
        "A destination in Rio, another city, or outside Brazil.",
        "Guest logistics, lodging and the date window.",
        "Vendors that make sense for that place — not a generic catalogue.",
      ],
      lecoTitle: "Leco’s view",
      leco: "The right place is the one that organizes every other decision. We help you reach it without artificial urgency.",
      ctaTitle: "Still choosing the place?",
      ctaBody: "Leave your details. We will understand the wedding and the possible destinations.",
    },
  },
};

const es: Dictionary = {
  meta: {
    title: "Legal Gay Wedding Brazil | Matrimonio civil LGBTQIA+ en Brasil",
    description: "Coordinación de matrimonio civil en Brasil para parejas extranjeras del mismo sexo, con apoyo documental y celebraciones en Rio de Janeiro.",
  },
  nav: {
    venues: "Dónde casarnos",
    hotels: "Hoteles socios",
    contact: "Contacto",
  },
  venuesHome: {
    cards: {
      xian: {
        title: "Xian",
      },
      "cristo-redentor": {
        title: "Cristo Redentor",
      },
      zefira: {
        title: "Zéfira",
      },
      "outros-lugares": {
        title: "Otros destinos",
      },
    },
  },
  form: {
    success: "Abrimos WhatsApp con su mensaje.",
  },
  footer: {
    copyright: "© Leco Biaggìoni",
    whatsapp: "WhatsApp",
  },
  venuesPage: {
    title: "Dónde casarnos",
    lead: "Cada espacio pide un plan distinto. Empiecen por el lugar — o déjennos ayudarlos a elegir.",
    meta: "Lugares para casarse en Río con Leco Biaggìoni: Xian, Cristo Redentor, Zéfira y otros destinos.",
  },
  hotelsPage: {
    title: "Hoteles socios",
    quote: "La experiencia de los invitados empieza antes de la ceremonia.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredText: ipsumLong,
    cta: "Quiero orientación de hospedaje para los invitados",
    meta: "Hoteles socios de Leco Biaggìoni para invitados de boda en Río.",
  },
  aboutPage: {
    title: "Experiencia sin distancia. Dirección sin rigideces.",
    subtitle: "Quién soy",
    history: "Desde 2004, Leco Biaggìoni conduce celebraciones de alto cuidado en Río y en destination weddings. El repertorio nace del piso del evento: escucha, timing, proveedores y la presencia de quien sabe lo que sigue.",
    philosophy: "Premium por la calidad de la presencia, no por la ostentación. Experiencia sin distancia; elegancia sin exceso; romance sin cliché. Claridad para convertir cientos de decisiones en un camino posible.",
    teamTitle: "Equipo",
    team: "Un equipo cercano, en portugués, inglés y español. La agenda es limitada a propósito: acompañamiento real en cada boda.",
    destinationsTitle: "Destinos",
    destinations: "Río de Janeiro, otras ciudades de Brasil y celebraciones fuera del país. El destination wedding deja de ser logística remota y se vuelve dirección local.",
    cta: "Consultar disponibilidad de mi fecha",
    meta: "La historia y la filosofía de Leco Biaggìoni, wedding planner en Río desde 2004.",
  },
  contactPage: {
    title: "Dejen sus datos y el equipo se pondrá en contacto",
    lead: "Cuenten la fecha, el lugar que imaginan y desde dónde escriben. Respondemos para entender la boda y revisar la agenda de ese período.",
    whatsapp: "Hablar por WhatsApp",
    meta: "Consultar disponibilidad de fecha con Leco Biaggìoni.",
  },
  venuePages: {
    xian: {
      name: "Xian",
      hero: "Casarse en Xian",
      whyTitle: "Por qué Xian",
      why: "Una de las vistas más emblemáticas de Río entra en la celebración como escenario y como emoción. El espacio pide una boda que respire la ciudad — sin parecer postal.",
      considerTitle: "Qué considerar",
      consider: [
        "La vista define horario, luz y el ritmo de la ceremonia.",
        "El acceso y la llegada de los invitados se diseñan temprano.",
        "La capacidad y la operación piden un plan de proveedores alineado.",
        "Publicamos solo información operativa confirmada con el espacio.",
      ],
      lecoTitle: "La mirada de Leco",
      leco: "En Xian, el error más común es competir con el paisaje. La dirección correcta es dejar que la vista trabaje — y cuidar todo lo que la pareja no necesita ver.",
      ctaTitle: "¿Quieren casarse en Xian?",
      ctaBody: "Dejen sus datos y revisamos la disponibilidad de la fecha.",
    },
    "cristo-redentor": {
      name: "Cristo Redentor",
      hero: "Casarse en el Cristo Redentor",
      whyTitle: "Por qué el Cristo",
      why: "Una ceremonia en uno de los lugares más icónicos del mundo. Pocos gestos son tan memorables — y pocos piden tanta precisión.",
      considerTitle: "Qué considerar",
      consider: [
        "Ventanas de horario, acceso y operación son específicas de este destino.",
        "Clima y subida necesitan un plan B discreto y elegante.",
        "El número de invitados y el formato de la ceremonia definen lo posible.",
        "Trabajamos solo con información oficial confirmada.",
      ],
      lecoTitle: "La mirada de Leco",
      leco: "Casarse en el Cristo no es un decorado para improvisar. Es un rito. El equipo existe para que la pareja viva el instante — no la operación.",
      ctaTitle: "¿Quieren casarse en el Cristo?",
      ctaBody: "Dejen sus datos y revisamos la disponibilidad de la fecha.",
    },
    zefira: {
      name: "Zéfira",
      hero: "Casarse en Zéfira",
      whyTitle: "Por qué Zéfira",
      why: "Arquitectura, naturaleza y una atmósfera que transforma la celebración. Zéfira es para parejas que quieren presencia, no espectáculo.",
      considerTitle: "Qué considerar",
      consider: [
        "La arquitectura y el entorno piden un proyecto de decoración a medida.",
        "Horarios, capacidad y operación se confirman para cada fecha.",
        "El acceso y la experiencia de los invitados forman parte del dibujo del día.",
        "Solo publicamos lo que esté oficialmente alineado con el espacio.",
      ],
      lecoTitle: "La mirada de Leco",
      leco: "Zéfira pide escucha. Cuando el espacio ya tiene alma, dirigir es editar — no sobrecargar.",
      ctaTitle: "¿Quieren casarse en Zéfira?",
      ctaBody: "Dejen sus datos y revisamos la disponibilidad de la fecha.",
    },
    "outros-lugares": {
      name: "Otros lugares",
      hero: "Casarse en otros destinos",
      whyTitle: "Río, Brasil o más allá",
      why: "No toda boda empieza con un espacio ya elegido. A veces el punto de partida es la pareja, la ciudad, la familia — y el lugar llega después.",
      considerTitle: "Qué consideramos juntos",
      consider: [
        "El perfil de la pareja, el número de invitados y la forma de recibir.",
        "Un destino en Río, en otra ciudad o fuera de Brasil.",
        "Logística de invitados, hospedaje y ventana de fecha.",
        "Proveedores que tengan sentido para ese lugar — no para un catálogo genérico.",
      ],
      lecoTitle: "La mirada de Leco",
      leco: "El lugar correcto es el que ordena el resto de las decisiones. Ayudamos a llegar a él sin urgencia artificial.",
      ctaTitle: "¿Siguen eligiendo el lugar?",
      ctaBody: "Dejen sus datos. Vamos a entender la boda y los destinos posibles.",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
