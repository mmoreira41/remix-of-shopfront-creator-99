/**
 * MOCK DATA WITH UNIQUE IDs
 * Centralized data with proper unique identifiers for React keys
 */

export const bonusesData = [
  { id: "bonus-1", title: "Bonus 1", description: "Description" },
  { id: "bonus-2", title: "Bonus 2", description: "Description" },
  { id: "bonus-3", title: "Bonus 3", description: "Description" },
  { id: "bonus-4", title: "Bonus 4", description: "Description" },
] as const;

export const pillarsData = [
  { id: "pillar-1", title: "Pillar 1", description: "Description" },
  { id: "pillar-2", title: "Pillar 2", description: "Description" },
  { id: "pillar-3", title: "Pillar 3", description: "Description" },
  { id: "pillar-4", title: "Pillar 4", description: "Description" },
  { id: "pillar-5", title: "Pillar 5", description: "Description" },
  { id: "pillar-6", title: "Pillar 6", description: "Description" },
] as const;

export const modulesData = [
  { id: "module-1", title: "Module 1", description: "Description" },
  { id: "module-2", title: "Module 2", description: "Description" },
  { id: "module-3", title: "Module 3", description: "Description" },
] as const;

export const faqData = [
  { id: "faq-1", question: "Question 1?", answer: "Answer 1" },
  { id: "faq-2", question: "Question 2?", answer: "Answer 2" },
  { id: "faq-3", question: "Question 3?", answer: "Answer 3" },
] as const;

export const comparisonData = [
  { id: "comparison-1", feature: "Feature 1", free: true, paid: true },
  { id: "comparison-2", feature: "Feature 2", free: false, paid: true },
] as const;

export const pricingFeaturesData = [
  { id: "pricing-feature-1", text: "Feature 1" },
  { id: "pricing-feature-2", text: "Feature 2" },
  { id: "pricing-feature-3", text: "Feature 3" },
] as const;
