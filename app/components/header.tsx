"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-1 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-full shadow-sm">
        <Link href="/" className="flex items-center overflow-hidden">
          <Image
            src="/Logo_Frontline.png"
            alt="Frontline Help Logo"
            width={240}
            height={80}
            priority
            className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-10 text-sm font-semibold text-slate-600 mr-2">
          <Link href="#sobre" className="hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#recursos" className="hover:text-primary transition-colors">
            Recursos
          </Link>
          <Link href="#vantagens" className="hover:text-primary transition-colors">
            Vantagens
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};
