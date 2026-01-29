'use client';

import { motion } from 'framer-motion';

export default function ClientLogos() {
    const clients = [
        { name: "The Dubai Mall", image: "/images/clients/THE-DUBAI-MALL.png" },
        { name: "ADNOC", image: "/images/clients/ADNOC.png" },
        { name: "RTA", image: "/images/clients/RTA.png" },
        { name: "Emirates NBD", image: "/images/clients/EMIRATES-NBD.png" },
        { name: "Porsche", image: "/images/clients/PORSCHE.png" },
        { name: "Mercedes-Benz", image: "/images/clients/MERCEDES-BENS.png" },
        { name: "Landmark Group", image: "/images/clients/LANDMARK-GROUP.png" },
        { name: "BMW", image: "/images/clients/BMW.png" },
        { name: "Volkswagen", image: "/images/clients/VOLKSWAGEN.png" },
        { name: "Geely", image: "/images/clients/GEELY.png" },
        { name: "Al Sharq Hospital", image: "/images/clients/ALSHARQ-HOSPITAL.png" },
        { name: "Al Sharq", image: "/images/clients/Al-Sharq.png" },
        { name: "Azizi Developments", image: "/images/clients/Azizi-Developments.png" },
        { name: "Danube Properties", image: "/images/clients/Danube Properties.png" },
        { name: "Rakbank", image: "/images/clients/Rakbank.webp" },
        { name: "ADCB", image: "/images/clients/abu dhabi commercial back.png" },
        { name: "Adidas", image: "/images/clients/adidas.png" },
        { name: "American Hospital", image: "/images/clients/american hospital.jpg" },
        { name: "BYD", image: "/images/clients/byd.png" },
        { name: "DAMAC", image: "/images/clients/damac.png" },
        { name: "DEWA", image: "/images/clients/dubai electricity.png" },
        { name: "Dubai Health", image: "/images/clients/dubai health.png" },
        { name: "Emaar", image: "/images/clients/emaar.png" },
        { name: "Emirates Islamic", image: "/images/clients/emirates islamic.avif" },
        { name: "Exeed", image: "/images/clients/exeed.png" },
        { name: "Gentle Monster", image: "/images/clients/gentle monster.png" },
        { name: "Honda", image: "/images/clients/honda.png" },
        { name: "International Modern Hospital", image: "/images/clients/international modern hospital.png" },
        { name: "Jetour", image: "/images/clients/jetour.png" },
        { name: "Mazda", image: "/images/clients/mazda.png" },
        { name: "Mini", image: "/images/clients/mini.png" },
        { name: "Rolls Royce", image: "/images/clients/rolls royce.png" },
        { name: "Smart", image: "/images/clients/smart.svg" },
        { name: "Soueast", image: "/images/clients/soueast.png" },
        { name: "Toyota", image: "/images/clients/toyota.png" },
        { name: "Zeekr", image: "/images/clients/zeekr.png" },
        { name: "Zulekha Hospital", image: "/images/clients/zulekha hospital.jpg" },
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
