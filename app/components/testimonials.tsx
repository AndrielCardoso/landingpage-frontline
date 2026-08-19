"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "Caminho sem volta",
    content: `"Eu não fico mais sem o Frontline Help, é um caminho sem volta, indispensável pra gente. Essencial, não dá mais pra ficar sem."`,
    author: "Cristina Mosca (Farmácia FiqueBem)"
  },
  {
    title: "Desempenho e Qualidade",
    content: `"Após implementarmos o Frontline Help dentro da rede o desempenho dos colaboradores subiu e o reconhecimento por parte dos clientes também aumentou, hoje fazemos tudo com mais tranquilidade e sabendo a qualidade dos serviços que prestamos. O Frontline foi essencial nesse processo e continua sendo um diferencial para a rede."`,
    author: "Rede ADM Pharma"
  },
  {
    title: "O cliente fica impressionado",
    content: `"O cliente sai impressionado. Ele recebe tudo no celular, a gente não perde tempo escrevendo papelzinho. Mudou a cara da farmácia."`,
    author: "Farmácia SuperPreço"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative bg-[#FAFAFA]" id="depoimentos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#6366F1]">
            Depoimentos
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-[#6366F1]" />
              </div>
              <h3 className="text-lg font-bold text-[#6366F1] mb-4">
                {testimonial.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-8 flex-grow">
                {testimonial.content}
              </p>
              <p className="text-xs text-[#6B7280] font-medium">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
