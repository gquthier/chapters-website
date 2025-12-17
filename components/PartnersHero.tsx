"use client";

export default function PartnersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            💰 Publishers Program
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Chapters{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Publishers
            </span>{" "}
            Program
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Get paid reliably for content you already know how to make.
          </p>

          {/* Key differentiator */}
          <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              If you're tired of brands paying late, ghosting, or <em>"we'll see how it performs"</em>… this is different.
            </p>
          </div>

          {/* Sub-description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're building a small roster of Publishers (influencers + faceless channels) for a <strong>long-term partnership</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#application-form"
              className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Apply now
            </a>
            <a
              href="#application-form"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 transition-all"
            >
              Get the brief
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}