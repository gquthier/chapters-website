export default function SocialProof() {
  const stats = [
    { value: "87%", label: "Better self-awareness" },
    { value: "5,000+", label: "Active users" },
    { value: "4.8/5", label: "Average rating" },
    { value: "30 days", label: "To see patterns" }
  ];

  const testimonials = [
    {
      text: "I finally understood why I was sabotaging my relationships. The AI identified a pattern I'd been repeating for 10 years.",
      author: "Sarah M.",
      role: "34, Early Adopter"
    },
    {
      text: "Chapters helped me see patterns I never noticed before. It's like having a mirror that shows you who you're becoming.",
      author: "Michael K.",
      role: "28, Product Manager"
    },
    {
      text: "The video format makes it so natural. I actually stick with it, unlike all the text journals I abandoned.",
      author: "Jessica L.",
      role: "31, Designer"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by thousands
          </h2>
          <p className="text-xl text-gray-600">
            Join users transforming their lives through reflection
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200"
            >
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
