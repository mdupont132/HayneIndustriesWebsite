"use client";

import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import {
  HardHat,
  Trash2,
  SprayCan,
  Sparkles,
  CheckCircle2,
  Warehouse,
  Building2,
  Home,
  ShieldCheck,
  Wind,
} from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Rough Clean",
    icon: Trash2,
    description:
      "Removal of all construction debris, bulk waste sorting and disposal. We clear the space of leftover materials, packaging, and hazardous waste so the next phase can begin on a clean slate.",
    tasks: [
      "Debris removal & hauling",
      "Bulk waste sorting & disposal",
      "Hazardous material handling",
      "Dumpster coordination",
    ],
  },
  {
    number: "02",
    title: "Deep Clean",
    icon: SprayCan,
    description:
      "Comprehensive surface cleaning of all areas — sweeping, vacuuming, wall cleaning, and detailed attention to windows, fixtures, and floors throughout the entire facility.",
    tasks: [
      "Wall & ceiling dusting",
      "Window & glass cleaning",
      "Floor scrubbing & mopping",
      "Fixture & hardware polishing",
    ],
  },
  {
    number: "03",
    title: "Final Sanitization",
    icon: Sparkles,
    description:
      "Sanitization of all surfaces, particularly in bathrooms and kitchens. Electrostatic disinfection misting to eliminate germs and bacteria quickly and efficiently.",
    tasks: [
      "Electrostatic disinfection",
      "Bathroom & kitchen sanitization",
      "High-touch surface treatment",
      "Air quality verification",
    ],
  },
  {
    number: "04",
    title: "Quality Inspection",
    icon: ShieldCheck,
    description:
      "Rigorous quality checks throughout to ensure the space is completely clean, sanitized, and ready for occupancy — we inspect before our client does.",
    tasks: [
      "Walk-through inspection",
      "Punch-list completion",
      "Client sign-off",
      "Photo documentation",
    ],
  },
];

const facilityTypes = [
  { icon: Building2, label: "Office Buildings" },
  { icon: Home, label: "Residential" },
  { icon: Warehouse, label: "Hospitals" },
  { icon: HardHat, label: "Fire Stations" },
  { icon: Building2, label: "City Buildings" },
  { icon: Wind, label: "Hotels & Lobbies" },
];

export default function PostConstructionCleanup() {
  return (
    <section id="post-construction" className="relative py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,1) 40px, rgba(201,168,76,1) 41px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <DiamondDivider className="mb-5" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
            Specialty Service
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Post-Construction{" "}
            <span className="text-gold">Cleanup</span>
          </h2>
          <p className="mt-4 text-foreground-muted text-sm leading-relaxed max-w-2xl mx-auto">
            From rough clean to final inspection, we transform construction sites into
            move-in ready spaces. Our proven four-phase process ensures every surface
            is pristine and every detail is addressed — no matter the size or complexity.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.title} delay={i * 0.1}>
              <div className="bg-surface border border-gold/15 p-6 h-full group hover:border-gold/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-3 right-4 font-serif text-5xl font-bold text-gold/[0.06] select-none">
                  {phase.number}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 border border-gold/25 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                      <phase.icon className="w-4.5 h-4.5 text-gold/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-gold/40 tracking-widest uppercase block">
                        Phase {phase.number}
                      </span>
                      <h3 className="font-serif text-base font-semibold text-foreground leading-tight">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-foreground-muted/60 text-sm leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-2">
                    {phase.tasks.map((task) => (
                      <div key={task} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-gold/40 shrink-0" />
                        <span className="text-xs text-foreground-muted/50">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="panel p-6 lg:p-8">
            <div className="text-center mb-6">
              <h3 className="font-serif text-lg font-semibold tracking-tight">
                We Clean <span className="text-gold">Any Facility Type</span>
              </h3>
              <p className="text-xs text-foreground-muted/50 mt-1">
                Post-construction cleanup for commercial, residential, federal, and municipal buildings of any scale
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {facilityTypes.map((ft) => (
                <div
                  key={ft.label}
                  className="flex flex-col items-center gap-2 py-3 border border-gold/10 bg-surface-light/30 hover:border-gold/30 transition-colors group"
                >
                  <ft.icon className="w-5 h-5 text-gold/40 group-hover:text-gold/70 transition-colors" />
                  <span className="text-[10px] font-medium tracking-wider uppercase text-foreground-muted/40 group-hover:text-foreground-muted/70 transition-colors">
                    {ft.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-gold/20 bg-gold/[0.04]">
            <HardHat className="w-4 h-4 text-gold/60" />
            <span className="text-xs font-medium tracking-wide text-foreground-muted/60">
              No job too big — we tackle the <strong className="text-gold">largest and most complex</strong> projects
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
