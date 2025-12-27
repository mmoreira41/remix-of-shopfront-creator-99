import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Flame, Shield } from "lucide-react";

const includedItems = [
  { id: "item-1", title: "Curso Renda Com Shop", original: "R$ 597,00", price: "R$ 297,00" },
  { id: "item-2", title: "Fazendo 10K com Lives", original: "R$ 997,00", price: "R$ 0,00" },
  { id: "item-3", title: "Bônus: YouTube Shop", original: "R$ 297,00", price: "R$ 0,00" },
  { id: "item-4", title: 'Hack - IAs de "GRAÇA"', original: "R$ 197,00", price: "R$ 0,00" },
  { id: "item-5", title: "Meu Criador de Prompts", original: "R$ 97,00", price: "R$ 0,00" },
  { id: "item-6", title: "Grupo - WhatsApp", original: "R$ 47,00", price: "R$ 0,00" },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider">
            <Flame className="w-5 h-5" />
            OFERTA SUPER ESPECIAL
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Restam <span className="text-gradient-cyan">poucas vagas!</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Garanta sua vaga agora e aproveite o valor promocional antes que acabe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Pricing Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-muted-foreground line-through text-lg">DE R$ 597,00</p>
                  <p className="text-sm text-muted-foreground mt-2">Por apenas, 12x de</p>
                </div>

                <div className="flex items-start gap-1">
                  <span className="text-2xl font-bold mt-2">R$</span>
                  <span className="text-7xl font-extrabold text-gradient-cyan">30</span>
                  <span className="text-2xl font-bold mt-2">,72</span>
                </div>

                <p className="text-muted-foreground">Ou R$ 297,00 à vista.</p>

                <Button variant="cta" size="xl" className="w-full group">
                  GARANTIR MINHA VAGA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* What's included */}
            <div className="space-y-4">
              {includedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground line-through">{item.original}</p>
                    <p className="text-sm font-bold text-primary">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-card/50 border border-border text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Você pode experimentar por
            </p>
            <h3 className="text-3xl font-extrabold mb-6">7 dias sem compromisso</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Acreditamos tanto no poder desse método que te damos 7 dias de garantia incondicional.
              Se dentro desse prazo você achar que não é pra você, devolvemos 100% do valor pago.
              Sem burocracia, sem enrolação.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Assim, você pode se inscrever hoje com tranquilidade total: o risco não está com você, está comigo.
              Faça parte agora e comprove o poder da Inteligência Artificial aplicada na prática.
            </p>
            <p className="text-lg font-bold text-foreground">
              Você tem tudo a ganhar e nada a perder. A decisão agora é sua!
            </p>

            <Button variant="cta" size="xl" className="group mt-8">
              GARANTIR MINHA VAGA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
