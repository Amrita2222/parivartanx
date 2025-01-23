"use client"; // Ensure this runs only on the client side

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Initial Consultation",
    description: "We discuss your needs and goals to create a tailored solution.",
  },
  {
    title: "Planning & Design",
    description: "Creating detailed plans and designs for your project.",
  },
  {
    title: "Development",
    description: "Building your solution with the latest technologies.",
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing to ensure quality and reliability.",
  },
  {
    title: "Deployment",
    description: "Launching your project to the production environment.",
  },
];

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-black dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-medium mb-6 text-teal-600 font-semibold tracking-wide">
            JOURNEY
          </div>
          
          <h2 className="mt-1 mb-3 text-3xl leading-5 font-extrabold tracking-tight text-white sm:text-4xl">
          Your path to <span className="text-emerald-500">success</span>
         </h2>
         
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } mb-8`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "pl-8"
                }`}
              >
                <div className="p-6 bg-black dark:bg-gray-800 border border-gray-800 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
