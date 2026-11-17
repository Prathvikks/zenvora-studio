import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Introduction() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="The Studio"
            title="A quieter kind of product film."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
            <p>
              Zenvora Studio is an emerging AI creative advertising studio for small
              US e-commerce and direct-to-consumer brands. We make short-form product
              films that feel considered — cinematic enough to hold attention, precise
              enough to sell.
            </p>
            <p>
              The approach is editorial rather than theatrical. We start with the
              object, the materials and the story a brand actually wants to tell, then
              direct AI-assisted production with the same standards we would bring to a
              still-life set: light, pacing, crop and restraint.
            </p>
            <p>
              The work on this site is independent concept and spec creative. It is
              shown to illustrate direction, not as a record of commercial campaigns.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
