"use client";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
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
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Suporte Centralizado
            </h1>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              Nossa equipe está pronta para ajudar você com qualquer dúvida técnica ou suporte ao sistema. 
              Garantimos respostas rápidas para que sua farmácia nunca pare.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-primary">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
                <p className="text-slate-500 mb-6">Canal oficial para suporte e documentação técnica.</p>
                <a 
                  href="mailto:contato@frontlinehelp.com.br"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  contato@frontlinehelp.com.br
                </a>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-emerald-500">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-500 mb-6">Atendimento ágil para suporte operacional imediato.</p>
                <a 
                  href="https://wa.me/554788141031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20"
                >
                  Falar com suporte
                </a>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                {[
                  { q: "Como acesso o sistema?", a: "Você recebeu um domínio exclusivo (ex: sua-farmacia.frontlinehelp.com.br). Basta acessar via qualquer navegador." },
                  { q: "Esqueci minha senha, o que fazer?", a: "Na tela de login, clique em 'Esqueci minha senha' ou envie um e-mail para o suporte acima." },
                  { q: "O suporte funciona aos finais de semana?", a: "Sim, oferecemos suporte prioritário para farmácias 24h e regime de plantão nos finais de semana." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-slate-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
