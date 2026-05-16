"use client";

import Link from "next/link";

import {
  FaWhatsapp,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        mt-32
        overflow-hidden
      "
    >
      {/* BG */}

      <div
        className="
          absolute
          inset-0
          bg-grid
          opacity-10
        "
      ></div>

      {/* GLOW */}

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-0
          w-[500px]
          h-[500px]
          bg-yellow-400/5
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-20
        "
      >
        <div
          className="
            grid
            md:grid-cols-4
            gap-14
          "
        >
          {/* COMPANY */}

          <div>
            <h2
              className="
                text-3xl
                font-black
                mb-5
              "
            >
              شركة الصباح
            </h2>

            <p
              className="
                text-zinc-400
                leading-loose
              "
            >
              حلول احترافية في عالم التبريد
              والتكييف بأعلى معايير الجودة
              والثقة وخدمة العملاء.
            </p>
          </div>

          {/* LINKS */}

          <div>
            <h3
              className="
                text-xl
                font-black
                mb-6
              "
            >
              روابط مهمة
            </h3>

            <div
              className="
                flex
                flex-col
                gap-4
                text-zinc-400
              "
            >
              <Link
                href="/ar/terms"
                className="hover:text-yellow-400 transition"
              >
                الشروط والأحكام
              </Link>

              <Link
                href="/ar/offers"
                className="hover:text-yellow-400 transition"
              >
                العروض
              </Link>

              <Link
                href="/ar/contact"
                className="hover:text-yellow-400 transition"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3
              className="
                text-xl
                font-black
                mb-6
              "
            >
              معلومات التواصل
            </h3>

            <div
              className="
                space-y-4
                text-zinc-400
              "
            >
              <p>
                📞 +966500000000
              </p>

              <p>
                📧 info@alsabah.com
              </p>

              <p>
                📍 جدة - المملكة العربية السعودية
              </p>
            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <h3
              className="
                text-xl
                font-black
                mb-6
              "
            >
              تابعنا
            </h3>

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <a
                href="#"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                "
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                "
              >
                <FaSnapchatGhost />
              </a>

              <a
                href="#"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                "
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            mt-16
            pt-8
            text-center
            text-zinc-500
          "
        >
          © 2026 Al Sabah Company — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}