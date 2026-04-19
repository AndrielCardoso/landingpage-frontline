"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Globe, ShieldCheck } from "lucide-react";

const getPuzzlePath = (t: number, r: number, b: number, l: number) => {
  let path = "M 0,0 ";
  // Top
  if (t === 0) path += "L 100,0 ";
  else if (t === 1) path += "L 40,0 C 40,-15 60,-15 60,0 L 100,0 ";
  else path += "L 40,0 C 40,15 60,15 60,0 L 100,0 ";

  // Right
  if (r === 0) path += "L 100,100 ";
  else if (r === 1) path += "L 100,40 C 115,40 115,60 100,60 L 100,100 ";
  else path += "L 100,40 C 85,40 85,60 100,60 L 100,100 ";

  // Bottom
  if (b === 0) path += "L 0,100 ";
  else if (b === 1) path += "L 60,100 C 60,115 40,115 40,100 L 0,100 ";
  else path += "L 60,100 C 60,85 40,85 40,100 L 0,100 ";

  // Left
  if (l === 0) path += "L 0,0 ";
  else if (l === 1) path += "L 0,60 C -15,60 -15,40 0,40 L 0,0 ";
  else path += "L 0,60 C 15,60 15,40 0,40 L 0,0 ";

  return path + "Z";
};

const pieces = [
  { t: 0, r: 1, b: 1, l: 0, color: "fill-primary" },
  { t: 0, r: 1, b: -1, l: -1, color: "fill-emerald-500" },
  { t: 0, r: 0, b: 1, l: -1, color: "fill-primary/80" },
  { t: -1, r: 1, b: 1, l: 0, color: "fill-emerald-400" },
  { t: 1, r: -1, b: -1, l: -1, color: "fill-primary/60" },
  { t: -1, r: 0, b: 1, l: 1, color: "fill-emerald-600" },
  { t: -1, r: 1, b: 0, l: 0, color: "fill-primary/90" },
  { t: 1, r: -1, b: 0, l: -1, color: "fill-emerald-500/80" },
  { t: -1, r: 0, b: 0, l: 1, color: "fill-primary/70" },
];

export const WhiteLabelSection = () => {
  return (
    <section id="whitelabel" className="py-24 bg-[#0a0f1d] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Palette className="w-4 h-4" />
              Exclusividade total
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sua marca, <br />
              <span className="text-primary italic">nossa tecnologia.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Com o modelo White-Label, o Frontline Help se torna invisível para o seu colaborador. 
              Você assume o controle total da experiência visual enquanto nós cuidamos de toda a inteligência técnica.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Domínio Personalizado</h4>
                  <p className="text-slate-500 text-sm italic">Ex: sistema.suafarmacia.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Identidade Visual</h4>
                  <p className="text-slate-500 text-sm">Cores e logotipos adaptados 100% à sua marca.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Conteúdo e Suporte</h4>
                  <p className="text-slate-500 text-sm">Nossa equipe mantém as atualizações enquanto sua empresa leva o crédito.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code-Driven Puzzle Columns */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end py-12"
          >
            <div className="relative grid grid-cols-3 w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {pieces.map((p, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                
                // Deterministic starting positions to fix Hydration Mismatch and Purity errors
                const startX = (col - 1) * 300 + (i % 2 === 0 ? 50 : -50);
                const startY = (row - 1) * 300 + (i % 3 === 0 ? 80 : -80);
                const rotate = i * 45;

                return (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: startX, 
                      y: startY, 
                      opacity: 0, 
                      rotate: rotate,
                      scale: 0.5
                    }}
                    whileInView={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1, 
                      rotate: 0,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 40,
                      damping: 15,
                      delay: i * 0.05 + 0.2
                    }}
                    className="relative w-full h-full"
                    style={{ zIndex: 10 - i }}
                  >
                    <svg
                      viewBox="-20 -20 140 140"
                      className={`w-full h-full drop-shadow-2xl transition-transform hover:scale-105 duration-300 pointer-events-auto cursor-help ${p.color}`}
                    >
                      <filter id={`glow-${i}`}>
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <path
                        d={getPuzzlePath(p.t, p.r, p.b, p.l)}
                        className="stroke-white/10 stroke-1"
                        style={{ filter: `url(#glow-${i})` }}
                      />
                    </svg>
                  </motion.div>
                );
              })}
              
              {/* Central Glow Background */}
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
