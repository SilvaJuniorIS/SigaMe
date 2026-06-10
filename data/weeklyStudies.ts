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
    id: "2026-01",
    slug: "caminhar-com-deus-em-convenio",
    weekRange: "Semana de 5 a 11 de janeiro de 2026",
    title: "Caminhar com Deus em convenio",
    scriptureReference: "Velho Testamento 2026",
    mainMessage:
      "O Senhor nos convida a caminhar com Ele diariamente, permitindo que Sua luz oriente nossas escolhas, fortaleça nossa familia e aprofunde nossa conversao.",
    summary:
      "Nesta semana, o estudo se concentra em reconhecer o Senhor como guia constante. Ao valorizar convenios, buscar revelacao pessoal e praticar obediencia com amor, individuos e familias podem sentir mais clareza espiritual no cotidiano.",
    reflectionQuestions: [
      "Como posso permitir que Cristo guie minhas decisoes nesta semana?",
      "Que convenio preciso valorizar mais em minha vida?",
      "Como minha familia pode estudar as escrituras com mais proposito?"
    ],
    familyActivity:
      "Escolham uma escritura da semana, leiam juntos e cada pessoa compartilhe uma forma pratica de seguir Jesus Cristo nos proximos dias.",
    teacherIdeas:
      "Comece a aula com uma pergunta de aplicacao pessoal, convide os alunos a compartilharem experiencias e finalize com um compromisso simples para a semana.",
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
