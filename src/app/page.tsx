"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertificationTicker from "@/components/CertificationTicker";

import WhatWeDo from "@/components/WhatWeDo";
import PostConstructionCleanup from "@/components/PostConstructionCleanup";
import Differentiators from "@/components/Differentiators";
import PastPerformance from "@/components/PastPerformance";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CertificationTicker />

        <WhatWeDo />
        <PostConstructionCleanup />
        <Differentiators />
        <PastPerformance />
        <Mission />
        <Team />
        <Connect />
      </main>
      <Footer />
      <ParticleField />
    </>
  );
}
