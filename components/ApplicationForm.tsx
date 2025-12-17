"use client";

export default function ApplicationForm() {
  return (
    <section id="application-form" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to join our Publishers roster?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 48 hours with next steps.
          </p>
        </div>

        {/* Typeform Embed Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[600px]">
          <div data-tf-live="01KCMRSD391DP3X7GTBEVKH78A"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% secure & confidential
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Takes 3-5 minutes
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No obligations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}