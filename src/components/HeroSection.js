"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  company,
  subtitle,
}) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black"
      >
        {company}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-zinc-400 text-xl max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </section>
  );
}