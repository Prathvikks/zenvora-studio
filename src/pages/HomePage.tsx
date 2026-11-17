import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta(
    "Zenvora Studio — AI Creative Advertising",
    "Zenvora Studio is an AI creative advertising studio for small US e-commerce and direct-to-consumer brands. Product films, UGC-style ads and campaign concepts.",
  );

  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <Services />
      <Process />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
