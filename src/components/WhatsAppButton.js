import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full text-4xl shadow-2xl z-50 hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
}