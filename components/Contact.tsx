'use client'

import { useState } from 'react'

export default function Contact() {

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

const handleSubmit = async (e: any) => {
  e.preventDefault()

  setLoading(true)

  const formData = new FormData(e.target)

  const response = await fetch(
    'https://formspree.io/f/mvzjnbne',
    {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    }
  )

  if (response.ok) {
    setSuccess(true)
    e.target.reset()
  }

  setLoading(false)
}

  return (
    <section
      id='contact'
      className='py-24 md:py-32 bg-white text-black'
    >
      <div className='max-w-6xl mx-auto px-4 md:px-6'>

        {/* HEADING */}
        <div className='text-center mb-20'>

          <p className='text-yellow-500 uppercase tracking-[6px] mb-4 text-sm font-semibold'>
            Contact Us
          </p>

          <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6'>
            Let’s Build Something Great
          </h2>

          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Have a project in mind? Let’s discuss how Xentum can help your brand grow.
          </p>

        </div>

        {/* GRID */}
        <div className='grid lg:grid-cols-2 gap-8 items-start'>

          {/* LEFT CARD */}
          <div className='bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:border-yellow-500 transition-all duration-500'>

            <h3 className='text-3xl md:text-4xl font-black mb-8'>
              Contact Information
            </h3>

            <div className='mb-8'>
              <h4 className='text-2xl font-bold text-yellow-500 mb-2'>
                Abhishek Kapoor
              </h4>

              <p className='text-gray-600'>
                Director & Chief Growth Officer
              </p>
            </div>

            <div className='border-b border-gray-200 mb-8'></div>

            <div className='space-y-6'>

              <div>
                <p className='text-gray-500 text-sm mb-2'>Phone</p>
                <h4 className='text-xl font-semibold'>
                  +91 9582460006
                </h4>
              </div>

              <div>
                <p className='text-gray-500 text-sm mb-2'>Alternate</p>
                <h4 className='text-xl font-semibold'>
                  +91 9211849006
                </h4>
              </div>

              <div>
                <p className='text-gray-500 text-sm mb-2'>Email</p>
                <h4 className='text-lg font-semibold break-all'>
                  abhishek.xentumbrandsolutions@gmail.com
                </h4>
              </div>

            </div>

            <div className='border-b border-gray-200 my-8'></div>

            <div>
              <h4 className='text-lg font-bold mb-5'>
                Follow Us
              </h4>

              <div className='flex flex-wrap gap-3'>

                <button className='px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)] transition-all duration-300'>
                  LinkedIn
                </button>

                <button className='px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)] transition-all duration-300'>
                  Instagram
                </button>

                <button className='px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,183,0,0.35)] transition-all duration-300'>
                  Twitter
                </button>

              </div>
            </div>

          </div>

          {/* FORM */}
          <div className='bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-500'>

<form
  onSubmit={handleSubmit}
  className='space-y-6'
>


  <div>
    <label className='block font-semibold mb-3'>
      Name
    </label>

    <input
      type='text'
      name='name'
      required
      placeholder='Your Name'
      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition-all duration-300'
    />
  </div>

  <div>
    <label className='block font-semibold mb-3'>
      Email
    </label>

    <input
      type='email'
      name='email'
      required
      placeholder='your@email.com'
      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition-all duration-300'
    />
  </div>

  <div>
    <label className='block font-semibold mb-3'>
      Phone
    </label>

    <input
      type='text'
      name='phone'
      placeholder='+91 XXXXX XXXXX'
      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition-all duration-300'
    />
  </div>

  <div>
    <label className='block font-semibold mb-3'>
      Message
    </label>

    <textarea
      rows={5}
      name='message'
      required
      placeholder='Tell us about your project...'
      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 resize-none transition-all duration-300'
    ></textarea>
  </div>

  <button
  type='submit'
  disabled={loading}
  className='w-full bg-yellow-500 text-black py-4 rounded-2xl text-lg font-bold'
>
  {loading ? 'Sending...' : 'Send Message'}
</button>

{success && (
  <div className='bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold'>
    ✅ Thank you! Your message has been sent successfully.
  </div>
)}

</form>

          </div>

        </div>

        {/* LOCATION SECTION */}
        <div className='mt-20'>

          <div className='text-center mb-10'>

            <p className='text-yellow-500 uppercase tracking-[6px] mb-3 text-sm font-semibold'>
              Our Location
            </p>

            <h3 className='text-3xl md:text-5xl font-black mb-4'>
              Visit Our Office
            </h3>

            <p className='text-gray-600 max-w-2xl mx-auto'>
              Meet our team and discuss your branding, marketing,
              events and fabrication requirements.
            </p>

          </div>

<div className='bg-gray-50 border border-gray-200 rounded-[24px] p-6 mb-8 text-center'>
  <h4 className='text-2xl font-bold text-yellow-500 mb-3'>
    Office Address
  </h4>

  <p className='text-gray-700 text-lg leading-relaxed'>
    Intellect Design Arena Limited
    <br />
    249, Phase IV, Udyog Vihar
    <br />
    Sector 19, Gurugram
    <br />
    Haryana 122015
  </p>
</div>

          <div className='overflow-hidden rounded-[32px] border border-gray-200 shadow-xl'>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.8456898321233!2d77.08209105049755!3d28.49831132940722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d100662af3%3A0x334d83237991a26f!2sIntellect%20Design%20Arena%20limited!5e0!3m2!1sen!2sin!4v1782987795732!5m2!1sen!2sin'
              width='100%'
              height='450'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
            />

          </div>

        </div>

      </div>
    </section>
  )
}