export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "SPEAK",
      subtitle: "2 minutes facing the camera",
      description: "Debrief your day, your week, your life. Speak honestly without judgment."
    },
    {
      number: "02",
      title: "AI ANALYZES",
      subtitle: "Transcribes, identifies, detects",
      description: "AI transcribes your video, identifies key moments, and detects patterns you don't see."
    },
    {
      number: "03",
      title: "YOU EVOLVE",
      subtitle: "See progress, get insights, hit goals",
      description: "Track your growth, receive personalized coaching, and achieve your objectives."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start your transformation
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -z-10"></div>
              )}

              {/* Step Card */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
