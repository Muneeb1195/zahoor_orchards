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
  const logoOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0])
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.45])
  const nameOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 0.3, 0])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <img
        src="/zahoor_orchards/images/banner.jpg"
        alt=""
        className="w-full h-auto block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-[5%]">
        <div className="flex flex-col items-start justify-center">
          <motion.div
            style={{ scale: logoScale, opacity: logoOpacity }}
            className="mb-[3%] w-[11%] h-[11%] min-w-[55px] min-h-[55px] rounded-full overflow-hidden border-4 border-gold flex-shrink-0 origin-top-left"
          >
            <img
              src="/zahoor_orchards/images/logo.jpg"
              alt="Zahoor Orchards Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            style={{ scale: nameScale, opacity: nameOpacity }}
            className="font-display text-[clamp(1.25rem,2.5vw,2.5rem)] text-white text-left mb-[1.5%] font-bold origin-top-left"
          >
            {societyData.name}
          </motion.h1>

          <motion.p
            style={{ opacity: taglineOpacity }}
            className="text-text-secondary text-[clamp(0.75rem,1.2vw,1rem)] text-left"
          >
            {societyData.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
