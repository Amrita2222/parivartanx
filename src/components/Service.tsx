'use client';

import { motion } from 'framer-motion';
// import { Shield, Zap, Cpu, Cloud, Lock, BarChart } from 'lucide-react';
import { Shield, Code, Smartphone, Cloud, Lock, Database, Package, Settings, RocketIcon} from "lucide-react";
import { Rock_3D } from 'next/font/google';


const features = [
  {
    icon: <Code className="w-6 h-6" />, // Code icon for Web Development
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />, // Smartphone icon for Mobile Development
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Shield className="w-6 h-6" />, // Paintbrush for UI/UX Design
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love to interact with.",
  },
  {
    icon: <Cloud className="w-6 h-6" />, // Cloud icon for Cloud Services
    title: "Cloud Services",
    description: "Scalable cloud solutions for hosting, storage, and deployment on AWS, Azure, or GCP.",
  },
  {
    icon: <Shield className="w-6 h-6" />, // Shield icon for Cybersecurity
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from potential threats.",
  },
  {
    icon: <Database className="w-6 h-6" />, // Database icon for Database Management
    title: "Database Management",
    description: "Optimized database solutions for high performance and scalability.",
  },
  {
    icon: <Settings className="w-6 h-6" />, // Settings icon for DevOps
    title: "DevOps",
    description: "Continuous integration and delivery for seamless development and deployment.",
  },
  {
    icon: <RocketIcon className="w-6 h-6" />, // Rocket icon for Startup Solutions
    title: "Startup Solutions",
    description: "Comprehensive services to help startups build, grow, and scale with tailored strategies and technologies.",
  },
  {
    icon: <Package className="w-6 h-6" />, // Package icon for Custom Software Development
    title: "Custom Software Development",
    description: "Tailor-made software solutions to meet unique business needs and goals.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-medium mb-6">
            OUR SERVICES
          </div>
         <h2 className="mt-1 mb-3 text-3xl leading-5 font-extrabold tracking-tight text-white sm:text-4xl">
         Powerful Features for <span className="text-emerald-500">Modern Solutions</span>
         </h2>
         

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Our comprehensive suite of features enables businesses to build, deploy, and scale applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e293b]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-base md:text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
