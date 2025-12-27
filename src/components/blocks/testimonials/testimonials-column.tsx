"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/config/site-config";

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  return (
    <div className={cn(className)}>
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
        {[...Array(2)].fill(0).map((_, duplicateIndex) => (
          <React.Fragment key={`duplicate-${duplicateIndex}`}>
            {testimonials.map(({ id, text, image, name, role }) => (
              <div
                className="p-10 rounded-3xl border border-border bg-card text-card-foreground shadow-lg shadow-primary/10 max-w-xs w-full"
                key={`${duplicateIndex}-${id}`}
              >
                <div className="text-card-foreground">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-card-foreground">
                      {name}
                    </div>
                    <div className="leading-5 text-muted-foreground tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
