'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Code2, Database, Globe2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://i.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          y: backgroundY
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl"></div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-medium mb-6"
            >
              Leading IT Solutions Provider
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6"
            >We Build  <span className="text-green-400">Digital Excellence</span>
              <br />
              for your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            >
             Transform your digital presence with cutting-edge web solutions. We craft beautiful, high-performance websites that drive results and engage your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* Button (You can customize the button as needed) */}
              {/* <Button>Explore Solutions</Button> */}
            </motion.div>
          </motion.div>

          {/* Image/Animation Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-800"
            >
              <Code2 className="h-8 w-8 text-green-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-10 p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-800"
            >
              <Database className="h-8 w-8 text-green-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-16 p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-800"
            >
              <Globe2 className="h-8 w-8 text-green-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
