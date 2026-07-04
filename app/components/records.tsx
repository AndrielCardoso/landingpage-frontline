"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSignature, ShieldCheck, Activity, Users, ChevronRight, CheckCircle2, XCircle, Smartphone } from "lucide-react";

const features = [
  {
    id: "fichas",
    title: "Fichas Inteligentes",
    icon: Activity,
    content: "Acompanhamento de injetáveis, vacinação, pressão, glicemia, bioimpedância e testes rápidos estruturados em um só lugar. Adeus papel."
  },
  {
    id: "assinatura",
    title: "Assinatura Eletrônica",
    icon: FileSignature,
    content: "Assinatura do paciente e do farmacêutico coletadas diretamente na tela do tablet. Chave de integridade eletrônica com validade legal."
  },
  {
    id: "portal",
    title: "Portal do Paciente",
    icon: Smartphone,
    content: "O paciente acessa exames, carteira de vacinação digital e declarações pelo próprio celular. Fidelização baseada em cuidado contínuo."
  }
];

export const RecordsSection = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 md:py-32 relative bg-[#FAFAFA] border-t border-[#E5E7EB]" id="prontuario">
      {/* Abstract Medical Grid Background */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0066FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] text-xs font-bold uppercase tracking-wider">
                100% LGPD & ANVISA Compliance
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              A ferramenta que você usa hoje<br className="hidden md:block" />
              <span className="text-[#4B5563]">protege ou expõe a sua farmácia?</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Transforme a sala de serviços em um verdadeiro Consultório Farmacêutico Digital. Troque papéis amadores por um Prontuário Eletrônico seguro, assinado digitalmente e focado em lucro e fidelização.
            </p>
          </motion.div>
        </div>

        {/* Before vs After Comparison */}
        <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-black/50 border border-[#E5E7EB] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">Salas de Serviços Comuns</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Prontuários ilegíveis e fichas impressas perdidas.",
                "Declarações sem validade jurídica forte.",
                "Arquivos mortos que ocupam espaço e violam a LGPD.",
                "Paciente faz o exame e vai embora (Zero fidelização)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#4B5563]">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-white to-[#F4F4F5] border border-[#0066FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-32 h-32 text-[#0066FF]" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#0066FF]/20 flex items-center justify-center border border-[#0066FF]/30">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">Com Frontline Prontuário</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                "Busca instantânea de pacientes por CPF.",
                "Assinatura biométrica/eletrônica na tela do tablet.",
                "Dados blindados e criptografados na nuvem (LGPD).",
                "Portal do Paciente que lembra retornos e doses."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#374151]">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature Tabs (Serious & Minimalist) */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mb-10">
            {features.map((feat) => (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === feat.id
                    ? "bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                    : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6]"
                }`}
              >
                <feat.icon className="w-4 h-4" />
                {feat.title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 min-h-[160px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              {features.map((feat) => 
                activeTab === feat.id ? (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-2xl"
                  >
                    <p className="text-[#374151] text-lg leading-relaxed">
                      {feat.content}
                    </p>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/5547988141031?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20Prontuário%20Eletrônico%20Frontline."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#111827] text-white font-bold text-base hover:scale-105 transition-all"
          >
            Agendar uma demonstração clínica
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
