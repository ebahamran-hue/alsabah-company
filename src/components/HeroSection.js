"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* GLOW */}

      <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full top-20" />

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
          شركة الصباح
        </h1>

        <p className="mt-8 text-zinc-300 text-xl md:text-2xl max-w-3xl mx-auto">
          الجودة والثقة في عالم التبريد والتكييف داخل المملكة العربية السعودية
        </p>

        <button className="mt-10 bg-yellow-400 text-black px-10 py-4 rounded-full text-xl font-black hover:scale-105 transition">
          استكشف الآن
        </button>
      </motion.div>
    </section>
  );
}