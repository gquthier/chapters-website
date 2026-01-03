"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AppPreviewCarousel() {
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
    <div className="relative w-full overflow-hidden bg-black/5 py-10">
      <div className="flex w-max animate-scroll">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="relative mx-4 h-[400px] w-[250px] md:h-[500px] md:w-[300px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src={src}
              alt={`App preview ${index}`}
              fill
              className="object-contain p-2"
            />
          </div>
        ))}
      </div>
      
      {/* CSS for the scrolling animation - inline for this component or add to globals.css */}
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
    </div>
  );
}
