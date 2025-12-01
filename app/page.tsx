"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Lock, Mic, Activity, Play, Pause, ChevronRight, ChevronDown, Camera, X } from 'lucide-react';
import AppleIcon from '@/components/AppleIcon';

const ChaptersLanding = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [webcamActive, setWebcamActive] = useState(false);
  const [webcamError, setWebcamError] = useState<string | null>(null);
  const touchStartY = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const sections = [
    { id: 'hero', label: 'Intro' },
    { id: 'method', label: 'The Method' },
    { id: 'features', label: 'Intelligence' },
    { id: 'testimonials', label: 'Stories' },
    { id: 'cta', label: 'Start' }
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

  // Webcam functions
  const startWebcam = async () => {
    try {
      setWebcamError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setWebcamActive(true);
      }
    } catch (error) {
      console.error('Webcam error:', error);
      setWebcamError('Camera access denied');
      setWebcamActive(false);
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setWebcamActive(false);
    setWebcamError(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  return (
    <div
        className="h-screen w-screen bg-black text-white overflow-hidden font-sans selection:bg-white selection:text-black relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
    >
      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Persistent UI: Top Header */}
      <nav className="fixed top-0 left-0 w-full px-10 py-8 flex justify-between items-center z-40 mix-blend-difference">
        <div className="font-bold tracking-tighter text-xl">CHAPTERS.</div>
        <div className="text-xs font-mono opacity-50 hidden sm:block">EST. 2025 — PVT LTD</div>
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

      {/* Persistent UI: Recording Indicator (Bottom Center) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40 font-mono text-xs tracking-widest uppercase">
        <div className={`w-2 h-2 rounded-full ${activeSection === 0 ? 'bg-red-600 animate-pulse' : 'bg-white/20'}`}></div>
        <span className="opacity-60">{activeSection === 0 ? 'REC 00:00:00' : `SEC 0${activeSection + 1} / 05`}</span>
      </div>

      {/* MAIN CONTENT STACK */}
      <main className="relative w-full h-full flex items-center justify-center">

        {/* SECTION 1: HERO */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center text-center max-w-4xl px-6
            ${activeSection === 0 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Build a life you <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">can rewatch.</span>
          </h1>

          <div className="h-px w-24 bg-white/30 my-6"></div>

          <p className="text-lg md:text-xl font-light text-gray-400 max-w-xl mx-auto leading-relaxed">
            Gain clarity over your thoughts.<br/>
            Capture and shape the <span className="text-white font-medium">CHAPTERS</span> of your life.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
            <AppleIcon size={24} />
            Download on App Store
          </button>

          <div className="mt-12 animate-bounce opacity-50">
            <ChevronDown size={24} />
          </div>
        </div>


        {/* SECTION 2: THE METHOD (3 Steps) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-6xl px-6
            ${activeSection === 1 ? 'opacity-100 translate-y-0 blur-0' :
              activeSection < 1 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/10 pt-12">

            <div className="group">
              <span className="text-xs font-mono text-gray-500 mb-4 block">01 / INPUT</span>
              <div className="mb-6 p-4 border border-white/10 inline-block rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Mic size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Speak.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                2 minutes facing the camera. Debrief your day. Speak honestly without judgment. Your truth, encrypted.
              </p>
            </div>

            <div className="group">
              <span className="text-xs font-mono text-gray-500 mb-4 block">02 / PROCESS</span>
              <div className="mb-6 p-4 border border-white/10 inline-block rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Analyzes.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transcribes, identifies key moments, and detects patterns you've repeated for 10 years but never noticed.
              </p>
            </div>

            <div className="group">
              <span className="text-xs font-mono text-gray-500 mb-4 block">03 / OUTPUT</span>
              <div className="mb-6 p-4 border border-white/10 inline-block rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ChevronRight size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">You Evolve.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                See your growth timeline. Receive personalized coaching based on your own voice, not generic prompts.
              </p>
            </div>

          </div>
        </div>


        {/* SECTION 3: FEATURES (Minimal List) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col md:flex-row items-center w-full max-w-5xl px-6 gap-12
             ${activeSection === 2 ? 'opacity-100 translate-y-0 blur-0' :
               activeSection < 2 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Everything you need.<br/>Nothing you don't.</h2>
            <div className="space-y-6">
               {[
                 { title: "Private by Default", desc: "End-to-end encrypted. No social features. Just you.", icon: Lock },
                 { title: "AI Pattern Detection", desc: "Break cycles in 30 days based on YOUR videos.", icon: Activity },
                 { title: "Auto-Highlights", desc: "AI extracts key moments so you don't have to scrub.", icon: Play }
               ].map((feature, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <feature.icon className="mt-1 text-gray-500" size={20} />
                   <div>
                     <h4 className="text-lg font-medium">{feature.title}</h4>
                     <p className="text-sm text-gray-400">{feature.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Abstract App Visualization */}
          <div className="flex-1 w-full flex justify-center">
             <div className="relative w-64 h-[500px] border border-white/20 rounded-3xl p-4 flex flex-col justify-between bg-black/50 backdrop-blur-sm">
                <div className="w-full flex justify-between items-center opacity-50">
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-4 h-4 border border-white/50 rounded-full"></div>
                </div>

                {/* Simulated Content */}
                <div className="space-y-4">
                    {/* Interactive Webcam Preview */}
                    <div
                      className="w-full h-32 border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer group"
                      onClick={webcamActive ? stopWebcam : startWebcam}
                    >
                      {!webcamActive && !webcamError && (
                        <>
                          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <Camera size={24} className="text-white group-hover:scale-110 transition-transform" />
                            <span className="text-[8px] font-mono text-gray-400 group-hover:text-white transition-colors">
                              TAP TO ACTIVATE
                            </span>
                          </div>
                        </>
                      )}

                      {webcamActive && (
                        <>
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 z-10">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between">
                            <span className="text-[8px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded">
                              LIVE
                            </span>
                            <X size={14} className="text-white/80 hover:text-white transition-colors" />
                          </div>
                        </>
                      )}

                      {webcamError && (
                        <div className="absolute inset-0 bg-red-500/10 border border-red-500/30 flex flex-col items-center justify-center gap-1">
                          <X size={20} className="text-red-500" />
                          <span className="text-[8px] font-mono text-red-400">
                            {webcamError}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                        <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                        <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                    </div>
                    <div className="p-3 border border-white/10 rounded-lg mt-4">
                        <p className="text-[10px] text-gray-400 font-mono leading-tight">
                            {webcamActive
                              ? '"Recording active. Speak naturally—your truth is encrypted."'
                              : '"AI Insight: You mention \'anxiety\' most often on Sunday evenings. Let\'s explore this pattern."'
                            }
                        </p>
                    </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-white/30 mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
             </div>
          </div>
        </div>


        {/* SECTION 4: TESTIMONIALS (Centered Quotes) */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] text-center max-w-3xl px-6
             ${activeSection === 3 ? 'opacity-100 translate-y-0 blur-0' :
               activeSection < 3 ? 'opacity-0 translate-y-20 blur-sm' : 'opacity-0 -translate-y-20 blur-sm pointer-events-none'}`}>

          <div className="mb-12">
            <div className="text-6xl font-serif italic text-white/10 mb-4">"</div>
            <h3 className="text-2xl md:text-4xl font-light leading-tight">
              I finally understood why I was sabotaging my growth. The AI identified the pattern I was repeating for 5 years.
            </h3>
            <div className="mt-8 flex flex-col items-center gap-2">
               <span className="font-bold tracking-widest uppercase text-sm">Matthew</span>
               <span className="text-xs font-mono text-gray-500">24, EARLY ADOPTER</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 opacity-50">
             <div>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-[10px] uppercase tracking-wider">Better Awareness</div>
             </div>
             <div>
                <div className="text-2xl font-bold">5k+</div>
                <div className="text-[10px] uppercase tracking-wider">Active Users</div>
             </div>
             <div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-[10px] uppercase tracking-wider">App Rating</div>
             </div>
          </div>
        </div>


        {/* SECTION 5: CTA */}
        <div className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] text-center max-w-xl px-6
             ${activeSection === 4 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-20 blur-sm pointer-events-none'}`}>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Start your<br/>evolution.
          </h2>

          <p className="text-gray-400 mb-10">
            Imagine being 50 and watching your honest journey unfold.<br/>
            That's the power of Chapters.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              <AppleIcon size={24} />
              Download on App Store
            </button>

            <div className="text-xs font-mono text-gray-500 mt-4 space-y-1">
              <p>7-DAY FREE TRIAL • $9.99/MONTH</p>
              <p>CANCEL ANYTIME • 100% PRIVATE</p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer / Copyright - Only visible on last slide slightly */}
      <footer className={`fixed bottom-8 w-full transition-opacity duration-500
        ${activeSection === 4 ? 'opacity-100' : 'opacity-0'}`}>
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

export default ChaptersLanding;
