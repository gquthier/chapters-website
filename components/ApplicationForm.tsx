"use client";

import { useEffect } from 'react';

export default function ApplicationForm() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="application-form" className="relative bg-black text-white py-32 font-sans border-t border-white/10">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center space-y-8 mb-16">
          <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">07 / APPLICATION</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Join our roster
          </h2>
          <div className="h-px w-24 bg-white/30 mx-auto"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 48 hours with next steps.
          </p>
        </div>

        {/* Typeform Embed Container */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg p-8 min-h-[600px] hover:bg-white/10 transition-all duration-300">
          <div data-tf-live="01KCMRSD391DP3X7GTBEVKH78A"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <span className="font-light">100% secure & confidential</span>
            </span>
            <span className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <span className="font-light">Takes 3-5 minutes</span>
            </span>
            <span className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <span className="font-light">No obligations</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}