'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen pt-32">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Split Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs tracking-widest uppercase text-purple-300 mb-8">
              The Digital Studio Advantage
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              High-End Visuals. <br />
              <span className="italic prism-text">Without the Photoshoot.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg">
              Stop limiting your campaigns by physical constraints. Get studio-grade product and fashion visuals significantly faster and at scale.
            </p>

            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
              Book a Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-500 font-light text-center sm:text-left">
              Limited spots available for Q3 production.
            </p>
          </motion.div>

          {/* Interactive Before/After concept (simplified visual split) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20"
          >
             <Image 
                src="/assets/visuals/fashion-editorial-5.jpg"
                alt="Digital Photography"
                fill
                className="object-cover"
             />
             <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 text-xs tracking-widest uppercase rounded">
                100% Digital Render
             </div>
          </motion.div>
        </section>

        {/* Benefits Strip */}
        <section className="py-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Save Time', desc: 'No talent booking, no location scouting. Go straight from concept to execution.' },
              { title: 'Reduce Costs', desc: 'Erase location fees, equipment rentals, and massive crew day rates.' },
              { title: 'Elevate Quality', desc: 'Achieve impossible lighting, perfect macro details, and absolute visual consistency.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-white/20 pl-8"
              >
                <h3 className="text-2xl font-serif text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
