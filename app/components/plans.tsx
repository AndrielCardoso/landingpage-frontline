"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  User,
  FileText,
  Users,
  Printer,
  BarChart3,
  ClipboardList,
  Stethoscope,
  ArrowRight,
  MessageCircle,
  Check,
} from "lucide-react";

const b2bFeatures = [
  { icon: Building2, text: "Gestão completa da empresa" },
  { icon: Users, text: "Controle de equipe e administradores" },
  { icon: ClipboardList, text: "Prontuários de pacientes" },
  { icon: Stethoscope, text: "Rotinas de equipe automatizadas" },
  { icon: Printer, text: "Impressão de documentos e laudos" },
  { icon: BarChart3, text: "Relatórios avançados" },
];

const b2cFeatures = [
  { icon: User, text: "Cadastro individual do profissional" },
  { icon: Stethoscope, text: "Suporte clínico para o dia a dia" },
  { icon: FileText, text: "Consultor digital sempre disponível" },
  { icon: ClipboardList, text: "Fluxogramas e calculadoras" },
];

export const PlansSection = () => {
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
    <section className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
            Duas soluções, um propósito
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Escolha o Frontline ideal
            <br />
            <span className="text-[#9CA3AF]">para a sua realidade.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* B2B Card */}
          <motion.div
            variants={cardVariants}
            className="p-8 md:p-10 rounded-2xl bg-[#141419] border border-[#262630] hover:border-[#0066FF]/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Para empresas</h3>
              </div>
            </div>

            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
              Experiência completa com gestão de equipe, relatórios
              avançados, impressão de documentos e controle total da operação
              farmacêutica.
            </p>

            <ul className="space-y-3 mb-8">
              {b2bFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span className="text-[#EDEDED]">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#262630]">
              <p className="text-sm text-[#9CA3AF] mb-4">
                Preço sob consulta
              </p>
              <a
                href="https://wa.me/5547988141031?text=Olá!%20Tenho%20interesse%20no%20Frontline%20B2B%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com consultor
              </a>
            </div>
          </motion.div>

          {/* B2C Card */}
          <motion.div
            variants={cardVariants}
            className="p-8 md:p-10 rounded-2xl bg-[#141419] border border-[#0066FF]/30 hover:border-[#0066FF]/50 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
                Popular
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Para profissionais</h3>
              </div>
            </div>

            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
              Seu consultor clínico digital. Tenha suporte especializado
              para tirar dúvidas e tomar decisões seguras no balcão,
              todos os dias.
            </p>

            <ul className="space-y-3 mb-8">
              {b2cFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-[#EDEDED]">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#262630]">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-white">R$49,90</span>
                <span className="text-sm text-[#9CA3AF]">/mês</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mb-4">
                ou R$478,80/ano (economize 20%)
              </p>
              <a
                href="https://frontline-gestao.web.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-all w-full justify-center shadow-[0_0_20px_rgba(0,102,255,0.2)]"
              >
                Criar minha conta
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
