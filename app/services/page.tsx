import {
  Palette,
  Megaphone,
  Gift,
  Briefcase,
  Printer,
  MonitorSmartphone
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding & Identity',
    desc: 'Premium logo, visual identity and brand strategy solutions.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Campaigns',
    desc: 'Creative marketing campaigns and audience engagement.',
  },
  {
    icon: Gift,
    title: 'Corporate Gifting',
    desc: 'Customized merchandise and corporate gifting solutions.',
  },
  {
    icon: Briefcase,
    title: 'Event Management',
    desc: 'Professional MICE and corporate event execution.',
  },
  {
    icon: Printer,
    title: 'Printing Solutions',
    desc: 'High-quality print, signage and fabrication services.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Marketing',
    desc: 'Modern digital marketing and online growth strategies.',
  },
]

export default function ServicesPage() {
  return (
    <section className='min-h-screen bg-white text-black py-32'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* HEADING */}
        <div className='text-center mb-24'>

          <p className='text-yellow-500 uppercase tracking-[6px] mb-5 text-sm'>
            Our Services
          </p>

          <h1 className='text-5xl md:text-7xl font-black mb-8 text-black'>
            What We Provide
          </h1>

          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            Explore premium branding, fabrication,
            event management and marketing solutions.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {services.map((service, index) => {

            const Icon = service.icon

            return (

              <div
                key={index}
                className='group bg-white border border-gray-200 rounded-[32px] p-10 shadow-sm hover:border-yellow-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-500'
              >

                {/* ICON */}
                <div className='w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300'>

                  <Icon className='text-black' size={30} />

                </div>

                {/* TITLE */}
                <h2 className='text-3xl font-black mb-5 text-black'>
                  {service.title}
                </h2>

                {/* DESC */}
                <p className='text-gray-600 leading-relaxed'>
                  {service.desc}
                </p>

              </div>

            )
          })}

        </div>

      </div>
    </section>
  )
}