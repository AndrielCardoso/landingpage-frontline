"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Check, Star } from "lucide-react";

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
            Preços
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Comece hoje,
            <br />
            <span className="text-[#9CA3AF]">sem compromisso.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* B2C - Monthly/Annual */}
          <motion.div
            variants={cardVariants}
            className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#141419] border border-[#0066FF]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />
            
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-4 h-4 text-[#0066FF]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                Profissional
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">R$49</span>
                <span className="text-2xl font-bold text-white">,90</span>
                <span className="text-[#9CA3AF] ml-1">/mês</span>
              </div>
              <p className="text-sm text-[#9CA3AF] mt-2">
                ou{" "}
                <span className="text-white font-medium">R$478,80/ano</span>{" "}
                (economia de 20%)
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Suporte clínico completo",
                "Fluxogramas e calculadoras",
                "Consultor digital 24/7",
                "Atualizações contínuas",
                "Acesso mobile e desktop",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span className="text-[#EDEDED]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://frontline-gestao.web.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            >
              Criar minha conta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* B2B - Enterprise */}
          <motion.div
            variants={cardVariants}
            className="p-8 md:p-10 rounded-2xl bg-[#141419] border border-[#262630]"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                Empresarial
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-black text-white">Sob consulta</span>
              <p className="text-sm text-[#9CA3AF] mt-2">
                Plano personalizado para sua empresa
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Tudo do plano Profissional",
                "Gestão de equipe completa",
                "Prontuários de pacientes",
                "Relatórios avançados",
                "Impressão de documentos e laudos",
                "White-Label com sua marca",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-[#EDEDED]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5547988141031?text=Olá!%20Tenho%20interesse%20no%20plano%20Empresarial%20do%20Frontline."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-transparent border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com consultor
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
