"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionLabels } from "@/data/society";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60);

      const hero = document.getElementById('home');
      setShowLogo(hero ? hero.getBoundingClientRect().bottom <= 0 : false);

      const sections = sectionLabels.map((label) =>
        document.getElementById(label.toLowerCase().replace(/\s+/g, "-"))
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 80) {
          setActiveIndex(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const id = sectionLabels[index].toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? "bg-surface-dark shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`transition-opacity duration-300 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="/zahoor_orchards/images/logo.jpg" alt="Home" className="w-8 h-8 rounded-full object-cover" />
        </button>

        <div className="ml-auto hidden md:flex items-center gap-1">
          {sectionLabels.slice(1).map((label, i) => {
            const idx = i + 1;
            const isActive = activeIndex === idx;
            return (
              <button
                key={label}
                onClick={() => scrollTo(idx)}
                className={`px-3 py-2 text-sm transition-colors border-b-2 ${
                  isActive
                    ? "border-gold text-gold font-semibold"
                    : "border-transparent text-text-secondary hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-dark border-t border-white/10 md:hidden"
        >
          {sectionLabels.slice(1).map((label, i) => {
            const idx = i + 1;
            return (
              <button
                key={label}
                onClick={() => scrollTo(idx)}
                className={`block w-full text-left px-6 py-3 text-sm ${
                  activeIndex === idx ? "text-gold bg-white/5" : "text-text-secondary"
                }`}
              >
                {label}
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
