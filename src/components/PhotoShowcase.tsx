"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const photos = [
  {
    src: "/hero-security.jpg",
    alt: "Security systems installation",
    label: "Physical Security",
  },
  {
    src: "/hero-cyber.jpg",
    alt: "Cybersecurity operations center",
    label: "Cybersecurity",
  },
  {
    src: "/hero-cleaning.jpg",
    alt: "Commercial cleaning services",
    label: "Facility Services",
  },
  {
    src: "/post-construction.jpg",
    alt: "Post-construction cleanup",
    label: "Post-Construction",
  },
];

export default function PhotoShowcase() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <AnimatedSection key={photo.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Gold accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-gold/80">
                    {photo.label}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
