import type { Locale, VenueSlug } from "@/lib/site";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    venues: string;
    hotels: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    lead: string;
    cta: string;
    line: string;
  };
  editorial: {
    title: string;
    subtitle: string;
    body: string;
  };
  since: {
    kicker: string;
    title: string;
    body: string;
    close: string;
  };
  visualBreak: {
    title: string;
  };
  method: {
    kicker: string;
    title: string;
    cta: string;
    steps: { n: string; title: string; body: string }[];
  };
  included: {
    kicker: string;
    title: string;
    lead: string;
    items: string[];
    packages: string;
    cta: string;
  };
  venuesHome: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    cards: Record<VenueSlug, { title: string; text: string; action: string }>;
  };
  quote: { text: string; author: string };
  hotelsHome: {
    kicker: string;
    title: string;
    lead: string;
    highlight: string;
    cta: string;
  };
  destination: {
    title: string;
    body: string;
    note: string;
    cta: string;
  };
  aboutHome: {
    kicker: string;
    title: string;
    body: string;
    stamp: string;
    cta: string;
  };
  testimonials: {
    kicker: string;
    title: string;
    disclaimer: string;
    items: { quote: string; couple: string }[];
  };
  gallery: {
    kicker: string;
    title: string;
    items: { place: string; year: string }[];
  };
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    body: string;
    cta: string;
    micro: string;
  };
  form: {
    name: string;
    whatsapp: string;
    email: string;
    date: string;
    venue: string;
    venueOpen: string;
    guests: string;
    city: string;
    submit: string;
    success: string;
  };
  footer: {
    tagline: string;
    services: string;
    city: string;
    copyright: string;
    whatsapp: string;
  };
  venuesPage: {
    title: string;
    lead: string;
    meta: string;
  };
  hotelsPage: {
    title: string;
    lead: string;
    quote: string;
    featuredName: string;
    featuredPlace: string;
    featuredText: string;
    moreTitle: string;
    cta: string;
    meta: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    history: string;
    philosophyTitle: string;
    philosophy: string;
    teamTitle: string;
    team: string;
    destinationsTitle: string;
    destinations: string;
    cta: string;
    meta: string;
  };
  contactPage: {
    title: string;
    lead: string;
    whatsapp: string;
    meta: string;
  };
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
      faq: { q: string; a: string }[];
      ctaTitle: string;
      ctaBody: string;
    }
  >;
};

