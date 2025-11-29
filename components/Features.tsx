export default function Features() {
  const features = [
    {
      icon: "📹",
      title: "Video Journaling",
      description: "Record 2-min reflections. Your most authentic self, no audience, no performance—just you."
    },
    {
      icon: "🤖",
      title: "AI Pattern Detection",
      description: "AI identifies what you don't see. Break 10-year patterns in 30 days based on YOUR videos."
    },
    {
      icon: "🎯",
      title: "Personalized Coaching",
      description: "Get questions based on your previous reflections, not generic prompts. Smart reminders at the right time."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "See your evolution from current level to full potential. Measure what matters across life domains."
    },
    {
      icon: "✨",
      title: "Automatic Highlights",
      description: "AI extracts key moments from each video. No need to rewatch everything—see what matters instantly."
    },
    {
      icon: "🔒",
      title: "100% Private & Encrypted",
      description: "Your videos belong to you. End-to-end encrypted, no social features, no sharing required."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything you need to grow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Video journaling meets AI coaching. Simple, powerful, private.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
