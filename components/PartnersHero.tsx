"use client";

export default function PartnersHero() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden font-sans selection:bg-white selection:text-black">
      {/* Animated News Banner */}
      <div className="absolute top-0 left-0 w-full bg-white text-black py-2 z-50 overflow-hidden">
        <div className="flex items-center">
          <div className="flex animate-scroll-seamless">
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Top Header */}
      <nav className="absolute top-10 left-0 w-full px-10 py-8 flex justify-between items-center z-40 mix-blend-difference">
        <div className="font-bold tracking-tighter text-xl">CHAPTERS.</div>
        <div className="text-xs font-mono opacity-50 hidden sm:block">PUBLISHERS — PVT LTD</div>
      </nav>

      {/* Viewfinder Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-white/30 pointer-events-none z-30"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-white/30 pointer-events-none z-30"></div>
      <div className="absolute bottom-8 left-6 w-4 h-4 border-l border-b border-white/30 pointer-events-none z-30"></div>
      <div className="absolute bottom-8 right-6 w-4 h-4 border-r border-b border-white/30 pointer-events-none z-30"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-white text-sm font-mono tracking-wider">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            PUBLISHERS PROGRAM
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Get paid reliably<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">for content you know.</span>
          </h1>


          {/* Divider */}
          <div className="h-px w-24 bg-white/30 my-6 mx-auto"></div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            If you're tired of brands paying late, ghosting, or <em className="text-white">"we'll see how it performs"</em>…<br/>
            <span className="text-white font-medium">this is different.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#application-form"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Apply now
            </a>
            <a
              href="#partnership-details"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Recording Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40 font-mono text-xs tracking-widest uppercase">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <span className="opacity-60">PUBLISHERS 01 / 05</span>
      </div>
    </section>
  );
}