const pt: Dictionary = {
  meta: {
    title: "Leco Biaggìoni — Celebração com direção",
    description:
      "Planejamento de casamentos no Rio de Janeiro desde 2004. Assessoria, cerimonial e decoração com direção próxima e agenda limitada.",
  },
  nav: {
    home: "Home",
    venues: "Onde fazer meu casamento",
    hotels: "Hotéis parceiros",
    about: "Quem sou eu",
    contact: "Contato",
    cta: "Consultar minha data",
  },
  hero: {
    title: "O casamento é de vocês. A direção, deixa com a gente.",
    lead: "Do primeiro encontro ao último convidado, conduzimos cada escolha para que vocês possam viver o que realmente importa: estar presentes.",
    cta: "Consultar disponibilidade da minha data",
    line: "Planejamento · Assessoria · Cerimonial · Decoração",
  },
  editorial: {
    title: "Vocês não precisam saber como organizar um casamento.",
    subtitle:
      "Precisam saber que existe alguém que sabe exatamente o que vem depois.",
    body: "Um casamento envolve centenas de decisões. Local, fornecedores, orçamento, cronograma, decoração, convidados, cerimônia. Nosso trabalho é transformar toda essa complexidade em um caminho claro — com experiência, presença e alguém cuidando de cada detalhe.",
  },
  since: {
    kicker: "Desde 2004",
    title:
      "Mais de duas décadas entendendo que nenhum casamento começa pelo fornecedor.",
    body: "Começa pelo casal. Pelo jeito de vocês receberem. Pelo que faz sentido investir. Pelo que vocês querem sentir quando esse dia chegar.",
    close: "A partir daí, a gente conduz o resto.",
  },
  visualBreak: {
    title: "Tudo no tempo certo. Vocês presentes em cada momento.",
  },
  method: {
    kicker: "Como o Leco trabalha",
    title: "Um casamento bem conduzido começa antes de qualquer contratação.",
    cta: "Entender como funciona",
    steps: [
      {
        n: "01",
        title: "A gente escuta",
        body: "Tudo começa com uma conversa. Entendemos quem vocês são, o que imaginam para esse dia, suas prioridades, número de convidados, estilo e budget.",
      },
      {
        n: "02",
        title: "A gente organiza",
        body: "Traduzimos tudo isso em um plano claro. Indicamos caminhos, antecipamos decisões e conectamos vocês aos fornecedores que realmente fazem sentido.",
      },
      {
        n: "03",
        title: "A gente conduz",
        body: "Enquanto vocês vivem o processo, nossa equipe cuida para que cada parte esteja no lugar certo, na hora certa.",
      },
    ],
  },
  included: {
    kicker: "O que está incluído",
    title: "Do planejamento ao grande dia. Uma equipe olhando para o todo.",
    lead: "Existem diferentes maneiras de começar. Mas o objetivo é sempre o mesmo: fazer com que todas as decisões conversem entre si.",
    items: [
      "Planejamento",
      "Assessoria",
      "Cerimonial",
      "Curadoria de fornecedores",
      "Cronograma",
      "Identidade visual",
      "Decoração",
      "Experiência dos convidados",
    ],
    packages: "Pacote Completo ou Assessoria + Cerimonial.",
    cta: "Quero entender qual formato faz sentido para mim",
  },
  venuesHome: {
    kicker: "Onde fazer meu casamento",
    title: "O lugar muda tudo. Inclusive a forma de planejar.",
    lead: "Vista, arquitetura, logística, horário, gastronomia, acesso, estrutura. Cada espaço oferece possibilidades diferentes — e pede decisões diferentes. Conheça alguns dos lugares onde podemos criar o casamento de vocês.",
    cta: "Ver todos os lugares",
    cards: {
      xian: {
        title: "Xian",
        text: "Casamentos com uma das vistas mais emblemáticas do Rio.",
        action: "Conhecer o Xian",
      },
      "cristo-redentor": {
        title: "Cristo Redentor",
        text: "Uma cerimônia em um dos lugares mais icônicos do mundo.",
        action: "Casar no Cristo",
      },
      zefira: {
        title: "Zéfira",
        text: "Arquitetura, natureza e uma atmosfera que transforma a celebração.",
        action: "Conhecer o Zéfira",
      },
      "outros-lugares": {
        title: "Outros destinos",
        text: "Rio, Brasil ou fora dele.",
        action: "Descobrir outros lugares",
      },
    },
  },
  quote: {
    text: "O melhor fornecedor não é o mais caro. É aquele que faz sentido para o casamento de vocês.",
    author: "Leco Biaggìoni",
  },
  hotelsHome: {
    kicker: "Hotéis parceiros",
    title: "A experiência dos seus convidados começa antes da cerimônia.",
    lead: "Quando familiares e amigos vêm de outras cidades ou países, hospedagem também faz parte do planejamento. Por isso, mantemos relacionamento com hotéis selecionados para facilitar a estadia dos convidados e tornar toda a experiência mais simples.",
    highlight: "Destaque inicial: Hotel Nacional Rio de Janeiro.",
    cta: "Ver hotéis parceiros",
  },
  destination: {
    title: "Getting married in Rio should feel exciting. Not complicated.",
    body: "Para quem está planejando o casamento de outro estado ou de outro país, ter alguém local conduzindo decisões faz toda a diferença. Nossa equipe acompanha fornecedores, logística, planejamento e cada próximo passo — mesmo quando vocês estão a milhares de quilômetros daqui.",
    note: "Equipe bilíngue. Atendimento em português, inglês e espanhol.",
    cta: "Plan your wedding in Rio",
  },
  aboutHome: {
    kicker: "Quem é Leco",
    title: "Experiência suficiente para antecipar. Proximidade suficiente para ouvir.",
    body: "Leco Biaggìoni está há mais de duas décadas conduzindo celebrações dentro e fora do Rio de Janeiro. Mas experiência, aqui, nunca significou distância. É estar perto para orientar. Ter repertório para recomendar. E ter segurança para saber quando uma ideia funciona — e quando existe um caminho melhor.",
    stamp: "Leco Biaggìoni · Planejamento de Casamentos · Since 2004",
    cta: "Conheça minha história",
  },
  testimonials: {
    kicker: "Depoimentos",
    title: "Depois do casamento, fica o que foi vivido.",
    disclaimer:
      "Depoimentos de layout — serão substituídos por avaliações reais antes da publicação.",
    items: [
      {
        quote:
          "Durante todo o processo, parecia que alguém já estava pensando na próxima decisão antes mesmo de a gente perguntar.",
        couple: "Marina & Rafael",
      },
      {
        quote:
          "A gente conseguiu aproveitar o casamento. De verdade. Porque sabia que o Leco e a equipe estavam cuidando de tudo.",
        couple: "Isabela & Pedro",
      },
      {
        quote:
          "Planejamos boa parte do casamento de fora do Brasil e ainda assim nos sentimos seguros durante todo o processo.",
        couple: "Charlotte & Lucas",
      },
    ],
  },
  gallery: {
    kicker: "Histórias",
    title: "Casamentos têm roteiro. Mas nunca deveriam parecer iguais.",
    items: [
      { place: "Xian", year: "2024" },
      { place: "Cristo Redentor", year: "2023" },
      { place: "Zéfira", year: "2025" },
      { place: "Santa Teresa", year: "2024" },
      { place: "Copacabana", year: "2022" },
      { place: "Destination", year: "2025" },
    ],
  },
  faq: {
    kicker: "Antes de começarmos",
    title: "Perguntas frequentes",
    items: [
      {
        q: "Vocês fazem casamentos fora do Rio?",
        a: "Sim. Atendemos eventos no Rio, em outras cidades e também destination weddings.",
      },
      {
        q: "Vocês cuidam apenas do cerimonial do dia?",
        a: "Trabalhamos com diferentes formatos de atendimento, incluindo Pacote Completo e Assessoria + Cerimonial.",
      },
      {
        q: "Vocês também fazem decoração?",
        a: "Sim. Desenvolvemos projetos de decoração exclusivos de acordo com o conceito do casamento.",
      },
      {
        q: "Vocês atendem casais que moram fora do Brasil?",
        a: "Sim. Nossa equipe está preparada para conduzir o planejamento à distância e possui atendimento bilíngue.",
      },
    ],
  },
  finalCta: {
    title: "Sua data pode ser o começo da nossa próxima história.",
    body: "Para manter um acompanhamento próximo em cada casamento, nossa agenda é organizada de acordo com a disponibilidade de cada período. Deixe seus dados e nossa equipe entrará em contato para entender o casamento de vocês e verificar a disponibilidade da data.",
    cta: "Quero consultar minha data",
    micro: "Nossa equipe entrará em contato com você.",
  },
  form: {
    name: "Nome",
    whatsapp: "WhatsApp",
    email: "E-mail",
    date: "Data prevista",
    venue: "Local desejado",
    venueOpen: "Ainda não decidimos",
    guests: "Número aproximado de convidados",
    city: "Cidade / país onde mora",
    submit: "Enviar pelo WhatsApp",
    success: "Abrimos o WhatsApp com a sua mensagem.",
  },
  footer: {
    tagline: "Celebração com direção.",
    services: "Planejamento de casamentos · Assessoria · Cerimonial · Decoração",
    city: "Rio de Janeiro · Brasil · Destination Weddings",
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
    lead: "Hotéis selecionados para receber os convidados do casamento com conforto, localização e praticidade.",
    quote: "A experiência dos convidados começa antes da cerimônia.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredPlace: "São Conrado · Rio de Janeiro",
    featuredText:
      "Parceiro de destaque para receber famílias e amigos que chegam de outras cidades ou do exterior. Orientamos room blocks e a logística de hospedagem junto ao restante do planejamento.",
    moreTitle: "Novos parceiros",
    cta: "Quero orientação de hospedagem para os convidados",
    meta: "Hotéis parceiros do Leco Biaggìoni para convidados de casamento no Rio.",
  },
  aboutPage: {
    title: "Experiência sem distância. Direção sem rigidez.",
    subtitle: "Quem sou eu",
    history:
      "Desde 2004, Leco Biaggìoni conduz celebrações de alto envolvimento no Rio e em destination weddings. O repertório veio do chão do evento: escuta, timing, fornecedores e a presença de quem sabe o que vem depois.",
    philosophyTitle: "Filosofia",
    philosophy:
      "Premium pela qualidade da presença, não pela ostentação. Experiência sem distância; elegância sem excesso; romance sem clichê. Clareza para transformar centenas de decisões em um caminho possível.",
    teamTitle: "Equipe",
    team: "Um time próximo, com atendimento em português, inglês e espanhol. A agenda é limitada de propósito: acompanhamento real em cada casamento.",
    destinationsTitle: "Destinos",
    destinations:
      "Rio de Janeiro, outras cidades do Brasil e celebrações fora do país. Destination wedding deixa de ser logística e vira condução local.",
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
      faq: [
        {
          q: "Dá para fazer cerimônia e festa no mesmo espaço?",
          a: "Na maior parte dos casos, sim. O formato depende da data, do horário e do número de convidados.",
        },
        {
          q: "Vocês já realizaram casamentos no Xian?",
          a: "Sim. Quando o acervo puder ser publicado, a galeria desta página recebe essas histórias.",
        },
      ],
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
      faq: [
        {
          q: "É possível fazer a festa no Cristo?",
          a: "O Cristo é, em geral, um destino de cerimônia. A festa costuma acontecer em outro espaço, escolhido em conjunto.",
        },
        {
          q: "Atendem casais que vêm de fora do Brasil?",
          a: "Sim. Destination wedding no Cristo pede condução local e atendimento bilíngue — exatamente o que fazemos.",
        },
      ],
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
      faq: [
        {
          q: "O espaço funciona bem de dia e à noite?",
          a: "Sim, com projetos diferentes. Luz, layout e ritmo da festa mudam conforme o horário.",
        },
        {
          q: "Vocês também assinam a decoração?",
          a: "Sim. Desenvolvemos projetos exclusivos de acordo com o conceito do casamento.",
        },
      ],
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
      faq: [
        {
          q: "Vocês atendem fora do Rio?",
          a: "Sim. Fazemos casamentos em outras cidades e destination weddings.",
        },
        {
          q: "Já temos um espaço. Vocês assumem a condução?",
          a: "Sim. Avaliamos o local e desenhamos o formato de atendimento que faz sentido.",
        },
      ],
      ctaTitle: "Ainda escolhendo o lugar?",
      ctaBody: "Deixe seus dados. Vamos entender o casamento e os destinos possíveis.",
    },
  },
};

