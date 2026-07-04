import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about";

import { Features } from "./components/features";
import { TotemSection } from "./components/totem";
import { DemoSection } from "./components/demo";
import { StandardizationSection } from "./components/standardization";
import { PricingSection } from "./components/pricing";
import { StepsSection } from "./components/steps";
import { TrustSection } from "./components/trust";
import { Footer } from "./components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontline | Decisão Clínica Inteligente para Farmácias",
  description:
    "A plataforma definitiva para farmácias modernas. Prontuário digital, fluxogramas inteligentes de suporte à decisão e segurança total no autoatendimento clínico.",
  keywords: [
    "farmácia clínica",
    "decisão clínica",
    "prontuário digital farmacêutico",
    "suporte à decisão",
    "fluxogramas inteligentes",
    "segurança clínica",
    "software para farmácias",
    "farmácia hospitalar",
    "gestão farmacêutica",
    "white-label healthcare",
  ],
  authors: [{ name: "Frontline Help", url: "https://frontlinehelp.com.br" }],
  openGraph: {
    title: "Frontline | Decisão Clínica Inteligente",
    description:
      "Transforme sua farmácia com protocolos clínicos automatizados e segurança total.",
    url: "https://frontlinehelp.com.br",
    siteName: "Frontline Help",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Logo_Frontline.png",
        width: 1200,
        height: 630,
        alt: "Frontline Help - Inteligência Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontline | Decisão Clínica Inteligente",
    description:
      "O sistema de suporte à decisão clínica definitivo para farmácias modernas.",
    images: ["/Logo_Frontline.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />

      <Features />
      <TotemSection />
      <DemoSection />
      <StandardizationSection />
      <PricingSection />
      <StepsSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
