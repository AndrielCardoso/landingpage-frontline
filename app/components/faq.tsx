"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "O Frontline substitui o sistema de gestão da minha farmácia?",
    answer: "Não. O Frontline atua como uma plataforma complementar focada no atendimento, suporte clínico à equipe e prestação de serviços farmacêuticos. Ele roda paralelamente ao seu sistema de PDV."
  },
  {
    question: "Preciso trocar meu sistema atual?",
    answer: "Não. Você continua usando seu sistema de caixa normalmente. O Frontline é acessado pelo navegador (no computador ou tablet) para apoiar o balconista e o farmacêutico na hora de atender."
  },
  {
    question: "Preciso treinar toda a equipe?",
    answer: "O sistema foi desenhado para ser extremamente intuitivo, assim como aplicativos de celular. Em poucos minutos sua equipe já entende como realizar uma consulta na Bula Inteligente ou preencher um Prontuário."
  },
  {
    question: "O sistema funciona em celular ou tablet?",
    answer: "Sim! O Frontline é totalmente responsivo. Você pode usar no computador do balcão, no tablet da sala de serviços ou até mesmo no celular do farmacêutico."
  },
  {
    question: "Meus dados e os dados dos pacientes estão seguros?",
    answer: "Sim. O Frontline opera sob rigorosos padrões de segurança e está adequado às exigências da LGPD, garantindo que as informações clínicas fiquem restritas apenas aos profissionais autorizados."
  },
  {
    question: "Serve para redes de farmácias?",
    answer: "Perfeitamente. Temos planos dedicados para redes, com painéis de gestão centralizados para que você consiga acompanhar a performance de atendimento e de serviços de todas as suas lojas."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Dúvidas frequentes
            </h2>
            <p className="text-[#4B5563] text-lg">
              Tudo que você precisa saber antes de implantar o Frontline.
            </p>
          </motion.div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white hover:border-[#0066FF]/30 transition-colors"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#111827] text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-[#4B5563] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-[#111827] mb-2">Ainda tem dúvidas?</h3>
            <p className="text-[#4B5563] mb-6">Nosso time está pronto para conversar com você.</p>
            <a
              href="https://wa.me/554797503304?text=Olá!%20Acessei%20o%20site%20mas%20fiquei%20com%20algumas%20dúvidas%20sobre%20o%20Frontline."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            >
              Falar pelo WhatsApp
              <MessageCircle className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