const en: Dictionary = {
  meta: {
    title: "Leco Biaggìoni — Celebration with direction",
    description:
      "Luxury wedding planning in Rio de Janeiro since 2004. A bilingual local team for destination weddings in Brazil.",
  },
  nav: {
    home: "Home",
    venues: "Where to marry",
    hotels: "Partner hotels",
    about: "About Leco",
    contact: "Contact",
    cta: "Check my date",
  },
  hero: {
    title: "The wedding is yours. The direction is ours.",
    lead: "From the first conversation to the last guest, we conduct every choice so you can be present for what matters.",
    cta: "Check availability for my date",
    line: "Planning · Coordination · Ceremony · Design",
  },
  editorial: {
    title: "You do not need to know how to plan a wedding.",
    subtitle: "You need to know someone who already knows what comes next.",
    body: "A wedding is hundreds of decisions: venue, vendors, budget, timeline, design, guests, ceremony. Our work is to turn that complexity into a clear path — with experience, presence, and someone holding every detail.",
  },
  since: {
    kicker: "Since 2004",
    title: "More than two decades of knowing a wedding never starts with a vendor.",
    body: "It starts with the couple. How you host. What is worth investing in. How you want to feel when the day arrives.",
    close: "From there, we conduct the rest.",
  },
  visualBreak: {
    title: "Everything in its time. You, present in every moment.",
  },
  method: {
    kicker: "How Leco works",
    title: "A well-conducted wedding begins before any booking.",
    cta: "See how it works",
    steps: [
      {
        n: "01",
        title: "We listen",
        body: "It starts with a conversation. Who you are, what you imagine, your priorities, guest count, style and budget.",
      },
      {
        n: "02",
        title: "We organize",
        body: "We turn that into a clear plan. We anticipate decisions and connect you with vendors who actually fit your wedding.",
      },
      {
        n: "03",
        title: "We conduct",
        body: "While you live the process, our team keeps every part in the right place, at the right time.",
      },
    ],
  },
  included: {
    kicker: "What is included",
    title: "From planning to the day itself. One team watching the whole.",
    lead: "There are different ways to begin. The aim is always the same: every decision should speak to the others.",
    items: [
      "Planning",
      "Coordination",
      "Ceremony direction",
      "Vendor curation",
      "Timeline",
      "Visual identity",
      "Design",
      "Guest experience",
    ],
    packages: "Full planning or coordination + ceremony.",
    cta: "Help me understand which format fits",
  },
  venuesHome: {
    kicker: "Where to marry",
    title: "The place changes everything. Including how you plan.",
    lead: "View, architecture, logistics, timing, food, access, structure. Each venue opens different possibilities — and asks for different decisions.",
    cta: "See every venue",
    cards: {
      xian: {
        title: "Xian",
        text: "Weddings with one of Rio’s most emblematic views.",
        action: "Discover Xian",
      },
      "cristo-redentor": {
        title: "Christ the Redeemer",
        text: "A ceremony in one of the most iconic places on earth.",
        action: "Marry at Christ",
      },
      zefira: {
        title: "Zéfira",
        text: "Architecture, nature, and an atmosphere that changes the celebration.",
        action: "Discover Zéfira",
      },
      "outros-lugares": {
        title: "Other destinations",
        text: "Rio, Brazil, or beyond.",
        action: "Explore other places",
      },
    },
  },
  quote: {
    text: "The best vendor is not the most expensive. It is the one that makes sense for your wedding.",
    author: "Leco Biaggìoni",
  },
  hotelsHome: {
    kicker: "Partner hotels",
    title: "Your guests’ experience begins before the ceremony.",
    lead: "When family and friends travel from other cities or countries, lodging is part of the plan. We keep relationships with selected hotels to make their stay simpler.",
    highlight: "Featured partner: Hotel Nacional Rio de Janeiro.",
    cta: "See partner hotels",
  },
  destination: {
    title: "Getting married in Rio should feel exciting. Not complicated.",
    body: "If you are planning from another state or another country, a local team conducting each decision changes everything. We follow vendors, logistics, planning and every next step — even when you are thousands of kilometres away.",
    note: "Bilingual team. Portuguese, English and Spanish.",
    cta: "Plan your wedding in Rio",
  },
  aboutHome: {
    kicker: "About Leco",
    title: "Enough experience to anticipate. Enough closeness to listen.",
    body: "Leco Biaggìoni has been conducting celebrations in Rio and beyond for more than two decades. Experience, here, never meant distance. It means being close enough to guide, seasoned enough to recommend, and secure enough to know when there is a better path.",
    stamp: "Leco Biaggìoni · Wedding Planning · Since 2004",
    cta: "Read my story",
  },
  testimonials: {
    kicker: "Kind words",
    title: "After the wedding, what remains is what was lived.",
    disclaimer: "Layout placeholders — to be replaced with real reviews before launch.",
    items: [
      {
        quote:
          "The whole time, it felt as if someone was already thinking of the next decision before we asked.",
        couple: "Marina & Rafael",
      },
      {
        quote:
          "We actually enjoyed our wedding. Because we knew Leco and the team were taking care of everything.",
        couple: "Isabela & Pedro",
      },
      {
        quote:
          "We planned most of the wedding from abroad and still felt safe through the entire process.",
        couple: "Charlotte & Lucas",
      },
    ],
  },
  gallery: {
    kicker: "Stories",
    title: "Weddings have a script. They should never look the same.",
    items: [
      { place: "Xian", year: "2024" },
      { place: "Christ the Redeemer", year: "2023" },
      { place: "Zéfira", year: "2025" },
      { place: "Santa Teresa", year: "2024" },
      { place: "Copacabana", year: "2022" },
      { place: "Destination", year: "2025" },
    ],
  },
  faq: {
    kicker: "Before we begin",
    title: "Questions we hear often",
    items: [
      {
        q: "Do you plan weddings outside Rio?",
        a: "Yes. We work in Rio, in other cities, and on destination weddings.",
      },
      {
        q: "Do you only handle the day-of ceremony?",
        a: "We work in different formats, including full planning and coordination + ceremony.",
      },
      {
        q: "Do you also design the wedding?",
        a: "Yes. We create exclusive design projects around the concept of each celebration.",
      },
      {
        q: "Do you work with couples living outside Brazil?",
        a: "Yes. We are used to planning from a distance, with a bilingual team.",
      },
    ],
  },
  finalCta: {
    title: "Your date could be the beginning of our next story.",
    body: "To stay close to every couple, our calendar follows the real availability of each season. Leave your details and we will reach out to understand your wedding and check that date.",
    cta: "I want to check my date",
    micro: "Our team will get in touch with you.",
  },
  form: {
    name: "Name",
    whatsapp: "WhatsApp",
    email: "Email",
    date: "Intended date",
    venue: "Desired venue",
    venueOpen: "We have not decided yet",
    guests: "Approximate guest count",
    city: "City / country you live in",
    submit: "Send via WhatsApp",
    success: "WhatsApp is ready with your message.",
  },
  footer: {
    tagline: "Celebration with direction.",
    services: "Wedding planning · Coordination · Ceremony · Design",
    city: "Rio de Janeiro · Brazil · Destination Weddings",
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
    lead: "Selected hotels so wedding guests arrive with comfort, location and ease.",
    quote: "Your guests’ experience begins before the ceremony.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredPlace: "São Conrado · Rio de Janeiro",
    featuredText:
      "Our featured partner for families and friends arriving from other cities or from abroad. We help with room blocks and lodging logistics as part of the plan.",
    moreTitle: "More partners",
    cta: "I need guest lodging guidance",
    meta: "Partner hotels for Leco Biaggìoni wedding guests in Rio.",
  },
  aboutPage: {
    title: "Experience without distance. Direction without rigidity.",
    subtitle: "About Leco",
    history:
      "Since 2004, Leco Biaggìoni has been conducting high-touch celebrations in Rio and on destination weddings. The repertoire comes from the floor of the event: listening, timing, vendors, and the presence of someone who knows what comes next.",
    philosophyTitle: "Philosophy",
    philosophy:
      "Premium through the quality of presence, not ostentation. Experience without distance; elegance without excess; romance without cliché. Clarity that turns hundreds of decisions into a possible path.",
    teamTitle: "Team",
    team: "A close team, working in Portuguese, English and Spanish. The calendar is limited on purpose: real accompaniment for every wedding.",
    destinationsTitle: "Destinations",
    destinations:
      "Rio de Janeiro, other cities in Brazil, and celebrations abroad. A destination wedding becomes local direction — not remote logistics.",
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
      faq: [
        {
          q: "Can ceremony and reception happen in the same place?",
          a: "In most cases, yes. The format depends on the date, the timing and the guest count.",
        },
        {
          q: "Have you already held weddings at Xian?",
          a: "Yes. When the archive can be published, this page will hold those stories.",
        },
      ],
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
      faq: [
        {
          q: "Can the reception happen at the Christ?",
          a: "The Christ is usually a ceremony destination. The reception typically takes place at another venue, chosen together.",
        },
        {
          q: "Do you work with couples coming from abroad?",
          a: "Yes. A destination wedding at the Christ asks for local direction and a bilingual team — exactly what we do.",
        },
      ],
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
      faq: [
        {
          q: "Does the venue work by day and by night?",
          a: "Yes, with different projects. Light, layout and the pace of the party change with the hour.",
        },
        {
          q: "Do you also sign the design?",
          a: "Yes. We create exclusive projects around the concept of the wedding.",
        },
      ],
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
      faq: [
        {
          q: "Do you work outside Rio?",
          a: "Yes. We plan weddings in other cities and destination weddings.",
        },
        {
          q: "We already have a venue. Can you take over?",
          a: "Yes. We assess the place and design the format of work that fits.",
        },
      ],
      ctaTitle: "Still choosing the place?",
      ctaBody: "Leave your details. We will understand the wedding and the possible destinations.",
    },
  },
};

