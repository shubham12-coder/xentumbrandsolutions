'use client'

import { FaPhoneAlt } from 'react-icons/fa'

export default function CallButton() {
  return (
    <a
      href='tel:+919582460006'
      aria-label='Call Now'
      className='fixed bottom-[180px] md:bottom-[196px] right-4 md:right-8 z-[997] bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:scale-110 transition-all duration-300'
    >
      <FaPhoneAlt size={24} />
    </a>
  )
}