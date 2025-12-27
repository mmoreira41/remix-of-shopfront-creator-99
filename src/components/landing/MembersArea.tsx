import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const MembersArea = () => {
  return (
    <section className="py-24 bg-pattern relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Users className="w-5 h-5" />
              ÁREA DE MEMBROS
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Para Quem Quer{" "}
              <span className="text-gradient-cyan">Virar o Jogo</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nada de enrolação: aulas diretas, práticas e voltadas pra ação. Você vai aprender a dominar as ferramentas certas e usar a IA pra crescer, lucrar e alcançar novos níveis no mercado digital.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Dentro da área de membros, tudo é estruturado pra você colocar em prática desde a primeira aula.
            </p>

            <Button variant="cta" size="xl" className="group">
              GARANTIR MINHA VAGA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
              <img
                src={dashboardMockup}
                alt="Área de Membros - Dashboard"
                className="relative rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersArea;
