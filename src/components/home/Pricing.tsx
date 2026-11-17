import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { pricingTiers } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Introductory launch prices."
            description="These rates are for the studio’s launch period. They are clearly marked as introductory and may change as capacity grows. Custom work is quoted after a brief."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <article
                className={`flex h-full flex-col border p-8 ${
                  tier.featured
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-charcoal/15 bg-white/50"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.22em] ${
                    tier.featured ? "text-beige" : "text-taupe"
                  }`}
                >
                  {tier.note}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{tier.name}</h3>
                <p className="mt-2 text-2xl tracking-tight">{tier.price}</p>
                <ul className="mt-8 space-y-3 text-sm leading-relaxed">
                  {tier.details.map((detail) => (
                    <li key={detail} className={tier.featured ? "text-ivory/75" : "text-charcoal/75"}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
