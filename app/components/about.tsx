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

  return <span ref={ref}>0{suffix}</span>;
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
                Tecnologia clínica
                <br />
                <span className="text-[#4B5563]">que entende de negócios.</span>
              </h2>
              <div className="w-16 h-1 bg-[#0066FF] rounded-full" />
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <p className="text-[#4B5563] text-lg leading-relaxed">
                O <span className="text-[#111827] font-medium">Frontline Help</span> é
                a plataforma definitiva projetada não apenas para dar segurança clínica,
                mas para fazer o balcão da sua farmácia faturar mais.
              </p>
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Com nossos fluxogramas orientados à alta conversão e prontuário
                que gera recorrência, você padroniza sua equipe para entregar serviços
                lucrativos e blindar os clientes da concorrência.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-black text-[#111827]">
                    <AnimatedNumber value={98} suffix="%" />
                  </p>
                  <p className="text-sm text-[#4B5563]">Retenção</p>
                </div>
                <div className="w-px h-12 bg-[#E5E7EB]" />
                <div>
                  <p className="text-3xl font-black text-[#111827]">
                    <AnimatedNumber value={30} suffix="%" />
                  </p>
                  <p className="text-sm text-[#4B5563]">+ Ticket Médio</p>
                </div>
                <div className="w-px h-12 bg-[#E5E7EB]" />
                <div>
                  <p className="text-3xl font-black text-[#111827]">
                    <AnimatedNumber value={100} suffix="%" />
                  </p>

                  <p className="text-sm text-[#4B5563]">Escalável</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
