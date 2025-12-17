export default function PartnershipDetails() {
  const targetAudience = [
    "post consistently in self-improvement, discipline, sports, mindset, creativity, personal growth and push a sense of greatness",
    "want stable income, not one-off deals",
    "can deliver simple, repeatable formats (talking head or faceless/voiceover)"
  ];

  const expectations = [
    "consistent posting",
    "clean content (no scams, no fake claims)", 
    "a real audience (not bots)",
    "ability to follow a simple content brief"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Who this is for */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Who this is for
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is for creators who:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                <div className="text-2xl">✨</div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-red-600 font-medium">
              Not for "get rich quick" pages or fake hype.
            </p>
          </div>
        </div>

        {/* The Partnership */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The partnership
            </h2>
            <p className="text-xl text-gray-600">
              You have one choice:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 - CPM */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="text-3xl">💰</div>
                <h3 className="text-2xl font-bold text-gray-900">Option 1 — CPM</h3>
                <div className="text-4xl font-bold text-blue-600">$0.80</div>
                <p className="text-gray-600">per 1000 views</p>
              </div>
            </div>

            {/* Option 2 - Contract */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="text-3xl">📋</div>
                <h3 className="text-2xl font-bold text-gray-900">Option 2 — Long-term contract</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">3 months / 6 months / 1 year</p>
                  <div className="text-4xl font-bold text-purple-600">up to $15k</div>
                  <p className="text-gray-600">/month</p>
                  <p className="text-sm text-gray-500">(depending on your subscriber count, monthly posts, and investigation)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xl font-medium text-gray-700">
              That's it.
            </p>
          </div>
        </div>

        {/* What we expect */}
        <div>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What we expect
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {expectations.map((expectation, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">{expectation}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Faceless is 100% fine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}