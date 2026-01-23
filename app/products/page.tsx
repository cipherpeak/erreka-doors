'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Info, ArrowRight, Filter } from "lucide-react";

const categories = ['All', 'Sliding Doors', 'Swing Doors', 'Revolving Doors', 'Gate Automation', 'Industrial'];

const products = [
  {
    id: 1,
    name: 'ERTAIN Sliding Door',
    category: 'Sliding Doors',
    image: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769065243/sliding_door_ddejiz.png',
    description: 'The ERTAIN sliding door is our most versatile solution, designed for high-traffic environments where reliability and speed are paramount.',
    specs: ['Opening speed: up to 1.0 m/s', 'Max weight: 150kg per leaf', 'IoT Ready', 'Emergency breakout system'],
    features: ['Ultra-quiet operation', 'Slim profile design', 'Advanced safety sensors']
  },
  {
    id: 2,
    name: 'GLOBAL Swing Operator',
    category: 'Swing Doors',
    image: 'https://images.unsplash.com/photo-1517646288024-aaee00975160?auto=format&fit=crop&q=80&w=800',
    description: 'A powerful and compact operator for automatic swing doors, suitable for both new installations and retrofitting existing manual doors.',
    specs: ['Max leaf width: 1400mm', 'Max leaf weight: 250kg', 'Push/Pull arms available', 'Low energy mode'],
    features: ['Wind load compensation', 'Fire door certified', 'Easy configuration via app']
  },
  {
    id: 3,
    name: 'KRYSTAL Revolving Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    description: 'The KRYSTAL series offers an elegant all-glass design that maximizes natural light while providing superior climate control for building entrances.',
    specs: ['Diameter: 1800mm - 3600mm', '3 or 4 leaf configurations', 'Manual or Automatic', 'Night shield option'],
    features: ['Frameless glass design', 'Energy saving climate seal', 'Integrated LED lighting']
  },
  {
    id: 4,
    name: 'CLEAN Sliding Door',
    category: 'Sliding Doors',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Specifically designed for healthcare and laboratory environments, providing hermetic sealing and easy-to-clean surfaces.',
    specs: ['Hermetic seal class 4', 'Lead shielding available', 'Touchless activation', 'Antibacterial finish'],
    features: ['Air-tight performance', 'Flush glazing', 'Silent operation']
  },
  {
    id: 5,
    name: 'HEAVY Industrial Door',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Robust high-speed doors for industrial warehouses and logistics centers, designed for intensive use and durability.',
    specs: ['Opening speed: 2.5 m/s', 'Wind resistance: Class 3', 'Self-repairing curtain', 'Safety light curtain'],
    features: ['High-cycle durability', 'Energy loss reduction', 'Impact resistant']
  },
  {
    id: 6,
    name: 'EVO Swing Door',
    category: 'Swing Doors',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800',
    description: 'The EVO operator combines sleek aesthetics with powerful performance, ideal for modern office interiors and retail spaces.',
    specs: ['Height: only 70mm', 'Silent brushless motor', 'Battery backup included', 'Adjustable closing force'],
    features: ['Minimalist design', 'Smooth motion control', 'Long service life']
  },
  {
    id: 7,
    name: 'Sliding Gate Motor',
    category: 'Gate Automation',
    image: 'https://images.unsplash.com/photo-1615886362534-58a36c5615d6?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty commercial and residential sliding gate operators designed for durability and smooth operation in all weather conditions.',
    specs: ['Max gate weight: 2000kg', 'Operating speed: 12m/min', 'IP54 Protection', 'Magnetic limit switches'],
    features: ['Obstacle detection', 'Soft start/stop', 'Intensive use rating']
  },
  {
    id: 8,
    name: 'Swing Gate Motor',
    category: 'Gate Automation',
    image: 'https://images.unsplash.com/photo-1596230529625-7ee4ebf5c353?auto=format&fit=crop&q=80&w=800',
    description: 'Powerful electromechanical and hydraulic operators for swing gates, providing secure and reliable access control for homes and businesses.',
    specs: ['Max leaf length: 5m', 'Opening time: 15-25s', 'Max thrust: 5000N', 'Opening angle: up to 120°'],
    features: ['Silent operation', 'Emergency manual release', 'Wind resistance']
  },
  {
    id: 9,
    name: 'Automatic Gate Barrier',
    category: 'Gate Automation',
    image: 'https://images.unsplash.com/photo-1596773343360-156294eb84e5?auto=format&fit=crop&q=80&w=800',
    description: 'High-performance automatic barriers for parking lots and traffic management, offering rapid opening times and long operational life.',
    specs: ['Boom length: up to 8m', 'Opening time: 1.5s - 6s', 'Duty cycle: 100%', 'Brushless motor option'],
    features: ['LED boom lighting', 'Auto-reverse on impact', 'Loop detector compatible']
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Products</h1>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Precision <span className="text-brand-blue">Engineering</span> for Every Entrance
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our range of high-performance automatic doors and industrial solutions, built to international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-slate-400 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Filter:</span>
            </div>
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all
                  ${activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'}
                `}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 40, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: "easeOut" }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <motion.div
                    className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                          <Maximize2 className="w-5 h-5 text-brand-blue" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-6">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-brand-blue font-bold text-sm flex items-center gap-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors z-20"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-4 block">
                  {selectedProduct.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">{selectedProduct.name}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4 text-brand-blue" /> Technical Specs
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.specs.map((spec, i) => (
                        <li key={i} className="text-slate-500 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-brand-blue rounded-full" /> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4 text-brand-blue" /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="text-slate-500 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-brand-blue rounded-full" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all flex-1">
                    Request Quote
                  </button>
                  <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all flex-1">
                    Download Datasheet
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
