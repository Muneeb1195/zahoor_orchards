'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { societyData } from '@/data/society';
import SectionHeader from '@/components/SectionHeader';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedIndex = selectedImage
    ? societyData.galleryImages.indexOf(selectedImage)
    : -1;

  const goNext = useCallback(() => {
    const next = (selectedIndex + 1) % societyData.galleryImages.length;
    setSelectedImage(societyData.galleryImages[next]);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    const prev = (selectedIndex - 1 + societyData.galleryImages.length) % societyData.galleryImages.length;
    setSelectedImage(societyData.galleryImages[prev]);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedImage === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, goNext, goPrev]);

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

        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 transition-colors duration-200 leading-none z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold text-4xl transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold text-4xl transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${basePath}${selectedImage}`}
                alt="Gallery fullscreen view"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute bottom-6 text-white/60 text-sm">
              {selectedIndex + 1} / {societyData.galleryImages.length}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
