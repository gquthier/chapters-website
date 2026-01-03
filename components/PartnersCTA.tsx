import { ArrowRight } from 'lucide-react';

export default function PartnersCTA() {
  return (
    <section id="apply" className="relative bg-white text-black py-40 font-sans overflow-hidden">

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-20">
        <div className="space-y-12 mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block text-gray-500">07 / APPLY</span>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
            Ready to<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Start?</span>
          </h2>

          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-normal text-gray-600">
            A partnership with <span className="text-black font-semibold">clear terms</span>, <span className="text-black font-semibold">reliable payouts</span>, and a <span className="text-black font-semibold">focused mission</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#application-form"
            className="group relative bg-black text-white px-10 py-6 rounded-full font-bold text-xl md:text-2xl hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Apply Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gray-900 group-hover:bg-gray-800 transition-colors"></div>
          </a>

          <a
            href="#application-form"
            className="px-10 py-6 rounded-full font-medium text-xl text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
          >
            Read the requirements
          </a>
        </div>

        {/* Trust Signals */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos or stats text */}
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black">48h</span>
              <span className="text-xs font-mono uppercase tracking-widest mt-2">Response Time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black">Monthly</span>
              <span className="text-xs font-mono uppercase tracking-widest mt-2">Recurring Pay</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black">$15k+</span>
              <span className="text-xs font-mono uppercase tracking-widest mt-2">Potential</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black">∞</span>
              <span className="text-xs font-mono uppercase tracking-widest mt-2">Upside</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-12 font-medium">Limited spots available for Q1 2025.</p>
        </div>
      </div>
    </section>
  );
}