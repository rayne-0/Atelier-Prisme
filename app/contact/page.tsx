'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 min-h-screen pb-40">
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-40"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Let's Create <br />
              <span className="italic prism-text">Something Exceptional.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              Whether you need a high-end product campaign or a fully digital fashion editorial, our studio is ready to execute. Connect with our creative director to discuss your next project.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Inquiries</h4>
                <p className="text-white">partnerships@atelierprisme.com</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</h4>
                <p className="text-white">Remote & Global</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-10 md:p-14 rounded-2xl"
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full border border-green-500/50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-400 text-2xl">✓</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Inquiry Received.</h3>
                <p className="text-gray-400 font-light">
                  Our team will review your project details and get back to you within 24 hours to schedule a consultation.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-12 text-sm tracking-widest uppercase border-b border-white text-white hover:text-gray-300 pb-1"
                >
                  Send Another
                </button>
              </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-8">
                 {submitStatus === 'error' && (
                    <div className="p-4 bg-red-900/20 border border-red-500/50 rounded text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                 )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                    <input required type="text" id="name" name="name" className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                    <input required type="email" id="email" name="email" className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors" placeholder="jane@brand.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="brand" className="text-xs uppercase tracking-widest text-gray-400">Brand / Agency</label>
                    <input required type="text" id="brand" name="brand" className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors" placeholder="Brand Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs uppercase tracking-widest text-gray-400">Estimated Budget</label>
                    <select required id="budget" name="budget" defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-gray-300 focus:outline-none focus:border-white transition-colors appearance-none">
                      <option value="" disabled>Select an option</option>
                      <option value="$5k - $10k" className="bg-[#0D0D0D] text-white">$5k - $10k</option>
                      <option value="$10k - $25k" className="bg-[#0D0D0D] text-white">$10k - $25k</option>
                      <option value="$25k+" className="bg-[#0D0D0D] text-white">$25k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-xs uppercase tracking-widest text-gray-400">Project Type</label>
                  <select required id="projectType" name="projectType" defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-gray-300 focus:outline-none focus:border-white transition-colors appearance-none">
                    <option value="" disabled>Select an option</option>
                    <option value="Product Visuals" className="bg-[#0D0D0D] text-white">Product Visuals</option>
                    <option value="Fashion Imagery" className="bg-[#0D0D0D] text-white">Fashion Imagery</option>
                    <option value="Ad Creatives" className="bg-[#0D0D0D] text-white">Ad Creatives</option>
                    <option value="Creative Direction" className="bg-[#0D0D0D] text-white">Creative Direction / Retainer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Project Details</label>
                  <textarea required id="message" name="message" rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your campaign goals, timeline, and vibe..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
