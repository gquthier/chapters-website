import { ArrowRight, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

export default function ContentConcept() {
  const contentSteps = [
    {
      text: "Pick A Goal",
      sub: "Define",
      color: "from-blue-500 to-blue-700"
    },
    {
      text: "Commit",
      sub: "Action",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      text: "Reflect",
      sub: "Review",
      color: "from-purple-500 to-purple-700"
    },
    {
      text: "Improve",
      sub: "Refine",
      color: "from-pink-500 to-pink-700"
    },
    {
      text: "Repeat",
      sub: "Persist",
      color: "from-red-500 to-red-700"
    }
  ];

  const audienceBenefits = [
    {
      title: "Stay Accountable",
      desc: "Public commitment forces action.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Make Better Decisions",
      desc: "Reflection creates clarity.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Build Momentum",
      desc: "Consistency compounds results.",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <section id="content-concept" className="relative bg-black text-white py-32 font-sans border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 blur-[120px] pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        {/* What you'll publish */}
        <div className="mb-40">
          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">05 / CONTENT</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The Formula
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
            <p className="text-lg text-gray-400 font-light tracking-wide">
              SIMPLE • REPEATABLE • VIRAL
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-snug">
                "Build your life on purpose<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">chapter by chapter."</span>
              </h3>
            </div>

            {/* Content Steps - Timeline Style */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {contentSteps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Dot in Center */}
                    <div className={`hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 transition-transform duration-300 group-hover:scale-150`}></div>

                    <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all duration-300 text-center md:h-40 md:flex md:flex-col md:justify-center md:mt-8 md:group-odd:mb-16 md:group-even:mt-16 ring-1 ring-white/5 shadow-lg">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">{step.sub}</span>
                      <span className="text-xl font-bold text-white">{step.text}</span>
                    </div>
                    {/* Arrow for Mobile only */}
                    {index < contentSteps.length - 1 && (
                      <div className="flex justify-center md:hidden py-2">
                        <ArrowRight className="text-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center space-y-4">
              <p className="text-xl text-gray-300 font-light">
                <strong className="text-white">Sports. Art. Entrepreneurship. Study. Fitness.</strong>
              </p>
              <p className="text-sm text-gray-500 font-mono">
                THE NICHE DOESN'T MATTER. THE STORY DOES.
              </p>
            </div>

          </div>
        </div>

        {/* Why it works */}
        <div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block">06 / IMPACT</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Why it works
                </h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  People don't fail because they're lazy. They fail because they're <span className="text-white font-medium">unclear</span> and <span className="text-white font-medium">inconsistent</span>. This format attacks both problems head-on.
                </p>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  It's not just content. It's an accountability engine that fits perfectly into 60-second loops.
                </p>
              </div>

              <div className="grid gap-4">
                {audienceBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-black/40 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                    <div className="p-3 bg-white/5 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}