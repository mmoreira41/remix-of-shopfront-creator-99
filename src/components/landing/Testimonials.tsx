import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    text: "Comecei do zero e em 2 semanas já fiz minha primeira venda! O método é muito claro.",
    stars: 5,
  },
  {
    name: "João P.",
    text: "Nunca pensei que seria tão simples. Os vídeos ensinam exatamente o que fazer.",
    stars: 5,
  },
  {
    name: "Ana C.",
    text: "Já faturei mais de R$ 5.000 no primeiro mês aplicando as técnicas do curso.",
    stars: 5,
  },
  {
    name: "Pedro M.",
    text: "O suporte é incrível e o conteúdo está sempre atualizado. Vale cada centavo!",
    stars: 5,
  },
  {
    name: "Carla R.",
    text: "Estava cética no início, mas os resultados falam por si. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Lucas F.",
    text: "Finalmente um curso que ensina de verdade, sem enrolação. Direto ao ponto!",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <MessageCircle className="w-5 h-5" />
            DEPOIMENTOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            O que os alunos estão <span className="text-gradient-cyan">falando</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Muita gente já aplica o método e transforma vídeos simples em grana.{" "}
            <strong className="text-foreground">Começaram do zero e já estão fazendo vendas!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="group">
            GARANTIR MINHA VAGA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
