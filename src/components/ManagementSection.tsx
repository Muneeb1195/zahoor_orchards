'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

export default function ManagementSection() {
  return (
    <section className="bg-[#000000] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Management Team"
            subtitle="Meet the visionary leaders guiding Zahoor Orchards"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {societyData.management.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card-bg rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Person Icon */}
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-8 h-8 md:w-8 md:h-8"
                    style={{ color: '#D4AF37' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold text-base md:text-lg mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-text-secondary text-xs md:text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
