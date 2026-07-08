'use client'

import { useEffect, useState } from 'react'

import Loader from '../components/Loader'
import ChatBot from '../components/ChatBot'
import WhatsAppButton from '../components/WhatsAppButton'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import MediaGallery from '../components/MediaGallery'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <main className='min-h-screen bg-white text-black overflow-x-hidden'>

          <Navbar />

          <Hero />

          <Services />

          <About />

          <Projects />

          <MediaGallery />

          <Clients />

          <Contact />

          <ChatBot />

          <WhatsAppButton />

          <Footer />

        </main>
      )}
    </>
  )
}