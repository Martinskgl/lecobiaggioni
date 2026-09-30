import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 03_Destination_Wedding */
export const destination: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "DESTINATION WEDDING NO RIO DE JANEIRO",
      title: "Um destino escolhido a dois. Uma experiência compartilhada com quem vocês amam.",
      paragraphs: [
        "Reunir pessoas de lugares diferentes, chegar a uma cidade especial e viver o casamento como parte de uma viagem.",
        "Planejamos Destination Weddings no Rio com presença local, acompanhamento próximo e atenção à experiência do casal e dos convidados.",
      ],
      cta: { label: "Consultar disponibilidade para nosso Destination", href: "#rsvp" },
      secondary: { label: "Conhecer o planejamento", href: "#o-que-coordenamos" },
    },
    sections: [
      {
        type: "presentation",
        title: "O casamento começa antes da cerimônia.",
        paragraphs: [
          "Começa no convite para viajar, na expectativa da chegada e no primeiro encontro de quem veio celebrar com vocês.",
          "Por isso, planejamos o Destination Wedding considerando o casamento e tudo o que precisa acontecer ao redor dele: a escolha do local, a hospedagem, os deslocamentos e a programação.",
          "Cada parte é dimensionada conforme o perfil do grupo e o que vocês desejam oferecer.",
        ],
      },
      {
        type: "icons",
        id: "o-que-coordenamos",
        title: "Uma equipe no Rio conectando as decisões.",
        items: [
          {
            title: "Local e fornecedores",
            body: "Curadoria alinhada ao estilo, ao número de convidados e ao orçamento do casal.",
          },
          {
            title: "Planejamento e acompanhamento",
            body: "Cronograma de decisões, organização do investimento e reuniões para acompanhar a evolução do projeto.",
          },
          {
            title: "Recepção e deslocamentos",
            body: "Coordenação de receptivo e transporte quando esses serviços fizerem parte da proposta.",
          },
          {
            title: "Hospedagem e programação",
            body: "Sugestões de hotéis e possibilidades de encontros, passeios e celebrações complementares.",
          },
          {
            title: "O dia do casamento",
            body: "Roteiro, acompanhamento da montagem, alinhamento dos profissionais e cerimonial.",
          },
        ],
      },
      {
        type: "split",
        title: "Vocês acompanham de longe. Nós acompanhamos de perto.",
        paragraphs: [
          "As decisões acontecem em conjunto, com informações organizadas para ajudar o casal a escolher.",
          "Nossa equipe reúne profissionais com atendimento em inglês, espanhol e francês, além do português. A comunicação acompanha as necessidades do projeto e das pessoas envolvidas.",
          "Da primeira conversa à chegada ao Rio, o casal tem uma equipe local conectando as etapas.",
        ],
      },
      {
        type: "presentation",
        title: "Uma viagem com espaço para encontros.",
        paragraphs: [
          "Um jantar de boas-vindas, a cerimônia, a festa e um encontro no dia seguinte podem fazer parte da programação.",
          "Construímos essa agenda de acordo com o tempo de permanência, o perfil dos convidados e o ritmo que vocês desejam dar à viagem.",
          "Cada experiência complementar é avaliada e apresentada na proposta.",
        ],
      },
      {
        type: "destination",
        title: "Dez Destination Weddings por ano. Acompanhamento de perto em cada um.",
        paragraphs: [
          "Um Destination Wedding exige tempo, presença e dedicação ao longo do planejamento.",
          "Por isso, Leco escolhe realizar apenas dez projetos desse formato por ano. A disponibilidade é consultada de acordo com a data e as necessidades de cada casamento.",
        ],
        cta: { label: "Consultar nossa data", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "Precisamos visitar o Rio antes do casamento?",
            a: "A necessidade de visitas depende do projeto e das escolhas do casal. Na primeira conversa, avaliamos quais decisões podem ser conduzidas à distância e se uma visita ajudaria no planejamento.",
          },
          {
            q: "Hospedagem e passagens estão incluídas?",
            a: "Não automaticamente. A proposta apresenta o escopo contratado e identifica quais serviços serão coordenados ou contratados separadamente.",
          },
          {
            q: "Podemos incluir mais de um dia de programação?",
            a: "Sim. Encontros e experiências adicionais podem ser planejados conforme a agenda, a logística e os fornecedores disponíveis.",
          },
          {
            q: "O serviço também atende casais que vivem em outros estados?",
            a: "Sim. O Destination Wedding atende casais que escolhem o Rio como destino para reunir seus convidados, vindos do Brasil ou do exterior.",
          },
        ],
      },
      {
        type: "band",
        title: "De onde vocês vêm? Quem querem trazer? O que imaginam viver aqui?",
        paragraphs: ["Essas respostas são o começo do projeto. Vamos conversar sobre o Rio de vocês."],
        cta: { label: "Solicitar uma conversa sobre nosso Destination", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "DESTINATION WEDDING IN RIO DE JANEIRO",
      title: "A destination chosen by the two of you. An experience shared with those you love.",
      paragraphs: [
        "Bringing together people from different places, arriving in a special city and living the wedding as part of a trip.",
        "We plan Destination Weddings in Rio with local presence, close follow-up and attention to the experience of the couple and the guests.",
      ],
      cta: { label: "Check availability for our Destination", href: "#rsvp" },
      secondary: { label: "Discover the planning", href: "#o-que-coordenamos" },
    },
    sections: [
      {
        type: "presentation",
        title: "The wedding begins before the ceremony.",
        paragraphs: [
          "It begins with the invitation to travel, with the anticipation of the arrival and with the first encounter of those who came to celebrate with you.",
          "That is why we plan the Destination Wedding considering the wedding and everything that needs to happen around it: the choice of venue, the accommodation, the transfers and the schedule.",
          "Each part is sized according to the profile of the group and what you wish to offer.",
        ],
      },
      {
        type: "icons",
        id: "o-que-coordenamos",
        title: "A team in Rio connecting the decisions.",
        items: [
          {
            title: "Venue and suppliers",
            body: "Curation aligned with the couple's style, number of guests and budget.",
          },
          {
            title: "Planning and follow-up",
            body: "Decision schedule, organization of the investment and meetings to follow the progress of the project.",
          },
          {
            title: "Reception and transfers",
            body: "Coordination of reception and transportation when these services are part of the proposal.",
          },
          {
            title: "Accommodation and schedule",
            body: "Hotel suggestions and possibilities of gatherings, tours and complementary celebrations.",
          },
          {
            title: "The wedding day",
            body: "Script, follow-up of the setup, alignment of the professionals and ceremonial.",
          },
        ],
      },
      {
        type: "split",
        title: "You follow from afar. We follow up close.",
        paragraphs: [
          "The decisions happen together, with organized information to help the couple choose.",
          "Our team brings together professionals with service in English, Spanish and French, in addition to Portuguese. The communication follows the needs of the project and of the people involved.",
          "From the first conversation to the arrival in Rio, the couple has a local team connecting the stages.",
        ],
      },
      {
        type: "presentation",
        title: "A trip with space for gatherings.",
        paragraphs: [
          "A welcome dinner, the ceremony, the party and a gathering on the following day can be part of the schedule.",
          "We build this agenda according to the length of stay, the profile of the guests and the pace you wish to give the trip.",
          "Each complementary experience is assessed and presented in the proposal.",
        ],
      },
      {
        type: "destination",
        title: "Ten Destination Weddings per year. Close follow-up in each one.",
        paragraphs: [
          "A Destination Wedding requires time, presence and dedication throughout the planning.",
          "That is why Leco chooses to carry out only ten projects of this format per year. Availability is checked according to the date and the needs of each wedding.",
        ],
        cta: { label: "Check our date", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "Do we need to visit Rio before the wedding?",
            a: "The need for visits depends on the project and the couple's choices. In the first conversation, we assess which decisions can be handled remotely and whether a visit would help the planning.",
          },
          {
            q: "Are accommodation and flights included?",
            a: "Not automatically. The proposal presents the contracted scope and identifies which services will be coordinated or contracted separately.",
          },
          {
            q: "Can we include more than one day of schedule?",
            a: "Yes. Additional gatherings and experiences can be planned according to the agenda, the logistics and the available suppliers.",
          },
          {
            q: "Does the service also cater to couples who live in other states?",
            a: "Yes. The Destination Wedding caters to couples who choose Rio as the destination to bring together their guests, coming from Brazil or from abroad.",
          },
        ],
      },
      {
        type: "band",
        title: "Where do you come from? Who do you want to bring? What do you imagine living here?",
        paragraphs: ["These answers are the beginning of the project. Let's talk about your Rio."],
        cta: { label: "Request a conversation about our Destination", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "DESTINATION WEDDING EN RÍO DE JANEIRO",
      title: "Un destino elegido por los dos. Una experiencia compartida con quienes ustedes aman.",
      paragraphs: [
        "Reunir a personas de lugares diferentes, llegar a una ciudad especial y vivir la boda como parte de un viaje.",
        "Planificamos Destination Weddings en Río con presencia local, acompañamiento cercano y atención a la experiencia de la pareja y de los invitados.",
      ],
      cta: { label: "Consultar disponibilidad para nuestro Destination", href: "#rsvp" },
      secondary: { label: "Conocer la planificación", href: "#o-que-coordenamos" },
    },
    sections: [
      {
        type: "presentation",
        title: "La boda comienza antes de la ceremonia.",
        paragraphs: [
          "Comienza en la invitación a viajar, en la expectativa de la llegada y en el primer encuentro de quienes vinieron a celebrar con ustedes.",
          "Por eso, planificamos el Destination Wedding considerando la boda y todo lo que necesita suceder a su alrededor: la elección del lugar, el hospedaje, los traslados y la programación.",
          "Cada parte se dimensiona según el perfil del grupo y lo que ustedes desean ofrecer.",
        ],
      },
      {
        type: "icons",
        id: "o-que-coordenamos",
        title: "Un equipo en Río conectando las decisiones.",
        items: [
          {
            title: "Lugar y proveedores",
            body: "Curaduría alineada con el estilo, el número de invitados y el presupuesto de la pareja.",
          },
          {
            title: "Planificación y acompañamiento",
            body: "Cronograma de decisiones, organización de la inversión y reuniones para acompañar la evolución del proyecto.",
          },
          {
            title: "Recepción y traslados",
            body: "Coordinación de recepción y transporte cuando esos servicios formen parte de la propuesta.",
          },
          {
            title: "Hospedaje y programación",
            body: "Sugerencias de hoteles y posibilidades de encuentros, paseos y celebraciones complementarias.",
          },
          {
            title: "El día de la boda",
            body: "Guion, acompañamiento del montaje, alineación de los profesionales y ceremonial.",
          },
        ],
      },
      {
        type: "split",
        title: "Ustedes acompañan de lejos. Nosotros acompañamos de cerca.",
        paragraphs: [
          "Las decisiones suceden en conjunto, con informaciones organizadas para ayudar a la pareja a elegir.",
          "Nuestro equipo reúne profesionales con atención en inglés, español y francés, además del portugués. La comunicación acompaña las necesidades del proyecto y de las personas involucradas.",
          "De la primera conversación a la llegada a Río, la pareja tiene un equipo local conectando las etapas.",
        ],
      },
      {
        type: "presentation",
        title: "Un viaje con espacio para encuentros.",
        paragraphs: [
          "Una cena de bienvenida, la ceremonia, la fiesta y un encuentro al día siguiente pueden formar parte de la programación.",
          "Construimos esa agenda de acuerdo con el tiempo de permanencia, el perfil de los invitados y el ritmo que ustedes desean darle al viaje.",
          "Cada experiencia complementaria se evalúa y se presenta en la propuesta.",
        ],
      },
      {
        type: "destination",
        title: "Diez Destination Weddings por año. Acompañamiento de cerca en cada uno.",
        paragraphs: [
          "Un Destination Wedding exige tiempo, presencia y dedicación a lo largo de la planificación.",
          "Por eso, Leco elige realizar solo diez proyectos de ese formato por año. La disponibilidad se consulta de acuerdo con la fecha y las necesidades de cada boda.",
        ],
        cta: { label: "Consultar nuestra fecha", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Necesitamos visitar Río antes de la boda?",
            a: "La necesidad de visitas depende del proyecto y de las elecciones de la pareja. En la primera conversación, evaluamos qué decisiones pueden conducirse a distancia y si una visita ayudaría en la planificación.",
          },
          {
            q: "¿El hospedaje y los pasajes están incluidos?",
            a: "No automáticamente. La propuesta presenta el alcance contratado e identifica qué servicios serán coordinados o contratados por separado.",
          },
          {
            q: "¿Podemos incluir más de un día de programación?",
            a: "Sí. Encuentros y experiencias adicionales pueden planificarse según la agenda, la logística y los proveedores disponibles.",
          },
          {
            q: "¿El servicio también atiende a parejas que viven en otros estados?",
            a: "Sí. El Destination Wedding atiende a parejas que eligen Río como destino para reunir a sus invitados, venidos de Brasil o del exterior.",
          },
        ],
      },
      {
        type: "band",
        title: "¿De dónde vienen ustedes? ¿A quién quieren traer? ¿Qué imaginan vivir aquí?",
        paragraphs: ["Esas respuestas son el comienzo del proyecto. Vamos a conversar sobre el Río de ustedes."],
        cta: { label: "Solicitar una conversación sobre nuestro Destination", href: "#rsvp" },
      },
    ],
  },
};
