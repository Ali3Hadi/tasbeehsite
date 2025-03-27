"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <header className="py-4 border-b border-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="logo text-xl font-semibold text-primary">
          The Guided Light
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#tasbeeh" className="hover:text-primary">
                Tasbeeh
              </Link>
            </li>
            <li>
              <Link href="#benefits" className="hover:text-primary">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#resources" className="hover:text-primary">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#developer" className="hover:text-primary">
                Developer
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="auth-buttons hidden md:flex space-x-2">
            <Button variant="outline" size="sm" className="auth-button">
              Login
            </Button>
            <Button variant="outline" size="sm" className="auth-button">
              Register
            </Button>
          </div>

          <button
            id="lang-switch"
            data-lang={lang === "en" ? "ar" : "en"}
            onClick={toggleLanguage}
            aria-label={`Switch to ${lang === "en" ? "Arabic" : "English"}`}
            className="text-foreground hover:text-primary transition"
          >
            {lang === "en" ? "عربي" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
}
