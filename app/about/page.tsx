'use client';

import { motion } from 'framer-motion';
import FinalCTA from '@/components/home/FinalCTA';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen">
      
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 block">The Studio</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                A New Kind of <br />
                <span className="prism-text italic">Creative Studio.</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                We believe that the future of high-end visual content is entirely digital. Atelier Prisme exists to replace the archaic, expensive, and limiting constraints of physical production.
              </p>
            </div>
            
            <div className="relative aspect-square w-full rounded-full overflow-hidden border border-white/10 p-2">
               <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800" 
                    alt="Fashion Editorial" 
                    fill 
                    className="object-cover scale-110"
                  />
                 <div className="absolute inset-0 bg-[#0D0D0D]/40 mix-blend-multiply" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8 block">Our Philosophy</span>
          
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-4 text-white">Speed Without Compromise.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Traditional shoots take weeks to plan, shoot, edit, and retouch. Our digital pipeline cuts delivery times in half while establishing a baseline of quality that is guaranteed, not hoped for.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-3xl font-serif mb-4 text-white">Absolute Control.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Want to change the lighting from morning sun to neon twilight? Want the bottle to be frosted glass instead of clear? In the physical world, that's a reshoot. In our studio, it's a render.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif mb-4 text-white">Infinite Scalability.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Once we build your products or environments digitally, they exist forever. Creating the next campaign, seasonal variant, or social asset becomes increasingly efficient over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
