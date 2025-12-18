export default function ContentConcept() {
  const contentSteps = [
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>, 
      text: "Pick A Goal" 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, 
      text: "Commit" 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>, 
      text: "Reflect" 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4"/></svg>, 
      text: "Improve" 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>, 
      text: "Repeat" 
    }
  ];

  const audienceBenefits = [
    "Stay Accountable",
    "Make Better Decisions", 
    "Build Momentum Over Time"
  ];

  return (
    <section id="content-concept" className="relative bg-black text-white py-32 font-sans border-t border-white/10">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* What you'll publish */}
        <div className="mb-32">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">04 / CONTENT</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              What you'll publish
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
            <p className="text-lg text-gray-400 font-light">
              (simple concept)
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <p className="text-xl text-gray-300 font-light">
                Your audience doesn't need another <em className="text-white">"motivation quote"</em>.
              </p>
              <p className="text-xl text-gray-300 font-light">
                They need something practical:
              </p>
            </div>

            <div className="text-center p-12 border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">
                "Build your life on purpose — chapter by chapter."
              </h3>
            </div>

            <div className="text-center space-y-6">
              <p className="text-lg text-gray-300 font-light">
                <strong className="text-white">Sports. Art. Entrepreneurship. Study. Fitness. Any craft.</strong>
              </p>
              <p className="text-lg text-gray-400 font-light">
                The angle is always the same:
              </p>
            </div>

            {/* Content Steps */}
            <div className="flex flex-wrap justify-center items-center gap-6 py-12">
              {contentSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="text-white mb-3">{step.icon}</div>
                    <span className="text-lg font-medium text-gray-300">{step.text}</span>
                  </div>
                  {index < contentSteps.length - 1 && (
                    <svg className="mx-4 w-6 h-6 text-gray-500 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why it works */}
        <div>
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">05 / IMPACT</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Why it works for your audience
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <p className="text-xl text-gray-300 font-light">
                People don't fail because they're lazy.
              </p>
              <p className="text-xl font-medium text-white">
                They fail because they're unclear and inconsistent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {audienceBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                  <svg className="w-12 h-12 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <p className="text-lg font-medium text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-400 font-light">
                And it fits perfectly into short-form content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}