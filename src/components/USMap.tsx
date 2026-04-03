"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const states: Record<string, { name: string; d: string }> = {
  WA: { name: "Washington", d: "M125,36 L173,43 L168,80 L124,73 Z" },
  OR: { name: "Oregon", d: "M100,73 L168,80 L163,120 L96,113 Z" },
  CA: { name: "California", d: "M96,113 L130,120 L140,220 L85,210 L75,160 Z" },
  NV: { name: "Nevada", d: "M130,120 L163,120 L170,200 L140,220 Z" },
  ID: { name: "Idaho", d: "M168,80 L200,60 L210,130 L163,120 Z" },
  MT: { name: "Montana", d: "M173,43 L280,38 L275,80 L200,60 Z" },
  WY: { name: "Wyoming", d: "M200,80 L275,80 L275,130 L210,130 Z" },
  UT: { name: "Utah", d: "M163,120 L210,130 L210,190 L170,200 Z" },
  CO: { name: "Colorado", d: "M210,130 L310,135 L310,190 L210,190 Z" },
  AZ: { name: "Arizona", d: "M140,220 L170,200 L210,190 L210,265 L155,270 Z" },
  NM: { name: "New Mexico", d: "M210,190 L310,190 L310,270 L210,265 Z" },
  ND: { name: "North Dakota", d: "M280,38 L370,38 L370,75 L275,80 Z" },
  SD: { name: "South Dakota", d: "M275,80 L370,75 L370,120 L275,130 Z" },
  NE: { name: "Nebraska", d: "M275,120 L370,120 L375,160 L310,155 Z" },
  KS: { name: "Kansas", d: "M310,155 L410,160 L410,200 L310,190 Z" },
  OK: { name: "Oklahoma", d: "M310,190 L410,200 L430,210 L430,240 L310,240 Z" },
  TX: { name: "Texas", d: "M310,240 L430,240 L440,290 L400,340 L330,340 L290,290 Z" },
  MN: { name: "Minnesota", d: "M370,38 L430,30 L440,100 L370,100 Z" },
  IA: { name: "Iowa", d: "M370,100 L440,100 L440,145 L375,145 Z" },
  MO: { name: "Missouri", d: "M410,145 L475,150 L475,210 L420,210 Z" },
  AR: { name: "Arkansas", d: "M420,210 L475,210 L475,255 L430,250 Z" },
  LA: { name: "Louisiana", d: "M430,255 L475,255 L490,300 L445,310 Z" },
  WI: { name: "Wisconsin", d: "M430,30 L480,35 L480,95 L440,100 Z" },
  IL: { name: "Illinois", d: "M440,100 L480,95 L485,180 L450,185 Z" },
  MS: { name: "Mississippi", d: "M475,215 L505,215 L505,280 L475,280 Z" },
  AL: { name: "Alabama", d: "M505,215 L540,210 L545,280 L505,280 Z" },
  TN: { name: "Tennessee", d: "M455,190 L570,185 L570,210 L475,215 Z" },
  KY: { name: "Kentucky", d: "M475,165 L570,160 L570,185 L455,190 Z" },
  IN: { name: "Indiana", d: "M485,120 L515,118 L520,170 L485,175 Z" },
  OH: { name: "Ohio", d: "M515,118 L560,110 L565,165 L520,170 Z" },
  MI: { name: "Michigan", d: "M480,35 L530,40 L535,100 L480,95 Z" },
  GA: { name: "Georgia", d: "M540,210 L580,205 L585,275 L545,280 Z" },
  FL: { name: "Florida", d: "M545,280 L590,275 L615,340 L570,340 L545,310 Z" },
  SC: { name: "South Carolina", d: "M570,195 L610,185 L600,220 L575,215 Z" },
  NC: { name: "North Carolina", d: "M550,180 L630,165 L625,190 L570,195 Z" },
  VA: { name: "Virginia", d: "M550,155 L620,140 L630,165 L560,175 Z" },
  WV: { name: "West Virginia", d: "M555,130 L585,125 L575,160 L555,155 Z" },
  PA: { name: "Pennsylvania", d: "M545,95 L620,85 L618,120 L548,125 Z" },
  NY: { name: "New York", d: "M560,50 L630,40 L635,85 L570,90 Z" },
  ME: { name: "Maine", d: "M650,15 L680,10 L680,55 L650,58 Z" },
  VT: { name: "Vermont", d: "M635,30 L650,25 L650,60 L635,60 Z" },
  NH: { name: "New Hampshire", d: "M650,25 L665,20 L665,58 L650,58 Z" },
  MA: { name: "Massachusetts", d: "M635,60 L670,55 L672,70 L635,72 Z" },
  CT: { name: "Connecticut", d: "M635,72 L660,70 L660,82 L635,84 Z" },
  RI: { name: "Rhode Island", d: "M660,68 L672,67 L672,78 L660,78 Z" },
  NJ: { name: "New Jersey", d: "M620,88 L638,85 L640,120 L625,120 Z" },
  DE: { name: "Delaware", d: "M618,120 L635,118 L636,138 L620,138 Z" },
  MD: { name: "Maryland", d: "M590,125 L620,120 L625,145 L590,148 Z" },
};

export default function USMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="60 0 640 360"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.entries(states).map(([abbr, state]) => (
          <motion.path
            key={abbr}
            d={state.d}
            fill={hovered === abbr ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}
            stroke="rgba(201,168,76,0.3)"
            strokeWidth="0.8"
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setHovered(abbr)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15 }}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface border border-gold/30 shadow-lg pointer-events-none z-10"
        >
          <span className="text-xs font-medium text-gold">{states[hovered].name}</span>
        </motion.div>
      )}
    </div>
  );
}
