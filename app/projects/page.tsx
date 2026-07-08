import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Merchandising & Corporate Gifting',
    image: '/images/projects/gifting/h1.jpeg',
    link: '/projects/merchandising-gifting',
  },
  {
    title: 'Branding',
    image: '/images/projects/branding/b1.jpeg',
    link: '/projects/branding',
  },
  {
    title: 'Event Production',
    image: '/images/projects/events/x1.jpeg',
    link: '/projects/event-production',
  },
]

export default function ProjectsPage() {
  return (
    <section className='min-h-screen bg-white text-black py-32'>

      <div className='max-w-7xl mx-auto px-6'>

        {/* HEADING */}
        <div className='text-center mb-24'>

          <p className='text-yellow-500 uppercase tracking-[6px] mb-5 text-sm font-semibold'>
            Our Portfolio
          </p>

          <h1 className='text-5xl md:text-7xl font-black mb-8 text-black'>
            Featured Projects
          </h1>

          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            Explore our premium branding, fabrication,
            production and creative execution work.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {projects.map((project, index) => (

            <div
              key={index}
              className='group bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-sm hover:border-yellow-500 hover:shadow-[0_20px_60px_rgba(245,183,0,0.15)] transition-all duration-700 hover:-translate-y-3'
            >

              {/* IMAGE */}
              <div className='relative h-[300px] overflow-hidden'>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  className='object-cover group-hover:scale-110 transition-all duration-1000'
                />

              </div>

              {/* CONTENT */}
              <div className='p-8'>

                <h2 className='text-3xl font-black mb-4 text-black group-hover:text-yellow-500 transition-all duration-300'>
                  {project.title}
                </h2>

                <p className='text-gray-600 mb-8 leading-relaxed'>
                  Premium execution and creative branding showcase.
                </p>

                <Link href={project.link}>

                  <button className='bg-yellow-500 text-black px-7 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)] transition-all duration-300'>

                    View Gallery

                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}