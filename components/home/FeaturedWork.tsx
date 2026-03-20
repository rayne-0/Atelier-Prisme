'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Maison Noir',
    category: 'Fashion Imagery',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Lumière Diamonds',
    category: 'Fine Jewelry',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Aura Collection',
    category: 'Fine Jewelry',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Vélure Fall/Winter',
    category: 'Fashion Imagery',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-2 md:row-span-1'
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-32 border-b border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif"
          >
            Featured Work.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-4 text-sm tracking-widest uppercase hover:text-gray-300 transition-colors"
            >
              View Full Portfolio
              <span className="w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden ${project.span}`}
            >
              <div className="absolute inset-0 bg-[#0D0D0D]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-xs tracking-widest uppercase text-gray-300 mb-2">{project.category}</p>
                <h3 className="text-2xl font-serif text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/portfolio" 
            className="inline-block px-8 py-4 border border-white/20 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
