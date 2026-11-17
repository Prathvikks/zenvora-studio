import type {
  FaqItem,
  NavItem,
  PricingTier,
  ProcessStep,
} from "@/types";

export const STUDIO_NAME = "Zenvora Studio";
export const STUDIO_EMAIL = "zenvorastudio29@gmail.com";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const services = [
  {
    title: "AI UGC-style Video Ads",
    summary: "Short, conversational films that feel native to social feeds — directed with a clear product story rather than a generic template.",
  },
  {
    title: "Product Showcase Videos",
    summary: "Cinematic still-life motion that lets materials, form and function occupy the frame with calm, editorial pacing.",
  },
  {
    title: "AI Poster Creation",
    summary: "Striking, high-end static visuals and poster designs generated for campaign launches, product drops, and brand awareness.",
  },
  {
    title: "AI Social Media Posts",
    summary: "Scroll-stopping, on-brand content tailored for Instagram and TikTok feeds, maintaining visual consistency across all touchpoints.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    summary:
      "We study the product, audience and existing brand language. A brief, not a questionnaire marathon.",
  },
  {
    number: "02",
    title: "Concept",
    summary:
      "One or more creative directions are shaped: tone, framing, pacing and the story the product should tell.",
  },
  {
    number: "03",
    title: "Create",
    summary:
      "We produce the films with AI-assisted tools under studio direction, then edit for rhythm and commercial clarity.",
  },
  {
    number: "04",
    title: "Refine",
    summary:
      "Revisions are treated as craft, not an afterthought. Feedback is folded in with the same visual standard.",
  },
  {
    number: "05",
    title: "Deliver",
    summary:
      "Finished files, typically 9:16, ready for social placement — with room to extend into additional cuts if needed.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Ad Trial",
    price: "$25",
    note: "Introductory launch price",
    details: [
      "One 10–15 second video",
      "One concept",
      "Vertical 9:16",
      "One revision",
    ],
  },
  {
    name: "Creative Starter Pack",
    price: "$100",
    note: "Introductory launch price",
    featured: true,
    details: [
      "Five 10–15 second videos",
      "Different creative directions",
      "Vertical 9:16",
      "One revision per video",
    ],
  },
  {
    name: "Custom Creative Package",
    price: "Custom quote",
    note: "Scoped to your campaign",
    details: [
      "Volume, formats and campaign thinking as required",
      "Additional revisions and cuts available",
      "Direction aligned to a broader launch or always-on plan",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What do clients receive?",
    answer:
      "Finished video files in the agreed format — typically vertical 9:16 — plus the revisions included in the selected package. Files are prepared for social placement. Still frames can be discussed if they are part of the brief.",
  },
  {
    question: "Do clients need to ship products?",
    answer:
      "No. Production does not require a physical product to be sent. We work from product photography, website links, packaging details and brand guidelines you already have.",
  },
  {
    question: "How long does production take?",
    answer:
      "Most introductory packages are completed within one to two weeks, depending on briefing completeness and revision timing. Custom work is scheduled after the scope is confirmed.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Yes. The Single Ad Trial includes one revision. The Creative Starter Pack includes one revision per video. Additional rounds can be quoted if the work needs to go further.",
  },
  {
    question: "Can clients use the content in social media ads?",
    answer:
      "Yes. The work is created for social media advertising. You remain responsible for platform policies, claims on pack, and any usage rights attached to music or third-party assets you supply.",
  },
  {
    question: "Does Zenvora work with small businesses?",
    answer:
      "Yes. The studio is built for small US e-commerce and direct-to-consumer brands that want considered product films without a traditional production overhead.",
  },
  {
    question: "Is the content AI-generated?",
    answer:
      "The work is AI-assisted and studio-directed. Tools are used as part of a creative process — briefing, art direction, editing and review — rather than as an unattended generator.",
  },
];

export const industries = [
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Food",
  "Beverages",
  "Tech & Gadgets",
  "Lifestyle & Home",
  "Fitness & Wellness",
  "Other",
];

export const serviceOptions = [
  "AI UGC-style Video Ads",
  "Product Showcase Videos",
  "AI Poster Creation",
  "AI Social Media Posts",
  "Not sure yet",
];

export const videoCountOptions = ["1", "5", "10+", "Not sure yet"];