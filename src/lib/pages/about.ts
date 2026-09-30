import type { PageCopy } from "@/lib/pages-copy";
import type { Locale } from "@/lib/site";

/** Word 06_Leco_Bio_e_Realizacoes. Links das realizações ainda sem destino ("#"). */
export const about: Record<Locale, PageCopy> = {
  pt: {
    hero: {
      kicker: "CONHEÇA LECO BIAGGÌONI",
      title: "Mais de duas décadas de experiência. Uma história de cada vez.",
      paragraphs: [
        "Sou Leco Biaggìoni. Trabalho com eventos há mais de 20 anos e, há mais de 10, os casamentos se tornaram o centro da minha trajetória.",
        "Hoje, reúno esse caminho para criar celebrações que façam sentido para quem está vivendo cada momento.",
      ],
      cta: { label: "Vamos nos conhecer", href: "#rsvp" },
      secondary: { label: "Ver realizações", href: "#realizacoes" },
    },
    sections: [
      {
        type: "split",
        title: "O que aprendi ao longo dos anos começa na escuta.",
        paragraphs: [
          "Em 2004, abri minha primeira empresa. De lá para cá, tive a oportunidade de realizar diferentes tipos de eventos, conhecer pessoas e ampliar meu repertório.",
          "Com o tempo, os casamentos ganharam cada vez mais espaço no meu trabalho. Acompanhar um casal significa participar de uma história que já existe e ajudar a criar um momento que ficará na memória de muitas pessoas.",
          "Essa responsabilidade orienta a forma como trabalho: ouvir primeiro, entender as prioridades e conectar as escolhas a um planejamento possível.",
          "Em 2022, olhar para os casais que escolhiam o Rio de Janeiro como destino trouxe uma nova direção à minha trajetória. Passei a me dedicar ao universo dos Destination Weddings e à experiência de quem vem de fora para celebrar aqui.",
          "Também comecei a receber mais pedidos de Elopement Wedding e me apaixonei pela intimidade desse formato. A experiência de grandes produções passou a acompanhar celebrações concentradas no casal.",
          "Hoje, meu trabalho reúne planejamento, cerimonial e projetos de decoração, com uma equipe que compartilha esse cuidado do primeiro contato à celebração.",
        ],
      },
      {
        type: "icons",
        title: "Um caminho construído em encontros.",
        items: [
          { title: "2004 — A primeira empresa", body: "O início da trajetória empreendedora no mercado de eventos." },
          {
            title: "Mais de uma década dedicada a casamentos",
            body: "Experiência acumulada acompanhando decisões, coordenando profissionais e conduzindo celebrações.",
          },
          {
            title: "2022 — O Rio como destino de casamento",
            body: "Um novo foco em criar experiências para casais que escolhem a cidade para celebrar.",
          },
          {
            title: "Hoje — Diferentes formas de viver o sim",
            body: "Elopements, casamentos homoafetivos, Destination Weddings, celebrações no Rio e suporte ao casamento civil de casais estrangeiros.",
          },
        ],
      },
      {
        type: "presentation",
        title: "Repertório para orientar. Proximidade para acompanhar.",
        paragraphs: [
          "O escritório reúne mais de mil eventos realizados em sua trajetória. Essa experiência se traduz em conhecimento de produção e no relacionamento com fornecedores.",
          "A equipe inclui profissionais fluentes em inglês, espanhol e francês, permitindo acompanhar casais e convidados de diferentes países.",
          "Cada projeto começa pelo entendimento das prioridades e do orçamento. A partir daí, construímos as escolhas com o casal.",
        ],
      },
      {
        type: "cards",
        id: "realizacoes",
        title: "Algumas histórias que fazem parte da nossa.",
        cards: [
          { title: "Felipe & Juan", text: "Além do Sonho.", action: "Conhecer esse casamento", href: "#" },
          { title: "Mariana & Mario", text: "Cristo Redentor.", action: "Ver essa celebração", href: "#" },
          { title: "Sarah & Rodrigo", text: "Santa Teresa MGallery.", action: "Explorar esse casamento", href: "#" },
          { title: "Louhayne & Charles", text: "Igreja São Francisco de Paula.", action: "Conhecer essa história", href: "#" },
          { title: "Ana Paula & Lucas", text: "Villa Riso.", action: "Ver os registros", href: "#" },
          { title: "Jaluza & Luiz", text: "Solar Real.", action: "Explorar essa celebração", href: "#" },
        ],
      },
      {
        type: "destination",
        title: "Uma trajetória que também passa por outras celebrações.",
        paragraphs: [
          "O portfólio inclui projetos como o aniversário de 60 anos de Romário e a confraternização de Luciano Huck.",
          "São trabalhos que integram o repertório do escritório em diferentes formatos de evento.",
        ],
        cta: { label: "Conhecer outras realizações", href: "#" },
      },
      {
        type: "band",
        title: "Quero entender o que faz esse dia ser importante para vocês.",
        paragraphs: [
          "O cenário e os detalhes importam. Mas é a conversa com o casal que dá direção ao projeto.",
          "Quero saber o que vocês desejam viver, em que vale a pena investir e quais pessoas precisam estar por perto.",
          "A partir daí, meu time e eu cuidamos de conectar as escolhas e acompanhar o planejamento.",
        ],
      },
      {
        type: "destination",
        title: "Agora quero conhecer a história de vocês.",
        paragraphs: [
          "Contem como se encontraram e o que imaginam para o casamento. É assim que o nosso trabalho começa.",
        ],
        cta: { label: "Agendar uma conversa com o Leco", href: "#rsvp" },
      },
    ],
  },

  en: {
    hero: {
      kicker: "MEET LECO BIAGGÌONI",
      title: "More than two decades of experience. One story at a time.",
      paragraphs: [
        "I am Leco Biaggìoni. I have worked with events for more than 20 years and, for more than 10, weddings have become the center of my path.",
        "Today, I bring this path together to create celebrations that make sense for those who are living each moment.",
      ],
      cta: { label: "Let's get to know each other", href: "#rsvp" },
      secondary: { label: "See achievements", href: "#realizacoes" },
    },
    sections: [
      {
        type: "split",
        title: "What I have learned over the years begins with listening.",
        paragraphs: [
          "In 2004, I opened my first company. Since then, I have had the opportunity to carry out different types of events, meet people and broaden my repertoire.",
          "Over time, weddings gained more and more space in my work. Accompanying a couple means taking part in a story that already exists and helping to create a moment that will remain in the memory of many people.",
          "This responsibility guides the way I work: listening first, understanding the priorities and connecting the choices to a feasible plan.",
          "In 2022, looking at the couples who chose Rio de Janeiro as their destination brought a new direction to my path. I began to dedicate myself to the universe of Destination Weddings and to the experience of those who come from abroad to celebrate here.",
          "I also began to receive more requests for Elopement Weddings and fell in love with the intimacy of this format. The experience of large productions began to accompany celebrations focused on the couple.",
          "Today, my work brings together planning, ceremonial and decoration projects, with a team that shares this care from the first contact to the celebration.",
        ],
      },
      {
        type: "icons",
        title: "A path built on encounters.",
        items: [
          { title: "2004 — The first company", body: "The beginning of the entrepreneurial path in the events market." },
          {
            title: "More than a decade dedicated to weddings",
            body: "Experience accumulated following decisions, coordinating professionals and conducting celebrations.",
          },
          {
            title: "2022 — Rio as a wedding destination",
            body: "A new focus on creating experiences for couples who choose the city to celebrate.",
          },
          {
            title: "Today — Different ways of living the yes",
            body: "Elopements, same-sex weddings, Destination Weddings, celebrations in Rio and support for the civil marriage of foreign couples.",
          },
        ],
      },
      {
        type: "presentation",
        title: "Repertoire to guide. Closeness to accompany.",
        paragraphs: [
          "The office brings together more than a thousand events carried out throughout its path. This experience translates into production knowledge and into the relationship with suppliers.",
          "The team includes professionals fluent in English, Spanish and French, making it possible to accompany couples and guests from different countries.",
          "Each project begins with understanding the priorities and the budget. From there, we build the choices with the couple.",
        ],
      },
      {
        type: "cards",
        id: "realizacoes",
        title: "Some stories that are part of ours.",
        cards: [
          { title: "Felipe & Juan", text: "Além do Sonho.", action: "Discover this wedding", href: "#" },
          { title: "Mariana & Mario", text: "Cristo Redentor.", action: "See this celebration", href: "#" },
          { title: "Sarah & Rodrigo", text: "Santa Teresa MGallery.", action: "Explore this wedding", href: "#" },
          { title: "Louhayne & Charles", text: "Igreja São Francisco de Paula.", action: "Discover this story", href: "#" },
          { title: "Ana Paula & Lucas", text: "Villa Riso.", action: "See the records", href: "#" },
          { title: "Jaluza & Luiz", text: "Solar Real.", action: "Explore this celebration", href: "#" },
        ],
      },
      {
        type: "destination",
        title: "A path that also includes other celebrations.",
        paragraphs: [
          "The portfolio includes projects such as Romário's 60th birthday and Luciano Huck's get-together.",
          "These are works that are part of the office's repertoire in different event formats.",
        ],
        cta: { label: "Discover other achievements", href: "#" },
      },
      {
        type: "band",
        title: "I want to understand what makes this day important to you.",
        paragraphs: [
          "The setting and the details matter. But it is the conversation with the couple that gives direction to the project.",
          "I want to know what you wish to live, what is worth investing in and which people need to be close by.",
          "From there, my team and I take care of connecting the choices and following the planning.",
        ],
      },
      {
        type: "destination",
        title: "Now I want to get to know your story.",
        paragraphs: [
          "Tell us how you met and what you imagine for the wedding. This is how our work begins.",
        ],
        cta: { label: "Schedule a conversation with Leco", href: "#rsvp" },
      },
    ],
  },

  es: {
    hero: {
      kicker: "CONOZCAN A LECO BIAGGÌONI",
      title: "Más de dos décadas de experiencia. Una historia a la vez.",
      paragraphs: [
        "Soy Leco Biaggìoni. Trabajo con eventos hace más de 20 años y, hace más de 10, las bodas se convirtieron en el centro de mi trayectoria.",
        "Hoy, reúno ese camino para crear celebraciones que tengan sentido para quienes están viviendo cada momento.",
      ],
      cta: { label: "Vamos a conocernos", href: "#rsvp" },
      secondary: { label: "Ver realizaciones", href: "#realizacoes" },
    },
    sections: [
      {
        type: "split",
        title: "Lo que aprendí a lo largo de los años comienza en la escucha.",
        paragraphs: [
          "En 2004, abrí mi primera empresa. Desde entonces, tuve la oportunidad de realizar diferentes tipos de eventos, conocer personas y ampliar mi repertorio.",
          "Con el tiempo, las bodas ganaron cada vez más espacio en mi trabajo. Acompañar a una pareja significa participar en una historia que ya existe y ayudar a crear un momento que quedará en la memoria de muchas personas.",
          "Esa responsabilidad orienta la forma en que trabajo: escuchar primero, entender las prioridades y conectar las elecciones con una planificación posible.",
          "En 2022, mirar a las parejas que elegían Río de Janeiro como destino trajo una nueva dirección a mi trayectoria. Pasé a dedicarme al universo de los Destination Weddings y a la experiencia de quienes vienen de fuera para celebrar aquí.",
          "También comencé a recibir más pedidos de Elopement Wedding y me enamoré de la intimidad de ese formato. La experiencia de grandes producciones pasó a acompañar celebraciones concentradas en la pareja.",
          "Hoy, mi trabajo reúne planificación, ceremonial y proyectos de decoración, con un equipo que comparte ese cuidado del primer contacto a la celebración.",
        ],
      },
      {
        type: "icons",
        title: "Un camino construido en encuentros.",
        items: [
          { title: "2004 — La primera empresa", body: "El inicio de la trayectoria emprendedora en el mercado de eventos." },
          {
            title: "Más de una década dedicada a bodas",
            body: "Experiencia acumulada acompañando decisiones, coordinando profesionales y conduciendo celebraciones.",
          },
          {
            title: "2022 — Río como destino de boda",
            body: "Un nuevo foco en crear experiencias para parejas que eligen la ciudad para celebrar.",
          },
          {
            title: "Hoy — Diferentes formas de vivir el sí",
            body: "Elopements, bodas homoafectivas, Destination Weddings, celebraciones en Río y apoyo al matrimonio civil de parejas extranjeras.",
          },
        ],
      },
      {
        type: "presentation",
        title: "Repertorio para orientar. Cercanía para acompañar.",
        paragraphs: [
          "La oficina reúne más de mil eventos realizados en su trayectoria. Esa experiencia se traduce en conocimiento de producción y en la relación con proveedores.",
          "El equipo incluye profesionales fluidos en inglés, español y francés, lo que permite acompañar a parejas e invitados de diferentes países.",
          "Cada proyecto comienza por el entendimiento de las prioridades y del presupuesto. A partir de ahí, construimos las elecciones con la pareja.",
        ],
      },
      {
        type: "cards",
        id: "realizacoes",
        title: "Algunas historias que forman parte de la nuestra.",
        cards: [
          { title: "Felipe & Juan", text: "Além do Sonho.", action: "Conocer esta boda", href: "#" },
          { title: "Mariana & Mario", text: "Cristo Redentor.", action: "Ver esta celebración", href: "#" },
          { title: "Sarah & Rodrigo", text: "Santa Teresa MGallery.", action: "Explorar esta boda", href: "#" },
          { title: "Louhayne & Charles", text: "Igreja São Francisco de Paula.", action: "Conocer esta historia", href: "#" },
          { title: "Ana Paula & Lucas", text: "Villa Riso.", action: "Ver los registros", href: "#" },
          { title: "Jaluza & Luiz", text: "Solar Real.", action: "Explorar esta celebración", href: "#" },
        ],
      },
      {
        type: "destination",
        title: "Una trayectoria que también pasa por otras celebraciones.",
        paragraphs: [
          "El portafolio incluye proyectos como el cumpleaños de 60 años de Romário y la confraternización de Luciano Huck.",
          "Son trabajos que integran el repertorio de la oficina en diferentes formatos de evento.",
        ],
        cta: { label: "Conocer otras realizaciones", href: "#" },
      },
      {
        type: "band",
        title: "Quiero entender qué hace que ese día sea importante para ustedes.",
        paragraphs: [
          "El escenario y los detalles importan. Pero es la conversación con la pareja la que da dirección al proyecto.",
          "Quiero saber qué desean vivir, en qué vale la pena invertir y qué personas necesitan estar cerca.",
          "A partir de ahí, mi equipo y yo cuidamos de conectar las elecciones y acompañar la planificación.",
        ],
      },
      {
        type: "destination",
        title: "Ahora quiero conocer la historia de ustedes.",
        paragraphs: [
          "Cuéntennos cómo se encontraron y qué imaginan para la boda. Así es como comienza nuestro trabajo.",
        ],
        cta: { label: "Agendar una conversación con Leco", href: "#rsvp" },
      },
    ],
  },
};
