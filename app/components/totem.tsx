"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ScanLine, 
  FileText, 
  Calculator, 
  Calendar, 
  Baby, 
  Scale, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Lock, 
  Paintbrush, 
  RotateCcw
} from "lucide-react";

const totemFeatures = [
  {
    id: "scan",
    title: "Leitura Instantânea (Bipe e Descubra)",
    icon: ScanLine,
    desc: "O cliente aproxima a caixinha do leitor acoplado e o sistema abre diretamente a ficha do medicamento, sem digitar uma única letra."
  },
  {
    id: "bula",
    title: "Consulta Simplificada",
    icon: FileText,
    desc: "Uma ficha descomplicada: Indicação, como tomar (Posologia Inteligente por apresentação) e efeitos colaterais de forma clara."
  },
  {
    id: "pediatrica",
    title: "Calculadora Pediátrica",
    icon: Calculator,
    desc: "Ferramenta guiada onde o pai insere o peso ou a idade da criança e obtém a dose exata do xarope, evitando erros comuns."
  },
  {
    id: "validade",
    title: "Calculadora de Validade",
    icon: Calendar,
    desc: "O cliente preenche a data da receita e descobre na hora se ela ainda é válida para compra de controlados ou antibióticos."
  },
  {
    id: "lactacao",
    title: "Guia de Lactação",
    icon: Baby,
    desc: "Mães podem checar se um princípio ativo é seguro, requer cautela ou é contraindicado durante a amamentação."
  },
  {
    id: "legislacao",
    title: "Regras e Legislação",
    icon: Scale,
    desc: "Respostas visuais para dúvidas sobre cores de receitas, Portaria 344 e regras rígidas da ANVISA para educar o cliente."
  }
];

const techSpecs = [
  { icon: Lock, title: "Modo Kiosk Blindado", desc: "Bloqueio total do sistema operacional. O cliente não sai do app." },
  { icon: ScanLine, title: "Integração Nativa", desc: "Leitores físicos USB/Bluetooth identificados instantaneamente." },
  { icon: RotateCcw, title: "Reset Automático", desc: "Após 30 segundos de inatividade, a tela limpa e volta ao início." },
  { icon: Paintbrush, title: "White-Label", desc: "O totem carrega as cores e a marca da sua drogaria automaticamente." }
];

export const TotemSection = () => {
  const [activeFeature, setActiveFeature] = useState(totemFeatures[0].id);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="totem">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262630] to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-6 inline-block">
              Novo Lançamento
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Transforme o balcão com o
              <br />
              <span className="text-[#0066FF]">Autoatendimento Inteligente</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Dê autonomia aos seus clientes para consultar bulas simplificadas, calcular doses pediátricas e verificar receitas. Reduza filas e modernize sua farmácia com o Frontline Totem.
            </p>
          </motion.div>
        </div>

        {/* Main Content: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          {/* Left: Features Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {totemFeatures.map((feat) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(feat.id)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeFeature === feat.id 
                    ? "bg-[#141419] border-[#0066FF]/40 shadow-[0_0_30px_rgba(0,102,255,0.1)]" 
                    : "bg-transparent border-[#262630] hover:border-[#262630]/80 hover:bg-[#141419]/50"
                }`}
              >
                <div className="p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeFeature === feat.id ? "bg-[#0066FF] text-white" : "bg-[#262630] text-[#9CA3AF]"
                  }`}>
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${
                    activeFeature === feat.id ? "text-white" : "text-[#9CA3AF]"
                  }`}>
                    {feat.title}
                  </h3>
                </div>
                
                <AnimatePresence>
                  {activeFeature === feat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 pt-0"
                    >
                      <p className="text-[#9CA3AF] leading-relaxed ml-16">
                        {feat.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: The Holographic Tablet */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[3/4] sm:aspect-auto sm:h-[600px] bg-white rounded-[2.5rem] shadow-[0_0_80px_rgba(255,255,255,0.15)] border-8 border-[#141419] overflow-hidden flex items-center justify-center p-4"
            >
              {/* Image */}
              <img 
                src="/ChatGPT Image 3 de jul. de 2026, 23_20_57.png" 
                alt="Frontline Totem Interface" 
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Holographic Scanner Laser Overlay */}
              <motion.div
                animate={{ top: ["0%", "95%", "0%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-[#0066FF] z-20 opacity-70"
                style={{ boxShadow: "0 0 20px 5px rgba(0, 102, 255, 0.6)" }}
              />
              
              {/* Scanning Glow Overlay */}
              <motion.div
                animate={{ top: ["0%", "95%", "0%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0066FF]/20 to-transparent z-10 -mt-16 pointer-events-none"
              />
            </motion.div>
          </div>
        </div>

        {/* Tech Specs & Arguments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techSpecs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#141419] border border-[#262630]"
            >
              <spec.icon className="w-8 h-8 text-[#0066FF] mb-4" />
              <h4 className="text-white font-bold mb-2">{spec.title}</h4>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Sales Arguments CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0066FF]/10 to-[#10B981]/10 border border-[#0066FF]/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#EDEDED] font-semibold">Aumento de Ticket Médio</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0066FF]" />
              <span className="text-[#EDEDED] font-semibold">Otimização da Equipe</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#EDEDED] font-semibold">Prevenção de Erros</span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Eleve a experiência da sua farmácia com a tecnologia interativa.
          </h3>
          <a
            href="https://wa.me/5547988141031?text=Olá!%20Tenho%20interesse%20em%20implantar%20o%20Frontline%20Totem%20na%20minha%20farmácia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold text-base hover:bg-[#0052CC] transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)] w-full sm:w-auto"
          >
            Falar com um consultor
          </a>
        </motion.div>
      </div>
    </section>
  );
};
