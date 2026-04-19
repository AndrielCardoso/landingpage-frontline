import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about";
import { Features } from "./components/features";
import { WhiteLabelSection } from "./components/whitelabel";
import { StepsSection } from "./components/steps";
import { TrustSection } from "./components/trust";
import { AdvantagesSection } from "./components/advantages";
import { Footer } from "./components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontline | Decisão Clínica Inteligente para Farmácias",
  description: "A plataforma definitiva para farmácias: prontuário digital, fluxogramas inteligentes e segurança total no balcão e no autoatendimento.",
  keywords: ["farmácia", "decisão clínica", "prontuário digital", "dose calculator", "healthcare software"],
  authors: [{ name: "Frontline Team" }],
  openGraph: {
    title: "Frontline | Decisão Clínica Inteligente",
    description: "O poder da decisão clínica na ponta dos seus dedos.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <AboutSection />
      <Features />
      <WhiteLabelSection />
      <StepsSection />
      <TrustSection />
      <AdvantagesSection />
      <Footer />
    </main>
  );
}
