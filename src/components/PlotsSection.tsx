'use client';

import { motion } from 'framer-motion';
import { societyData } from '@/data/society';
import SectionHeader from '@/components/SectionHeader';

export default function PlotsSection() {
  // Calculate summary stats
  const availablePlots = societyData.plots.filter(
    (plot) => plot.status === 'Available'
  );
  const soldPlots = societyData.plots.filter(
    (plot) => plot.status === 'Sold'
  );

  // Status badge color mapping
  const getStatusColor = (status: string) => {
    if (status === 'Available') {
      return 'bg-green-500';
    }
    return 'bg-gray-500';
  };

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-12 bg-[#000000]"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader title="Available Plots" />

        {/* Summary Chips */}
        <motion.div
          className="flex gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="bg-card-bg rounded-full px-6 py-3 text-sm font-semibold text-gold border border-gold/20">
            Available Plots: {availablePlots.length}
          </div>
          <div className="bg-card-bg rounded-full px-6 py-3 text-sm font-semibold text-gray-400 border border-gray-500/20">
            Sold Plots: {soldPlots.length}
          </div>
        </motion.div>

        {/* Desktop Table Layout */}
        <motion.div
          className="hidden md:block overflow-x-auto rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gold text-black">
                <th className="px-6 py-4 text-left font-semibold">Plot No.</th>
                <th className="px-6 py-4 text-left font-semibold">Size</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
                <th className="px-6 py-4 text-left font-semibold">Category</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {societyData.plots.map((plot, index) => (
                <motion.tr
                  key={plot.id}
                  className={`${
                    index % 2 === 0 ? 'bg-card-bg' : 'bg-[#000000]'
                  } border-b border-gray-800 hover:bg-card-bg/80 transition-colors`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <td className="px-6 py-4 text-white font-medium">
                    {plot.id}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{plot.size}</td>
                   <td className="px-6 py-4 text-gold font-semibold">
                    {plot.price}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{plot.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                        plot.status
                      )}`}
                    >
                      {plot.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card Layout */}
        <motion.div
          className="md:hidden grid grid-cols-1 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {societyData.plots.map((plot, index) => (
            <motion.div
              key={plot.id}
              className="bg-card-bg rounded-xl p-5 border border-gray-800"
              whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Plot Number as Title */}
               <h3 className="text-lg font-bold text-gold mb-4">
                {plot.id}
              </h3>

              {/* Plot Details */}
              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Size</span>
                  <span className="text-white font-medium">{plot.size}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Price</span>
                  <span className="text-gold font-semibold">
                    {plot.price}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white font-medium">{plot.category}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-end pt-3 border-t border-gray-700">
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getStatusColor(
                    plot.status
                  )}`}
                >
                  {plot.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
