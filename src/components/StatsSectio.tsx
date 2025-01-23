'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Users, Briefcase, Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
    number: 1,
    suffix: 'Years',
    label: 'Working With Passion',
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    number: 100,
    suffix: 'Customer',
    label: 'Satisfied Customer',
  },
  {
    icon: <Star className="w-8 h-8 text-emerald-500" />,
    number: 50,
    suffix: 'Project',
    label: 'We Have Completed',
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-500" />,
    number: 15,
    suffix: 'Microservices Deployed',
    label: '',
  },
];

const clients = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
  }
];

function CountUpAnimation({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isVisible]);

  return <span ref={elementRef}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mt-1 mb-3 text-3xl leading-5 font-extrabold tracking-tight text-white sm:text-4xl">
          Our Development <span className="text-emerald-500">Achievements</span> 
         </h2>
         <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
         Delivering excellence through innovation and dedication
          </p>
          
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-500/10">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                <CountUpAnimation target={stat.number} />
                <span className="text-emerald-500 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-12"
          >
            We Take Care Of More Than 1.5k Trusted Allies
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}