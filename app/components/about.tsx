"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>{value}{suffix}</span>;
};

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          >
            {/* Left - Headline */}
            <div>
              <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
                Sobre o Frontline
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                A conexão definitiva
                <br />
                <span className="text-[#4B5563]">com o seu paciente.</span>
              </h2>
              <div className="w-16 h-1 bg-[#0066FF] rounded-full" />
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <p className="text-[#4B5563] text-lg leading-relaxed">
                O <span className="text-[#111827] font-medium">Frontline Help</span> é
                a plataforma desenvolvida para fortalecer o relacionamento entre a sua farmácia
                e os seus clientes, integrando o atendimento do balcão direto com o celular do paciente.
              </p>
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Com o Prontuário Digital e a Bula Inteligente, seus balconistas e farmacêuticos
                têm a informação certa em segundos para dar um atendimento qualificado, enquanto
                o paciente acompanha tudo em um portal exclusivo. É proximidade que gera lucro.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#E5E7EB]">
                <div>
                  <p className="text-3xl font-black text-[#111827] mb-1">
                    <AnimatedNumber value={98} suffix="%" />
                  </p>
                  <p className="text-sm font-bold text-[#111827]">Retenção</p>
                  <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                    Das farmácias que assinam, quase nenhuma volta aos processos de papel ou Google.
                  </p>
                </div>
                
                <div>
                  <p className="text-3xl font-black text-[#111827] mb-1">
                    <AnimatedNumber value={100} suffix="%" />
                  </p>
                  <p className="text-sm font-bold text-[#111827]">Digital</p>
                  <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                    Operação integral em nuvem. Se o computador da loja queimar, nenhum dado é perdido.
                  </p>
                </div>
                
                <div>
                  <p className="text-3xl font-black text-[#111827] mb-1">
                    <AnimatedNumber value={10} suffix="x" />
                  </p>
                  <p className="text-sm font-bold text-[#111827]">Mais Rápido</p>
                  <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                    Na consulta clínica em comparação com buscas em apostilas físicas ou bulários longos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
