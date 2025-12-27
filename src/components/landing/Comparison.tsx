import { Check, X, Zap } from "lucide-react";

const otherCourses = [
  "Criação de imagens sem direção",
  "Aulas soltas e sem estratégia",
  "Imagens bonitas, sem utilidade",
  "Nenhum passo a passo de vendas",
  "Nada pronto para aplicar",
  "Sem método, sem base, sem resultado",
];

const rendaComShop = [
  "Crie vídeos que viralizam e vendem",
  "Estratégias práticas e aplicadas",
  "Foco total em você ter resultados",
  "Método validado: View até a venda",
  "Suporte direto e exemplos reais",
  "Você sai pronto pra agir e faturar",
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
              {otherCourses.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Renda Com Shop */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold mb-6 text-primary relative z-10">RENDA COM SHOP</h3>
            <ul className="space-y-4 relative z-10">
              {rendaComShop.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
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
