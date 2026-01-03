"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Lock, Activity, Play, Target, Users, Zap, DollarSign, FileText, BarChart3, Clock, ArrowRight, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';
import AppPreviewCarousel from '@/components/AppPreview';

const PartnersPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef(0);

  // Load Typeform script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sections = [
    { id: 'hero', label: 'Intro' },
    { id: 'preview', label: 'Preview' },
    { id: 'profile', label: 'Profile' },
    { id: 'options', label: 'Options' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'apply', label: 'Apply' },
    { id: 'application', label: 'Application' }
  ];

  const totalSections = sections.length;

  // Handle Scroll (Wheel)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (Math.abs(e.deltaY) > 20) {
        setIsScrolling(true);
        if (e.deltaY > 0) {
          setActiveSection((prev) => Math.min(prev + 1, totalSections - 1));
        } else {
          setActiveSection((prev) => Math.max(prev - 1, 0));
        }
        setTimeout(() => setIsScrolling(false), 800); // Debounce
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrolling, totalSections]);

  // Handle Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSections]);

  // Handle Touch
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (Math.abs(diff) > 50) { // Threshold
      if (diff > 0) {
        setActiveSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  // Load Typeform Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup is good practice but not strictly required for global scripts, 
      // but ensuring we don't duplicate on re-mounts is handled by standard browser caching usually.
      // However, to be safe:
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Helper for scrolling to specific section from buttons
  const scrollToSection = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div
      className="h-screen w-screen bg-black text-white overflow-hidden font-sans selection:bg-white selection:text-black relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Funding Announcement Banner */}
      <div className="fixed top-0 left-0 w-full bg-white text-black py-2 z-50 overflow-hidden">
        <div className="flex items-center">
          <div className="flex animate-scroll-seamless">
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
            <div className="flex items-center gap-12 text-sm font-bold italic uppercase tracking-widest whitespace-nowrap font-poppins pr-12">
              <span>CHAPTERS JUST VALIDATED $500,000 FUNDING ROUND TO PUSH PEOPLE TO ACHIEVE GREATNESS</span>
              <span>•</span>
              <span>EXPANDING PUBLISHER PROGRAM GLOBALLY</span>
              <span>•</span>
              <span>JOIN OUR EXCLUSIVE ROSTER OF CONTENT CREATORS</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Persistent UI: Top Header */}
      <nav className="fixed top-10 left-0 w-full px-10 py-8 flex justify-between items-center z-40 mix-blend-difference">
        <div className="font-bold tracking-tighter text-xl">CHAPTERS.</div>
        <div className="text-xs font-mono opacity-50 hidden sm:block">PUBLISHERS — PVT LTD</div>
      </nav>

      {/* Persistent UI: Progress / Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(idx)}
            className={`w-1 transition-all duration-500 ${activeSection === idx ? 'h-8 bg-white' : 'h-1 bg-white/20 hover:bg-white/50'}`}
            aria-label={`Go to ${sec.label}`}
          />
        ))}
      </div>

      {/* Persistent UI: Viewfinder Corners (Cinematic Feel) */}
      <div className="fixed top-6 left-6 w-4 h-4 border-l border-t border-white/30 pointer-events-none z-30"></div>
      <div className="fixed top-6 right-6 w-4 h-4 border-r border-t border-white/30 pointer-events-none z-30"></div>
      <div className="fixed bottom-8 left-6 w-4 h-4 border-l border-b border-white/30 pointer-events-none z-30"></div>
      <div className="fixed bottom-8 right-6 w-4 h-4 border-r border-b border-white/30 pointer-events-none z-30"></div>

      {/* Persistent UI: Indicator (Bottom Center) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40 font-mono text-xs tracking-widest uppercase">
        <div className={`w-2 h-2 rounded-full ${activeSection === 0 ? 'bg-white animate-pulse' : 'bg-white/20'}`}></div>
        <span className="opacity-60">{`SECTION 0${activeSection + 1} / 07`}</span>
      </div>

      {/* MAIN CONTENT STACK */}
      <main className="relative w-full h-full flex items-center justify-center">

        {/* SECTION 1: HERO */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center text-center max-w-4xl px-6
            ${activeSection === 0 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          {/* Badge */}
          <div className="mb-8 inline-flex items-center px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-white text-sm font-mono tracking-wider">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            PUBLISHERS PROGRAM
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Get paid reliably<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">for content you know.</span>
          </h1>

          <div className="h-px w-24 bg-white/30 my-6"></div>

          <p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're looking for creators who share content that pushes people to aspire for greatness and follow their vision.<br />
            <span className="text-white font-medium">Help us promote personal growth and transformation.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection(6)} // To Application (index 6 now)
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Apply now
            </button>
            <button
              onClick={() => scrollToSection(2)} // To Profile
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all"
            >
              Learn more
            </button>
          </div>

          <div className="mt-12 animate-bounce opacity-50">
            <ChevronDown size={24} />
          </div>
        </div>


        {/* SECTION 2: APP PREVIEW */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full
            ${activeSection === 1 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 1 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center space-y-8 mb-20 max-w-6xl mx-auto px-6">
              <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">01 / PREVIEW</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-6">
                Pursue Greatness
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Help People to Pursue Greatness and Keep Accountability On Their Goal
              </p>
            </div>
            <AppPreviewCarousel />
          </div>
        </div>


        {/* SECTION 3: PROFILE (Who this is for) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-7xl px-6
            ${activeSection === 2 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 2 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">02 / PROFILE</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Who this is for
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group flex flex-col items-center text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Post Consistently In Self-improvement, Discipline, Sports, Mindset, Creativity, Personal Growth And Push A Sense Of Greatness
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Want Stable Income, Not One-off Deals or unreliable partnerships
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Can Deliver Simple, Repeatable Formats (Talking Head Or Faceless/voiceover)
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium tracking-wide">
              🚫 Not for "get rich quick" pages or fake hype.
            </p>
          </div>
        </div>


        {/* SECTION 4: OPTIONS (The partnership) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-6xl px-6
            ${activeSection === 3 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 3 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="text-center space-y-8 mb-12">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">03 / OPTIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The partnership
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
            <p className="text-xl text-gray-400 font-light">
              Choose your path:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 - CPM */}
            <div className="relative group p-10 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl hover:border-white/30 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-center space-y-8">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Option 1 — CPM</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-400">FLEXIBLE</span>
                </div>

                <div className="space-y-2 py-6 border-t border-white/10 border-b">
                  <div className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">$2.00</div>
                  <p className="text-gray-400 font-light tracking-wide uppercase text-sm">Per 1000 Views</p>
                </div>
              </div>
            </div>

            {/* Option 2 - Contract */}
            <div className="relative group p-10 border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-2xl hover:border-white/40 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute top-4 right-4 animate-pulse">
                <span className="px-3 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-full">Recommended</span>
              </div>
              <div className="text-center space-y-8">
                <div className="w-16 h-16 mx-auto bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <FileText className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Option 2 — Contract</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-mono text-white">STABLE</span>
                </div>

                <div className="space-y-2 py-6 border-t border-white/20 border-b">
                  <p className="text-gray-400 font-light text-sm">3 / 6 / 12 Months</p>
                  <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-white">Up To $15k</div>
                  <p className="text-gray-400 font-light tracking-wide uppercase text-sm">/ Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* SECTION 5: REQUIREMENTS */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-5xl px-6
            ${activeSection === 4 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 4 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="text-center space-y-8 mb-20">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">04 / REQUIREMENTS</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              What we expect
            </h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-lg text-gray-300 font-light">Consistent Posting</span>
            </div>
            <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-lg text-gray-300 font-light">Clean Content (No Scams)</span>
            </div>
            <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-lg text-gray-300 font-light">A Real Audience (Not Bots)</span>
            </div>
            <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-lg text-gray-300 font-light">Ability To Follow Directions</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 font-light">
              Faceless is 100% fine.
            </p>
          </div>
        </div>

        {/* SECTION 6: APPLY (CTA) */}
        <div className={`absolute inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] px-6
             ${activeSection === 5 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 5 ? 'opacity-0 translate-y-full blur-sm' : 'opacity-0 -translate-y-full blur-sm pointer-events-none'}`}>

          {/* Abstract Shapes (Dark on White) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>


          <div className="relative z-10 text-center max-w-4xl space-y-12">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block text-gray-400">05 / APPLY</span>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
              Ready to<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Start?</span>
            </h2>

            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-normal text-gray-400">
              A partnership with <span className="text-white font-semibold">clear terms</span>, <span className="text-white font-semibold">reliable payouts</span>, and a <span className="text-white font-semibold">focused mission</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8">
              <button
                onClick={() => scrollToSection(6)}
                className="group relative bg-white text-black px-10 py-6 rounded-full font-bold text-xl md:text-2xl hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_30px_60px_rgba(255,255,255,0.2)] flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 7: APPLICATION (Form) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-4xl px-6
             ${activeSection === 6 ? 'opacity-100 translate-y-0 blur-0' :
            activeSection < 6 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="text-center space-y-8 mb-12">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block">06 / APPLICATION</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Join our roster
            </h2>
          </div>

          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg p-4 h-[600px] w-full">
            <div data-tf-live="01KCMRSD391DP3X7GTBEVKH78A" className="w-full h-full"></div>
            {/* Script loaded via useEffect */}
          </div>
        </div>

      </main>

      {/* Footer / Copyright */}
      <footer className={`fixed bottom-8 w-full transition-opacity duration-500
        ${activeSection === 6 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono">
            <div className="text-gray-700">
              © 2025 CHAPTERS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <a href="/support" className="text-gray-500 hover:text-white transition-colors">SUPPORT</a>
              <span className="text-gray-700">•</span>
              <a href="/privacy" className="text-gray-500 hover:text-white transition-colors">PRIVACY</a>
              <span className="text-gray-700">•</span>
              <a href="/terms" className="text-gray-500 hover:text-white transition-colors">TERMS</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PartnersPage;