"use client";

import React from "react";
import { motion } from "framer-motion";
import { Workflow, Zap, GraduationCap, HeartHandshake, TrendingUp, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Workflow,
    title: "Padronização",
    desc: "Sua equipe segue uma mesma lógica de atendimento em todas as suas filiais, garantindo a qualidade padrão da sua rede."
  },
  {
    icon: Zap,
    title: "Produtividade",
    desc: "Menos tempo procurando informações em apostilas, Google ou no WhatsApp, e mais tempo focado no cliente no balcão."
  },
  {
    icon: GraduationCap,
    title: "Treinamento Contínuo",
    desc: "O sistema atua como um supervisor silencioso, ajudando e qualificando os colaboradores no próprio momento do atendimento."
  },
  {
    icon: HeartHandshake,
    title: "Fidelização Real",
    desc: "A farmácia mantém um relacionamento digital direto com o paciente, enviando lembretes de saúde e o Prontuário no WhatsApp dele."
  },
  {
    icon: TrendingUp,
    title: "Venda Qualificada",
    desc: "A informação certa no momento exato gera oportunidades comerciais de forma ética, natural e altamente rentável."
  },
  {
    icon: BarChart3,
    title: "Gestão e Controle",
    desc: "Maior organização das informações clínicas, registros de saúde e dos atendimentos farmacêuticos realizados na loja."
  }
];

export const ManagersSection = () => {
  return (
    <section className="py-24 relative bg-white">
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
              Bom para sua equipe.
              <br />
              <span className="text-[#0066FF]">Melhor ainda para sua operação.</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              O Frontline não é apenas uma ferramenta clínica. É uma alavanca gerencial para quem precisa escalar resultados sem perder o controle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#0066FF]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{benefit.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
