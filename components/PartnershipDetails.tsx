import { Check, Target, Users, Zap, DollarSign, FileText, BarChart3, Clock } from 'lucide-react';

export default function PartnershipDetails() {
  const targetAudience = [
    {
      text: "Post Consistently In Self-improvement, Discipline, Sports, Mindset, Creativity, Personal Growth And Push A Sense Of Greatness",
      icon: <Target className="w-8 h-8 text-white mb-4" />
    },
    {
      text: "Want Stable Income, Not One-off Deals",
      icon: <DollarSign className="w-8 h-8 text-white mb-4" />
    },
    {
      text: "Can Deliver Simple, Repeatable Formats (Talking Head Or Faceless/voiceover)",
      icon: <Zap className="w-8 h-8 text-white mb-4" />
    }
  ];

  const expectations = [
    {
      text: "Consistent Posting",
      icon: <Clock className="w-6 h-6 text-gray-400" />
    },
    {
      text: "Clean Content (No Scams, No Fake Claims)",
      icon: <Check className="w-6 h-6 text-green-500" />
    },
    {
      text: "A Real Audience (Not Bots)",
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      text: "Ability To Follow A Simple Content Brief",
      icon: <FileText className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="partnership-details" className="relative bg-black text-white py-32 font-sans overflow-hidden">
      {/* Background Elements for depth */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>


      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        {/* Who this is for */}
        <div className="mb-40">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">02 / PROFILE</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Who this is for
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="group flex flex-col items-center text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium tracking-wide">
              🚫 Not for "get rich quick" pages or fake hype.
            </p>
          </div>
        </div>

        {/* The Partnership */}
        <div className="mb-40">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">03 / OPTIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The partnership
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
            <p className="text-xl text-gray-400 font-light">
              Choose your path:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 - CPM */}
            <div className="relative group p-10 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl hover:border-white/30 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-center space-y-8">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Option 1 — CPM</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-400">FLEXIBLE</span>
                </div>

                <div className="space-y-2 py-6 border-t border-white/10 border-b">
                  <div className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">$2.00</div>
                  <p className="text-gray-400 font-light tracking-wide uppercase text-sm">Per 1000 Views</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Perfect for creators who want performance-based earnings without long-term commitments.
                </p>
              </div>
            </div>

            {/* Option 2 - Contract */}
            <div className="relative group p-10 border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-2xl hover:border-white/40 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute top-4 right-4 animate-pulse">
                <span className="px-3 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-full">Recommended</span>
              </div>
              <div className="text-center space-y-8">
                <div className="w-16 h-16 mx-auto bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <FileText className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Option 2 — Contract</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-mono text-white">STABLE</span>
                </div>

                <div className="space-y-2 py-6 border-t border-white/20 border-b">
                  <p className="text-gray-400 font-light text-sm">3 / 6 / 12 Months</p>
                  <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-white">Up To $15k</div>
                  <p className="text-gray-400 font-light tracking-wide uppercase text-sm">/ Month</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scale your income with guaranteed monthly payments based on your consistency and quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What we expect */}
        <div>
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">04 / REQUIREMENTS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              What we expect
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expectations.map((expectation, index) => (
              <div key={index} className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                  {expectation.icon}
                </div>
                <span className="text-lg text-gray-300 font-light group-hover:text-white transition-colors">{expectation.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-500 font-mono tracking-tight">
              // FACELESS IS 100% FINE //
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}