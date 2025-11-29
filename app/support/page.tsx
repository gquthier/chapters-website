"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });

  const faqs = [
    {
      question: "How does the 7-day free trial work?",
      answer: "Start using Chapters completely free for 7 days. Cancel anytime during the trial without being charged. After 7 days, you'll be automatically subscribed at $9.99/month unless you cancel."
    },
    {
      question: "Are my videos really private?",
      answer: "Yes, 100%. Your videos are end-to-end encrypted and stored securely. Only you can access them. We never share your videos with anyone, and there are no social features."
    },
    {
      question: "How does the AI coaching work?",
      answer: "Our AI analyzes your video transcripts to identify patterns, key moments, and insights. It then generates personalized questions and coaching based on YOUR specific journey—not generic prompts."
    },
    {
      question: "Can I export my videos?",
      answer: "Absolutely. You own your data. You can export all your videos, transcripts, and insights at any time from the app settings."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You can cancel anytime through your Apple ID settings. You'll keep access until the end of your billing period. After that, you can still view your videos but won't get new AI analysis."
    },
    {
      question: "Is there an Android version?",
      answer: "Currently, Chapters is only available on iOS. We're working on an Android version—join our waitlist to be notified when it launches."
    },
    {
      question: "How much storage do I get?",
      answer: "Unlimited. Record as many videos as you want. We handle all the storage and backup automatically."
    },
    {
      question: "Can I import old videos?",
      answer: "Yes! You can import existing videos from your camera roll to build your complete life story in Chapters."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: `[Chapters Support] ${formData.category}`,
          message: `Category: ${formData.category}\n\n${formData.message}`,
          from_name: "Chapters Support Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", category: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Viewfinder Corners */}
      <div className="fixed top-6 left-6 w-4 h-4 border-l border-t border-white/30 pointer-events-none z-30"></div>
      <div className="fixed top-6 right-6 w-4 h-4 border-r border-t border-white/30 pointer-events-none z-30"></div>
      <div className="fixed bottom-6 left-6 w-4 h-4 border-l border-b border-white/30 pointer-events-none z-30"></div>
      <div className="fixed bottom-6 right-6 w-4 h-4 border-r border-b border-white/30 pointer-events-none z-30"></div>

      {/* Header */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference">
        <Link href="/" className="font-bold tracking-tighter text-xl hover:opacity-70 transition-opacity">
          CHAPTERS.
        </Link>
        <div className="text-xs font-mono opacity-50 hidden sm:block">SUPPORT CENTER</div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        {/* Hero Section */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Support & FAQ
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Get answers to common questions or reach out directly.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-gray-500">01 / FAQ</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 p-6 rounded-lg hover:border-white/30 transition-colors group">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-gray-500">02 / CONTACT</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Form Info */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Still need help?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours.
                All fields are required.
              </p>

              {/* Alternative Contact */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-1 text-gray-500" />
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-1">EMAIL</div>
                    <a href="mailto:support@captureyourchapters.com" className="text-white hover:text-gray-300 transition-colors">
                      support@captureyourchapters.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="text-sm font-mono text-gray-500 mb-2">RESPONSE TIME</div>
                <p className="text-white">Within 24 hours</p>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                >
                  <option value="" className="bg-black">Select a category</option>
                  <option value="Technical Issue" className="bg-black">Technical Issue / Bug</option>
                  <option value="Account & Billing" className="bg-black">Account & Billing</option>
                  <option value="Feature Request" className="bg-black">Feature Request</option>
                  <option value="Privacy & Security" className="bg-black">Privacy & Security</option>
                  <option value="General Question" className="bg-black">General Question</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder:text-gray-600 resize-none"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>

              {/* Status Messages */}
              {formStatus === "success" && (
                <div className="flex items-start gap-3 p-4 border border-green-500/50 bg-green-500/10 rounded-lg">
                  <CheckCircle size={20} className="mt-0.5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-400">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 rounded-lg">
                  <XCircle size={20} className="mt-0.5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us directly at support@captureyourchapters.com
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {formStatus === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-mono text-gray-700">
            © 2025 CHAPTERS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
