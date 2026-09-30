import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 02_Casamento_Homoafetivo */
export const sameSex: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "CASAMENTO HOMOAFETIVO NO RIO DE JANEIRO",
      title: "A liberdade de celebrar. A tranquilidade de se sentir acolhidos.",
      paragraphs: [
        "Um casamento em que vocês se reconheçam nos votos, nas escolhas e nas pessoas que estão ao redor.",
        "Leco Biaggìoni e sua equipe planejam celebrações para casais LGBTQIA+ com escuta, respeito e atenção à identidade de cada história.",
      ],
      cta: { label: "Conversar sobre nossa celebração", href: "#rsvp" },
      secondary: { label: "Descobrir as possibilidades", href: "#formas-de-celebrar" },
    },
    sections: [
      {
        type: "presentation",
        title: "A primeira coisa que queremos conhecer é a história de vocês.",
        paragraphs: [
          "Como se encontraram? O que gostam de fazer juntos? O que desejam viver nesse dia?",
          "Essas respostas ajudam a escolher o cenário, a condução da cerimônia e os detalhes da festa. Também orientam o que faz sentido manter, adaptar ou criar.",
          "Vocês podem chegar com referências e planos definidos. Ou apenas com a vontade de começar. O planejamento nasce dessa conversa.",
        ],
      },
      {
        type: "split",
        title: "Cada ritual pode ter o significado que vocês escolherem.",
        paragraphs: [
          "Entrar juntos, chegar por caminhos diferentes, trocar votos particulares ou convidar alguém especial para participar.",
          "A cerimônia é construída com o casal. A linguagem, a participação da família, as flores e os momentos simbólicos acompanham as escolhas de vocês.",
          "Combinamos esses detalhes com os profissionais envolvidos para que o acolhimento esteja presente na experiência inteira.",
        ],
      },
      {
        type: "cards",
        id: "formas-de-celebrar",
        title: "Qual é o tamanho do encontro que vocês imaginam?",
        cards: [
          {
            title: "Um Elopement a dois",
            text: "Uma celebração íntima, com o Rio como cenário e o casal no centro de cada decisão.",
          },
          {
            title: "Uma festa com quem faz parte da história",
            text: "Uma cerimônia seguida de celebração, com planejamento, fornecedores e cerimonial conectados.",
          },
          {
            title: "Um Destination Wedding",
            text: "Uma viagem para reunir as pessoas queridas no Rio e compartilhar o casamento ao longo de uma programação pensada para o grupo.",
          },
        ],
        cta: { label: "Encontrar o formato do nosso casamento", href: "#rsvp" },
      },
      {
        type: "band",
        title: "O cuidado aparece antes do dia do casamento.",
        paragraphs: [
          "Começa na forma de ouvir e de se comunicar. Continua na escolha dos fornecedores, no planejamento do orçamento e na organização de cada etapa.",
          "No dia, a equipe acompanha o roteiro e a operação para que o casal tenha espaço para viver a celebração.",
        ],
      },
      {
        type: "destination",
        title: "Vocês também querem oficializar a união no Brasil?",
        paragraphs: [
          "O Brazil Wedding Legal oferece suporte a casais estrangeiros na organização e no acompanhamento do processo civil, inclusive quando o casamento entre pessoas do mesmo sexo não é permitido no país de origem.",
          "Os requisitos são verificados conforme o caso. O reconhecimento da união em outro país depende da legislação local.",
        ],
        cta: { label: "Conhecer o Brazil Wedding Legal", href: "page:legal" },
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "Precisamos seguir um formato tradicional de cerimônia?",
            a: "A celebração pode ser personalizada de acordo com os desejos do casal. Quando houver cerimônia civil ou religiosa, seus requisitos específicos também precisam ser considerados.",
          },
          {
            q: "Podemos planejar tudo morando fora?",
            a: "Sim. O planejamento da celebração pode acontecer à distância, com a equipe acompanhando as providências locais.",
          },
          {
            q: "O atendimento inclui o casamento civil?",
            a: "O escopo é definido na proposta. A organização da celebração não inclui automaticamente a coordenação do processo civil.",
          },
        ],
      },
      {
        type: "destination",
        title: "Vamos criar um casamento em que vocês se sintam em casa.",
        paragraphs: [
          "Contem como desejam celebrar e quem querem ter por perto. Vamos conversar sobre as possibilidades e a disponibilidade da equipe.",
        ],
        cta: { label: "Agendar uma conversa com a equipe", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "SAME-SEX WEDDING IN RIO DE JANEIRO",
      title: "The freedom to celebrate. The peace of feeling welcomed.",
      paragraphs: [
        "A wedding in which you recognize yourselves in the vows, in the choices and in the people around you.",
        "Leco Biaggìoni and the team plan celebrations for LGBTQIA+ couples with listening, respect and attention to the identity of each story.",
      ],
      cta: { label: "Talk about our celebration", href: "#rsvp" },
      secondary: { label: "Discover the possibilities", href: "#formas-de-celebrar" },
    },
    sections: [
      {
        type: "presentation",
        title: "The first thing we want to know is your story.",
        paragraphs: [
          "How did you meet? What do you like to do together? What do you wish to live on this day?",
          "These answers help choose the setting, the running of the ceremony and the details of the party. They also guide what makes sense to keep, adapt or create.",
          "You can arrive with defined references and plans. Or only with the wish to begin. The planning is born from this conversation.",
        ],
      },
      {
        type: "split",
        title: "Each ritual can have the meaning you choose.",
        paragraphs: [
          "Entering together, arriving by different paths, exchanging private vows or inviting someone special to take part.",
          "The ceremony is built with the couple. The language, the participation of the family, the flowers and the symbolic moments follow your choices.",
          "We arrange these details with the professionals involved so that warmth is present in the whole experience.",
        ],
      },
      {
        type: "cards",
        id: "formas-de-celebrar",
        title: "What is the size of the gathering you imagine?",
        cards: [
          {
            title: "An Elopement for two",
            text: "An intimate celebration, with Rio as the setting and the couple at the center of every decision.",
          },
          {
            title: "A party with those who are part of the story",
            text: "A ceremony followed by a celebration, with planning, suppliers and ceremonial connected.",
          },
          {
            title: "A Destination Wedding",
            text: "A trip to bring together dear people in Rio and share the wedding throughout a schedule designed for the group.",
          },
        ],
        cta: { label: "Find the format of our wedding", href: "#rsvp" },
      },
      {
        type: "band",
        title: "The care appears before the wedding day.",
        paragraphs: [
          "It begins in the way of listening and communicating. It continues in the choice of suppliers, in the budget planning and in the organization of each stage.",
          "On the day, the team follows the script and the operation so that the couple has space to live the celebration.",
        ],
      },
      {
        type: "destination",
        title: "Do you also want to make the union official in Brazil?",
        paragraphs: [
          "Brazil Wedding Legal offers support to foreign couples in organizing and following the civil process, including when marriage between people of the same sex is not allowed in the country of origin.",
          "The requirements are checked according to the case. The recognition of the union in another country depends on the local legislation.",
        ],
        cta: { label: "Discover Brazil Wedding Legal", href: "page:legal" },
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "Do we need to follow a traditional ceremony format?",
            a: "The celebration can be personalized according to the couple's wishes. When there is a civil or religious ceremony, its specific requirements also need to be considered.",
          },
          {
            q: "Can we plan everything while living abroad?",
            a: "Yes. The planning of the celebration can happen remotely, with the team following the local arrangements.",
          },
          {
            q: "Does the service include the civil marriage?",
            a: "The scope is defined in the proposal. The organization of the celebration does not automatically include the coordination of the civil process.",
          },
        ],
      },
      {
        type: "destination",
        title: "Let's create a wedding in which you feel at home.",
        paragraphs: [
          "Tell us how you wish to celebrate and who you want to have close by. Let's talk about the possibilities and the team's availability.",
        ],
        cta: { label: "Schedule a conversation with the team", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "BODA HOMOAFECTIVA EN RÍO DE JANEIRO",
      title: "La libertad de celebrar. La tranquilidad de sentirse acogidos.",
      paragraphs: [
        "Una boda en la que ustedes se reconozcan en los votos, en las elecciones y en las personas que están alrededor.",
        "Leco Biaggìoni y su equipo planifican celebraciones para parejas LGBTQIA+ con escucha, respeto y atención a la identidad de cada historia.",
      ],
      cta: { label: "Conversar sobre nuestra celebración", href: "#rsvp" },
      secondary: { label: "Descubrir las posibilidades", href: "#formas-de-celebrar" },
    },
    sections: [
      {
        type: "presentation",
        title: "Lo primero que queremos conocer es la historia de ustedes.",
        paragraphs: [
          "¿Cómo se encontraron? ¿Qué les gusta hacer juntos? ¿Qué desean vivir en ese día?",
          "Esas respuestas ayudan a elegir el escenario, la conducción de la ceremonia y los detalles de la fiesta. También orientan lo que tiene sentido mantener, adaptar o crear.",
          "Ustedes pueden llegar con referencias y planes definidos. O solo con las ganas de comenzar. La planificación nace de esa conversación.",
        ],
      },
      {
        type: "split",
        title: "Cada ritual puede tener el significado que ustedes elijan.",
        paragraphs: [
          "Entrar juntos, llegar por caminos diferentes, intercambiar votos particulares o invitar a alguien especial a participar.",
          "La ceremonia se construye con la pareja. El lenguaje, la participación de la familia, las flores y los momentos simbólicos acompañan las elecciones de ustedes.",
          "Combinamos esos detalles con los profesionales involucrados para que la acogida esté presente en la experiencia entera.",
        ],
      },
      {
        type: "cards",
        id: "formas-de-celebrar",
        title: "¿Cuál es el tamaño del encuentro que ustedes imaginan?",
        cards: [
          {
            title: "Un Elopement para dos",
            text: "Una celebración íntima, con Río como escenario y la pareja en el centro de cada decisión.",
          },
          {
            title: "Una fiesta con quienes forman parte de la historia",
            text: "Una ceremonia seguida de celebración, con planificación, proveedores y ceremonial conectados.",
          },
          {
            title: "Un Destination Wedding",
            text: "Un viaje para reunir a las personas queridas en Río y compartir la boda a lo largo de una programación pensada para el grupo.",
          },
        ],
        cta: { label: "Encontrar el formato de nuestra boda", href: "#rsvp" },
      },
      {
        type: "band",
        title: "El cuidado aparece antes del día de la boda.",
        paragraphs: [
          "Comienza en la forma de escuchar y de comunicarse. Continúa en la elección de los proveedores, en la planificación del presupuesto y en la organización de cada etapa.",
          "El día, el equipo acompaña el guion y la operación para que la pareja tenga espacio para vivir la celebración.",
        ],
      },
      {
        type: "destination",
        title: "¿Ustedes también quieren oficializar la unión en Brasil?",
        paragraphs: [
          "El Brazil Wedding Legal ofrece apoyo a parejas extranjeras en la organización y en el acompañamiento del proceso civil, incluso cuando el matrimonio entre personas del mismo sexo no está permitido en el país de origen.",
          "Los requisitos se verifican según el caso. El reconocimiento de la unión en otro país depende de la legislación local.",
        ],
        cta: { label: "Conocer el Brazil Wedding Legal", href: "page:legal" },
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Necesitamos seguir un formato tradicional de ceremonia?",
            a: "La celebración puede personalizarse de acuerdo con los deseos de la pareja. Cuando haya ceremonia civil o religiosa, sus requisitos específicos también necesitan considerarse.",
          },
          {
            q: "¿Podemos planificar todo viviendo fuera?",
            a: "Sí. La planificación de la celebración puede realizarse a distancia, con el equipo acompañando las gestiones locales.",
          },
          {
            q: "¿La atención incluye el matrimonio civil?",
            a: "El alcance se define en la propuesta. La organización de la celebración no incluye automáticamente la coordinación del proceso civil.",
          },
        ],
      },
      {
        type: "destination",
        title: "Vamos a crear una boda en la que ustedes se sientan en casa.",
        paragraphs: [
          "Cuéntennos cómo desean celebrar y a quién quieren tener cerca. Vamos a conversar sobre las posibilidades y la disponibilidad del equipo.",
        ],
        cta: { label: "Agendar una conversación con el equipo", href: "#rsvp" },
      },
    ],
  },
};
