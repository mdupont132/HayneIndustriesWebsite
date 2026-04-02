"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    });
    return controls.stop;
  }, [count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toString() + suffix;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={800}
          height={800}
          className="opacity-[0.04] select-none"
          aria-hidden="true"
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/logo.png"
            alt="Hayne Industries"
            width={200}
            height={200}
            className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-gold/30 bg-gold/5 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold-dark">
            Security &middot; Cleaning &middot; Cybersecurity
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#111]"
        >
          Secure It. Clean It.{" "}
          <span className="text-gold-dark">Protect It.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="my-6 max-w-sm mx-auto"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 max-w-32 h-px bg-gradient-to-r from-transparent to-gold-dark/30" />
            <div className="w-2 h-2 rotate-45 border border-gold-dark/40 bg-gold-dark/10" />
            <div className="flex-1 max-w-32 h-px bg-gradient-to-l from-transparent to-gold-dark/30" />
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg lg:text-xl text-[#555] leading-relaxed max-w-2xl mx-auto"
        >
          Hayne Industries delivers <strong className="text-[#333]">physical security systems</strong>,{" "}
          <strong className="text-[#333]">cybersecurity solutions</strong>, and{" "}
          <strong className="text-[#333]">commercial &amp; residential cleaning</strong> under one contract —
          for federal, state, and commercial environments nationwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#connect"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-dark hover:bg-gold text-white font-medium text-sm tracking-wide transition-all duration-200 group"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#past-performance"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#222]/20 text-[#333] hover:text-gold-dark hover:border-gold-dark/40 font-medium text-sm tracking-wide transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 flex justify-center"
        >
          <div className="text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-dark">
              <AnimatedCounter target={15} suffix="+" />
            </div>
            <div className="text-[10px] font-mono tracking-wider text-[#999] uppercase mt-1">
              Years Experience
            </div>
          </div>
        </motion.div>

        {/* Certification strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#888]"
        >
          {["DVOSB", "8(a) Certified", "HUBZone Certified", "Alaska Native Owned", "Licensed & Bonded"].map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-dark/60" />
              {cert}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#ccc] mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
