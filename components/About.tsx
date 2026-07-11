'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

export default function About() {
  return (
    <section
      id='about'
      className='py-14 md:py-18 bg-white text-black'
    >
      <Reveal>
        <div className='max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center'>

          {/* IMAGE */}
          <div className='relative w-full h-[250px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm'>
            <Image
              src='/images/about/about.jpg'
              alt='About Xentum'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className='text-yellow-500 uppercase tracking-[4px] md:tracking-[5px] mb-4 text-xs md:text-sm'>
              About Us
            </p>

            <h2 className='text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-black'>
              Creative Marketing Agency
            </h2>

            <p className='text-gray-600 text-base md:text-lg leading-relaxed mb-6'>
              Xentum is a premium branding and marketing agency focused on
              delivering modern digital experiences, business growth strategies,
              fabrication solutions, and high-end creative production.
            </p>

            <Link href='/about'>
              <button className='w-full sm:w-auto bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300'>
                Learn More
              </button>
            </Link>
          </div>

        </div>
      </Reveal>
    </section>
  )
}