import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-charcoal/10 bg-white/40 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="An emerging studio, stated plainly."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-charcoal/80">
            <p>
              Zenvora Studio is at the beginning of its public work. We are building a
              practice around AI-directed product advertising for small US brands —
              the kind of companies that need films that look like they belong next to
              their product, not next to a template library.
            </p>
            <p>
              We do not list clients, awards or performance figures here. Those will
              appear when they are real. Until then, the site is honest about what it
              is: a studio, a point of view, a set of spec concepts, and an invitation
              to start a first project.
            </p>
            <p>
              If you make something worth looking at — a serum, a shoe, a meal, a
              device, a drink, a room, a bottle — we would like to film it with care.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
