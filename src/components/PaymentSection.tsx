'use client';

import { motion } from 'framer-motion';
import { Download, Info } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { societyData } from '@/data/society';

export default function PaymentSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-dark">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Payment Plans" 
          subtitle="Flexible payment options tailored for your needs"
        />

        {/* Payment Plans Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 overflow-x-auto rounded-lg border border-gold/20"
        >
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-gold text-black">
                <th className="px-6 py-4 text-left font-semibold">Plot Size</th>
                <th className="px-6 py-4 text-left font-semibold">Total Price</th>
                <th className="px-6 py-4 text-left font-semibold">Down Payment</th>
                <th className="px-6 py-4 text-left font-semibold">Monthly</th>
                <th className="px-6 py-4 text-left font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              {societyData.paymentPlans.map((plan, index) => (
                <tr 
                  key={index} 
                  className="border-t border-gold/10 hover:bg-card-bg/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    {plan.size}
                    {plan.isFullPayment && (
                      <span className="ml-3 inline-block px-3 py-1 text-xs font-semibold bg-gold/10 text-gold rounded-full">
                        Full Payment
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-white whitespace-nowrap">{plan.totalPrice}</td>
                  <td className="px-6 py-4 text-gold font-semibold bg-card-bg/40 rounded whitespace-nowrap">
                    {plan.downPayment}
                  </td>
                  <td className="px-6 py-4 text-white whitespace-nowrap">{plan.monthly}</td>
                  <td className="px-6 py-4 text-white whitespace-nowrap">{plan.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Premium Note Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 border border-gold/40 bg-card-bg rounded-xl p-4 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-white/90">
              <span className="font-semibold text-gold">Premium Options:</span> {societyData.premiumNote}
            </p>
          </div>
        </motion.div>

        {/* Remaining Balance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 border border-gold/40 bg-card-bg rounded-xl p-4 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-white/90">
              <span className="font-semibold text-gold">Important Note:</span> Remaining balance will be cleared at the end of the payment plan duration.
            </p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => {
            const link = document.createElement('a')
            link.href = '/zahoor_orchards/images/payment_plan.jpg'
            link.download = 'Zahoor_Orchards_Payment_Plan.jpg'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          className="mt-8 w-full bg-gold text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gold/90 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          Download Payment Plan
        </motion.button>
      </div>
    </section>
  );
}
