'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  'No complex physical photoshoots required.',
  'Significantly faster turnaround times.',
  'Unlimited creative control over lighting and materials.',
  'Cost-efficient scaling for large catalogs.',
  'Guaranteed consistent premium output.'
];

export default function WhyPrisme() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 items-center grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-6 block">The Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Replace the Studio.<br/>
            <span className="prism-text italic">Elevate the Output.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-12">
            Traditional content creation is slow, expensive, and limited by physical constraints. We bring your vision to life purely through digital artistry, achieving results indistinguishable from high-end photography.
          </p>

          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
            Start a Project
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="glass-panel p-10 md:p-14 rounded-2xl"
        >
          <ul className="space-y-8">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-300 font-light text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
