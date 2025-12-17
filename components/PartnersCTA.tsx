export default function PartnersCTA() {
  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Apply
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          If you want a partnership with clear terms and reliable payouts, apply.
        </p>

        {/* Key Benefits Highlight */}
        <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">💰</div>
              <div className="text-sm text-gray-300">Reliable Payouts</div>
              <div className="font-semibold">No Late Payments</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📋</div>
              <div className="text-sm text-gray-300">Clear Terms</div>
              <div className="font-semibold">No "We'll See"</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-sm text-gray-300">Long-term</div>
              <div className="font-semibold">Stable Partnership</div>
            </div>
          </div>
        </div>

        {/* What You Get Checklist */}
        <div className="max-w-md mx-auto text-left space-y-3 pt-6">
          {[
            "Direct partnership with Chapters",
            "Monthly recurring payments",
            "Simple content briefs",
            "No audience size minimums",
            "Faceless content welcome"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#application-form"
            className="inline-flex items-center px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
          >
            Apply now
          </a>
          <a
            href="#application-form"
            className="inline-flex items-center px-12 py-5 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:border-white/50 transition-all"
          >
            Get the brief
          </a>
        </div>

        <div className="space-y-2 pt-4">
          <p className="text-sm text-gray-400">
            Send us your channel/profile and we'll get back to you within 48 hours.
          </p>
          <p className="text-sm text-gray-500">
            Small roster only. Quality over quantity.
          </p>
        </div>
      </div>
    </section>
  );
}