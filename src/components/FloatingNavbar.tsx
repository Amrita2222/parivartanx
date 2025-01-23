'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateNavVisibility = () => {
      if (scrollY.get() > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const unsubscribe = scrollY.on('change', updateNavVisibility);
    return () => unsubscribe();
  }, [scrollY]);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="bg-black/20 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
              <span className="text-white font-bold text-xl">Softconic</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <div className="p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-gray-300 hover:text-emerald-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}