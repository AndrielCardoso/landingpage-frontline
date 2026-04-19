"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Stethoscope, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Mission/Reason */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
              <ShieldCheck className="w-5 h-5" />
              Sobre o Frontline
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Quem somos e <br />
              por que o <span className="text-primary italic whitespace-nowrap">Frontline Help?</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  Quem somos
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Somos uma empresa focada em ajudar farmácias a padronizar rotinas de atendimentos com sistemas preparados com as mais recentes atualizações científicas e protocolos clínicos. Nosso objetivo é aumentar o lucro da sua farmácia através de uma tecnologia simples, porém extremamente eficaz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  Por que o Frontline
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Criada para ser simples e rápida no dia a dia, a ferramenta organiza, padroniza e fortalece os serviços clínicos da farmácia, sem a necessidade de investir tempo excessivo com treinamentos complexos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The 2 Fronts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              Atuação em <span className="text-primary">2 Frentes</span> estratégicas
            </h3>

            <div className="space-y-8 relative z-10">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Frente Clínica (Principal)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Análises de prescrição, cálculos de doses automáticos e acesso a fluxogramas clínicos de última geração. Conta com um prontuário digital completo para suprir todas as necessidades do paciente e da farmácia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-slate-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Frente Burocrática</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Apoio jurídico e legislativo instantâneo, além de guias de intercambialidade de medicamentos para facilitar o dia a dia administrativo do farmacêutico.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">
                Simplicidade que gera resultado clínico
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
