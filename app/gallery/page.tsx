'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Video } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Automatic Sliding Door',
    category: 'Commercial',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690008/WhatsApp_Image_2026-01-16_at_18.18.42_qzz6gz.jpg',
    description: 'Installation of high-quality automatic sliding doors.'
  },
  {
    id: 2,
    type: 'image',
    title: 'Automatic Swing Door',
    category: 'Commercial',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690008/Sliding_Door_s8nrwq.png',
    description: 'Reliable automatic swing door system.'
  },
  {
    id: 3,
    type: 'image',
    title: 'Revolving Door',
    category: 'Commercial',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690008/WhatsApp_Image_2026-01-16_at_18.18.59_jubllx.jpg',
    description: 'Elegant revolving door entrance.'
  },
  {
    id: 4,
    type: 'image',
    title: 'Sliding Door Installation',
    category: 'Commercial',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690008/ed183dcc-1da0-480f-bf7e-af58beb161b2.JPG_ty5nmk.jpg',
    description: 'Modern sliding door installation suited for any entrance.'
  },
  {
    id: 5,
    type: 'image',
    title: 'Commercial Entrance',
    category: 'Projects',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690008/fe8d36dd-8d64-4d93-97a2-e8b4d963ed53.JPG_lpregy.jpg',
    description: 'Heavy-duty entrance solution.'
  },
  {
    id: 6,
    type: 'image',
    title: 'Office Installation',
    category: 'Projects',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690007/7e8ab069-5db7-4bf3-9c88-f67a4cacf9b9.JPG_jzahyj.jpg',
    description: 'Seamless integration with office architecture.'
  },
  // {
  //   id: 7,
  //   type: 'image',
  //   title: 'Modern Entrance',
  //   category: 'Projects',
  //   url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690007/Automatic_Sliding_Door.JPG_zdqmpt.jpg',
  //   description: 'Stylish and functional entrance design.'
  // },
  {
    id: 8,
    type: 'image',
    title: 'Project Showcase',
    category: 'Projects',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690006/0cd7f20a-3878-47e9-bcd6-7f233376e740.JPG_qpsmhz.jpg',
    description: 'Recent installation showcasing our capabilities.'
  },
  {
    id: 9,
    type: 'image',
    title: 'Custom Installation',
    category: 'Residential',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690204/Revolving_Door.JPG_g2qmn7.jpg',
    description: 'Customized solution for specific client needs.'
  },
  {
    id: 10,
    type: 'image',
    title: 'Site Project',
    category: 'Commercial',
    url: 'https://res.cloudinary.com/dnti1scn8/image/upload/v1769690007/Automatic_Swing_Door.JPG_kkrcbh.jpg',
    description: 'On-site installation view.'
  }
];

const videoItems = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776375/Sequence_01_7_lishre.mp4',
    title: 'Installation Video 1'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776375/Sequence_01_2_mwfrvb.mp4',
    title: 'Installation Video 2'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776384/Sequence_01_5_j3b1l8.mp4',
    title: 'Installation Video 3'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776385/Sequence_01_1_nedtis.mp4',
    title: 'Installation Video 4'
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776384/Sequence_01_3_ad4hpi.mp4',
    title: 'Installation Video 5'
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776387/Sequence_01_4_csqirn.mp4',
    title: 'Installation Video 6'
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776393/Sequence_01_qwupbo.mp4',
    title: 'Installation Video 7'
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776404/2_smufdk.mp4',
    title: 'Installation Video 8'
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dnti1scn8/video/upload/v1769776429/Sequence_01_10_cvyac3.mp4',
    title: 'Installation Video 9'
  }
];

export default function GalleryPage() {
  const [view, setView] = useState<'photos' | 'videos'>('photos');
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

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

      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Gallery Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex items-center gap-2">
              <button
                onClick={() => setView('photos')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${view === 'photos'
                  ? 'bg-brand-blue text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <Camera className="w-5 h-5" />
                Photo Gallery
              </button>
              <button
                onClick={() => setView('videos')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${view === 'videos'
                  ? 'bg-brand-blue text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <Video className="w-5 h-5" />
                Video Gallery
              </button>
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {view === 'photos' ? (
                galleryItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                    className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100"
                  >
                    <motion.img
                      src={item.url}
                      alt={item.title}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-2 block">
                            {item.category}
                          </span>
                          <h3 className="text-white font-bold text-xl">{item.title}</h3>
                        </motion.div>

                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
                    >
                      <Camera className="w-4 h-4 text-brand-blue" />
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                videoItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    className="group relative aspect-video md:aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-xl"
                  >
                    <div className="absolute inset-0">
                      <video
                        src={item.url}
                        controls
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
