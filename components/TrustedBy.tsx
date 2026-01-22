'use client';

import { motion } from 'framer-motion';

export default function TrustedBy() {
    // Original list of clients
    const clients = [
        'Government Authorities', 'Hospitals', 'Luxury Showrooms', 'Shopping Malls', 'Banks', 'Hypermarkets',
        'Government Authorities', 'Hospitals', 'Luxury Showrooms', 'Shopping Malls', 'Banks', 'Hypermarkets'
    ];

    // We need to double the list to create the seamless loop effect with translateX(-50%)
    // The 'marquee' keyframe translates from 0% to -50%
    // By having [Content] [Content], moving to -50% means the second [Content] is now at the start position
    const marqueeContent = [...clients, ...clients];

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Trusted by Leading Organizations</h3>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    ERREKA Technical Services LLC is trusted by major institutions across the UAE, reflecting our technical competence and reliability.
                  </p>
                </motion.div>
            </div>

            {/* Gradient Masks for Fade Effect */}
            <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee hover:[animation-play-state:paused] items-center gap-16 whitespace-nowrap py-6">
                    {marqueeContent.map((client, i) => (
                        <div
                            key={i}
                            className="relative"
                        >
                            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-300 hover:from-brand-blue hover:to-blue-600 transition-all duration-300 cursor-default hover:scale-105 transform">
                                {client}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
