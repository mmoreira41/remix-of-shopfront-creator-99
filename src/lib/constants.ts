/**
 * ANIMATION CONSTANTS
 * Centralized animation timing values for consistency
 */

export const ANIMATION_DURATION = {
  INSTANT: 0.3,
  FAST: 0.5,
  NORMAL: 0.8,
  SLOW: 1,
  VERY_SLOW: 1.2,
  EXTRA_SLOW: 2.4,
  FLOAT: 12,
} as const;

export const ANIMATION_DELAY = {
  NONE: 0,
  INSTANT: 0.1,
  SHORT: 0.2,
  SHAPE_1: 0.3,
  MEDIUM: 0.4,
  SHAPE_2: 0.5,
  SHAPE_3: 0.6,
  SHAPE_4: 0.7,
  LONG: 0.8,
  VERY_LONG: 1,
  ICON_1: 1.2,
  ICON_2: 1.4,
  ICON_3: 1.6,
  ICON_4: 1.8,
} as const;

export const TESTIMONIAL_SCROLL_DURATION = {
  COLUMN_1: 15,
  COLUMN_2: 19,
  COLUMN_3: 17,
} as const;

/**
 * GEOMETRIC SHAPE CONSTANTS
 * Dimensions for animated shapes in Hero component
 */

export const SHAPE_DIMENSIONS = {
  LARGE: { width: 600, height: 140 },
  MEDIUM: { width: 500, height: 120 },
  SMALL: { width: 300, height: 80 },
  TINY: { width: 200, height: 60 },
  MINI: { width: 150, height: 40 },
} as const;

export const SHAPE_ROTATION = {
  POSITIVE_SMALL: 12,
  NEGATIVE_SMALL: -8,
  NEGATIVE_MEDIUM: -15,
  POSITIVE_MEDIUM: 20,
  NEGATIVE_LARGE: -25,
} as const;

/**
 * EASING FUNCTIONS
 * Custom easing curves for animations
 */

export const EASING = {
  SMOOTH: [0.25, 0.4, 0.25, 1] as const,
  ELEGANT: [0.23, 0.86, 0.39, 0.96] as const,
  BOUNCE: [0.16, 1, 0.3, 1] as const,
} as const;

/**
 * BREAKPOINTS
 * Consistent breakpoint values
 */

export const BREAKPOINT = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

/**
 * SPACING
 * Common spacing values
 */

export const SPACING = {
  SECTION: 'py-24',
  SECTION_SM: 'py-16',
  CONTAINER: 'container mx-auto px-4 md:px-6',
} as const;

/**
 * COLORS
 * Gradient definitions
 */

export const GRADIENTS = {
  CYAN: 'from-cyan/[0.15]',
  PRIMARY: 'from-primary/[0.15]',
  SECONDARY: 'from-secondary/[0.15]',
  ACCENT: 'from-accent/[0.15]',
  CYAN_STRONG: 'from-cyan/[0.2]',
  INDIGO: 'from-indigo-500/[0.15]',
  ROSE: 'from-rose-500/[0.15]',
  VIOLET: 'from-violet-500/[0.15]',
  AMBER: 'from-amber-500/[0.15]',
} as const;

/**
 * Z-INDEX
 * Layer management
 */

export const Z_INDEX = {
  BACKGROUND: 0,
  BASE: 1,
  CONTENT: 10,
  OVERLAY: 50,
  MODAL: 100,
  TOOLTIP: 1000,
} as const;
