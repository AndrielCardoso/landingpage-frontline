"use client";

import React from "react";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Decorative pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0066FF_0%,_transparent_70%)] opacity-10" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Transforme sua farmácia em um <br />
            <span className="text-primary italic">verdadeiro Hub de Saúde.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de farmácias que já utilizam o Frontline para tomar decisões 
            clínicas mais seguras e aumentar a fidelização dos pacientes.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/554788141031?text=Olá,%20estou%20interessado%20em%20contratar%20o%20Frontline%20Help%20para%20a%20minha%20farmácia.%20Gostaria%20de%20mais%20detalhes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            >
              Falar com Consultor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
