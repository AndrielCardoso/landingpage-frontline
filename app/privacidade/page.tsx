"use client";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate prose-lg max-w-none"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 m-0">Privacidade</h1>
            </div>

            <p className="text-slate-500 italic mb-12">Última atualização: 19 de Abril de 2026</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Compromisso com a LGPD</h2>
              <p className="text-slate-600 leading-relaxed">
                A Frontline está integralmente comprometida com a Lei Geral de Proteção de Dados (LGPD). Tratamos os dados pessoais e sensíveis (dados de saúde) com o mais alto nível de segurança e confidencialidade.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dados Coletados</h2>
              <p className="text-slate-600 leading-relaxed">
                Coletamos informações necessárias para a prestação dos serviços clínicos, incluindo nome do paciente, histórico de atendimentos, prescrições e dados de saúde fornecidos pelo farmacêutico durante a consulta.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-slate-600 leading-relaxed">
                Os dados são processados exclusivamente para fins de:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Manutenção do Prontuário Digital do Paciente.</li>
                <li>Geração de alertas de segurança clínica e interações.</li>
                <li>Suporte à decisão clínica do profissional.</li>
                <li>Cumprimento de obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Segurança dos Dados</h2>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos criptografia de ponta a ponta e servidores seguros para garantir que apenas pessoas autorizadas tenham acesso às informações. Não comercializamos dados de pacientes em nenhuma hipótese.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Direitos do Titular</h2>
              <p className="text-slate-600 leading-relaxed">
                Os titulares dos dados têm o direito de solicitar o acesso, correção ou anonimização de seus dados pessoais, conforme garantido por lei.
              </p>
            </section>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-20">
              <p className="text-sm text-slate-500 m-0">
                Para questões relacionadas à privacidade, entre em contato com nosso DPO pelo e-mail: 
                <a href="mailto:contato@frontlinehelp.com.br" className="text-primary font-bold ml-1">contato@frontlinehelp.com.br</a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
