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
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24"
    >

      {/* =========================
          BACKGROUND XENTUM LOGO
      ========================== */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <motion.img
          src="/images/hero/x1.png"
          alt=""
          animate={{
            y: [-12, 12, -12],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[70%] max-w-[900px] opacity-[0.04] motion-reduce:animate-none"
        />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}
      <Reveal>
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[68%]">

            {/* TAGLINE */}
            <p className="text-yellow-500 uppercase tracking-[6px] mb-7 text-sm md:text-base font-semibold">
              Innovate — Execute — Elevate
            </p>

            {/* HEADLINE */}
            <h1 className="text-black font-black leading-[0.95] mb-8">

              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
                Building Brands
              </span>

              <span className="block text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] mt-4">
                That Deliver.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-[950px] text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-10">
              XENTUM delivers premium branding, MICE events, merchandising,
              event management, fabrication, printing and marketing solutions
              designed for modern businesses and enterprise growth.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

              <Link href="/services">
                <button
                  className="
                    bg-yellow-500
                    text-black
                    px-8
                    py-4
                    rounded-full
                    font-bold
                    flex
                    items-center
                    gap-3
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-md
                  "
                >
                  Explore Services
                  <ArrowRight size={20} />
                </button>
              </Link>

              <Link href="/projects">
                <button
                  className="
                    bg-white
                    border
                    border-gray-300
                    px-8
                    py-4
                    rounded-full
                    text-black
                    font-semibold
                    hover:bg-yellow-500
                    hover:border-yellow-500
                    transition-all
                    duration-300
                  "
                >
                  View Projects
                </button>
              </Link>

            </div>

            {/* =========================
                STATS
            ========================== */}
            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-x-6
                gap-y-6
                mt-10
                max-w-[780px]
              "
            >

              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    hover:-translate-y-2
                    transition-transform
                    duration-300
                  "
                >

                  <h3 className="text-4xl md:text-5xl font-black text-yellow-500">
                    <CountUp
                      end={stat.end}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {stat.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </Reveal>

      {/* =========================
          CORPORATE MAN
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          right-[-25px]
          bottom-0
          hidden
          lg:block
          w-[470px]
          xl:w-[570px]
          2xl:w-[650px]
          pointer-events-none
          z-20
        "
      >

        <img
          src="/images/hero/hero-man.png"
          alt="Xentum corporate professional"
          className="
            w-full
            h-auto
            object-contain
            object-bottom
          "
        />

      </motion.div>

    </section>
  )
}