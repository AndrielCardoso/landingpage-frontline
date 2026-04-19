"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Sem instalação",
    description: "Você acessa pela internet e começa a usar na hora. Sem downloads ou setups complexos.",
  },
  {
    title: "Nós configuramos pra você",
    description: "Criamos seu acesso e deixamos tudo pronto para a sua farmácia começar. Foco total em produtividade.",
  },
  {
    title: "Comece no mesmo dia",
    description: "Você já pode usar os módulos e organizar rotinas e atendimentos com mais agilidade.",
  }
];

export const StepsSection = () => {
  return (
    <section id="onboarding" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Como começar?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sabemos que toda implementação de um sistema gera custos e muito trabalho para implementar. 
            Mas o Frontline foi pensado para ser rápido e fácil. Tudo está na nuvem. É só abrir.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group p-8 rounded-[2.5rem] hover:bg-slate-50/50 transition-colors"
            >
              {/* Typographic Number Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-500">
                <span className="text-4xl md:text-5xl font-black text-primary leading-none select-none italic tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
