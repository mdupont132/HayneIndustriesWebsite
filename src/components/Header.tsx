"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#differentiators" },
  { label: "Our Work", href: "#past-performance" },
  { label: "Mission", href: "#mission" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-[#FAFAF8]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo — original on white, inverted when scrolled to dark sections */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Hayne Industries"
              width={52}
              height={52}
              className={`transition-all duration-300 group-hover:opacity-100 ${
                scrolled ? "logo-white opacity-85" : "opacity-90"
              }`}
            />
            <div className="hidden sm:block">
              <span className={`text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-[#111]"
              }`}>
                Hayne
              </span>
              <span className={`text-sm font-light tracking-[0.2em] uppercase ml-1.5 transition-colors duration-300 ${
                scrolled ? "text-foreground-muted" : "text-[#666]"
              }`}>
                Industries
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:text-gold-dark transition-colors relative group ${
                  scrolled ? "text-foreground-muted" : "text-[#666]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-px bg-gold-dark transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#connect"
              className={`px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase border transition-all duration-300 ${
                scrolled
                  ? "text-gold border-gold/40 hover:bg-gold/10 hover:border-gold/60"
                  : "text-gold-dark border-gold-dark/40 hover:bg-gold-dark/10 hover:border-gold-dark/60"
              }`}
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 hover:text-gold transition-colors ${
              scrolled ? "text-foreground-muted" : "text-[#666]"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-t border-gold/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-xs font-medium tracking-[0.15em] uppercase text-foreground-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#connect"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-xs font-medium tracking-[0.15em] uppercase text-gold border border-gold/30 text-center mt-3 hover:bg-gold/10 transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
