import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PlaceholderVisual } from "@/components/common/PlaceholderVisual";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/data/projects";

const sizeClass: Record<string, string> = {
  large: "md:col-span-8 md:row-span-2 min-h-[420px]",
  medium: "md:col-span-4 min-h-[280px]",
  small: "md:col-span-4 min-h-[240px]",
};

export function SelectedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-charcoal/10 bg-white/40 py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Independent concepts, directed as if they were live."
            description="Three fictional product studies, each presented as an independent concept — showcasing how Zenvora approaches beauty, apparel, and food."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.04}
              className={sizeClass[project.featuredSize]}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group relative flex h-full min-h-[240px] flex-col overflow-hidden bg-ivory"
              >
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={`${project.brand} visual`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <PlaceholderVisual
                    variant={project.gallery[0].variant}
                    label={`${project.brand} visual placeholder`}
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-charcoal/75 via-charcoal/25 to-charcoal/5" />

                <div className="relative mt-auto flex items-end justify-between gap-4 p-5 text-ivory">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/90">
                      {project.category} · Independent Concept
                    </p>

                    <h3 className="mt-1 font-serif text-2xl">
                      {project.brand}
                    </h3>

                    <p className="text-sm text-ivory/80">
                      {project.product}
                    </p>
                  </div>

                  <ArrowUpRight className="mb-1 h-5 w-5 shrink-0 opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}