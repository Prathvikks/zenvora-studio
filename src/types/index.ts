export type PlaceholderVariant =
  | "lumiere"
  | "veyron"
  | "emberbite"
  | "nexora"
  | "frosty"
  | "kinfolk"
  | "vitalis"
  | "hero"
  | "still"
  | "frame"
  | "texture";

export type GalleryItem = {
  id: string;
  label: string;
  variant: PlaceholderVariant;
  caption: string;
  image?: string; // ADDED
};

export type Project = {
  slug: string;
  brand: string;
  product: string;
  category: string;
  yearLabel: string;
  status: "Independent Concept" | "Spec Creative";
  excerpt: string;
  description: string;
  creativeDirection: string;
  featuredSize: "large" | "medium" | "small";
  gallery: GalleryItem[];
  videoSrc?: string;
  videoLabel: string;
  heroImage?: string; // ADDED
};

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  summary: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
};

export type PricingTier = {
  name: string;
  price: string;
  note: string;
  details: string[];
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  brand: string;
  website: string;
  industry: string;
  service: string;
  videos: string;
  description: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;