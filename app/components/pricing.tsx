"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ShieldCheck, Zap, Users, BookOpen } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative bg-[#FAFAFA]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Um investimento simples para
              <br />
              <span className="text-[#0066FF]">profissionalizar sua farmácia</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Tenha o Frontline na sua loja e transforme o atendimento da sua equipe por um valor que se paga com poucos atendimentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Main Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-white rounded-3xl p-8 md:p-10 border-2 border-[#0066FF] shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                MAIS ESCOLHIDO
              </div>
              
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Frontline Help</h3>
              <p className="text-[#4B5563] mb-6">Para farmácias individuais ou pequenas redes (até 5 lojas).</p>
              
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-[#111827]">R$ 129,90</span>
                  <span className="text-[#6B7280] mb-2 font-medium">/mês por farmácia</span>
                </div>
                <p className="text-sm text-[#6B7280] mt-2">+ R$ 300,00 de taxa de adesão e implantação.</p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="font-semibold text-[#111827]">O que está incluso no plano:</p>
                <ul className="space-y-3">
                  {[
                    "Prontuário integrado com WhatsApp",
                    "Calculadora de doses inteligente",
                    "Bula Inteligente para o balcão",
                    "Suporte avançado de Legislação",
                    "Guia de Dispensação e Interações",
                    "Frontline Conecta (Contato de WhatsApp para pacientes)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="text-[#4B5563]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/554797503304?text=Olá!%20Gostaria%20de%20assinar%20o%20Frontline%20Help%20para%20a%20minha%20farmácia."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold text-lg hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
              >
                Quero conhecer o Frontline
                <MessageCircle className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Enterprise Call-out */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 flex flex-col justify-center"
            >
              <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#4B5563]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Possui uma rede ou várias unidades?
                </h3>
                <p className="text-[#4B5563] mb-8 leading-relaxed">
                  Temos condições comerciais, implantação dedicada e treinamentos específicos para operações maiores (acima de 5 farmácias).
                </p>
                <a
                  href="https://wa.me/554797503304?text=Olá!%20Sou%20gestor%20de%20uma%20rede%20de%20farmácias%20e%20gostaria%20de%20entender%20as%20condições%20do%20Frontline%20para%20múltiplas%20lojas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-[#111827] text-white font-semibold hover:bg-[#374151] transition-all"
                >
                  Falar com nosso comercial
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
