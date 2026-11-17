
import type { PlaceholderVariant } from "@/types";

type PlaceholderVisualProps = {
  variant: PlaceholderVariant;
  label: string;
  className?: string;
  decorative?: boolean;
  showPlaceholderText?: boolean;
};

const variantClasses: Record<PlaceholderVariant, string> = {
  lumiere: "from-[#efe6d8] via-[#d9c8b3] to-[#cbb79b]",
  veyron: "from-[#302e2b] via-[#242321] to-[#4a433b]",
  emberbite: "from-[#c4a88a] via-[#d9c8b3] to-[#8a735c]",
  nexora: "from-[#2c2a27] via-[#3d3a35] to-[#d9c8b3]",
  frosty: "from-[#f7f3ec] via-[#e5d8c6] to-[#b9a58d]",
  kinfolk: "from-[#e8dfd1] via-[#d9c8b3] to-[#9a8770]",
  vitalis: "from-[#3a3733] via-[#776653] to-[#d9c8b3]",
  hero: "from-[#f3eee5] via-[#d9c8b3] to-[#302e2b]",
  still: "from-[#f3eee5] to-[#d9c8b3]",
  frame: "from-[#302e2b] to-[#776653]",
  texture: "from-[#d9c8b3] via-[#f3eee5] to-[#776653]",
};

export function PlaceholderVisual({
  variant,
  label,
  className = "",
  decorative = false,
  showPlaceholderText = true,
}: PlaceholderVisualProps) {
  const dark =
    variant === "veyron" ||
    variant === "nexora" ||
    variant === "frame" ||
    variant === "vitalis";

  return (
    <div
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={`relative overflow-hidden bg-linear-to-br ${variantClasses[variant]} ${className}`}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        <div className="absolute -left-8 top-8 h-40 w-40 rounded-full border border-charcoal/20" />
        <div className="absolute right-6 top-10 h-24 w-24 rounded-full bg-ivory/30" />
        <div className="absolute bottom-8 left-1/4 h-px w-1/2 bg-charcoal/20" />
        <div className="absolute inset-y-8 right-1/3 w-px bg-charcoal/10" />
        <div className="absolute bottom-10 right-10 h-28 w-20 rounded-[40%_40%_45%_45%] border border-charcoal/25" />
      </div>

      <div className="absolute inset-3 border border-white/20" />

      {showPlaceholderText && (
        <div
          className={`absolute bottom-4 left-4 right-4 text-[11px] uppercase tracking-[0.22em] ${
            dark ? "text-ivory/80" : "text-charcoal/70"
          }`}
        >
          Visual placeholder
        </div>
      )}
    </div>
  );
}
