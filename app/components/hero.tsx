"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const phrases = [
  "Sua farmácia vendendo melhor.",
  "Sua farmácia lucrando mais.",
  "Sua farmácia fidelizando pacientes.",
  "Sua farmácia referência na cidade."
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(
          currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.2] sm:leading-[1.1] mb-8 md:mb-10 max-w-5xl mx-auto min-h-[180px] sm:min-h-[190px] md:min-h-[220px]"
          >
            Sua equipe mais preparada.
            <br className="hidden sm:block" />
            Seu cliente mais próximo.
            <br className="hidden sm:block" />
            <span className="text-[#0066FF] block sm:inline mt-2 sm:mt-0 whitespace-normal sm:whitespace-nowrap">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] h-[0.9em] bg-[#0066FF] ml-1 align-middle -mt-1"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            O Frontline coloca informações sobre medicamentos, suporte ao atendimento e ferramentas clínicas nas mãos da sua equipe para transformar cada atendimento em mais segurança, confiança e oportunidades para sua farmácia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full px-4 sm:px-0"
          >
            {/* CTA - Primary */}
            <a
              href="https://wa.me/554797503304?text=Olá!%20Conheci%20o%20Frontline%20pelo%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20para%20minha%20farmácia."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex sm:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-base hover:bg-[#0052CC] transition-all duration-200 shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.45)] w-full sm:w-auto"
            >
              Quero conhecer o Frontline
              <MessageCircle className="w-5 h-5 ml-1" />
            </a>

            {/* CTA - Secondary */}
            <a
              href="#recursos"
              className="group flex sm:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#E5E7EB] text-[#4B5563] font-semibold text-base hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all duration-200 w-full sm:w-auto"
            >
              Ver como funciona
              <ArrowRight className="w-5 h-5 ml-1 text-[#9CA3AF] group-hover:text-[#4B5563] transition-colors" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-[#4B5563]/60 mt-8"
          >
            Para profissionais e empresas do setor farmacêutico
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
    </section>
  );
};
