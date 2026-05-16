"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ar");

  const content = {
    ar: {
      title: "شركة الصباح",
      offers: "تصفح العروض",
      terms: "الشروط والأحكام",
      contact: "تواصل معنا",
    },
    en: {
      title: "Al Sabah Company",
      offers: "View Offers",
      terms: "Terms & Conditions",
      contact: "Contact Us",
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10"
    >
      <button
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
        className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full"
      >
        {lang === "ar" ? "English" : "العربية"}
      </button>

      <h1 className="text-5xl font-bold">{t.title}</h1>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <a
          href="/terms"
          className="w-52 h-52 rounded-full bg-white text-black flex items-center justify-center text-center text-xl font-bold hover:scale-110 transition"
        >
          {t.terms}
        </a>

        <a
          href="#"
          className="w-52 h-52 rounded-full bg-yellow-400 text-black flex items-center justify-center text-center text-xl font-bold hover:scale-110 transition"
        >
          {t.offers}
        </a>

        <a
          href="#"
          className="w-52 h-52 rounded-full bg-blue-500 text-white flex items-center justify-center text-center text-xl font-bold hover:scale-110 transition"
        >
          {t.contact}
        </a>
      </div>
    </main>
  );
}