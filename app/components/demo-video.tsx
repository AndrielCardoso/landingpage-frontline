"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export const DemoVideoSection = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Veja o Frontline funcionando
              <br />
              <span className="text-[#0066FF]">em 60 segundos</span>
            </h2>
          </motion.div>

          {/* Player Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-video bg-[#111827] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white"
          >
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/print1.png"
            >
              <source src="/divulgacao.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="https://wa.me/5547996085407?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20Frontline%20para%20minha%20farmácia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-base hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            >
              Quero testar na minha farmácia
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
