'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Fine Jewelry',
    description: 'Hyper-real macro photography and collections. Pristine lighting, perfect diamonds and metals.',
    href: '/services#jewelry'
  },
  {
    title: 'Fashion Imagery',
    description: 'Archive-quality model and apparel visuals without physical shoots.',
    href: '/services#fashion'
  },
  {
    title: 'Editorial Campaigns',
    description: 'Scroll-stopping narrative visuals designed for luxury platforms and print.',
    href: '/services#editorial'
  },
  {
    title: 'Creative Direction',
    description: 'From concept to final execution. We handle the entire brand visual strategy.',
    href: '/services#direction'
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">What We Do.</h2>
            <p className="text-gray-400 max-w-md text-lg font-light">
              We replace traditional production with cutting-edge digital creation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/services" 
              className="group flex items-center gap-4 text-sm tracking-widest uppercase hover:text-gray-300 transition-colors"
            >
              See All Services
              <span className="w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 hover:border-white/30 transition-colors duration-300 group cursor-pointer"
            >
              <h3 className="font-serif text-2xl mb-4 group-hover:prism-text transition-all duration-300">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="text-xs tracking-widest uppercase text-white/50 group-hover:text-white transition-colors flex items-center gap-2"
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
