import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

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

interface TestimonialsColumnProps {
  testimonials: typeof testimonials;
  duration?: number;
  className?: string;
}

function TestimonialsColumn({ testimonials, duration = 15, className = "" }: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, i) => (
              <div
                key={`${index}-${i}`}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300 max-w-xs w-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

const Testimonials = () => {
  // Divide os testimonials em três colunas
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          badge="Depoimentos"
          icon={MessageCircle}
          title={<>O que os alunos estão <span className="text-gradient-cyan">falando</span></>}
          description={<>Muita gente já aplica o método e transforma vídeos simples em grana. <strong className="text-foreground">Começaram do zero e já estão fazendo vendas!</strong></>}
          className="mb-16"
        />

        {/* Colunas de testimonials com scroll infinito */}
        <div className="flex justify-center gap-6 mb-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="cta" size="xl" className="group">
            GARANTIR MINHA VAGA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
