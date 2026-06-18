'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

export default function NewsSection() {
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
            title="Latest News"
            subtitle="Stay updated with the latest developments at Zahoor Orchards"
          />

          <div className="space-y-6 mt-12">
            {societyData.news.map((newsItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card-bg rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-white/5"
              >
                {/* Date */}
                <div className="text-text-secondary text-xs uppercase tracking-wider mb-3">
                  {newsItem.date}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {newsItem.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {newsItem.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
