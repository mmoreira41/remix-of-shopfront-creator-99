import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  EASING,
  SHAPE_DIMENSIONS,
  SHAPE_ROTATION,
  GRADIENTS,
} from "@/lib/constants";

interface ElegantShapeProps {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}

function ElegantShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/[0.08]",
  className = "",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: ANIMATION_DURATION.EXTRA_SLOW,
        delay,
        ease: EASING.ELEGANT,
        opacity: { duration: ANIMATION_DURATION.VERY_SLOW },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: ANIMATION_DURATION.FLOAT,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-pattern">
      {/* Formas geométricas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={ANIMATION_DELAY.SHAPE_1}
          width={SHAPE_DIMENSIONS.LARGE.width}
          height={SHAPE_DIMENSIONS.LARGE.height}
          rotate={SHAPE_ROTATION.POSITIVE_SMALL}
          gradient={GRADIENTS.CYAN}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={ANIMATION_DELAY.SHAPE_2}
          width={SHAPE_DIMENSIONS.MEDIUM.width}
          height={SHAPE_DIMENSIONS.MEDIUM.height}
          rotate={SHAPE_ROTATION.NEGATIVE_MEDIUM}
          gradient={GRADIENTS.PRIMARY}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={ANIMATION_DELAY.MEDIUM}
          width={SHAPE_DIMENSIONS.SMALL.width}
          height={SHAPE_DIMENSIONS.SMALL.height}
          rotate={SHAPE_ROTATION.NEGATIVE_SMALL}
          gradient={GRADIENTS.ACCENT}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={ANIMATION_DELAY.SHAPE_3}
          width={SHAPE_DIMENSIONS.TINY.width}
          height={SHAPE_DIMENSIONS.TINY.height}
          rotate={SHAPE_ROTATION.POSITIVE_MEDIUM}
          gradient={GRADIENTS.CYAN_STRONG}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={ANIMATION_DELAY.SHAPE_4}
          width={SHAPE_DIMENSIONS.MINI.width}
          height={SHAPE_DIMENSIONS.MINI.height}
          rotate={SHAPE_ROTATION.NEGATIVE_LARGE}
          gradient={GRADIENTS.PRIMARY}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION.SLOW, delay: ANIMATION_DELAY.SHORT, ease: EASING.SMOOTH }}
            className="space-y-4 md:space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.MEDIUM }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                Renda Com
              </span>
              <span className="bg-gradient-to-r from-cyan to-teal-400 text-primary-foreground px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                <ShoppingCart className="w-5 h-5" />
                Shop
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.SHAPE_3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Aprenda como fazer{" "}
              <span className="text-gradient-cyan glow-text-cyan">
                mais de R$ 10.000 por mês
              </span>{" "}
              com o TikTok Shop
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.LONG }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Produzindo, Viralizando e Faturando com os seus próprios vídeos dentro do TikTok Shop.{" "}
              <strong className="text-foreground">
                Nada de complicação, anúncios pagos ou segredos!
              </strong>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.VERY_LONG }}
              className="space-y-4"
            >
              <Button variant="cta" size="xl" className="group">
                GARANTIR MINHA VAGA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust badge */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <span>Compra segura</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION.SLOW, delay: ANIMATION_DELAY.MEDIUM, ease: EASING.SMOOTH }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <img
                src={heroImage}
                alt="Gabriel Silva e Keven Borges - Especialistas em TikTok Shop"
                className="relative rounded-2xl shadow-2xl max-w-full h-auto animate-float"
                style={{ maxHeight: "600px" }}
              />
              
              {/* Floating engagement icons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.ICON_1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: ANIMATION_DURATION.FAST, delay: ANIMATION_DELAY.ICON_2 }}
                  className="flex flex-col items-center text-foreground"
                >
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">4.1K</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: ANIMATION_DURATION.FAST, delay: ANIMATION_DELAY.ICON_3 }}
                  className="flex flex-col items-center text-foreground"
                >
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">3.2K</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: ANIMATION_DURATION.FAST, delay: ANIMATION_DELAY.ICON_4 }}
                  className="flex flex-col items-center text-foreground"
                >
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">654</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-background via-background/80 to-transparent">
        <div className="overflow-hidden">
          <div className="flex marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="text-xl font-bold text-muted-foreground/30 whitespace-nowrap flex items-center gap-2">
                  Renda Com <span className="text-primary/30">Shop</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
