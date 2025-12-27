import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const Opportunity = () => {
  return (
    <section className="py-24 bg-pattern relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
              <img
                src={phoneMockup}
                alt="TikTok Shop Dashboard"
                className="relative max-w-sm w-full h-auto animate-float"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Trophy className="w-5 h-5" />
              OPORTUNIDADE
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Vender todos os dias se torna{" "}
              <span className="text-gradient-cyan">normal para quem quer!</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">O TikTok Shop virou a nova mina de ouro do e-commerce!</strong>{" "}
              Milhares já fazem grana dentro do app, sem aparecer, sem gastar com anúncios ou até mesmo ter estoque.
              Você escolhe: continuar só assistindo ou aproveitar essa oportunidade e começar a ter resultados.
            </p>

            <Button variant="cta" size="xl" className="group">
              GARANTIR MINHA VAGA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Second block */}
        <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">
          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Enquanto alguns fazem dinheiro com vídeos,{" "}
              <span className="text-gradient-cyan">você ainda só assiste.</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              O TikTok Shop está fazendo muita gente fazer grana. E tudo começa com o mesmo celular e o mesmo tempo que você usa vendo vídeos.
            </p>
          </div>

          <Button variant="cta" size="xl" className="group">
            GARANTIR MINHA VAGA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
