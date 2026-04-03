"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import USMap from "./USMap";
import {
  Camera,
  Fingerprint,
  Bell,
  MonitorCog,
  Wifi,
  HardDriveDownload,
  Sparkles,
  SprayCan,
  Building,
  Droplets,
  Wind,
  Paintbrush,
  ShieldAlert,
  ScanEye,
  ServerCrash,
  Lock,
} from "lucide-react";

const securityServices = [
  {
    icon: Camera,
    title: "Video Surveillance",
    description:
      "AI-powered cameras with 4K recording, night vision, and remote monitoring for complete situational awareness.",
    tags: ["4K", "AI Analytics"],
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    description:
      "Badge, biometric, and mobile credential systems with full audit trails and compliance reporting.",
    tags: ["Biometric", "Mobile Creds"],
  },
  {
    icon: Bell,
    title: "Alarm & Intrusion",
    description:
      "24/7 central station monitoring with perimeter protection and rapid response coordination.",
    tags: ["24/7", "Rapid Response"],
  },
  {
    icon: MonitorCog,
    title: "System Integration",
    description:
      "Unified SOC connecting all systems into one centralized management platform.",
    tags: ["Unified", "API Ready"],
  },
  {
    icon: Wifi,
    title: "Network Infrastructure",
    description:
      "Encrypted, redundant networks purpose-built for security device communication.",
    tags: ["Encrypted", "Redundant"],
  },
  {
    icon: HardDriveDownload,
    title: "Data & Compliance",
    description:
      "Tamper-proof storage with automated retention, regulatory compliance, and disaster recovery.",
    tags: ["Tamper-Proof", "DR Ready"],
  },
];

const cyberServices = [
  {
    icon: ShieldAlert,
    title: "Threat Detection & Response",
    description:
      "Continuous monitoring, intrusion detection, and rapid incident response to neutralize threats before they escalate.",
    tags: ["24/7 SOC", "SIEM"],
  },
  {
    icon: ScanEye,
    title: "Vulnerability Assessment",
    description:
      "Penetration testing, vulnerability scanning, and security audits to identify and remediate weaknesses across your infrastructure.",
    tags: ["Pen Testing", "Audits"],
  },
  {
    icon: ServerCrash,
    title: "Disaster Recovery & Continuity",
    description:
      "Business continuity planning, backup strategies, and disaster recovery solutions to keep operations running through any disruption.",
    tags: ["BCP", "DR Planning"],
  },
  {
    icon: Lock,
    title: "Compliance & Risk Management",
    description:
      "NIST, CMMC, and FISMA compliance consulting. Risk assessments, policy development, and security awareness training.",
    tags: ["NIST", "CMMC"],
  },
];

const facilityServices = [
  {
    icon: Sparkles,
    title: "Commercial & Residential Cleaning",
    description:
      "Comprehensive cleaning for offices, hospitals, fire stations, hotels, lobbies, conference rooms, kitchens, bathrooms, and high traffic areas.",
    tags: ["Commercial", "Residential"],
  },
  {
    icon: SprayCan,
    title: "Electrostatic Disinfection",
    description:
      "Atomizing electrostatic disinfection misting that minimizes the spread of germs and bacteria quickly and efficiently across any environment.",
    tags: ["Electrostatic", "Sanitization"],
  },
  {
    icon: Droplets,
    title: "Carpet & Floor Care",
    description:
      "Wet/dry carpet cleaning, shampooing, wet/dry mopping, floor waxing and polishing, and concrete floor maintenance.",
    tags: ["Deep Clean", "Floor Care"],
  },
  {
    icon: Wind,
    title: "Window & Surface Cleaning",
    description:
      "Interior and exterior window cleaning, dusting, surface polishing, and high-touch area sanitation.",
    tags: ["Windows", "Surfaces"],
  },
  {
    icon: Paintbrush,
    title: "Power Washing",
    description:
      "Commercial and residential power washing for building exteriors, walkways, parking structures, and common areas.",
    tags: ["Exterior", "Power Wash"],
  },
  {
    icon: Building,
    title: "Specialty & Event Cleaning",
    description:
      "Move-in/move-out cleaning, pre/post event cleanup, and specialty cleaning for unique situations and environments.",
    tags: ["Move-In/Out", "Events"],
  },
];

function ServiceCard({ service, compact = false }: { service: typeof securityServices[0]; compact?: boolean }) {
  return (
    <div className={`bg-surface border border-gold/20 ${compact ? "p-5" : "p-6"} h-full group hover:border-gold/40 hover:bg-surface-light/80 transition-all duration-300`}>
      <service.icon className="w-5 h-5 text-gold mb-4 group-hover:text-gold-light transition-colors" />
      <h3 className={`font-serif ${compact ? "text-sm" : "text-lg"} font-semibold text-foreground mb-2`}>
        {service.title}
      </h3>
      <p className="text-foreground-muted text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[9px] font-mono font-medium tracking-wider text-gold/70 border border-gold/20 bg-gold/[0.06]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="absolute right-0 top-1/4 pointer-events-none opacity-[0.02]">
        <Image src="/logo.png" alt="" width={500} height={500} className="logo-white" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <DiamondDivider className="mb-5" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
            Full-Spectrum Capabilities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Three Divisions.{" "}
            <span className="text-gold">One Partner.</span>
          </h2>
          <p className="mt-3 text-foreground-muted text-sm leading-relaxed">
            From surveillance systems and cybersecurity to spotless facilities —
            we protect and maintain your environment under one contract.
          </p>
        </AnimatedSection>

        {/* ── Physical Security Division ── */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold">
              Physical Security Division
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
            <span className="text-[10px] font-mono text-gold/40 tracking-widest hidden sm:block">NAICS 561612</span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-16">
          {securityServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <ServiceCard service={s} />
            </AnimatedSection>
          ))}
        </div>

        {/* ── Cybersecurity Division ── */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold">
              Cybersecurity Division
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-16">
          {cyberServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <ServiceCard service={s} compact />
            </AnimatedSection>
          ))}
        </div>

        {/* ── Facility Services Division ── */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold">
              Facility Services Division
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
            <span className="text-[10px] font-mono text-gold/40 tracking-widest hidden sm:block">NAICS 561720</span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {facilityServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <ServiceCard service={s} />
            </AnimatedSection>
          ))}
        </div>

        {/* Serving the Continental US */}
        <AnimatedSection className="mt-16">
          <div className="panel p-6 lg:p-8 text-center">
            <DiamondDivider className="mb-4" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Serving the <span className="text-gold">Continental United States</span>
            </h3>
            <p className="text-sm text-foreground-muted/50 mb-6 max-w-lg mx-auto">
              Nationwide reach with local expertise. Hover over any state to explore our coverage.
            </p>
            <USMap />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
