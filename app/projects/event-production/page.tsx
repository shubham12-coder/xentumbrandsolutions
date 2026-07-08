'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
  '/images/projects/events/x1.jpeg',
  '/images/projects/events/x2.jpeg',
  '/images/projects/events/x3.jpeg',
  '/images/projects/events/c4.jpeg',
  '/images/projects/events/c5.jpeg',
  '/images/projects/events/x6.jpeg',
]

export default function EventProductionPage() {
  const [index, setIndex] = useState(-1)

  const slides = images.map((img) => ({
    src: img,
  }))

  return (
    <main className='min-h-screen bg-white text-black py-32 px-6'>
      <div className='max-w-7xl mx-auto'>

        {/* HEADING */}
        <div className='text-center mb-20'>

          <p className='text-yellow-500 uppercase tracking-[5px] mb-4'>
            Our Work
          </p>

          <h1 className='text-5xl md:text-7xl font-black mb-6 text-black'>
            Event Production
          </h1>

          <p className='max-w-3xl mx-auto text-gray-600 text-lg'>
            Premium event production and fabrication execution by Xentum.
          </p>

        </div>

        {/* GALLERY */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: 'easeOut',
              }}
              onClick={() => setIndex(i)}
              className='group cursor-pointer relative h-[350px] rounded-3xl overflow-hidden border border-gray-200 hover:border-yellow-500 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500'
            >

              <Image
                src={img}
                alt={`Event ${i + 1}`}
                fill
                className='object-cover transition-all duration-700 group-hover:scale-110'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center'>

                <span className='bg-yellow-500 text-black px-5 py-3 rounded-full font-bold scale-90 group-hover:scale-100 transition-all duration-300'>
                  View Image
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </main>
  )
}