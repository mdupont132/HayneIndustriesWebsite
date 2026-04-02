"use client";

import { motion } from "framer-motion";
import { Shield, BadgeCheck, Award, Globe, Star, FileCheck } from "lucide-react";

const certifications = [
  { icon: Shield, label: "DVOSB" },
  { icon: BadgeCheck, label: "8(a) Certified" },
  { icon: Award, label: "HUBZone Certified" },
  { icon: Globe, label: "Alaska Native Owned" },
  { icon: Star, label: "Licensed & Bonded" },
  { icon: FileCheck, label: "NAICS 561612" },
  { icon: FileCheck, label: "NAICS 561720" },
  { icon: Shield, label: "CAGE: 9VN48" },
  { icon: Globe, label: "Continental U.S." },
  { icon: Star, label: "Federal · State · Commercial" },
  { icon: Award, label: "15+ Years Experience" },
];

const allItems = [...certifications, ...certifications];

export default function CertificationTicker() {
  return (
    <section className="relative py-6 border-y border-gold/10 bg-surface/50 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: [0, -50 * certifications.length] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
      >
        {allItems.map((cert, i) => (
          <div key={`${cert.label}-${i}`} className="flex items-center gap-2 shrink-0">
            <cert.icon className="w-3.5 h-3.5 text-gold/40" />
            <span className="text-[10px] font-mono font-medium tracking-[0.15em] uppercase text-foreground-muted/30">{cert.label}</span>
            <div className="w-1 h-1 rotate-45 bg-gold/20 ml-4" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
