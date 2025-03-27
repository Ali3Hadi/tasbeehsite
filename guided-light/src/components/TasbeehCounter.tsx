"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type TasbeehType =
  | "subhanallah"
  | "alhamdulillah"
  | "allahuakbar"
  | "la_ilaha_illallah"
  | "astaghfirullah";

interface TasbeehOption {
  id: TasbeehType;
  english: string;
  arabic?: string;
}

export default function TasbeehCounter() {
  const [count, setCount] = useState(0);
  const [selectedTasbeeh, setSelectedTasbeeh] = useState<TasbeehType | null>(null);
  const [savedMessage, setSavedMessage] = useState(false);

  const tasbeehOptions: TasbeehOption[] = [
    { id: "subhanallah", english: "SubhanAllah" },
    { id: "alhamdulillah", english: "Alhamdulillah" },
    { id: "allahuakbar", english: "Allahu Akbar" },
    { id: "la_ilaha_illallah", english: "La ilaha illallah" },
    { id: "astaghfirullah", english: "Astaghfirullah" },
  ];

  const increment = () => {
    if (selectedTasbeeh) {
      setCount(prev => prev + 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const saveCount = () => {
    if (selectedTasbeeh) {
      // In a real app, this would save to localStorage or a database
      setSavedMessage(true);
      setTimeout(() => {
        setSavedMessage(false);
      }, 2000);
    }
  };

  return (
    <section id="tasbeeh" className="py-16 bg-accent/20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-border">
          Tasbeeh Counter
        </h2>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="Tasbeeh Options">
              {tasbeehOptions.map((tasbeeh) => (
                <Button
                  key={tasbeeh.id}
                  variant={selectedTasbeeh === tasbeeh.id ? "default" : "outline"}
                  onClick={() => setSelectedTasbeeh(tasbeeh.id)}
                  className="min-w-32 transition-all"
                  data-tasbeeh={tasbeeh.id}
                >
                  <span className="text-sm">{tasbeeh.english}</span>
                </Button>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="counter-display text-center">
                <h3 className="text-xl font-medium mb-3">
                  {selectedTasbeeh ?
                    tasbeehOptions.find(t => t.id === selectedTasbeeh)?.english :
                    "Select a Tasbeeh"}: <motion.span
                      key={count}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-bold text-2xl ml-2"
                    >
                      {count}
                    </motion.span>
                </h3>

                <div className="flex justify-center gap-4 mb-6">
                  <Button
                    id="increment"
                    onClick={increment}
                    variant="default"
                    size="lg"
                    className="min-w-32 bg-primary"
                    disabled={!selectedTasbeeh}
                  >
                    Increment
                  </Button>
                  <Button
                    id="reset"
                    onClick={reset}
                    variant="outline"
                    size="lg"
                    className="min-w-32"
                    disabled={!selectedTasbeeh || count === 0}
                  >
                    Reset
                  </Button>
                </div>

                <div className="relative">
                  <Button
                    id="save-count"
                    onClick={saveCount}
                    variant="secondary"
                    size="sm"
                    className="px-8"
                    disabled={!selectedTasbeeh || count === 0}
                  >
                    Save
                  </Button>
                  {savedMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-primary mt-2 absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    >
                      Count Saved!
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
