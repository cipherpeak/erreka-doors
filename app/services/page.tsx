'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Wrench, 
  PenTool, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronDown,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 'installation',
    title: 'Professional Installation',
    icon: Settings,
    shortDesc: 'Expert setup of automatic door systems with precision engineering.',
    longDesc: 'Our certified engineers ensure that every installation meets the highest standards of safety and performance. We handle everything from structural preparation to final calibration, ensuring a seamless integration with your building management systems.',
    features: ['Site assessment & planning', 'Structural integration', 'Safety sensor calibration', 'BMS integration'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maintenance',
    title: 'Preventative Maintenance',
    icon: Wrench,
    shortDesc: 'Comprehensive care plans to ensure longevity and reliability.',
    longDesc: 'Minimize downtime and extend the lifespan of your access systems with our proactive maintenance programs. We provide regular inspections, lubrication, and software updates to keep your doors operating at peak efficiency.',
    features: ['24/7 Emergency support', 'Scheduled inspections', 'Genuine spare parts', 'Performance reporting'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'design',
    title: 'Custom Architectural Design',
    icon: PenTool,
    shortDesc: 'Bespoke solutions tailored to your unique architectural vision.',
    longDesc: 'We collaborate with architects and developers to create custom access solutions that complement the building\'s aesthetic while maintaining functionality. From curved glass to oversized industrial openings, we bring your vision to life.',
    features: ['CAD & BIM modeling', 'Material selection', 'Aesthetic customization', 'Feasibility studies'],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consultancy',
    title: 'Technical Consultancy',
    icon: ShieldCheck,
    shortDesc: 'Expert advice on safety standards and access optimization.',
    longDesc: 'Navigate complex safety regulations and optimize traffic flow with our consultancy services. We provide detailed audits and recommendations to ensure your facility is compliant and efficient.',
    features: ['Safety audits (EN16005)', 'Traffic flow analysis', 'Energy efficiency consulting', 'Security integration'],
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800'
  }
];

const processSteps = [
  { title: 'Consultation', desc: 'Understanding your specific needs and site requirements.' },
  { title: 'Design & Engineering', desc: 'Creating detailed technical plans and custom solutions.' },
  { title: 'Manufacturing', desc: 'Precision fabrication using high-grade materials.' },
  { title: 'Installation', desc: 'Professional setup and rigorous safety testing.' },
  { title: 'Support', desc: 'Ongoing maintenance and 24/7 technical assistance.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Services</h1>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              End-to-End <span className="text-brand-blue">Access Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide a comprehensive suite of services designed to support your project from initial concept through to long-term operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`
                    bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500
                    ${expandedId === service.id ? 'shadow-2xl ring-1 ring-brand-blue/10' : 'hover:shadow-xl'}
                  `}
                >
                  <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-brand-blue" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">{service.title}</h3>
                      </div>
                      <p className="text-slate-600 text-lg mb-8">{service.shortDesc}</p>
                      
                      <button 
                        onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                        className="flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
                      >
                        {expandedId === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedId === service.id ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 md:px-12 pb-12 pt-4 border-t border-slate-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                              <h4 className="font-bold text-slate-900 mb-4">Service Overview</h4>
                              <p className="text-slate-600 leading-relaxed mb-6">{service.longDesc}</p>
                              <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-all flex items-center gap-2">
                                Request Service <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl">
                              <h4 className="font-bold text-slate-900 mb-6">Key Features</h4>
                              <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Our Process</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">How We Deliver Excellence</h3>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block" />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10"
            >
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-slate-900 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Need a custom solution?</h3>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Our team of experts is ready to help you design and implement the perfect access system for your project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                  Book a Consultation
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
