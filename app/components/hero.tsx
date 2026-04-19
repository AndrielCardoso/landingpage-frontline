"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            O poder da decisão clínica <br />
            <span className="text-primary italic">na ponta dos seus dedos.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A plataforma definitiva para farmácias: prontuário digital, fluxogramas inteligentes 
            e segurança total no balcão e no autoatendimento.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <a 
              href="https://wa.me/554788141031?text=Olá,%20estou%20interessado%20em%20contratar%20o%20Frontline%20Help%20para%20a%20minha%20farmácia.%20Gostaria%20de%20mais%20detalhes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            >
              Falar com Consultor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Mockup Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Tablet Frame */}
          <div className="relative aspect-[16/10] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-[8px] border-slate-800 outline outline-1 outline-slate-700/50">
            {/* Inner Screen - Video Player */}
            <div className="w-full h-full bg-slate-900 rounded-[1.8rem] overflow-hidden relative shadow-inner">
              <video
                src="/Institucional_Frontline.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Interaction Overlay / Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Floaties */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-bold">98%</span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-bold text-slate-900">Precisão Clínica</p>
              <p className="text-[10px] text-slate-500">Upgrade sugerido</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
