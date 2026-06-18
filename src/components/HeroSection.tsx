'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { societyData } from '@/data/society'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const logoScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.15])
  const logoX = useTransform(scrollYProgress, [0, 0.6], ['0%', '-42%'])
  const logoY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-36%'])
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.45])
  const nameX = useTransform(scrollYProgress, [0, 0.6], ['0%', '8%'])
  const nameY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-36%'])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 0.3, 0])

  return (
    <section ref={sectionRef} className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/8] overflow-hidden">
      <img
        src="/zahoor_orchards/images/banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            style={{ scale: logoScale, x: logoX, y: logoY }}
            className="mb-6 md:mb-8 w-[28vw] h-[28vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw] rounded-full overflow-hidden border-4 border-gold flex-shrink-0"
          >
            <img
              src="/zahoor_orchards/images/logo.jpg"
              alt="Zahoor Orchards Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            style={{ scale: nameScale, x: nameX, y: nameY }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-white text-center mb-3 md:mb-4 font-bold"
          >
            {societyData.name}
          </motion.h1>

          <motion.p
            style={{ opacity: taglineOpacity }}
            className="text-text-secondary text-sm md:text-base text-center"
          >
            {societyData.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
