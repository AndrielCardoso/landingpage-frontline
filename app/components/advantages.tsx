"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";

const advantages = [
  {
    title: "Aumento na Fidelização",
    description: "Transforme clientes em pacientes recorrentes através de um atendimento clínico digno de confiança e histórico personalizado.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Ticket Médio Superior",
    description: "A indicação técnica fundamentada gera oportunidades seguras de serviços e vendas complementares no balcão.",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
  {
    title: "Proteção Jurídica",
    description: "Documentação detalhada de toda prescrição e orientação, garantindo segurança total para o responsável técnico.",
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Diferenciação Real",
    description: "Destaque sua farmácia das grandes redes através de uma proposta de valor focada no cuidado e atenção farmacêutica.",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100"
  }
];

export const AdvantagesSection = () => {
  return (
    <section id="vantagens" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"
          >
            Qual a vantagem do Frontline
          </motion.h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-primary italic tracking-tight"
          >
            para a sua farmácia?
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`${advantage.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <advantage.icon className={`w-7 h-7 ${advantage.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{advantage.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Que tal marcarmos uma conversa?
          </h3>
          <a 
            href="https://wa.me/554788141031?text=Olá,%20estou%20interessado%20em%20contratar%20o%20Frontline%20Help%20para%20a%20minha%20farmácia.%20Gostaria%20de%20mais%20detalhes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
          >
            Falar com consultor de vendas
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
