import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { navItems, STUDIO_NAME } from "@/data/site";
import { useLockBody } from "@/hooks/useLockBody";

export function Navbar() {
  const [open, setOpen] = useState(false);
  useLockBody(open);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-ivory/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight text-charcoal sm:text-2xl"
          onClick={close}
        >
          {STUDIO_NAME}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm tracking-wide text-charcoal/70 transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/#contact">Start a Project</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-charcoal/8 bg-ivory lg:hidden"
        >
          <Container className="flex flex-col gap-2 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="py-2 text-lg text-charcoal"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <Button to="/#contact" className="mt-4" onClick={close}>
              Start a Project
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
