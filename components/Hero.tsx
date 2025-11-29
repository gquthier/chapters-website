"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            🎥 Video Journaling + AI Coach
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Build a life you can{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              rewatch
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Record short reflections, get AI coaching, and hit your goals—one tiny win at a time.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>⏱️ 2–3 min to set up</span>
            <span>•</span>
            <span>🔒 Private by default</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Download on App Store
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Hero Image Placeholder */}
          <div className="pt-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">📱 App Screenshot Here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
