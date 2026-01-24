'use client';

import { motion } from 'framer-motion';

export default function ClientLogos() {
    const clients = [
        { name: "The Dubai Mall", image: "/images/clients/THE-DUBAI-MALL.png", className: "md:col-span-2 md:row-span-2" },
        { name: "ADNOC", image: "/images/clients/ADNOC.png", className: "md:col-span-1 md:row-span-1" },
        { name: "RTA", image: "/images/clients/RTA.png", className: "md:col-span-1 md:row-span-1" },
        { name: "Emirates NBD", image: "/images/clients/EMIRATES-NBD.png", className: "md:col-span-2" },
        { name: "Porsche", image: "/images/clients/PORSCHE.png", className: "md:col-span-1" },
        { name: "Mercedes-Benz", image: "/images/clients/MERCEDES-BENS.png", className: "md:col-span-1" },
        { name: "Landmark Group", image: "/images/clients/LANDMARK-GROUP.png", className: "md:col-span-2" },
        { name: "BMW", image: "/images/clients/BMW.png", className: "md:col-span-1" },
        { name: "Volkswagen", image: "/images/clients/VOLKSWAGEN.png", className: "md:col-span-1" },
        { name: "Geely", image: "/images/clients/GEELY.png", className: "md:col-span-1" },
        { name: "Al Sharq Hospital", image: "/images/clients/ALSHARQ-HOSPITAL.png", className: "md:col-span-1" },
        // New Logos
        { name: "Azizi Developments", image: "/images/clients/Azizi-Developments.png", className: "md:col-span-1" },
        { name: "Danube Properties", image: "/images/clients/Danube Properties.png", className: "md:col-span-1" },
        { name: "Rakbank", image: "/images/clients/Rakbank.webp", className: "md:col-span-1" },
        { name: "ADCB", image: "/images/clients/abu dhabi commercial back.png", className: "md:col-span-1" },
        { name: "American Hospital", image: "/images/clients/american hospital.jpg", className: "md:col-span-1" },
        { name: "BYD", image: "/images/clients/byd.png", className: "md:col-span-1" },
        { name: "DAMAC", image: "/images/clients/damac.png", className: "md:col-span-1" },
        { name: "Dubai Health", image: "/images/clients/dubai_health.png", className: "md:col-span-1" },
        { name: "Emaar", image: "/images/clients/emaar.png", className: "md:col-span-1" },
        { name: "Emirates Islamic", image: "/images/clients/emirates islamic.avif", className: "md:col-span-1" },
        { name: "Exeed", image: "/images/clients/exeed.png", className: "md:col-span-1" },
        { name: "Honda", image: "/images/clients/honda.png", className: "md:col-span-1" },
        { name: "International Modern Hospital", image: "/images/clients/international modern hospital.png", className: "md:col-span-1" },
        { name: "Jetour", image: "/images/clients/jetour.png", className: "md:col-span-1" },
        { name: "Mazda", image: "/images/clients/mazda.png", className: "md:col-span-1" },
        { name: "Mini", image: "/images/clients/mini.jpg", className: "md:col-span-1" },
        { name: "Rolls Royce", image: "/images/clients/rr.png", className: "md:col-span-1" },
        { name: "Smart", image: "/images/clients/smart.svg", className: "md:col-span-1" },
        { name: "Toyota", image: "/images/clients/toyota.png", className: "md:col-span-1" },
        { name: "Zeekr", image: "/images/clients/zeekr.jpg", className: "md:col-span-1" },
        { name: "Zulekha Hospital", image: "/images/clients/zulekha hospital.jpg", className: "md:col-span-1" },
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                            Supporting Industry Leaders
                        </h3>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            We are proud to serve some of the most prestigious organizations and landmarks in the region.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative flex overflow-x-hidden group">
                    {/* Gradient Masks for Fade Effect */}
                    <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-8 md:gap-12 py-8 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
                        {[...clients, ...clients].map((client, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 h-24 md:h-32 w-32 md:w-40 flex items-center justify-center p-6 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300"
                            >
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
