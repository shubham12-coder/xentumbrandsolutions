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
      className="relative min-h-screen overflow-hidden bg-white pt-24"
    >

      {/* BACKGROUND XENTUM LOGO */}
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
          className="w-[70%] max-w-[900px] opacity-[0.035]"
        />
      </div>


      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">

        <div className="min-h-[calc(100vh-96px)] flex items-center">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[64%]">

            <Reveal>

              {/* TAGLINE */}
              <p className="text-yellow-500 uppercase tracking-[6px] mb-6 text-sm md:text-base font-semibold">
                Innovate — Execute — Elevate
              </p>


              {/* MAIN HEADING */}
              <h1 className="text-black font-black leading-[0.95] mb-8">

                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[82px]">
                  Building Brands
                </span>

                <span className="block text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[82px] mt-3">
                  That Deliver.
                </span>

              </h1>


              {/* DESCRIPTION */}
              <p className="max-w-[800px] text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-9">
                XENTUM delivers premium branding, MICE events, merchandising,
                event management, fabrication, printing and marketing solutions
                designed for modern businesses and enterprise growth.
              </p>


              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-5">

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
                      shadow-sm
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


              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-10 max-w-[820px]">

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
                    className="hover:-translate-y-2 transition-transform duration-300"
                  >

                    <h3 className="text-3xl md:text-4xl font-black text-yellow-500">
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

            </Reveal>

          </div>


          {/* =========================================
              CORPORATE MAN — LARGE RIGHT SIDE
          ========================================== */}
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
              right-[-90px]
              bottom-0
              hidden
              lg:block
              w-[560px]
              xl:w-[680px]
              2xl:w-[760px]
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

        </div>

      </div>


      {/* =========================================
          MOBILE CORPORATE MAN
      ========================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          lg:hidden
          flex
          justify-center
          mt-8
          relative
          z-10
        "
      >

        <img
          src="/images/hero/hero-man.png"
          alt="Xentum corporate professional"
          className="
            w-[280px]
            sm:w-[340px]
            h-auto
            object-contain
          "
        />

      </motion.div>

    </section>
  )
}