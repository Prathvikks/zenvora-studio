import { Link } from "react-router-dom";
import { Container } from "@/components/common/Container";
import { navItems, STUDIO_EMAIL, STUDIO_NAME } from "@/data/site";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-serif text-3xl">{STUDIO_NAME}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            AI creative advertising for small US e-commerce and direct-to-consumer brands.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-beige">Studio</p>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-ivory/80 hover:text-ivory">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-beige">Contact</p>
          <a
            href={`mailto:${STUDIO_EMAIL}`}
            className="mt-4 block text-sm text-ivory/80 hover:text-ivory"
          >
            {STUDIO_EMAIL}
          </a>
          <div className="mt-6 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-ivory/60 hover:text-ivory"
                aria-label={`${social.label} placeholder`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="border-t border-ivory/10 py-6 text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
