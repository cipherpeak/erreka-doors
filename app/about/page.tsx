'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Intro Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">About Erreka</h1>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-8 leading-tight">
              Pioneering the Future of <span className="text-brand-blue">Access Control</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              With over five decades of engineering excellence, Erreka has established itself as a global leader in automatic door systems and architectural solutions.
            </p>
          </motion.div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-bl-[200px]" />
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-3xl text-white hidden md:block">
                <div className="text-4xl font-bold mb-1">1970</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Founded</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Story</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in the heart of industrial innovation, Erreka began with a simple vision: to make buildings more accessible and efficient through advanced engineering.
                </p>
                <p>
                  Over the years, we have evolved from a local manufacturer into an international powerhouse, part of the Mondragon Corporation. Our journey is defined by a relentless pursuit of quality and a commitment to solving complex architectural challenges.
                </p>
                <p>
                  Today, our systems are installed in some of the world's most iconic buildings, providing seamless access to millions of people every day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide innovative and reliable access solutions that enhance the safety, accessibility, and aesthetic value of modern architectural spaces worldwide.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the global benchmark in automatic door technology, recognized for our engineering excellence, sustainable practices, and customer-centric approach.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values & Standards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">The Pillars of Our Excellence</h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We uphold the highest standards of ethics and transparency in all our dealings." },
              { icon: Lightbulb, title: "Innovation", desc: "Constantly pushing boundaries to develop smarter, more efficient technologies." },
              { icon: Users, title: "Collaboration", desc: "Working closely with architects and partners to achieve shared success." },
              { icon: Globe, title: "Sustainability", desc: "Committed to eco-friendly manufacturing and energy-efficient products." },
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

      <Footer />
    </main>
  );
}
