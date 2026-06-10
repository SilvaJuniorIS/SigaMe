import { MessageCard } from "@/components/MessageCard";
import { SectionHeading } from "@/components/ui";

const messages = [
  {
    title: "Cristo ilumina o proximo passo",
    message:
      "Nem sempre recebemos todo o mapa, mas podemos receber luz suficiente para caminhar com fe hoje."
  },
  {
    title: "Estudar tambem e adorar",
    message:
      "Quando abrimos as escrituras com humildade, transformamos minutos comuns em um convite para conhecer melhor o Salvador."
  },
  {
    title: "O lar pode ser santo",
    message:
      "Uma pergunta sincera, uma escritura lida com calma e uma oracao simples podem mudar o espirito de uma casa."
  }
];

export default function MessagesPage() {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <SectionHeading eyebrow="Mensagens" title="Inspiracao para a semana">
          <p>Reflexoes originais, breves e devocionais para apoiar o estudo pessoal e familiar.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {messages.map((message) => (
            <MessageCard key={message.title} title={message.title} message={message.message} />
          ))}
        </div>
      </div>
    </section>
  );
}
