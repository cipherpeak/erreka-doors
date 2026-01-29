'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Info, ArrowRight, Filter } from "lucide-react";

const categories = ['All', 'Sliding Doors', 'Revolving Doors', 'Folding Doors', 'Gate Automation', 'Gate Barriers', 'Industrial'];

const products = [
  // Sliding Doors
  {
    id: 1,
    name: 'Sliding Door',
    category: 'Sliding Doors',
    image: '/images/products/Automatic Sliding Door.jpg',
    description: 'Sliding door operators are devices that control the movement of sliding doors, allowing them to open and close automatically. They enhance accessibility, improve safety, and provide a smooth, efficient operation for both residential and commercial spaces.'
  },
  {
    id: 2,
    name: 'Breakout Sliding Door',
    category: 'Sliding Doors',
    image: '/images/products/Breakout Sliding Door.jpg',
    description: 'A sliding door that can “break out” or swing open in an emergency to allow safe and quick egress. It combines the space-saving convenience of a sliding door with the safety of a traditional swing door, making it ideal for meeting rooms, offices, and public spaces where fast evacuation is essential.'
  },
  {
    id: 3,
    name: 'Telescopic Sliding Door',
    category: 'Sliding Doors',
    image: '/images/products/Telescopic Sliding Door.jpeg',
    description: 'A space-saving sliding door that moves in multiple overlapping panels, allowing a wider opening while requiring minimal wall space. Ideal for entrances where a large clear opening is needed in limited space.'
  },
  {
    id: 4,
    name: 'Curved Sliding Door',
    category: 'Sliding Doors',
    image: '/images/products/Curved Sliding Door.jpeg',
    description: 'A sliding door designed to follow a curved track, creating a smooth, stylish entrance while saving space. Ideal for modern interiors and areas with non-linear layouts.'
  },

  // Revolving Doors
  {
    id: 5,
    name: 'Manual Revolving Door',
    category: 'Revolving Doors',
    image: '/images/products/Manula Revolving Door.avif',
    description: 'A door with rotating panels operated by hand, allowing people to enter and exit efficiently while controlling airflow and maintaining building climate.'
  },
  {
    id: 6,
    name: 'Automatic Revolving Door',
    category: 'Revolving Doors',
    image: '/images/products/Automatic Revolving Door.jpg',
    description: 'A revolving door with sensor-controlled automatic rotation, providing smooth, hands-free entry while maintaining energy efficiency and controlling indoor climate.'
  },
  {
    id: 7,
    name: 'Revolving door with integrated sliding door',
    category: 'Revolving Doors',
    image: '/images/products/Revolving Door with Sliding Intergrated.jpeg',
    description: 'A revolving door combined with an automatic sliding door for easy access, allowing smooth everyday use and wider opening for carts, wheelchairs, or emergencies.'
  },
  {
    id: 8,
    name: 'Breakout Revolving door',
    category: 'Revolving Doors',
    image: '/images/products/Breakout Revolving door.avif',
    description: 'A revolving door that can open outward in an emergency, providing a wide, safe exit while maintaining normal revolving operation during everyday use.'
  },
  {
    id: 9,
    name: 'Glass Revolving Door',
    category: 'Revolving Doors',
    image: '/images/products/Glass Revolving Door.jpg',
    description: 'A revolving door made primarily of glass panels, offering a modern look while allowing visibility, natural light, and smooth traffic flow'
  },

  // Folding Doors
  {
    id: 17,
    name: 'Aluminum Folding Door',
    category: 'Folding Doors',
    image: '/images/products/Aluminium Folding Door.jpeg',
    description: 'A versatile folding door system made of durable aluminum, designed to maximize space and provide a seamless transition between indoor and outdoor areas.'
  },
  {
    id: 18,
    name: 'Frameless Glass Folding Door',
    category: 'Folding Doors',
    image: '/images/products/frameless Glass Folding Door.webp',
    description: 'An elegant, all-glass folding door that offers unobstructed views and modern aesthetics, perfect for luxury residential and commercial applications.'
  },
  {
    id: 19,
    name: 'Horizontal Sliding Wall',
    category: 'Folding Doors',
    image: '/images/products/Horizontal Sliding Wall.jpeg',
    description: 'A flexible and stylish glass partition system that slides horizontally to open up spaces or divide rooms, ideal for shopping malls, airports, and offices.'
  },
  {
    id: 20,
    name: 'Acoustic Partition Wall',
    category: 'Folding Doors',
    image: '/images/products/Acoustic Partition Wall.jpeg',
    description: 'A movable wall system designed to provide sound insulation and privacy, perfect for conference rooms, banquet halls, and educational facilities where space management is key.'
  },

  // Gate Automation
  {
    id: 10,
    name: 'Sliding Gate Motor',
    category: 'Gate Automation',
    image: '/images/products/Sliding gate motor.jpg',
    description: 'A motorized system that automatically opens and closes sliding gates, providing secure, smooth, and convenient access control.'
  },
  {
    id: 11,
    name: 'Swing Gate Motor',
    category: 'Gate Automation',
    image: '/images/products/Automatic Swing Gate Motor.jpg',
    description: 'A motorized mechanism that automatically opens and closes swing gates, ensuring smooth operation, security, and convenience'
  },

  // Gate Barriers
  {
    id: 12,
    name: 'Parking Gate Barriers',
    category: 'Gate Barriers',
    image: '/images/products/parking-barrier-1.jpg',
    description: 'Automated barriers used to control vehicle entry and exit in parking areas, ensuring security and smooth traffic flow.'
  },

  // Industrial
  {
    id: 13,
    name: 'Roller Shutters',
    category: 'Industrial',
    image: '/images/products/Roller Shutter.webp',
    description: 'Durable shutters that roll up and down vertically, providing security, privacy, and protection for shops, garages, and industrial spaces.'
  },
  {
    id: 14,
    name: 'Sectional Overhead Doors',
    category: 'Industrial',
    image: '/images/products/Sectional Overhead Doors.jpeg',
    description: 'Doors made of horizontal panels that lift upward and slide overhead, saving space while providing strong insulation and security'
  },
  {
    id: 15,
    name: 'High Speed Doors',
    category: 'Industrial',
    image: '/images/products/High speed doors.jpg',
    description: 'Fast-operating doors designed for quick opening and closing, improving workflow, energy efficiency, and environmental control in industrial and commercial spaces.'
  },
  {
    id: 16,
    name: 'Garage Doors',
    category: 'Industrial',
    image: '/images/products/Garage Doors.jpeg',
    description: 'Doors designed to secure and provide easy access to garages, available in various styles such as sectional, roller, or tilt.'
  },


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
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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

              <div className="lg:w-1/2 aspect-square md:aspect-video lg:aspect-auto bg-slate-50 relative flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
                <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-4 block">
                  {selectedProduct.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">{selectedProduct.name}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all">
                      Request Quote
                    </button>
                  </Link>
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
