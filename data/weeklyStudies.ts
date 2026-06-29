export type WeeklyStudy = {
  id: string;
  slug: string;
  weekRange: string;
  title: string;
  scriptureReference: string;
  mainMessage: string;
  summary: string;
  reflectionQuestions: string[];
  familyActivity: string;
  teacherIdeas: string;
  officialLink: string;
  image?: string;
  imageAlt?: string;
};

export const weeklyStudies: WeeklyStudy[] = [
  {
    id: "2026-27",
    slug: "se-o-senhor-e-deus-segui-o",
    weekRange: "29 de junho a 5 de julho de 2026",
    title: "Se o Senhor é Deus, segui-O",
    scriptureReference: "1 Reis 12-13; 17-22",
    mainMessage:
      "Seguir o Senhor exige uma decisão inteira. Em meio às muitas vozes que disputam nossa atenção, Cristo nos convida a escolher a fé, reconhecer Sua mão e escutar Sua voz mansa e delicada.",
    summary:
      "Os relatos de Elias mostram que Deus age tanto em manifestações poderosas quanto em experiências silenciosas e pessoais. A viúva de Sarepta ensina sobre sacrifício e confiança; o monte Carmelo, sobre compromisso; e Horebe, sobre aprender a reconhecer a orientação serena do Espírito.",
    reflectionQuestions: [
      "Que influências têm disputado minha lealdade ao Senhor?",
      "Que pequeno sacrifício pode demonstrar minha fé em Jesus Cristo nesta semana?",
      "O que preciso silenciar para perceber melhor a voz mansa e delicada do Espírito?"
    ],
    familyActivity:
      "Leiam 1 Reis 18:21 e 1 Reis 19:11-12. Em uma folha, escrevam de um lado as escolhas que demonstram compromisso com Cristo e, do outro, atitudes que ajudam a criar silêncio espiritual no lar. Escolham uma ação de cada lado para praticar durante a semana.",
    teacherIdeas:
      "Organize a conversa em três movimentos: escolher o Senhor, exercer fé por meio do sacrifício e ouvir o Espírito. Use as experiências de Elias e da viúva para levar a classe a formular uma aplicação pessoal concreta.",
    officialLink:
      "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/27?lang=por",
    image: "/images/elias-monte-carmelo.png",
    imageAlt: "Ilustração original de Elias diante de um altar no monte Carmelo"
  },
  {
    id: "2026-28",
    slug: "ha-profeta-em-israel",
    weekRange: "6 a 12 de julho de 2026",
    title: "Há profeta em Israel",
    scriptureReference: "2 Reis 2-7",
    mainMessage:
      "Deus continua a nutrir, curar e sustentar Seus filhos. Quando recebemos Sua orientação com humildade e abrimos os olhos da fé, percebemos que não estamos sozinhos.",
    summary:
      "O ministério de Eliseu testemunha do poder de Jesus Cristo de dar vida, alimentar e curar. Naamã aprende que uma instrução simples pode exigir verdadeira humildade, enquanto o servo de Eliseu descobre que a ajuda do Senhor já estava presente antes que seus olhos pudessem vê-la.",
    reflectionQuestions: [
      "Que convite simples do Senhor tenho complicado ou adiado?",
      "Onde já consigo reconhecer pequenos milagres em minha vida?",
      "Quem Deus colocou ao meu redor para me fortalecer, e quem posso fortalecer nesta semana?"
    ],
    familyActivity:
      "Leiam 2 Reis 6:15-17. Cada pessoa pode desenhar ou escrever quem está ao seu lado nos momentos difíceis: familiares, amigos, líderes, profetas e o Senhor. Encerrem agradecendo em oração por essas formas de auxílio.",
    teacherIdeas:
      "Compare os milagres de Eliseu com o ministério de Jesus Cristo e convide a classe a identificar o que cada relato ensina sobre o Salvador. Termine com a experiência de Naamã e um convite à obediência humilde.",
    officialLink:
      "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/28?lang=por",
    image: "/images/naama-rio-jordao.png",
    imageAlt: "Ilustração original de Naamã saindo humildemente do rio Jordão"
  },
  {
    id: "2026-23",
    slug: "meu-coracao-se-regozija-no-senhor",
    weekRange: "1º a 7 de junho de 2026",
    title: "Meu coração se regozija no Senhor",
    scriptureReference: "Rute; 1 Samuel 1-7",
    mainMessage:
      "Mesmo em tempos de perda, espera ou incerteza, o Senhor pode transformar fidelidade humilde em consolo, direção e alegria espiritual duradoura.",
    summary:
      "O estudo destaca a lealdade de Rute, a oração sincera de Ana e o chamado de Samuel. Essas histórias mostram que Deus conhece pessoas comuns, ouve súplicas honestas e prepara servos dispostos a responder.",
    reflectionQuestions: [
      "Como posso demonstrar fidelidade ao Senhor mesmo quando o caminho parece incerto?",
      "Que sentimentos ou pedidos preciso levar a Deus com mais sinceridade em oração?",
      "Como posso ouvir e responder melhor aos sussurros do Senhor?"
    ],
    familyActivity:
      "Leiam juntos Rute 1 ou 1 Samuel 3 e conversem sobre uma escolha fiel feita por Rute, Ana ou Samuel.",
    teacherIdeas:
      "Divida a conversa em três palavras: lealdade, oração e chamado. Convide a classe a identificar essas ideias nos relatos estudados.",
    officialLink: "https://www.churchofjesuschrist.org/study/come-follow-me"
  },
  {
    id: "2026-03",
    slug: "luz-para-a-familia",
    weekRange: "Semana de 19 a 25 de janeiro de 2026",
    title: "Luz para a familia",
    scriptureReference: "Estudo familiar das escrituras",
    mainMessage:
      "Quando Cristo esta no centro do lar, ate conversas simples podem se tornar momentos de aprendizado, cura e direcao.",
    summary:
      "Esta reflexao destaca o lar como um lugar sagrado de pratica diaria do discipulado. Pequenos habitos de estudo, oracao e servico podem convidar paz e unidade.",
    reflectionQuestions: [
      "Que pratica espiritual fortaleceria meu lar nesta semana?",
      "Como posso tornar o estudo familiar mais acolhedor?",
      "Quem em minha casa precisa sentir mais paciencia e amor?"
    ],
    familyActivity:
      "Montem um pequeno quadro da semana com uma escritura, uma meta de servico e uma pergunta para conversar no domingo.",
    teacherIdeas:
      "Convide a classe a listar desafios reais do estudo em familia e, juntos, construir solucoes simples e possiveis.",
    officialLink: "https://www.churchofjesuschrist.org/study/come-follow-me"
  }
];

export function getLatestStudy() {
  return weeklyStudies[0];
}

export function getStudyBySlug(slug: string) {
  return weeklyStudies.find((study) => study.slug === slug);
}
