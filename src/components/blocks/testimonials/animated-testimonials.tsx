"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "./testimonials-column";
import { siteConfig } from "@/config/site-config";
import type { Testimonial } from "@/config/site-config";

interface AnimatedTestimonialsProps {
  badge?: string;
  title?: string;
  description?: string;
  items?: Testimonial[];
}

export function AnimatedTestimonials({
  badge = siteConfig.testimonials.badge,
  title = siteConfig.testimonials.title,
  description = siteConfig.testimonials.description,
  items = siteConfig.testimonials.items,
}: AnimatedTestimonialsProps) {
  // Divide os testimonials em três colunas
  const firstColumn = items.slice(0, 3);
  const secondColumn = items.slice(3, 6);
  const thirdColumn = items.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div className="border border-border bg-muted/50 py-1 px-4 rounded-lg">
              {badge}
            </div>
          </div>

          {/* Título */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-foreground">
            {title}
          </h2>

          {/* Descrição */}
          <p className="text-center mt-5 text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Colunas de testimonials com scroll infinito */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
