"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Benefit {
  id: number;
  text: string;
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    { id: 1, text: "Brings you closer to Allah." },
    { id: 2, text: "Helps in attaining inner peace and tranquility." },
    { id: 3, text: "Increases your rewards and blessings." },
    { id: 4, text: "Provides a sense of mindfulness and spiritual awareness." },
    { id: 5, text: "Acts as a shield against negative thoughts and distractions." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="benefits" className="py-16 bg-gradient-to-br from-background to-accent/20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-border">
          Benefits of Tasbeeh
        </h2>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => (
            <motion.li
              key={benefit.id}
              className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg">{benefit.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
