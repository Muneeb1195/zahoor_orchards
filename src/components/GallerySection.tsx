'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { societyData } from '@/data/society';
import SectionHeader from '@/components/SectionHeader';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const basePath = '/zahoor_orchards';

  return (
    <section className="bg-surface-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Gallery" subtitle="Explore our beautiful moments" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {societyData.galleryImages.map((imagePath, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group"
              onClick={() => setSelectedImage(imagePath)}
            >
              <img
                src={`${basePath}${imagePath}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen Modal Overlay */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 transition-colors duration-200 leading-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>

            {/* Image Container */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${basePath}${selectedImage}`}
                alt="Gallery fullscreen view"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
