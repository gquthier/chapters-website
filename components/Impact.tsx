export default function Impact() {
  const benefits = [
    {
      icon: "🔒",
      title: "100% Private & Secure",
      description: "Your videos are encrypted and only you can access them"
    },
    {
      icon: "🙏",
      title: "Build Gratitude Daily",
      description: "Video journaling creates lasting memories you'll cherish"
    },
    {
      icon: "⏰",
      title: "Future Nostalgia",
      description: "Imagine being 50 and watching your honest journey unfold"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-relaxed">
            "The camera captures what words can't express—your energy, your emotions, your truth."
          </blockquote>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Power Quote */}
        <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center">
          <p className="text-2xl md:text-3xl font-semibold mb-6">
            Imagine being 50 years old and watching back what you've gone through from pure honesty videos.
          </p>
          <p className="text-lg opacity-90">
            That's the power of Chapters. Start building your future nostalgia today.
          </p>
        </div>
      </div>
    </section>
  );
}
