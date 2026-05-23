"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    desc: "Sem instalação, sem burocracia. Acesse pelo navegador e comece em minutos.",
  },
  {
    number: "02",
    title: "Nós configuramos pra você",
    desc: "Nossa equipe prepara o ambiente e configura tudo para o seu perfil de atuação.",
  },
  {
    number: "03",
    title: "Comece no mesmo dia",
    desc: "Você já pode usar os módulos e organizar rotinas e atendimentos com mais agilidade.",
  },
];

export const StepsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
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
            Como começar
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Três passos.{" "}
            <span className="text-[#9CA3AF]">Zero complicação.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto space-y-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -30, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              className="flex gap-8 group"
            >
              {/* Number + Line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#141419] border border-[#262630] flex items-center justify-center text-xl font-black text-[#0066FF] group-hover:border-[#0066FF]/30 transition-colors shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-px h-full min-h-[60px] bg-[#262630] my-2 origin-top" 
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
