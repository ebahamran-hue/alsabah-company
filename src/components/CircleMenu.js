"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CircleMenu({ locale }) {
  const items = [
    {
      title: "الشروط والأحكام",
      href: `/${locale}/terms`,
      color: "bg-white text-black",
    },

    {
      title: "العروض",
      href: `/${locale}/offers`,
      color: "bg-yellow-400 text-black",
    },

    {
      title: "تواصل معنا",
      href: `/${locale}/contact`,
      color: "bg-blue-500 text-white",
    },
  ];

  return (
    <section className="py-32">
      <div className="flex flex-wrap justify-center gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link
              href={item.href}
              className={`w-64 h-64 rounded-full ${item.color} flex items-center justify-center text-center text-2xl font-black shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:scale-110 transition duration-500`}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}