'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/zahoor_orchards/images/banner.jpg)',
        }}
      />

      {/* Dark Gradient Overlay - Black to Transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Logo - Circular with responsive size: 32vw mobile, 24vw desktop */}
          <div className="mb-8 w-[32vw] h-[32vw] md:w-[24vw] md:h-[24vw] rounded-full overflow-hidden border-4 border-gold flex-shrink-0">
            <Image
              src="/zahoor_orchards/images/logo.jpg"
              alt="Zahoor Orchards Logo"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Society Name */}
          <h1 className="font-display text-3xl md:text-4xl text-white text-center mb-4 font-bold">
            {societyData.name}
          </h1>

          {/* Tagline */}
          <p className="text-text-secondary text-center mb-8">
            {societyData.tagline}
          </p>

          {/* Explore Plots CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Explore Plots
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
