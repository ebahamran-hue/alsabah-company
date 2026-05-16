"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function CircleMenu({
  locale,
  terms,
  offers,
  contact,
}) {
  const items = [
    {
      title: terms,
      href: `/${locale}/terms`,
      color: "bg-white text-black",
    },

    {
      title: offers,
      href: `/${locale}/offers`,
      color: "bg-yellow-400 text-black",
      large: true,
    },

    {
      title: contact,
      href: `/${locale}/contact`,
      color: "bg-blue-500 text-white",
    },
  ];

  return (
    <section className="
      relative
      z-20
      pb-32
      px-6
      -mt-10
    ">
      <div className="
        max-w-6xl
        mx-auto
        flex
        flex-wrap
        justify-center
        items-center
        gap-8
      ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
            }}
          >
            <Link
              href={item.href}
              className={`
                ${item.color}

                ${
                  item.large
                    ? "w-72 h-72"
                    : "w-56 h-56"
                }

                rounded-full
                flex
                items-center
                justify-center
                text-center

                text-2xl
                md:text-3xl
                font-black

                shadow-[0_20px_80px_rgba(0,0,0,0.4)]

                hover:scale-110
                hover:-translate-y-3

                transition
                duration-500
              `}
            >
              <span className="px-6">
                {item.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}