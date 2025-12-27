import { Button } from "@/components/ui/button";
import { ArrowRight, Users2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  return (
    <section className="py-24 bg-pattern relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Users2 className="w-5 h-5" />
            QUEM SOMOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Gabriel Silva e <span className="text-gradient-cyan">Keven Borges</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <img
              src={heroImage}
              alt="Gabriel Silva e Keven Borges"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gabriel Silva e Keven Borges são referências no digital e especialistas em vendas no TikTok Shop.
              Gabriel impactou milhares com suas estratégias de conteúdo, enquanto Keven se tornou um dos maiores
              vendedores do país na plataforma.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Juntos, eles ensinam a todos que queiram aprender a criar vídeos que vendem e a faturar todos os dias no TikTok Shop.
            </p>

            <Button variant="cta" size="xl" className="group">
              GARANTIR MINHA VAGA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
