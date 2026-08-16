"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ShieldCheck, Zap, Users, BookOpen } from "lucide-react";

const teamBenefits = [
  {
    icon: ShieldCheck,
    title: "Indicação Segura",
    desc: "Apoio clínico constante para que sua equipe oriente o paciente com total confiança."
  },
  {
    icon: Zap,
    title: "Atendimento Qualificado",
    desc: "A Bula Inteligente dá o roteiro exato para a equipe resolver dúvidas e encantar o cliente."
  },
  {
    icon: Users,
    title: "Relacionamento de Valor",
    desc: "Todo farmacêutico da loja passa a criar um vínculo duradouro de saúde com os pacientes."
  },
  {
    icon: BookOpen,
    title: "Facilidade de Uso",
    desc: "Novos colaboradores aprendem a utilizar o sistema e gerar valor em poucas horas, sem burocracia."
  }
];

export const PricingSection = () => {
  return (
    <section id="empresas" className="py-20 relative">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Equipe informada.
              <br />
              <span className="text-[#4B5563]">Atendimento qualificado.</span>
            </h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              O Frontline é o parceiro de todo balconista e farmacêutico. Uma ferramenta focada em dar as informações certas no momento certo, facilitando a vida no balcão e aproximando a farmácia do paciente.
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
                className="p-5 rounded-xl bg-white border border-[#E5E7EB] flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="text-[#111827] font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{benefit.desc}</p>
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
              <h4 className="text-lg font-bold text-[#111827] mb-1">Quer levar o Frontline para sua equipe?</h4>
              <p className="text-sm text-[#4B5563]">Fale com nosso time e descubra como podemos ajudar.</p>
            </div>
            <a
              href="https://wa.me/5547996085407?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20como%20o%20Frontline%20pode%20ajudar%20minha%20equipe."
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
