import Image from 'next/image'

const images = [
  '/images/projects/digital/d1.jpg',
  '/images/projects/digital/d2.jpg',
  '/images/projects/digital/d3.jpg',
  '/images/projects/digital/d4.jpg',
  '/images/projects/digital/d5.jpg',
  '/images/projects/digital/d6.jpg',
]

export default function DigitalCampaignPage() {
  return (
    <main className='min-h-screen bg-white text-white py-32 px-6'>

      <div className='max-w-7xl mx-auto'>

        <div className='text-center mb-20'>

          <p className='text-yellow-500 uppercase tracking-[5px] mb-4'>
            Our Work
          </p>

          <h1 className='text-5xl md:text-7xl font-black mb-6'>
            Digital Campaign
          </h1>

          <p className='max-w-3xl mx-auto text-gray-400 text-lg'>
            Performance marketing and creative campaign executions.
          </p>

        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {images.map((img, index) => (

            <div
              key={index}
              className='relative h-[350px] rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500 transition-all duration-300 group'
            >

              <Image
                src={img}
                alt='Digital Campaign'
                fill
                className='object-cover group-hover:scale-110 transition-all duration-500'
              />

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}