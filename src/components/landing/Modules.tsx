import { BookOpen, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "module-1",
    title: "Copy - Do roteiro as Vendas",
    description: "Aprenda a transformar roteiros em lucro. Domine ganchos, legendas e narrativas que prendem atenção e convertem em vendas reais. Conteúdo prático e direto para você escrever o que vende e não o que apenas entretém.",
  },
  {
    id: "module-2",
    title: "TikTok Shop no Brasil",
    description: "Domine o jogo no mercado brasileiro. Aprenda as estratégias que fazem vídeos comuns explodirem em vendas, mesmo começando do zero. Você vai entender como usar o algoritmo e vender todos os dias de forma simples e escalável.",
  },
  {
    id: "module-3",
    title: "TikTok Shop na Gringa",
    description: "Aprenda como brasileiros estão faturando em dólar criando vídeos para produtos internacionais. Descubra como encontrar oportunidades fora do país, produzir vídeos que vendem e aproveitar o alto potencial de lucro da gringa.",
  },
  {
    id: "module-4",
    title: "Dark - Monetize sem Aparecer",
    description: "Ganhe dinheiro sem mostrar o rosto! Aprenda a criar perfis anônimos, usar vozes e imagens com IA e montar uma estrutura que vende sozinha. Ideal para quem busca liberdade, privacidade e lucro com qualidade.",
  },
  {
    id: "module-5",
    title: "Como fazer mais de 10k com Lives - Keven Borges",
    description: "Aprenda a criar lives simples que vendem todos os dias. Keven mostra como montar a estrutura certa, escolher produtos que convertem e transformar transmissões comuns em faturamento real.",
  },
];

const Modules = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <BookOpen className="w-5 h-5" />
            MÓDULOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Tudo o que você vai <span className="text-gradient-cyan">aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Você vai aprender a criar vídeos com alto poder de engajamento, entender como o algoritmo do TikTok funciona e usar as estratégias certas pra transformar visualizações em vendas reais.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="border border-border rounded-xl bg-card/50 backdrop-blur px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14">
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Modules;
