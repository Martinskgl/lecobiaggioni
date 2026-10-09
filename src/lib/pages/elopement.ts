import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 01_Elopement_Wedding */
export const elopement: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "ELOPEMENT WEDDING NO RIO DE JANEIRO",
      title: "Um dia que cabe no abraço de vocês dois.",
      paragraphs: [
        "Uma cerimônia íntima, em um cenário que emociona, com tempo para viver cada instante.",
        "Criamos Elopement Weddings para casais que desejam celebrar no Rio de Janeiro com o cuidado de uma produção completa e a proximidade de uma experiência feita para dois.",
      ],
      cta: { label: "Planejar nosso elopement", href: "#rsvp" },
      secondary: { label: "Conhecer as experiências", href: "#experiencias" },
    },
    sections: [
      {
        type: "presentation",
        title: "Quando o casal é o centro, cada escolha ganha significado.",
        paragraphs: [
          "Talvez vocês imaginem trocar votos diante do mar. Talvez prefiram a privacidade de uma villa ou um encontro com poucas pessoas queridas.",
          "O Elopement começa nessa escolha: dar ao casamento o tamanho e o ritmo que combinam com vocês.",
          "Nossa equipe conecta cenário, cerimônia, flores, registros e logística para que tudo faça parte da mesma experiência. Vocês participam das decisões e chegam ao dia sabendo como ele foi pensado.",
        ],
      },
      {
        type: "icons",
        title: "Uma celebração íntima também merece atenção a cada detalhe.",
        items: [
          {
            title: "Um cenário com a cara de vocês",
            body: "Apresentamos possibilidades de local a partir do estilo do casal, da data e da experiência escolhida.",
          },
          {
            title: "Uma cerimônia pessoal",
            body: "Construímos o momento dos votos respeitando a história, a linguagem e a forma como vocês desejam celebrar.",
          },
          {
            title: "Flores, fotografia e filme",
            body: "Organizamos os elementos que compõem a cerimônia e os registros que vão acompanhar vocês depois dela, conforme o pacote contratado.",
          },
          {
            title: "Coordenação no Rio",
            body: "Uma equipe local acompanha fornecedores, horários e deslocamentos previstos na experiência.",
          },
        ],
      },
      {
        type: "cards",
        id: "experiencias",
        title: "Escolham quanto desse dia querem transformar em celebração.",
        cards: [
          {
            title: "Essential",
            text: "Uma cerimônia íntima com os elementos essenciais organizados: coordenação, estrutura floral, celebrante, fotografia, filme e transporte.",
          },
          {
            title: "Signature",
            text: "A experiência se estende à preparação, a um ensaio depois da cerimônia e a um brinde para aproveitar o começo desse novo capítulo.",
          },
          {
            title: "Luxury Experience",
            text: "Mais tempo juntos, produção floral ampliada, música ao vivo e uma experiência gastronômica para continuar a celebração.",
          },
        ],
        paragraph:
          "Não encontrou o formato ideal? Também criamos experiências personalizadas, sob medida para a história de vocês.",
        cta: { label: "Descobrir qual experiência combina conosco", href: "page:packages" },
      },
      {
        type: "band",
        title: "O Rio pode estar longe. O planejamento pode estar perto.",
        paragraphs: [
          "As conversas e as decisões começam de onde vocês estiverem. Nossa equipe apresenta as possibilidades, organiza as próximas etapas e acompanha a preparação no Rio.",
          "A chegada à cidade passa a fazer parte de um plano construído com vocês.",
        ],
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "Podemos ter convidados?",
            a: "Sim, desde que a composição do grupo seja compatível com o local e a experiência. Contem quem desejam ter por perto para avaliarmos o formato e os ajustes necessários.",
          },
          {
            q: "Podemos renovar nossos votos?",
            a: "Sim. O Elopement também pode ser criado para celebrar a continuidade da história de vocês.",
          },
          {
            q: "A cerimônia pode ser em inglês?",
            a: "Sim. As experiências Essential, Signature e Luxury Experience contemplam celebrante em inglês.",
          },
          {
            q: "O Elopement inclui casamento civil?",
            a: "A experiência de celebração e o processo civil são serviços diferentes. Se vocês também desejam se casar civilmente no Brasil, podemos combinar o Elopement com o Brazil Legal Wedding.",
          },
        ],
      },
      {
        type: "destination",
        title: "Como seria um dia inteiramente de vocês?",
        paragraphs: [
          "Contem o período desejado, de onde vêm e o cenário que imaginam. Vamos conhecer a história de vocês e consultar as possibilidades para essa data.",
        ],
        cta: { label: "Consultar disponibilidade para nosso elopement", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "ELOPEMENT WEDDING IN RIO DE JANEIRO",
      title: "A day that fits in the embrace of the two of you.",
      paragraphs: [
        "An intimate ceremony, in a setting that moves you, with time to live every instant.",
        "We create Elopement Weddings for couples who wish to celebrate in Rio de Janeiro with the care of a complete production and the closeness of an experience made for two.",
      ],
      cta: { label: "Plan our elopement", href: "#rsvp" },
      secondary: { label: "Discover the experiences", href: "#experiencias" },
    },
    sections: [
      {
        type: "presentation",
        title: "When the couple is the center, every choice gains meaning.",
        paragraphs: [
          "Perhaps you imagine exchanging vows facing the sea. Perhaps you prefer the privacy of a villa or a gathering with a few dear people.",
          "The Elopement begins with this choice: giving the wedding the size and the pace that suit you.",
          "Our team connects setting, ceremony, flowers, records and logistics so that everything is part of the same experience. You take part in the decisions and arrive at the day knowing how it was designed.",
        ],
      },
      {
        type: "icons",
        title: "An intimate celebration also deserves attention to every detail.",
        items: [
          {
            title: "A setting that looks like you",
            body: "We present venue possibilities based on the couple's style, the date and the chosen experience.",
          },
          {
            title: "A personal ceremony",
            body: "We build the moment of the vows respecting the story, the language and the way you wish to celebrate.",
          },
          {
            title: "Flowers, photography and film",
            body: "We organize the elements that make up the ceremony and the records that will accompany you after it, according to the contracted package.",
          },
          {
            title: "Coordination in Rio",
            body: "A local team follows the suppliers, schedules and transfers planned in the experience.",
          },
        ],
      },
      {
        type: "cards",
        id: "experiencias",
        title: "Choose how much of this day you want to turn into celebration.",
        cards: [
          {
            title: "Essential",
            text: "An intimate ceremony with the essential elements organized: coordination, floral structure, celebrant, photography, film and transportation.",
          },
          {
            title: "Signature",
            text: "The experience extends to the preparation, a photo session after the ceremony and a toast to enjoy the beginning of this new chapter.",
          },
          {
            title: "Luxury Experience",
            text: "More time together, expanded floral production, live music and a gastronomic experience to continue the celebration.",
          },
        ],
        paragraph:
          "Didn't find the right fit? We also create personalized experiences, tailored to your story.",
        cta: { label: "Discover which experience suits us", href: "page:packages" },
      },
      {
        type: "band",
        title: "Rio may be far away. The planning can be close.",
        paragraphs: [
          "The conversations and the decisions begin from wherever you are. Our team presents the possibilities, organizes the next steps and follows the preparation in Rio.",
          "The arrival in the city becomes part of a plan built with you.",
        ],
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "Can we have guests?",
            a: "Yes, as long as the composition of the group is compatible with the venue and the experience. Tell us who you wish to have close by so we can assess the format and the necessary adjustments.",
          },
          {
            q: "Can we renew our vows?",
            a: "Yes. The Elopement can also be created to celebrate the continuity of your story.",
          },
          {
            q: "Can the ceremony be in English?",
            a: "Yes. The Essential, Signature and Luxury Experience experiences include a celebrant in English.",
          },
          {
            q: "Does the Elopement include civil marriage?",
            a: "The celebration experience and the civil process are different services. If you also wish to have a civil marriage in Brazil, we can combine the Elopement with Brazil Legal Wedding.",
          },
        ],
      },
      {
        type: "destination",
        title: "What would a day entirely your own be like?",
        paragraphs: [
          "Tell us the desired period, where you come from and the setting you imagine. Let's get to know your story and check the possibilities for that date.",
        ],
        cta: { label: "Check availability for our elopement", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "ELOPEMENT WEDDING EN RÍO DE JANEIRO",
      title: "Un día que cabe en el abrazo de ustedes dos.",
      paragraphs: [
        "Una ceremonia íntima, en un escenario que emociona, con tiempo para vivir cada instante.",
        "Creamos Elopement Weddings para parejas que desean celebrar en Río de Janeiro con el cuidado de una producción completa y la cercanía de una experiencia hecha para dos.",
      ],
      cta: { label: "Planificar nuestro elopement", href: "#rsvp" },
      secondary: { label: "Conocer las experiencias", href: "#experiencias" },
    },
    sections: [
      {
        type: "presentation",
        title: "Cuando la pareja es el centro, cada elección gana significado.",
        paragraphs: [
          "Tal vez ustedes imaginen intercambiar votos frente al mar. Tal vez prefieran la privacidad de una villa o un encuentro con pocas personas queridas.",
          "El Elopement comienza en esa elección: darle a la boda el tamaño y el ritmo que combinan con ustedes.",
          "Nuestro equipo conecta escenario, ceremonia, flores, registros y logística para que todo forme parte de la misma experiencia. Ustedes participan en las decisiones y llegan al día sabiendo cómo fue pensado.",
        ],
      },
      {
        type: "icons",
        title: "Una celebración íntima también merece atención a cada detalle.",
        items: [
          {
            title: "Un escenario con el estilo de ustedes",
            body: "Presentamos posibilidades de lugar a partir del estilo de la pareja, de la fecha y de la experiencia elegida.",
          },
          {
            title: "Una ceremonia personal",
            body: "Construimos el momento de los votos respetando la historia, el lenguaje y la forma en que ustedes desean celebrar.",
          },
          {
            title: "Flores, fotografía y película",
            body: "Organizamos los elementos que componen la ceremonia y los registros que van a acompañarlos después de ella, según el paquete contratado.",
          },
          {
            title: "Coordinación en Río",
            body: "Un equipo local acompaña a proveedores, horarios y traslados previstos en la experiencia.",
          },
        ],
      },
      {
        type: "cards",
        id: "experiencias",
        title: "Elijan cuánto de ese día quieren transformar en celebración.",
        cards: [
          {
            title: "Essential",
            text: "Una ceremonia íntima con los elementos esenciales organizados: coordinación, estructura floral, celebrante, fotografía, película y transporte.",
          },
          {
            title: "Signature",
            text: "La experiencia se extiende a la preparación, a una sesión de fotos después de la ceremonia y a un brindis para disfrutar del comienzo de este nuevo capítulo.",
          },
          {
            title: "Luxury Experience",
            text: "Más tiempo juntos, producción floral ampliada, música en vivo y una experiencia gastronómica para continuar la celebración.",
          },
        ],
        paragraph:
          "¿No encontraron el formato ideal? También creamos experiencias personalizadas, a la medida de su historia.",
        cta: { label: "Descubrir qué experiencia combina con nosotros", href: "page:packages" },
      },
      {
        type: "band",
        title: "Río puede estar lejos. La planificación puede estar cerca.",
        paragraphs: [
          "Las conversaciones y las decisiones comienzan desde donde ustedes estén. Nuestro equipo presenta las posibilidades, organiza las próximas etapas y acompaña la preparación en Río.",
          "La llegada a la ciudad pasa a formar parte de un plan construido con ustedes.",
        ],
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Podemos tener invitados?",
            a: "Sí, siempre que la composición del grupo sea compatible con el lugar y la experiencia. Cuéntennos a quién desean tener cerca para evaluar el formato y los ajustes necesarios.",
          },
          {
            q: "¿Podemos renovar nuestros votos?",
            a: "Sí. El Elopement también puede crearse para celebrar la continuidad de la historia de ustedes.",
          },
          {
            q: "¿La ceremonia puede ser en inglés?",
            a: "Sí. Las experiencias Essential, Signature y Luxury Experience incluyen celebrante en inglés.",
          },
          {
            q: "¿El Elopement incluye matrimonio civil?",
            a: "La experiencia de celebración y el proceso civil son servicios diferentes. Si ustedes también desean casarse civilmente en Brasil, podemos combinar el Elopement con el Brazil Legal Wedding.",
          },
        ],
      },
      {
        type: "destination",
        title: "¿Cómo sería un día enteramente de ustedes?",
        paragraphs: [
          "Cuéntennos el período deseado, de dónde vienen y el escenario que imaginan. Vamos a conocer la historia de ustedes y consultar las posibilidades para esa fecha.",
        ],
        cta: { label: "Consultar disponibilidad para nuestro elopement", href: "#rsvp" },
      },
    ],
  },
};
