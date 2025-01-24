'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button'

export default function Footer() {
  const footerLinks = {
   
    service: ['Web Development', ' UI/UX Design',  'Mobile Apps', 'Consulting'],
    support: ['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'],
    company: ['About Us', 'Services', 'Projects', 'Team', 'Careers'],
    contact: [
      { icon: <Mail className="w-4 h-4" />, text: 'parivartanx.info@gmail.com' },
      { icon: <Phone className="w-4 h-4" />, text: '+1 (555) 123-4567' },
      { icon: <MapPin className="w-4 h-4" />, text: 'Patna INDIA, PT 835700' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
              <span className="text-white font-semibold text-2xl">ParivartanX</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg sm:text-xl">
              Transforming businesses through innovative technology solutions and digital excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
              {/* Servive Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                >
                  <h3 className="text-white font-semibold text-xl mb-6">Services</h3>
                  <ul className="space-y-4">
                    {footerLinks.service.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors text-lg sm:text-xl">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors text-lg sm:text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
              
          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors text-lg sm:text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-emerald-500">{item.icon}</span>
                  <span className="text-gray-400 text-lg sm:text-xl">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Softconic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm sm:text-lg transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm sm:text-lg transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
