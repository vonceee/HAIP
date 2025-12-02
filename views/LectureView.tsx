
import React, { useState, useEffect, useRef } from 'react';
import { Lecture, HazardTopic } from '../types';
import { ArrowLeft, BrainCircuit, Gamepad2, Clock, ChevronRight, ChevronLeft, Target, Shield, Play, AlertTriangle, Zap, Waves, Maximize, Minimize } from 'lucide-react';
import { QuizComponent } from '../components/QuizComponent';
import { EarthquakeGame } from '../components/games/EarthquakeGame';
import { FloodGame } from '../components/games/FloodGame';

interface LectureViewProps {
  lecture: Lecture;
  onBack: () => void;
}

// Game-like visual themes based on topic
const THEME_STYLES: Record<HazardTopic | 'General', {
  bgGradient: string;
  accentColor: string;
  buttonBg: string;
  buttonHover: string;
  icon: React.ElementType;
  glow: string;
}> = {
  'Earthquake': {
    bgGradient: 'from-orange-950 via-slate-900 to-slate-950',
    accentColor: 'text-orange-500',
    buttonBg: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-500',
    icon: ActivityIcon,
    glow: 'shadow-orange-500/20'
  },
  'Flood': {
    bgGradient: 'from-blue-950 via-slate-900 to-slate-950',
    accentColor: 'text-cyan-400',
    buttonBg: 'bg-cyan-600',
    buttonHover: 'hover:bg-cyan-500',
    icon: Waves,
    glow: 'shadow-cyan-500/20'
  },
  'Volcano': {
    bgGradient: 'from-red-950 via-slate-900 to-slate-950',
    accentColor: 'text-red-500',
    buttonBg: 'bg-red-600',
    buttonHover: 'hover:bg-red-500',
    icon: AlertTriangle,
    glow: 'shadow-red-500/20'
  },
  'General': {
    bgGradient: 'from-slate-900 via-slate-800 to-black',
    accentColor: 'text-emerald-400',
    buttonBg: 'bg-emerald-600',
    buttonHover: 'hover:bg-emerald-500',
    icon: Shield,
    glow: 'shadow-emerald-500/20'
  }
};

function ActivityIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  );
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, onBack }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset state when lecture changes
  useEffect(() => {
    setActiveSectionIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  // Handle fullscreen change events (e.g., ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Request fullscreen on the container ref instead of the whole document
      // This hides the global Header and Footer automatically
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const activeSection = lecture.sections[activeSectionIndex];
  const isFirstSection = activeSectionIndex === 0;
  const isLastSection = activeSectionIndex === lecture.sections.length - 1;
  const progressPercent = ((activeSectionIndex + 1) / lecture.sections.length) * 100;

  const theme = THEME_STYLES[lecture.topic] || THEME_STYLES.General;
  const TopicIcon = theme.icon;

  const handleNext = () => {
    if (!isLastSection) {
      setActiveSectionIndex(prev => prev + 1);
      // If we are in fullscreen, the container is the scrollable element
      if (isFullscreen && containerRef.current) {
         containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const interactiveEl = document.getElementById('interactive-section');
      if (interactiveEl) interactiveEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (!isFirstSection) {
      setActiveSectionIndex(prev => prev - 1);
      if (isFullscreen && containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // --- MISSION BRIEFING SCREEN (START MENU) ---
  if (showStartMenu) {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br ${theme.bgGradient} text-white overflow-hidden`}>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={lecture.imageUrl} 
            alt="Background" 
            className="w-full h-full object-cover filter blur-sm scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col md:flex-row gap-12 items-center animate-in fade-in zoom-in duration-500">
          
          {/* Left Panel: Visual & Title */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className={`inline-flex items-center px-4 py-1.5 rounded border border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-sm tracking-widest uppercase mb-4`}>
              <TopicIcon className="w-4 h-4 mr-2" />
              Mission Briefing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none" style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
              {lecture.title}
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed border-l-4 border-white/20 pl-6">
              {lecture.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Estimated Time</div>
                <div className="text-2xl font-bold flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-slate-400" />
                  {lecture.readTime}:00
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Difficulty</div>
                <div className={`text-2xl font-bold ${theme.accentColor}`}>
                  {lecture.difficulty.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Objectives & Action */}
          <div className="w-full md:w-96 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg}`} />
            
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
              <Target className="w-4 h-4 mr-2" /> Mission Goals
            </h3>
            
            <ul className="space-y-4 mb-10">
              {lecture.objectives.slice(0, 3).map((obj, i) => (
                <li key={i} className="flex items-start text-sm text-slate-200">
                  <div className={`mt-1 mr-3 w-1.5 h-1.5 rounded-full ${theme.buttonBg} shadow-[0_0_8px_currentColor]`} />
                  {obj}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowStartMenu(false)}
              className={`w-full group/btn relative overflow-hidden ${theme.buttonBg} ${theme.buttonHover} text-white font-black uppercase tracking-wider py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center`}
            >
              <span className="relative z-10 flex items-center">
                Start Mission <Play className="w-5 h-5 ml-2 fill-current" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-[-200%] transition-transform duration-700 ease-in-out" />
            </button>
            
            <button 
              onClick={onBack}
              className="w-full mt-4 text-xs text-slate-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              Abort Mission
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- STANDARD CONTENT VIEW (REVEALED AFTER START) ---
  return (
    <div 
      ref={containerRef}
      className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} text-white font-sans transition-colors duration-500 overflow-y-auto`}
    >
      <div className={`${isFullscreen ? 'w-full px-6' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'} py-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative`}>
        
        {/* Top Navigation Bar - Hidden in Fullscreen to provide immersive view */}
        {!isFullscreen && (
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={onBack}
              className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium"
            >
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 shadow-sm mr-3 group-hover:bg-white/10 group-hover:border-white/20">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-sm uppercase tracking-wide">Exit Mission</span>
            </button>

            <div className="flex items-center space-x-3">
               <button
                 onClick={toggleFullscreen}
                 className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                 title="Enter Fullscreen"
               >
                 <Maximize className="w-4 h-4" />
               </button>
              <div className={`px-3 py-1.5 bg-black/40 border border-white/10 rounded text-xs font-bold uppercase tracking-wider ${theme.accentColor}`}>
                {lecture.topic} Protocol
              </div>
            </div>
          </div>
        )}

        {/* Floating Controls for Fullscreen (Visible only when Fullscreen) */}
        {isFullscreen && (
           <button
             onClick={toggleFullscreen}
             className="fixed top-6 right-6 z-50 p-3 bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-lg group"
             title="Exit Fullscreen"
           >
             <Minimize className="w-5 h-5 group-hover:scale-90 transition-transform" />
           </button>
        )}

        <div className="bg-black/30 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/10 overflow-hidden mb-8 relative">
          
          {/* Progress Bar (Sticky at top of card) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-10">
            <div 
              className={`${theme.buttonBg} h-full transition-all duration-500 ease-out shadow-[0_0_10px_currentColor]`} 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Hero Section - Only visible on the first section */}
          {isFirstSection && (
            <div className="relative h-64 md:h-80">
              <img 
                src={lecture.imageUrl} 
                alt={lecture.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme.bgGradient.replace('from-', 'from-slate-900/100 ').replace('via-', 'via-slate-900/60 ').split(' ')[0]} flex items-end`}>
                <div className="p-8 md:p-12 text-white w-full">
                  <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight shadow-black drop-shadow-lg">{lecture.title}</h1>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="p-8 md:p-12 min-h-[400px]">
            
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className={`mr-3 w-8 h-8 rounded-lg ${theme.buttonBg} text-white flex items-center justify-center text-sm shadow-lg`}>
                    {activeSectionIndex + 1}
                  </span>
                  {activeSection.title}
              </h2>
              <span className="text-xs font-mono text-slate-500 uppercase">
                  SEC {activeSectionIndex + 1} / {lecture.sections.length}
              </span>
            </div>

            <div className="prose prose-lg prose-invert max-w-none mb-12 text-slate-300 leading-relaxed" key={activeSection.id}>
              <div dangerouslySetInnerHTML={{ __html: activeSection.content }} />
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between border-t border-white/10 pt-8">
              <button
                  onClick={handlePrev}
                  disabled={isFirstSection}
                  className={`flex items-center px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                    isFirstSection 
                    ? 'text-slate-600 cursor-not-allowed' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Prev
              </button>

              <button
                  onClick={handleNext}
                  className={`flex items-center px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    isLastSection
                    ? 'bg-slate-100 text-slate-900 hover:bg-white'
                    : `${theme.buttonBg} text-white ${theme.buttonHover}`
                  }`}
              >
                  {isLastSection ? 'Proceed to Training' : 'Next Sector'}
                  <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
            
        {/* Interactive Section */}
        <div id="interactive-section" className="space-y-8 pt-8 pb-20">
            {/* Section Divider */}
            <div className="flex items-center justify-center space-x-4 mb-4 opacity-50">
              <div className="h-px bg-white/20 w-full max-w-xs"></div>
              <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">Training Simulation</div>
              <div className="h-px bg-white/20 w-full max-w-xs"></div>
            </div>

            {/* Game Module */}
            {lecture.gameType !== 'none' && (
              <section className="scroll-mt-20">
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-1">
                  <div className="rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent">
                    <div className={`flex items-center ${theme.accentColor} mb-6 font-bold uppercase tracking-wider text-sm`}>
                      <Gamepad2 className="w-5 h-5 mr-2" />
                      Interactive Scenario
                    </div>
                    {lecture.gameType === 'earthquake-sim' && <EarthquakeGame />}
                    {lecture.gameType === 'flood-choice' && <FloodGame />}
                  </div>
                </div>
              </section>
            )}

            {/* Quiz Module */}
            {lecture.quiz && lecture.quiz.length > 0 && (
              <section className="scroll-mt-20">
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 border-l-4 border-emerald-500">
                  <div className="flex items-center text-emerald-400 mb-6 font-bold uppercase tracking-wider text-sm">
                    <BrainCircuit className="w-5 h-5 mr-2" />
                    Knowledge Certification
                  </div>
                  <QuizComponent questions={lecture.quiz} />
                </div>
              </section>
            )}
        </div>
      </div>
    </div>
  );
};
