'use client';

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function BrandCarousel() {
  const controls = useAnimationControls();

  // Brand images from the public/images/brands folder
  const brands = [
    { name: "Dormakaba", image: "/images/brands/Dormakaba.png" },
    { name: "ASSA", image: "/images/brands/assa.webp" },
    { name: "BFT", image: "/images/brands/bft.webp" },
    { name: "CAME", image: "/images/brands/came.png" },
    { name: "GEZE", image: "/images/brands/geze.png" },
    { name: "LIFE", image: "/images/brands/life.png" },
    { name: "NICE", image: "/images/brands/nice.png" },
    { name: "ROGER", image: "/images/brands/roger.webp" },
    { name: "TORMAX", image: "/images/brands/tormax.jpg" },
  ];

  // Duplicate brands for seamless loop
  const carouselBrands = [...brands, ...brands];

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  };

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4"
            initial={{ opacity: 0, letterSpacing: "-0.05em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Partners
          </motion.h2>
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

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Carousel Container */}
      <div
        className="relative flex overflow-x-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          className="flex gap-8 md:gap-12 py-8"
        >
          {carouselBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 h-24 md:h-32 w-32 md:w-40 flex items-center justify-center px-6 md:px-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/50 hover:shadow-lg transition-all"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
