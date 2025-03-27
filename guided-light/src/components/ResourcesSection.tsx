"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Resource {
  id: number;
  title: string;
  url: string;
}

export default function ResourcesSection() {
  const resources: Resource[] = [
    { id: 1, title: "Sunnah.com - Hadith Encyclopedia", url: "https://sunnah.com/" },
    { id: 2, title: "Quranic Audio Resources", url: "https://quranicaudio.com/" },
    { id: 3, title: "IslamicFinder - Prayer Times, Qibla, and More", url: "https://www.islamicfinder.org/" },
    { id: 4, title: "Mufti Menk - Lectures and Articles", url: "https://www.muftimenk.com/" },
    { id: 5, title: "Nouman Ali Khan - Quranic Teachings", url: "https://www.youtube.com/user/NAKcollection" },
  ];

  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-border">
          Further Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: resource.id * 0.1 }}
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 hover:bg-accent/10 transition-colors h-full flex items-center justify-between"
                  >
                    <span className="text-lg font-medium">{resource.title}</span>
                    <ExternalLink className="w-5 h-5 ml-2 text-primary opacity-70" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
