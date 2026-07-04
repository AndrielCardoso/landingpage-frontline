"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Produto: [
    { label: "Recursos", href: "#recursos" },
    { label: "Planos", href: "#planos" },
    { label: "Suporte", href: "/suporte" },
  ],
  Legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Privacidade", href: "/privacidade" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#080810]">
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-2">
            <img
              src="/Logo_Frontline.png"
              alt="Frontline Help"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-[#4B5563] max-w-xs leading-relaxed">
              Decisão clínica inteligente para farmácias que levam a saúde a
              sério. Prontuário digital, fluxogramas e suporte em tempo real.
            </p>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={title}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-4">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4B5563] hover:text-[#111827] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4B5563]/60 flex flex-col gap-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Frontline Help. Todos os direitos
              reservados.
            </p>
            <p>CNPJ: 66.572.172/0001-48</p>
          </div>
          <p className="text-xs text-[#4B5563]/40">
            contato@frontlinehelp.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};
