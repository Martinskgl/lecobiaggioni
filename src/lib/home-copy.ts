import type { Locale } from "@/lib/site";

/**
 * Textos da Home (Legal Gay Wedding Brazil).
 * PT: texto aprovado no documento "Home Legal Gay Wedding Brazil".
 * EN / ES: tradução fiel do PT.
 */
export type HomeCopy = {
  nav: {
    howItWorks: string;
    civil: string;
    celebration: string;
    packages: string;
    about: string;
    faq: string;
  };
  stats: { n: string; label: string }[];
  presentation: {
    kicker: string;
    title: string;
    paragraphs: string[];
    note: string;
  };
  path: {
    kicker: string;
    title: string;
    chapters: { label: string; nav: string; title: string; body: string }[];
  };
  destination: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  planning: {
    kicker: string;
    title: string;
    items: { title: string; body: string }[];
  };
  ways: {
    title: string;
    cards: { title: string; text: string; action: string }[];
  };
  about: {
    caption: string;
    kicker: string;
    title: string;
    paragraphs: string[];
    meta: { label: string; value: string }[];
  };
  method: {
    kicker: string;
    title: string;
    steps: { n: string; title: string; body: string }[];
  };
  emotional: {
    kicker: string;
    title: string;
    paragraphs: string[];
    lines: string[];
  };
  formats: {
    kicker: string;
    title: string;
    packA: { title: string; body: string; cta: string };
    packB: { title: string; body: string; cta: string };
  };
  contact: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  faq: {
    kicker: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  footer: {
    name: string;
    text: string;
    city: string;
    languages: string;
    legal: string;
  };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  pt: {
    nav: {
      howItWorks: "Como funciona",
      civil: "Casamento civil",
      celebration: "Celebração no Rio",
      packages: "Pacotes",
      about: "Sobre o Leco",
      faq: "FAQ",
    },
    stats: [
      { n: "20+", label: "Anos de experiência" },
      { n: "3", label: "Idiomas" },
      { n: "1", label: "Equipe local" },
      { n: "2013", label: "Marco nacional" },
      { n: "1", label: "Caso de cada vez" },
    ],
    presentation: {
      kicker: "Casamento civil no Brasil",
      title: "O casamento de vocês pode acontecer legalmente aqui.",
      paragraphs: [
        "No Brasil, o casamento civil entre pessoas do mesmo sexo é reconhecido. Para casais estrangeiros, o processo começa com a análise da nacionalidade, do estado civil e dos documentos disponíveis.",
        "Nossa equipe organiza as etapas no Brasil e coordena o contato com cartório, tradução juramentada e suporte jurídico especializado, quando necessário.",
      ],
      note: "Cada caso é analisado individualmente. Os documentos, requisitos e prazos variam conforme o casal e o cartório responsável.",
    },
    path: {
      kicker: "O caminho",
      title: "Do primeiro contato ao casamento civil.",
      chapters: [
        {
          label: "01 Análise inicial",
          nav: "Análise · O começo",
          title: "Primeiro, precisamos entender o caso de vocês.",
          body: "Analisamos nacionalidade, país de residência, estado civil, documentos disponíveis e o tipo de casamento que desejam realizar no Brasil.",
        },
        {
          label: "02 Checklist personalizado",
          nav: "Documentos · Checklist",
          title: "Cada casal começa de um ponto diferente.",
          body: "Depois da análise inicial, organizamos uma lista com os documentos, traduções, registros e etapas aplicáveis ao caso.",
        },
        {
          label: "03 Preparação documental",
          nav: "Traduções · Preparação",
          title: "Os documentos precisam chegar ao Brasil da forma correta.",
          body: "Orientamos a preparação do processo e coordenamos traduções juramentadas e outros apoios profissionais quando necessários.",
        },
        {
          label: "04 Coordenação com o cartório",
          nav: "Cartório · Coordenação",
          title: "Uma equipe local acompanha o processo no Brasil.",
          body: "Coordenamos a comunicação com o cartório responsável, acompanhamos os prazos e mantemos vocês informados sobre cada etapa.",
        },
        {
          label: "05 Casamento civil",
          nav: "O sim · Casamento civil",
          title: "O momento em que o direito se transforma em história.",
          body: "Com a habilitação concluída, coordenamos os detalhes locais para a realização do casamento civil no Brasil.",
        },
        {
          label: "06 Celebração no Rio",
          nav: "Rio · Celebração",
          title: "Depois da documentação, vem a parte que vocês vão guardar.",
          body: "O casamento civil pode ser acompanhado de um Elopement Wedding ou de uma celebração criada em torno da história de vocês.",
        },
      ],
    },
    destination: {
      kicker: "Rio de Janeiro",
      title: "Casar no Brasil. Celebrar no Rio.",
      body: "Para muitos casais, vir ao Brasil representa a possibilidade do casamento civil. O Rio transforma essa conquista em uma experiência para ser vivida e lembrada.",
      cta: "Conhecer as possibilidades",
    },
    planning: {
      kicker: "Para casais que vivem no exterior",
      title: "Vocês planejam de onde estiverem. Nossa equipe cuida do Brasil.",
      items: [
        {
          title: "Análise à distância",
          body: "A primeira conversa e a análise inicial podem acontecer online, antes de qualquer viagem ou contratação local.",
        },
        {
          title: "Coordenação no Brasil",
          body: "Mantemos contato com cartório, tradutores e profissionais envolvidos no processo brasileiro.",
        },
        {
          title: "Viagem e celebração",
          body: "Quando o casal também deseja celebrar, organizamos hospedagem, transporte, cerimônia, fotografia e experiências no Rio.",
        },
      ],
    },
    ways: {
      title: "Formas de viver esse momento",
      cards: [
        {
          title: "Casamento civil",
          text: "Coordenação das etapas necessárias para a realização do casamento civil no Brasil, de acordo com a situação documental do casal.",
          action: "Entender o processo",
        },
        {
          title: "Civil + Elopement",
          text: "Casamento civil acompanhado de uma celebração íntima no Rio, com local, cerimônia, fotografia, transporte e fornecedores.",
          action: "Conhecer a experiência",
        },
        {
          title: "Civil + Destination Wedding",
          text: "Casamento civil e celebração com convidados, incluindo planejamento, hospedagem, logística e experiência no destino.",
          action: "Planejar nossa celebração",
        },
      ],
    },
    about: {
      caption: "Aqui, a história de vocês é recebida com respeito.",
      kicker: "Quem estará com vocês",
      title: "Vocês não precisam explicar por que esse casamento importa.",
      paragraphs: [
        "Eu também sou gay e sei o que significa poder viver esse momento com liberdade. Meu trabalho é receber a história de vocês com respeito e transformar o processo brasileiro em um caminho claro, humano e bem conduzido.",
        "Desde 2004, eu e minha equipe realizamos eventos e casamentos no Rio de Janeiro. Hoje, usamos essa experiência para receber casais do Brasil e do mundo.",
      ],
      meta: [
        { label: "Desde:", value: "2004" },
        { label: "Idiomas:", value: "PT · EN · ES" },
        { label: "Base:", value: "Rio de Janeiro" },
      ],
    },
    method: {
      kicker: "O método",
      title: "Um processo sensível precisa de informação clara e presença local.",
      steps: [
        {
          n: "01",
          title: "A gente analisa",
          body: "Entendemos a situação do casal antes de indicar documentos, prazos ou serviços. Nenhum caso deve ser tratado como uma fórmula pronta.",
        },
        {
          n: "02",
          title: "A gente organiza",
          body: "Transformamos as informações em um caminho com etapas, documentos, traduções, contatos locais e responsabilidades definidas.",
        },
        {
          n: "03",
          title: "A gente acompanha",
          body: "Coordenamos o processo no Brasil e mantemos vocês informados até a realização do casamento civil e da celebração contratada.",
        },
      ],
    },
    emotional: {
      kicker: "O direito de dizer sim",
      title: "O casamento civil pode ser o começo de uma experiência inesquecível.",
      paragraphs: [
        "Vocês podem vir ao Brasil para oficializar a união e também viver esse momento em um dos cenários mais marcantes do Rio de Janeiro.",
        "A celebração pode ser íntima, apenas para o casal, ou incluir as pessoas que fizeram parte dessa história.",
      ],
      lines: ["CASAMENTO CIVIL · ELOPEMENT WEDDING", "RIO DE JANEIRO · DESTINATION WEDDING"],
    },
    formats: {
      kicker: "Como podemos ajudar",
      title: "Do processo legal à celebração no Rio.",
      packA: {
        title: "Legal Gay Wedding Brazil",
        body: "Para casais que desejam realizar o casamento civil no Brasil. O serviço começa com uma análise inicial e pode incluir organização documental, coordenação com cartório, traduções e apoio profissional especializado.",
        cta: "Analisar nosso caso",
      },
      packB: {
        title: "Legal Wedding + Rio Experience",
        body: "Para casais que desejam unir o casamento civil a uma experiência no Rio. Além da coordenação legal, planejamos cerimônia, local, fotografia, beleza, transporte, flores e celebração.",
        cta: "Criar nossa experiência",
      },
    },
    contact: {
      kicker: "Análise inicial",
      title: "Contem um pouco sobre vocês.",
      paragraphs: [
        "Para orientar o primeiro passo, precisamos entender onde vocês vivem, a nacionalidade e o estado civil de cada pessoa, os documentos disponíveis e quando imaginam vir ao Brasil.",
        "Esta conversa inicial também ajuda a identificar se vocês desejam apenas o casamento civil ou uma experiência completa no Rio.",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Antes de começar",
      lead: "As primeiras respostas sobre o casamento civil de casais homoafetivos estrangeiros no Brasil.",
      items: [
        {
          q: "O casamento entre pessoas do mesmo sexo é permitido no Brasil?",
          a: "Sim. A Resolução nº 175/2013 do Conselho Nacional de Justiça determina que as autoridades competentes não podem recusar a habilitação ou a celebração do casamento civil entre pessoas do mesmo sexo.",
        },
        {
          q: "Dois estrangeiros podem se casar no Brasil?",
          a: "A possibilidade e os requisitos precisam ser analisados de acordo com a nacionalidade, o estado civil, o país de emissão dos documentos e o cartório responsável. A análise inicial serve para entender se o processo pode ser realizado e quais serão os próximos passos.",
        },
        {
          q: "Nosso casamento será reconhecido no país onde moramos?",
          a: "O casamento produz efeitos no Brasil. O reconhecimento em outro país depende da legislação daquele país e deve ser confirmado com orientação jurídica local. O serviço não promete reconhecimento automático fora do Brasil.",
        },
        {
          q: "Quais documentos serão necessários?",
          a: "A lista varia conforme o casal. Pode envolver certidões civis, documentos de identidade, comprovações de estado civil, apostilamento ou legalização e tradução juramentada. O checklist só deve ser definido depois da análise inicial.",
        },
        {
          q: "Podemos realizar uma celebração além do casamento civil?",
          a: "Sim. Podemos combinar a coordenação do processo civil com um Elopement Wedding, uma cerimônia simbólica ou uma celebração com convidados no Rio de Janeiro.",
        },
        {
          q: "Todo o planejamento pode ser feito à distância?",
          a: "Grande parte do processo pode ser coordenada online. A necessidade de presença no Brasil, os prazos e os atos presenciais são explicados depois da análise do caso e da confirmação pelo cartório responsável.",
        },
      ],
    },
    footer: {
      name: "Legal Gay Wedding Brazil by Leco Biaggìoni",
      text: "Casamento civil e celebrações no Rio de Janeiro para casais homoafetivos do mundo inteiro.",
      city: "Rio de Janeiro · Brasil",
      languages: "Português · English · Español",
      legal:
        "Documentos, requisitos, prazos e elegibilidade variam conforme o casal e o cartório responsável. O reconhecimento do casamento fora do Brasil depende da legislação de cada país. Informações específicas devem ser confirmadas com o cartório e com profissionais jurídicos habilitados.",
    },
  },

  en: {
    nav: {
      howItWorks: "How it works",
      civil: "Civil marriage",
      celebration: "Celebration in Rio",
      packages: "Packages",
      about: "About Leco",
      faq: "FAQ",
    },
    stats: [
      { n: "20+", label: "Years of experience" },
      { n: "3", label: "Languages" },
      { n: "1", label: "Local team" },
      { n: "2013", label: "National milestone" },
      { n: "1", label: "Case at a time" },
    ],
    presentation: {
      kicker: "Civil marriage in Brazil",
      title: "Your marriage can legally happen here.",
      paragraphs: [
        "Civil marriage between people of the same sex is recognized in Brazil. For foreign couples, the process begins by reviewing nationality, marital status and the documents available.",
        "Our team organizes the stages in Brazil and coordinates contact with the registry office, certified translation and specialized legal support when necessary.",
      ],
      note: "Each case is reviewed individually. Documents, requirements and timelines vary according to the couple and the responsible registry office.",
    },
    path: {
      kicker: "The path",
      title: "From first contact to civil marriage.",
      chapters: [
        {
          label: "01 Initial analysis",
          nav: "Analysis · The beginning",
          title: "First, we need to understand your case.",
          body: "We review nationality, country of residence, marital status, available documents and the type of marriage you wish to have in Brazil.",
        },
        {
          label: "02 Personalized checklist",
          nav: "Documents · Checklist",
          title: "Every couple starts from a different point.",
          body: "After the initial analysis, we organize a list of the documents, translations, registrations and steps that apply to your case.",
        },
        {
          label: "03 Document preparation",
          nav: "Translations · Preparation",
          title: "Documents need to arrive in Brazil in the right form.",
          body: "We guide the preparation of the process and coordinate certified translations and other professional support when needed.",
        },
        {
          label: "04 Coordination with the registry office",
          nav: "Registry office · Coordination",
          title: "A local team follows the process in Brazil.",
          body: "We coordinate communication with the responsible registry office, keep track of deadlines and keep you informed at every step.",
        },
        {
          label: "05 Civil marriage",
          nav: "The yes · Civil marriage",
          title: "The moment a right becomes a story.",
          body: "Once the marriage qualification process (habilitação) is complete, we coordinate the local details for the civil marriage to take place in Brazil.",
        },
        {
          label: "06 Celebration in Rio",
          nav: "Rio · Celebration",
          title: "After the paperwork comes the part you will keep.",
          body: "The civil marriage can be accompanied by an Elopement Wedding or a celebration created around your story.",
        },
      ],
    },
    destination: {
      kicker: "Rio de Janeiro",
      title: "Getting married in Brazil. Celebrating in Rio.",
      body: "For many couples, coming to Brazil represents the possibility of civil marriage. Rio turns that achievement into an experience to be lived and remembered.",
      cta: "Explore the possibilities",
    },
    planning: {
      kicker: "For couples living abroad",
      title: "You plan from wherever you are. Our team takes care of Brazil.",
      items: [
        {
          title: "Remote analysis",
          body: "The first conversation and the initial analysis can happen online, before any travel or local hiring.",
        },
        {
          title: "Coordination in Brazil",
          body: "We stay in contact with the registry office, translators and the professionals involved in the Brazilian process.",
        },
        {
          title: "Travel and celebration",
          body: "When the couple also wishes to celebrate, we organize accommodation, transportation, ceremony, photography and experiences in Rio.",
        },
      ],
    },
    ways: {
      title: "Ways to live this moment",
      cards: [
        {
          title: "Civil marriage",
          text: "Coordination of the steps needed for the civil marriage to take place in Brazil, according to the couple’s documentation.",
          action: "Understand the process",
        },
        {
          title: "Civil + Elopement",
          text: "Civil marriage accompanied by an intimate celebration in Rio, with venue, ceremony, photography, transportation and vendors.",
          action: "Discover the experience",
        },
        {
          title: "Civil + Destination Wedding",
          text: "Civil marriage and a celebration with guests, including planning, accommodation, logistics and the destination experience.",
          action: "Plan our celebration",
        },
      ],
    },
    about: {
      caption: "Here, your story is received with respect.",
      kicker: "Who will be with you",
      title: "You do not have to explain why this marriage matters.",
      paragraphs: [
        "I am gay too, and I know what it means to be able to live this moment freely. My work is to receive your story with respect and turn the Brazilian process into a clear, human and well-conducted path.",
        "Since 2004, my team and I have produced events and weddings in Rio de Janeiro. Today, we use that experience to welcome couples from Brazil and around the world.",
      ],
      meta: [
        { label: "Since:", value: "2004" },
        { label: "Languages:", value: "PT · EN · ES" },
        { label: "Base:", value: "Rio de Janeiro" },
      ],
    },
    method: {
      kicker: "The method",
      title: "A sensitive process needs clear information and a local presence.",
      steps: [
        {
          n: "01",
          title: "We analyze",
          body: "We understand the couple’s situation before recommending documents, timelines or services. No case should be treated as a ready-made formula.",
        },
        {
          n: "02",
          title: "We organize",
          body: "We turn the information into a path with defined stages, documents, translations, local contacts and responsibilities.",
        },
        {
          n: "03",
          title: "We accompany",
          body: "We coordinate the process in Brazil and keep you informed until the civil marriage and the contracted celebration take place.",
        },
      ],
    },
    emotional: {
      kicker: "The right to say yes",
      title: "Civil marriage can be the beginning of an unforgettable experience.",
      paragraphs: [
        "You can come to Brazil to make your union official and also live this moment in one of the most striking settings in Rio de Janeiro.",
        "The celebration can be intimate, just for the two of you, or include the people who have been part of this story.",
      ],
      lines: ["CIVIL MARRIAGE · ELOPEMENT WEDDING", "RIO DE JANEIRO · DESTINATION WEDDING"],
    },
    formats: {
      kicker: "How we can help",
      title: "From the legal process to a celebration in Rio.",
      packA: {
        title: "Legal Gay Wedding Brazil",
        body: "For couples who wish to have a civil marriage in Brazil. The service begins with an initial analysis and may include document organization, coordination with the registry office, translations and specialized professional support.",
        cta: "Analyze our case",
      },
      packB: {
        title: "Legal Wedding + Rio Experience",
        body: "For couples who wish to combine civil marriage with an experience in Rio. In addition to legal coordination, we plan the ceremony, venue, photography, beauty, transportation, flowers and celebration.",
        cta: "Create our experience",
      },
    },
    contact: {
      kicker: "Initial analysis",
      title: "Tell us a little about yourselves.",
      paragraphs: [
        "To guide the first step, we need to understand where you live, each person’s nationality and marital status, the documents available and when you imagine coming to Brazil.",
        "This initial conversation also helps identify whether you want only the civil marriage or a complete experience in Rio.",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Before we begin",
      lead: "The first answers about civil marriage for foreign same-sex couples in Brazil.",
      items: [
        {
          q: "Is same-sex marriage allowed in Brazil?",
          a: "Yes. Resolution No. 175/2013 of the National Council of Justice (Conselho Nacional de Justiça) determines that competent authorities may not refuse the marriage qualification (habilitação) or the celebration of civil marriage between people of the same sex.",
        },
        {
          q: "Can two foreign nationals marry in Brazil?",
          a: "The possibility and the requirements need to be reviewed according to nationality, marital status, the country where the documents were issued and the responsible registry office. The initial analysis helps determine whether the process can take place and what the next steps will be.",
        },
        {
          q: "Will our marriage be recognized in the country where we live?",
          a: "The marriage produces legal effects in Brazil. Recognition in another country depends on that country’s laws and should be confirmed with local legal guidance. The service does not promise automatic recognition outside Brazil.",
        },
        {
          q: "Which documents will be needed?",
          a: "The list varies according to the couple. It may involve civil certificates, identity documents, proof of marital status, apostille or legalization, and certified translation. The checklist should only be defined after the initial analysis.",
        },
        {
          q: "Can we have a celebration in addition to the civil marriage?",
          a: "Yes. We can combine coordination of the civil process with an Elopement Wedding, a symbolic ceremony or a celebration with guests in Rio de Janeiro.",
        },
        {
          q: "Can all the planning be done remotely?",
          a: "Much of the process can be coordinated online. The need to be present in Brazil, the timelines and the in-person acts are explained after the case analysis and confirmation by the responsible registry office.",
        },
      ],
    },
    footer: {
      name: "Legal Gay Wedding Brazil by Leco Biaggìoni",
      text: "Civil marriage and celebrations in Rio de Janeiro for same-sex couples from all over the world.",
      city: "Rio de Janeiro · Brazil",
      languages: "Português · English · Español",
      legal:
        "Documents, requirements, timelines and eligibility vary according to the couple and the responsible registry office. Recognition of the marriage outside Brazil depends on the laws of each country. Specific information must be confirmed with the registry office and with qualified legal professionals.",
    },
  },

  es: {
    nav: {
      howItWorks: "Cómo funciona",
      civil: "Matrimonio civil",
      celebration: "Celebración en Rio",
      packages: "Paquetes",
      about: "Sobre Leco",
      faq: "FAQ",
    },
    stats: [
      { n: "20+", label: "Años de experiencia" },
      { n: "3", label: "Idiomas" },
      { n: "1", label: "Equipo local" },
      { n: "2013", label: "Hito nacional" },
      { n: "1", label: "Caso a la vez" },
    ],
    presentation: {
      kicker: "Matrimonio civil en Brasil",
      title: "El matrimonio de ustedes puede realizarse legalmente aquí.",
      paragraphs: [
        "En Brasil, el matrimonio civil entre personas del mismo sexo está reconocido. Para parejas extranjeras, el proceso comienza con el análisis de la nacionalidad, del estado civil y de los documentos disponibles.",
        "Nuestro equipo organiza las etapas en Brasil y coordina el contacto con el registro civil (cartório), la traducción jurada y el apoyo jurídico especializado, cuando es necesario.",
      ],
      note: "Cada caso se analiza individualmente. Los documentos, requisitos y plazos varían según la pareja y el registro civil responsable.",
    },
    path: {
      kicker: "El camino",
      title: "Del primer contacto al matrimonio civil.",
      chapters: [
        {
          label: "01 Análisis inicial",
          nav: "Análisis · El comienzo",
          title: "Primero, necesitamos entender el caso de ustedes.",
          body: "Analizamos la nacionalidad, el país de residencia, el estado civil, los documentos disponibles y el tipo de matrimonio que desean realizar en Brasil.",
        },
        {
          label: "02 Checklist personalizado",
          nav: "Documentos · Checklist",
          title: "Cada pareja parte de un punto diferente.",
          body: "Después del análisis inicial, organizamos una lista con los documentos, traducciones, registros y etapas aplicables al caso.",
        },
        {
          label: "03 Preparación documental",
          nav: "Traducciones · Preparación",
          title: "Los documentos necesitan llegar a Brasil de la forma correcta.",
          body: "Orientamos la preparación del proceso y coordinamos traducciones juradas y otros apoyos profesionales cuando son necesarios.",
        },
        {
          label: "04 Coordinación con el registro civil",
          nav: "Registro civil · Coordinación",
          title: "Un equipo local acompaña el proceso en Brasil.",
          body: "Coordinamos la comunicación con el registro civil responsable, hacemos el seguimiento de los plazos y los mantenemos informados sobre cada etapa.",
        },
        {
          label: "05 Matrimonio civil",
          nav: "El sí · Matrimonio civil",
          title: "El momento en que el derecho se transforma en historia.",
          body: "Con la habilitación concluida, coordinamos los detalles locales para la realización del matrimonio civil en Brasil.",
        },
        {
          label: "06 Celebración en Rio",
          nav: "Rio · Celebración",
          title: "Después de la documentación, llega la parte que van a guardar.",
          body: "El matrimonio civil puede ir acompañado de un Elopement Wedding o de una celebración creada en torno a la historia de ustedes.",
        },
      ],
    },
    destination: {
      kicker: "Rio de Janeiro",
      title: "Casarse en Brasil. Celebrar en Rio.",
      body: "Para muchas parejas, venir a Brasil representa la posibilidad del matrimonio civil. Rio transforma esa conquista en una experiencia para ser vivida y recordada.",
      cta: "Conocer las posibilidades",
    },
    planning: {
      kicker: "Para parejas que viven en el exterior",
      title: "Ustedes planifican desde donde estén. Nuestro equipo se ocupa de Brasil.",
      items: [
        {
          title: "Análisis a distancia",
          body: "La primera conversación y el análisis inicial pueden realizarse en línea, antes de cualquier viaje o contratación local.",
        },
        {
          title: "Coordinación en Brasil",
          body: "Mantenemos contacto con el registro civil, los traductores y los profesionales involucrados en el proceso brasileño.",
        },
        {
          title: "Viaje y celebración",
          body: "Cuando la pareja también desea celebrar, organizamos alojamiento, transporte, ceremonia, fotografía y experiencias en Rio.",
        },
      ],
    },
    ways: {
      title: "Formas de vivir este momento",
      cards: [
        {
          title: "Matrimonio civil",
          text: "Coordinación de las etapas necesarias para la realización del matrimonio civil en Brasil, de acuerdo con la situación documental de la pareja.",
          action: "Entender el proceso",
        },
        {
          title: "Civil + Elopement",
          text: "Matrimonio civil acompañado de una celebración íntima en Rio, con lugar, ceremonia, fotografía, transporte y proveedores.",
          action: "Conocer la experiencia",
        },
        {
          title: "Civil + Destination Wedding",
          text: "Matrimonio civil y celebración con invitados, incluyendo planificación, alojamiento, logística y experiencia en el destino.",
          action: "Planear nuestra celebración",
        },
      ],
    },
    about: {
      caption: "Aquí, la historia de ustedes es recibida con respeto.",
      kicker: "Quién estará con ustedes",
      title: "No necesitan explicar por qué este matrimonio importa.",
      paragraphs: [
        "Yo también soy gay y sé lo que significa poder vivir este momento con libertad. Mi trabajo es recibir la historia de ustedes con respeto y transformar el proceso brasileño en un camino claro, humano y bien conducido.",
        "Desde 2004, mi equipo y yo realizamos eventos y bodas en Rio de Janeiro. Hoy usamos esa experiencia para recibir a parejas de Brasil y del mundo.",
      ],
      meta: [
        { label: "Desde:", value: "2004" },
        { label: "Idiomas:", value: "PT · EN · ES" },
        { label: "Base:", value: "Rio de Janeiro" },
      ],
    },
    method: {
      kicker: "El método",
      title: "Un proceso sensible necesita información clara y presencia local.",
      steps: [
        {
          n: "01",
          title: "Analizamos",
          body: "Entendemos la situación de la pareja antes de indicar documentos, plazos o servicios. Ningún caso debe tratarse como una fórmula lista.",
        },
        {
          n: "02",
          title: "Organizamos",
          body: "Transformamos la información en un camino con etapas, documentos, traducciones, contactos locales y responsabilidades definidas.",
        },
        {
          n: "03",
          title: "Acompañamos",
          body: "Coordinamos el proceso en Brasil y los mantenemos informados hasta la realización del matrimonio civil y de la celebración contratada.",
        },
      ],
    },
    emotional: {
      kicker: "El derecho a decir sí",
      title: "El matrimonio civil puede ser el comienzo de una experiencia inolvidable.",
      paragraphs: [
        "Pueden venir a Brasil para oficializar la unión y también vivir este momento en uno de los escenarios más marcantes de Rio de Janeiro.",
        "La celebración puede ser íntima, solo para la pareja, o incluir a las personas que formaron parte de esta historia.",
      ],
      lines: ["MATRIMONIO CIVIL · ELOPEMENT WEDDING", "RIO DE JANEIRO · DESTINATION WEDDING"],
    },
    formats: {
      kicker: "Cómo podemos ayudar",
      title: "Del proceso legal a la celebración en Rio.",
      packA: {
        title: "Legal Gay Wedding Brazil",
        body: "Para parejas que desean realizar el matrimonio civil en Brasil. El servicio comienza con un análisis inicial y puede incluir organización documental, coordinación con el registro civil, traducciones y apoyo profesional especializado.",
        cta: "Analizar nuestro caso",
      },
      packB: {
        title: "Legal Wedding + Rio Experience",
        body: "Para parejas que desean unir el matrimonio civil a una experiencia en Rio. Además de la coordinación legal, planificamos ceremonia, lugar, fotografía, belleza, transporte, flores y celebración.",
        cta: "Crear nuestra experiencia",
      },
    },
    contact: {
      kicker: "Análisis inicial",
      title: "Cuéntennos un poco sobre ustedes.",
      paragraphs: [
        "Para orientar el primer paso, necesitamos entender dónde viven, la nacionalidad y el estado civil de cada persona, los documentos disponibles y cuándo imaginan venir a Brasil.",
        "Esta conversación inicial también ayuda a identificar si desean solo el matrimonio civil o una experiencia completa en Rio.",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Antes de comenzar",
      lead: "Las primeras respuestas sobre el matrimonio civil de parejas extranjeras del mismo sexo en Brasil.",
      items: [
        {
          q: "¿El matrimonio entre personas del mismo sexo está permitido en Brasil?",
          a: "Sí. La Resolución nº 175/2013 del Consejo Nacional de Justicia (Conselho Nacional de Justiça) determina que las autoridades competentes no pueden rechazar la habilitación ni la celebración del matrimonio civil entre personas del mismo sexo.",
        },
        {
          q: "¿Dos extranjeros pueden casarse en Brasil?",
          a: "La posibilidad y los requisitos deben analizarse de acuerdo con la nacionalidad, el estado civil, el país de emisión de los documentos y el registro civil responsable. El análisis inicial sirve para entender si el proceso puede realizarse y cuáles serán los próximos pasos.",
        },
        {
          q: "¿Nuestro matrimonio será reconocido en el país donde vivimos?",
          a: "El matrimonio produce efectos en Brasil. El reconocimiento en otro país depende de la legislación de ese país y debe confirmarse con orientación jurídica local. El servicio no promete reconocimiento automático fuera de Brasil.",
        },
        {
          q: "¿Qué documentos serán necesarios?",
          a: "La lista varía según la pareja. Puede incluir certificados civiles, documentos de identidad, comprobantes de estado civil, apostilla o legalización y traducción jurada. El checklist solo debe definirse después del análisis inicial.",
        },
        {
          q: "¿Podemos realizar una celebración además del matrimonio civil?",
          a: "Sí. Podemos combinar la coordinación del proceso civil con un Elopement Wedding, una ceremonia simbólica o una celebración con invitados en Rio de Janeiro.",
        },
        {
          q: "¿Toda la planificación puede hacerse a distancia?",
          a: "Gran parte del proceso puede coordinarse en línea. La necesidad de presencia en Brasil, los plazos y los actos presenciales se explican después del análisis del caso y de la confirmación por el registro civil responsable.",
        },
      ],
    },
    footer: {
      name: "Legal Gay Wedding Brazil by Leco Biaggìoni",
      text: "Matrimonio civil y celebraciones en Rio de Janeiro para parejas del mismo sexo de todo el mundo.",
      city: "Rio de Janeiro · Brasil",
      languages: "Português · English · Español",
      legal:
        "Los documentos, requisitos, plazos y elegibilidad varían según la pareja y el registro civil responsable. El reconocimiento del matrimonio fuera de Brasil depende de la legislación de cada país. La información específica debe confirmarse con el registro civil y con profesionales jurídicos habilitados.",
    },
  },
};
