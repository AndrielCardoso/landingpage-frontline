"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  ArrowLeftRight, 
  ClipboardList, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  Search,
  BarChart3,
  Stethoscope,
  Syringe,
  Pill,
  Smartphone,
  LayoutGrid,
  Baby,
  CalendarCheck,
  Repeat,
  Gavel,
  BookOpen,
  Box,
  Scale,
  Library,
  Building2,
  Palette
} from "lucide-react";

const mainFeatures = [
  {
    title: "Calculadora de Doses",
    description: "Cálculos pediátricos e adultos precisos em segundos, garantindo a segurança posológica ideal para cada paciente.",
    icon: Calculator,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Prontuário Digital",
    description: "Histórico clínico completo com registros de consultas, vacinação e evolução do paciente em uma interface segura.",
    icon: ClipboardList,
    color: "bg-primary",
    lightColor: "bg-primary/5",
    textColor: "text-primary"
  },
  {
    title: "Interações Medicamentosas",
    description: "Análise inteligente e instantânea de possíveis conflitos entre medicamentos, suplementos e alimentos.",
    icon: Pill,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    title: "Triagem Avançada",
    description: "Protocolos clínicos integrados para direcionamento rápido e eficiente na atenção farmacêutica primária.",
    icon: Stethoscope,
    color: "bg-slate-800",
    lightColor: "bg-slate-100",
    textColor: "text-slate-900"
  }
];

const secondaryFeatures = [
  { 
    title: "Segurança total", 
    icon: ShieldCheck,
    details: "Criptografia de ponta a ponta e redundância de dados em conformidade com a LGPD."
  },
  { 
    title: "Performance extrema", 
    icon: Zap,
    details: "Carregamento instantâneo em qualquer dispositivo, mesmo em conexões lentas."
  },
  { 
    title: "Lactação", 
    icon: Baby,
    details: "Base de dados completa sobre a segurança de fármacos durante o período de amamentação."
  },
  { 
    title: "Validade de receitas", 
    icon: CalendarCheck,
    details: "Sistema inteligente de verificação de prazos e conformidade legal de prescrições."
  },
  { 
    title: "Intercambialidade", 
    icon: Repeat,
    details: "Guia rápido de medicamentos equivalentes e intercambiáveis com segurança técnica."
  },
  { 
    title: "Dúvidas de legislação", 
    icon: Gavel,
    details: "Acesso rápido às normas da ANVISA e diretrizes do Conselho Federal de Farmácia."
  },
  { 
    title: "Guia de dispensação", 
    icon: BookOpen,
    details: "Orientações passo a passo para a entrega segura de medicamentos controlados e comuns."
  },
  { 
    title: "Armazenamento correto", 
    icon: Box,
    details: "Instruções específicas sobre temperatura, luz e umidade para manutenção da estabilidade."
  },
  { 
    title: "Cálculo de IMC", 
    icon: Scale,
    details: "Ferramenta integrada para avaliação rápida do índice de massa corporal e riscos associados."
  },
  { 
    title: "Dicionário da saúde", 
    icon: Library,
    details: "Glossário técnico completo de termos clínicos e farmacêuticos para consulta rápida."
  },
  { 
    title: "Busca inteligente", 
    icon: Search,
    details: "Motor de busca semântico que entende princípios ativos, nomes comerciais e sintomas."
  },
  { 
    title: "Relatórios clínicos", 
    icon: BarChart3,
    details: "Geração automática de relatórios detalhados para pacientes e médicos assistentes."
  },
  { 
    title: "Gestão vacinal", 
    icon: Syringe,
    details: "Controle de lotes, datas de aplicação e esquemas vacinais recomendados."
  },
  { 
    title: "App mobile", 
    icon: Smartphone,
    details: "Versão otimizada para smartphones para consultas rápidas na palma da mão."
  },
  { 
    title: "Multi-unidades", 
    icon: Building2,
    details: "Gerenciamento centralizado para redes de farmácias com sincronização em tempo real."
  },
  { 
    title: "White-label", 
    icon: Palette,
    details: "Possibilidade de personalizar o sistema com a identidade visual da sua farmácia."
  }
];

export const Features = () => {
  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Arsenal Clínico Completo
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto">
            Mais de 17 ferramentas desenvolvidas por especialistas para elevar o nível 
            da atenção farmacêutica no seu estabelecimento.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`${feature.lightColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Grid */}
        <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-10">
            E muito mais ferramentas de precisão
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
            {secondaryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="relative flex flex-col items-center gap-3 text-center group cursor-help"
              >
                {/* Tooltip */}
                <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-900/90 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 shadow-xl border border-slate-700/50">
                  <div className="relative">
                    {feature.details}
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900/90" />
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all group-hover:shadow-lg group-hover:shadow-primary/5">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
