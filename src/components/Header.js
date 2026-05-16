"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header({ locale }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-black text-white">
          AL SABAH
        </h1>

        <nav className="flex gap-6 text-white font-medium">
          <Link href={`/${locale}`}>
            الرئيسية
          </Link>

          <Link href={`/${locale}/offers`}>
            العروض
          </Link>

          <Link href={`/${locale}/contact`}>
            تواصل
          </Link>
        </nav>

        <div className="flex gap-3">
          <Link
            href="/ar"
            className="px-4 py-2 rounded-full bg-white text-black"
          >
            عربي
          </Link>

          <Link
            href="/en"
            className="px-4 py-2 rounded-full bg-yellow-400 text-black"
          >
            EN
          </Link>
        </div>
      </div>
    </motion.header>
  );
}