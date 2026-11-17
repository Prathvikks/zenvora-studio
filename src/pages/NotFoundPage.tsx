import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta(
    "Page not found — Zenvora Studio",
    "The page you requested is not part of the Zenvora Studio site.",
  );

  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24">
      <p className="text-xs uppercase tracking-[0.28em] text-taupe">404</p>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl">This page has not been made.</h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/75">
        The address may be mistyped, or the work has not been published. Return to the
        studio home, or look through selected concepts.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/">Home</Button>
        <Button to="/#work" variant="secondary">
          Selected work
        </Button>
      </div>
    </Container>
  );
}
