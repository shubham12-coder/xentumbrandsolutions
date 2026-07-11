'use client'

import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Welcome to Xentum Brand Solutions.',
    },
    {
      sender: 'bot',
      text: 'How can we help you today? Ask about Branding, Events, Printing, Fabrication, Marketing or Corporate Gifting.',
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  const getBotReply = (message: string) => {
    const text = message.toLowerCase()

    if (text.includes('service') || text.includes('services')) {
      return 'We provide Branding, Digital Marketing, Corporate Events, Printing, Fabrication, Merchandising and Corporate Gifting solutions.'
    }

    if (text.includes('logo') || text.includes('logos')) {
      return 'Yes. We create professional logos, brand identities, packaging designs and complete branding solutions.'
    }

    if (text.includes('branding')) {
      return 'We offer logo design, brand identity, retail branding, packaging and brand strategy.'
    }

    if (text.includes('event') || text.includes('events')) {
      return 'We execute exhibitions, conferences, corporate events and premium event production.'
    }

    if (text.includes('printing')) {
      return 'We provide signage, fabrication, large-format printing and display branding solutions.'
    }

    if (text.includes('marketing')) {
      return 'We provide digital marketing, social media marketing and campaign management services.'
    }

    if (text.includes('fabrication')) {
      return 'We provide fabrication, exhibition stalls, signage and branding installations.'
    }

    if (text.includes('gift') || text.includes('gifting')) {
      return 'We offer premium corporate gifting and customized merchandise solutions.'
    }

    if (text.includes('contact') || text.includes('phone')) {
      return 'Contact us at +91 9582460006 or email: abhishek.xentumbrandsolutions@gmail.com'
    }

    if (text.includes('price') || text.includes('cost')) {
      return 'Pricing depends on project requirements. Please contact our team for a custom quotation.'
    }

    return 'Thank you for contacting Xentum. For faster assistance, please click the WhatsApp button below and our team will connect with you.'
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      sender: 'user',
      text: input,
    }

    const botMessage = {
      sender: 'bot',
      text: getBotReply(input),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])

    setInput('')
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className='fixed bottom-10 md:bottom-14 right-4 md:right-8 z-[999] bg-yellow-500 text-black p-4 rounded-full shadow-[0_10px_30px_rgba(245,183,0,0.35)] hover:scale-110 transition-all duration-300'
        >
          <FaRobot size={32} />
        </button>
      )}

      {open && (
        <div className='fixed bottom-10 md:bottom-14 right-4 left-4 md:left-auto md:right-8 md:w-[420px] h-[600px] bg-white border border-gray-200 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-[999] flex flex-col overflow-hidden'>

          <div className='flex items-center justify-between p-5 border-b border-gray-200'>
            <div>
              <h3 className='text-xl font-bold text-yellow-500'>
                Xentum Assistant
              </h3>

              <p className='text-green-500 text-sm font-medium'>
                ● Online Now
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className='w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-red-50 transition-all duration-300'
            >
              <X
                size={20}
                className='text-gray-700 hover:text-red-500'
              />
            </button>
          </div>

          <div className='flex-1 p-5 overflow-y-auto space-y-4'>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-yellow-500 text-black ml-auto max-w-[80%]'
                    : 'bg-gray-100 text-gray-800 max-w-[80%]'
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className='p-4 border-t border-gray-200'>
            <div className='flex gap-2 mb-3'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend()
                  }
                }}
                placeholder='Type your message...'
                className='flex-1 border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:border-yellow-500'
              />

              <button
                onClick={handleSend}
                className='bg-yellow-500 text-black px-5 rounded-xl font-bold hover:scale-105 transition-all duration-300'
              >
                Send
              </button>
            </div>

            <a
              href='https://wa.me/919582460006'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300'
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}