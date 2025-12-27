import { z } from "zod";

/**
 * VALIDATION SCHEMAS
 * Runtime validation for site configuration data
 */

export const testimonialSchema = z.object({
  id: z.string().min(1, "Testimonial ID is required"),
  text: z.string().min(10, "Testimonial text must be at least 10 characters"),
  image: z.string().url("Testimonial image must be a valid URL"),
  name: z.string().min(1, "Testimonial name is required"),
  role: z.string().min(1, "Testimonial role is required"),
});

export const siteConfigSchema = z.object({
  name: z.string().min(1, "Site name is required"),
  description: z.string().min(1, "Site description is required"),
  hero: z.object({
    badge: z.string().min(1, "Hero badge is required"),
    title: z.string().min(1, "Hero title is required"),
    subtitle: z.string().min(1, "Hero subtitle is required"),
    description: z.string().min(1, "Hero description is required"),
  }),
  testimonials: z.object({
    badge: z.string().min(1, "Testimonials badge is required"),
    title: z.string().min(1, "Testimonials title is required"),
    description: z.string().min(1, "Testimonials description is required"),
    items: z.array(testimonialSchema).min(1, "At least one testimonial is required"),
  }),
});

/**
 * TYPE INFERENCE
 * TypeScript types inferred from Zod schemas
 */

export type Testimonial = z.infer<typeof testimonialSchema>;
export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = {
  name: "Landing Page Factory",
  description: "Crie landing pages incríveis com componentes modernos e animações fluidas",

  hero: {
    badge: "Design Collective",
    title: "Elevate Your Digital Vision",
    subtitle: "Crafting Exceptional Websites",
    description: "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  },

  testimonials: {
    badge: "Testimonials",
    title: "What our users say",
    description: "See what our customers have to say about us.",
    items: [
      {
        id: "testimonial-1",
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Briana Patton",
        role: "Operations Manager",
      },
      {
        id: "testimonial-2",
        text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Bilal Ahmed",
        role: "IT Manager",
      },
      {
        id: "testimonial-3",
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Saman Malik",
        role: "Customer Support Lead",
      },
      {
        id: "testimonial-4",
        text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Omar Raza",
        role: "CEO",
      },
      {
        id: "testimonial-5",
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Zainab Hussain",
        role: "Project Manager",
      },
      {
        id: "testimonial-6",
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Aliza Khan",
        role: "Business Analyst",
      },
      {
        id: "testimonial-7",
        text: "Our business functions improved with a user-friendly design and positive customer feedback.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
      },
      {
        id: "testimonial-8",
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Sana Sheikh",
        role: "Sales Manager",
      },
      {
        id: "testimonial-9",
        text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Hassan Ali",
        role: "E-commerce Manager",
      },
    ],
  },
};

/**
 * RUNTIME VALIDATION
 * Validates site config on import to catch errors early
 */

try {
  siteConfigSchema.parse(siteConfig);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("❌ Site configuration validation failed:");
    console.error(error.errors);
    throw new Error("Invalid site configuration. Check console for details.");
  }
  throw error;
}
