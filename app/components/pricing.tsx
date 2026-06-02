"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ShieldCheck, Zap, Users, BookOpen } from "lucide-react";

const teamBenefits = [
  {
    icon: ShieldCheck,
    title: "Segurança no Balcão",
    desc: "Apoio clínico constante para que sua equipe evite erros de dispensação e interações perigosas."
  },
  {
    icon: Zap,
    title: "Atendimento Ágil",
    desc: "Acesso rápido a calculadoras, guias e bulas. Ninguém perde tempo pesquisando no Google."
  },
  {
    icon: Users,
    title: "Padronização de Equipe",
    desc: "Todo farmacêutico do seu time terá o mesmo nível de excelência no atendimento ao paciente."
  },
  {
    icon: BookOpen,
    title: "Onboarding Simplificado",
    desc: "Novos colaboradores aprendem os protocolos clínicos da farmácia muito mais rápido."
  }
];

export const PricingSection = () => {
  return (
    <section id="empresas" className="py-20 relative">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262630] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Capacite a sua equipe.
              <br />
              <span className="text-[#9CA3AF]">Escale sua farmácia.</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">
              O Frontline não é só para o paciente. É a ferramenta definitiva para dar confiança aos seus farmacêuticos e garantir que sua farmácia entregue um serviço de excelência, independente de quem esteja no balcão.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {teamBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-[#141419] border border-[#262630] flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center p-6 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 to-transparent border border-[#0066FF]/20"
          >
            <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
              <h4 className="text-lg font-bold text-white mb-1">Quer levar o Frontline para sua equipe?</h4>
              <p className="text-sm text-[#9CA3AF]">Fale com nosso time e descubra como podemos ajudar.</p>
            </div>
            <a
              href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20como%20o%20Frontline%20pode%20ajudar%20minha%20equipe."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-all w-full sm:w-auto shrink-0 shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com um consultor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
