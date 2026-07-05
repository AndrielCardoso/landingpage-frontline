"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/6 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Pronto para transformar
            <br />
            <span className="text-[#0066FF]">o atendimento da sua farmácia?</span>
          </h2>
          <p className="text-lg text-[#4B5563] mb-10 max-w-xl mx-auto">
            Junte-se aos profissionais que já confiam no Frontline para tomar
            decisões clínicas seguras todos os dias.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Frontline%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um consultor
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="mt-16 mx-auto w-full aspect-[16/7] rounded-[2rem] overflow-hidden border border-[#E5E7EB] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative"
          >
            <img 
              src="/Frontline_Family.png" 
              alt="Família Frontline"
              className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
