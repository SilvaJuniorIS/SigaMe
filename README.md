# Siga a Luz

Website devocional, acolhedor e organizado para apoiar o estudo semanal inspirado no **Vem, e Segue-Me**.

> Este site e um projeto independente de apoio ao estudo pessoal e familiar. Ele nao e um site oficial de A Igreja de Jesus Cristo dos Santos dos Ultimos Dias. Para acessar o conteudo oficial do Vem, e Segue-Me, visite ChurchofJesusChrist.org.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Componentes reutilizaveis
- Dados iniciais em TypeScript, preparados para evoluir para JSON ou Markdown

## Como instalar

```bash
npm install
npm run dev
```

Depois, acesse:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Como adicionar novos estudos semanais

Os estudos ficam em `data/weeklyStudies.ts`.

Adicione um novo objeto ao array `weeklyStudies` com esta estrutura:

```ts
{
  id: "2026-04",
  slug: "novo-tema-da-semana",
  weekRange: "Semana de 26 de janeiro a 1 de fevereiro de 2026",
  title: "Novo tema da semana",
  scriptureReference: "Referencia das escrituras",
  mainMessage: "Mensagem central original.",
  summary: "Resumo devocional em palavras proprias.",
  reflectionQuestions: [
    "Pergunta 1?",
    "Pergunta 2?",
    "Pergunta 3?"
  ],
  familyActivity: "Atividade familiar simples.",
  teacherIdeas: "Ideias para professores.",
  officialLink: "https://www.churchofjesuschrist.org/study/come-follow-me"
}
```

A pagina `/semana` exibe o primeiro item do array. Para publicar um novo estudo como o mais recente, coloque-o no inicio da lista.

Cada estudo tambem ganha automaticamente uma pagina em:

```bash
/estudos/[slug]
```

## Observacoes editoriais

- Nao use logotipos oficiais da Igreja como identidade do projeto.
- Nao copie integralmente textos protegidos do manual.
- Use referencias, resumos proprios, links oficiais e conteudo devocional original.
