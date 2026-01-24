'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Info, ArrowRight, Filter } from "lucide-react";

const categories = ['All', 'Sliding Doors', 'Revolving Doors', 'Gate Automation', 'Gate Barriers', 'Industrial'];

const products = [
  // Sliding Doors
  {
    id: 1,
    name: 'Automatic Sliding Door',
    category: 'Sliding Doors',
    image: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769065243/sliding_door_ddejiz.png',
    description: 'The ERTAIN sliding door is our most versatile solution, designed for high-traffic environments where reliability and speed are paramount.',
    specs: ['Opening speed: up to 1.0 m/s', 'Max weight: 150kg per leaf', 'IoT Ready', 'Emergency breakout system'],
    features: ['Ultra-quiet operation', 'Slim profile design', 'Advanced safety sensors']
  },
  {
    id: 2,
    name: 'Breakout Sliding Door',
    category: 'Sliding Doors',
    image: 'https://images.unsplash.com/photo-1517646288024-aaee00975160?auto=format&fit=crop&q=80&w=800',
    description: 'Designed for emergency egress, allowing door panels to swing out in case of panic or evacuation needs.',
    specs: ['Full breakout capability', 'Mechanical release system', 'Compliance with fire codes', 'High durability tracks'],
    features: ['Emergency exit ready', 'Maximize opening width', 'Safety glass']
  },
  {
    id: 3,
    name: 'Telescopic Sliding Door',
    category: 'Sliding Doors',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Ideal for narrow entrances requiring maximum opening width, utilizing overlapping sliding leaves.',
    specs: ['2 or 4 leaf configuration', 'Max opening width optimization', 'Heavy-duty carrier wheels', 'Smart controller'],
    features: ['Space-saving design', 'Wide clear passage', 'Smooth telescopic motion']
  },
  {
    id: 4,
    name: 'Curved Sliding Door',
    category: 'Sliding Doors',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800',
    description: 'Aesthetically pleasing curved sliding doors that add a touch of elegance to any building facade.',
    specs: ['Customizable radius', ' concave or convex layout', '360° drive system', 'Integrated sensors'],
    features: ['Architectural statement', 'Panoramic view', 'Premium finish']
  },

  // Revolving Doors
  {
    id: 5,
    name: 'Manual Revolving Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    description: 'Classic manual revolving door providing excellent climate control and traffic management without power consumption.',
    specs: ['Diameter options: 1.8m - 3.0m', '3 or 4 wing design', 'Speed control damper', 'Aluminum or Stainless steel'],
    features: ['Energy saving', 'Draft isolation', 'Low maintenance']
  },
  {
    id: 6,
    name: 'Automatic Revolving Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'Fully automated high-capacity revolving door for seamless hands-free access in busy venues.',
    specs: ['Motion sensor activation', 'Safety heel sensors', 'Emergency stop button', 'Program selector'],
    features: ['Touchless entry', 'High throughput', 'Sophisticated safety']
  },
  {
    id: 7,
    name: 'Revolving Door with Integrated Sliding Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800',
    description: 'A versatile hybrid system combining a revolving door for climate control with an integrated central sliding door.',
    specs: ['Multi-mode operation', 'Central sliding functionality', 'Maximize rush-hour flow', 'Night security lock'],
    features: ['Flexible functionality', 'Best of both worlds', 'Elegant integration']
  },
  {
    id: 8,
    name: 'Breakout Revolving Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=800',
    description: 'Features collapsible wings that can be folded to allow unobstructed passage during emergencies.',
    specs: ['Collapsible door wings', 'Fire alarm integration', 'Magnetic positioning', 'Push-bar release'],
    features: ['Emergency escape route', 'Clear wide passage', 'Safety compliance']
  },
  {
    id: 9,
    name: 'Glass Revolving Door',
    category: 'Revolving Doors',
    image: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?auto=format&fit=crop&q=80&w=800',
    description: 'All-glass revolving door designed for transparency and modern architectural integration.',
    specs: ['Frameless glass wings', 'Minimalist canopy', 'Underfloor drive option', 'Toughened safety glass'],
    features: ['Crystal clear aesthetics', 'Maximum natural light', 'Modern luxury look']
  },

  // Gate Automation
  {
    id: 10,
    name: 'Sliding Gate Motor',
    category: 'Gate Automation',
    image: 'https://images.unsplash.com/photo-1615886362534-58a36c5615d6?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty motor for residential and industrial sliding gates, ensuring secure and reliable automation.',
    specs: ['Max gate weight: up to 2000kg', 'Oil-bath lubrication', 'Soft start/stop', 'Obstacle detection'],
    features: ['Robust construction', 'Weatherproof', 'Secure locking']
  },
  {
    id: 11,
    name: 'Swing Gate Motor',
    category: 'Gate Automation',
    image: 'https://images.unsplash.com/photo-1596230529625-7ee4ebf5c353?auto=format&fit=crop&q=80&w=800',
    description: 'Efficient electromechanical or hydraulic operators for swing gates of various lengths and weights.',
    specs: ['Leaf length: up to 5m', 'Articulated or linear arm', 'Opening angle up to 120°', 'Battery backup ready'],
    features: ['Silent movement', 'Easy manual release', 'Long-lasting reliability']
  },

  // Gate Barriers
  {
    id: 12,
    name: 'Parking Gate Barriers',
    category: 'Gate Barriers',
    image: 'https://images.unsplash.com/photo-1596773343360-156294eb84e5?auto=format&fit=crop&q=80&w=800',
    description: 'Rapid-action automatic barriers for managing vehicle access in parking lots, toll booths, and private roads.',
    specs: ['Boom length: 3m - 8m', 'Opening time: < 3s', 'Intensive duty cycle', 'LED boom lighting'],
    features: ['Traffic control', 'Anti-crush safety', 'High speed operation']
  },

  // Industrial
  {
    id: 13,
    name: 'Roller Shutter',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Secure and compact rolling shutter doors suitable for warehouses, factories, and commercial shopfronts.',
    specs: ['Galvanized steel slats', 'Wind resistant', 'Electric or chain operation', 'Fire rated options'],
    features: ['Space efficient', 'High security', 'Durable finish']
  },
  {
    id: 14,
    name: 'Sectional Overhead Door',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Insulated sectional doors that open vertically, offering excellent thermal protection and operational efficiency.',
    specs: ['PU foam insulation', 'Windows/Glazing options', 'Finger-safe panel design', 'Spring balanced'],
    features: ['Thermal efficiency', 'Smooth operation', 'Custom track capabilities']
  },
  {
    id: 15,
    name: 'High Speed Door',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800',
    description: 'Fast-acting PVC curtain doors designed to minimize air exchange and optimize logistics flow.',
    specs: ['Opening speed: up to 2.5 m/s', 'Self-repairing zipper system', 'Frequency inverter', 'Radar activation'],
    features: ['Rapid cycle', 'Climate control', 'Crash forgiving']
  },
  {
    id: 16,
    name: 'Garage Door',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1621255877893-b09e23293e50?auto=format&fit=crop&q=80&w=800',
    description: 'Residential and light-commercial garage doors combining style, security, and convenience.',
    specs: ['Remote control access', 'Insulated styling', 'Quiet belt drive', 'Smart home compatible'],
    features: ['Curb appeal', 'Secure protection', 'Convenient access']
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
