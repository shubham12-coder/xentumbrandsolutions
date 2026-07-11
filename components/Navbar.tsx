'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'>
      
      <div className='max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between'>

        {/* LOGO */}
        <Link href='/' className='flex flex-col justify-center'>

          <h1 className='text-black text-3xl md:text-5xl font-black tracking-[3px] md:tracking-[6px] leading-none'>
            XENTUM
          </h1>

          <p className='text-gray-500 text-[7px] md:text-[12px] tracking-[3px] md:tracking-[5px] mt-2 font-medium uppercase'>
            Brand Solutions Pvt. Ltd.
          </p>

        </Link>

        {/* DESKTOP MENU */}
        <nav className='hidden lg:flex items-center gap-7'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-black/80 hover:text-yellow-500 transition-all duration-300 font-medium'
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <a
          href='#contact'
          className='hidden lg:flex items-center justify-center bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)]'
        >
          Let's Talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden text-black'
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-200 shadow-xl'>
          
          <div className='flex flex-col p-6 gap-5'>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='text-black text-lg font-medium'
              >
                {link.name}
              </a>
            ))}

            <a
              href='#contact'
              onClick={() => setMenuOpen(false)}
              className='bg-yellow-500 text-black text-center py-3 rounded-full font-bold'
            >
              Let's Talk
            </a>

          </div>

        </div>
      )}

    </header>
  )
}