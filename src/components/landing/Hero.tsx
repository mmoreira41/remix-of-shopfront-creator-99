import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-pattern">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                Renda Com
              </span>
              <span className="bg-gradient-to-r from-cyan to-teal-400 text-primary-foreground px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                <ShoppingCart className="w-5 h-5" />
                Shop
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Aprenda como fazer{" "}
              <span className="text-gradient-cyan glow-text-cyan">
                mais de R$ 10.000 por mês
              </span>{" "}
              com o TikTok Shop
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Produzindo, Viralizando e Faturando com os seus próprios vídeos dentro do TikTok Shop.{" "}
              <strong className="text-foreground">
                Nada de complicação, anúncios pagos ou segredos!
              </strong>
            </p>

            {/* CTA Button */}
            <div className="space-y-4">
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
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative flex justify-center lg:justify-end">
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
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                <div className="flex flex-col items-center text-foreground">
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">4.1K</span>
                </div>
                <div className="flex flex-col items-center text-foreground">
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">3.2K</span>
                </div>
                <div className="flex flex-col items-center text-foreground">
                  <div className="w-12 h-12 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold mt-1">654</span>
                </div>
              </div>
            </div>
          </div>
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
