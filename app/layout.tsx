import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontlinehelp.com.br"),
  title: {
    default: "Frontline | Decisão Clínica e Inteligência para Farmácias",
    template: "%s | Frontline"
  },
  description: "Acesse a plataforma definitiva de suporte à decisão clínica. Prontuário digital, fluxogramas inteligentes e segurança total para sua farmácia.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  }
};

import { JsonLd } from "./components/json-ld";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
