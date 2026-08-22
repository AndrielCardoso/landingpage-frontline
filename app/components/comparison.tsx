"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonFeatures = [
  {
    name: "Software Online em Nuvem e 100% Adequado à LGPD",
    frontline: true,
    others: true,
  },
  {
    name: "Registro Eletrônico de Atendimentos (DSF) e Prontuário",
    frontline: true,
    others: true,
  },
  {
    name: "Bula Inteligente com Alertas de Interações Medicamentosas",
    frontline: true,
    others: false,
  },
  {
    name: "Cuidado Complementar (Sugestões Inteligentes de Upsell/Cross-sell Ético)",
    frontline: true,
    others: false,
  },
  {
    name: "Anamneses Automáticas e Procedimentos Clínicos Guiados",
    frontline: true,
    others: false,
  },
  {
    name: "Inteligência Artificial Integrada diretamente no WhatsApp (Frontline IA)",
    frontline: true,
    others: false,
  },
  {
    name: "Totem de Autoatendimento para Triagem de Pacientes",
    frontline: true,
    others: false,
  },
  {
    name: "Relatórios, Painéis Avançados e Gestão para Redes (BI)",
    frontline: true,
    others: false,
  },
  {
    name: "Foco em Rentabilidade Rápida e Treinamento de Balconistas",
    frontline: true,
    others: false,
  },
  {
    name: "Suporte, Consultoria e Acompanhamento Dedicado ao seu Negócio",
    frontline: true,
    others: false,
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Por que o Frontline é a{" "}
            <span className="text-[#0066FF]">melhor e mais preparada</span>{" "}
            plataforma para sua farmácia?
          </h2>
          <p className="text-lg text-[#4B5563]">
            Compare e entenda por que milhares de gestores estão migrando para o
            ecossistema definitivo de decisão clínica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <div className="p-6 flex items-center font-bold text-[#111827] uppercase tracking-wider text-sm">
                Funcionalidades
              </div>
              <div className="p-6 flex items-center justify-center border-l border-[#E5E7EB] bg-white">
                <span className="text-2xl font-black text-[#111827]">
                  Frontline <span className="text-[#0066FF]">Help</span>
                </span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-[#E5E7EB] font-bold text-[#4B5563] text-center">
                Outras Plataformas
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#E5E7EB]">
              {comparisonFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[2fr_1fr_1fr] hover:bg-[#F9FAFB]/50 transition-colors"
                >
                  <div className="p-6 flex items-center font-medium text-[#4B5563]">
                    {feature.name}
                  </div>
                  <div className="p-6 flex items-center justify-center border-l border-[#E5E7EB] bg-white">
                    {feature.frontline ? (
                      <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                    ) : (
                      <XCircle className="w-8 h-8 text-[#9CA3AF]" />
                    )}
                  </div>
                  <div className="p-6 flex items-center justify-center border-l border-[#E5E7EB]">
                    {feature.others ? (
                      <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                    ) : (
                      <XCircle className="w-8 h-8 text-[#9CA3AF]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
