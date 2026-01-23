'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandCarousel from "@/components/BrandCarousel";
import DormakabaParter from "@/components/DormakabaParter";
import ClientLogos from "@/components/ClientLogos";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Lightbulb, Globe } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Intro Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-xs md:text-sm mb-3 md:mb-4">About ERREKA Technical Services LLC</h1>
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              Specialized <span className="text-brand-blue">Access Solutions</span> in the UAE
            </h2>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Headquartered in the United Arab Emirates, ERREKA was founded to address the growing demand for high-quality automated access systems supported by dependable service and long-term maintenance expertise.
            </p>
          </motion.div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-bl-[200px]" />
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Our Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-brand-blue p-5 md:p-8 rounded-2xl md:rounded-3xl text-white block shadow-xl">
                <div className="text-2xl md:text-4xl font-bold mb-0.5 md:mb-1">1970</div>
                <div className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-widest">Founded</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 md:mb-6">Expertise That Goes Beyond Installation</h3>
              <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Automatic doors play a critical role in modern buildings by controlling access, optimizing people flow, enhancing security, and improving user convenience.
                </p>
                <p>
                  ERREKA brings together advanced technology, global brands, and local technical expertise to deliver solutions that perform reliably throughout their lifecycle. Our work does not end with installation; we believe that well-maintained systems are safer, last longer, and deliver better returns on investment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-semibold text-slate-900"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Lifecycle planning</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Preventive maintenance strategies</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> System performance optimization</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Cost-efficient long-term operation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/about/vision_mission_bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue/20">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To create secure, efficient, and future-ready access solutions through continuous innovation, precision installation, and dependable service. Day by day. Installation by installation. Innovation by innovation.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue/20">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be a trusted leader in automatic entrance and building access solutions in the UAE by delivering systems that people rely on every day — systems that inspire confidence, safety, and seamless movement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values & Standards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">What We Stand For</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">The Pillars of Our Excellence</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "Systems that perform consistently in high-traffic environments." },
              { icon: ShieldCheck, title: "Safety", desc: "Compliance with international quality and safety standards." },
              { icon: Lightbulb, title: "Efficiency", desc: "Optimized people flow and operational convenience." },
              { icon: Lightbulb, title: "Innovation", desc: "Smart access and digitally connected building systems." },
              { icon: Users, title: "Trust", desc: "Long-term partnerships built on service excellence." },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <value.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dormakaba Partner Section */}
      <DormakabaParter />

      {/* Brand Carousel Section */}
      <BrandCarousel />

      {/* Client Logos Section */}
      <ClientLogos />

      <Footer />
    </main>
  );
}
