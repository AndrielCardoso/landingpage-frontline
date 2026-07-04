"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";

const whatsappFeatures = [
  {
    id: "auditoria",
    title: "Auditoria de Receitas via Foto",
    desc: "O cliente envia a foto e a IA faz o checklist legal completo (vias, validade, carimbo) e transcreve a caligrafia médica em segundos.",
    bubble: "Receita válida! Posologia: 1 cp a cada 8h por 7 dias. ✅"
  },
  {
    id: "lembretes",
    title: "Agendamento Automático de Doses",
    desc: "A farmácia não só vende, mas cuida. A IA dispara mensagens autônomas no minuto exato para o paciente tomar o remédio.",
    bubble: "Olá! Passando para lembrar da sua dose de Amoxicilina agora. 💊"
  },
  {
    id: "interacoes",
    title: "Alerta de Interações (DDI)",
    desc: "Motor clínico local que alerta sobre misturas perigosas de medicamentos com embasamento científico imediato.",
    bubble: "Atenção: A mistura de AAS com Ibuprofeno requer cautela médica. ⚠️"
  },
  {
    id: "amamentacao",
    title: "Guia de Lactação",
    desc: "Segurança para as mães. A IA responde rapidamente se o medicamento é seguro durante a amamentação.",
    bubble: "Este princípio ativo é considerado seguro durante a amamentação. 🤱"
  }
];

export const WhatsappSection = () => {
  const [activeFeature, setActiveFeature] = useState(whatsappFeatures[0].id);
  const activeData = whatsappFeatures.find(f => f.id === activeFeature);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="whatsapp-ia">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-6 inline-block border border-[#10B981]/20">
              Frontline IA
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              O WhatsApp da sua farmácia com
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#0066FF]">
                Inteligência Clínica 24h.
              </span>
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Vá além das respostas automáticas robóticas. Ofereça um assistente virtual com IA de última geração que lê receitas, alerta sobre interações e agenda lembretes de forma autônoma.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-16 lg:gap-8">
          
          {/* Left: Dynamic Phone Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center h-[500px] md:h-[600px] items-center">
            
            {/* The Phone */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[320px]"
            >
              <img 
                src="/Frontline_Totem (2).png" 
                alt="Frontline IA WhatsApp" 
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(16,185,129,0.2)]"
              />
            </motion.div>

            {/* Floating Dynamic Chat Bubble */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute top-1/4 right-0 lg:-right-12 z-20 max-w-[250px] bg-[#141419]/90 backdrop-blur-md border border-[#262630] rounded-2xl rounded-tr-none p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">IA Frontline</span>
                </div>
                <p className="text-sm text-[#EDEDED] leading-relaxed">
                  {activeData?.bubble}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Ambient Data Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#10B981]/10 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#0066FF]/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
          </div>

          {/* Right: Modern List Selection */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {whatsappFeatures.map((feat) => (
              <div 
                key={feat.id}
                onClick={() => setActiveFeature(feat.id)}
                className={`relative cursor-pointer p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeFeature === feat.id 
                    ? "bg-[#141419] border border-[#10B981]/30 shadow-[0_0_40px_rgba(16,185,129,0.05)]" 
                    : "bg-transparent border border-transparent hover:bg-[#141419]/40"
                }`}
              >
                {/* Active Indicator Line */}
                {activeFeature === feat.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10B981] to-[#0066FF]" 
                  />
                )}
                
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
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
                    >
                      <p className="text-[#9CA3AF] leading-relaxed text-sm">
                        {feat.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Security & CTA Footer */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-[#141419] to-[#0A0A0F] border border-[#262630] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#10B981]" />
                <h4 className="text-xl font-bold text-white">Engenharia Clínica Segura</h4>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xl">
                O Frontline IA possui um classificador inteligente em 2 etapas, bloqueio estrito contra alucinações médicas (Zero Fake Info) e filtro nativo que impede prescrições autônomas, mantendo 100% do compliance legal da sua drogaria.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
              <a
                href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20integrar%20o%20Frontline%20IA%20no%20WhatsApp%20da%20minha%20farmácia."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-base hover:scale-105 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/20 to-[#0066FF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageSquare className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Integrar ao meu WhatsApp</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-[#9CA3AF] font-medium">
                <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                Reduz até 80% do call center
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
