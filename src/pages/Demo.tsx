import { HeroGeometric } from "@/components/blocks/hero";
import { AnimatedTestimonials } from "@/components/blocks/testimonials";

/**
 * Página de demonstração dos novos componentes refatorados
 *
 * Esta página demonstra o uso dos componentes:
 * - HeroGeometric: Hero com formas geométricas animadas
 * - AnimatedTestimonials: Testimonials com scroll infinito
 *
 * Todos os dados vêm de @/config/site-config.ts
 */
const Demo = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero com animações geométricas */}
      <HeroGeometric />

      {/* Testimonials com scroll infinito */}
      <AnimatedTestimonials />
    </main>
  );
};

export default Demo;
