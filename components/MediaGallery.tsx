'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const galleryImages = [
  '/images/gallery/z1.jpeg',
  '/images/gallery/z2.jpeg',
  '/images/gallery/z3.jpeg',
  '/images/gallery/z4.jpeg',
  '/images/gallery/z5.jpeg',
  '/images/gallery/z6.jpeg',
]

export default function MediaGallery() {
  const [index, setIndex] = useState(-1)

  const slides = galleryImages.map((image) => ({
    src: image,
  }))

  return (
    <section
      id='gallery'
      className='py-16 md:py-20 bg-white text-black'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6'>

        {/* HEADING */}
        <div className='text-center mb-12 md:mb-16'>

          <p className='text-yellow-500 uppercase tracking-[6px] mb-4 text-sm font-semibold'>
            Gallery
          </p>

          <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6'>
            Media Showcase
          </h2>

          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            Explore our events, branding campaigns and premium production work.
          </p>

        </div>

        {/* GALLERY */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {galleryImages.map((image, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className='group cursor-pointer relative h-72 md:h-80 rounded-[32px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:border-yellow-500 transition-all duration-500'
            >

              <Image
                src={image}
                alt={`Gallery ${i + 1}`}
                fill
                className='object-cover group-hover:scale-110 transition-all duration-700'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center'>

                <span className='bg-yellow-500 text-black px-5 py-3 rounded-full font-bold'>
                  View Image
                </span>

              </div>

            </div>
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
    </section>
  )
}