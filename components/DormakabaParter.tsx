'use client';

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";

interface DormakabaPartnerProps {
  isShort?: boolean;
}

export default function DormakabaParter({ isShort = false }: DormakabaPartnerProps) {
  if (isShort) {
    return (
      <section className="py-16 bg-gradient-to-r from-brand-blue/5 to-brand-blue/10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side - Logo and Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start md:flex-1"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                <Award className="w-4 h-4 text-brand-blue" />
                <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">Official Partner</span>
              </div>

              {/* Logo */}
              <div className="mb-8 w-full max-w-xs">
                <img
                  src="/images/brands/Dormakaba.png"
                  alt="Dormakaba"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 leading-tight">
                Official <span className="text-brand-blue">Dormakaba</span> Partner
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                ERREKA is a proud official partner of Dormakaba, delivering world-class automatic door systems backed by decades of global innovation and reliability.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 group"
                >
                  Read More About Partnership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:flex-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-80">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                  alt="Modern Building Entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Logo and Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <Award className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">Official Partner</span>
            </div>

            {/* Logo */}
            <div className="mb-12 w-full max-w-xs">
              <img
                src="/images/brands/Dormakaba.png"
                alt="Dormakaba"
                className="w-full h-auto object-contain"
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Premium Partnership with <span className="text-brand-blue">Dormakaba</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              ERREKA is a proud official partner of Dormakaba, a global leader in intelligent building solutions. This partnership allows us to deliver world-class automatic door systems backed by Dormakaba's decades of innovation and reliability.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Together with Dormakaba, we provide cutting-edge access solutions that enhance security, efficiency, and user experience across commercial and residential spaces throughout the UAE.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { title: "Global Excellence", desc: "Access to Dormakaba's proven technology" },
                { title: "Expert Support", desc: "Dedicated technical partnership and training" },
                { title: "Innovation", desc: "Latest automatic door advancements" },
                { title: "Reliability", desc: "Industry-leading performance standards" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Modern Building Entrance"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-1">Trusted Partner</div>
                  <div className="text-slate-900 font-bold">Premium Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

