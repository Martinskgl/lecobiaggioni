import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 04_Brazil_Wedding_Legal */
export const legal: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "BRAZIL WEDDING LEGAL 🌈",
      title: "O próximo capítulo da sua história pode ser oficializado no Brasil.",
      paragraphs: [
        "Suporte para casais estrangeiros que desejam organizar seu casamento civil no Brasil, com acompanhamento local no Rio de Janeiro.",
        "Se o casamento entre pessoas do mesmo sexo ainda não é permitido no país de vocês, vamos entender o caso e orientar os próximos passos para verificar essa possibilidade aqui.",
      ],
      cta: { label: "Conversar sobre nosso casamento civil", href: "#rsvp" },
      secondary: { label: "Entender as etapas", href: "#o-caminho" },
    },
    sections: [
      {
        type: "presentation",
        title: "Uma equipe aqui para ajudar vocês a organizar o processo.",
        paragraphs: [
          "Planejar um casamento civil em outro país envolve documentos, exigências locais e decisões que precisam acontecer na ordem certa.",
          "O Brazil Wedding Legal conecta essas etapas: entender a situação do casal, organizar as providências documentais e acompanhar o contato com os profissionais e órgãos envolvidos.",
          "Vocês recebem orientação sobre o que precisa ser preparado e quais pontos ainda dependem de confirmação.",
        ],
      },
      {
        type: "steps",
        id: "o-caminho",
        title: "Do primeiro contato à celebração civil.",
        steps: [
          {
            n: "01",
            title: "Conhecemos o caso de vocês",
            body: "Conversamos sobre nacionalidades, país de residência, estado civil e o período em que desejam vir ao Brasil.",
          },
          {
            n: "02",
            title: "Verificamos os requisitos aplicáveis",
            body: "As exigências precisam ser confirmadas com o cartório responsável e, quando necessário, com profissionais habilitados.",
          },
          {
            n: "03",
            title: "Organizamos a documentação",
            body: "Ajudamos a acompanhar os documentos e as providências exigidas, que podem envolver tradução juramentada, apostilamento, legalização ou registros.",
          },
          {
            n: "04",
            title: "Coordenamos os próximos passos",
            body: "Com os requisitos esclarecidos, acompanhamos a organização das etapas, os contatos e o planejamento da presença do casal no Brasil.",
          },
          {
            n: "05",
            title: "Acompanhamos a etapa da celebração",
            body: "Após a habilitação e a confirmação pelo cartório, coordenamos os detalhes previstos no serviço contratado para esse momento.",
          },
        ],
      },
      {
        type: "band",
        title: "Clareza para saber quem cuida de cada etapa.",
        paragraphs: [
          "Nossa atuação é de suporte e coordenação. A habilitação e a celebração civil são conduzidas pelas autoridades competentes; traduções e serviços jurídicos, quando necessários, cabem aos respectivos profissionais habilitados.",
          "A proposta identifica o acompanhamento oferecido e os serviços de terceiros envolvidos.",
        ],
      },
      {
        type: "options",
        title: "Vocês escolhem como querem marcar esse momento.",
        packs: [
          {
            title: "Casamento civil com suporte local",
            paragraphs: ["Para quem deseja acompanhamento na organização do processo e das etapas do casamento civil."],
          },
          {
            title: "Casamento civil com Elopement no Rio",
            paragraphs: [
              "Para quem deseja acrescentar uma cerimônia pessoal, fotografias e uma experiência de celebração a dois.",
            ],
          },
        ],
        cta: { label: "Conhecer as possibilidades para nós", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Perguntas frequentes",
        items: [
          {
            q: "O Brasil permite o casamento entre pessoas do mesmo sexo?",
            a: "Sim. A Resolução 175 do Conselho Nacional de Justiça impede a recusa de habilitação ou celebração civil por se tratar de um casal do mesmo sexo. Os demais requisitos legais continuam sendo necessários.",
          },
          {
            q: "Duas pessoas estrangeiras podem se casar no Brasil?",
            a: "Estrangeiros podem se casar no Brasil, mediante o cumprimento das exigências aplicáveis. A situação de cada casal precisa ser verificada com o cartório responsável.",
          },
          {
            q: "Se nosso país não permite esse casamento, a certidão brasileira passa a valer lá?",
            a: "Não automaticamente. O reconhecimento e os efeitos do casamento fora do Brasil dependem das leis de cada país. Essa questão deve ser confirmada com orientação jurídica no local onde vocês pretendem utilizar a certidão.",
          },
          {
            q: "Quais documentos serão necessários?",
            a: "A lista depende do caso, dos documentos de origem e das exigências aplicáveis. Depois do primeiro contato, organizamos as informações necessárias para verificar o processo.",
          },
          {
            q: "Em quanto tempo podemos nos casar?",
            a: "O prazo depende das providências documentais e da tramitação no cartório. O planejamento da viagem deve considerar essas confirmações.",
          },
          {
            q: "Precisamos contratar uma festa?",
            a: "Não. O serviço pode ser contratado para o processo civil ou combinado com uma experiência de celebração.",
          },
        ],
      },
      {
        type: "destination",
        title: "O primeiro passo é contar um pouco sobre vocês.",
        paragraphs: [
          "Informem onde vivem, suas nacionalidades e quando imaginam vir ao Brasil. Vamos conversar sobre o acompanhamento e as verificações necessárias.",
        ],
        cta: { label: "Solicitar uma conversa reservada", href: "#rsvp" },
        note: "O serviço não garante a habilitação, uma data específica ou o reconhecimento do casamento em outro país. Requisitos e prazos dependem do caso e das autoridades competentes.",
      },
    ],
  },

  en: {
    hero: {
      kicker: "BRAZIL WEDDING LEGAL 🌈",
      title: "The next chapter of your story can be made official in Brazil.",
      paragraphs: [
        "Support for foreign couples who wish to organize their civil marriage in Brazil, with local follow-up in Rio de Janeiro.",
        "If marriage between people of the same sex is not yet allowed in your country, let's understand the case and guide the next steps to check this possibility here.",
      ],
      cta: { label: "Talk about our civil marriage", href: "#rsvp" },
      secondary: { label: "Understand the stages", href: "#o-caminho" },
    },
    sections: [
      {
        type: "presentation",
        title: "A team here to help you organize the process.",
        paragraphs: [
          "Planning a civil marriage in another country involves documents, local requirements and decisions that need to happen in the right order.",
          "Brazil Wedding Legal connects these stages: understanding the couple's situation, organizing the documentary arrangements and following the contact with the professionals and bodies involved.",
          "You receive guidance on what needs to be prepared and which points still depend on confirmation.",
        ],
      },
      {
        type: "steps",
        id: "o-caminho",
        title: "From the first contact to the civil celebration.",
        steps: [
          {
            n: "01",
            title: "We get to know your case",
            body: "We talk about nationalities, country of residence, marital status and the period in which you wish to come to Brazil.",
          },
          {
            n: "02",
            title: "We check the applicable requirements",
            body: "The requirements need to be confirmed with the responsible registry office and, when necessary, with qualified professionals.",
          },
          {
            n: "03",
            title: "We organize the documentation",
            body: "We help follow the documents and the required arrangements, which may involve sworn translation, apostille, legalization or registrations.",
          },
          {
            n: "04",
            title: "We coordinate the next steps",
            body: "With the requirements clarified, we follow the organization of the stages, the contacts and the planning of the couple's presence in Brazil.",
          },
          {
            n: "05",
            title: "We accompany the celebration stage",
            body: "After the qualification and the confirmation by the registry office, we coordinate the details provided for in the contracted service for that moment.",
          },
        ],
      },
      {
        type: "band",
        title: "Clarity to know who takes care of each stage.",
        paragraphs: [
          "Our role is support and coordination. The qualification and the civil celebration are conducted by the competent authorities; translations and legal services, when necessary, are the responsibility of the respective qualified professionals.",
          "The proposal identifies the follow-up offered and the third-party services involved.",
        ],
      },
      {
        type: "options",
        title: "You choose how you want to mark this moment.",
        packs: [
          {
            title: "Civil marriage with local support",
            paragraphs: ["For those who wish to have follow-up in organizing the process and the stages of the civil marriage."],
          },
          {
            title: "Civil marriage with Elopement in Rio",
            paragraphs: ["For those who wish to add a personal ceremony, photographs and a celebration experience for two."],
          },
        ],
        cta: { label: "Discover the possibilities for us", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Frequently asked questions",
        items: [
          {
            q: "Does Brazil allow marriage between people of the same sex?",
            a: "Yes. Resolution 175 of the National Council of Justice prevents the refusal of qualification or civil celebration because it is a same-sex couple. The other legal requirements remain necessary.",
          },
          {
            q: "Can two foreign people marry in Brazil?",
            a: "Foreigners can marry in Brazil, upon meeting the applicable requirements. The situation of each couple needs to be checked with the responsible registry office.",
          },
          {
            q: "If our country does not allow this marriage, does the Brazilian certificate become valid there?",
            a: "Not automatically. The recognition and the effects of the marriage outside Brazil depend on the laws of each country. This question should be confirmed with legal advice in the place where you intend to use the certificate.",
          },
          {
            q: "Which documents will be necessary?",
            a: "The list depends on the case, the documents of origin and the applicable requirements. After the first contact, we organize the information necessary to check the process.",
          },
          {
            q: "How soon can we marry?",
            a: "The timeline depends on the documentary arrangements and on the processing at the registry office. The travel planning should consider these confirmations.",
          },
          {
            q: "Do we need to hire a party?",
            a: "No. The service can be contracted for the civil process or combined with a celebration experience.",
          },
        ],
      },
      {
        type: "destination",
        title: "The first step is to tell us a little about yourselves.",
        paragraphs: [
          "Let us know where you live, your nationalities and when you imagine coming to Brazil. Let's talk about the follow-up and the necessary checks.",
        ],
        cta: { label: "Request a private conversation", href: "#rsvp" },
        note: "The service does not guarantee the qualification, a specific date or the recognition of the marriage in another country. Requirements and timelines depend on the case and on the competent authorities.",
      },
    ],
  },

  es: {
    hero: {
      kicker: "BRAZIL WEDDING LEGAL 🌈",
      title: "El próximo capítulo de su historia puede oficializarse en Brasil.",
      paragraphs: [
        "Apoyo para parejas extranjeras que desean organizar su matrimonio civil en Brasil, con acompañamiento local en Río de Janeiro.",
        "Si el matrimonio entre personas del mismo sexo aún no está permitido en el país de ustedes, vamos a entender el caso y orientar los próximos pasos para verificar esa posibilidad aquí.",
      ],
      cta: { label: "Conversar sobre nuestro matrimonio civil", href: "#rsvp" },
      secondary: { label: "Entender las etapas", href: "#o-caminho" },
    },
    sections: [
      {
        type: "presentation",
        title: "Un equipo aquí para ayudarlos a organizar el proceso.",
        paragraphs: [
          "Planificar un matrimonio civil en otro país involucra documentos, exigencias locales y decisiones que necesitan suceder en el orden correcto.",
          "El Brazil Wedding Legal conecta esas etapas: entender la situación de la pareja, organizar las gestiones documentales y acompañar el contacto con los profesionales y organismos involucrados.",
          "Ustedes reciben orientación sobre lo que necesita prepararse y qué puntos aún dependen de confirmación.",
        ],
      },
      {
        type: "steps",
        id: "o-caminho",
        title: "Del primer contacto a la celebración civil.",
        steps: [
          {
            n: "01",
            title: "Conocemos el caso de ustedes",
            body: "Conversamos sobre nacionalidades, país de residencia, estado civil y el período en que desean venir a Brasil.",
          },
          {
            n: "02",
            title: "Verificamos los requisitos aplicables",
            body: "Las exigencias necesitan confirmarse con el registro civil responsable y, cuando sea necesario, con profesionales habilitados.",
          },
          {
            n: "03",
            title: "Organizamos la documentación",
            body: "Ayudamos a acompañar los documentos y las gestiones exigidas, que pueden involucrar traducción jurada, apostilla, legalización o registros.",
          },
          {
            n: "04",
            title: "Coordinamos los próximos pasos",
            body: "Con los requisitos aclarados, acompañamos la organización de las etapas, los contactos y la planificación de la presencia de la pareja en Brasil.",
          },
          {
            n: "05",
            title: "Acompañamos la etapa de la celebración",
            body: "Después de la habilitación y la confirmación por el registro civil, coordinamos los detalles previstos en el servicio contratado para ese momento.",
          },
        ],
      },
      {
        type: "band",
        title: "Claridad para saber quién cuida de cada etapa.",
        paragraphs: [
          "Nuestra actuación es de apoyo y coordinación. La habilitación y la celebración civil son conducidas por las autoridades competentes; las traducciones y los servicios jurídicos, cuando sean necesarios, corresponden a los respectivos profesionales habilitados.",
          "La propuesta identifica el acompañamiento ofrecido y los servicios de terceros involucrados.",
        ],
      },
      {
        type: "options",
        title: "Ustedes eligen cómo quieren marcar este momento.",
        packs: [
          {
            title: "Matrimonio civil con apoyo local",
            paragraphs: ["Para quienes desean acompañamiento en la organización del proceso y de las etapas del matrimonio civil."],
          },
          {
            title: "Matrimonio civil con Elopement en Río",
            paragraphs: [
              "Para quienes desean añadir una ceremonia personal, fotografías y una experiencia de celebración para dos.",
            ],
          },
        ],
        cta: { label: "Conocer las posibilidades para nosotros", href: "#rsvp" },
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Brasil permite el matrimonio entre personas del mismo sexo?",
            a: "Sí. La Resolución 175 del Consejo Nacional de Justicia impide el rechazo de la habilitación o de la celebración civil por tratarse de una pareja del mismo sexo. Los demás requisitos legales siguen siendo necesarios.",
          },
          {
            q: "¿Dos personas extranjeras pueden casarse en Brasil?",
            a: "Los extranjeros pueden casarse en Brasil, mediante el cumplimiento de las exigencias aplicables. La situación de cada pareja necesita verificarse con el registro civil responsable.",
          },
          {
            q: "Si nuestro país no permite este matrimonio, ¿el certificado brasileño pasa a valer allí?",
            a: "No automáticamente. El reconocimiento y los efectos del matrimonio fuera de Brasil dependen de las leyes de cada país. Esta cuestión debe confirmarse con orientación jurídica en el lugar donde ustedes pretenden utilizar el certificado.",
          },
          {
            q: "¿Qué documentos serán necesarios?",
            a: "La lista depende del caso, de los documentos de origen y de las exigencias aplicables. Después del primer contacto, organizamos las informaciones necesarias para verificar el proceso.",
          },
          {
            q: "¿En cuánto tiempo podemos casarnos?",
            a: "El plazo depende de las gestiones documentales y de la tramitación en el registro civil. La planificación del viaje debe considerar esas confirmaciones.",
          },
          {
            q: "¿Necesitamos contratar una fiesta?",
            a: "No. El servicio puede contratarse para el proceso civil o combinarse con una experiencia de celebración.",
          },
        ],
      },
      {
        type: "destination",
        title: "El primer paso es contar un poco sobre ustedes.",
        paragraphs: [
          "Infórmennos dónde viven, sus nacionalidades y cuándo imaginan venir a Brasil. Vamos a conversar sobre el acompañamiento y las verificaciones necesarias.",
        ],
        cta: { label: "Solicitar una conversación reservada", href: "#rsvp" },
        note: "El servicio no garantiza la habilitación, una fecha específica o el reconocimiento del matrimonio en otro país. Los requisitos y plazos dependen del caso y de las autoridades competentes.",
      },
    ],
  },
};
