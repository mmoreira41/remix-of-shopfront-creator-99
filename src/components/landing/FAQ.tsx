import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "01. O curso é ao vivo?",
    answer: "Não. O curso é 100% online e gravado, para você assistir quando e onde quiser. As aulas ficam disponíveis na plataforma e você pode pausar, rever e seguir no seu ritmo.",
  },
  {
    id: "faq-2",
    question: "02. As ferramentas que vocês usam são gratuitas?",
    answer: "As melhores ferramentas são pagas, mas durante o curso mostramos um hack exclusivo que permite acessar tudo pagando bem, bem mais barato. Assim você usa o que há de melhor sem gastar quase nada.",
  },
  {
    id: "faq-3",
    question: "03. Eu vou conseguir criar algo ou é só teoria?",
    answer: "Você vai criar. O curso é totalmente prático e focado em aplicar o que aprende. Desde as primeiras aulas você já começa a executar e ver resultados reais.",
  },
  {
    id: "faq-4",
    question: "04. Tenho quanto tempo para assistir?",
    answer: "O acesso é anual. Você pode assistir quantas vezes quiser e rever as aulas quando precisar no período de 365 dias.",
  },
  {
    id: "faq-5",
    question: "05. E se eu não gostar? Tenho garantia?",
    answer: "Sim. Você tem 7 dias de garantia para testar o curso. Se achar que não é pra você, devolvemos 100% do valor sem burocracia. Eu duvido não gostar do conteúdo!",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 bottom-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <HelpCircle className="w-5 h-5" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Perguntas <span className="text-gradient-cyan">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border rounded-xl bg-card/50 backdrop-blur px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-bold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
