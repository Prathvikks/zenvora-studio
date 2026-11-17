import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lumiere-beauty",
    brand: "Lumière Beauty",
    product: "Radiant Skin Serum",
    category: "Beauty & Skincare",
    yearLabel: "Spec 01",
    status: "Independent Concept",
    featuredSize: "large",
    heroImage: "/work/lumiere-beauty/l1.png",
    excerpt: "A quiet film language for a serum that treats light as a material.",
    description:
      "Lumière Beauty is an independent concept for a premium skincare launch. The brief was to build a complete advertising visual system for a Radiant Skin Serum — one that feels editorial, calm and expensive without relying on hard-sell claims. The result is a seven-image campaign and a short-form vertical video built around a single restrained palette: champagne beige, ivory and soft gold. Frosted glass, natural light and botanical details carry the product across hero, macro, lifestyle and in-use contexts while keeping the packaging and brand world consistent.",
    creativeDirection:
      "The visual language is luxury skincare editorial: soft natural lighting, elegant serif typography, white flowers and subtle botanical elements. Every frame is composed to feel quiet and deliberate — product-first, with human warmth introduced only where it supports the story. The serum sits in negative space rather than competing for it; motion is slow and the palette never breaks. Ingredient-inspired elements and benefit language in this concept are creative placeholders, not verified formula claims.",
    gallery: [
      { id: "l1", label: "Main product hero", variant: "lumiere", image: "/work/lumiere-beauty/l1.png", caption: "Frosted serum bottle with gold dropper cap, set on luxury stone with a white flower. The anchor image for the campaign." },
      { id: "l2", label: "Serum close-up", variant: "texture", image: "/work/lumiere-beauty/l2.png", caption: "Macro detail of the dropper and golden serum texture against frosted glass." },
      { id: "l3", label: "Luxury lifestyle campaign", variant: "still", image: "/work/lumiere-beauty/l3.png", caption: "The serum in a premium spa-vanity setting with towels, candles, flowers and marble." },
      { id: "l4", label: "Ingredient-inspired campaign", variant: "texture", image: "/work/lumiere-beauty/l4.png", caption: "Golden serum textures and botanical elements — an ingredient-led creative composition." },
      { id: "l5", label: "Product flat lay", variant: "frame", image: "/work/lumiere-beauty/l5.png", caption: "Top-down arrangement of the serum, packaging, skincare accessories and gold details." },
      { id: "l6", label: "Product-in-use lifestyle", variant: "still", image: "/work/lumiere-beauty/l6.png", caption: "A woman applying the serum naturally to her cheek while holding the bottle." },
      { id: "l7", label: "Final campaign advertisement", variant: "lumiere", image: "/work/lumiere-beauty/l7.png", caption: "Satin, white flowers and the serum bottle with the headline: “Radiant Skin Starts Here.”" },
    ],
    videoSrc: "/videos/lumiere-video.mp4",
    videoLabel: "Lumière Beauty — Radiant Skin Serum (9:16)",
  },
  {
    slug: "veyron-athletics",
    brand: "Veyron Athletics",
    product: "Performance Sneakers",
    category: "Fashion & Apparel",
    yearLabel: "Spec 02",
    status: "Independent Concept",
    featuredSize: "medium",
    heroImage: "/work/veyron-athletics/v1.png",
    excerpt: "Angular product cinema for a performance silhouette.",
    description:
      "Veyron Athletics is a fictional performance label. The sneaker is treated as architecture: sole geometry, mesh, and a colourway held to charcoal and taupe. This concept is written for a brand that wants energy without shouting — athletic, but edited.",
    creativeDirection:
      "Camera language is structural. Low angles, hard shadows, and rhythm that follows stride rather than a beat drop. The shoe is isolated against deep charcoal fields, with brief cuts to material close-ups. UGC-style variants would keep the same geometry, just looser in the hand of the wearer.",
    gallery: [
      { id: "v1", label: "Hero silhouette", variant: "veyron", image: "/work/veyron-athletics/v1.png", caption: "Hero silhouette against deep charcoal." },
      { id: "v2", label: "Sole geometry", variant: "frame", image: "/work/veyron-athletics/v2.png", caption: "Sole and midsole geometry study." },
      { id: "v3", label: "Material", variant: "texture", image: "/work/veyron-athletics/v3.png", caption: "Mesh and stitching texture plate." },
      { id: "v4", label: "Stride still", variant: "still", image: "/work/veyron-athletics/v4.png", caption: "Dynamic motion still for social crops." },
      { id: "v5", label: "Desk context", variant: "still", image: "/work/veyron-athletics/v5.png", caption: "Premium lifestyle and desk context." },
      { id: "v6", label: "Flat lay", variant: "frame", image: "/work/veyron-athletics/v6.png", caption: "Top-down flat lay with lifestyle accessories." },
      { id: "v7", label: "Campaign mark", variant: "veyron", image: "/work/veyron-athletics/v7.png", caption: "Final campaign graphic with the headline: 'Engineered for the Edge.'" },
    ],
    videoSrc: "/videos/veyron-video.mp4",
    videoLabel: "Veyron Athletics — Performance Sneakers (9:16)",
  },
  {
    slug: "emberbite",
    brand: "EmberBite",
    product: "Gourmet Burger",
    category: "Food",
    yearLabel: "Spec 03",
    status: "Independent Concept",
    featuredSize: "medium",
    heroImage: "/work/emberbite/e1.png",
    excerpt: "Heat, crumb and close-up craft for a gourmet burger.",
    description:
      "EmberBite is a fictional food brand built around a single gourmet burger. The work is about appetite and craft: toasted crumb, melted edges, and a composition that feels photographed for a serious restaurant as much as a social ad.",
    creativeDirection:
      "Lighting is warm but not glossy-fast-food. We stay in the studio palette — ivory linen, taupe shadow, charcoal plate — and let steam, crumb and glaze do the talking. Cuts are close. The sandwich is assembled with patience. The hook is texture, not a logo sting.",
    gallery: [
      { id: "e1", label: "Hero plate", variant: "emberbite", image: "/work/emberbite/e1.png", caption: "Hero plated composition." },
      { id: "e2", label: "Crumb study", variant: "texture", image: "/work/emberbite/e2.png", caption: "Crumb and glaze close-up." },
      { id: "e3", label: "Assembly", variant: "still", image: "/work/emberbite/e3.png", caption: "Assembly still for mid-funnel cuts." },
      { id: "e4", label: "Tabletop", variant: "frame", image: "/work/emberbite/e4.png", caption: "Tabletop atmosphere." },
      { id: "e5", label: "Macro heat", variant: "emberbite", image: "/work/emberbite/e5.png", caption: "Macro heat and melt study." },
      { id: "e6", label: "The pull-apart", variant: "still", image: "/work/emberbite/e6.png", caption: "Dynamic pull-apart showing the juicy interior." },
      { id: "e7", label: "Campaign mark", variant: "emberbite", image: "/work/emberbite/e7.png", caption: "Final campaign graphic with the headline: 'Crafted to Crave.'" },
    ],
    videoSrc: "/videos/emberbite-video.mp4",
    videoLabel: "EmberBite — Gourmet Burger (9:16)",
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}