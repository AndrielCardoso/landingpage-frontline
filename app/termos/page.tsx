"use client";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 m-0">Termos de Uso</h1>
            </div>

            <p className="text-slate-500 italic mb-12">Última atualização: 19 de Abril de 2026</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-slate-600 leading-relaxed">
                Ao acessar e utilizar o sistema Frontline Help, você concorda em cumprir e estar vinculado a estes Termos de Uso. Este sistema é destinado exclusivamente a profissionais da saúde e estabelecimentos farmacêuticos devidamente licenciados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Licença de Uso</h2>
              <p className="text-slate-600 leading-relaxed">
                A Frontline concede a você uma licença limitada, não exclusiva e intransferível para acessar e utilizar a plataforma para fins de suporte à decisão clínica e gestão farmacêutica. É proibida a reprodução, distribuição ou engenharia reversa de qualquer parte do software.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Responsabilidade Clínica</h2>
              <p className="text-slate-600 leading-relaxed">
                O Frontline Help é uma ferramenta de suporte. A decisão clínica final e a responsabilidade técnica pelas orientações e prescrições permanecem integralmente com o profissional farmacêutico habilitado. O sistema não substitui o julgamento profissional.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Propriedade Intelectual</h2>
              <p className="text-slate-600 leading-relaxed">
                Todo o conteúdo, incluindo fluxogramas, diretrizes científicas, logotipos e algoritmos, são de propriedade exclusiva da Frontline ou de seus licenciadores, protegidos por leis de propriedade intelectual.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modificações</h2>
              <p className="text-slate-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado da plataforma após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-20">
              <p className="text-sm text-slate-500 m-0">
                Dúvidas sobre os Termos de Uso? Entre em contato pelo e-mail: 
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
