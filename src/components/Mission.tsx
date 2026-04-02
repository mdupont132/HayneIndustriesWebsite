"use client";

import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import { Shield, Sparkles, Handshake, ShieldCheck, Target, Lock } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Physical Security",
    description:
      "Surveillance, access control, alarm systems, and integrated SOC platforms — designed for your threat profile and compliance mandates.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Threat detection, vulnerability assessments, compliance consulting, and disaster recovery — protecting your digital infrastructure around the clock.",
  },
  {
    icon: Sparkles,
    title: "Facility Excellence",
    description:
      "Commercial and residential cleaning, electrostatic disinfection, floor care, post-construction cleanup, and specialty services at any scale.",
  },
  {
    icon: Handshake,
    title: "One Contract, One Partner",
    description:
      "All divisions under a single Disabled Veteran-Owned Small Business. Simplified procurement, unified accountability, and a team that picks up the phone.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded & Insured",
    description:
      "Fully licensed, bonded, and insured with top manufacturer certifications. Our clients have complete peace of mind on every engagement.",
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description:
      "We inspect before our client does. Built-in QA checkpoints, photo documentation, and client sign-off on every project.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatedSection>
            <DiamondDivider className="mb-5 max-w-xs" />
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
              The Mission
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Secure It. Clean It.{" "}
              <span className="text-gold">Protect It.</span>
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              Hayne Industries is a Disabled Veteran-Owned Small Business (DVOSB)
              with over 15 years of experience delivering dual capabilities —
              security infrastructure and comprehensive facility services. From
              cameras and access control to cybersecurity and commercial cleaning,
              we handle both sides so you deal with one partner, one contract,
              one standard.
            </p>
            <p className="mt-3 text-foreground-muted/70 leading-relaxed text-sm">
              We are dedicated to excellence when delivering customized services.
              Adhering to superior standards, we adapt to your business&apos;s unique needs
              and use the latest technology to ensure communication is streamlined.
              Our team applies many years of experience to every job, using a
              step-by-step process refined to deliver unmatched results.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center panel py-4">
                  <div className="font-serif text-xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono tracking-wider mt-0.5 text-charcoal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="panel p-5 group hover:border-gold/30 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 shrink-0 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                      <pillar.icon className="w-4 h-4 text-gold/50 group-hover:text-gold/80 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground-muted/60">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
