"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { MessageCircle, Search, FileText, Smartphone, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. A dúvida no balcão",
    desc: "O cliente chega com uma receita complexa, uma interação medicamentosa em potencial ou pedindo indicação de tratamento menor. O colaborador acessa rapidamente a Bula Inteligente do Frontline.",
  },
  {
    icon: FileText,
    title: "2. Informação em Segundos",
    desc: "Em poucos cliques, o sistema entrega posologia, alertas de interações, sugestões de perguntas clínicas e até fluxogramas de decisão. Tudo mastigado e padronizado.",
  },
  {
    icon: Handshake,
    title: "3. Atendimento e Venda Agregada",
    desc: "Com segurança técnica, o colaborador orienta o paciente com excelência e identifica naturalmente oportunidades éticas de venda de suplementos ou correlatos (Upsell/Cross-sell).",
  },
  {
    icon: Smartphone,
    title: "4. Prontuário e Portal do Paciente",
    desc: "Se necessário, o serviço farmacêutico (como aferição de pressão ou glicemia) é registrado na mesma hora, gerando um DSF. O paciente recebe o histórico completo direto no WhatsApp via Frontline Conecta.",
  }
];

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6"
          >
            Como o Frontline atua no <span className="text-[#0066FF]">dia a dia</span> da sua farmácia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto"
          >
            Veja o passo a passo de um atendimento transformado pela nossa tecnologia clínica, sem adicionar burocracia na sua operação.
          </motion.p>
        </div>
      </section>

      {/* Steps with Screenshots */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-5xl space-y-24">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">{step.title}</h2>
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Screenshot Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full"
              >
                <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-[#E5E7EB] shadow-xl overflow-hidden flex flex-col items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[#0066FF]/5 pointer-events-none" />
                  
                  {/* TODO: ADICIONAR SCREENSHOT AQUI - Substitua o bloco abaixo pela tag <img /> do sistema real */}
                  <div className="text-center p-6 relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-[#9CA3AF]" />
                    </div>
                    <p className="text-[#9CA3AF] font-medium text-sm">
                      Espaço reservado para a tela do sistema
                      <br />(Passo {idx + 1})
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 px-6 bg-white border-t border-[#E5E7EB]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-6">
            Quer ver o sistema rodando de verdade?
          </h2>
          <p className="text-lg text-[#4B5563] mb-10">
            Agende uma demonstração ao vivo com um de nossos consultores e descubra como o Frontline se adapta à realidade do seu balcão.
          </p>
          <a
            href="https://wa.me/5547996085407?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20ao%20vivo%20do%20Frontline."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-lg hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)]"
          >
            Agendar Demonstração Gratuita
            <MessageCircle className="w-5 h-5 ml-1" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
