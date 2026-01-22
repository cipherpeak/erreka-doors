'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Wrench, ShieldCheck, PhoneCall, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Settings,
      image: "/images/services/installation.png",
      title: "Installation",
      description: "Expert installation of automatic doors by certified technicians ensuring optimal performance and safety compliance.",
      features: ["Site Assessment", "Precision Fitting", "Safety Testing"]
    },
    {
      icon: ShieldCheck,
      image: "/images/services/maintenance.png",
      title: "Maintenance",
      description: "Comprehensive maintenance packages to prolong the lifespan of your automatic doors and prevent unexpected breakdowns.",
      features: ["Regular Inspections", "Performance Tuning", "Compliance Checks"]
    },
    {
      icon: Wrench,
      image: "/images/services/repairs.png",
      title: "Repairs",
      description: "Fast and reliable repair services for all types of automatic doors, minimizing downtime for your business.",
      features: ["24/7 Emergency Response", "Genuine Parts", "Diagnostic & Resolution"]
    },
    {
      icon: PhoneCall,
      image: "/images/services/support.png",
      title: "Technical Support",
      description: "Dedicated technical support team ready to assist with troubleshooting and operational guidance.",
      features: ["Remote Assistance", "System Upgrades", "User Training"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h1>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              World-Class <span className="text-brand-blue">Services</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              We don't just supply doors; we provide complete lifecycle solutions. From professional installation to preventive maintenance, we ensure your entrances perform flawlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="h-64 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-500 z-10" />
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute top-6 left-6 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                  >
                    <service.icon className="w-7 h-7 text-brand-blue" />
                  </motion.div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <motion.h3 
                    className="text-2xl font-bold text-slate-900 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}
                  >{service.title}</motion.h3>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center gap-2 text-sm text-slate-500 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.05 + index * 0.12 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden group"
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
              <motion.img
                src="/images/services/cta_bg.png"
                alt="Background"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >Ready to upgrade your entrance?</motion.h2>
              <motion.p 
                className="text-xl text-white/90 mb-10 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Contact our team today for a free consultation and quote for your project.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
