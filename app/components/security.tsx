"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, FileText } from "lucide-react";

export const SecuritySection = () => {
  return (
    <section className="py-24 relative bg-[#FAFAFA]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Segurança desde
                <br />
                <span className="text-[#0066FF]">o primeiro atendimento.</span>
              </h2>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                Por lidarmos com dados sensíveis de saúde, a segurança não é um recurso opcional, é o alicerce do Frontline. Toda a estrutura do sistema foi projetada para blindar a sua farmácia juridicamente.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">Adequação à LGPD</h4>
                    <p className="text-[#4B5563] leading-relaxed">
                      Termos de consentimento nativos e controle rígido sobre o ciclo de vida dos dados de saúde dos pacientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-sm">
                    <Lock className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">Controle de Acessos</h4>
                    <p className="text-[#4B5563] leading-relaxed">
                      Permissões granulares para farmacêuticos, balconistas e gestores, garantindo que cada um acesse apenas o necessário.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-6 h-6 text-[#6B7280]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">Laudos Oficiais (DSF)</h4>
                    <p className="text-[#4B5563] leading-relaxed">
                      Emissão automática e padronizada da Declaração de Serviços Farmacêuticos. Documento que protege o profissional juridicamente e fideliza o paciente.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Visual representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-2xl bg-white">
                <img 
                  src="/laudo.png" 
                  alt="Modelo de Laudo do Frontline Help" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
