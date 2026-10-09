import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 07_Pacotes */
export const packages: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "EXPERIÊNCIAS DE ELOPEMENT WEDDING NO RIO",
      title: "Três maneiras de viver um dia que é só de vocês.",
      paragraphs: [
        "Uma cerimônia íntima, uma celebração que continua depois dos votos ou um dia com mais tempo para aproveitar o Rio a dois.",
        "Conheçam as experiências Essential, Signature e Luxury Experience. A proposta é apresentada de forma personalizada, após uma conversa sobre a data, o cenário e os desejos do casal.",
      ],
      cta: { label: "Consultar disponibilidade", href: "#rsvp" },
      secondary: { label: "Explorar as experiências", href: "#essential" },
    },
    sections: [
      {
        type: "split",
        id: "essential",
        kicker: "Essential",
        title: "O essencial, cuidado de perto.",
        paragraphs: [
          "Para casais que desejam uma cerimônia íntima no Rio, com os principais elementos organizados por uma equipe local.",
          "A experiência reúne a composição da cerimônia, os profissionais e os registros para que vocês possam se concentrar nesse encontro.",
        ],
        list: {
          label: "A experiência contempla:",
          items: [
            "Coordenação do casamento com dois profissionais.",
            "Estrutura da cerimônia com semiarco floral e mesa de apoio.",
            "Celebrante em inglês.",
            "40 fotografias editadas.",
            "Seis fotografias de prévia entregues no mesmo dia.",
            "Filme curto de até um minuto.",
            "Carro executivo com motorista particular para o casal, no trajeto hotel, cerimônia e hotel.",
          ],
        },
        cta: { label: "Consultar disponibilidade da Essential", href: "#rsvp" },
      },
      {
        type: "split",
        id: "signature",
        kicker: "Signature",
        title: "Mais tempo para viver o começo desse capítulo.",
        paragraphs: [
          "A Signature amplia a experiência para incluir preparação, mais registros e um momento para brindar depois da cerimônia.",
          "Uma escolha para quem deseja aproveitar o dia com calma e guardar lembranças de diferentes momentos.",
        ],
        list: {
          label: "Tudo o que está na Essential, com estes acréscimos e ampliações:",
          items: [
            "Cabelo e maquiagem para uma pessoa.",
            "Ensaio fotográfico depois da cerimônia.",
            "Mais 40 fotografias editadas, totalizando 80.",
            "Filme ampliado para até dois minutos.",
            "Flores pessoais para o casal, com buquê e boutonnière adaptados à sua composição.",
            "Brinde com champanhe depois da cerimônia.",
          ],
        },
        cta: { label: "Saber mais sobre a Signature", href: "#rsvp" },
      },
      {
        type: "split",
        id: "luxury-experience",
        kicker: "Luxury Experience",
        title: "Um dia inteiro pensado em torno de vocês.",
        paragraphs: [
          "A cerimônia ganha uma produção floral ampliada, a música acontece ao vivo e a experiência se estende a uma celebração gastronômica.",
          "Mais tempo para fotografar, aproveitar a cidade e estar juntos.",
        ],
        list: {
          label: "Tudo o que está na Signature, com estes acréscimos e ampliações:",
          items: [
            "Projeto floral ampliado para a cerimônia.",
            "Mini-orquestra com três instrumentos escolhidos conforme as preferências do casal.",
            "Ensaio fotográfico estendido.",
            "Filme cinematográfico de três a cinco minutos.",
            "Imagens aéreas com drone, quando permitidas pelas condições e pelo local.",
            "Transporte executivo premium em veículo blindado.",
            "Almoço ou jantar em restaurante parceiro selecionado.",
          ],
        },
        cta: { label: "Receber uma proposta reservada", href: "#rsvp" },
      },
      {
        type: "band",
        title: "O detalhe que torna a experiência ainda mais de vocês.",
        paragraphs: [
          "Um passeio de barco ao pôr do sol, um voo de helicóptero, uma noite de núpcias ou um projeto de cerimônia desenvolvido a partir das referências do casal.",
          "Experiências adicionais podem ser avaliadas conforme a data, o local, as condições de realização e os fornecedores disponíveis.",
        ],
        cta: { label: "Conversar sobre uma experiência personalizada", href: "#rsvp" },
      },
      {
        type: "presentation",
        title: "A celebração e o casamento civil podem fazer parte da mesma viagem.",
        paragraphs: [
          "Essential, Signature e Luxury Experience contemplam a celebração de Elopement Wedding.",
          "Para casais estrangeiros que também desejam se casar civilmente no Brasil, o Brazil Legal Wedding pode ser contratado separadamente.",
          "A coordenação do processo civil, taxas de cartório, traduções, documentos e serviços jurídicos não integram automaticamente os pacotes de celebração.",
        ],
        cta: { label: "Combinar nossa experiência com o casamento civil", href: "page:legal" },
      },
      {
        type: "destination",
        title: "Vocês imaginam uma celebração com mais convidados?",
        paragraphs: [
          "Destination Weddings e casamentos com festas maiores recebem propostas próprias, construídas a partir do local, do número de convidados e da programação.",
          "As três experiências desta página são voltadas ao Elopement Wedding.",
        ],
        cta: { label: "Solicitar uma proposta para nosso casamento", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "Como recebemos a proposta?",
            a: "Depois de conhecer a data ou o período, o cenário e a experiência desejada, nossa equipe verifica a disponibilidade e apresenta as condições para o casal.",
          },
          {
            q: "O local da cerimônia está incluído?",
            a: "A estrutura descrita em cada experiência não significa que a locação de qualquer espaço esteja incluída. Local, permissões e eventuais contratações específicas são detalhados na proposta.",
          },
          {
            q: "Podemos incluir convidados?",
            a: "A possibilidade depende da experiência, do local e do tamanho do grupo. As adaptações necessárias são avaliadas antes da contratação.",
          },
          {
            q: "Podemos ajustar os elementos do pacote?",
            a: "Sim. A equipe avalia as solicitações e apresenta os ajustes possíveis, conforme os serviços e fornecedores envolvidos.",
          },
          {
            q: "Consultar disponibilidade já reserva a data?",
            a: "Não. A reserva é confirmada conforme as condições apresentadas na proposta e na contratação.",
          },
        ],
      },
      {
        type: "destination",
        title: "Vamos descobrir qual experiência faz sentido para vocês.",
        paragraphs: [
          "Compartilhem o período desejado e o que imaginam viver no Rio. Vamos verificar a agenda e preparar uma proposta para essa celebração.",
        ],
        cta: { label: "Iniciar uma conversa reservada", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "ELOPEMENT WEDDING EXPERIENCES IN RIO",
      title: "Three ways to live a day that is yours alone.",
      paragraphs: [
        "An intimate ceremony, a celebration that continues after the vows or a day with more time to enjoy Rio as a couple.",
        "Discover the Essential, Signature and Luxury Experience experiences. The proposal is presented in a personalized way, after a conversation about the date, the setting and the couple's wishes.",
      ],
      cta: { label: "Check availability", href: "#rsvp" },
      secondary: { label: "Explore the experiences", href: "#essential" },
    },
    sections: [
      {
        type: "split",
        id: "essential",
        kicker: "Essential",
        title: "The essential, cared for up close.",
        paragraphs: [
          "For couples who wish for an intimate ceremony in Rio, with the main elements organized by a local team.",
          "The experience brings together the composition of the ceremony, the professionals and the records so that you can focus on this encounter.",
        ],
        list: {
          label: "The experience includes:",
          items: [
            "Wedding coordination with two professionals.",
            "Ceremony structure with floral semi-arch and support table.",
            "Celebrant in English.",
            "40 edited photographs.",
            "Six preview photographs delivered on the same day.",
            "Short film of up to one minute.",
            "Executive car with private driver for the couple, on the route hotel, ceremony and hotel.",
          ],
        },
        cta: { label: "Check availability of the Essential", href: "#rsvp" },
      },
      {
        type: "split",
        id: "signature",
        kicker: "Signature",
        title: "More time to live the beginning of this chapter.",
        paragraphs: [
          "The Signature expands the experience to include preparation, more records and a moment to toast after the ceremony.",
          "A choice for those who wish to enjoy the day calmly and keep memories of different moments.",
        ],
        list: {
          label: "Everything in the Essential, with these additions and expansions:",
          items: [
            "Hair and makeup for one person.",
            "Photo session after the ceremony.",
            "40 more edited photographs, totaling 80.",
            "Film expanded to up to two minutes.",
            "Personal flowers for the couple, with bouquet and boutonnière adapted to their composition.",
            "Champagne toast after the ceremony.",
          ],
        },
        cta: { label: "Learn more about the Signature", href: "#rsvp" },
      },
      {
        type: "split",
        id: "luxury-experience",
        kicker: "Luxury Experience",
        title: "A whole day designed around you.",
        paragraphs: [
          "The ceremony gains an expanded floral production, the music happens live and the experience extends to a gastronomic celebration.",
          "More time to photograph, enjoy the city and be together.",
        ],
        list: {
          label: "Everything in the Signature, with these additions and expansions:",
          items: [
            "Expanded floral project for the ceremony.",
            "Mini-orchestra with three instruments chosen according to the couple's preferences.",
            "Extended photo session.",
            "Cinematic film of three to five minutes.",
            "Aerial drone footage, when permitted by the conditions and the venue.",
            "Premium executive transportation in an armored vehicle.",
            "Lunch or dinner at a selected partner restaurant.",
          ],
        },
        cta: { label: "Receive a private proposal", href: "#rsvp" },
      },
      {
        type: "band",
        title: "The detail that makes the experience even more your own.",
        paragraphs: [
          "A sunset boat ride, a helicopter flight, a wedding night or a ceremony project developed from the couple's references.",
          "Additional experiences can be assessed according to the date, the venue, the conditions for carrying them out and the available suppliers.",
        ],
        cta: { label: "Talk about a personalized experience", href: "#rsvp" },
      },
      {
        type: "presentation",
        title: "The celebration and the civil marriage can be part of the same trip.",
        paragraphs: [
          "Essential, Signature and Luxury Experience include the Elopement Wedding celebration.",
          "For foreign couples who also wish to have a civil marriage in Brazil, Brazil Legal Wedding can be contracted separately.",
          "The coordination of the civil process, registry office fees, translations, documents and legal services are not automatically part of the celebration packages.",
        ],
        cta: { label: "Combine our experience with the civil marriage", href: "page:legal" },
      },
      {
        type: "destination",
        title: "Do you imagine a celebration with more guests?",
        paragraphs: [
          "Destination Weddings and weddings with larger parties receive their own proposals, built from the venue, the number of guests and the schedule.",
          "The three experiences on this page are aimed at the Elopement Wedding.",
        ],
        cta: { label: "Request a proposal for our wedding", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "How do we receive the proposal?",
            a: "After getting to know the date or the period, the setting and the desired experience, our team checks availability and presents the conditions to the couple.",
          },
          {
            q: "Is the ceremony venue included?",
            a: "The structure described in each experience does not mean that the rental of any space is included. Venue, permits and any specific contracting are detailed in the proposal.",
          },
          {
            q: "Can we include guests?",
            a: "The possibility depends on the experience, the venue and the size of the group. The necessary adaptations are assessed before contracting.",
          },
          {
            q: "Can we adjust the elements of the package?",
            a: "Yes. The team assesses the requests and presents the possible adjustments, according to the services and suppliers involved.",
          },
          {
            q: "Does checking availability already reserve the date?",
            a: "No. The reservation is confirmed according to the conditions presented in the proposal and in the contract.",
          },
        ],
      },
      {
        type: "destination",
        title: "Let's discover which experience makes sense for you.",
        paragraphs: [
          "Share the desired period and what you imagine living in Rio. Let's check the agenda and prepare a proposal for this celebration.",
        ],
        cta: { label: "Start a private conversation", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "EXPERIENCIAS DE ELOPEMENT WEDDING EN RÍO",
      title: "Tres maneras de vivir un día que es solo de ustedes.",
      paragraphs: [
        "Una ceremonia íntima, una celebración que continúa después de los votos o un día con más tiempo para disfrutar de Río en pareja.",
        "Conozcan las experiencias Essential, Signature y Luxury Experience. La propuesta se presenta de forma personalizada, después de una conversación sobre la fecha, el escenario y los deseos de la pareja.",
      ],
      cta: { label: "Consultar disponibilidad", href: "#rsvp" },
      secondary: { label: "Explorar las experiencias", href: "#essential" },
    },
    sections: [
      {
        type: "split",
        id: "essential",
        kicker: "Essential",
        title: "Lo esencial, cuidado de cerca.",
        paragraphs: [
          "Para parejas que desean una ceremonia íntima en Río, con los principales elementos organizados por un equipo local.",
          "La experiencia reúne la composición de la ceremonia, los profesionales y los registros para que ustedes puedan concentrarse en ese encuentro.",
        ],
        list: {
          label: "La experiencia incluye:",
          items: [
            "Coordinación de la boda con dos profesionales.",
            "Estructura de la ceremonia con semiarco floral y mesa de apoyo.",
            "Celebrante en inglés.",
            "40 fotografías editadas.",
            "Seis fotografías de adelanto entregadas el mismo día.",
            "Película corta de hasta un minuto.",
            "Auto ejecutivo con chofer particular para la pareja, en el trayecto hotel, ceremonia y hotel.",
          ],
        },
        cta: { label: "Consultar disponibilidad de la Essential", href: "#rsvp" },
      },
      {
        type: "split",
        id: "signature",
        kicker: "Signature",
        title: "Más tiempo para vivir el comienzo de este capítulo.",
        paragraphs: [
          "La Signature amplía la experiencia para incluir preparación, más registros y un momento para brindar después de la ceremonia.",
          "Una elección para quienes desean disfrutar del día con calma y guardar recuerdos de diferentes momentos.",
        ],
        list: {
          label: "Todo lo que está en la Essential, con estos añadidos y ampliaciones:",
          items: [
            "Peinado y maquillaje para una persona.",
            "Sesión de fotos después de la ceremonia.",
            "40 fotografías editadas más, totalizando 80.",
            "Película ampliada a hasta dos minutos.",
            "Flores personales para la pareja, con ramo y boutonnière adaptados a su composición.",
            "Brindis con champán después de la ceremonia.",
          ],
        },
        cta: { label: "Saber más sobre la Signature", href: "#rsvp" },
      },
      {
        type: "split",
        id: "luxury-experience",
        kicker: "Luxury Experience",
        title: "Un día entero pensado en torno a ustedes.",
        paragraphs: [
          "La ceremonia gana una producción floral ampliada, la música sucede en vivo y la experiencia se extiende a una celebración gastronómica.",
          "Más tiempo para fotografiar, disfrutar de la ciudad y estar juntos.",
        ],
        list: {
          label: "Todo lo que está en la Signature, con estos añadidos y ampliaciones:",
          items: [
            "Proyecto floral ampliado para la ceremonia.",
            "Mini-orquesta con tres instrumentos elegidos según las preferencias de la pareja.",
            "Sesión de fotos extendida.",
            "Película cinematográfica de tres a cinco minutos.",
            "Imágenes aéreas con dron, cuando lo permitan las condiciones y el lugar.",
            "Transporte ejecutivo premium en vehículo blindado.",
            "Almuerzo o cena en restaurante asociado seleccionado.",
          ],
        },
        cta: { label: "Recibir una propuesta reservada", href: "#rsvp" },
      },
      {
        type: "band",
        title: "El detalle que hace la experiencia aún más de ustedes.",
        paragraphs: [
          "Un paseo en barco al atardecer, un vuelo en helicóptero, una noche de bodas o un proyecto de ceremonia desarrollado a partir de las referencias de la pareja.",
          "Las experiencias adicionales pueden evaluarse según la fecha, el lugar, las condiciones de realización y los proveedores disponibles.",
        ],
        cta: { label: "Conversar sobre una experiencia personalizada", href: "#rsvp" },
      },
      {
        type: "presentation",
        title: "La celebración y el matrimonio civil pueden formar parte del mismo viaje.",
        paragraphs: [
          "Essential, Signature y Luxury Experience incluyen la celebración de Elopement Wedding.",
          "Para parejas extranjeras que también desean casarse civilmente en Brasil, el Brazil Legal Wedding puede contratarse por separado.",
          "La coordinación del proceso civil, las tasas del registro civil, las traducciones, los documentos y los servicios jurídicos no integran automáticamente los paquetes de celebración.",
        ],
        cta: { label: "Combinar nuestra experiencia con el matrimonio civil", href: "page:legal" },
      },
      {
        type: "destination",
        title: "¿Ustedes imaginan una celebración con más invitados?",
        paragraphs: [
          "Los Destination Weddings y las bodas con fiestas más grandes reciben propuestas propias, construidas a partir del lugar, del número de invitados y de la programación.",
          "Las tres experiencias de esta página están orientadas al Elopement Wedding.",
        ],
        cta: { label: "Solicitar una propuesta para nuestra boda", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Cómo recibimos la propuesta?",
            a: "Después de conocer la fecha o el período, el escenario y la experiencia deseada, nuestro equipo verifica la disponibilidad y presenta las condiciones para la pareja.",
          },
          {
            q: "¿El lugar de la ceremonia está incluido?",
            a: "La estructura descrita en cada experiencia no significa que el alquiler de cualquier espacio esté incluido. El lugar, los permisos y eventuales contrataciones específicas se detallan en la propuesta.",
          },
          {
            q: "¿Podemos incluir invitados?",
            a: "La posibilidad depende de la experiencia, del lugar y del tamaño del grupo. Las adaptaciones necesarias se evalúan antes de la contratación.",
          },
          {
            q: "¿Podemos ajustar los elementos del paquete?",
            a: "Sí. El equipo evalúa las solicitudes y presenta los ajustes posibles, según los servicios y proveedores involucrados.",
          },
          {
            q: "¿Consultar disponibilidad ya reserva la fecha?",
            a: "No. La reserva se confirma según las condiciones presentadas en la propuesta y en la contratación.",
          },
        ],
      },
      {
        type: "destination",
        title: "Vamos a descubrir qué experiencia tiene sentido para ustedes.",
        paragraphs: [
          "Compartan el período deseado y lo que imaginan vivir en Río. Vamos a verificar la agenda y preparar una propuesta para esta celebración.",
        ],
        cta: { label: "Iniciar una conversación reservada", href: "#rsvp" },
      },
    ],
  },
};
