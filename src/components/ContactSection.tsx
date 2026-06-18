'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert('Thank you for your inquiry! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } else {
      alert('Please fill in all fields.')
    }
  }

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
            title="Get In Touch"
            subtitle="Have questions? We'd love to hear from you"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Phone */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Phone</h3>
                <a
                  href={`tel:${societyData.phone}`}
                  className="text-gold hover:text-yellow-400 transition duration-300 text-lg font-medium"
                >
                  {societyData.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
                <a
                  href={`mailto:${societyData.email}`}
                  className="text-gold hover:text-yellow-400 transition duration-300 text-lg font-medium"
                >
                  {societyData.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Address</h3>
                <p className="text-text-secondary whitespace-pre-line leading-relaxed mb-4">
                  {societyData.address}
                </p>
                <a
                  href={societyData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-yellow-400 transition duration-300 text-sm font-medium"
                >
                  View on Map →
                </a>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href={societyData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-card-bg flex items-center justify-center hover:bg-gold hover:text-black transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={societyData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-card-bg flex items-center justify-center hover:bg-gold hover:text-black transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.643 3.48.953 2.86 1.52 2.26 2.12c-.6.6-1.165 1.22-1.475 1.945-.31.7-.51 1.57-.57 2.85C.063 8.332 0 8.74 0 12s.015 3.667.072 4.947c.06 1.28.26 2.15.57 2.85.31.725.875 1.345 1.475 1.945.6.6 1.22 1.165 1.945 1.475.7.31 1.57.51 2.85.57C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.28-.06 2.15-.26 2.85-.57.725-.31 1.345-.875 1.945-1.475.6-.6 1.165-1.22 1.475-1.945.31-.7.51-1.57.57-2.85.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.28-.26-2.15-.57-2.85-.31-.725-.875-1.345-1.475-1.945-.6-.6-1.22-1.165-1.945-1.475-.7-.31-1.57-.51-2.85-.57C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.17.054 1.805.244 2.227.414.56.217.96.477 1.382.896.419.42.679.822.896 1.381.17.422.36 1.057.413 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.17-.244 1.805-.414 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.17-1.057.36-2.227.413-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.17-.054-1.805-.244-2.227-.414-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.17-.422-.36-1.057-.413-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.17.244-1.805.414-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.17 1.057-.36 2.227-.413 1.264-.061 1.646-.07 4.849-.07l-.003-2.16z" />
                      <circle cx="12" cy="12" r="3.457" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href={societyData.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-card-bg flex items-center justify-center hover:bg-gold hover:text-black transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.35 0 .69.05 1.02.15V9.41a7.15 7.15 0 0 0-1.02-.08C3.34 9.33 0 12.46 0 16.38s3.34 7.05 7.16 7.05c3.82 0 7.16-3.15 7.16-7.05V12.26c1.5 1.13 3.3 1.78 5.18 1.78v-3.68a4.82 4.82 0 0 1-3.5-1.63z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card-bg border border-white/10 rounded-lg p-3 w-full text-white placeholder-text-secondary/50 focus:border-gold focus:outline-none transition duration-300"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card-bg border border-white/10 rounded-lg p-3 w-full text-white placeholder-text-secondary/50 focus:border-gold focus:outline-none transition duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-card-bg border border-white/10 rounded-lg p-3 w-full text-white placeholder-text-secondary/50 focus:border-gold focus:outline-none transition duration-300"
                    placeholder="Your Phone Number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-card-bg border border-white/10 rounded-lg p-3 w-full text-white placeholder-text-secondary/50 focus:border-gold focus:outline-none transition duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300 mt-6"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
