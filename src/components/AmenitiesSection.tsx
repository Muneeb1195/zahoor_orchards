'use client'

import { motion } from 'framer-motion'
import { societyData, type Amenity } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

// Map amenity types to emoji icons
const iconMap: Record<string, string> = {
  park: '🌳',
  security: '🛡️',
  road: '🛣️',
  plumbing: '🔧',
  mosque: '🕌',
  hospital: '🏥',
}

export default function AmenitiesSection() {
  const amenities = societyData?.amenities || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="bg-[#000000] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Amenities"
          subtitle="World-class facilities and services for your comfort"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {amenities.map((amenity: Amenity, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#121212] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
            >
              <div className="text-5xl mb-4 inline-block">
                {iconMap[amenity.icon] || '✨'}
              </div>
              <h3 className="text-white text-base font-semibold mt-2">
                {amenity.title}
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
