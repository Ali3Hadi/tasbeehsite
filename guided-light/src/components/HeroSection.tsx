"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 bg-gradient-to-br from-accent/30 to-secondary">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Find Peace in Remembrance
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
          Explore the beauty of Tasbeeh and its profound impact on your life.
        </p>
        <Link href="#tasbeeh">
          <Button className="primary-button">Start Tasbeeh</Button>
        </Link>
      </div>
    </section>
  );
}
