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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0066FF] to-[#0047B3] text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Calculator className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    O Frontline se paga?
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Quanto o sistema precisa gerar para se pagar?
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Se a Bula Inteligente e a padronização do atendimento ajudarem sua equipe a gerar apenas R$ 5,00 adicionais por dia no balcão:
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
                <div className="text-sm text-white/80 mb-2">R$ 5,00 por dia × 30 dias</div>
                <div className="text-4xl font-black mb-4">R$ 150,00</div>
                <div className="flex items-center justify-center gap-2 text-[#10B981] font-semibold bg-[#10B981]/10 px-4 py-2 rounded-lg mt-4">
                  <TrendingUp className="w-5 h-5" />
                  O sistema já se pagou.
                </div>
              </div>
            </div>

            <p className="relative z-10 text-[10px] text-white/50 text-center md:text-left mt-8 max-w-2xl">
              Exemplo meramente ilustrativo. O Frontline não garante aumento de faturamento ou resultado financeiro específico. Os resultados dependem exclusivamente da utilização da plataforma e da operação de cada estabelecimento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
