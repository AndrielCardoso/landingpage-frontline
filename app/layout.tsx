import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { JsonLd } from "./components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontlinehelp.com.br"),
  title: {
    default: "Frontline | Decisão Clínica e Inteligência para Farmácias",
    template: "%s | Frontline",
  },
  description:
    "Acesse a plataforma definitiva de suporte à decisão clínica. Prontuário digital, fluxogramas inteligentes e segurança total para sua farmácia.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${GeistSans.className} min-h-screen bg-[#0A0A0F] text-[#EDEDED] antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
