import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";

type ProjectNavProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav
      className="grid gap-4 border-t border-charcoal/10 pt-10 sm:grid-cols-2"
      aria-label="Project pagination"
    >
      {previous ? (
        <Link
          to={`/work/${previous.slug}`}
          className="group flex items-start gap-3 py-2"
        >
          <ArrowLeft className="mt-1 h-4 w-4" />
          <span>
            <span className="block text-xs uppercase tracking-[0.2em] text-taupe">Previous</span>
            <span className="mt-1 block font-serif text-2xl group-hover:text-taupe">
              {previous.brand}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={`/work/${next.slug}`}
          className="group flex items-start justify-end gap-3 py-2 text-right"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.2em] text-taupe">Next</span>
            <span className="mt-1 block font-serif text-2xl group-hover:text-taupe">
              {next.brand}
            </span>
          </span>
          <ArrowRight className="mt-1 h-4 w-4" />
        </Link>
      ) : null}
    </nav>
  );
}
