import { Check, X, Zap } from "lucide-react";

const otherCourses = [
  { id: "other-1", text: "Criação de imagens sem direção" },
  { id: "other-2", text: "Aulas soltas e sem estratégia" },
  { id: "other-3", text: "Imagens bonitas, sem utilidade" },
  { id: "other-4", text: "Nenhum passo a passo de vendas" },
  { id: "other-5", text: "Nada pronto para aplicar" },
  { id: "other-6", text: "Sem método, sem base, sem resultado" },
];

const rendaComShop = [
  { id: "renda-1", text: "Crie vídeos que viralizam e vendem" },
  { id: "renda-2", text: "Estratégias práticas e aplicadas" },
  { id: "renda-3", text: "Foco total em você ter resultados" },
  { id: "renda-4", text: "Método validado: View até a venda" },
  { id: "renda-5", text: "Suporte direto e exemplos reais" },
  { id: "renda-6", text: "Você sai pronto pra agir e faturar" },
];

const Comparison = () => {
  return (
    <section className="py-24 bg-pattern relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Zap className="w-5 h-5" />
            COMPARATIVO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Por que o meu <span className="text-gradient-cyan">Método Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não é mais um curso teórico! É um passo a passo prático, direto e testado por quem já lucra com a TikTok Shop todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Courses */}
          <div className="p-8 rounded-2xl bg-card/30 border border-border">
            <h3 className="text-xl font-bold mb-6 text-muted-foreground">OUTROS CURSOS</h3>
            <ul className="space-y-4">
              {otherCourses.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Renda Com Shop */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold mb-6 text-primary relative z-10">RENDA COM SHOP</h3>
            <ul className="space-y-4 relative z-10">
              {rendaComShop.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
