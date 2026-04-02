"use client";

import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import { Building2, Home, Landmark } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Office buildings, retail spaces, medical facilities, and warehouses. Daily, weekly, or custom schedules tailored to your operations. We handle everything from restrooms to executive suites.",
    features: ["Day & Night Porters", "Floor Care & Maintenance", "Restroom Sanitation", "Window Cleaning"],
    color: "bg-navy",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Deep cleans, recurring service, and move-in/move-out packages. Our trained, background-checked teams treat your home with the care it deserves.",
    features: ["Deep Clean Packages", "Recurring Maintenance", "Move-In / Move-Out", "Post-Construction"],
    color: "bg-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-dark",
  },
  {
    icon: Landmark,
    title: "Government & Federal",
    description:
      "GSA Schedule ready. SAM.gov registered. Full compliance documentation, security clearances, and the rigorous standards federal facilities demand.",
    features: ["GSA Schedule Holder", "SAM.gov Registered", "Security Cleared Staff", "Full Audit Trails"],
    color: "bg-navy-dark",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-off-white">
      <div className="absolute inset-0 geo-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <DiamondDivider className="mb-5" />
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Our Services
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Comprehensive Cleaning,{" "}
            <span className="text-gold">One Trusted Partner</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border-color p-8 h-full flex flex-col group hover:shadow-xl hover:shadow-navy/5 hover:border-navy/20 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3
                  className="text-xl font-bold text-navy mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
