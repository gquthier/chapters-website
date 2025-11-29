export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to start your evolution?
        </h2>
        <p className="text-xl text-gray-300">
          Join thousands of users building a life they can rewatch
        </p>

        {/* Pricing */}
        <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="text-sm text-gray-300 mb-2">7-day free trial</div>
          <div className="text-4xl font-bold mb-1">$9.99<span className="text-xl text-gray-400">/month</span></div>
          <div className="text-sm text-gray-400">Cancel anytime. Your data belongs to you.</div>
        </div>

        {/* Features Checklist */}
        <div className="max-w-md mx-auto text-left space-y-3 pt-6">
          {[
            "Unlimited videos",
            "Complete AI analysis",
            "Personalized questions",
            "Automatic highlights",
            "Export your insights"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <a
            href="https://apps.apple.com/app/chapters"
            className="inline-flex items-center px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
          >
            Download on App Store
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Available on iOS. Android coming soon.
        </p>
      </div>
    </section>
  );
}
