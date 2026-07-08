import Image from 'next/image'

const clients = [
  'c1.jpg',
  'c2.jpg',
  'c3.jpg',
  'c4.jpg',
  'c5.jpg',
  'c6.jpg',
  'c7.jpg',
  'c8.jpg',
]

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-24 md:py-32 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-20 md:mb-24">

          <p className="text-yellow-500 uppercase tracking-[6px] mb-4 text-sm font-semibold">
            Trusted By
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Our Clients
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We proudly collaborate with leading brands and enterprises across industries.
          </p>

        </div>

        {/* CLIENT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[32px] h-32 md:h-40 flex items-center justify-center shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:border-yellow-500 transition-all duration-500"
            >

              <div className="relative w-[120px] h-[60px] md:w-[180px] md:h-[90px]">

                <Image
                  src={`/images/clients/${client}`}
                  alt={`Client ${index + 1}`}
                  fill
                  className="object-contain group-hover:scale-110 transition-all duration-500"
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}