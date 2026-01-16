'use client';

import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            UAE Specialists in Door Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
            Automatic Entrance <span className="text-brand-blue">Solutions</span> for Modern Buildings
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            ERREKA Technical Services LLC is a UAE-based specialist in automatic entrance systems, smart access solutions, and door automation technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group">
              Request a Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              Get a Maintenance Quote
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
