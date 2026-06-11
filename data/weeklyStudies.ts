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
};

export const weeklyStudies: WeeklyStudy[] = [
  {
    id: "2026-23",
    slug: "meu-coracao-se-regozija-no-senhor",
    weekRange: "Semana de 7 a 13 de junho de 2026",
    title: "Meu coracao se regozija no Senhor",
    scriptureReference: "Rute; 1 Samuel 1-3",
    mainMessage:
      "Mesmo em tempos de perda, espera ou incerteza, o Senhor pode transformar fidelidade humilde em consolo, direcao e alegria espiritual duradoura.",
    summary:
      "O estudo desta semana destaca a lealdade de Rute, a oracao sincera de Ana e o chamado de Samuel. Essas historias mostram que Deus conhece pessoas comuns, ouve suplicas honestas e prepara servos dispostos a responder: fala, Senhor.",
    reflectionQuestions: [
      "Como posso demonstrar fidelidade ao Senhor mesmo quando o caminho parece incerto?",
      "Que sentimentos ou pedidos preciso levar a Deus com mais sinceridade em oracao?",
      "Como posso ouvir e responder melhor aos sussurros do Senhor nesta semana?"
    ],
    familyActivity:
      "Leiam juntos Rute 1 ou 1 Samuel 3 e conversem sobre uma escolha fiel feita por Rute, Ana ou Samuel. Depois, cada pessoa pode escrever uma forma simples de dizer sim ao Senhor esta semana.",
    teacherIdeas:
      "Divida a conversa em tres palavras: lealdade, oracao e chamado. Convide a classe a identificar essas ideias em Rute, Ana e Samuel, e finalize com uma pergunta de aplicacao pessoal sobre ouvir o Senhor.",
    officialLink: "https://www.churchofjesuschrist.org/study/come-follow-me"
  },
  {
    id: "2026-02",
    slug: "ouvir-a-voz-do-senhor",
    weekRange: "Semana de 12 a 18 de janeiro de 2026",
    title: "Ouvir a voz do Senhor",
    scriptureReference: "Estudo das escrituras da semana",
    mainMessage:
      "A luz de Cristo se torna mais clara quando reservamos tempo para ouvir, ponderar e agir com fe.",
    summary:
      "O estudo desta semana incentiva um ritmo espiritual mais atento. Ouvir o Senhor envolve silenciar distracoes, registrar impressoes e responder com pequenas escolhas fieis.",
    reflectionQuestions: [
      "Que distracao posso reduzir para ouvir melhor o Espirito?",
      "Como reconheco a voz do Senhor em minha rotina?",
      "Que impressao espiritual recente preciso colocar em pratica?"
    ],
    familyActivity:
      "Criem um momento breve de silencio apos a leitura das escrituras e convidem cada pessoa a anotar uma impressao.",
    teacherIdeas:
      "Organize a conversa em torno de experiencias reais de revelacao pessoal, preservando um ambiente respeitoso e simples.",
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
