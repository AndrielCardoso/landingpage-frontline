"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const phrases = [
  "para quem cuida de pessoas.",
  "para quem quer mais agilidade.",
  "para gerar mais confiança.",
  "para otimizar o atendimento.",
  "para reduzir erros do dia a dia.",
  "para farmácias de excelência.",
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
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.2] sm:leading-[1.1] mb-6 max-w-5xl mx-auto h-auto min-h-[140px] sm:h-[140px] md:h-[160px]"
          >
            Decisão clínica inteligente
            <br className="hidden sm:block" />
            <span className="text-[#0066FF] block sm:inline whitespace-normal sm:whitespace-nowrap mt-2 sm:mt-0">
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
            className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Prontuário digital, fluxogramas inteligentes e suporte em tempo real
            para farmácias que levam a saúde a sério.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full px-4 sm:px-0"
          >
            {/* B2C CTA - Primary */}
            <a
              href="https://frontline-gestao.web.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex sm:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-base hover:bg-[#0052CC] transition-all duration-200 shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.45)] w-full sm:w-auto"
            >
              Criar minha conta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* B2B CTA - Secondary */}
            <a
              href="https://wa.me/5547988141031?text=Olá!%20Tenho%20interesse%20no%20Frontline%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex sm:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-white/15 text-[#EDEDED] font-semibold text-base hover:bg-white/5 hover:border-white/25 transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com consultor
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-[#9CA3AF]/60 mt-8"
          >
            Para profissionais e empresas do setor farmacêutico
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
};