const es: Dictionary = {
  meta: {
    title: "Leco Biaggìoni — Celebración con dirección",
    description:
      "Wedding planner en Río de Janeiro desde 2004. Equipo local bilingüe para destination weddings en Brasil.",
  },
  nav: {
    home: "Home",
    venues: "Dónde casarnos",
    hotels: "Hoteles socios",
    about: "Quién soy",
    contact: "Contacto",
    cta: "Consultar mi fecha",
  },
  hero: {
    title: "La boda es de ustedes. La dirección, déjenla con nosotros.",
    lead: "Desde la primera conversación hasta el último invitado, conducimos cada elección para que puedan estar presentes en lo que importa.",
    cta: "Consultar disponibilidad de mi fecha",
    line: "Planificación · Asesoría · Ceremonial · Decoración",
  },
  editorial: {
    title: "No necesitan saber cómo organizar una boda.",
    subtitle: "Necesitan saber que hay alguien que sabe exactamente lo que sigue.",
    body: "Una boda son cientos de decisiones: lugar, proveedores, presupuesto, cronograma, decoración, invitados, ceremonia. Nuestro trabajo es convertir esa complejidad en un camino claro — con experiencia, presencia y alguien cuidando cada detalle.",
  },
  since: {
    kicker: "Desde 2004",
    title: "Más de dos décadas entendiendo que ninguna boda empieza por el proveedor.",
    body: "Empieza por la pareja. Por cómo reciben. Por lo que vale la pena invertir. Por lo que quieren sentir cuando llegue ese día.",
    close: "A partir de ahí, nosotros conducimos el resto.",
  },
  visualBreak: {
    title: "Todo a su tiempo. Ustedes presentes en cada momento.",
  },
  method: {
    kicker: "Cómo trabaja Leco",
    title: "Una boda bien conducida empieza antes de cualquier contratación.",
    cta: "Entender cómo funciona",
    steps: [
      {
        n: "01",
        title: "Escuchamos",
        body: "Todo empieza con una conversación. Quiénes son, qué imaginan, prioridades, número de invitados, estilo y presupuesto.",
      },
      {
        n: "02",
        title: "Organizamos",
        body: "Lo traducimos en un plan claro. Anticipamos decisiones y los conectamos con los proveedores que de verdad tienen sentido.",
      },
      {
        n: "03",
        title: "Conducimos",
        body: "Mientras ustedes viven el proceso, el equipo cuida que cada parte esté en el lugar y en la hora correctos.",
      },
    ],
  },
  included: {
    kicker: "Qué está incluido",
    title: "De la planificación al gran día. Un equipo mirando el conjunto.",
    lead: "Hay distintas maneras de empezar. El objetivo es siempre el mismo: que todas las decisiones conversen entre sí.",
    items: [
      "Planificación",
      "Asesoría",
      "Ceremonial",
      "Curaduría de proveedores",
      "Cronograma",
      "Identidad visual",
      "Decoración",
      "Experiencia de los invitados",
    ],
    packages: "Paquete completo o asesoría + ceremonial.",
    cta: "Quiero entender qué formato tiene sentido",
  },
  venuesHome: {
    kicker: "Dónde casarnos",
    title: "El lugar lo cambia todo. También la forma de planear.",
    lead: "Vista, arquitectura, logística, horario, gastronomía, acceso, estructura. Cada espacio abre posibilidades distintas — y pide decisiones distintas.",
    cta: "Ver todos los lugares",
    cards: {
      xian: {
        title: "Xian",
        text: "Bodas con una de las vistas más emblemáticas de Río.",
        action: "Conocer Xian",
      },
      "cristo-redentor": {
        title: "Cristo Redentor",
        text: "Una ceremonia en uno de los lugares más icónicos del mundo.",
        action: "Casarse en el Cristo",
      },
      zefira: {
        title: "Zéfira",
        text: "Arquitectura, naturaleza y una atmósfera que transforma la celebración.",
        action: "Conocer Zéfira",
      },
      "outros-lugares": {
        title: "Otros destinos",
        text: "Río, Brasil o más allá.",
        action: "Descubrir otros lugares",
      },
    },
  },
  quote: {
    text: "El mejor proveedor no es el más caro. Es el que tiene sentido para la boda de ustedes.",
    author: "Leco Biaggìoni",
  },
  hotelsHome: {
    kicker: "Hoteles socios",
    title: "La experiencia de sus invitados empieza antes de la ceremonia.",
    lead: "Cuando la familia y los amigos llegan de otras ciudades o países, el hotel también forma parte del plan. Por eso mantenemos relación con hoteles seleccionados.",
    highlight: "Socio destacado: Hotel Nacional Rio de Janeiro.",
    cta: "Ver hoteles socios",
  },
  destination: {
    title: "Casarse en Río debería emocionar. No complicar.",
    body: "Si están planeando desde otro país, tener un equipo local conduciendo cada decisión cambia todo. Acompañamos proveedores, logística, planificación y el siguiente paso — aunque estén a miles de kilómetros.",
    note: "Equipo bilingüe. Portugués, inglés y español.",
    cta: "Plan your wedding in Rio",
  },
  aboutHome: {
    kicker: "Quién es Leco",
    title: "Experiencia para anticipar. Cercanía para escuchar.",
    body: "Leco Biaggìoni lleva más de dos décadas conduciendo celebraciones en Río y fuera de él. Experiencia, aquí, nunca significó distancia. Es estar cerca para orientar, tener repertorio para recomendar y seguridad para saber cuándo hay un camino mejor.",
    stamp: "Leco Biaggìoni · Planificación de bodas · Since 2004",
    cta: "Conoce mi historia",
  },
  testimonials: {
    kicker: "Testimonios",
    title: "Después de la boda, queda lo que se vivió.",
    disclaimer: "Testimonios de layout — se reemplazarán por reseñas reales antes de publicar.",
    items: [
      {
        quote:
          "Durante todo el proceso parecía que alguien ya estaba pensando la siguiente decisión antes de que preguntáramos.",
        couple: "Marina & Rafael",
      },
      {
        quote:
          "Pudimos disfrutar la boda. De verdad. Porque sabíamos que Leco y el equipo cuidaban de todo.",
        couple: "Isabela & Pedro",
      },
      {
        quote:
          "Planeamos gran parte de la boda desde fuera de Brasil y aun así nos sentimos seguros en todo el proceso.",
        couple: "Charlotte & Lucas",
      },
    ],
  },
  gallery: {
    kicker: "Historias",
    title: "Las bodas tienen un guion. Nunca deberían parecer iguales.",
    items: [
      { place: "Xian", year: "2024" },
      { place: "Cristo Redentor", year: "2023" },
      { place: "Zéfira", year: "2025" },
      { place: "Santa Teresa", year: "2024" },
      { place: "Copacabana", year: "2022" },
      { place: "Destination", year: "2025" },
    ],
  },
  faq: {
    kicker: "Antes de empezar",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Hacen bodas fuera de Río?",
        a: "Sí. Atendemos en Río, en otras ciudades y destination weddings.",
      },
      {
        q: "¿Solo se ocupan del ceremonial del día?",
        a: "Trabajamos con distintos formatos, incluyendo paquete completo y asesoría + ceremonial.",
      },
      {
        q: "¿También hacen la decoración?",
        a: "Sí. Desarrollamos proyectos exclusivos según el concepto de cada boda.",
      },
      {
        q: "¿Atienden a parejas que viven fuera de Brasil?",
        a: "Sí. El equipo está preparado para planear a distancia, con atención bilingüe.",
      },
    ],
  },
  finalCta: {
    title: "Su fecha puede ser el comienzo de nuestra próxima historia.",
    body: "Para acompañar de cerca cada boda, la agenda se organiza según la disponibilidad real de cada período. Dejen sus datos y el equipo se pondrá en contacto para entender la celebración y revisar esa fecha.",
    cta: "Quiero consultar mi fecha",
    micro: "Nuestro equipo se pondrá en contacto con ustedes.",
  },
  form: {
    name: "Nombre",
    whatsapp: "WhatsApp",
    email: "E-mail",
    date: "Fecha prevista",
    venue: "Lugar deseado",
    venueOpen: "Todavía no decidimos",
    guests: "Número aproximado de invitados",
    city: "Ciudad / país donde viven",
    submit: "Enviar por WhatsApp",
    success: "Abrimos WhatsApp con su mensaje.",
  },
  footer: {
    tagline: "Celebración con dirección.",
    services: "Planificación de bodas · Asesoría · Ceremonial · Decoración",
    city: "Río de Janeiro · Brasil · Destination Weddings",
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
    lead: "Hoteles seleccionados para recibir a los invitados con confort, ubicación y practicidad.",
    quote: "La experiencia de los invitados empieza antes de la ceremonia.",
    featuredName: "Hotel Nacional Rio de Janeiro",
    featuredPlace: "São Conrado · Río de Janeiro",
    featuredText:
      "Socio destacado para familias y amigos que llegan de otras ciudades o del exterior. Orientamos room blocks y la logística de hospedaje dentro del plan.",
    moreTitle: "Más socios",
    cta: "Quiero orientación de hospedaje para los invitados",
    meta: "Hoteles socios de Leco Biaggìoni para invitados de boda en Río.",
  },
  aboutPage: {
    title: "Experiencia sin distancia. Dirección sin rigideces.",
    subtitle: "Quién soy",
    history:
      "Desde 2004, Leco Biaggìoni conduce celebraciones de alto cuidado en Río y en destination weddings. El repertorio nace del piso del evento: escucha, timing, proveedores y la presencia de quien sabe lo que sigue.",
    philosophyTitle: "Filosofía",
    philosophy:
      "Premium por la calidad de la presencia, no por la ostentación. Experiencia sin distancia; elegancia sin exceso; romance sin cliché. Claridad para convertir cientos de decisiones en un camino posible.",
    teamTitle: "Equipo",
    team: "Un equipo cercano, en portugués, inglés y español. La agenda es limitada a propósito: acompañamiento real en cada boda.",
    destinationsTitle: "Destinos",
    destinations:
      "Río de Janeiro, otras ciudades de Brasil y celebraciones fuera del país. El destination wedding deja de ser logística remota y se vuelve dirección local.",
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
      faq: [
        {
          q: "¿Se pueden hacer ceremonia y fiesta en el mismo espacio?",
          a: "En la mayoría de los casos, sí. El formato depende de la fecha, el horario y el número de invitados.",
        },
        {
          q: "¿Ya realizaron bodas en Xian?",
          a: "Sí. Cuando el archivo pueda publicarse, esta página recibirá esas historias.",
        },
      ],
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
      faq: [
        {
          q: "¿La fiesta puede ser en el Cristo?",
          a: "El Cristo suele ser un destino de ceremonia. La fiesta acontece, en general, en otro espacio, elegido juntos.",
        },
        {
          q: "¿Atienden a parejas que vienen de fuera de Brasil?",
          a: "Sí. Un destination wedding en el Cristo pide dirección local y equipo bilingüe — exactamente lo que hacemos.",
        },
      ],
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
      faq: [
        {
          q: "¿El espacio funciona de día y de noche?",
          a: "Sí, con proyectos distintos. Luz, layout y ritmo de la fiesta cambian con el horario.",
        },
        {
          q: "¿También firman la decoración?",
          a: "Sí. Creamos proyectos exclusivos según el concepto de la boda.",
        },
      ],
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
      faq: [
        {
          q: "¿Trabajan fuera de Río?",
          a: "Sí. Hacemos bodas en otras ciudades y destination weddings.",
        },
        {
          q: "Ya tenemos un espacio. ¿Pueden asumir la conducción?",
          a: "Sí. Evaluamos el lugar y diseñamos el formato de atención que tiene sentido.",
        },
      ],
      ctaTitle: "¿Siguen eligiendo el lugar?",
      ctaBody: "Dejen sus datos. Vamos a entender la boda y los destinos posibles.",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
