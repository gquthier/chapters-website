"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PartnersAppPreview() {
  const images = [
    "/websitepreview/Frame 94.png",
    "/websitepreview/Frame 95.png",
    "/websitepreview/Frame 96.png",
    "/websitepreview/Frame 97.png",
    "/websitepreview/Frame 98.png",
    "/websitepreview/Frame 99.png",
    "/websitepreview/Frame 100.png",
  ];

  return (
    <section className="relative bg-black text-white py-32 font-sans overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-20">
          <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">01 / PREVIEW</span>
          <p className="text-xl text-gray-400 font-light">
            Your life, beautifully documented.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden bg-white/5 py-10 rounded-xl border border-white/10">
          <div className="flex w-max animate-scroll">
            {[...images, ...images].map((src, index) => (
              <div key={index} className="relative mx-4 h-[400px] w-[250px] md:h-[500px] md:w-[300px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <Image
                  src={src}
                  alt={`App preview ${index}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for the scrolling animation - using same global style to avoid duplication if possible, or redundant definition is fine for now */}
      <style jsx global>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
        `}</style>
    </section>
  );
}
