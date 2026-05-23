"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Scale, AlertTriangle, Calculator, ChevronRight, Activity, Syringe, ShieldAlert, Baby, BookOpen, CheckSquare, BookA, CheckCircle2, ShieldCheck, Bookmark, XCircle, Plus } from "lucide-react";

const tabs = [
  { id: "consulta", label: "Consulta Medicamentos", icon: Search },
  { id: "comparacao", label: "Comparação Lado a Lado", icon: Scale },
  { id: "interacoes", label: "Interações Medicamentosas", icon: AlertTriangle },
  { id: "calculadora", label: "Calculadora de Doses", icon: Calculator },
  { id: "lactacao", label: "Guia de Lactação", icon: Baby },
  { id: "legislacao", label: "Legislação Farmacêutica", icon: BookOpen },
  { id: "dispensacao", label: "Guia de Dispensação", icon: CheckSquare },
  { id: "dicionario", label: "Dicionário Clínico", icon: BookA },
];

export const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("consulta");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262630] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
            Veja na prática
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            O Frontline
            <br />
            <span className="text-[#9CA3AF]">por dentro.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Experimente uma simulação da nossa plataforma e veja como entregamos
            decisão clínica em milissegundos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden bg-[#0A0A0F] border border-[#262630] shadow-[0_0_80px_rgba(0,102,255,0.07)] flex flex-col md:flex-row">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-72 bg-[#141419] border-r border-[#262630] p-4 flex flex-col gap-2 shrink-0 overflow-x-auto md:overflow-visible flex-row md:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal ${
                    activeTab === tab.id
                      ? "bg-[#0066FF]/10 border border-[#0066FF]/20 text-white shadow-inner"
                      : "border border-transparent text-[#9CA3AF] hover:bg-white/5 hover:text-[#EDEDED]"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 shrink-0 ${activeTab === tab.id ? "text-[#0066FF]" : ""}`} />
                  <span className="text-sm font-medium leading-tight">{tab.label}</span>
                </button>
              ))}
              
              {/* "E muito mais" indicator */}
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left border border-dashed border-[#262630] text-[#9CA3AF]/60 bg-white/[0.02] select-none whitespace-nowrap md:whitespace-normal cursor-default mt-1">
                <Plus className="w-4 h-4 shrink-0" />
                <span className="text-sm font-medium leading-tight italic">E muito mais...</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-10 bg-[#0A0A0F] min-h-[550px] flex items-center justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === "consulta" && <ConsultaMock key="consulta" />}
                {activeTab === "comparacao" && <ComparacaoMock key="comparacao" />}
                {activeTab === "interacoes" && <InteracoesMock key="interacoes" />}
                {activeTab === "calculadora" && <CalculadoraMock key="calculadora" />}
                {activeTab === "lactacao" && <LactacaoMock key="lactacao" />}
                {activeTab === "legislacao" && <LegislacaoMock key="legislacao" />}
                {activeTab === "dispensacao" && <DispensacaoMock key="dispensacao" />}
                {activeTab === "dicionario" && <DicionarioMock key="dicionario" />}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Mockup Components ---

const ConsultaMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-2xl mx-auto space-y-4"
  >
    {/* Header */}
    <div className="bg-[#141419] p-6 rounded-xl border border-[#262630]">
      <div className="mb-4">
        <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-1">Dipirona</h3>
        <p className="text-xs text-[#9CA3AF] uppercase font-bold tracking-wider">DIPIRONA</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1.5 bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] rounded-lg text-xs font-bold uppercase tracking-wider">
          Analgésicos Não Narcóticos
        </span>
        <span className="px-3 py-1.5 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] rounded-lg text-xs font-bold uppercase tracking-wider">
          Genérico
        </span>
      </div>
    </div>

    {/* Grid of details */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { title: "Indicação", desc: "Analgésico e antitérmico para tratamento de dor e febre.", icon: Activity },
        { title: "Posologia", desc: "Adultos: 500 mg a 1.000 mg por dose, até 4 vezes ao dia. Gotas: 20 a 40 gotas.", icon: Syringe },
        { title: "Mecanismo", desc: "Analgésico com ação central e periférica. Inibe vias relacionadas à dor.", icon: Search },
        { title: "Meia-vida", desc: "Início de ação oral ocorre em 30 a 60 minutos. A duração é de aprox. 4 horas.", icon: Calculator },
      ].map((item, i) => (
        <div key={i} className="bg-[#141419] p-5 rounded-xl border border-[#262630] hover:border-[#0066FF]/30 transition-colors">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-white/5">
              <item.icon className="w-3.5 h-3.5 text-[#0066FF]" />
            </div>
            {item.title}
          </h4>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ComparacaoMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-3xl mx-auto space-y-4"
  >
    <div className="flex bg-[#141419] rounded-xl border border-[#262630] overflow-hidden flex-col sm:flex-row">
       {/* Dipirona Side */}
       <div className="flex-1 p-6 border-b sm:border-b-0 sm:border-r border-[#262630]">
         <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">Dipirona</h3>
         <div className="space-y-6">
            <div>
               <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" /> Indicação
               </p>
               <p className="text-sm text-[#EDEDED] leading-relaxed">Analgésico e antitérmico para tratamento de dor e febre.</p>
            </div>
            <div>
               <p className="text-[10px] font-bold text-[#0066FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] inline-block" /> Como Age
               </p>
               <p className="text-sm text-[#9CA3AF] leading-relaxed">Ação central e periférica. Efeito espasmolítico leve.</p>
            </div>
         </div>
       </div>
       {/* Paracetamol Side */}
       <div className="flex-1 p-6">
         <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">Paracetamol</h3>
         <div className="space-y-6">
            <div>
               <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" /> Indicação
               </p>
               <p className="text-sm text-[#EDEDED] leading-relaxed">Alívio de dor leve a moderada e redução da febre.</p>
            </div>
            <div>
               <p className="text-[10px] font-bold text-[#0066FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] inline-block" /> Como Age
               </p>
               <p className="text-sm text-[#9CA3AF] leading-relaxed">Ação predominantemente central. Pouca ação anti-inflamatória.</p>
            </div>
         </div>
       </div>
    </div>
  </motion.div>
);

const InteracoesMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-2xl mx-auto space-y-4"
  >
    <div className="bg-[#141419] p-6 sm:p-8 rounded-xl border border-[#EF4444]/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]" />
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-2.5 py-1 bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] rounded uppercase text-[10px] font-bold tracking-wider flex items-center gap-1.5">
          <ShieldAlert className="w-3 h-3" /> Alto Risco
        </span>
        <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#9CA3AF] rounded uppercase text-[10px] font-bold tracking-wider">
          Score 94
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Ácido Acetilsalicílico + Varfarina</h3>
      <p className="text-[#EF4444] font-medium text-sm mb-6">Aumento crítico de risco de sangramento</p>

      <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
        A associação combina medicamento com efeito antitrombótico e outro fator que favorece sangramento. A relevância é maior em idosos, histórico de úlcera ou doença hepática.
      </p>

      <div className="bg-[#FEBD2E]/5 border border-[#FEBD2E]/20 p-5 rounded-xl">
        <h4 className="text-[#FEBD2E] font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          Conduta Clínica
        </h4>
        <p className="text-sm text-[#FEBD2E]/90 leading-relaxed">
          Verificar sinais de sangramento, fezes escuras, vômitos com sangue ou hematomas extensos. Orientar avaliação profissional imediata quando houver sinais de alerta.
        </p>
      </div>
    </div>
  </motion.div>
);

const CalculadoraMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-xl mx-auto"
  >
    <div className="bg-[#141419] p-6 sm:p-8 rounded-xl border border-[#262630]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-[#0066FF]" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">Calculadora Pediátrica</h3>
      </div>
      
      <div className="space-y-5 mb-8">
        <div>
          <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-bold mb-2 block">Medicamento Selecionado</label>
          <div className="w-full bg-[#0A0A0F] border border-[#262630] rounded-lg p-3.5 text-[#EDEDED] text-sm font-medium flex items-center justify-between">
            Dipirona Gotas 500mg/mL
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-bold mb-2 block">Peso (kg)</label>
            <div className="w-full bg-[#0066FF]/5 border border-[#0066FF]/30 rounded-lg p-3.5 text-white text-sm font-medium ring-1 ring-[#0066FF]/20 shadow-[0_0_15px_rgba(0,102,255,0.1)]">
              15 kg
              <span className="animate-pulse ml-1 inline-block w-0.5 h-3.5 bg-[#0066FF] align-middle" />
            </div>
          </div>
          <div>
            <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-bold mb-2 block">Idade</label>
            <div className="w-full bg-[#0A0A0F] border border-[#262630] rounded-lg p-3.5 text-[#9CA3AF] text-sm">
              3 anos
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0066FF]/10 to-transparent border border-[#0066FF]/20 rounded-xl p-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-50" />
        <p className="text-[#0066FF] text-[10px] font-bold uppercase tracking-widest mb-3">Dose Exata Calculada</p>
        <p className="text-5xl font-black text-white mb-2">6 a 10 gotas</p>
        <p className="text-[#9CA3AF] text-sm">A cada 6 horas (Máx. 4x ao dia)</p>
      </div>
    </div>
  </motion.div>
);

const LactacaoMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-2xl mx-auto"
  >
    <div className="w-full rounded-xl overflow-hidden border border-[#262630]">
      {/* Top Banner */}
      <div className="bg-[#F97316] p-6 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
          <div className="w-4 h-1 bg-white rounded-full" />
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tight">Não Recomendado</h3>
        <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest mt-1">Nível de Segurança</p>
      </div>
      {/* Bottom Content */}
      <div className="bg-[#141419] p-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center">
             <div className="w-4 h-1 bg-[#F97316] rounded-full" />
          </div>
          <div>
            <span className="px-2 py-0.5 bg-[#F97316] text-white rounded text-[10px] font-bold uppercase tracking-wider">Não Recomendado</span>
            <h4 className="text-white font-bold text-lg mt-1">Dipirona / Metamizol</h4>
            <p className="text-[#9CA3AF] text-xs">Pesquisado: DIPIRONA</p>
          </div>
        </div>
        
        {/* Scale Bar */}
        <div className="space-y-2">
          <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-wider flex justify-between">
            Nível de Segurança
            <span className="text-[#F97316]">Risco Moderado a Alto</span>
          </p>
          <div className="flex h-2 w-full gap-1">
             <div className="flex-1 bg-[#10B981]/20 rounded-full" />
             <div className="flex-1 bg-[#FEBD2E]/20 rounded-full" />
             <div className="flex-1 bg-[#F97316] rounded-full relative shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
             <div className="flex-1 bg-[#EF4444]/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const LegislacaoMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-2xl mx-auto"
  >
    <div className="bg-[#141419] p-6 sm:p-8 rounded-xl border border-[#262630]">
       <div className="flex justify-between items-start mb-6">
         <div>
            <h3 className="text-lg font-bold text-white leading-tight mb-2">Posso aceitar uma prescrição escrita com caneta vermelha?</h3>
            <p className="text-[#9CA3AF] text-xs flex items-center gap-1.5"><Bookmark className="w-3 h-3" /> Portaria 344/98</p>
         </div>
       </div>

       <p className="text-sm text-[#EDEDED] leading-relaxed mb-6">
         Sim, é permitido aceitar uma receita escrita com caneta vermelha, desde que a escrita esteja legível e não apresente rasuras. A legislação brasileira não proíbe o uso de caneta vermelha para a prescrição de medicamentos.
       </p>

       <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] rounded-lg text-xs font-bold border border-[#10B981]/20">
         <ShieldCheck className="w-4 h-4" /> Conteúdo Verificado e Atualizado
       </div>
    </div>
  </motion.div>
);

const DispensacaoMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-3xl mx-auto"
  >
    <div className="bg-[#141419] rounded-xl border border-[#262630] overflow-hidden">
      {/* Header */}
      <div className="bg-[#0A0A0F] p-4 border-b border-[#262630] flex justify-between items-center">
        <p className="text-xs text-[#0066FF] font-bold uppercase tracking-wider">Progresso da Conferência</p>
        <p className="text-xs text-white font-bold bg-[#262630] px-2 py-1 rounded">3 de 9</p>
      </div>
      <div className="h-0.5 w-full bg-[#262630]">
        <div className="h-full bg-[#0066FF] w-[33%] shadow-[0_0_10px_rgba(0,102,255,0.5)]" />
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {[
          "Dentro do campo 'identificação do emitente' deve conter nome, Nº de Inscrição no Conselho Regional com a UF. Os dados estão corretos?",
          "As receitas de Controle Especial devem estar prescritas em receituário com 1ª e 2ª via. O paciente está com a 1ª via em mãos?",
          "É obrigatório conter os dados do paciente e seu responsável se menor de idade. A prescrição é intransferível. Os dados estão corretos?"
        ].map((item, i) => (
           <div key={i} className="bg-[#0A0A0F] border border-[#262630] rounded-lg p-4 transition-colors hover:border-[#10B981]/30">
              <div className="flex gap-3 mb-4">
                 <div className="w-5 h-5 rounded-full border border-[#262630] flex items-center justify-center text-[10px] text-[#9CA3AF] shrink-0 mt-0.5">{i+1}</div>
                 <p className="text-xs text-[#EDEDED] leading-relaxed">{item}</p>
              </div>
              <div className="flex gap-2">
                 <button className="flex-1 py-2 rounded-md bg-[#262630]/30 text-[#9CA3AF] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors hover:bg-[#262630]/60">
                   <XCircle className="w-3.5 h-3.5" /> Não Conferiu
                 </button>
                 <button className="flex-1 py-2 rounded-md bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors hover:bg-[#10B981]/20">
                   <CheckCircle2 className="w-3.5 h-3.5" /> Confirmado
                 </button>
              </div>
           </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const DicionarioMock = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-full max-w-3xl mx-auto h-full"
  >
    <div className="bg-[#141419] p-6 rounded-xl border border-[#262630] flex flex-col h-full">
       <div className="mb-6 flex justify-between items-end">
         <div>
           <h3 className="text-xl font-bold text-white mb-1">Dicionário</h3>
           <p className="text-xs text-[#9CA3AF]">Termos farmacêuticos e químicos</p>
         </div>
         <span className="text-xs text-[#0066FF] font-bold">227 termos</span>
       </div>
       
       <div className="w-full bg-[#0A0A0F] border border-[#262630] rounded-lg p-3 text-[#9CA3AF] text-sm flex items-center gap-2 mb-6">
         <Search className="w-4 h-4 text-[#9CA3AF]/50" /> 
         <span className="text-[#9CA3AF]/50">Pesquisar termo (ex: Hemifumarato, pH...)</span>
       </div>

       <div className="flex gap-4">
         {/* Sidebar Letters */}
         <div className="w-8 shrink-0 flex flex-col gap-2">
           {['A','B','C','D','E'].map((letter, i) => (
             <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer ${letter === 'A' ? 'bg-[#0066FF] text-white shadow-[0_0_10px_rgba(0,102,255,0.3)]' : 'text-[#9CA3AF] hover:bg-white/5'}`}>
               {letter}
             </div>
           ))}
         </div>
         
         {/* Terms list */}
         <div className="flex-1 space-y-3">
           {[
             { title: "Apatia", desc: "Estado de indiferença, baixa iniciativa ou redução importante de interesse." },
             { title: "Apirexia", desc: "Estado ausente de febre; apirético." },
             { title: "Apneia", desc: "Interrupção temporária da respiração ou ausência de movimentos respiratórios por determinado período." }
           ].map((item, i) => (
             <div key={i} className="bg-[#0A0A0F] border border-[#262630] rounded-lg p-4 hover:border-[#0066FF]/30 transition-colors">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookA className="w-3.5 h-3.5 text-[#0066FF]" />
                    {item.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#262630] rotate-90" />
                </h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed ml-5">{item.desc}</p>
             </div>
           ))}
         </div>
       </div>
    </div>
  </motion.div>
);
