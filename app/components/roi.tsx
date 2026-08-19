"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

export const RoiSection = () => {
  return (
    <section className="py-20 relative bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white border-2 border-[#E5E7EB] shadow-lg relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 mb-6">
                  <Calculator className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-[#0066FF] text-xs font-bold uppercase tracking-wider">
                    O Frontline se paga?
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight mb-4">
                  Quanto o sistema precisa gerar para se pagar?
                </h2>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  Se a Bula Inteligente e a padronização do atendimento ajudarem sua equipe a gerar apenas R$ 5,00 adicionais por dia no balcão:
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 bg-[#F9FAFB] border border-[#E5E7EB] p-8 rounded-2xl text-center shadow-sm">
                <div className="text-sm font-medium text-[#6B7280] mb-2">R$ 5,00 por dia × 30 dias</div>
                <div className="text-4xl md:text-5xl font-black text-[#111827] mb-4">R$ 150,00</div>
                <div className="flex items-center justify-center gap-2 text-[#10B981] font-semibold bg-[#10B981]/10 px-4 py-2.5 rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                  O sistema já se pagou.
                </div>
              </div>
            </div>

            <p className="relative z-10 text-[11px] text-[#9CA3AF] text-center md:text-left mt-10 max-w-2xl">
              Exemplo meramente ilustrativo. O Frontline não garante aumento de faturamento ou resultado financeiro específico. Os resultados dependem exclusivamente da utilização da plataforma e da operação de cada estabelecimento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
