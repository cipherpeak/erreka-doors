'use client';

import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full will-change-transform"
        >
          <img
            src="/images/hero_bg.png"
            alt="Modern Automatic Doors"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-slate-900/5 backdrop-blur-md border border-slate-900/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-slate-900 text-sm font-medium mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-blue rounded-full animate-pulse" />
            UAE Specialists in Door Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 md:mb-6"
          >
            Automatic Entrance <span className="text-brand-blue">Solutions</span> for Modern Buildings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-2xl"
          >
            ERREKA Technical Services LLC is a UAE-based specialist in automatic entrance systems, smart access solutions, and door automation technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
          >
            <Link href="/contact" className="contents">
              <button className="bg-brand-blue text-white px-6 py-4 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue/20 hover:scale-105">
                Request a Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a
              href="/images/ERREKA Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <button className="bg-white/50 backdrop-blur-md border border-slate-200 text-slate-900 px-6 py-4 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-2 hover:scale-105">
                Download Company Profile
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hidden md:flex"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}
