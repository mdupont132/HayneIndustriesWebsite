"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import {
  MapPin,
  Calendar,
  ChevronRight,
  Building2,
  Landmark,
  Home,
  GraduationCap,
  HardHat,
  Utensils,
} from "lucide-react";

const projects = [
  {
    icon: Landmark,
    title: "U.S. Army Post-Construction Cleanup",
    location: "Fort Detrick, MD",
    year: "2024",
    client: "Doyon / U.S. Army",
    category: "Federal",
    image: "/card-post-construction.webp",
    description:
      "Comprehensive post-construction cleanup for a U.S. Army installation. Entailed removal of debris and proper waste sorting and disposal, cleaning of all surfaces including sweeping, vacuuming, and wall cleaning, followed by detailed cleaning of windows, fixtures, and floors. Final phase focused on sanitization of surfaces, particularly in bathrooms and kitchens, along with quality checks throughout to ensure the space was completely clean and ready for occupancy.",
    tags: ["Post-Construction", "Federal", "Sanitization"],
  },
  {
    icon: Utensils,
    title: "Bank-to-Restaurant Conversion",
    location: "Baltimore, MD",
    year: "2024",
    client: "Private Client",
    category: "Commercial",
    image: "/card-restaurant.webp",
    description:
      "Full interior conversion of a former bank building into a dining establishment. Obtained permits from Baltimore City, then gutted the interior while preserving the structure. Reconfigured the space by removing teller counters and vault, creating a dining room area. Updated electrical systems, added restaurant-specific features and restrooms, and finished with appropriate lighting, decor, and furniture to transform the formal bank atmosphere into a welcoming dining establishment.",
    tags: ["Renovation", "Commercial"],
  },
  {
    icon: Home,
    title: "Residential Reconstruction Cleanup",
    location: "Brooklyn, MD",
    year: "2023",
    client: "Private Client",
    category: "Residential",
    image: "/card-residential.webp",
    description:
      "Comprehensive post-reconstruction cleanup following a full residential rebuild. After construction was completed, our team performed detailed debris removal, dust and particulate cleaning of all surfaces, deep cleaning of newly installed fixtures, windows, and flooring, and final polish of every room to ensure a pristine, move-in ready condition for occupants.",
    tags: ["Residential", "Post-Construction", "Final Polish"],
  },
  {
    icon: Landmark,
    title: "U.S. Army — Recurring Janitorial",
    location: "Fort Detrick, MD",
    year: "2022 – Present",
    client: "U.S. Army",
    category: "Federal",
    image: "/card-army.svg",
    description:
      "Ongoing janitorial services contract for a U.S. Army installation. Scope includes cleaning offices, kitchens, and bathrooms three times per week. Activities include vacuuming carpets, mopping floors, dusting, waxing the floors, and sanitizing the area with electrostatic sprayer for a deep clean.",
    tags: ["Federal", "Recurring", "Janitorial"],
  },
  {
    icon: GraduationCap,
    title: "Allegheny College — Annual Deep Clean",
    location: "Cumberland, MD",
    year: "2022 – Present",
    client: "Allegheny College",
    category: "Education",
    image: "/card-allegany.png",
    description:
      "5-year contract for annual cleaning of student apartments, clubhouse, and shared areas over the course of several weeks. Activities include vacuuming and shampooing carpets, mopping and waxing concrete floors, dusting, cleaning windows, power washing, and sanitizing the area with electrostatic sprayer for a deep clean.",
    tags: ["Education", "Deep Clean", "Multi-Year"],
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleaning — Hospitals & Municipal",
    location: "Frederick, MD",
    year: "2021 – Present",
    client: "Warner Construction",
    category: "Commercial",
    image: "/card-hospital.jpg",
    description:
      "Ongoing post-construction cleaning across hospitals, fire stations, and city buildings. Scope includes offices, kitchens, and conference rooms. Activities include vacuuming and shampooing carpets, mopping floors, dusting, waxing floors, cleaning windows, power washing, and sanitizing the area with electrostatic sprayer for a deep clean.",
    tags: ["Post-Construction", "Healthcare", "Municipal"],
  },
];

const categories = ["All", "Federal", "Commercial", "Residential", "Education"];

export default function PastPerformance() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="past-performance" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <DiamondDivider className="mb-5" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
            Select Past Performance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Proven Results.{" "}
            <span className="text-gold">Trusted Delivery.</span>
          </h2>
          <p className="mt-4 text-foreground-muted text-sm leading-relaxed max-w-2xl mx-auto">
            A sample of our work across federal, commercial, residential, and educational
            environments. With over 15 years of experience and dozens of successful
            engagements, these highlights represent the breadth of what we deliver.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 text-[10px] font-mono font-medium tracking-[0.15em] uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-gold/15 text-foreground-muted/40 hover:border-gold/30 hover:text-foreground-muted/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div
                  className="relative border border-gold/15 p-6 h-full group hover:border-gold/35 transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-surface/95 group-hover:bg-surface/90 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors bg-surface/60 backdrop-blur-sm">
                        <project.icon className="w-4.5 h-4.5 text-gold/50 group-hover:text-gold/80 transition-colors" />
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-gold/30 transition-transform duration-300 shrink-0 mt-1 ${
                          expandedIndex === i ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-[10px] text-foreground-muted/50">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[8px] font-mono font-medium tracking-wider text-gold/60 border border-gold/15 bg-gold/[0.06] backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <AnimatePresence>
                      {expandedIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-gold/10">
                            <p className="text-sm text-foreground-muted/60 leading-relaxed">{project.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* "And more" note */}
        <AnimatedSection className="mt-8 text-center">
          <p className="text-sm text-foreground-muted/40 italic">
            These are select highlights — <a href="#connect" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">contact us</a> for a full portfolio and references tailored to your requirements.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
