export default function AboutPage() {
  return (
    <main className='min-h-screen bg-black text-white py-32 px-6'>

      <div className='max-w-7xl mx-auto'>

        {/* TOP TAG */}
        <p className='text-yellow-500 uppercase tracking-[5px] mb-4'>
          About Xentum
        </p>

        {/* HEADING */}
        <h1 className='text-5xl md:text-7xl font-black mb-10 leading-tight'>
          Creative Brand Solutions Company
        </h1>

        {/* CONTENT */}
        <div className='space-y-8'>

          <p className='text-gray-300 text-xl leading-relaxed'>
            XENTUM is a premium branding and marketing agency delivering
            innovative business solutions for modern enterprises.
          </p>

          <p className='text-gray-400 text-lg leading-relaxed'>
            We specialize in branding, fabrication, event management,
            corporate gifting, merchandising, digital marketing,
            print production, MICE events and premium visual experiences.
          </p>

          <p className='text-gray-400 text-lg leading-relaxed'>
            Our goal is to help businesses build strong brand identities
            and unforgettable customer experiences through modern
            creative strategies and high-end production quality.
          </p>

          <p className='text-gray-400 text-lg leading-relaxed'>
            From corporate branding to retail execution and event
            production, XENTUM provides complete end-to-end business
            solutions tailored for growth-focused companies.
          </p>

        </div>

      </div>

    </main>
  )
}