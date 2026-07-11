'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const STATS = [
  { end: 100, suffix: '+', label: 'Projects Completed' },
  { end: 50, suffix: '+', label: 'Happy Clients' },
  { end: 2, suffix: '+', label: 'Years Experience' },
  { end: 24, suffix: '/7', label: 'Support System' },
]

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24'
    >
      {/* FLOATING BACKGROUND LOGO — decorative only, hidden from screen readers,
          and paused for anyone who has motion sensitivity turned on */}
      <div
        className='absolute inset-0 flex items-center justify-center pointer-events-none'
        aria-hidden='true'
      >
        <motion.img
          src='/images/hero/x1.png'
          alt=''
          animate={{
            y: [-12, 12, -12],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='w-[70%] max-w-[800px] opacity-[0.04] motion-reduce:animate-none'
        />
      </div>

      <Reveal>
        <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center'>
          <p className='text-yellow-500 uppercase tracking-[6px] mb-6 text-sm font-semibold'>
            Innovate — Execute — Elevate
          </p>

          {/* Headline switched to the brand's own tagline (from the Xentum flyer)
              so the hero and the print collateral say the same thing. */}
          <h1 className='text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8'>
            <span className='block mb-4'>Building Brands</span>
            <span className='block text-yellow-500'>That Deliver.</span>
          </h1>

          <p className='max-w-4xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed mb-10'>
            XENTUM delivers premium branding, MICE events, merchandising,
            event management, fabrication, printing and marketing solutions
            designed for modern businesses and enterprise growth.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-5'>
            <Link href='/services'>
              <button className='bg-yellow-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-sm'>
                Explore Services
                <ArrowRight size={20} />
              </button>
            </Link>

            <Link href='/projects'>
              <button className='bg-white border border-gray-300 px-8 py-4 rounded-full text-black font-semibold hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300'>
                View Projects
              </button>
            </Link>
          </div>

          {/* Animated Counters — each one fades/rises into place with a small
              stagger instead of all four popping in at once */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 md:mt-16'>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className='hover:-translate-y-2 transition-transform duration-300'
              >
                <h3 className='text-4xl font-black text-yellow-500'>
                  <CountUp end={stat.end} duration={2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>
                <p className='text-gray-600 mt-2'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}