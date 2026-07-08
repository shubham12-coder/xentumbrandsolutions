'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919582460006"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-44 md:bottom-48 right-4 md:right-8 z-[998] bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}