import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Four ways into a film."
            description="Each offering can stand alone or sit inside a wider campaign. The discipline is the same: a clear product story, a considered frame, a cut that works in a feed."
          />
        </Reveal>
        
        {/* Added border classes for clean lines */}
        <div className="mt-12 grid gap-px bg-charcoal/10 sm:grid-cols-2 border border-charcoal/10">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05} className="h-full">
              <article className="h-full bg-ivory p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-taupe">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-charcoal">{service.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/75">
                  {service.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}