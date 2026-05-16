"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [lang, setLang] = useState("ar");

  const content = {
    ar: {
      company: "شركة الصباح",
      subtitle: "الجودة والثقة في عالم التبريد والتكييف",
      offers: "العروض",
      terms: "الشروط والأحكام",
      contact: "تواصل معنا",
      switcher: "English",
    },

    en: {
      company: "Al Sabah Company",
      subtitle: "Quality & Trust in Cooling Solutions",
      offers: "Offers",
      terms: "Terms & Conditions",
      contact: "Contact Us",
      switcher: "العربية",
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      {/* HEADER */}

      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          {t.company}
        </h1>

        <button
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          {t.switcher}
        </button>
      </header>

      {/* HERO */}

      <section className="flex flex-col items-center justify-center text-center px-6 pt-24">
        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          {t.company}
        </h2>

        <p className="mt-6 text-zinc-300 text-lg md:text-2xl max-w-2xl">
          {t.subtitle}
        </p>

        {/* CIRCLES */}

        <div className="mt-20 flex flex-wrap justify-center gap-10">
          {/* TERMS */}

          <Link
            href="/terms"
            className="group w-56 h-56 rounded-full bg-white text-black flex flex-col items-center justify-center text-center shadow-2xl hover:scale-110 transition duration-500"
          >
            <span className="text-2xl font-black">
              {t.terms}
            </span>
          </Link>

          {/* OFFERS */}

          <Link
            href="/offers"
            className="group w-56 h-56 rounded-full bg-yellow-400 text-black flex flex-col items-center justify-center text-center shadow-2xl hover:scale-110 transition duration-500"
          >
            <span className="text-2xl font-black">
              {t.offers}
            </span>
          </Link>

          {/* CONTACT */}

          <Link
            href="/contact"
            className="group w-56 h-56 rounded-full bg-blue-500 text-white flex flex-col items-center justify-center text-center shadow-2xl hover:scale-110 transition duration-500"
          >
            <span className="text-2xl font-black">
              {t.contact}
            </span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="mt-32 border-t border-white/10 py-8 text-center text-zinc-400">
        © 2026 Al Sabah Company — All Rights Reserved
      </footer>
    </main>
  );
}