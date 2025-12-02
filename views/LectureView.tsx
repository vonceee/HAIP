
import React, { useState, useEffect, useRef, useMemo } from 'react';
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
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  );
}

type SlideType = 'content' | 'game' | 'quiz';

interface Slide {
  type: SlideType;
  title: string;
  data?: any;
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, onBack }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Construct Virtual Slides Array
  const slides = useMemo(() => {
    const s: Slide[] = lecture.sections.map(section => ({
      type: 'content',
      title: section.title,
      data: section
    }));

    if (lecture.gameType !== 'none') {
      s.push({
        type: 'game',
        title: 'Simulation Protocol',
      });
    }

    if (lecture.quiz && lecture.quiz.length > 0) {
      s.push({
        type: 'quiz',
        title: 'Knowledge Certification',
      });
    }
    return s;
  }, [lecture]);

  // Reset state when lecture changes
  useEffect(() => {
    setActiveSlideIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const theme = THEME_STYLES[lecture.topic] || THEME_STYLES.General;
  const TopicIcon = theme.icon;

  const activeSlide = slides[activeSlideIndex];
  const isFirstSlide = activeSlideIndex === 0;
  const isLastSlide = activeSlideIndex === slides.length - 1;
  const progressPercent = ((activeSlideIndex + 1) / slides.length) * 100;

  const handleNext = () => {
    if (!isLastSlide) {
      setActiveSlideIndex(prev => prev + 1);
    } else {
      onBack(); // "Finish" action
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      setActiveSlideIndex(prev => prev - 1);
    }
  };

  // --- MISSION BRIEFING SCREEN ---
  if (showStartMenu) {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br ${theme.bgGradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <img src={lecture.imageUrl} alt="Background" className="w-full h-full object-cover filter blur-sm scale-110"/>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />

        <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col md:flex-row gap-12 items-center animate-in fade-in zoom-in duration-500">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className={`inline-flex items-center px-4 py-1.5 rounded border border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-sm tracking-widest uppercase mb-4`}>
              <TopicIcon className="w-4 h-4 mr-2" />
              Mission Briefing
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none" style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}>{lecture.title}</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed border-l-4 border-white/20 pl-6">{lecture.description}</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Estimated Time</div>
                <div className="text-2xl font-bold flex items-center"><Clock className="w-5 h-5 mr-2 text-slate-400" />{lecture.readTime}:00</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Difficulty</div>
                <div className={`text-2xl font-bold ${theme.accentColor}`}>{lecture.difficulty.toUpperCase()}</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-96 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg}`} />
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center"><Target className="w-4 h-4 mr-2" /> Mission Goals</h3>
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
              <span className="relative z-10 flex items-center">Start Mission <Play className="w-5 h-5 ml-2 fill-current" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-[-200%] transition-transform duration-700 ease-in-out" />
            </button>
            <button onClick={onBack} className="w-full mt-4 text-xs text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Abort Mission</button>
          </div>
        </div>
      </div>
    );
  }

  // --- SLIDE BASED CONTENT VIEW ---
  return (
    <div 
      ref={containerRef}
      className={`h-screen w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden`}
    >
        {/* TOP BAR */}
        {!isFullscreen && (
          <div className="flex-none flex items-center justify-between px-6 py-4 bg-black/20 border-b border-white/5 backdrop-blur-sm z-20">
            <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 shadow-sm mr-3 group-hover:bg-white/10">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wide">Exit Mission</span>
            </button>

            <div className="flex items-center space-x-3">
               <button onClick={toggleFullscreen} className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white" title="Fullscreen">
                 <Maximize className="w-4 h-4" />
               </button>
              <div className={`px-3 py-1 bg-black/40 border border-white/10 rounded text-[10px] font-bold uppercase tracking-wider ${theme.accentColor}`}>
                {lecture.topic} Protocol
              </div>
            </div>
          </div>
        )}

        {/* FULLSCREEN CONTROLS */}
        {isFullscreen && (
           <button onClick={toggleFullscreen} className="fixed top-6 right-6 z-50 p-3 bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-lg group">
             <Minimize className="w-5 h-5 group-hover:scale-90 transition-transform" />
           </button>
        )}

        {/* MAIN STAGE - FLEX 1 to fill remaining height */}
        <div className="flex-1 relative flex flex-col justify-center items-center p-4 md:p-6 overflow-hidden">
          
          <div className="w-full max-w-5xl h-full max-h-full flex flex-col bg-black/30 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/10 relative overflow-hidden">
             
             {/* HEADER BAR INSIDE CARD */}
             <div className="flex-none p-6 md:p-8 flex justify-between items-center border-b border-white/5 bg-white/5 relative">
                {/* PROGRESS BAR */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
                   <div className={`${theme.buttonBg} h-full transition-all duration-500 ease-out shadow-[0_0_10px_currentColor]`} style={{ width: `${progressPercent}%` }} />
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center truncate">
                   <span className={`mr-3 w-8 h-8 rounded-lg ${theme.buttonBg} text-white flex items-center justify-center text-sm shadow-lg flex-shrink-0`}>
                     {activeSlideIndex + 1}
                   </span>
                   {activeSlide.title}
                </h2>
                <span className="text-xs font-mono text-slate-500 uppercase flex-shrink-0 ml-4">
                   SEC {activeSlideIndex + 1} / {slides.length}
                </span>
             </div>

             {/* SCROLLABLE CONTENT AREA */}
             <div className="flex-1 overflow-y-auto p-6 md:p-8 relative">
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                  
                  {/* CONTENT SLIDE */}
                  {activeSlide.type === 'content' && (
                    <div className="prose prose-lg prose-invert max-w-none text-slate-300 leading-relaxed flex-1 flex flex-col justify-center">
                      <div dangerouslySetInnerHTML={{ __html: activeSlide.data.content }} />
                    </div>
                  )}

                  {/* GAME SLIDE */}
                  {activeSlide.type === 'game' && (
                    <div className="flex-1 flex flex-col justify-center">
                       <div className="rounded-xl p-4 bg-gradient-to-b from-white/5 to-transparent h-full flex flex-col">
                        <div className={`flex items-center ${theme.accentColor} mb-6 font-bold uppercase tracking-wider text-sm`}>
                          <Gamepad2 className="w-5 h-5 mr-2" />
                          Interactive Scenario
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          {lecture.gameType === 'earthquake-sim' && <div className="w-full"><EarthquakeGame /></div>}
                          {lecture.gameType === 'flood-choice' && <div className="w-full"><FloodGame /></div>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* QUIZ SLIDE */}
                  {activeSlide.type === 'quiz' && (
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="rounded-xl p-4 border-l-4 border-emerald-500 h-full flex flex-col">
                        <div className="flex items-center text-emerald-400 mb-6 font-bold uppercase tracking-wider text-sm">
                          <BrainCircuit className="w-5 h-5 mr-2" />
                          Knowledge Certification
                        </div>
                         <div className="flex-1 flex items-center justify-center w-full">
                           <div className="w-full max-w-2xl">
                             <QuizComponent questions={lecture.quiz!} />
                           </div>
                         </div>
                      </div>
                    </div>
                  )}
                </div>
             </div>

             {/* FOOTER NAV CONTROLS */}
             <div className="flex-none p-6 border-t border-white/5 flex items-center justify-between bg-black/20">
                <button
                    onClick={handlePrev}
                    disabled={isFirstSlide}
                    className={`flex items-center px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                      isFirstSlide 
                      ? 'text-slate-700 cursor-not-allowed' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Prev
                </button>

                <button
                    onClick={handleNext}
                    className={`flex items-center px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                      isLastSlide
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : `${theme.buttonBg} text-white ${theme.buttonHover}`
                    }`}
                >
                    {isLastSlide ? 'Complete Mission' : 'Next Sector'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                </button>
             </div>
          </div>
        </div>
    </div>
  );
};
