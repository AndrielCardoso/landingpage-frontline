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
  Smartphone,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Smartphone,
    title: "Portal do Paciente",
    desc: "O paciente acessa exames e histórico direto do celular. Conectividade que cria laços e fideliza.",
  },
  {
    icon: FileHeart,
    title: "Prontuário Digital",
    desc: "Acompanhe a saúde do seu cliente de perto. Acabe com o papel e torne o atendimento profissional.",
  },
  {
    icon: BookOpen,
    title: "Bula Inteligente",
    desc: "Informação detalhada para o balconista saber exatamente o que falar na dispensação e sugerir vendas adicionais.",
  },
  {
    icon: Shield,
    title: "Equipe Empoderada",
    desc: "Com o Frontline, qualquer membro da sua equipe tira dúvidas em segundos e passa total confiança no balcão.",
  },
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
            Integração completa
            <br />
            <span className="text-[#0066FF]">entre balcão e paciente.</span>
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


      </div>
    </section>
  );
};
