export default function PartnershipDetails() {
  const targetAudience = [
    "Post Consistently In Self-improvement, Discipline, Sports, Mindset, Creativity, Personal Growth And Push A Sense Of Greatness",
    "Want Stable Income, Not One-off Deals",
    "Can Deliver Simple, Repeatable Formats (Talking Head Or Faceless/voiceover)"
  ];

  const expectations = [
    "Consistent Posting",
    "Clean Content (No Scams, No Fake Claims)", 
    "A Real Audience (Not Bots)",
    "Ability To Follow A Simple Content Brief"
  ];

  return (
    <section id="partnership-details" className="relative bg-black text-white py-32 font-sans">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        
        {/* Who this is for */}
        <div className="mb-32">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">01 / PROFILE</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Who this is for
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <svg className="w-6 h-6 mt-1 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-lg text-gray-300 leading-relaxed font-light">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-white font-medium">
              Not for "get rich quick" pages or fake hype.
            </p>
          </div>
        </div>

        {/* The Partnership */}
        <div className="mb-32">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">02 / OPTIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The partnership
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
            <p className="text-xl text-gray-400 font-light">
              You have one choice:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 - CPM */}
            <div className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-center space-y-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
                <h3 className="text-2xl font-bold">Option 1 — CPM</h3>
                <div className="space-y-2">
                  <div className="text-5xl font-bold tracking-tighter">$2.00</div>
                  <p className="text-gray-400 font-light">Per 1000 Views</p>
                </div>
              </div>
            </div>

            {/* Option 2 - Contract */}
            <div className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-center space-y-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h3 className="text-2xl font-bold">Option 2 — Long-term contract</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 font-light">3 Months / 6 Months / 1 Year</p>
                  <div className="text-5xl font-bold tracking-tighter">Up To $15k</div>
                  <p className="text-gray-400 font-light">/Month</p>
                  <p className="text-sm text-gray-500 leading-relaxed">(Depending On Your Subscriber Count, Monthly Posts, And Investigation)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-light text-gray-300">
              That's it.
            </p>
          </div>
        </div>

        {/* What we expect */}
        <div>
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">03 / REQUIREMENTS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              What we expect
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {expectations.map((expectation, index) => (
              <div key={index} className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-lg text-gray-300 font-light">{expectation}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 font-light">
              Faceless is 100% fine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}