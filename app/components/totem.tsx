"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";

const totemFeatures = [
  {
    id: "scan",
    title: "Leitura Instantânea (Bipe e Descubra)",
    desc: "Aproximou, leu. O cliente não digita nada, o sistema captura o código e abre a ficha instantaneamente."
  },
  {
    id: "bula",
    title: "Bula Simplificada",
    desc: "Informações que o paciente realmente entende: indicação, posologia inteligente e efeitos colaterais."
  },
  {
    id: "pediatrica",
    title: "Calculadora Pediátrica",
    desc: "Dose exata baseada no peso/idade da criança, eliminando dúvidas e aumentando a segurança da família."
  },
  {
    id: "validade",
    title: "Validação de Receitas",
    desc: "Verificação automática de prazos de validade para receitas de controlados e antibióticos."
  },
  {
    id: "lactacao",
    title: "Guia de Lactação & Legislação",
    desc: "Consulta de segurança para amamentação e respostas visuais sobre regras da ANVISA."
  }
];

const techSpecs = [
  "Modo Kiosk Blindado (App em Tela Cheia)",
  "Integração nativa com leitores de código de barras",
  "Reset automático após inatividade",
  "Personalização White-Label com sua marca"
];

export const TotemSection = () => {
  const [activeFeature, setActiveFeature] = useState(totemFeatures[0].id);

  return (
    <section className="py-24 relative" id="totem">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262630] to-transparent" />
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
            Autoatendimento Inteligente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            O futuro do seu balcão.
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto text-lg">
            Dê autonomia ao seu cliente e libere sua equipe com o Frontline Totem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12 lg:gap-20">
          
          {/* Left: Tablet Image & Laser */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-full max-w-[500px]"
            >
              <img 
                src="/Frontline_Totem (2).png" 
                alt="Frontline Totem App" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
              />

              {/* Holographic Laser */}
              <motion.div
                animate={{ top: ["10%", "85%", "10%"] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="absolute left-[5%] right-[5%] h-0.5 bg-[#0066FF] opacity-80 z-20"
                style={{ boxShadow: "0 0 15px 3px rgba(0, 102, 255, 0.7)" }}
              />
              <motion.div
                animate={{ top: ["10%", "85%", "10%"] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="absolute left-[5%] right-[5%] h-24 bg-gradient-to-b from-transparent to-[#0066FF]/20 z-10 pointer-events-none transform -translate-y-full"
              />
            </motion.div>
          </div>

          {/* Right: Condensed Content */}
          <div className="w-full lg:w-1/2">
            
            {/* Minimalist Interactive List */}
            <div className="flex flex-col gap-2 mb-12">
              {totemFeatures.map((feat) => (
                <div 
                  key={feat.id}
                  onClick={() => setActiveFeature(feat.id)}
                  className={`cursor-pointer border-l-2 pl-5 py-3 transition-all duration-300 ${
                    activeFeature === feat.id 
                      ? "border-[#0066FF]" 
                      : "border-[#262630] hover:border-[#4A4A5A]"
                  }`}
                >
                  <h3 className={`text-lg font-semibold transition-colors ${
                    activeFeature === feat.id ? "text-white" : "text-[#9CA3AF]"
                  }`}>
                    {feat.title}
                  </h3>
                  <AnimatePresence>
                    {activeFeature === feat.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#9CA3AF] text-sm mt-2 leading-relaxed pr-4">
                          {feat.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Tech Specs & CTA */}
            <div className="bg-[#141419] border border-[#262630] rounded-2xl p-6 md:p-8">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Tecnologia & Segurança
              </h4>
              <ul className="space-y-3 mb-8">
                {techSpecs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20implantar%20o%20Totem%20na%20minha%20farmácia."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com consultor
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
