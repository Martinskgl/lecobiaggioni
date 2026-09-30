import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 05_Casamento_no_Rio. Links do portfólio ainda sem destino ("#"). */
export const rio: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "CASAMENTO NO RIO DE JANEIRO",
      title: "A cidade de vocês. O cenário do próximo capítulo.",
      paragraphs: [
        "O mar, os jardins, a arquitetura e os lugares que já fazem parte da sua história.",
        "Planejamos casamentos no Rio de Janeiro a partir do que vocês desejam viver: uma cerimônia íntima, uma festa com amigos e família ou uma celebração que ocupe o dia inteiro.",
      ],
      cta: { label: "Planejar nosso casamento no Rio", href: "#rsvp" },
      secondary: { label: "Encontrar nosso cenário", href: "#os-cenarios" },
    },
    sections: [
      {
        type: "cards",
        id: "os-cenarios",
        title: "Existe um Rio que combina com o casamento de vocês.",
        cards: [
          {
            title: "Perto do mar",
            text: "Para quem imagina uma celebração com luz natural, horizonte aberto e a paisagem da cidade por perto.",
          },
          {
            title: "Entre jardins e natureza",
            text: "Para quem deseja um encontro cercado de verde, com uma atmosfera mais reservada.",
          },
          {
            title: "Em hotéis e espaços com estrutura",
            text: "Para quem valoriza conforto e a possibilidade de aproximar preparação, cerimônia e hospedagem.",
          },
          {
            title: "Em casas, villas e espaços históricos",
            text: "Para quem procura personalidade, privacidade ou uma relação especial com a arquitetura.",
          },
        ],
        paragraph:
          "A escolha considera o número de convidados, a data, a infraestrutura, o orçamento e as condições de cada local. Nossa equipe ajuda a transformar as referências do casal em opções viáveis.",
      },
      {
        type: "split",
        title: "Um casamento bonito começa com decisões bem cuidadas.",
        paragraphs: [
          "Acompanhamos o planejamento desde o entendimento das prioridades até a organização do dia.",
          "O trabalho pode reunir escolha do espaço, curadoria de fornecedores, cronograma, controle do investimento, projeto de decoração e cerimonial. O escopo é definido de acordo com o momento e as necessidades do casal.",
        ],
        cta: { label: "Conhecer o acompanhamento da equipe", href: "page:about" },
      },
      {
        type: "band",
        title: "A beleza precisa funcionar no dia.",
        paragraphs: [
          "Uma boa escolha de cenário também considera acesso, circulação, horários e estrutura.",
          "Um casamento ao ar livre precisa de um plano para as condições do tempo. Uma celebração com etapas em locais diferentes precisa de deslocamentos bem organizados.",
          "É nessa conexão entre o que vocês imaginam e o que o dia exige que nossa equipe trabalha.",
        ],
      },
      {
        type: "cards",
        title: "Histórias que já encontraram seu lugar no Rio.",
        cards: [
          {
            title: "Mariana & Mario — Cristo Redentor",
            text: "Conheçam os registros desse casamento no portfólio de Leco.",
            href: "#",
          },
          {
            title: "Sarah & Rodrigo — Santa Teresa MGallery",
            text: "Uma celebração realizada em Santa Teresa, apresentada no portfólio do escritório.",
            href: "#",
          },
          {
            title: "Louhayne & Charles — Igreja São Francisco de Paula",
            text: "Conheçam esse casamento e seu cenário.",
            href: "#",
          },
        ],
        cta: { label: "Explorar casamentos realizados", href: "page:about#realizacoes" },
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "Essa página também é para quem mora no Rio?",
            a: "Sim. O serviço atende casais que desejam planejar seu casamento na cidade, inclusive quem já vive aqui.",
          },
          {
            q: "Já escolhemos o local. Podemos procurar a equipe?",
            a: "Sim. Vamos conhecer o estágio do planejamento, os serviços já contratados e o acompanhamento de que vocês precisam.",
          },
          {
            q: "Vocês também fazem a decoração?",
            a: "Leco também desenvolve projetos de decoração. Esse trabalho pode integrar a proposta, conforme o escopo escolhido.",
          },
          {
            q: "E se chover no dia?",
            a: "As alternativas são avaliadas durante o planejamento, considerando o local, a estrutura disponível e o formato do evento. O plano precisa ser combinado antes do casamento.",
          },
        ],
      },
      {
        type: "destination",
        title: "Qual lugar do Rio vocês imaginam guardar nessa lembrança?",
        paragraphs: ["Contem a data ou o período, o número aproximado de convidados e o que desejam viver."],
        cta: { label: "Consultar disponibilidade no Rio", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "WEDDING IN RIO DE JANEIRO",
      title: "Your city. The setting of the next chapter.",
      paragraphs: [
        "The sea, the gardens, the architecture and the places that are already part of your story.",
        "We plan weddings in Rio de Janeiro based on what you wish to live: an intimate ceremony, a party with friends and family or a celebration that takes up the whole day.",
      ],
      cta: { label: "Plan our wedding in Rio", href: "#rsvp" },
      secondary: { label: "Find our setting", href: "#os-cenarios" },
    },
    sections: [
      {
        type: "cards",
        id: "os-cenarios",
        title: "There is a Rio that suits your wedding.",
        cards: [
          {
            title: "Near the sea",
            text: "For those who imagine a celebration with natural light, an open horizon and the city's landscape close by.",
          },
          {
            title: "Among gardens and nature",
            text: "For those who wish for a gathering surrounded by green, with a more private atmosphere.",
          },
          {
            title: "In hotels and venues with infrastructure",
            text: "For those who value comfort and the possibility of bringing preparation, ceremony and accommodation closer together.",
          },
          {
            title: "In houses, villas and historic venues",
            text: "For those looking for personality, privacy or a special relationship with the architecture.",
          },
        ],
        paragraph:
          "The choice considers the number of guests, the date, the infrastructure, the budget and the conditions of each venue. Our team helps turn the couple's references into viable options.",
      },
      {
        type: "split",
        title: "A beautiful wedding begins with well-considered decisions.",
        paragraphs: [
          "We follow the planning from understanding the priorities to the organization of the day.",
          "The work can bring together venue selection, supplier curation, schedule, investment control, decoration project and ceremonial. The scope is defined according to the moment and the needs of the couple.",
        ],
        cta: { label: "Discover the team's follow-up", href: "page:about" },
      },
      {
        type: "band",
        title: "Beauty needs to work on the day.",
        paragraphs: [
          "A good choice of setting also considers access, circulation, schedules and infrastructure.",
          "An outdoor wedding needs a plan for the weather conditions. A celebration with stages in different places needs well-organized transfers.",
          "It is in this connection between what you imagine and what the day requires that our team works.",
        ],
      },
      {
        type: "cards",
        title: "Stories that have already found their place in Rio.",
        cards: [
          {
            title: "Mariana & Mario — Cristo Redentor",
            text: "See the records of this wedding in Leco's portfolio.",
            href: "#",
          },
          {
            title: "Sarah & Rodrigo — Santa Teresa MGallery",
            text: "A celebration held in Santa Teresa, presented in the office's portfolio.",
            href: "#",
          },
          {
            title: "Louhayne & Charles — Igreja São Francisco de Paula",
            text: "Discover this wedding and its setting.",
            href: "#",
          },
        ],
        cta: { label: "Explore weddings held", href: "page:about#realizacoes" },
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "Is this page also for those who live in Rio?",
            a: "Yes. The service caters to couples who wish to plan their wedding in the city, including those who already live here.",
          },
          {
            q: "We have already chosen the venue. Can we reach out to the team?",
            a: "Yes. Let's get to know the stage of the planning, the services already contracted and the follow-up you need.",
          },
          {
            q: "Do you also do the decoration?",
            a: "Leco also develops decoration projects. This work can be part of the proposal, according to the chosen scope.",
          },
          {
            q: "What if it rains on the day?",
            a: "The alternatives are assessed during the planning, considering the venue, the available infrastructure and the format of the event. The plan needs to be agreed before the wedding.",
          },
        ],
      },
      {
        type: "destination",
        title: "Which place in Rio do you imagine keeping in this memory?",
        paragraphs: ["Tell us the date or the period, the approximate number of guests and what you wish to live."],
        cta: { label: "Check availability in Rio", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "BODA EN RÍO DE JANEIRO",
      title: "La ciudad de ustedes. El escenario del próximo capítulo.",
      paragraphs: [
        "El mar, los jardines, la arquitectura y los lugares que ya forman parte de su historia.",
        "Planificamos bodas en Río de Janeiro a partir de lo que ustedes desean vivir: una ceremonia íntima, una fiesta con amigos y familia o una celebración que ocupe el día entero.",
      ],
      cta: { label: "Planificar nuestra boda en Río", href: "#rsvp" },
      secondary: { label: "Encontrar nuestro escenario", href: "#os-cenarios" },
    },
    sections: [
      {
        type: "cards",
        id: "os-cenarios",
        title: "Existe un Río que combina con la boda de ustedes.",
        cards: [
          {
            title: "Cerca del mar",
            text: "Para quienes imaginan una celebración con luz natural, horizonte abierto y el paisaje de la ciudad cerca.",
          },
          {
            title: "Entre jardines y naturaleza",
            text: "Para quienes desean un encuentro rodeado de verde, con una atmósfera más reservada.",
          },
          {
            title: "En hoteles y espacios con estructura",
            text: "Para quienes valoran el confort y la posibilidad de acercar preparación, ceremonia y hospedaje.",
          },
          {
            title: "En casas, villas y espacios históricos",
            text: "Para quienes buscan personalidad, privacidad o una relación especial con la arquitectura.",
          },
        ],
        paragraph:
          "La elección considera el número de invitados, la fecha, la infraestructura, el presupuesto y las condiciones de cada lugar. Nuestro equipo ayuda a transformar las referencias de la pareja en opciones viables.",
      },
      {
        type: "split",
        title: "Una boda bonita comienza con decisiones bien cuidadas.",
        paragraphs: [
          "Acompañamos la planificación desde el entendimiento de las prioridades hasta la organización del día.",
          "El trabajo puede reunir elección del espacio, curaduría de proveedores, cronograma, control de la inversión, proyecto de decoración y ceremonial. El alcance se define de acuerdo con el momento y las necesidades de la pareja.",
        ],
        cta: { label: "Conocer el acompañamiento del equipo", href: "page:about" },
      },
      {
        type: "band",
        title: "La belleza necesita funcionar el día.",
        paragraphs: [
          "Una buena elección de escenario también considera acceso, circulación, horarios y estructura.",
          "Una boda al aire libre necesita un plan para las condiciones del tiempo. Una celebración con etapas en lugares diferentes necesita traslados bien organizados.",
          "Es en esa conexión entre lo que ustedes imaginan y lo que el día exige que nuestro equipo trabaja.",
        ],
      },
      {
        type: "cards",
        title: "Historias que ya encontraron su lugar en Río.",
        cards: [
          {
            title: "Mariana & Mario — Cristo Redentor",
            text: "Conozcan los registros de esta boda en el portafolio de Leco.",
            href: "#",
          },
          {
            title: "Sarah & Rodrigo — Santa Teresa MGallery",
            text: "Una celebración realizada en Santa Teresa, presentada en el portafolio de la oficina.",
            href: "#",
          },
          {
            title: "Louhayne & Charles — Igreja São Francisco de Paula",
            text: "Conozcan esta boda y su escenario.",
            href: "#",
          },
        ],
        cta: { label: "Explorar bodas realizadas", href: "page:about#realizacoes" },
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Esta página también es para quienes viven en Río?",
            a: "Sí. El servicio atiende a parejas que desean planificar su boda en la ciudad, incluso a quienes ya viven aquí.",
          },
          {
            q: "Ya elegimos el lugar. ¿Podemos buscar al equipo?",
            a: "Sí. Vamos a conocer la etapa de la planificación, los servicios ya contratados y el acompañamiento que ustedes necesitan.",
          },
          {
            q: "¿Ustedes también hacen la decoración?",
            a: "Leco también desarrolla proyectos de decoración. Ese trabajo puede integrar la propuesta, según el alcance elegido.",
          },
          {
            q: "¿Y si llueve el día?",
            a: "Las alternativas se evalúan durante la planificación, considerando el lugar, la estructura disponible y el formato del evento. El plan necesita acordarse antes de la boda.",
          },
        ],
      },
      {
        type: "destination",
        title: "¿Qué lugar de Río imaginan guardar en ese recuerdo?",
        paragraphs: ["Cuéntennos la fecha o el período, el número aproximado de invitados y lo que desean vivir."],
        cta: { label: "Consultar disponibilidad en Río", href: "#rsvp" },
      },
    ],
  },
};
