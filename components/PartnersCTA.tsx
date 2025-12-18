export default function PartnersCTA() {
  return (
    <section id="apply" className="relative bg-black text-white py-32 font-sans border-t border-white/10">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-12 relative z-20">
        <div className="space-y-8">
          <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">06 / APPLY</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Ready to start?
          </h2>
          <div className="h-px w-24 bg-white/30 mx-auto"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            If you want a partnership with clear terms and reliable payouts, apply.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
            <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <div className="text-sm text-gray-400 font-light mb-1">Reliable Payouts</div>
            <div className="font-medium">No Late Payments</div>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
            <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <div className="text-sm text-gray-400 font-light mb-1">Clear Terms</div>
            <div className="font-medium">No "We'll See"</div>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
            <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 6.10457 10.1046 7 9 7C7.89543 7 7 6.10457 7 5Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17C7 15.8954 7.89543 15 9 15C10.1046 15 11 15.8954 11 17C11 18.1046 10.1046 19 9 19C7.89543 19 7 18.1046 7 17Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11C7 9.89543 7.89543 9 9 9C10.1046 9 11 9.89543 11 11C11 12.1046 10.1046 13 9 13C7.89543 13 7 12.1046 7 11Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17C13 15.8954 13.8954 15 15 15C16.1046 15 17 15.8954 17 17C17 18.1046 16.1046 19 15 19C13.8954 19 13 18.1046 13 17Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5C17 6.10457 16.1046 7 15 7C13.8954 7 13 6.10457 13 5Z"/>
            </svg>
            <div className="text-sm text-gray-400 font-light mb-1">Long-Term</div>
            <div className="font-medium">Stable Partnership</div>
          </div>
        </div>

        {/* What You Get Checklist */}
        <div className="max-w-md mx-auto text-left space-y-4 pt-8">
          {[
            "Direct Partnership With Chapters",
            "Monthly Recurring Payments",
            "Simple Content Briefs",
            "No Audience Size Minimums",
            "Faceless Content Welcome"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span className="text-gray-300 font-light">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12">
          <a
            href="#application-form"
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Apply now
          </a>
          <a
            href="#application-form"
            className="border border-white/30 text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-white/10 transition-all"
          >
            Get the brief
          </a>
        </div>

        <div className="space-y-3 pt-8">
          <p className="text-sm text-gray-400 font-light">
            Send us your channel/profile and we'll get back to you within 48 hours.
          </p>
          <p className="text-sm text-gray-500 font-light">
            Small roster only. Quality over quantity.
          </p>
        </div>
      </div>
    </section>
  );
}