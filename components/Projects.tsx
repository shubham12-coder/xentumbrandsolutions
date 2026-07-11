'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

const projects = [
  {
    title: 'Merchandising & Corporate Gifting',
    description:
      'Premium merchandising, gifting and branded corporate solutions.',
    image: '/images/projects/gifting/h1.jpeg',
    link: '/projects/merchandising-gifting',
  },
  {
    title: 'Branding',
    description:
      'Premium branding and creative visual identity solutions.',
    image: '/images/projects/branding/b1.jpeg',
    link: '/projects/branding',
  },
  {
    title: 'Event Production',
    description:
      'High-end corporate event and fabrication execution project.',
    image: '/images/projects/events/x1.jpeg',
    link: '/projects/event-production',
  },
]

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-16 md:py-20 bg-white text-black'
    >
      <Reveal>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>

          {/* HEADING */}
          <div className='text-center mb-12 md:mb-16'>
            <p className='text-yellow-500 uppercase tracking-[6px] mb-4 text-sm font-semibold'>
              Our Projects
            </p>

            <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6'>
              Featured Work
            </h2>

            <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
              Explore our premium branding, production and marketing projects.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {projects.map((project, index) => (
              <div
                key={index}
                className='group bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-500 transition-all duration-500'
              >

                {/* IMAGE */}
                <div className='relative h-56 md:h-64 w-full overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className='object-cover group-hover:scale-110 transition-all duration-700'
                  />
                </div>

                {/* CONTENT */}
                <div className='p-6'>

                  <h3 className='text-2xl font-bold mb-4 text-black'>
                    {project.title}
                  </h3>

                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {project.description}
                  </p>

                  <Link href={project.link}>
                    <button className='bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)] transition-all duration-300'>
                      View Project
                    </button>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  )
}