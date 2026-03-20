'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex border-b border-white/10 items-center justify-center overflow-hidden bg-black">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600")' }}
      />
      
      {/* Gradient Refraction Layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-600/20  rounded-full blur-[120px] mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col items-center text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6 block">
            Atelier Prisme
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider leading-tight mb-8">
            Studio-Grade Visuals. <br />
            <span className="prism-text italic">Without the Studio.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          High-end product and fashion visuals — digitally produced for modern brands. Fast turnaround, unlimited control, premium output.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto text-center font-medium"
          >
            Book a Call
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Work
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
