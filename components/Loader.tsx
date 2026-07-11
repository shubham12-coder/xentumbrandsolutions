'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({
  loading,
}: {
  loading: boolean
}) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center'
        >

          {/* XENTUM */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.4,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className='text-5xl md:text-[75px] lg:text-[110px] font-black text-black tracking-[10px]'
          >
            XENTUM
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.4,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className='mt-1 text-[10px] md:text-[14px] lg:text-[18px] font-semibold tracking-[4px] text-gray-600 uppercase'
          >
            BRAND SOLUTIONS PVT. LTD.
          </motion.p>

          {/* Loading Bar */}
          <div className='mt-8 w-56 md:w-[320px] h-[4px] bg-gray-200 rounded-full overflow-hidden'>

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '350%' }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'linear',
              }}
              className='h-full w-20 bg-yellow-500 rounded-full'
            />

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}