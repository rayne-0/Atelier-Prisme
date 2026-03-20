'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-[#0D0D0D] relative overflow-hidden flex flex-col items-center justify-center text-center">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/10 to-cyan-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif mb-12 tracking-wide"
        >
          Your next campaign <br/>
          <span className="italic prism-text">starts here.</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
           <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors font-medium">
            Book a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
