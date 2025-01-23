'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Office workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-500/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20"
            >
              <p className="text-emerald-500 font-semibold">10+ Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-medium mb-6">
              CREATIVE VISION
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ensure Superlative <span className="text-emerald-500">Support</span>
              <br />
              With Technology.
            </h2>
            <p className="text-gray-400 mb-8">
              Transform your business with our cutting-edge technology solutions. We specialize in delivering innovative software development, cloud services, and comprehensive digital transformation strategies that drive growth and efficiency.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <p className="text-gray-300">Creative Strategy</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <p className="text-gray-300">Unique Production</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <p className="text-gray-300">Rebranding Design</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <p className="text-gray-300">Corporate Identity</p>
              </div>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              About Us More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}