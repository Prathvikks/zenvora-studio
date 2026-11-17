import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

export function Hero() {
  return (
    <section className="border-b border-charcoal/10">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-taupe">
            AI Creative Advertising Studio
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
            Make your product impossible to ignore.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/75 sm:text-lg">
            AI-powered product advertising that combines creative storytelling,
            cinematic visuals and short-form video to bring brands to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/#work">Explore Our Work</Button>
            <Button to="/#contact" variant="secondary">
              Start a Project
            </Button>
          </div>
        </div>
        <div className="relative">
          {/* Using Image 6 for the hero */}
          <img
            src="/work/lumiere-beauty/l6.png"
            alt="Lumière Beauty Campaign"
            className="aspect-4/5 w-full min-h-[320px] object-cover sm:min-h-[420px] shadow-2xl"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-taupe">
            Lumière Beauty · Spec Campaign
          </p>
        </div>
      </Container>
    </section>
  );
}