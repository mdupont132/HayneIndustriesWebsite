"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import { BadgeCheck, Award, Users, Building2, Shield, Sparkles, Lock, Globe } from "lucide-react";

const credentials = [
  {
    icon: Users,
    title: "Veteran-Owned (DVOSB)",
    description: "Disabled Veteran-Owned Small Business. 8(a) Certified, HUBZone Certified, Alaska Native Owned.",
  },
  {
    icon: BadgeCheck,
    title: "Government Certified",
    description: "Cleared for federal, state, and municipal projects.",
  },
  {
    icon: Award,
    title: "Licensed, Bonded & Insured",
    description: "Fully licensed, bonded, and insured with top manufacturer certifications.",
  },
  {
    icon: Building2,
    title: "Nationwide Reach",
    description: "Serving the continental United States — single-site to multi-campus.",
  },
  {
    icon: Shield,
    title: "Physical Security",
    description: "NAICS 561612 — surveillance, access control, alarms, and integrated systems.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Threat detection, vulnerability assessment, compliance, and disaster recovery.",
  },
  {
    icon: Sparkles,
    title: "Facility Services",
    description: "NAICS 561720 — cleaning, disinfection, floor care, post-construction cleanup, and specialty services.",
  },
  {
    icon: Globe,
    title: "15+ Years Experience",
    description: "Over fifteen years delivering security and facility services to federal, state, and commercial clients.",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-[0.02]">
        <Image src="/logo.png" alt="" width={400} height={400} className="logo-white" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <DiamondDivider className="mb-5" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">The Team</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            One Team. <span className="text-gold">Full Expertise.</span>
          </h2>
          <p className="mt-3 text-foreground-muted text-sm leading-relaxed">
            Security professionals, cybersecurity experts, and facility specialists
            working together to protect and maintain your environment.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {credentials.map((cred, i) => (
            <AnimatedSection key={cred.title} delay={i * 0.08}>
              <div className="panel p-5 h-full text-center group hover:border-gold/30 transition-colors duration-300">
                <div className="w-11 h-11 mx-auto border border-gold/20 flex items-center justify-center mb-3 group-hover:border-gold/40 transition-colors">
                  <cred.icon className="w-4.5 h-4.5 text-gold/50 group-hover:text-gold/80 transition-colors" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground mb-1 tracking-wide">{cred.title}</h3>
                <p className="text-xs leading-relaxed text-foreground-muted/50">{cred.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
