import Image from 'next/image'

export default function Achievements() {
  return (
    <section
      id='achievements'
      className='py-24 bg-black text-white'
    >
      <div className='max-w-7xl mx-auto px-6'>

        <div className='text-center mb-20'>
          <p className='text-yellow-500 uppercase tracking-[5px] mb-4 text-sm'>
            Achievements
          </p>

          <h2 className='text-5xl md:text-6xl font-black mb-6'>
            Our Success
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500 transition-all duration-300'
            >
              <div className='relative h-80 w-full'>
                <Image
                  src={`/images/achievements/achievement${item}.jpeg`}
                  alt='Achievement'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}