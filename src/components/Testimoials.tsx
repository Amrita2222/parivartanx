import React from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with this IT company has been a game-changer for us. Their innovative solutions have helped us streamline operations and improve our service delivery to clients.",
      name: "Johnathan Brooks",
      designation: "IT Director at TechSolutions",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The team at this company provided a seamless transition to their platform, which has boosted our development team's productivity and helped us stay ahead in a competitive market.",
      name: "Samantha Lee",
      designation: "Systems Architect at ByteTech",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The IT solutions offered by this company have dramatically improved our infrastructure. Their support is top-notch, and they’ve consistently gone above and beyond to meet our needs.",
      name: "David Kim",
      designation: "Lead Developer at CloudFusion",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The platform’s flexibility allowed us to scale seamlessly. We’ve seen a significant reduction in downtime and faster deployment of new features. Their service is unmatched.",
      name: "Lucas Mendez",
      designation: "Infrastructure Manager at NetCore Solutions",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our experience with this company has been nothing short of exceptional. They provide tailored IT solutions that perfectly align with our business needs, helping us thrive in a competitive landscape.",
      name: "Olivia Harris",
      designation: "VP of IT Operations at InnoTech",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
     
       <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm font-medium mb-6 text-teal-600 font-semibold tracking-wide">
            TESTIMONIAL
          </div>
          
          <h2 className="mt-1 mb-3 text-3xl leading-5 font-extrabold tracking-tight text-white sm:text-4xl">
          What Our <span className="text-emerald-500">Clients Say About</span> Us
         </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default Testimonials;
