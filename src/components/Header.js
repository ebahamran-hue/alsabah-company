"use client";

import Link from "next/link";

export default function Header({ locale }) {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-black">
          شركة الصباح
        </h1>

        <div className="flex gap-3">
          <Link
            href="/ar"
            className="bg-white text-black px-4 py-2 rounded-full font-bold"
          >
            عربي
          </Link>

          <Link
            href="/en"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold"
          >
            English
          </Link>
        </div>
      </div>
    </header>
  );
}