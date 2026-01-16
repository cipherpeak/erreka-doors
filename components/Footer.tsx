'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-10 pb-6 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="ERREKA Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the way in automatic door technology and architectural solutions worldwide.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-brand-blue transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Products</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Sliding Doors</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Swing Doors</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Revolving Doors</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Industrial Doors</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Contact</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>sales@errekadoors.com</li>
              <li>+971 4 285 2806</li>
              <li>+971 50 223 9301</li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">© 2026 Erreka Doors. All rights reserved. Powered by CipherPeak Private Limited</p>
          <div className="flex gap-6 text-slate-400 text-xs">
            <Link href="#" className="hover:text-slate-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
