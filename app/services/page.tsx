'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Play, Camera, Video } from "lucide-react";

const categories = ['All', 'Commercial', 'Industrial', 'Healthcare', 'Residential'];

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Modern Office Entrance',
    category: 'Commercial',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'Installation of ERTAIN sliding doors in a high-traffic corporate headquarters.'
  },
  {
    id: 2,
    type: 'video',
    title: 'High-Speed Industrial Door',
    category: 'Industrial',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-automatic-glass-doors-opening-in-a-modern-building-34573-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'Demonstration of our heavy-duty industrial door system in a logistics center.'
  },
  {
    id: 3,
    type: 'image',
    title: 'Hospital Hermetic Doors',
    category: 'Healthcare',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    description: 'Clean-room certified sliding doors installed in a state-of-the-art surgical wing.'
  },
  {
    id: 4,
    type: 'image',
    title: 'Luxury Retail Revolving Door',
    category: 'Commercial',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    description: 'KRYSTAL series revolving door providing an elegant entrance for a luxury showroom.'
  },
  {
    id: 5,
    type: 'video',
    title: 'Smart Access Integration',
    category: 'Residential',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-opening-a-door-with-a-key-card-41551-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
    description: 'Showcasing our smart card and biometric integration for residential complexes.'
  },
  {
    id: 6,
    type: 'image',
    title: 'Curved Glass Entrance',
    category: 'Commercial',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Bespoke curved automatic sliding doors for a landmark architectural project.'
  }
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Project Gallery</h1>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Our Work in <span className="text-brand-blue">Action</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our portfolio of successful installations across the UAE, showcasing our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group cursor-pointer relative aspect-square overflow-hidden rounded-3xl bg-slate-100"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-xl">{item.title}</h3>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 text-brand-blue fill-brand-blue" />
                        ) : (
                          <Maximize2 className="w-5 h-5 text-brand-blue" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Type Icon Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full">
                    {item.type === 'video' ? (
                      <Video className="w-4 h-4 text-brand-blue" />
                    ) : (
                      <Camera className="w-4 h-4 text-brand-blue" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 w-full max-w-6xl max-h-full flex flex-col"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand-blue transition-colors flex items-center gap-2 font-bold"
              >
                <X className="w-6 h-6" /> Close
              </button>

              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  {selectedItem.type === 'video' ? (
                    <video 
                      src={selectedItem.url} 
                      controls 
                      autoPlay 
                      className="w-full h-full max-h-[70vh] object-contain"
                    />
                  ) : (
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.title} 
                      className="w-full h-full max-h-[70vh] object-contain"
                    />
                  )}
                </div>
                
                <div className="lg:w-1/3 p-8 md:p-12 bg-white">
                  <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-4 block">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">{selectedItem.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">Interested in a similar solution?</h4>
                    <button className="w-full bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all">
                      Request a Consultation
                    </button>
                  </div>
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
