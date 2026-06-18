'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/8] overflow-hidden">
      <img
        src="/zahoor_orchards/images/banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-6 md:mb-8 w-[28vw] h-[28vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw] rounded-full overflow-hidden border-4 border-gold flex-shrink-0">
            <img
              src="/zahoor_orchards/images/logo.jpg"
              alt="Zahoor Orchards Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-white text-center mb-3 md:mb-4 font-bold">
            {societyData.name}
          </h1>

          <p className="text-text-secondary text-sm md:text-base text-center mb-6 md:mb-8">
            {societyData.tagline}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-500 transition-colors"
          >
            Explore Plots
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
