'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FinalCTA from '@/components/home/FinalCTA';

const services = [
  {
    id: 'jewelry',
    title: 'Fine Jewelry',
    description: 'We create hyper-real macro photography and collections that defy standard limitations. From pristine metallic reflections to the depth of unheated sapphires, our production ensures flawless material accuracy and environments impossible to build physically.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Perfect material and lighting accuracy',
      'Microscopic manufacturing details',
      'Any environment imaginable',
      'Flawless diamond and gemstone refractions'
    ]
  },
  {
    id: 'fashion',
    title: 'Fashion Imagery',
    description: 'Archive-quality model and apparel visuals without the logistical nightmare of physical photoshoots. We digitally construct environments, lighting scenarios, and styling variations to showcase collections with true editorial luxury.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    reverse: true,
    benefits: [
      'Zero studio rental or travel costs',
      'Unlimited styling variations',
      'Consistent lighting across massive collections',
      'Surreal or highly specific artistic directions'
    ]
  },
  {
    id: 'editorial',
    title: 'Editorial Campaigns',
    description: 'Scroll-stopping narrative visuals designed specifically for luxury platforms and print. We blend our high-end production with cinematic composition to create assets optimized for profound brand engagement.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600',
    benefits: [
      'Built for high-end fashion publications',
      'Seamless multi-platform adaptation',
      'Cinematic lighting and color grading',
      'High-impact visual hooks'
    ]
  },
  {
    id: 'direction',
    title: 'Creative Direction',
    description: 'We don’t just execute; we conceptualize. Our studio handles the entire visual lifecycle from initial moodboards and storyboarding to final render delivery. We act as an extension of your internal luxury marketing team.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    reverse: true,
    benefits: [
      'Comprehensive luxury brand understanding',
      'Detailed pre-visualization',
      'Expert artistic guidance',
      'End-to-end luxury project management'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 min-h-screen">
      
      {/* Page Hero */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            What We Create.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Comprehensive digital visual production for brands that demand perfection.
          </motion.p>
        </div>
      </section>

      {/* Services Loop */}
      <section className="py-12">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className="py-24 border-b border-white/10 even:bg-[#0A0A0A]"
          >
            <div className={`container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={service.reverse ? 'md:order-2' : ''}
              >
                <div className="text-sm font-serif italic text-gray-500 mb-4 block">0{index + 1}</div>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">{service.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>

                <div className="mb-12">
                  <h4 className="text-xs uppercase tracking-widest text-white mb-6">Capabilities / Benefits</h4>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="inline-block px-8 py-4 border border-white/20 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                  Start a Project
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative aspect-[4/5] w-full ${service.reverse ? 'md:order-1' : ''}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>
          </div>
        ))}
      </section>

      <FinalCTA />
    </div>
  );
}
