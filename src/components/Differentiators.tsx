"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import {
  Clock,
  Expand,
  Ear,
  SearchCheck,
  Layers,
  Zap,
} from "lucide-react";

const differentiators = [
  {
    icon: Expand,
    title: "No Job Too Big",
    stat: "Any",
    statLabel: "SCALE",
    description:
      "From single offices to massive multi-building campuses — we have the workforce, equipment, and experience to handle projects of any size and complexity.",
  },
  {
    icon: Zap,
    title: "15+ Years of Experience",
    stat: "15+",
    statLabel: "YEARS",
    description:
      "Over fifteen years delivering security and facility services to federal, state, commercial, and residential clients across the country.",
  },
  {
    icon: Layers,
    title: "Flexible Scheduling",
    stat: "24/7",
    statLabel: "AVAILABLE",
    description:
      "We are flexible with scheduling and adaptable to all environments — day shifts, night shifts, weekends, and emergencies.",
  },
  {
    icon: Ear,
    title: "Client-First Approach",
    stat: "100%",
    statLabel: "CUSTOM",
    description:
      "We actively listen to our clients and deliver effective solutions. Every plan is tailored to your facility's unique requirements.",
  },
  {
    icon: SearchCheck,
    title: "We Inspect First",
    stat: "QA",
    statLabel: "BUILT-IN",
    description:
      "We believe in inspecting before our client does. Every project includes built-in quality assurance checkpoints and documentation.",
  },
  {
    icon: Clock,
    title: "Licensed, Bonded & Insured",
    stat: "Full",
    statLabel: "COVERAGE",
    description:
      "Fully licensed, bonded, and insured. Our clients have complete peace of mind knowing they are protected on every engagement.",
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,168,76,1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <DiamondDivider className="mb-5" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
            Why Hayne Industries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            What Sets Us{" "}
            <span className="text-gold">Apart</span>
          </h2>
          <p className="mt-4 text-foreground-muted text-sm leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just meet the standard — we set it. Here&apos;s why
            procurement officers and facility managers choose Hayne Industries.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative bg-surface border border-gold/15 p-6 h-full group hover:border-gold/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-2 -top-2 font-serif text-6xl font-bold text-gold/[0.04] select-none leading-none">
                  {d.stat}
                </div>
                <div className="relative">
                  <div className="w-11 h-11 border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                    <d.icon className="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" />
                  </div>
                  <div className="inline-flex items-baseline gap-1.5 mb-3">
                    <span className="font-serif text-2xl font-bold text-gold">{d.stat}</span>
                    <span className="text-[9px] font-mono tracking-widest text-gold/40 uppercase">{d.statLabel}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-foreground-muted/55 leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
