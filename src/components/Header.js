"use client";

import Link from "next/link";

export default function Header({ locale }) {
  return (
    <header className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-6
      pt-6
    ">
      <div className="
        max-w-7xl
        mx-auto

        bg-black/40
        backdrop-blur-2xl

        border
        border-white/10

        rounded-3xl

        px-8
        py-5

        flex
        items-center
        justify-between
      ">
        {/* LOGO */}

        <div>
          <h1 className="
            text-2xl
            md:text-3xl
            font-black
          ">
            شركة الصباح
          </h1>

          <p className="
            text-zinc-500
            mt-1
            text-sm
          ">
            Al Sabah Company
          </p>
        </div>

        {/* LANG */}

        <div className="
          flex
          items-center
          bg-white/5
          rounded-full
          p-1
        ">
          <Link
            href="/ar"
            className={`
              px-5
              py-2
              rounded-full
              text-sm
              font-bold
              transition

              ${
                locale === "ar"
                  ? "bg-white text-black"
                  : "text-zinc-400"
              }
            `}
          >
            عربي
          </Link>

          <Link
            href="/en"
            className={`
              px-5
              py-2
              rounded-full
              text-sm
              font-bold
              transition

              ${
                locale === "en"
                  ? "bg-yellow-400 text-black"
                  : "text-zinc-400"
              }
            `}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}