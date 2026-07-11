import Image from 'next/image'

export default function Achievements() {
  return (
    <section
      id='achievements'
      className='py-16 md:py-20 bg-black text-white'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6'>

        <div className='text-center mb-12'>
          <p className='text-yellow-500 uppercase tracking-[5px] mb-4 text-sm'>
            Achievements
          </p>

          <h2 className='text-5xl md:text-6xl font-black mb-6'>
            Our Success
          </h2>

          <p className='text-gray-300 max-w-3xl mx-auto text-lg'>
            Milestones and accomplishments that reflect our commitment to excellence.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='group rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-2'
            >
              <div className='relative h-80 w-full'>
                <Image
                  src={`/images/achievements/achievement${item}.jpeg`}
                  alt={`Achievement ${item}`}
                  fill
                  className='object-cover group-hover:scale-105 transition-all duration-700'
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}