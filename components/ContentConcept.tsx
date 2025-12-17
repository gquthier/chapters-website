export default function ContentConcept() {
  const contentSteps = [
    { icon: "🎯", text: "pick a goal" },
    { icon: "💪", text: "commit" },
    { icon: "🔍", text: "reflect" },
    { icon: "📈", text: "improve" },
    { icon: "🔄", text: "repeat" }
  ];

  const audienceBenefits = [
    "stay accountable",
    "make better decisions", 
    "build momentum over time"
  ];

  return (
    <section id="content-concept" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* What you'll publish */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What you'll publish
            </h2>
            <p className="text-lg text-gray-600">
              (simple concept)
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-700">
                Your audience doesn't need another <em>"motivation quote"</em>.
              </p>
              <p className="text-xl text-gray-700">
                They need something practical:
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                "Build your life on purpose — chapter by chapter."
              </h3>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Sports. Art. Entrepreneurship. Study. Fitness. Any craft.</strong>
              </p>
              <p className="text-lg text-gray-600">
                The angle is always the same:
              </p>
            </div>

            {/* Content Steps */}
            <div className="flex flex-wrap justify-center items-center gap-4 py-8">
              {contentSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <span className="text-lg font-semibold text-gray-700">{step.text}</span>
                  </div>
                  {index < contentSteps.length - 1 && (
                    <div className="mx-2 text-gray-400 text-2xl hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why it works */}
        <div>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why it works for your audience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <p className="text-xl text-gray-700">
                People don't fail because they're lazy.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                They fail because they're unclear and inconsistent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {audienceBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-md">
                  <div className="text-3xl mb-3">⚡</div>
                  <p className="text-lg font-medium text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600">
                And it fits perfectly into short-form content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}