"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const beforeItems = [
  "Balconista perde tempo procurando informações na internet",
  "Dúvidas constantes durante o atendimento",
  "Falta de padronização (cada um atende de um jeito)",
  "Histórico do paciente fica disperso ou não existe",
  "Dificuldade burocrática para registrar serviços",
  "Oportunidades de venda agregada são ignoradas"
];

const afterItems = [
  "Informação centralizada na Bula Inteligente em segundos",
  "Equipe extremamente segura e confiante",
  "Atendimento padronizado em todas as suas lojas",
  "Prontuário integrado direto com o WhatsApp do paciente",
  "Declarações de serviços (DSF) geradas em um clique",
  "Identificação natural de oportunidades de vendas"
];

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 relative bg-[#FAFAFA]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              O atendimento com e sem
              <br />
              <span className="text-[#0066FF]">o Frontline Help</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Entenda na prática como a nossa plataforma resolve os principais gargalos da rotina do balcão.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before (Sem Frontline) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
              <h3 className="text-2xl font-bold text-[#111827] mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-500" />
                </span>
                Sem o Frontline
              </h3>
              
              <ul className="space-y-5">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-[#4B5563] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After (Com Frontline) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-[#0066FF] shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="absolute top-0 left-0 w-full h-2 bg-[#0066FF]" />
              <h3 className="text-2xl font-bold text-[#111827] mb-8 flex items-center gap-3 relative z-10">
                <span className="w-10 h-10 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#0066FF]" />
                </span>
                Com o Frontline
              </h3>
              
              <ul className="space-y-5 relative z-10">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                    <span className="text-[#111827] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
