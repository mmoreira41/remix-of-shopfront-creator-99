import { Gift, Youtube, MessageSquare, Sparkles, Users, Video } from "lucide-react";

const bonuses = [
  {
    icon: Youtube,
    label: "BÔNUS 1",
    title: "YouTube Shopping",
    description: "Aprenda a fazer grana com o novo YouTube Shopping em primeira mão e saia na frente antes de todo mundo.",
  },
  {
    icon: Sparkles,
    label: "BÔNUS 2",
    title: "Meu Criador de Prompts",
    description: "Crie prompts otimizados no ChatGPT, economize tempo e obtenha respostas mais criativas e claras.",
  },
  {
    icon: Gift,
    label: "BÔNUS 3",
    title: 'Hack - IAs de "GRAÇA"',
    description: "Economize muito com as IAs mais usadas através de um hack exclusivo que vou te mostrar passo a passo.",
  },
  {
    icon: Users,
    label: "BÔNUS 4",
    title: "Grupo do WhatsApp",
    description: "Entre no grupo exclusivo da Renda Com Shop no WhatsApp e troque prompts, ideias e resultados com pessoas do mesmo propósito.",
  },
  {
    icon: Video,
    label: "BÔNUS 5",
    title: "Fazendo R$ 10K com Lives",
    description: "O Keven Borges vai te mostrar a estratégia que usa para fazer mais de 10 mil reais por semana no TikTok Shop.",
  },
];

const Bonuses = () => {
  return (
    <section className="py-24 bg-pattern relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider">
            <Gift className="w-5 h-5" />
            BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Você ainda recebe{" "}
            <span className="text-gradient-cyan">bônus exclusivos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                {bonus.label}
              </span>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center my-4 group-hover:bg-accent/20 transition-colors">
                <bonus.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{bonus.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
