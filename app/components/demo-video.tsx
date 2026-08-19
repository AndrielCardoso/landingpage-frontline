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
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
              Informação certa, no momento em que sua equipe precisa. O Frontline foi desenvolvido para fazer parte do atendimento — e não para criar mais etapas ou burocracia.
            </p>
          </motion.div>

          {/* Player Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-video bg-[#F3F4F6] border border-[#E5E7EB] rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center group cursor-pointer hover:border-[#0066FF]/30 transition-colors"
          >
            {/* 
              TODO: QUANDO TIVER O VÍDEO PRONTO:
              1. Substitua esta div abaixo pelo iframe do YouTube ou tag <video> 
              2. Remova os ícones de Play e o texto de placeholder
            */}
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col items-center z-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:shadow-xl group-hover:text-[#0066FF] transition-all">
                <PlayCircle className="w-10 h-10 text-[#0066FF] ml-1" />
              </div>
              <p className="text-[#4B5563] font-medium">Demonstração (Em breve)</p>
            </div>
            
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
