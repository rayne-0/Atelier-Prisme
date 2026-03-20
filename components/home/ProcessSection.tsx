'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Brief & Strategy',
    description: 'We align on your brand identity, product references, and campaign goals to establish the creative direction.'
  },
  {
    number: '02',
    title: 'Concept & Lighting',
    description: 'Our artists develop the environment, lighting setup, and material references for your approval.'
  },
  {
    number: '03',
    title: 'Digital Production',
    description: 'We execute the high-fidelity render or digital photoshoot using state-of-the-art 3D and rendering tools.'
  },
  {
    number: '04',
    title: 'Final Delivery',
    description: 'You receive studio-grade visuals formatted for all your marketing and ecommerce needs.'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">The Method</span>
          <h2 className="text-4xl md:text-5xl font-serif">How We Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-white/10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-[#0D0D0D] flex items-center justify-center mx-auto md:mx-0 mb-8 relative z-10">
                <span className="text-xs font-serif tracking-widest text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
