"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  company,
  subtitle,
}) {
  return (
    <section className="
      relative
      min-h-[85vh]
      flex
      flex-col
      items-center
      justify-center
      text-center
      overflow-hidden
      px-6
    ">
      {/* BACKGROUND GLOW */}

      <div className="
        absolute
        w-[700px]
        h-[700px]
        bg-yellow-400/10
        blur-[120px]
        rounded-full
      "></div>

      {/* GRID */}

      <div className="
        absolute
        inset-0
        bg-grid
        opacity-30
      "></div>

      {/* CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10"
      >
        <p className="
          uppercase
          tracking-[10px]
          text-yellow-400
          text-sm
          mb-6
        ">
          AL SABAH COMPANY
        </p>

        <h1 className="
          text-5xl
          md:text-8xl
          font-black
          leading-none
        ">
          {company}
        </h1>

        <p className="
          mt-8
          text-zinc-400
          text-lg
          md:text-2xl
          max-w-3xl
          leading-loose
          mx-auto
        ">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}