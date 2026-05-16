"use client";

import Link from "next/link";

export default function CircleMenu({
  locale,
  terms,
  offers,
  contact,
}) {
  return (
    <section className="flex flex-wrap justify-center gap-10 px-6 pb-32">
      <Link
        href={`/${locale}/terms`}
        className="w-56 h-56 rounded-full bg-white text-black flex items-center justify-center text-center text-2xl font-black hover:scale-110 transition duration-500 shadow-2xl"
      >
        {terms}
      </Link>

      <Link
        href={`/${locale}/offers`}
        className="w-56 h-56 rounded-full bg-yellow-400 text-black flex items-center justify-center text-center text-2xl font-black hover:scale-110 transition duration-500 shadow-2xl"
      >
        {offers}
      </Link>

      <Link
        href={`/${locale}/contact`}
        className="w-56 h-56 rounded-full bg-blue-500 text-white flex items-center justify-center text-center text-2xl font-black hover:scale-110 transition duration-500 shadow-2xl"
      >
        {contact}
      </Link>
    </section>
  );
}