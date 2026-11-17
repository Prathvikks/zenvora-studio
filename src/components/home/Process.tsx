import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section className="bg-charcoal py-20 text-ivory lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-beige">Process</p>
            <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              From brief to finished file.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              A short sequence, designed so small brands can move without a production committee.
            </p>
          </div>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <li>
                <p className="font-serif text-3xl text-beige">{step.number}</p>
                <h3 className="mt-4 text-lg tracking-wide">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">{step.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
