"use client";

import { ArrowLeft, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing or using Chapters, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our service."
    },
    {
      title: "Use of Service",
      content: "Chapters provides a video journaling and AI coaching platform. You agree to:",
      list: [
        "Use the service for personal, non-commercial purposes only",
        "Not share your account credentials with others",
        "Not attempt to reverse engineer or hack the service",
        "Comply with all applicable laws and regulations",
        "Not use the service to store illegal or harmful content"
      ]
    },
    {
      title: "Your Content",
      content: "You retain all rights to the videos and content you create. By using Chapters, you grant us permission to store, process, and analyze your content solely to provide our AI coaching features. Your video transcripts are processed by OpenAI's API for AI analysis. By using Chapters, you acknowledge and agree that your data will be processed according to OpenAI's terms of service and privacy policy, over which we have no control. We never share your videos with third parties beyond the AI processing services described."
    },
    {
      title: "Subscription & Billing",
      list: [
        "Subscriptions are billed monthly via Apple App Store",
        "7-day free trial available for new users",
        "Cancel anytime through your Apple ID settings",
        "No refunds for partial subscription periods",
        "Pricing subject to change with 30 days notice"
      ]
    },
    {
      title: "Prohibited Activities",
      content: "You may not:",
      list: [
        "Use the service for illegal purposes or activities",
        "Upload content that violates others' intellectual property rights",
        "Attempt to access other users' private data or accounts",
        "Interfere with the service's security features or infrastructure",
        "Use the service to harass, abuse, or harm others"
      ]
    },
    {
      title: "Termination",
      content: "We reserve the right to suspend or terminate your account if you violate these terms. Upon termination, you may export your data within 30 days before permanent deletion. You may also delete your account at any time through the app settings."
    },
    {
      title: "Limitation of Liability",
      content: "Chapters is provided \"as is\" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability is limited to the amount you paid for the service in the past 12 months."
    },
    {
      title: "Privacy & Data Protection",
      content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your data. All videos are encrypted and stored securely."
    },
    {
      title: "Intellectual Property",
      content: "The Chapters app, including its design, features, and AI technology, is protected by intellectual property laws. You may not copy, modify, or distribute any part of our service without permission."
    },
    {
      title: "Changes to Terms",
      content: "We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify you of significant changes via email or in-app notification."
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
        <div className="text-xs font-mono opacity-50 hidden sm:block">TERMS OF SERVICE</div>
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
            <FileText size={32} className="text-white" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Terms of Service
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
            <span>LAST UPDATED</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-20 border border-yellow-500/30 bg-yellow-500/5 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">Important</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Please read these Terms of Service carefully before using Chapters. By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-gray-500">
                {String(index + 1).padStart(2, '0')} / {section.title.toUpperCase()}
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="border border-white/10 p-8 rounded-lg hover:border-white/20 transition-colors">
              {section.content && (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="space-y-3">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Governing Law */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-gray-500">11 / GOVERNING LAW</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="border border-white/10 p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Chapters operates, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Questions About These Terms?</h2>
          <p className="text-gray-400 mb-6">
            If you have any questions about these Terms of Service, please contact us:
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
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">PRIVACY</Link>
              <span className="text-gray-700">•</span>
              <Link href="/terms" className="text-white">TERMS</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
