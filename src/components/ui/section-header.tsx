import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  icon?: LucideIcon;
  className?: string;
  animated?: boolean;
}

/**
 * SectionHeader Component
 *
 * Standardized section header used across landing pages.
 * Eliminates code duplication (was repeated 12+ times).
 *
 * @param badge - Small uppercase label (e.g., "DEPOIMENTOS")
 * @param title - Main heading (can include highlighted spans)
 * @param description - Optional description paragraph
 * @param icon - Optional Lucide icon component
 * @param className - Additional CSS classes
 * @param animated - Enable fade-in animation (default: true)
 *
 * @example
 * <SectionHeader
 *   badge="Depoimentos"
 *   title={<>O que os alunos <span className="text-gradient-cyan">falam</span></>}
 *   description="Veja os resultados reais de quem aplicou o método"
 *   icon={MessageCircle}
 * />
 */
export function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
  className,
  animated = true,
}: SectionHeaderProps) {
  const content = (
    <div className={cn("text-center space-y-4", className)}>
      {/* Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider border border-border bg-muted/50 py-1 px-4 rounded-lg">
          {Icon && <Icon className="w-5 h-5" />}
          {badge}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  );
}
