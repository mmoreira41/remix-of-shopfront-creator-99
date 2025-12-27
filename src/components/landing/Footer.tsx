import { ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card/30 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Fórmula do</span>
            <span className="bg-gradient-to-r from-cyan to-teal-400 text-primary-foreground px-2 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
              <ShoppingCart className="w-4 h-4" />
              Shop
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            Fórmula da IA – Copyright © 2025. Todos direitos reservados.
          </p>

          {/* Decorative elements */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10" />
            <div className="w-8 h-8 rounded-full bg-accent/10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
