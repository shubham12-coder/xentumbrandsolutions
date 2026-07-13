'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919582460006"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[92px] md:bottom-[104px] right-4 md:right-8 z-[998] bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.35)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(34,197,94,0.45)] transition-all duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}