'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Shield, Zap, Globe, Award, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Company Overview / Stats */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">About Erreka</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Excellence in Every Opening
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We specialize in the design, manufacture, and installation of automatic door systems. 
                Our solutions are tailored to meet the highest standards of safety, accessibility, and aesthetic appeal.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-brand-blue mb-1"
                  >
                    50+
                  </motion.div>
                  <div className="text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-brand-blue mb-1"
                  >
                    100+
                  </motion.div>
                  <div className="text-slate-500 font-medium">Global Partners</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { icon: Shield, title: "Certified Safety", desc: "Meeting international EN standards for all installations." },
                { icon: Zap, title: "Smart Tech", desc: "IoT integrated systems for remote monitoring and control." },
                { icon: Globe, title: "Global Reach", desc: "Presence in over 50 countries with local support." },
                { icon: Award, title: "Premium Quality", desc: "High-grade materials ensuring long-term durability." },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all group"
                >
                  <item.icon className="w-10 h-10 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Comprehensive Solutions</h3>
            <p className="text-slate-400 text-lg">
              From initial design to long-term maintenance, we provide end-to-end support for your architectural projects.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Installation", 
                desc: "Professional setup by certified engineers ensuring perfect alignment and functionality.",
                img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Maintenance", 
                desc: "Preventative care and 24/7 emergency support to keep your access points running smoothly.",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Custom Design", 
                desc: "Bespoke architectural solutions tailored to your building's unique aesthetic and flow.",
                img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800"
              },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <motion.img 
                  src={service.img} 
                  alt={service.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                  <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">{service.desc}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-brand-blue font-bold flex items-center gap-2"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <motion.div 
          initial={{ x: "100%" }}
          whileInView={{ x: "50%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12" 
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white max-w-2xl"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to upgrade your building's access?</h3>
              <p className="text-white/80 text-lg">
                Consult with our experts today for a customized solution that fits your architectural needs.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Get a Quote
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
