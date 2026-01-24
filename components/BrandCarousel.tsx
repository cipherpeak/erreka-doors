'use client';

import { motion } from "framer-motion";


export default function BrandCarousel() {
  // Brand images from the public/images/brands folder
  const brands = [
    { name: "Dormakaba", image: "/images/brands/Dormakaba.png" },
    { name: "GEZE", image: "/images/brands/geze.png" },
    { name: "ASSA", image: "/images/brands/assa.webp" },
    { name: "TORMAX", image: "/images/brands/tormax.jpg" },
    { name: "Stanley", image: "/images/brands/stanley.png" },
    { name: "BFT", image: "/images/brands/bft.webp" },
    { name: "CAME", image: "/images/brands/came.png" },
    { name: "LIFE", image: "/images/brands/life.png" },
    { name: "NICE", image: "/images/brands/nice.png" },
    { name: "ROGER", image: "/images/brands/roger.webp" },
  ];

  // Duplicate brands for seamless loop
  const carouselBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Brands We Collaborate With
          </h3>
          <motion.p
            className="text-slate-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We partner with world-leading manufacturers to provide the most reliable and innovative automatic door solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 md:gap-12 py-8 animate-marquee hover:[animation-play-state:paused]">
          {carouselBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 h-24 md:h-32 w-32 md:w-40 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/50 hover:shadow-lg transition-all ${brand.name === "Dormakaba" ? "p-1" : "px-6 md:px-8"
                }`}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
