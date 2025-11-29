"use client";

import { ArrowLeft, Lock, Shield, Database, Eye } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Video Recordings",
          text: "Your personal video journal entries stored securely in your account. All videos are end-to-end encrypted."
        },
        {
          subtitle: "Account Information",
          text: "Email address and authentication credentials used to secure your account."
        },
        {
          subtitle: "Usage Data",
          text: "How you interact with the app to improve our services and personalize your experience."
        },
        {
          subtitle: "Device Information",
          text: "Basic device type and OS version for compatibility and performance optimization."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Storage & Security",
          text: "Store and secure your video journal entries with military-grade encryption."
        },
        {
          subtitle: "AI Analysis",
          text: "Provide AI analysis and personalized coaching based on your video content."
        },
        {
          subtitle: "Payment Processing",
          text: "Process subscription payments securely via RevenueCat and Apple."
        },
        {
          subtitle: "Communication",
          text: "Send important updates about your account and service improvements."
        },
        {
          subtitle: "Improvement",
          text: "Analyze usage patterns to improve app functionality and user experience."
        }
      ]
    },
    {
      title: "Data Storage & Security",
      icon: Shield,
      content: [
        {
          subtitle: "Encryption",
          text: "All videos are encrypted at rest and in transit using industry-standard protocols."
        },
        {
          subtitle: "Access Control",
          text: "Only you can access your personal videos. We never share your content with third parties."
        },
        {
          subtitle: "Secure Infrastructure",
          text: "Your data is stored on Supabase with enterprise-grade security measures."
        },
        {
          subtitle: "AI Processing",
          text: "AI analysis happens securely within our encrypted infrastructure."
        }
      ]
    }
  ];

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
        <div className="text-xs font-mono opacity-50 hidden sm:block">PRIVACY POLICY</div>
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
          <div className="flex items-center gap-4 mb-6">
            <Lock size={32} className="text-white" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Privacy Policy
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
            <span>LAST UPDATED</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-20">
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            At Chapters, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs font-mono text-gray-500">
                {String(sectionIndex + 1).padStart(2, '0')} / {section.title.toUpperCase()}
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="border border-white/10 p-6 rounded-lg hover:border-white/30 transition-colors group">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Third-Party Services */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-gray-500">04 / THIRD-PARTY SERVICES</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="border border-white/10 p-8 rounded-lg">
            <p className="text-gray-400 mb-6">We use the following trusted third-party services:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Supabase</strong>
                  <span className="text-gray-400"> — Secure database and authentication infrastructure</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">RevenueCat</strong>
                  <span className="text-gray-400"> — Subscription management and payment processing</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Apple Sign-In</strong>
                  <span className="text-gray-400"> — Secure authentication and privacy protection</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">OpenAI</strong>
                  <span className="text-gray-400"> — AI processing and analysis of your video transcripts. By using Chapters, you agree to OpenAI's terms of service and privacy policy. Your data is processed according to OpenAI's data usage policies, over which we have no control.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-gray-500">05 / YOUR RIGHTS</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Access all your personal data at any time",
              "Export your videos and transcripts",
              "Delete your account and all associated data",
              "Opt-out of analytics and marketing communications"
            ].map((right, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-300">{right}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Questions?</h2>
          <p className="text-gray-400 mb-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <a
            href="mailto:support@captureyourchapters.com"
            className="inline-flex items-center gap-2 text-white font-mono hover:text-gray-300 transition-colors"
          >
            support@captureyourchapters.com
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono">
            <div className="text-gray-700">
              © 2025 CHAPTERS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/support" className="text-gray-500 hover:text-white transition-colors">SUPPORT</Link>
              <span className="text-gray-700">•</span>
              <Link href="/privacy" className="text-white">PRIVACY</Link>
              <span className="text-gray-700">•</span>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">TERMS</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
