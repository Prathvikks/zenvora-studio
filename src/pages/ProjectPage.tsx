import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { PlaceholderVideo } from "@/components/common/PlaceholderVideo";
import { PlaceholderVisual } from "@/components/common/PlaceholderVisual";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useDocumentMeta(
    project
      ? `${project.brand} — ${project.product} | Zenvora Studio`
      : "Project | Zenvora Studio",
    project
      ? `${project.status}: ${project.excerpt}`
      : "Independent concept from Zenvora Studio.",
  );

  if (!project) {
    return <NotFoundPage />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <header className="border-b border-charcoal/10">
        <Container className="grid items-end gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-taupe">
              {project.status} · {project.yearLabel}
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
              {project.brand}
            </h1>
            <p className="mt-3 text-lg text-charcoal/75">{project.product}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-taupe">
              {project.category}
            </p>
          </div>
          
          {project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={`${project.brand} hero`} 
              className="aspect-4/3 w-full object-cover"
            />
          ) : (
            <PlaceholderVisual
              variant={project.gallery[0]?.variant ?? "still"}
              label={`${project.brand} hero placeholder`}
              className="aspect-4/3 w-full"
            />
          )}
        </Container>
      </header>

      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <section>
          <h2 className="font-serif text-3xl">The product</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            {project.description}
          </p>
        </section>
        <section>
          <h2 className="font-serif text-3xl">Creative direction</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            {project.creativeDirection}
          </p>
        </section>
      </Container>

      <Container className="pb-16">
        <h2 className="mb-6 font-serif text-3xl">Gallery</h2>
        <ProjectGallery items={project.gallery} brand={project.brand} />
      </Container>

      <section className="border-y border-charcoal/10 bg-charcoal py-16 text-ivory">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-beige">Spec film</p>
            <h2 className="mt-3 font-serif text-4xl">Moving image</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70">
              {project.videoSrc 
                ? `A ${project.videoLabel} spec creative.`
                : "The player is prepared for a local MP4. Until a file is added, this remains a labelled placeholder — not a generated product video."}
            </p>
          </div>
          {project.videoSrc ? (
            <AutoPlayVideo src={project.videoSrc} />
          ) : (
            <PlaceholderVideo title={project.videoLabel} />
          )}
        </Container>
      </section>

      <Container className="py-16">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border border-charcoal/10 bg-white/50 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl">A similar film for your product?</h2>
            <p className="mt-2 max-w-md text-sm text-charcoal/70">
              This page is spec creative. If the direction feels right for a live brief,
              start an enquiry.
            </p>
          </div>
          <Button to="/#contact">Enquire about a similar project</Button>
        </div>
        <ProjectNav previous={previous} next={next} />
      </Container>
    </article>
  );
}

// NEW COMPONENT: Handles autoplay on scroll
function AutoPlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play when 50% of the video is visible
            video.play().catch((error) => {
              console.log("Autoplay prevented by browser:", error);
            });
          } else {
            // Pause when scrolled away
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // 0.5 means 50% of the element must be in view
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-2xl border border-ivory/20 bg-black">
      <video
        ref={videoRef}
        src={src}
        muted // MUST BE MUTED FOR AUTOPLAY
        playsInline
        loop
        controls // Keep controls so they can unmute
        className="w-full h-auto aspect-[9/16] object-cover"
      />
    </div>
  );
}