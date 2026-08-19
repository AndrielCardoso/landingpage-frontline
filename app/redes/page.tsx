"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FaqSection } from "../components/faq";
import { Building2, MessageCircle, BarChart3, Users, Network, Key } from "lucide-react";

const corporateBenefits = [
  {
    icon: Network,
    title: "Padronização de Rede",
    desc: "Suas 5 ou 500 lojas atendendo com o mesmo nível de excelência clínica e gerando resultados sob os mesmos protocolos."
  },
  {
    icon: Users,
    title: "Onboarding em Massa",
    desc: "Integre o sistema à rotina de centenas de colaboradores simultaneamente com treinamentos e implantação dedicados."
  },
  {
    icon: BarChart3,
    title: "Painel Gestor Centralizado",
    desc: "Acompanhe métricas, adesão de equipe e conversão de serviços farmacêuticos de cada unidade em tempo real."
  },
  {
    icon: Key,
    title: "Implantação Customizada",
    desc: "Equipe de Sucesso do Cliente exclusiva para redes, garantindo que o software se adeque à realidade da sua operação."
  }
];

export default function RedesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      <Header />
      
      {/* Corporate Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066FF]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] text-white text-sm font-bold uppercase tracking-wider mb-8">
            <Building2 className="w-4 h-4" />
            Frontline Enterprise
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#111827] mb-6 leading-tight">
            Escalabilidade clínica para
            <br className="hidden md:block" />
            <span className="text-[#0066FF]">Redes de Farmácias.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto mb-10">
            A padronização que você precisa para crescer sem perder a qualidade no balcão. Soluções customizadas de implantação, treinamento e gestão para operações com múltiplas unidades.
          </p>

          <a
            href="https://wa.me/5547996085407?text=Olá!%20Sou%20gestor%20de%20uma%20rede%20e%20quero%20falar%20com%20um%20especialista%20do%20Frontline."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#111827] text-white font-bold text-lg hover:bg-[#374151] transition-all shadow-xl"
          >
            Falar com Especialista em Redes
            <MessageCircle className="w-5 h-5 ml-1" />
          </a>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-4">
              Feito para aguentar o volume do seu negócio
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
              Sabemos que mudar o processo de dezenas de lojas não é simples. Por isso construímos uma infraestrutura preparada para o mercado corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-sm hover:border-[#0066FF]/30 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">{benefit.title}</h3>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-[#111827] text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Pronto para padronizar sua rede?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Agende uma reunião de diagnóstico com nosso time de implantação corporativa e desenharemos o rollout perfeito para as suas unidades.
          </p>
          <a
            href="https://wa.me/5547996085407?text=Olá!%20Sou%20gestor%20de%20uma%20rede%20e%20quero%20agendar%20uma%20reunião%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold text-lg hover:bg-[#0052CC] transition-all"
          >
            Agendar Reunião Corporativa
            <MessageCircle className="w-5 h-5 ml-1" />
          </a>
        </div>
      </section>

      {/* Reuse FAQ since objections apply, but normally we might have a specific FAQ */}
      <FaqSection />
      
      <Footer />
    </main>
  );
}
