export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200 py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>

          {/* LEFT */}
          <div className='text-center lg:text-left'>

            <h2 className='text-3xl font-black text-black mb-2'>
              XENTUM
            </h2>

            <p className='text-gray-600 max-w-md'>
              Premium branding, marketing, event management,
              merchandising and fabrication solutions for modern businesses.
            </p>

          </div>

          {/* RIGHT */}
          <div className='flex flex-col items-center lg:items-end gap-3'>

            <div className='flex gap-6 text-sm font-medium'>

              <a
                href='#about'
                className='text-gray-600 hover:text-yellow-500 transition-all duration-300'
              >
                About
              </a>

              <a
                href='#services'
                className='text-gray-600 hover:text-yellow-500 transition-all duration-300'
              >
                Services
              </a>

              <a
                href='#projects'
                className='text-gray-600 hover:text-yellow-500 transition-all duration-300'
              >
                Projects
              </a>

              <a
                href='#contact'
                className='text-gray-600 hover:text-yellow-500 transition-all duration-300'
              >
                Contact
              </a>

            </div>

            <p className='text-gray-500 text-sm'>
              © 2026 Xentum Brand Solutions. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}