type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs uppercase tracking-[0.28em] ${dark ? "text-beige" : "text-taupe"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl font-medium tracking-tight sm:text-5xl ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-ivory/70" : "text-charcoal/75"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
