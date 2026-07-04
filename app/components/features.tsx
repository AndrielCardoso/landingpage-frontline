"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  FileHeart,
  AlertTriangle,
  GitFork,
  Pill,
  Baby,
  ClipboardCheck,
  Shield,
  Printer,
  Users,
  BarChart3,
  Stethoscope,
  FlaskConical,
  BookOpen,
  HeartPulse,
  Syringe,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Calculator,
    title: "Calculadora de Doses",
    desc: "Cálculos precisos para pediatria e adultos com ajuste automático por peso e idade.",
  },
  {
    icon: FileHeart,
    title: "Prontuário Digital",
    desc: "Histórico completo do paciente com alergias, medicações e atendimentos anteriores.",
    exclusive: true,
  },
  {
    icon: AlertTriangle,
    title: "Interações Medicamentosas",
    desc: "Detecção instantânea de interações perigosas entre medicamentos e alimentos.",
  },
  {
    icon: GitFork,
    title: "Triagem Avançada",
    desc: "Fluxogramas inteligentes que guiam o atendimento do início ao fim.",
  },
];

const secondaryFeatures = [
  { icon: Pill, label: "Monografias" },
  { icon: Baby, label: "Pediatria" },
  { icon: ClipboardCheck, label: "Protocolos" },
  { icon: Shield, label: "Segurança" },
  { icon: Printer, label: "Laudos" },
  { icon: Users, label: "Equipe" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Stethoscope, label: "Consultas" },
  { icon: FlaskConical, label: "Fórmulas" },
  { icon: BookOpen, label: "Referências" },
  { icon: HeartPulse, label: "Lactação" },
  { icon: Syringe, label: "Vacinas" },
];

export const Features = () => {
  return (
    <section id="recursos" className="py-24 md:py-32 relative">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
            Recursos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Arsenal clínico completo
            <br />
            <span className="text-[#4B5563]">na palma da sua mão.</span>
          </h2>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-16"
        >
          {mainFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              className="p-7 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0066FF]/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5" />
                </div>
                {f.exclusive && (
                  <span className="px-2.5 py-1 rounded-md bg-[#0066FF]/10 text-[#0066FF] text-[10px] font-bold uppercase tracking-wider border border-[#0066FF]/20">
                    Exclusivo empresas
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Features */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-center text-sm text-[#4B5563] mb-6">
            E mais de 20 funcionalidades integradas:
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {secondaryFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-white/5 text-sm text-[#4B5563] hover:text-[#111827] hover:border-white/15 transition-all"
              >
                <f.icon className="w-3.5 h-3.5" />
                {f.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
