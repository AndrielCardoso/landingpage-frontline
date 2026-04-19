"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold text-slate-900 tracking-tight">Frontline</span>
            <p className="text-sm text-slate-500">Desenvolvido com precisão clínica para o futuro da farmácia.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <Link href="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="/suporte" className="hover:text-primary transition-colors">Suporte</Link>
          </div>
          
          <div className="text-sm text-slate-400">
            Frontline © 2026. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
