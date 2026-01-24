'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-slate-800 bg-slate-900 text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/footer/bg.png"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-70 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="ERREKA Logo"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the way in automatic door technology and architectural solutions worldwide.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="font-bold text-white mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-brand-blue transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-blue transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="font-bold text-white mb-6">Contact</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>sales@errekadoors.com</li>
              <li>+971 4 285 2806</li>
              <li>+971 50 223 9301</li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-xs">© 2026 Erreka Doors. Powered by CipherPeak Private Limited</p>
          <div className="flex gap-6 text-slate-500 text-xs">
            {/* <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
