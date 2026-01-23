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

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[160px]"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`
                                relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 
                                hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 group
                                flex items-center justify-center p-6
                                ${client.className || "col-span-1"}
                            `}
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-full h-full object-contain transition-all duration-500 scale-90 group-hover:scale-100"
                            />
                            {/* Decorative Corner Glow */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
