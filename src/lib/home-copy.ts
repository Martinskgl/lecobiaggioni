import type { Locale, PageKey } from "@/lib/site";

/**
 * Textos da Home (Leco Biaggìoni).
 * PT: texto do Word "Home 1.docx". `**trecho**` = negrito do Word.
 * EN / ES: tradução literal do PT.
 * Elementos sem texto no Word ficam fora deste arquivo e são ocultados nos componentes.
 */
export type ContactFormCopy = {
  names: string;
  email: string;
  whatsapp: string;
  country: string;
  experience: string;
  experienceOptions: string[];
  date: string;
  guests: string;
  message: string;
  submit: string;
  note: string;
};

export type HomeCopy = {
  nav: {
    items: { page: PageKey; label: string }[];
    cta: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cta: string;
    secondary: string;
  };
  stats: string[];
  presentation: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  services: {
    page: PageKey;
    name: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
    note?: string;
  }[];
  destination: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
  planning: {
    title: string;
    items: { title: string; body: string }[];
  };
  ways: {
    title: string;
    cards: { title: string; text: string }[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  method: {
    title: string;
    steps: { n: string; title: string; body: string }[];
  };
  emotional: {
    title: string;
    paragraphs: string[];
  };
  formats: {
    kicker: string;
    title: string;
    packA: { title: string; paragraphs: string[]; cta: string };
    packB: { title: string; paragraphs: string[]; cta: string };
  };
  contact: {
    title: string;
    paragraphs: string[];
    form: ContactFormCopy;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    name: string;
    text: string;
    city: string;
    cta: string;
    languages: string;
    legal?: string;
  };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  pt: {
    nav: {
      items: [
        { page: "sameSex", label: "Casamento Homoafetivo" },
        { page: "legal", label: "Brazil Legal Wedding 🌈" },
        { page: "elopement", label: "Elopement Wedding" },
        { page: "destination", label: "Destination Wedding" },
      ],
      cta: "Vamos conversar",
    },
    hero: {
      kicker: "LECO BIAGGÌONI · CASAMENTOS NO RIO DE JANEIRO",
      title: "O seu amor. O seu jeito. O Rio como cenário.",
      paragraphs: [
        "Uma cerimônia a dois, uma celebração com quem vocês amam ou o próximo passo para oficializar a união no Brasil.",
        "Leco Biaggìoni e sua equipe cuidam do planejamento para transformar a história de vocês em uma experiência que faça sentido em cada detalhe.",
      ],
      cta: "Vamos planejar nosso casamento",
      secondary: "Conheça as experiências",
    },
    stats: ["Mais de 20 anos em eventos", "Mais de 10 anos dedicados a casamentos", "Rio de Janeiro"],
    presentation: {
      kicker: "HISTÓRIAS DIFERENTES. UM CUIDADO PESSOAL.",
      title: "O casamento de vocês começa com uma boa conversa.",
      paragraphs: [
        "Antes de escolher o cenário, as flores ou a música, queremos conhecer vocês.",
        "Como imaginam esse dia? Quem precisa estar por perto? O que tornaria esse momento verdadeiramente especial?",
        "É dessa conversa que nasce o nosso trabalho: reunir as pessoas, os lugares e os detalhes certos para uma celebração com a identidade do casal.",
      ],
    },
    services: [
      {
        page: "elopement",
        name: "Elopement Wedding",
        eyebrow: "UM DIA INTEIRO PARA VOCÊS DOIS",
        title: "A intimidade de um encontro. A emoção de um casamento.",
        paragraphs: [
          "Trocar votos diante do mar, celebrar com poucos convidados ou viver esse momento só a dois. O Elopement Wedding abre espaço para uma celebração íntima, no ritmo de vocês.",
          "Levamos a experiência de quem organiza grandes eventos para cuidar de cada detalhe de um encontro pequeno e cheio de significado.",
          "Para casar ou renovar os votos no Rio de Janeiro, criamos opções de experiências que combinam cenário, cerimônia e os detalhes que vocês desejam viver.",
        ],
        cta: "Descobrir nosso elopement",
      },
      {
        page: "sameSex",
        name: "Casamento Homoafetivo",
        eyebrow: "LIBERDADE PARA CELEBRAR QUEM VOCÊS SÃO",
        title: "Um casamento em que vocês possam ser inteiramente vocês.",
        paragraphs: [
          "A história de vocês orienta cada escolha: os votos, a entrada, as pessoas ao redor e a forma de celebrar.",
          "Nosso trabalho começa na escuta e segue pelo planejamento, pela escolha dos fornecedores e pela condução do dia. Com acolhimento e respeito, criamos espaço para que o casal se reconheça em toda a experiência.",
          "Uma cerimônia íntima ou uma festa com todos por perto. O formato é de vocês. O cuidado está em cada etapa.",
        ],
        cta: "Celebrar nossa história",
      },
      {
        page: "destination",
        name: "Destination Wedding",
        eyebrow: "O RIO COMO DESTINO. VOCÊS COMO MOTIVO.",
        title: "Uma viagem que reúne as pessoas mais importantes da sua vida.",
        paragraphs: [
          "Escolher o Rio para casar é convidar quem vocês amam para compartilhar uma experiência que vai além da cerimônia.",
          "Cuidamos do planejamento do casamento, da programação e dos detalhes que fazem o casal e os convidados se sentirem bem recebidos do início ao fim.",
          "Desde 2022, Leco vem se dedicando ao universo dos Destination Weddings no Rio, unindo conhecimento local à experiência de mais de duas décadas em eventos.",
          "Para acompanhar cada projeto de perto, são realizados apenas **10 Destination Weddings por ano**.",
        ],
        cta: "Consultar disponibilidade",
      },
      {
        page: "legal",
        name: "Brazil Legal Wedding 🌈",
        eyebrow: "SUPORTE PARA CASAIS ESTRANGEIROS",
        title: "O próximo capítulo da sua história pode começar no Brasil.",
        paragraphs: [
          "Se o casamento entre pessoas do mesmo sexo ainda não é permitido no país de vocês, o Brasil pode ser um caminho para oficializar essa união.",
          "Com base no Rio de Janeiro, nossa equipe oferece suporte na organização da documentação e no acompanhamento das etapas do casamento civil, conforme as exigências aplicáveis a cada casal.",
          "Vocês têm alguém aqui para ajudar a entender o processo, organizar os próximos passos e acompanhar essa jornada.",
          "E, se desejarem, o casamento civil pode ganhar uma celebração a dois no Rio.",
        ],
        cta: "Entender como casar no Brasil",
        note: "O casamento depende do cumprimento dos requisitos legais e da análise do cartório. Seu reconhecimento fora do Brasil depende das regras de cada país.",
      },
    ],
    destination: {
      title: "Casar no Rio. Lembrar para sempre.",
      paragraphs: [
        "O encontro com a cidade, a troca de olhares, as pessoas reunidas e aquele instante em que tudo passa a fazer parte da mesma história.",
        "Vamos criar espaço para vocês viverem cada um desses momentos.",
      ],
      cta: "Imaginar nosso casamento no Rio",
    },
    planning: {
      title: "Vocês planejam de onde estiverem. Nós cuidamos de perto.",
      items: [
        {
          title: "Conhecimento local",
          body: "Uma equipe no Rio para ajudar a escolher cenários e fornecedores de acordo com o estilo, as prioridades e o investimento de vocês.",
        },
        {
          title: "Planejamento acompanhado",
          body: "Decisões, etapas e detalhes organizados com o casal, da primeira conversa à celebração.",
        },
        {
          title: "Acolhimento em cada contato",
          body: "Atendimento próximo, com suporte em inglês para casais que estão organizando o casamento de fora do Brasil.",
        },
      ],
    },
    ways: {
      title: "Mais do que imagens bonitas. Memórias de um dia de vocês.",
      cards: [
        { title: "O instante do sim", text: "Os votos, os olhares e a emoção de estar exatamente onde vocês queriam." },
        { title: "As pessoas por perto", text: "Os abraços e os encontros que dão ainda mais significado à celebração." },
        { title: "O Rio na memória", text: "Um cenário que passa a fazer parte da história do casal." },
      ],
    },
    about: {
      kicker: "CONHEÇA LECO BIAGGÌONI",
      title: "Experiência para cuidar. Sensibilidade para ouvir.",
      paragraphs: [
        "“Em 2004, abri minha primeira empresa. Desde então, passei por muitos eventos, conheci histórias diferentes e aprendi que os detalhes só fazem sentido quando representam as pessoas.",
        "Há mais de 10 anos, os casamentos se tornaram o centro do meu trabalho.",
        "Hoje, reúno essa experiência para fazer o que mais me dá prazer: criar encontros, realizar sonhos e proporcionar momentos especiais.",
        "Quero conhecer a história de vocês e descobrir, junto com o meu time, como podemos fazer parte dela.”",
      ],
      cta: "Conversar com o Leco",
    },
    method: {
      title: "Da primeira ideia ao dia de vocês.",
      steps: [
        {
          n: "01",
          title: "Vocês contam",
          body: "Conversamos sobre a história do casal, o formato desejado, a previsão de data e o que é prioridade para vocês.",
        },
        {
          n: "02",
          title: "Nós planejamos juntos",
          body: "Apresentamos uma proposta e organizamos as escolhas, os fornecedores e as etapas necessárias. Quando há casamento civil, o planejamento também considera a documentação e as exigências do processo.",
        },
        {
          n: "03",
          title: "Vocês vivem",
          body: "Com os detalhes coordenados pela equipe, chega o momento de estar presente, trocar os votos e aproveitar a celebração.",
        },
      ],
    },
    emotional: {
      title: "O cenário pode ser extraordinário. O que torna esse dia único são vocês.",
      paragraphs: ["Um casamento pensado para a sua história, com espaço para a emoção acontecer."],
    },
    formats: {
      kicker: "DO CASAMENTO CIVIL À CELEBRAÇÃO",
      title: "Como vocês querem viver esse momento?",
      packA: {
        title: "Brazil Legal Wedding 🌈",
        paragraphs: [
          "Para casais estrangeiros que procuram apoio para organizar o casamento civil no Brasil.",
          "Suporte com a documentação, interlocução com o cartório e acompanhamento das etapas, de acordo com as necessidades do casal.",
        ],
        cta: "Conversar sobre o casamento civil",
      },
      packB: {
        title: "Brazil Legal Wedding + Elopement",
        paragraphs: [
          "Para quem deseja unir o casamento civil a uma celebração íntima no Rio de Janeiro.",
          "Além do suporte ao processo civil, planejamos uma experiência a dois, com cenário, cerimônia e serviços escolhidos com vocês.",
        ],
        cta: "Planejar o civil e a celebração",
      },
    },
    contact: {
      title: "Contem um pouco sobre vocês.",
      paragraphs: [
        "Talvez vocês já tenham uma data. Talvez tenham apenas a vontade de começar.",
        "Queremos saber o que estão imaginando e como podemos ajudar a transformar essa ideia em um plano.",
      ],
      form: {
        names: "Nomes do casal",
        email: "E-mail",
        whatsapp: "WhatsApp com código do país",
        country: "País onde vivem",
        experience: "Qual experiência procuram?",
        experienceOptions: [
          "Elopement Wedding",
          "Casamento Homoafetivo",
          "Destination Wedding",
          "Brazil Legal Wedding",
          "Ainda estamos descobrindo",
        ],
        date: "Data ou período desejado",
        guests: "Número estimado de convidados",
        message: "Contem como imaginam esse momento",
        submit: "Vamos conversar sobre nosso casamento",
        note: "Usaremos os dados informados para responder ao contato e conversar sobre o planejamento de vocês.",
      },
    },
    faq: {
      title: "Antes de começar",
      items: [
        {
          q: "Podemos organizar o casamento morando fora do Brasil?",
          a: "Sim. O planejamento pode começar à distância, com nossa equipe no Rio acompanhando as decisões e a organização local. Se houver casamento civil, as etapas presenciais e os prazos serão verificados conforme o caso.",
        },
        {
          q: "O Elopement Wedding é apenas para o casal?",
          a: "O foco é uma celebração íntima. Pode ser um momento só de vocês ou incluir poucas pessoas próximas, conforme a experiência escolhida. Também é uma possibilidade para renovar os votos.",
        },
        {
          q: "Um casamento homoafetivo pode ser um Elopement ou Destination Wedding?",
          a: "Sim. Vocês podem escolher uma cerimônia a dois, uma celebração com convidados ou uma experiência de casamento no Rio para quem vem de fora.",
        },
        {
          q: "Somos estrangeiros. Podemos nos casar civilmente no Brasil?",
          a: "Estrangeiros podem se casar no Brasil, desde que cumpram os requisitos aplicáveis. A documentação e as condições do processo precisam ser verificadas com o cartório considerando a situação de cada pessoa.",
        },
        {
          q: "O Brasil permite o casamento entre pessoas do mesmo sexo?",
          a: "Sim. Os cartórios brasileiros não podem recusar a habilitação ou a celebração do casamento por se tratar de um casal do mesmo sexo. Os demais requisitos legais continuam sendo necessários.",
        },
        {
          q: "O casamento será reconhecido no nosso país?",
          a: "Não automaticamente. O reconhecimento e os efeitos do casamento no exterior dependem das leis de cada país. Essa questão deve ser confirmada com orientação jurídica no local onde vocês pretendem utilizar a certidão.",
        },
        {
          q: "Quanto tempo leva o processo civil?",
          a: "O prazo depende da documentação, das providências necessárias e do cartório. Por isso, o primeiro passo é conhecer o caso de vocês e verificar as exigências antes de definir a programação da viagem.",
        },
        {
          q: "Precisamos contratar uma festa junto com o suporte ao casamento civil?",
          a: "Não. Vocês podem procurar o Brazil Legal Wedding para o suporte ao processo civil ou combinar esse serviço com uma celebração.",
        },
      ],
    },
    footer: {
      name: "Leco Biaggìoni",
      text: "O seu amor. O seu jeito. O Rio como cenário.",
      city: "Rio de Janeiro · Brasil",
      cta: "Vamos conversar",
      languages: "Português · English · Español",
    },
  },

  en: {
    nav: {
      items: [
        { page: "sameSex", label: "Same-Sex Wedding" },
        { page: "legal", label: "Brazil Legal Wedding 🌈" },
        { page: "elopement", label: "Elopement Wedding" },
        { page: "destination", label: "Destination Wedding" },
      ],
      cta: "Let's talk",
    },
    hero: {
      kicker: "LECO BIAGGÌONI · WEDDINGS IN RIO DE JANEIRO",
      title: "Your love. Your way. Rio as the setting.",
      paragraphs: [
        "A ceremony for two, a celebration with the people you love or the next step to make your union official in Brazil.",
        "Leco Biaggìoni and the team take care of the planning to turn your story into an experience that makes sense in every detail.",
      ],
      cta: "Let's plan our wedding",
      secondary: "Discover the experiences",
    },
    stats: ["More than 20 years in events", "More than 10 years dedicated to weddings", "Rio de Janeiro"],
    presentation: {
      kicker: "DIFFERENT STORIES. A PERSONAL CARE.",
      title: "Your wedding begins with a good conversation.",
      paragraphs: [
        "Before choosing the setting, the flowers or the music, we want to get to know you.",
        "How do you imagine this day? Who needs to be close by? What would make this moment truly special?",
        "It is from this conversation that our work is born: bringing together the right people, places and details for a celebration with the couple's identity.",
      ],
    },
    services: [
      {
        page: "elopement",
        name: "Elopement Wedding",
        eyebrow: "A WHOLE DAY FOR THE TWO OF YOU",
        title: "The intimacy of an encounter. The emotion of a wedding.",
        paragraphs: [
          "Exchanging vows facing the sea, celebrating with a few guests or living this moment just the two of you. The Elopement Wedding opens space for an intimate celebration, at your own pace.",
          "We bring the experience of those who organize large events to take care of every detail of a small encounter full of meaning.",
          "To marry or renew your vows in Rio de Janeiro, we create experience options that combine setting, ceremony and the details you wish to live.",
        ],
        cta: "Discover our elopement",
      },
      {
        page: "sameSex",
        name: "Same-Sex Wedding",
        eyebrow: "FREEDOM TO CELEBRATE WHO YOU ARE",
        title: "A wedding in which you can be entirely yourselves.",
        paragraphs: [
          "Your story guides every choice: the vows, the entrance, the people around you and the way to celebrate.",
          "Our work begins with listening and continues through the planning, the choice of suppliers and the running of the day. With warmth and respect, we create space for the couple to recognize themselves in the whole experience.",
          "An intimate ceremony or a party with everyone close by. The format is yours. The care is in every stage.",
        ],
        cta: "Celebrate our story",
      },
      {
        page: "destination",
        name: "Destination Wedding",
        eyebrow: "RIO AS THE DESTINATION. YOU AS THE REASON.",
        title: "A trip that brings together the most important people in your life.",
        paragraphs: [
          "Choosing Rio to marry is inviting those you love to share an experience that goes beyond the ceremony.",
          "We take care of the wedding planning, the schedule and the details that make the couple and the guests feel welcomed from beginning to end.",
          "Since 2022, Leco has been dedicated to the universe of Destination Weddings in Rio, combining local knowledge with the experience of more than two decades in events.",
          "To follow each project closely, only **10 Destination Weddings per year** are held.",
        ],
        cta: "Check availability",
      },
      {
        page: "legal",
        name: "Brazil Legal Wedding 🌈",
        eyebrow: "SUPPORT FOR FOREIGN COUPLES",
        title: "The next chapter of your story can begin in Brazil.",
        paragraphs: [
          "If marriage between people of the same sex is not yet allowed in your country, Brazil can be a way to make this union official.",
          "Based in Rio de Janeiro, our team offers support in organizing the documentation and in following the stages of the civil marriage, according to the requirements applicable to each couple.",
          "You have someone here to help you understand the process, organize the next steps and accompany this journey.",
          "And, if you wish, the civil marriage can gain a celebration for two in Rio.",
        ],
        cta: "Understand how to marry in Brazil",
        note: "The marriage depends on meeting the legal requirements and on the registry office's review. Its recognition outside Brazil depends on the rules of each country.",
      },
    ],
    destination: {
      title: "Marry in Rio. Remember forever.",
      paragraphs: [
        "The encounter with the city, the exchange of glances, the people gathered and that instant when everything becomes part of the same story.",
        "Let's create space for you to live each of these moments.",
      ],
      cta: "Imagine our wedding in Rio",
    },
    planning: {
      title: "You plan from wherever you are. We take care up close.",
      items: [
        {
          title: "Local knowledge",
          body: "A team in Rio to help choose settings and suppliers according to your style, priorities and investment.",
        },
        {
          title: "Accompanied planning",
          body: "Decisions, stages and details organized with the couple, from the first conversation to the celebration.",
        },
        {
          title: "Warmth in every contact",
          body: "Close service, with support in English for couples who are organizing their wedding from outside Brazil.",
        },
      ],
    },
    ways: {
      title: "More than beautiful images. Memories of a day of your own.",
      cards: [
        { title: "The instant of the yes", text: "The vows, the glances and the emotion of being exactly where you wanted." },
        { title: "The people close by", text: "The hugs and the encounters that give even more meaning to the celebration." },
        { title: "Rio in memory", text: "A setting that becomes part of the couple's story." },
      ],
    },
    about: {
      kicker: "MEET LECO BIAGGÌONI",
      title: "Experience to take care. Sensitivity to listen.",
      paragraphs: [
        "“In 2004, I opened my first company. Since then, I have been through many events, met different stories and learned that details only make sense when they represent the people.",
        "For more than 10 years, weddings have become the center of my work.",
        "Today, I bring this experience together to do what gives me the most pleasure: creating encounters, making dreams come true and providing special moments.",
        "I want to get to know your story and discover, together with my team, how we can be part of it.”",
      ],
      cta: "Talk to Leco",
    },
    method: {
      title: "From the first idea to your day.",
      steps: [
        {
          n: "01",
          title: "You tell us",
          body: "We talk about the couple's story, the desired format, the expected date and what is a priority for you.",
        },
        {
          n: "02",
          title: "We plan together",
          body: "We present a proposal and organize the choices, the suppliers and the necessary stages. When there is a civil marriage, the planning also considers the documentation and the requirements of the process.",
        },
        {
          n: "03",
          title: "You live it",
          body: "With the details coordinated by the team, the moment comes to be present, exchange vows and enjoy the celebration.",
        },
      ],
    },
    emotional: {
      title: "The setting can be extraordinary. What makes this day unique is you.",
      paragraphs: ["A wedding designed for your story, with space for emotion to happen."],
    },
    formats: {
      kicker: "FROM CIVIL MARRIAGE TO CELEBRATION",
      title: "How do you want to live this moment?",
      packA: {
        title: "Brazil Legal Wedding 🌈",
        paragraphs: [
          "For foreign couples looking for support to organize their civil marriage in Brazil.",
          "Support with the documentation, liaison with the registry office and follow-up of the stages, according to the couple's needs.",
        ],
        cta: "Talk about the civil marriage",
      },
      packB: {
        title: "Brazil Legal Wedding + Elopement",
        paragraphs: [
          "For those who wish to combine the civil marriage with an intimate celebration in Rio de Janeiro.",
          "In addition to support with the civil process, we plan an experience for two, with setting, ceremony and services chosen with you.",
        ],
        cta: "Plan the civil marriage and the celebration",
      },
    },
    contact: {
      title: "Tell us a little about yourselves.",
      paragraphs: [
        "Perhaps you already have a date. Perhaps you only have the wish to begin.",
        "We want to know what you are imagining and how we can help turn this idea into a plan.",
      ],
      form: {
        names: "Names of the couple",
        email: "E-mail",
        whatsapp: "WhatsApp with country code",
        country: "Country where you live",
        experience: "Which experience are you looking for?",
        experienceOptions: [
          "Elopement Wedding",
          "Same-Sex Wedding",
          "Destination Wedding",
          "Brazil Legal Wedding",
          "We are still discovering",
        ],
        date: "Desired date or period",
        guests: "Estimated number of guests",
        message: "Tell us how you imagine this moment",
        submit: "Let's talk about our wedding",
        note: "We will use the information provided to reply to your contact and talk about your planning.",
      },
    },
    faq: {
      title: "Before starting",
      items: [
        {
          q: "Can we organize the wedding while living outside Brazil?",
          a: "Yes. The planning can begin remotely, with our team in Rio following the decisions and the local organization. If there is a civil marriage, the in-person stages and the timelines will be checked according to the case.",
        },
        {
          q: "Is the Elopement Wedding only for the couple?",
          a: "The focus is an intimate celebration. It can be a moment just for you or include a few close people, according to the chosen experience. It is also a possibility for renewing vows.",
        },
        {
          q: "Can a same-sex wedding be an Elopement or Destination Wedding?",
          a: "Yes. You can choose a ceremony for two, a celebration with guests or a wedding experience in Rio for those coming from abroad.",
        },
        {
          q: "We are foreigners. Can we have a civil marriage in Brazil?",
          a: "Foreigners can marry in Brazil, provided they meet the applicable requirements. The documentation and the conditions of the process need to be checked with the registry office considering the situation of each person.",
        },
        {
          q: "Does Brazil allow marriage between people of the same sex?",
          a: "Yes. Brazilian registry offices cannot refuse the qualification or the celebration of the marriage because it is a same-sex couple. The other legal requirements remain necessary.",
        },
        {
          q: "Will the marriage be recognized in our country?",
          a: "Not automatically. The recognition and the effects of the marriage abroad depend on the laws of each country. This question should be confirmed with legal advice in the place where you intend to use the certificate.",
        },
        {
          q: "How long does the civil process take?",
          a: "The timeline depends on the documentation, the necessary arrangements and the registry office. That is why the first step is to get to know your case and check the requirements before defining the travel schedule.",
        },
        {
          q: "Do we need to hire a party together with the civil marriage support?",
          a: "No. You can come to Brazil Legal Wedding for support with the civil process or combine this service with a celebration.",
        },
      ],
    },
    footer: {
      name: "Leco Biaggìoni",
      text: "Your love. Your way. Rio as the setting.",
      city: "Rio de Janeiro · Brazil",
      cta: "Let's talk",
      languages: "Português · English · Español",
    },
  },

  es: {
    nav: {
      items: [
        { page: "sameSex", label: "Boda Homoafectiva" },
        { page: "legal", label: "Brazil Legal Wedding 🌈" },
        { page: "elopement", label: "Elopement Wedding" },
        { page: "destination", label: "Destination Wedding" },
      ],
      cta: "Hablemos",
    },
    hero: {
      kicker: "LECO BIAGGÌONI · BODAS EN RÍO DE JANEIRO",
      title: "Su amor. Su manera. Río como escenario.",
      paragraphs: [
        "Una ceremonia para dos, una celebración con quienes ustedes aman o el próximo paso para oficializar la unión en Brasil.",
        "Leco Biaggìoni y su equipo cuidan de la planificación para transformar la historia de ustedes en una experiencia que tenga sentido en cada detalle.",
      ],
      cta: "Planifiquemos nuestra boda",
      secondary: "Conozcan las experiencias",
    },
    stats: ["Más de 20 años en eventos", "Más de 10 años dedicados a bodas", "Río de Janeiro"],
    presentation: {
      kicker: "HISTORIAS DIFERENTES. UN CUIDADO PERSONAL.",
      title: "La boda de ustedes comienza con una buena conversación.",
      paragraphs: [
        "Antes de elegir el escenario, las flores o la música, queremos conocerlos.",
        "¿Cómo imaginan ese día? ¿Quién necesita estar cerca? ¿Qué haría ese momento verdaderamente especial?",
        "Es de esa conversación que nace nuestro trabajo: reunir a las personas, los lugares y los detalles correctos para una celebración con la identidad de la pareja.",
      ],
    },
    services: [
      {
        page: "elopement",
        name: "Elopement Wedding",
        eyebrow: "UN DÍA ENTERO PARA USTEDES DOS",
        title: "La intimidad de un encuentro. La emoción de una boda.",
        paragraphs: [
          "Intercambiar votos frente al mar, celebrar con pocos invitados o vivir ese momento solo los dos. El Elopement Wedding abre espacio para una celebración íntima, al ritmo de ustedes.",
          "Llevamos la experiencia de quien organiza grandes eventos para cuidar cada detalle de un encuentro pequeño y lleno de significado.",
          "Para casarse o renovar los votos en Río de Janeiro, creamos opciones de experiencias que combinan escenario, ceremonia y los detalles que ustedes desean vivir.",
        ],
        cta: "Descubrir nuestro elopement",
      },
      {
        page: "sameSex",
        name: "Boda Homoafectiva",
        eyebrow: "LIBERTAD PARA CELEBRAR QUIENES USTEDES SON",
        title: "Una boda en la que ustedes puedan ser enteramente ustedes.",
        paragraphs: [
          "La historia de ustedes orienta cada elección: los votos, la entrada, las personas alrededor y la forma de celebrar.",
          "Nuestro trabajo comienza en la escucha y sigue por la planificación, por la elección de los proveedores y por la conducción del día. Con acogida y respeto, creamos espacio para que la pareja se reconozca en toda la experiencia.",
          "Una ceremonia íntima o una fiesta con todos cerca. El formato es de ustedes. El cuidado está en cada etapa.",
        ],
        cta: "Celebrar nuestra historia",
      },
      {
        page: "destination",
        name: "Destination Wedding",
        eyebrow: "RÍO COMO DESTINO. USTEDES COMO MOTIVO.",
        title: "Un viaje que reúne a las personas más importantes de su vida.",
        paragraphs: [
          "Elegir Río para casarse es invitar a quienes ustedes aman a compartir una experiencia que va más allá de la ceremonia.",
          "Cuidamos de la planificación de la boda, de la programación y de los detalles que hacen que la pareja y los invitados se sientan bien recibidos de principio a fin.",
          "Desde 2022, Leco se viene dedicando al universo de los Destination Weddings en Río, uniendo conocimiento local a la experiencia de más de dos décadas en eventos.",
          "Para acompañar cada proyecto de cerca, se realizan solo **10 Destination Weddings por año**.",
        ],
        cta: "Consultar disponibilidad",
      },
      {
        page: "legal",
        name: "Brazil Legal Wedding 🌈",
        eyebrow: "APOYO PARA PAREJAS EXTRANJERAS",
        title: "El próximo capítulo de su historia puede comenzar en Brasil.",
        paragraphs: [
          "Si el matrimonio entre personas del mismo sexo aún no está permitido en el país de ustedes, Brasil puede ser un camino para oficializar esa unión.",
          "Con base en Río de Janeiro, nuestro equipo ofrece apoyo en la organización de la documentación y en el acompañamiento de las etapas del matrimonio civil, conforme a las exigencias aplicables a cada pareja.",
          "Ustedes tienen a alguien aquí para ayudar a entender el proceso, organizar los próximos pasos y acompañar ese recorrido.",
          "Y, si lo desean, el matrimonio civil puede ganar una celebración para dos en Río.",
        ],
        cta: "Entender cómo casarse en Brasil",
        note: "El matrimonio depende del cumplimiento de los requisitos legales y del análisis del registro civil. Su reconocimiento fuera de Brasil depende de las reglas de cada país.",
      },
    ],
    destination: {
      title: "Casarse en Río. Recordar para siempre.",
      paragraphs: [
        "El encuentro con la ciudad, el intercambio de miradas, las personas reunidas y aquel instante en que todo pasa a formar parte de la misma historia.",
        "Vamos a crear espacio para que ustedes vivan cada uno de esos momentos.",
      ],
      cta: "Imaginar nuestra boda en Río",
    },
    planning: {
      title: "Ustedes planifican desde donde estén. Nosotros cuidamos de cerca.",
      items: [
        {
          title: "Conocimiento local",
          body: "Un equipo en Río para ayudar a elegir escenarios y proveedores de acuerdo con el estilo, las prioridades y la inversión de ustedes.",
        },
        {
          title: "Planificación acompañada",
          body: "Decisiones, etapas y detalles organizados con la pareja, de la primera conversación a la celebración.",
        },
        {
          title: "Acogida en cada contacto",
          body: "Atención cercana, con apoyo en inglés para parejas que están organizando la boda desde fuera de Brasil.",
        },
      ],
    },
    ways: {
      title: "Más que imágenes bonitas. Memorias de un día de ustedes.",
      cards: [
        { title: "El instante del sí", text: "Los votos, las miradas y la emoción de estar exactamente donde ustedes querían." },
        { title: "Las personas cerca", text: "Los abrazos y los encuentros que dan aún más significado a la celebración." },
        { title: "Río en la memoria", text: "Un escenario que pasa a formar parte de la historia de la pareja." },
      ],
    },
    about: {
      kicker: "CONOZCAN A LECO BIAGGÌONI",
      title: "Experiencia para cuidar. Sensibilidad para escuchar.",
      paragraphs: [
        "“En 2004, abrí mi primera empresa. Desde entonces, pasé por muchos eventos, conocí historias diferentes y aprendí que los detalles solo tienen sentido cuando representan a las personas.",
        "Hace más de 10 años, las bodas se convirtieron en el centro de mi trabajo.",
        "Hoy, reúno esa experiencia para hacer lo que más placer me da: crear encuentros, realizar sueños y proporcionar momentos especiales.",
        "Quiero conocer la historia de ustedes y descubrir, junto con mi equipo, cómo podemos formar parte de ella.”",
      ],
      cta: "Conversar con Leco",
    },
    method: {
      title: "De la primera idea al día de ustedes.",
      steps: [
        {
          n: "01",
          title: "Ustedes cuentan",
          body: "Conversamos sobre la historia de la pareja, el formato deseado, la previsión de fecha y lo que es prioridad para ustedes.",
        },
        {
          n: "02",
          title: "Nosotros planificamos juntos",
          body: "Presentamos una propuesta y organizamos las elecciones, los proveedores y las etapas necesarias. Cuando hay matrimonio civil, la planificación también considera la documentación y las exigencias del proceso.",
        },
        {
          n: "03",
          title: "Ustedes viven",
          body: "Con los detalles coordinados por el equipo, llega el momento de estar presentes, intercambiar los votos y disfrutar de la celebración.",
        },
      ],
    },
    emotional: {
      title: "El escenario puede ser extraordinario. Lo que hace único este día son ustedes.",
      paragraphs: ["Una boda pensada para su historia, con espacio para que la emoción suceda."],
    },
    formats: {
      kicker: "DEL MATRIMONIO CIVIL A LA CELEBRACIÓN",
      title: "¿Cómo quieren vivir este momento?",
      packA: {
        title: "Brazil Legal Wedding 🌈",
        paragraphs: [
          "Para parejas extranjeras que buscan apoyo para organizar el matrimonio civil en Brasil.",
          "Apoyo con la documentación, interlocución con el registro civil y acompañamiento de las etapas, de acuerdo con las necesidades de la pareja.",
        ],
        cta: "Conversar sobre el matrimonio civil",
      },
      packB: {
        title: "Brazil Legal Wedding + Elopement",
        paragraphs: [
          "Para quienes desean unir el matrimonio civil a una celebración íntima en Río de Janeiro.",
          "Además del apoyo al proceso civil, planificamos una experiencia para dos, con escenario, ceremonia y servicios elegidos con ustedes.",
        ],
        cta: "Planificar el civil y la celebración",
      },
    },
    contact: {
      title: "Cuéntennos un poco sobre ustedes.",
      paragraphs: [
        "Tal vez ustedes ya tengan una fecha. Tal vez tengan solo las ganas de comenzar.",
        "Queremos saber qué están imaginando y cómo podemos ayudar a transformar esa idea en un plan.",
      ],
      form: {
        names: "Nombres de la pareja",
        email: "E-mail",
        whatsapp: "WhatsApp con código del país",
        country: "País donde viven",
        experience: "¿Qué experiencia buscan?",
        experienceOptions: [
          "Elopement Wedding",
          "Boda Homoafectiva",
          "Destination Wedding",
          "Brazil Legal Wedding",
          "Aún estamos descubriendo",
        ],
        date: "Fecha o período deseado",
        guests: "Número estimado de invitados",
        message: "Cuéntennos cómo imaginan este momento",
        submit: "Conversemos sobre nuestra boda",
        note: "Usaremos los datos informados para responder al contacto y conversar sobre la planificación de ustedes.",
      },
    },
    faq: {
      title: "Antes de comenzar",
      items: [
        {
          q: "¿Podemos organizar la boda viviendo fuera de Brasil?",
          a: "Sí. La planificación puede comenzar a distancia, con nuestro equipo en Río acompañando las decisiones y la organización local. Si hay matrimonio civil, las etapas presenciales y los plazos se verificarán según el caso.",
        },
        {
          q: "¿El Elopement Wedding es solo para la pareja?",
          a: "El foco es una celebración íntima. Puede ser un momento solo de ustedes o incluir a pocas personas cercanas, según la experiencia elegida. También es una posibilidad para renovar los votos.",
        },
        {
          q: "¿Una boda homoafectiva puede ser un Elopement o Destination Wedding?",
          a: "Sí. Ustedes pueden elegir una ceremonia para dos, una celebración con invitados o una experiencia de boda en Río para quienes vienen de fuera.",
        },
        {
          q: "Somos extranjeros. ¿Podemos casarnos civilmente en Brasil?",
          a: "Los extranjeros pueden casarse en Brasil, siempre que cumplan los requisitos aplicables. La documentación y las condiciones del proceso necesitan verificarse con el registro civil considerando la situación de cada persona.",
        },
        {
          q: "¿Brasil permite el matrimonio entre personas del mismo sexo?",
          a: "Sí. Los registros civiles brasileños no pueden rechazar la habilitación o la celebración del matrimonio por tratarse de una pareja del mismo sexo. Los demás requisitos legales siguen siendo necesarios.",
        },
        {
          q: "¿El matrimonio será reconocido en nuestro país?",
          a: "No automáticamente. El reconocimiento y los efectos del matrimonio en el exterior dependen de las leyes de cada país. Esta cuestión debe confirmarse con orientación jurídica en el lugar donde ustedes pretenden utilizar el certificado.",
        },
        {
          q: "¿Cuánto tiempo lleva el proceso civil?",
          a: "El plazo depende de la documentación, de las gestiones necesarias y del registro civil. Por eso, el primer paso es conocer el caso de ustedes y verificar las exigencias antes de definir la programación del viaje.",
        },
        {
          q: "¿Necesitamos contratar una fiesta junto con el apoyo al matrimonio civil?",
          a: "No. Ustedes pueden buscar el Brazil Legal Wedding para el apoyo al proceso civil o combinar este servicio con una celebración.",
        },
      ],
    },
    footer: {
      name: "Leco Biaggìoni",
      text: "Su amor. Su manera. Río como escenario.",
      city: "Río de Janeiro · Brasil",
      cta: "Hablemos",
      languages: "Português · English · Español",
    },
  },
};
