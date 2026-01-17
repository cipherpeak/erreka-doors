'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Globe,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h1>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Let's Start a <span className="text-brand-blue">Conversation</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you have a question about our products, need technical support, or want to discuss a new project, our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Phone Support", content: "+971 4 285 2806 / +971 50 223 9301" },
                  { icon: Mail, title: "Email Us", content: "sales@errekadoors.com" },
                  { icon: Globe, title: "Website", content: "www.errekadoors.com" },
                  { icon: Clock, title: "Business Hours", content: "Mon - Sat: 8:00 AM - 6:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  Why Contact ERREKA?
                </h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Expert technical consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Reliable after-sales service</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Long-term maintenance solutions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Trusted by leading UAE organizations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Proven performance in high-traffic environments</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50"
            >
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-500 mb-8">
                    Thank you for reaching out. One of our experts will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Product Quote</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunity</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all resize-none"
                    />
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className={`
                      w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all
                      ${formState === 'submitting' 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-brand-blue text-white hover:bg-brand-dark shadow-xl shadow-brand-blue/20'}
                    `}
                  >
                    {formState === 'submitting' ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[500px] w-full rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl relative"
          >
            {/* Placeholder for Map - In a real app, use Google Maps or Mapbox */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-brand-blue mx-auto mb-4 animate-bounce" />
                <p className="text-slate-500 font-medium">Interactive Map Integration</p>
                <p className="text-slate-400 text-sm">123 Engineering Way, Tech City</p>
              </div>
            </div>
            {/* Overlay for premium feel */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[3rem]" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Common Questions</h3>
            <p className="text-slate-600">Quick answers to some of our most frequently asked questions.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              { q: "Do you provide installation services?", a: "Yes, we have a global network of certified engineers who handle professional installation and commissioning." },
              { q: "What is the typical lead time for custom doors?", a: "Standard products are usually available within 2-4 weeks, while bespoke architectural solutions may take 8-12 weeks." },
              { q: "Are your products compliant with safety standards?", a: "Absolutely. All Erreka products meet or exceed international safety standards, including EN16005." },
              { q: "Do you offer 24/7 emergency support?", a: "Yes, we provide round-the-clock technical support and emergency repair services for our maintenance contract clients." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-blue" /> {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
