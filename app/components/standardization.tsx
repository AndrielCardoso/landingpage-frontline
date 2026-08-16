"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap } from "lucide-react";

export const StandardizationSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
              Padronização
            </p>
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Saia do achismo,
              <br />
              <span className="text-[#0066FF]">profissionalize o balcão.</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              O Frontline transforma qualquer balconista em um verdadeiro consultor de saúde. A Bula Inteligente entrega na tela exatamente o que ele precisa saber para orientar o paciente e sugerir a venda certa.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Confiança na Dispensação",
                desc: "Acesso imediato a interações e posologia. O atendente passa segurança e o cliente percebe o valor.",
              },
              {
                icon: Zap,
                title: "Consultas Rápidas",
                desc: "A Bula Inteligente resume o que importa. Sem perda de tempo pesquisando no Google ou lendo letras miúdas.",
              },
              {
                icon: Target,
                title: "Venda Agregada Natural",
                desc: "O sistema sugere complementos baseados no sintoma, tornando a indicação profissional, ética e rentável.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="p-7 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0066FF]/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 tracking-tight">
              Referências médicas e farmacêuticas mundiais.
            </h3>
            <p className="text-sm text-[#4B5563] max-w-xl mx-auto mb-10">
              Toda a inteligência do Frontline é alimentada pelos protocolos
              mais respeitados da medicina global.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="inline-block p-6 md:p-10 rounded-2xl bg-white/95 border border-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]"
            >
              <img
                src="/references_logos.png"
                alt="Referências Médicas Mundiais"
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
