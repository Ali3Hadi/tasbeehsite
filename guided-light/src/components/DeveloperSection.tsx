"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Changed from BrandTelegram to MessageCircle
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function DeveloperSection() {
  return (
    <section id="developer" className="py-16 bg-accent/20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-border">
          About the Developer
        </h2>

        <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="w-full md:w-1/3 bg-gradient-to-br from-primary/10 to-accent/30 p-6 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-full overflow-hidden border-4 border-white/30 shadow-lg h-40 w-40 flex-shrink-0"
                >
                  <div className="w-full h-full bg-gradient-to-tr from-primary/40 to-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    AHF
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-2/3 p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Ali Hadi Fadel</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      I am an 18-year-old (born in 2006) student currently in the sixth scientific year of high school. I have a passion for programming and developed this website in 2024.
                    </p>
                    <p>
                      Programming is more than just a hobby for me; it's a way to create, innovate, and contribute to the digital world. I'm constantly learning and exploring new technologies to expand my skills and knowledge.
                    </p>
                    <p className="flex items-center text-foreground">
                      You can connect with me on Telegram:
                      <a
                        href="https://t.me/h2_on"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5 mr-1" /> {/* Updated icon */}
                        <span>h2_on</span>
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
