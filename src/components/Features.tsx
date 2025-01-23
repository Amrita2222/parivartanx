"use client";
import { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import featureData from "@/data/feature-Data.json";
import { 
    Code2,  Cloud,  Brain,  Lock,  Boxes, Wifi, ArrowRight, ChevronRight
  } from 'lucide-react';


 
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

function Features() {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    if (featureData && featureData.company) {
      setFeatures(featureData.company.features);
    }
  }, []);

  return (
    <div className="py-12 bg-black">
      <div className="text-center">
        {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          OUR COMPANY FEATURES
        </h2> */}
        <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-medium mb-6 text-teal-600 font-semibold tracking-wide">
        OUR COMPANY FEATURES
          </div>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          What We  <span className="text-emerald-500">Offer</span>
        </p>

      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature: Feature) => (
            <div key={feature.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col  bg-black rounded-[22px]  dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-6">
                <div className="text-center">
                  <div className="text-4xl">{feature.icon}
                    
                  </div>
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {feature.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
