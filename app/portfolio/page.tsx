'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const filters = ['All', 'Fashion', 'Fine Jewelry', 'Editorial'];

const portfolioItems = [
  { id: 1, title: 'Maison Noir', category: 'Fashion', image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800', format: 'portrait' },
  { id: 2, title: 'Lumière Diamonds', category: 'Fine Jewelry', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800', format: 'square' },
  { id: 3, title: 'Vélure Fall/Winter', category: 'Editorial', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600', format: 'landscape' },
  { id: 4, title: 'Aura Collection', category: 'Fine Jewelry', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800', format: 'square' },
  { id: 5, title: 'Studio Session 01', category: 'Fashion', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', format: 'portrait' },
  { id: 6, title: 'Gilded Heritage', category: 'Fine Jewelry', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfdf7c?auto=format&fit=crop&q=80&w=1600', format: 'landscape' },
  { id: 7, title: 'Silken Shadows', category: 'Editorial', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', format: 'square' },
  { id: 8, title: 'Campaign Spring', category: 'Fashion', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', format: 'portrait' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <div className="pt-32 min-h-screen pb-40">
      <section className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Selected Work.</h1>
            <p className="text-gray-400 max-w-md text-lg font-light">
              An archive of digital excellence across fashion, product, and advertising.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap gap-4"
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-white text-black' 
                    : 'border border-white/20 text-white hover:border-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredItems.map((item) => {
              // Determine span based on layout logic
              let spanClass = 'col-span-1 row-span-1';
              if (item.format === 'portrait') spanClass = 'col-span-1 row-span-2';
              if (item.format === 'landscape') spanClass = 'md:col-span-2 row-span-1';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className={`relative group overflow-hidden bg-[#0D0D0D] border border-white/5 hover:border-white/20 transition-all ${spanClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <p className="text-xs tracking-widest uppercase text-gray-300 mb-2">{item.category}</p>
                    <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 text-center">
            <h3 className="font-serif text-3xl mb-8">Ready to elevate your visual identity?</h3>
            <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors font-medium">
              Work With Us
            </Link>
        </div>

      </section>
    </div>
  );
}
