
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Lecture, HazardTopic } from '../types';
import { ArrowLeft, BrainCircuit, Gamepad2, Clock, ChevronRight, ChevronLeft, Target, Shield, Play, AlertTriangle, Zap, Waves, Maximize, Minimize, X } from 'lucide-react';
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
    bgGradient: 'from-cyan-950 via-blue-900 to-slate-900',
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

type SlideType = 'content' | 'dashboard' | 'final-quiz';

interface Slide {
  type: SlideType;
  title: string;
  data?: any;
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, onBack }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null); // State for Image Modal
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentScrollRef = useRef<HTMLDivElement>(null);

  // Construct Virtual Slides Array
  const slides = useMemo(() => {
    const s: Slide[] = lecture.sections.map((section, index) => ({
      type: index === 0 ? 'dashboard' : 'content',
      title: section.title,
      data: section
    }));
    
    // Add Final Quiz Slide if it exists
    if (lecture.finalQuiz && lecture.finalQuiz.length > 0) {
      s.push({
        type: 'final-quiz',
        title: 'Certification Exam',
        data: lecture.finalQuiz
      });
    }

    return s;
  }, [lecture]);

  // Reset state when lecture changes
  useEffect(() => {
    setActiveSlideIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  // Scroll to top when active slide changes
  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [activeSlideIndex]);

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

  // Handle clicks on images inside the dangerouslySetInnerHTML content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // Check if the clicked element is an image with the specific class
    if (target.tagName === 'IMG' && target.classList.contains('zoomable-image')) {
      const img = target as HTMLImageElement;
      setPreviewImage(img.src);
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
    // Dynamic styling for long titles
    const titleSize = lecture.title.length > 20 ? "text-3xl sm:text-4xl md:text-6xl" : "text-4xl sm:text-5xl md:text-7xl";
    
    return (
      <div className={`fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br ${theme.bgGradient} text-white`} ref={containerRef}>
        {/* Fullscreen Toggle for Start Menu */}
        <button 
          onClick={toggleFullscreen} 
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 bg-black/40 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all shadow-lg group"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
           {isFullscreen ? (
             <Minimize className="w-6 h-6 group-hover:scale-90 transition-transform" />
           ) : (
             <Maximize className="w-6 h-6 group-hover:scale-110 transition-transform" />
           )}
        </button>

        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <img src={lecture.imageUrl} alt="Background" className="w-full h-full object-cover filter blur-sm scale-110 animate-pulse" style={{ animationDuration: '10s' }}/>
        </div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] pointer-events-none" />

        {/* Content Wrapper for Scroll */}
        <div className="relative min-h-full flex items-center justify-center p-6">
          <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-in fade-in zoom-in duration-500 py-10 lg:py-0">
            
            {/* Mission Details (Left) */}
            <div className="flex-1 text-center lg:text-left space-y-6 w-full">
              <div className={`inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-xs md:text-sm tracking-widest uppercase mb-2 shadow-lg`}>
                <TopicIcon className="w-4 h-4 mr-2" />
                Mission Protocol: {lecture.topic}
              </div>
              
              <h1 className={`${titleSize} font-black uppercase tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]`}>
                {lecture.title}
              </h1>
              
              <p className="text-slate-200 text-base md:text-xl font-light leading-relaxed border-l-4 border-white/20 pl-6 bg-gradient-to-r from-black/40 to-transparent p-2 rounded-r-lg backdrop-blur-sm">
                {lecture.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">Duration</div>
                  <div className="text-xl font-bold flex items-center text-white">
                    <Clock className="w-4 h-4 mr-2 text-slate-400" />
                    {lecture.readTime}:00
                  </div>
                </div>
                <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">Difficulty</div>
                  <div className={`text-xl font-bold ${theme.accentColor}`}>
                    {lecture.difficulty.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card (Right) - Displays Competencies */}
            <div className="w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg}`} />
              
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                <Target className="w-4 h-4 mr-2" /> 
                Mission Competencies
              </h3>
              
              <ul className="space-y-4 mb-10">
                {lecture.competencies.slice(0, 3).map((comp, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-200">
                    <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full ${theme.buttonBg} shadow-[0_0_8px_currentColor] flex-shrink-0`} />
                    <span className="leading-snug">{comp}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                   if (!document.fullscreenElement && containerRef.current) {
                      containerRef.current.requestFullscreen().catch(() => {});
                   }
                   setShowStartMenu(false);
                }}
                className={`w-full group/btn relative overflow-hidden ${theme.buttonBg} ${theme.buttonHover} text-white font-black uppercase tracking-wider py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center`}
              >
                <span className="relative z-10 flex items-center">
                  Initialize <Play className="w-5 h-5 ml-2 fill-current" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-[-200%] transition-transform duration-700 ease-in-out" />
              </button>
              
              <button onClick={onBack} className="w-full mt-4 text-[10px] text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold">
                Abort Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SLIDE BASED CONTENT VIEW ---
  return (
    <div 
      ref={containerRef}
      className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden`}
    >
        {/* IMAGE PREVIEW MODAL */}
        {previewImage && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setPreviewImage(null)}>
             <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                <X className="w-8 h-8" />
             </button>
             <img 
               src={previewImage} 
               alt="Preview" 
               className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
             />
          </div>
        )}

        {/* TOP BAR */}
        {!isFullscreen && (
          <div className="flex-none flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/20 border-b border-white/5 backdrop-blur-sm z-20">
            <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 shadow-sm mr-2 sm:mr-3 group-hover:bg-white/10">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wide hidden sm:inline">Exit Mission</span>
              <span className="text-xs uppercase tracking-wide sm:hidden">Exit</span>
            </button>

            <div className="flex items-center space-x-3">
               <button onClick={toggleFullscreen} className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white" title="Fullscreen">
                 <Maximize className="w-4 h-4" />
               </button>
              <div className={`px-3 py-1 bg-black/40 border border-white/10 rounded text-[10px] font-bold uppercase tracking-wider ${theme.accentColor}`}>
                {lecture.topic} <span className="hidden sm:inline">Protocol</span>
              </div>
            </div>
          </div>
        )}

        {/* FULLSCREEN CONTROLS */}
        {isFullscreen && (
           <button onClick={toggleFullscreen} className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-lg group">
             <Minimize className="w-5 h-5 group-hover:scale-90 transition-transform" />
           </button>
        )}

        {/* PROGRESS BAR */}
        <div className="h-1 bg-white/5 w-full flex-none">
          <div 
            className={`h-full ${theme.buttonBg} transition-all duration-300 shadow-[0_0_10px_currentColor]`} 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* MAIN CONTENT AREA */}
        <div 
           className={`flex-1 overflow-y-auto w-full mx-auto p-4 sm:p-6 lg:p-8 custom-scrollbar ${isFullscreen ? 'w-full px-8 lg:px-12' : 'max-w-[90%] xl:max-w-[1600px]'}`}
           ref={contentScrollRef}
           onClick={handleContentClick} // Event Delegation for content clicks
        >
          {activeSlide.type === 'dashboard' ? (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-min">
                {/* Top Left: Learning Objectives */}
                <div className="bg-black/20 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm lg:col-span-1 h-full overflow-y-auto">
                    <h2 className={`text-2xl sm:text-3xl font-black uppercase mb-6 ${theme.accentColor} tracking-tight`}>
                       {activeSlide.title}
                    </h2>
                    <div 
                      className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-slate-300 prose-li:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: activeSlide.data.content }}
                    />
                </div>

                {/* Right Column: Refresher Quiz */}
                <div className="lg:row-span-2 h-full min-h-[400px]">
                   <QuizComponent questions={lecture.refresherQuiz || []} title="Refresher Quiz" />
                </div>

                {/* Bottom Left: Simulation */}
                <div className="bg-black/30 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-sm relative overflow-hidden flex flex-col h-full min-h-[300px]">
                    <div className="flex items-center justify-between mb-4 z-10">
                      <h3 className="text-xl font-bold text-white flex items-center">
                         <Gamepad2 className={`w-5 h-5 mr-2 ${theme.accentColor}`} />
                         Simulation
                      </h3>
                      <span className="text-[10px] uppercase font-bold bg-white/10 px-2 py-1 rounded text-slate-400">Interactive</span>
                    </div>
                    
                    <div className="flex-1 relative z-10">
                       {lecture.gameType === 'earthquake-sim' && <EarthquakeGame />}
                       {lecture.gameType === 'flood-choice' && <FloodGame />}
                       {lecture.gameType === 'none' && (
                         <div className="flex items-center justify-center h-full text-slate-500 text-sm italic">
                           No simulation required for this protocol.
                         </div>
                       )}
                    </div>
                </div>
             </div>
          ) : activeSlide.type === 'final-quiz' ? (
             <div className="w-full h-full flex flex-col items-center justify-center max-w-5xl mx-auto">
                 <div className="w-full h-full max-h-[800px]">
                    <QuizComponent questions={activeSlide.data} title="Certification Exam" />
                 </div>
             </div>
          ) : (
            /* Standard Content Slide */
             <div className="flex flex-col h-full">
                {/* Header (Only on non-fullscreen or compact mode logic can go here, but we keep simple) */}
                <div className="flex items-center space-x-3 mb-6 sm:mb-8 opacity-50">
                   <div className={`w-2 h-2 rounded-full ${theme.buttonBg}`}></div>
                   <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                     Section {activeSlideIndex} / {slides.length - 1}
                   </span>
                </div>

                <div 
                  className="prose prose-invert prose-xl md:prose-2xl max-w-none w-full flex-1"
                  dangerouslySetInnerHTML={{ __html: activeSlide.data.content }}
                />
             </div>
          )}
        </div>

        {/* NAVIGATION FOOTER */}
        <div className="flex-none p-4 sm:p-6 bg-black/20 border-t border-white/5 backdrop-blur-sm z-20">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={isFirstSlide}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all ${
                isFirstSlide 
                  ? 'opacity-0 pointer-events-none' 
                  : 'bg-white/5 hover:bg-white/10 text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex space-x-1.5 sm:space-x-2">
              {slides.map((_, idx) => (
                 <div 
                   key={idx}
                   className={`h-1.5 rounded-full transition-all duration-300 ${
                     idx === activeSlideIndex 
                       ? `w-6 sm:w-8 ${theme.buttonBg}` 
                       : 'w-1.5 sm:w-2 bg-white/20'
                   }`}
                 />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all shadow-lg ${theme.buttonBg} ${theme.buttonHover} text-white`}
            >
              <span className="hidden sm:inline">{isLastSlide ? 'Finish Mission' : 'Next Section'}</span>
              <span className="sm:hidden">{isLastSlide ? 'Finish' : 'Next'}</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
    </div>
  );
};
