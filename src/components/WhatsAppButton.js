"use client";

import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href="https://wa.me/966500000000"
      target="_blank"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        text-white
        p-5
        rounded-full
        text-4xl
        shadow-2xl
        hover:scale-110
        transition
      "
    >
      <FaWhatsapp />
    </motion.a>
  );
}