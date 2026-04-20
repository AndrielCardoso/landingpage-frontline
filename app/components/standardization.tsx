"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Target, ShieldCheck, Zap } from "lucide-react";

export const StandardizationSection = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#020617] overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              <Target className="w-4 h-4" />
              Autoridade Clínica
            </div>
            
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Saia do achismo, <br />
              <span className="text-emerald-400 font-outline-sm">padronize o atendimento.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              O Frontline padroniza o atendimento dos colaboradores de forma técnica e precisa, 
              garantindo que cada consulta siga protocolos científicos rigorosos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-32">
            {[
              {
                icon: ShieldCheck,
                title: "Segurança Técnica",
                desc: "Elimine o risco de erros humanos com fluxogramas validados cientificamente."
              },
              {
                icon: Zap,
                title: "Agilidade Real",
                desc: "Seu colaborador responde com autoridade instantânea, sem precisar consultar manuais externos."
              },
              {
                icon: Target,
                title: "Precisão Clínica",
                desc: "Cálculos e interações processadas em milissegundos para uma decisão impecável."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* New Continuation Section: World References */}
          <div className="relative pt-24 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">Utilizamos as principais referências <br className="hidden md:block" /> médicas e farmacêuticas do mundo.</h3>
                <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  Toda a inteligência do Frontline é alimentada pelos protocolos mais respeitados da medicina global, 
                  garantindo que sua farmácia opere com o mesmo rigor científico de grandes centros clínicos.
                </p>
              </div>

              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative inline-block w-full max-w-4xl"
              >
                {/* Subtle outer glow to anchor the light card */}
                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-30" />
                
                <div className="relative p-8 md:p-14 rounded-[3rem] bg-white/95 border border-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3),0_0_20px_rgba(16,185,129,0.1)]">
                    <div className="flex items-center justify-center">
                        <img 
                          src="/references_logos.png" 
                          alt="Referências Médicas Mundiais" 
                          className="max-w-full h-auto brightness-100 contrast-100" 
                        />
                    </div>
                </div>
              </motion.div>

              <div className="mt-16 flex items-center justify-center gap-6">
                 <div className="w-8 h-px bg-emerald-500/30" />
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500/50">Curadoria Científica Rigorosa</span>
                 <div className="w-8 h-px bg-emerald-500/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
};
