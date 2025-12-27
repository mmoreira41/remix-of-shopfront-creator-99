import { Video, Target, Package, Wrench, BarChart3, Calendar } from "lucide-react";

const pillars = [
  {
    id: "pillar-1",
    icon: Video,
    title: "Vídeo de Alta Retenção",
    description: "Aprenda a criar vídeos que prendem a atenção do público e fazer o algoritmo entregar suas postagens para milhares de pessoas todos os dias.",
  },
  {
    id: "pillar-2",
    icon: Target,
    title: "Gatilhos de Vendas",
    description: "Descubra como aplicar gatilhos mentais, emoções e histórias curtas que despertam o desejo de compra e transformam visualizações em vendas reais.",
  },
  {
    id: "pillar-3",
    icon: Package,
    title: "Produtos Certos",
    description: "Aprenda a identificar produtos com alto potencial de viralização, entender o que o público quer comprar e montar vitrines que convertem de verdade.",
  },
  {
    id: "pillar-4",
    icon: Wrench,
    title: "Ferramentas Simples",
    description: "Domine ferramentas práticas para editar e publicar seus vídeos com qualidade, produtividade e agilidade, mesmo começando do zero.",
  },
  {
    id: "pillar-5",
    icon: BarChart3,
    title: "Estrutura Escalável",
    description: "Crie uma base sólida para gerar vendas todos os dias, automatizando processos e construindo uma estrutura pronta para escalar seus resultados.",
  },
  {
    id: "pillar-6",
    icon: Calendar,
    title: "Postagens Inteligentes",
    description: "Entenda o que postar, quando postar e como postar. Use estratégias que aumentam o alcance, engajamento e posicionamento da sua marca dentro do TikTok Shop.",
  },
];

const Pillars = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            PILARES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Entenda a <span className="text-gradient-cyan">Renda Com Shop</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(174_100%_50%_/_0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-16 max-w-3xl mx-auto">
          O mercado está se transformando e o TikTok está liderando essa mudança.{" "}
          <strong className="text-foreground">Quem aprender agora, vai dominar o jogo nos próximos meses.</strong>
        </p>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex marquee-reverse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-4">
                <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium whitespace-nowrap">
                  Receba Acesso Imediato
                </span>
                <span className="px-4 py-2 rounded-full border border-accent/30 text-accent text-sm font-medium whitespace-nowrap">
                  Bônus Exclusivos
                </span>
                <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium whitespace-nowrap">
                  Método Validado
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
