import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-2xl text-3xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp />
    </a>
  );
}