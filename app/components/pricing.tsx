"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageCircle, Check, Building2, ShieldCheck, Users, BarChart3, Stethoscope } from "lucide-react";

export const PricingSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="planos" className="py-24 md:py-32 relative">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262630] to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
            Para Empresas
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Uma solução completa
            <br />
            <span className="text-[#9CA3AF]">para a sua operação.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {/* B2B - Enterprise */}
          <motion.div
            variants={cardVariants}
            className="p-8 md:p-12 rounded-2xl bg-[#141419] border border-[#0066FF]/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.05)]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Farmácias e Clínicas</h3>
                  </div>
                </div>

                <p className="text-[#9CA3AF] mb-8 leading-relaxed text-lg">
                  Plano personalizado para sua empresa. Experiência completa com gestão de equipe, relatórios avançados e controle total da operação farmacêutica.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Suporte clínico e fluxogramas 24/7",
                    "Prontuários eletrônicos de pacientes",
                    "Gestão de equipe e controle de acessos",
                    "Relatórios de produtividade avançados",
                    "Impressão de laudos e receituários",
                    "Possibilidade de White-Label com sua marca",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      </div>
                      <span className="text-[#EDEDED]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-auto bg-[#0A0A0F] p-8 rounded-2xl border border-[#262630] flex flex-col items-center justify-center min-w-[300px]">
                <ShieldCheck className="w-12 h-12 text-[#0066FF] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Transforme seu balcão</h4>
                <p className="text-sm text-[#9CA3AF] text-center mb-8">
                  Descubra como o Frontline pode padronizar e escalar seus atendimentos.
                </p>
                <a
                  href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20o%20plano%20Empresarial%20do%20Frontline."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-base hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com um consultor
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
