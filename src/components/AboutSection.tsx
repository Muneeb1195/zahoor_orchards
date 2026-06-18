'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

const stats = [
  { label: '500+ Plots', value: '500+' },
  { label: '20+ Families', value: '20+' },
  { label: '6 Amenities', value: '6' },
  { label: '24/7 Security', value: '24/7' }
]

export default function AboutSection() {
  return (
    <section className="bg-surface-dark py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="About Our Society"
            subtitle="Building a Thriving Community"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Left side - About Details */}
            <div className="space-y-6">
              {societyData.aboutDetails && (
                <p className="text-text-secondary leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {societyData.aboutDetails}
                </p>
              )}
            </div>

            {/* Right side - Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gold to-gold-dark hover:from-gold-dark hover:to-gold/80 rounded-lg p-6 md:p-8 text-center text-black shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div className="text-2xl md:text-4xl font-bold mb-3">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium opacity-95">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
