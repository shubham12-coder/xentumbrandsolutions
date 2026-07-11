'use client'

import {
  Palette,
  Send,
  Gift,
  CalendarDays,
  Printer
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding & Identity Development',
    description:
      'Crafting distinctive brand identities that resonate with your audience and stand out in the market.',
  },
  {
    icon: Send,
    title: 'Marketing Strategy & Campaigns',
    description:
      'Data-driven marketing strategies designed to amplify your reach and drive measurable results.',
  },
  {
    icon: Gift,
    title: 'Merchandising & Corporate Gifting',
    description:
      'Premium branded merchandise and corporate gifts that leave a lasting impression.',
  },
  {
    icon: CalendarDays,
    title: 'Corporate Events & MICE',
    description:
      'End-to-end event management creating memorable experiences for your stakeholders.',
  },
  {
    icon: Printer,
    title: 'Printing, Signage & Display',
    description:
      'High-quality print solutions and impactful signage for maximum brand visibility.',
  },
]

export default function Services() {
  return (
    <section
      id='services'
      className='py-16 md:py-20 bg-white text-black'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6'>

        {/* HEADING */}
        <div className='text-center mb-12 md:mb-16'>

          <p className='text-yellow-500 uppercase tracking-[6px] mb-4 text-sm font-semibold'>
            Our Expertise
          </p>

          <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6'>
            What We Do
          </h2>

          <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
            Comprehensive solutions tailored to elevate your brand
            across every touchpoint.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className='group bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-500 transition-all duration-500'
              >

                {/* ICON */}
                <div className='w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300'>

                  <Icon
                    size={28}
                    className='text-black'
                  />

                </div>

                {/* TITLE */}
                <h3 className='text-2xl font-bold leading-snug mb-5 text-black group-hover:text-yellow-500 transition-all duration-300'>

                  {service.title}

                </h3>

                {/* DESCRIPTION */}
                <p className='text-gray-600 leading-relaxed text-lg'>

                  {service.description}

                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}