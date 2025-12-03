
import { Lecture, EQStep, FloodScenario } from './types';

export const LECTURES: Lecture[] = [
  {
    id: '1',
    title: 'Earthquake Hazards & Effects',
    description: 'A comprehensive guide to primary and secondary earthquake hazards, including ground shaking, liquefaction, and tsunamis.',
    topic: 'Earthquake',
    imageUrl: 'https://picsum.photos/seed/quake/800/400',
    readTime: 10,
    difficulty: 'Intermediate',
    objectives: [
      'Identify various potential earthquake hazards',
      'Analyze the effects of different earthquake hazards',
      'Understand the difference between primary and secondary hazards',
      'Recognize real-world examples of historical earthquake damage'
    ],
    competencies: [
      'Hazard Identification',
      'Risk Analysis',
      'Disaster Resilience'
    ],
    gameType: 'earthquake-sim',
    sections: [
      {
        id: 'objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Course Objectives</h2>
          <div class="bg-white/5 p-6 rounded-xl border border-white/10">
            <ul class="space-y-4 text-slate-300">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Understand the difference between primary and secondary hazards
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Recognize real-world examples of historical earthquake damage
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Learn safety protocols for before, during, and after an earthquake
              </li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center justify-center min-h-full space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 py-4">
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-2 group cursor-pointer hover:scale-105 transition-transform duration-500">
              <!-- Animated Visual Icon (Seismic Pulse) -->
              <div class="relative flex-shrink-0">
                <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/40 transition-all duration-500"></div>
                <svg class="w-16 h-16 md:w-20 md:h-20 text-orange-500 transform group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase tracking-tighter drop-shadow-2xl">
                Earthquakes
              </h3>
            </div>
            
            <div class="max-w-6xl mx-auto px-4 w-full">
               <!-- Primary Content Card -->
               <div class="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.15)]">
                  <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] group-hover:bg-orange-500/20 transition-all"></div>
                  
                  <p class="text-2xl md:text-3xl text-slate-100 font-light leading-snug relative z-10 text-center mb-6">
                    <span class="font-black text-orange-400">Earthquakes</span> are among the most destructive natural hazards on Earth.
                  </p>
                  
                  <p class="text-xl md:text-2xl text-slate-300 font-light leading-snug relative z-10 text-center mb-8">
                    Their impacts go beyond ground shaking—they trigger a chain of <span class="font-bold text-white border-b-2 border-orange-500/50">secondary hazards</span> that pose immediate threats to human life, infrastructure, and the environment.
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
                     <div class="bg-black/30 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/40 transition-all group/badge cursor-default hover:-translate-y-2 duration-300 hover:bg-orange-500/10 hover:shadow-lg">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2">
                           <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                           Predict
                        </div>
                        <div class="text-slate-300 text-sm text-center leading-tight">Analyze effects to anticipate secondary hazards before they strike.</div>
                     </div>
                     <div class="bg-black/30 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/40 transition-all group/badge cursor-default hover:-translate-y-2 duration-300 delay-100 hover:bg-orange-500/10 hover:shadow-lg">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2">
                           <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           Minimize
                        </div>
                        <div class="text-slate-300 text-sm text-center leading-tight">Implement safety protocols to drastically reduce casualties.</div>
                     </div>
                     <div class="bg-black/30 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/40 transition-all group/badge cursor-default hover:-translate-y-2 duration-300 delay-200 hover:bg-orange-500/10 hover:shadow-lg">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2">
                           <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                           Strengthen
                        </div>
                        <div class="text-slate-300 text-sm text-center leading-tight">Build resilient infrastructure to withstand future disasters.</div>
                     </div>
                  </div>
                  
                  <div class="flex justify-center opacity-80">
                      <div class="flex items-center space-x-2 bg-black/40 px-6 py-2 rounded-full border border-white/5">
                        <span class="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Reference</span>
                        <span class="text-orange-500 text-[10px] font-mono">PHIVOLCS (2023). Earthquake Hazards.</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        `
      },
      {
        id: 'primary',
        title: 'Primary Hazards',
        content: `
          <div class="flex flex-col space-y-8 animate-in fade-in duration-700 py-6">
            
            <div class="relative z-10">
              <h3 class="text-5xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Ground Shaking
              </h3>
              
              <div class="grid grid-cols-1 gap-6 items-center">
                 <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                    <p class="text-2xl text-slate-200 leading-relaxed mb-6 font-light">
                      The vibration of the ground caused by the sudden release of energy during an earthquake.
                    </p>
                    <div class="h-28 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden relative border border-white/10">
                       <style>
                          @keyframes seismic-scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                          }
                       </style>
                       <!-- Scrolling Wave Container -->
                       <div class="absolute inset-0 flex items-center w-[200%]" style="animation: seismic-scroll 3s linear infinite">
                          <svg class="w-1/2 h-full text-orange-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="0.8" vector-effect="non-scaling-stroke" />
                          </svg>
                          <svg class="w-1/2 h-full text-orange-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="0.8" vector-effect="non-scaling-stroke" />
                          </svg>
                       </div>
                       
                       <!-- Gradient Mask -->
                       <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-0"></div>

                       <!-- Badge -->
                       <span class="text-orange-500 font-mono text-xs z-10 bg-black/90 px-3 py-1.5 rounded border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center gap-2">
                          <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                          </span>
                          LIVE SEISMOGRAPH
                       </span>
                    </div>
                 </div>

                 <!-- New Detailed Content Section -->
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Card: Seismic Waves -->
                    <div class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                       <h4 class="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          Seismic Waves
                       </h4>
                       <ul class="space-y-4">
                          <li class="flex items-start">
                             <div class="bg-orange-500/20 px-2 py-1 rounded mr-3 text-orange-400 font-bold text-[10px] w-16 text-center mt-0.5">P-WAVES</div>
                             <p class="text-slate-300 text-sm">Primary waves. Fastest, compressional motion. Usually felt as a sudden jolt.</p>
                          </li>
                          <li class="flex items-start">
                             <div class="bg-red-500/20 px-2 py-1 rounded mr-3 text-red-400 font-bold text-[10px] w-16 text-center mt-0.5">S-WAVES</div>
                             <p class="text-slate-300 text-sm">Secondary waves. Slower but stronger side-to-side motion. Causes significant damage.</p>
                          </li>
                          <li class="flex items-start">
                             <div class="bg-purple-500/20 px-2 py-1 rounded mr-3 text-purple-400 font-bold text-[10px] w-16 text-center mt-0.5">SURFACE</div>
                             <p class="text-slate-300 text-sm">Travel along the Earth's surface. The most destructive rolling motion.</p>
                          </li>
                       </ul>
                    </div>

                    <!-- Card: Intensity Factors -->
                    <div class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                       <h4 class="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                          Intensity Factors
                       </h4>
                       <div class="space-y-5">
                          <div>
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Magnitude</span>
                                <span class="text-orange-500">Energy Released</span>
                             </div>
                             <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-3/4"></div></div>
                             <p class="text-slate-500 text-[10px] mt-1">The total amount of energy released at the source.</p>
                          </div>
                          <div>
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Distance</span>
                                <span class="text-orange-500">Proximity</span>
                             </div>
                             <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-1/2"></div></div>
                             <p class="text-slate-500 text-[10px] mt-1">Closer to the epicenter = Stronger shaking.</p>
                          </div>
                          <div>
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Soil Type</span>
                                <span class="text-red-500 animate-pulse">Critical Risk</span>
                             </div>
                             <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"><div class="bg-red-500 h-full w-full"></div></div>
                             <p class="text-slate-500 text-[10px] mt-1">Soft soil amplifies shaking and liquefaction risk.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'effects-analysis',
        title: 'Effects Analysis',
        content: `
          <div class="flex flex-col h-full justify-center">
            <h3 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-12 text-center uppercase drop-shadow-sm">
              Effects Analysis
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-stretch">
              <!-- Card 1: Structural -->
              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-orange-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
                 
                 <!-- Icon -->
                 <div class="mb-8 text-orange-500/80 group-hover:text-orange-400 transition-colors transform group-hover:scale-110 group-hover:rotate-3 duration-500 origin-bottom-left">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0zM12 9a2 2 0 100-4 2 2 0 000 4z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21h6" />
                    </svg>
                 </div>

                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Structural<br/>Damage</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Weakly designed buildings, bridges, and houses collapse, especially on <span class="text-orange-300 font-bold">soft soils</span>.</p>
                 
                 <div class="mt-6 pt-6 border-t border-white/5 flex items-center text-xs font-bold text-orange-500 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span> Critical Risk
                 </div>
              </div>

              <!-- Card 2: Infrastructure -->
              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-red-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>
                 
                 <!-- Icon -->
                 <div class="mb-8 text-red-500/80 group-hover:text-red-400 transition-colors transform group-hover:skew-x-6 duration-500 origin-center">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>

                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Infrastructure<br/>Disruption</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Roads crack, utilities fail, and <span class="text-red-300 font-bold">transportation networks</span> are cut off.</p>

                 <div class="mt-6 pt-6 border-t border-white/5 flex items-center text-xs font-bold text-red-500 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                    <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span> System Failure
                 </div>
              </div>

              <!-- Card 3: Psychological -->
              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-purple-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                 
                 <!-- Icon -->
                 <div class="mb-8 text-purple-500/80 group-hover:text-purple-400 transition-colors transform group-hover:scale-105 duration-500 animate-[pulse_3s_ease-in-out_infinite]">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                 </div>

                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Psychological<br/>Stress</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Fear and trauma affect survivors <span class="text-purple-300 font-bold">long after</span> the earthquake.</p>

                 <div class="mt-6 pt-6 border-t border-white/5 flex items-center text-xs font-bold text-purple-500 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span> Long-term Impact
                 </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'ground-rupture',
        title: 'Ground Rupture',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-200px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <!-- Left Column: Information (Fixed/Sticky) -->
             <div class="flex flex-col justify-center h-full lg:px-12 py-2">
                <div class="space-y-6">
                    <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase leading-none">Ground Rupture</h3>
                    <p class="text-xl text-slate-300 font-light leading-relaxed">
                      The visible tearing or displacement of the ground surface along an active fault during an earthquake.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-4">
                       <div class="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                          <div class="text-orange-400 font-bold text-xs uppercase mb-1">Vertical Offset</div>
                          <div class="text-slate-400 text-[10px] leading-tight">One side lifts higher than the other, creating scarps.</div>
                       </div>
                       <div class="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                          <div class="text-orange-400 font-bold text-xs uppercase mb-1">Horizontal Shift</div>
                          <div class="text-slate-400 text-[10px] leading-tight">Ground moves sideways, severing roads and lines.</div>
                       </div>
                    </div>

                    <div class="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 class="text-sm font-bold text-orange-400 mb-3 uppercase tracking-wide flex items-center">
                           <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                           Effects Analysis
                        </h4>
                        <ul class="space-y-2 text-slate-300 text-sm">
                          <li class="flex items-start">
                             <span class="text-red-500 mr-2">►</span>
                             <span><strong>Structural Tearing:</strong> Foundations split apart.</span>
                          </li>
                          <li class="flex items-start">
                             <span class="text-red-500 mr-2">►</span>
                             <span><strong>Uninhabitable Zones:</strong> Permanent no-build zones.</span>
                          </li>
                          <li class="flex items-start">
                             <span class="text-red-500 mr-2">►</span>
                             <span><strong>Economic Loss:</strong> Relocation costs increase.</span>
                          </li>
                        </ul>
                    </div>

                    <div class="bg-orange-950/30 border-l-4 border-orange-500 p-3 rounded-r-xl">
                        <p class="text-orange-200 text-xs font-bold uppercase mb-1">Safety Protocol</p>
                        <p class="text-slate-400 text-xs">Strict adherence to the <span class="text-white font-bold">5-meter buffer zone</span> on both sides of an active fault.</p>
                    </div>
                </div>
             </div>

             <!-- Right Column: Documented Cases (Manual Scroll) -->
             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <!-- Item 1: Bohol -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/mz2zqMV.jpeg" alt="Bohol Rupture" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Ground rupture in Bohol following the 2013 earthquake.</p>
                         <a href="https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness.pdf" target="_blank" class="text-[10px] text-orange-500 hover:text-orange-400 uppercase tracking-wider flex items-center">
                           View Source <svg class="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                         </a>
                      </div>
                   </div>

                   <!-- Item 2: North Cotabato -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/nSEuU4D.jpeg" alt="Cotabato Rupture" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Surface rupture observed in North Cotabato after the 2019 earthquake.</p>
                         <p class="text-[10px] text-slate-500">Source: YouTube Documentation</p>
                      </div>
                   </div>

                   <!-- Item 3: Surigao -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/MkMEKQH.jpeg" alt="Surigao Cracks" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Cracks in the road caused by ground rupture in Surigao during the 2017 earthquake.</p>
                         <a href="https://temblor.net/earthquake-insights/" target="_blank" class="text-[10px] text-orange-500 hover:text-orange-400 uppercase tracking-wider">Temblor.net Insights</a>
                      </div>
                   </div>

                   <!-- Item 4: Negros Oriental -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/lgVgC4n.jpeg" alt="Negros Fissure" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Extensive ground fissure in Negros Oriental after the 2012 earthquake.</p>
                         <p class="text-[10px] text-slate-500">Source: RPN Radio</p>
                      </div>
                   </div>

                   <!-- Item 5: Masbate -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/ApVeqLD.jpeg" alt="Masbate Damage" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Ground rupture damaging infrastructure in Masbate after the 2020 earthquake.</p>
                         <a href="https://www.researchgate.net/" target="_blank" class="text-[10px] text-orange-500 hover:text-orange-400 uppercase tracking-wider">ResearchGate Figure</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'liquefaction',
        title: 'Liquefaction',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-200px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-center h-full lg:px-12 py-6">
                <div class="space-y-6">
                    <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 mb-6 uppercase">Liquefaction</h3>
                    <p class="text-2xl text-slate-300 mb-8 font-light">
                      The process where water-saturated, loose soil behaves like a liquid during intense shaking.
                    </p>

                    <!-- The Recipe for Liquefaction -->
                    <div class="grid grid-cols-3 gap-3 mb-8">
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors">
                        <div class="text-2xl mb-2">🏖️</div>
                        <div class="text-[10px] uppercase font-bold text-cyan-400 tracking-wide">Loose Soil</div>
                      </div>
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors">
                        <div class="text-2xl mb-2">💧</div>
                        <div class="text-[10px] uppercase font-bold text-cyan-400 tracking-wide">Water Saturation</div>
                      </div>
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors">
                        <div class="text-2xl mb-2">〰️</div>
                        <div class="text-[10px] uppercase font-bold text-cyan-400 tracking-wide">Intense Shaking</div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-cyan-950/30 border border-cyan-500/20 p-6 rounded-2xl group hover:border-cyan-500/40 transition-all">
                        <h4 class="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide">Critical Impacts</h4>
                        <ul class="space-y-3 text-slate-300 text-lg">
                          <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Building Instability: Structures sink or tilt.</li>
                          <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Underground Damage: Pipes burst due to soil movement.</li>
                          <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Economic Disruption: High recovery costs for industrial zones.</li>
                        </ul>
                      </div>

                      <div class="flex items-start space-x-4 bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/10">
                         <div class="bg-cyan-500/20 p-3 rounded-full flex-shrink-0">
                           <svg class="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                           </svg>
                         </div>
                         <div>
                             <h4 class="text-cyan-300 font-bold uppercase text-sm mb-1">Visual Indicator: Sand Boils</h4>
                             <p class="text-slate-400 text-sm">Water and sand ejected from the ground like miniature volcanoes during the shaking, a tell-tale sign of liquefaction.</p>
                         </div>
                      </div>
                    </div>
                </div>
             </div>

             <!-- Right Column: Documented Cases (Manual Scroll) -->
             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <!-- Item 1: Dagupan -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/ejDazPW.jpeg" alt="Dagupan Liquefaction" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Buildings sinking and tilting in Dagupan City following the 1990 Luzon earthquake.</p>
                         <a href="https://www.nzsee.org.nz/db/2011/043.pdf" target="_blank" class="text-[10px] text-cyan-500 hover:text-cyan-400 uppercase tracking-wider flex items-center">
                           View Report <svg class="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                         </a>
                      </div>
                   </div>

                   <!-- Item 2: Pampanga -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/XkdS1Sh.jpeg" alt="Sand Boils" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Evidence of liquefaction in the form of sand boils erupting from the ground in Pampanga.</p>
                         <a href="https://www.researchgate.net/" target="_blank" class="text-[10px] text-cyan-500 hover:text-cyan-400 uppercase tracking-wider">ResearchGate</a>
                      </div>
                   </div>

                   <!-- Item 3: Central Luzon -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/IZmT3AT.jpeg" alt="Bohol House Tilt" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">A house visibly tilted due to the ground softening underneath during the 2013 Bohol earthquake.</p>
                         <p class="text-[10px] text-slate-500">Source: Semantic Scholar</p>
                      </div>
                   </div>

                   <!-- Item 4: Niigata -->
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group cursor-pointer">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/bMTSWWs.jpeg" alt="Niigata Liquefaction" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Effects of soil liquefaction caused by the earthquake on apartment buildings.</p>
                         <a href="https://www.menard-asia.com/" target="_blank" class="text-[10px] text-cyan-500 hover:text-cyan-400 uppercase tracking-wider">Menard Asia</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'landslides',
        title: 'Landslides',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6">
                <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-stone-600 mb-6 uppercase">Landslides</h3>
                <p class="text-2xl text-slate-300 mb-8 font-light">
                   Downhill movement of rocks and soil triggered by ground shaking, especially in mountainous terrains.
                </p>
                
                <div class="grid grid-cols-1 gap-4">
                   <div class="bg-stone-900/50 border border-stone-700 p-4 rounded-xl">
                      <h4 class="font-bold text-stone-400 uppercase text-xs">Burial of Settlements</h4>
                      <p class="text-slate-300 text-sm">Entire villages can be buried, as seen in Luzon.</p>
                   </div>
                   <div class="bg-stone-900/50 border border-stone-700 p-4 rounded-xl">
                      <h4 class="font-bold text-stone-400 uppercase text-xs">Isolation</h4>
                      <p class="text-slate-300 text-sm">Blocked roads hinder rescue operations.</p>
                   </div>
                </div>
             </div>

             <div class="flex flex-col justify-center h-full lg:px-12">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQwdz27HmZeSAfVUjS-GdTjbwIkjcA-u7HZNLd0DkzUZZRQQp1knV2FBubTx8" alt="Landslide Example" class="w-full h-auto object-cover transition-opacity duration-700" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "NASA Earth Observatory / US Marine Corps This massive landslide covered the entire village of Guinsaugon."
                      </p>
                      <p class="text-[10px] text-stone-500 font-bold mt-1 uppercase tracking-widest">
                        Link: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQwdz27HmZeSAfVUjS-GdTjbwIkjcA-u7HZNLd0DkzUZZRQQp1knV2FBubTx8 
                      </p>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'tsunami',
        title: 'Tsunami',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6">
                <h3 class="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 uppercase">Tsunami</h3>
                <p class="text-2xl text-slate-300 mb-8 font-light">
                   A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                     <div class="bg-blue-500/20 p-3 rounded-full"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>
                     <div>
                       <h4 class="text-blue-300 font-bold">Coastal Inundation</h4>
                       <p class="text-slate-400 text-sm">Flooding destroys homes, ports, and infrastructure.</p>
                     </div>
                  </div>
                   <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                     <div class="bg-blue-500/20 p-3 rounded-full"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>
                     <div>
                       <h4 class="text-blue-300 font-bold">Loss of Lives</h4>
                       <p class="text-slate-400 text-sm">People near shorelines have little time to evacuate.</p>
                     </div>
                  </div>
                </div>
             </div>

             <div class="flex flex-col justify-center h-full lg:px-12">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                   <img src="https://picsum.photos/seed/tsunami/800/600" alt="Tsunami Example" class="w-full h-auto object-cover transition-opacity duration-700 bg-blue-900" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "The 1976 Moro Gulf Earthquake caused a tsunami that killed more than 8,000 people."
                      </p>
                      <p class="text-[10px] text-blue-500 font-bold mt-1 uppercase tracking-widest">
                        Ref: USGS (2021)
                      </p>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'fire-refs',
        title: 'Fire & Infra',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6">
                <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6 uppercase">Fire & Failures</h3>
                <p class="text-2xl text-slate-300 mb-8 font-light">
                   Secondary hazards caused by damaged gas lines, power systems, and industrial facilities.
                </p>
                
                <div class="bg-red-950/30 border border-red-500/20 p-6 rounded-2xl">
                   <ul class="space-y-4 text-slate-300">
                     <li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Urban Fires spread rapidly when water lines break.</li>
                     <li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Chemical leaks contaminate air and soil.</li>
                     <li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Fire-damaged areas require longer rebuilding.</li>
                   </ul>
                </div>
             </div>

             <div class="flex flex-col justify-center h-full lg:px-12">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                   <img src="https://picsum.photos/seed/fire/800/600" alt="Fire Example" class="w-full h-auto object-cover transition-opacity duration-700" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "The 1906 San Francisco Earthquake led to widespread fires causing more deaths than the quake."
                      </p>
                      <p class="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-widest">
                        Ref: USGS (2020)
                      </p>
                   </div>
                </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'r1',
        question: 'What is the sudden release of energy causing ground vibration called?',
        options: ['Tsunami', 'Earthquake', 'Landslide', 'Liquefaction'],
        correctAnswer: 1
      },
      {
        id: 'r2',
        question: 'Which of these is a PRIMARY earthquake hazard?',
        options: ['Fire', 'Tsunami', 'Ground Shaking', 'Landslide'],
        correctAnswer: 2
      },
      {
        id: 'r3',
        question: 'Liquefaction occurs when what type of soil loses strength?',
        options: ['Dry rock', 'Water-saturated loose soil', 'Clay', 'Solid bedrock'],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'q1',
        question: 'Your school is located near an active fault line. Scientists detect several minor tremors in the past week. As a student leader, what is the best action your class should take?',
        options: ['Ignore the tremors since they are small.', 'Wait for a government warning before acting.', 'Conduct a safety drill and check evacuation routes.', 'Continue regular activities since no major quake has happened yet.'],
        correctAnswer: 2
      },
      {
        id: 'q2',
        question: 'Barangay officials receive a report of unusual ground vibration without an identified source. What should they do first to forecast possible earthquake risks?',
        options: ['Check social media for rumors.', 'Wait for aftershocks.', 'Coordinate with PHIVOLCS to verify seismic data.', 'Immediately evacuate all residents without confirmation.'],
        correctAnswer: 2
      },
      {
        id: 'q3',
        question: 'A student reads an online post claiming a major earthquake will occur on a specific date. What is the most accurate way to validate this information?',
        options: ['Share the post to alert others.', 'Check PHIVOLCS or USGS for official forecasts.', 'Ask friends if they heard the same news.', 'Assume it\'s true since it went viral.'],
        correctAnswer: 1
      },
      {
        id: 'q4',
        question: 'An earthquake detection app shows a magnitude 4.0 tremor nearby, but your friends say they felt nothing. How can you determine if the report is accurate?',
        options: ['Delete the app for being unreliable.', 'Compare data from other official monitoring centers.', 'Believe your friends instead of the app.', 'Assume the app has a bug.'],
        correctAnswer: 1
      },
      {
        id: 'q5',
        question: 'After an earthquake, several areas near rivers experience liquefaction. What caused this phenomenon?',
        options: ['The river water overflowed due to heavy rain.', 'Strong shaking increased water pressure in loose soil.', 'The ground fault directly opened under the river.', 'Underground lava caused soil movement.'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        question: 'In a city built on reclaimed land, buildings suffer more damage during an earthquake than those on solid rock. What best explains this difference?',
        options: ['Reclaimed land has stronger soil.', 'Solid rock amplifies seismic waves.', 'Soft soil increases shaking intensity.', 'Both areas have equal risk.'],
        correctAnswer: 2
      },
      {
        id: 'q7',
        question: 'PHIVOLCS records a series of small tremors near a volcano over several weeks. What pattern could this indicate?',
        options: ['The volcano might be entering a rest period.', 'A possible larger seismic event or eruption.', 'Random natural movements with no risk.', 'A decrease in tectonic activity.'],
        correctAnswer: 1
      },
      {
        id: 'q8',
        question: 'A hazard map shows that areas with soft soil near fault lines experienced more ground rupture in the past. What pattern can you recognize from this data?',
        options: ['Hard soil areas are more dangerous.', 'Fault lines and soft soil together increase hazard risk.', 'Distance to the sea affects rupture frequency.', 'Past ruptures don\'t affect future hazards.'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        question: 'You are part of the school\'s disaster committee. A mild quake happens while class is ongoing. What is the most appropriate decision?',
        options: ['Stay seated and continue the lesson.', 'Evacuate calmly and follow the earthquake drill procedure.', 'Run outside immediately without coordination.', 'Wait for aftershocks before moving.'],
        correctAnswer: 1
      },
      {
        id: 'q10',
        question: 'Your barangay is planning to build new housing near a known fault line. What is the best decision to recommend based on hazard forecasting?',
        options: ['Approve construction since earthquakes can\'t be predicted.', 'Continue construction but skip building permits.', 'Relocate the site to a safer distance from the fault.', 'Ignore hazard maps since they are only estimates.'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Hydrometeorological Hazards',
    description: 'Understand signs and forecasting for typhoons, floods, storm surges, and landslides to ensure community safety.',
    topic: 'Flood',
    imageUrl: 'https://picsum.photos/seed/storm/800/400',
    readTime: 12,
    difficulty: 'Beginner',
    objectives: [
      'Recognize signs of impending hydrometeorological hazards',
      'Distinguish between natural and scientific forecasting signs',
      'Understand the impact of typhoons, floods, and droughts'
    ],
    competencies: [
      'Early Warning Recognition',
      'Disaster Preparedness',
      'Risk Reduction'
    ],
    gameType: 'flood-choice',
    sections: [
      {
        id: 'objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-cyan-400 mb-6">Course Objectives</h2>
          <div class="bg-white/5 p-6 rounded-xl border border-white/10">
            <ul class="space-y-4 text-slate-300">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Recognize signs of impending hydrometeorological hazards
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Distinguish between natural and scientific forecasting signs
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Understand the impact of typhoons, floods, and droughts
              </li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 py-10">
             <div class="p-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <svg class="w-24 h-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
             </div>
             
             <h3 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-blue-600 uppercase tracking-tighter max-w-4xl">
               Hydrometeorological Hazards
             </h3>
             
             <div class="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-3xl backdrop-blur-sm relative">
                <span class="absolute top-4 left-4 text-6xl text-cyan-500/20 font-serif">“</span>
                <p class="text-xl md:text-2xl text-slate-200 font-light italic relative z-10">
                  Awareness of natural warning signs saves lives — even a few minutes of early action can make a big difference.
                </p>
                <div class="mt-4 text-xs font-bold text-cyan-500 uppercase tracking-widest">— NDRRMC, 2023</div>
             </div>
          </div>
        `
      },
      {
        id: 'cyclone',
        title: 'Tropical Cyclone',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            <div class="flex flex-col justify-start space-y-6">
               <h3 class="text-4xl font-black text-cyan-400 uppercase">Tropical Cyclone</h3>
               <div class="bg-cyan-950/40 p-6 rounded-2xl border border-cyan-500/20">
                  <h4 class="text-lg font-bold text-white mb-4 flex items-center"><span class="bg-cyan-500 w-2 h-8 mr-3 rounded-full"></span>Natural Signs</h4>
                  <ul class="space-y-2 text-slate-300">
                    <li>• Sudden drop in air pressure & increased humidity</li>
                    <li>• Dark, thick clouds in eastern sky</li>
                    <li>• Strong winds shifting rapidly</li>
                    <li>• Continuous heavy rain</li>
                  </ul>
               </div>
               <div class="bg-blue-950/40 p-6 rounded-2xl border border-blue-500/20">
                  <h4 class="text-lg font-bold text-white mb-4 flex items-center"><span class="bg-blue-500 w-2 h-8 mr-3 rounded-full"></span>Scientific Signs</h4>
                  <ul class="space-y-2 text-slate-300">
                    <li>• PAGASA satellite showing spiraling clouds</li>
                    <li>• Warning signals (1-5) issued</li>
                  </ul>
               </div>
            </div>
            <div class="flex items-center justify-center">
               <div class="relative group">
                  <div class="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"></div>
                  <img src="https://picsum.photos/seed/cyclone/600/600" class="rounded-3xl shadow-2xl relative z-10 border border-white/10" alt="Cyclone Satellite View" />
                  <div class="absolute bottom-4 left-4 right-4 bg-black/80 p-3 rounded-xl z-20 backdrop-blur-md">
                     <p class="text-xs text-slate-300">"Before Typhoon Yolanda, PAGASA recorded drastic pressure drops."</p>
                  </div>
               </div>
            </div>
          </div>
        `
      },
      {
        id: 'flood',
        title: 'Flooding',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            <div class="flex flex-col justify-start space-y-6">
               <h3 class="text-4xl font-black text-blue-400 uppercase">Flooding</h3>
               <div class="space-y-4 text-slate-200 text-lg">
                  <p>Overflow of water that submerges land that is usually dry.</p>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div class="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-blue-500/20 transition-colors">
                        <div class="font-bold text-blue-300 mb-1">Natural Sign</div>
                        <div class="text-sm">Rising water levels in rivers & creeks.</div>
                     </div>
                     <div class="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-blue-500/20 transition-colors">
                        <div class="font-bold text-blue-300 mb-1">Natural Sign</div>
                        <div class="text-sm">Soil softening or water seeping from ground.</div>
                     </div>
                  </div>
               </div>
               
               <div class="bg-blue-900/30 p-6 rounded-2xl border border-blue-500/30 mt-auto">
                  <h4 class="font-bold text-white mb-2">Scientific Monitoring</h4>
                  <p class="text-sm text-slate-300 mb-2">PAGASA rainfall radar showing high intensity (>50mm/hr) and color-coded flood warnings.</p>
                  <div class="flex space-x-2">
                     <span class="px-2 py-1 bg-yellow-500/80 text-black text-[10px] font-bold rounded">YELLOW</span>
                     <span class="px-2 py-1 bg-orange-500/80 text-black text-[10px] font-bold rounded">ORANGE</span>
                     <span class="px-2 py-1 bg-red-500/80 text-white text-[10px] font-bold rounded">RED</span>
                  </div>
               </div>
            </div>
            <div class="flex items-center justify-center">
               <img src="https://picsum.photos/seed/floodwarn/600/400" class="rounded-3xl shadow-2xl border border-white/10 w-full object-cover h-64 lg:h-auto" alt="Flood Monitoring" />
            </div>
          </div>
        `
      },
      {
        id: 'storm-surge',
        title: 'Storm Surge',
        content: `
          <div class="flex flex-col h-full space-y-6">
             <h3 class="text-5xl font-black text-indigo-400 uppercase">Storm Surge</h3>
             
             <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/20">
                         <h4 class="text-indigo-300 font-bold mb-2">Natural Indicators</h4>
                         <ul class="text-sm text-slate-300 space-y-2">
                           <li>• Unusually calm sea followed by sudden rise</li>
                           <li>• Strong winds blowing toward shore</li>
                           <li>• Rapidly receding shoreline</li>
                           <li>• Dark clouds near coast</li>
                         </ul>
                      </div>
                      <div class="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/20">
                         <h4 class="text-indigo-300 font-bold mb-2">Scientific Forecast</h4>
                         <ul class="text-sm text-slate-300 space-y-2">
                           <li>• PAGASA storm surge advisories</li>
                           <li>• Model simulations of surge height</li>
                         </ul>
                      </div>
                   </div>
                </div>

                <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-end relative overflow-hidden group">
                   <img src="https://picsum.photos/seed/yolanda/400/600" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Storm Surge Example" />
                   <div class="relative z-10 bg-black/80 p-3 rounded-xl backdrop-blur-md">
                      <p class="text-xs text-slate-200">"During Typhoon Yolanda, storm surges up to 7 meters high devastated Tacloban City."</p>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'landslide',
        title: 'Rain-Induced Landslide',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            <div class="flex flex-col justify-start space-y-6">
               <h3 class="text-4xl font-black text-stone-400 uppercase">Landslide (Rain-Induced)</h3>
               
               <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-600/30">
                  <h4 class="text-stone-300 font-bold mb-3 uppercase tracking-wider">Natural Warning Signs</h4>
                  <div class="grid grid-cols-2 gap-4">
                     <div class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 bg-stone-500 rounded-full mr-2"></span>Cracks on ground/walls</div>
                     <div class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 bg-stone-500 rounded-full mr-2"></span>Tilting trees/poles</div>
                     <div class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 bg-stone-500 rounded-full mr-2"></span>Muddy springs appearing</div>
                     <div class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 bg-stone-500 rounded-full mr-2"></span>Rumbling sounds</div>
                  </div>
               </div>

               <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-600/30">
                  <h4 class="text-stone-300 font-bold mb-3 uppercase tracking-wider">Scientific Signs</h4>
                  <ul class="space-y-2 text-sm text-slate-300">
                     <li>• Soil moisture sensors detecting saturation</li>
                     <li>• Rainfall threshold exceeded in hazard areas</li>
                  </ul>
               </div>
            </div>
            
            <div class="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
               <img src="https://picsum.photos/seed/landslide-rain/600/800" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Landslide" />
               <div class="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                  <p class="text-stone-300 italic mb-2">"The 2006 Leyte landslide was preceded by days of intense rainfall and visible ground cracks."</p>
                  <p class="text-[10px] font-bold text-stone-500 uppercase">Ref: PHIVOLCS (2022)</p>
               </div>
            </div>
          </div>
        `
      },
      {
        id: 'drought',
        title: 'Drought',
        content: `
          <div class="flex flex-col h-full justify-center space-y-8">
             <div class="text-center">
                <h3 class="text-5xl font-black text-amber-500 uppercase tracking-tight mb-2">Drought</h3>
                <p class="text-amber-200/60 text-lg uppercase tracking-widest font-mono">Slow-onset Hazard</p>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-amber-950/30 p-8 rounded-3xl border border-amber-500/20 hover:bg-amber-900/30 transition-colors">
                   <h4 class="text-2xl font-bold text-amber-400 mb-6">Natural Signs</h4>
                   <ul class="space-y-4 text-amber-100">
                      <li class="flex items-center p-3 bg-black/20 rounded-xl"><span class="text-2xl mr-3">☀️</span> Prolonged dry & hot days</li>
                      <li class="flex items-center p-3 bg-black/20 rounded-xl"><span class="text-2xl mr-3">💧</span> Drying of ponds, wells, creeks</li>
                      <li class="flex items-center p-3 bg-black/20 rounded-xl"><span class="text-2xl mr-3">🌾</span> Wilting crops and grass</li>
                   </ul>
                </div>

                <div class="bg-amber-950/30 p-8 rounded-3xl border border-amber-500/20 hover:bg-amber-900/30 transition-colors relative overflow-hidden">
                   <h4 class="text-2xl font-bold text-amber-400 mb-6">Scientific Signs</h4>
                   <ul class="space-y-4 text-amber-100 relative z-10">
                      <li class="flex items-center"><span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>El Niño advisory from PAGASA</li>
                      <li class="flex items-center"><span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Low rainfall forecasts over multiple weeks</li>
                      <li class="flex items-center"><span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Decreased dam water levels</li>
                   </ul>
                   <div class="absolute bottom-4 right-4 text-[10px] text-amber-500/50 max-w-[200px] text-right">
                      Ex: PAGASA declared El Niño in 2019, leading to agricultural drought in Central Luzon.
                   </div>
                </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'r1',
        question: 'What is a scientific sign of an impending typhoon?',
        options: ['Dark clouds', 'Strong winds', 'PAGASA Warning Signal', 'Heavy rain'],
        correctAnswer: 2
      },
      {
        id: 'r2',
        question: 'Which of these indicates an impending landslide?',
        options: ['Cracks on ground', 'High tide', 'Strong sunlight', 'Calm wind'],
        correctAnswer: 0
      },
      {
        id: 'r3',
        question: 'El Niño advisory is associated with which hazard?',
        options: ['Flood', 'Drought', 'Tsunami', 'Storm Surge'],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'q1',
        question: 'The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do to forecast possible hazards?',
        options: ['Wait until heavy rains start before preparing.', 'Monitor PAGASA updates and prepare for possible storm signals.', 'Ignore the report since LPA rarely develops into a typhoon.', 'Focus only on temperature forecasts.'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted from these conditions?',
        options: ['Clear and dry weather.', 'Possible thunderstorm or heavy rainfall.', 'Volcanic eruption nearby.', 'Increasing temperature in the area.'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'A social media post says, "A super typhoon will hit the Philippines tomorrow," but PAGASA has not issued any warning. How can you verify the accuracy of this claim?',
        options: ['Share it immediately to alert others.', 'Wait to see if it rains the next day.', 'Check the official PAGASA or NDRRMC bulletins.', 'Believe the post because it has thousands of likes.'],
        correctAnswer: 2
      },
      {
        id: 'q4',
        question: 'Your phone app shows a severe flood warning, but local authorities haven\'t announced anything yet. What should you do to ensure accuracy before acting?',
        options: ['Compare the information with government advisories.', 'Ignore it since there\'s no official announcement.', 'Immediately evacuate without checking.', 'Ask friends if they heard the same news.'],
        correctAnswer: 0
      },
      {
        id: 'q5',
        question: 'After days of heavy rain, a hillside community experiences a landslide. What is the most likely cause of this hazard?',
        options: ['Strong winds loosened the trees.', 'Prolonged rainfall saturated the soil, weakening its stability.', 'Earthquake vibrations caused the slope to collapse.', 'The land was too dry before the rain.'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        question: 'Flooding occurred in a city even after only moderate rain. What could be the main contributing factor?',
        options: ['The city\'s drainage system is clogged or inadequate.', 'There was too much sunlight before the rain.', 'The city is too far from the coast.', 'Wind direction caused water to pile up.'],
        correctAnswer: 0
      },
      {
        id: 'q7',
        question: 'Weather records show that a certain province often experiences strong typhoons every last quarter of the year. What pattern can be recognized from this data?',
        options: ['The area is safe during any season.', 'The province is located along the common typhoon path during monsoon months.', 'The typhoons are random events.', 'The frequency is caused by human activity.'],
        correctAnswer: 1
      },
      {
        id: 'q8',
        question: 'In the past five years, flash floods always occur shortly after intense rainfall lasting more than an hour. What does this pattern suggest?',
        options: ['The floods are caused by sea-level rise.', 'There is a predictable relationship between rainfall intensity and flooding.', 'Floods happen by coincidence.', 'Rainfall has no connection to flooding.'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        question: 'PAGASA raises a Tropical Cyclone Wind Signal No. 3 for your area. What should your family do first?',
        options: ['Go to the nearest open field to watch the winds.', 'Secure your house, prepare a go-bag, and stay tuned to official updates.', 'Wait for the rain to stop before preparing.', 'Continue normal activities as long as there\'s power.'],
        correctAnswer: 1
      },
      {
        id: 'q10',
        question: 'Your school is in a flood-prone area, and heavy rains have been continuous since early morning. As a student leader, what is the best decision to recommend to the principal?',
        options: ['Continue classes until dismissal time.', 'Wait for official cancellation from the mayor\'s office.', 'Suspend classes early and ensure students get home safely.', 'Ask everyone to stay and observe the rainfall pattern.'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '3',
    title: 'Volcanic Eruptions',
    description: 'Learn about volcanic hazards like pyroclastic flows, lahars, and ashfall, and how to interpret alert levels.',
    topic: 'Volcano',
    imageUrl: 'https://picsum.photos/seed/volcano/800/400',
    readTime: 15,
    difficulty: 'Advanced',
    objectives: [
      'Explain various volcano-related hazards',
      'Recognize signs of an impending volcanic eruption',
      'Understand forecasting and evacuation planning'
    ],
    competencies: [
      'Hazard Recognition',
      'Warning Signal Interpretation',
      'Emergency Response'
    ],
    gameType: 'none',
    sections: [
      {
        id: 'objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-red-500 mb-6">Course Objectives</h2>
          <div class="bg-white/5 p-6 rounded-xl border border-white/10">
            <ul class="space-y-4 text-slate-300">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Explain various volcano-related hazards
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Recognize signs of an impending volcanic eruption
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Understand forecasting and evacuation planning
              </li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in duration-700">
             <div class="relative">
                <div class="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse"></div>
                <svg class="w-32 h-32 text-red-500 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
             </div>
             
             <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 uppercase tracking-tighter text-center">
               Volcanic Hazards
             </h3>
             
             <div class="max-w-4xl text-center space-y-6 bg-black/40 p-8 rounded-3xl border border-red-500/20 backdrop-blur-sm">
                <p class="text-2xl text-slate-200 font-light">
                  Volcanoes are powerful systems that can create landforms but also cause <span class="text-red-400 font-bold">large-scale destruction</span>.
                </p>
                <p class="text-lg text-slate-400 italic">
                  “Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness and preparedness.” — PHIVOLCS, 2023
                </p>
             </div>
          </div>
        `
      },
      {
        id: 'pyroclastic',
        title: 'Pyroclastic Flow',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
             <div class="space-y-6">
                <h3 class="text-5xl font-black text-orange-500 uppercase">Pyroclastic Flow</h3>
                <p class="text-2xl text-slate-300 font-light">
                  A fast-moving mixture of hot gases, ash, and volcanic rocks rushing down slopes at >100 km/h.
                </p>
                <div class="flex items-center space-x-4">
                   <div class="px-4 py-2 bg-red-950/50 border border-red-500/30 rounded-lg text-red-400 font-bold">Temp: 800°C</div>
                   <div class="px-4 py-2 bg-orange-950/50 border border-orange-500/30 rounded-lg text-orange-400 font-bold">Speed: >100 km/h</div>
                </div>
                <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h4 class="text-white font-bold mb-2 uppercase">Effects</h4>
                   <ul class="list-disc list-inside text-slate-300 space-y-1">
                      <li>Instant incineration of anything in path</li>
                      <li>Burial of areas under thick ash/rock</li>
                   </ul>
                </div>
             </div>
             <div class="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                <img src="https://picsum.photos/seed/pyroclastic/600/800" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Pyroclastic Flow" />
                <div class="absolute bottom-0 bg-black/80 w-full p-4 backdrop-blur-md">
                   <p class="text-sm text-slate-300">"1991 Mt. Pinatubo eruption produced flows burying towns in Pampanga."</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'ash-fall',
        title: 'Ash Fall',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
             <div class="space-y-6">
                <h3 class="text-5xl font-black text-stone-400 uppercase">Ash Fall</h3>
                <p class="text-2xl text-slate-300 font-light">
                  Volcanic ash and rock fragments ejected during explosive eruptions falling to the ground.
                </p>
                
                <div class="grid grid-cols-2 gap-4">
                   <div class="bg-stone-800/50 p-4 rounded-xl border border-stone-600">
                      <h5 class="text-stone-300 font-bold text-sm uppercase">Respiratory Issues</h5>
                      <p class="text-xs text-slate-400">Reduced air quality causes breathing problems.</p>
                   </div>
                   <div class="bg-stone-800/50 p-4 rounded-xl border border-stone-600">
                      <h5 class="text-stone-300 font-bold text-sm uppercase">Roof Collapse</h5>
                      <p class="text-xs text-slate-400">Heavy ash accumulation destroys structures.</p>
                   </div>
                </div>
             </div>
             <div class="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                <img src="https://picsum.photos/seed/ashfall/600/800" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale" alt="Ash Fall" />
                <div class="absolute bottom-0 bg-black/80 w-full p-4 backdrop-blur-md">
                   <p class="text-sm text-slate-300">"2020 Taal Volcano eruption blanketed towns, forcing evacuation."</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'lahar',
        title: 'Lahars',
        content: `
          <div class="flex flex-col items-center justify-center space-y-8 h-full">
             <h3 class="text-6xl font-black text-stone-500 uppercase tracking-tighter">Lahars</h3>
             <p class="text-2xl text-slate-300 text-center max-w-2xl font-light">
                Mixtures of volcanic ash, rocks, and water flowing down river valleys, often triggered by rain.
             </p>
             <div class="bg-stone-900/80 p-8 rounded-3xl border border-stone-700 max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center">
                <div class="flex-1 space-y-4">
                   <div class="flex items-center"><span class="w-3 h-3 bg-stone-500 rounded-full mr-3"></span>Burial of communities and farmlands</div>
                   <div class="flex items-center"><span class="w-3 h-3 bg-stone-500 rounded-full mr-3"></span>Long-term river siltation</div>
                   <div class="flex items-center"><span class="w-3 h-3 bg-stone-500 rounded-full mr-3"></span>Destruction of bridges</div>
                </div>
                <div class="flex-1 text-sm text-stone-400 italic border-l border-stone-700 pl-8">
                   "Post-eruption lahars from Mt. Pinatubo continued for years after 1991."
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'lava-flow',
        title: 'Lava Flows',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
             <div class="space-y-6">
                <h3 class="text-5xl font-black text-orange-600 uppercase">Lava Flows</h3>
                <p class="text-2xl text-slate-300 font-light">
                  Molten rock that flows from the crater during a non-explosive eruption.
                </p>
                
                <div class="bg-orange-950/30 p-6 rounded-2xl border border-orange-600/20">
                   <h4 class="text-orange-400 font-bold mb-3 uppercase">Characteristics</h4>
                   <ul class="space-y-2 text-slate-300">
                      <li>• Burns everything it touches</li>
                      <li>• Moves slowly (allows evacuation)</li>
                      <li>• Creates new land when cooled</li>
                   </ul>
                </div>
             </div>
             <div class="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                <img src="https://picsum.photos/seed/lava/600/800" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Lava Flow" />
                <div class="absolute bottom-0 bg-black/80 w-full p-4 backdrop-blur-md">
                   <p class="text-sm text-slate-300">"Mayon Volcano's eruptions often produce lava flows threatening Albay."</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'volcanic-gas',
        title: 'Volcanic Gases',
        content: `
          <div class="flex flex-col h-full justify-center">
             <h3 class="text-5xl font-black text-yellow-500 uppercase mb-8 text-center">Volcanic Gases</h3>
             
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-yellow-950/20 p-6 rounded-2xl border border-yellow-500/20 text-center">
                   <div class="text-4xl mb-4">☠️</div>
                   <h4 class="text-yellow-400 font-bold mb-2">Health Hazard</h4>
                   <p class="text-sm text-slate-300">Poisoning of animals and humans in low-lying areas (SO₂, CO₂).</p>
                </div>
                <div class="bg-yellow-950/20 p-6 rounded-2xl border border-yellow-500/20 text-center">
                   <div class="text-4xl mb-4">🌧️</div>
                   <h4 class="text-yellow-400 font-bold mb-2">Acid Rain</h4>
                   <p class="text-sm text-slate-300">Damages crops and contaminates water supplies.</p>
                </div>
                <div class="bg-yellow-950/20 p-6 rounded-2xl border border-yellow-500/20 text-center">
                   <div class="text-4xl mb-4">🌍</div>
                   <h4 class="text-yellow-400 font-bold mb-2">Climate Impact</h4>
                   <p class="text-sm text-slate-300">Atmospheric pollution contributing to global cooling.</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'volcanic-tsunami',
        title: 'Volcanic Tsunami',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
             <div class="space-y-6">
                <h3 class="text-5xl font-black text-cyan-500 uppercase">Volcanic Tsunami</h3>
                <p class="text-2xl text-slate-300 font-light">
                  Large sea waves generated by underwater eruptions, landslides, or caldera collapses.
                </p>
                
                <div class="flex items-center space-x-4 bg-cyan-900/20 p-6 rounded-2xl border border-cyan-500/20">
                   <div class="text-4xl">🌊</div>
                   <div>
                     <h4 class="text-cyan-400 font-bold">Impact</h4>
                     <p class="text-slate-300">Flooding of coastal communities & destruction of ports.</p>
                   </div>
                </div>
             </div>
             <div class="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                <img src="https://picsum.photos/seed/volcanotsunami/600/800" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 bg-blue-900" alt="Volcanic Tsunami" />
                <div class="absolute bottom-0 bg-black/80 w-full p-4 backdrop-blur-md">
                   <p class="text-sm text-slate-300">"2022 Hunga Tonga eruption generated a tsunami reaching the Philippines."</p>
                </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'r1',
        question: 'What is a fast-moving mixture of hot gas and rock?',
        options: ['Lahar', 'Pyroclastic Flow', 'Ash Fall', 'Lava Flow'],
        correctAnswer: 1
      },
      {
        id: 'r2',
        question: 'Which hazard is caused by ash mixing with water?',
        options: ['Tsunami', 'Lahar', 'Earthquake', 'Fire'],
        correctAnswer: 1
      },
      {
        id: 'r3',
        question: 'What is the main danger of ash fall to buildings?',
        options: ['Fire', 'Roof Collapse', 'Flooding', 'Corrosion'],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'q1',
        question: 'Scientists observe increasing ground deformation and frequent volcanic quakes near Mt. Mayon. What does this most likely indicate?',
        options: ['The volcano is returning to its normal state.', 'Magma is moving upward, possibly leading to an eruption.', 'Wind pressure is increasing on the volcano\'s slopes.', 'The volcano is cooling down.'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'Residents notice a strong sulfur smell and steam rising from a nearby crater. What should be done to forecast possible volcanic activity?',
        options: ['Dismiss it as normal gas emission.', 'Monitor and report the observation to PHIVOLCS.', 'Evacuate immediately without confirmation.', 'Wait until ashfall occurs before acting.'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'A viral post claims that "Mt. Taal will erupt this weekend." How can you verify the accuracy of this claim?',
        options: ['Check the latest PHIVOLCS bulletin and alert level.', 'Believe it because it\'s trending online.', 'Wait until someone nearby confirms an explosion.', 'Share it to warn others quickly.'],
        correctAnswer: 0
      },
      {
        id: 'q4',
        question: 'Your teacher says the volcano\'s alert level has changed from 1 to 3. What does this accurately mean?',
        options: ['The volcano has completely erupted.', 'There is an increased tendency toward hazardous eruption.', 'The volcano is safe for tourism again.', 'The volcano has already stopped releasing gas.'],
        correctAnswer: 1
      },
      {
        id: 'q5',
        question: 'After a volcanic eruption, rivers nearby experience lahar flow when it rains heavily. What is the main cause of this hazard?',
        options: ['Cooling magma creates more rain.', 'Ash and debris mix with rainwater and flow downstream.', 'Earthquakes push the water outward.', 'Forest fires loosen the soil.'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        question: 'Villages near a volcano are buried in pyroclastic materials. What caused this type of destruction?',
        options: ['Fast-moving currents of hot gas and volcanic fragments.', 'Rising water levels from nearby rivers.', 'Lava solidifying near houses.', 'Slow buildup of volcanic gases.'],
        correctAnswer: 0
      },
      {
        id: 'q7',
        question: 'Scientists record a series of harmonic tremors followed by gas emission increases. What pattern do these data suggest?',
        options: ['The volcano is becoming dormant.', 'There is a potential eruption due to magma movement.', 'The volcano\'s activity is decreasing.', 'Weather changes are affecting the readings.'],
        correctAnswer: 1
      },
      {
        id: 'q8',
        question: 'In the past 50 years, every time the crater lake of a certain volcano changes color, an eruption follows within weeks. What does this pattern imply?',
        options: ['The lake color change can be ignored.', 'It may serve as an early warning indicator of volcanic activity.', 'The lake is affected only by seasonal rainfall.', 'It proves that eruptions are caused by lake pollution.'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        question: 'PHIVOLCS raises the alert level to 4 for a nearby volcano. As a student living 8 km from the crater, what should you and your family do?',
        options: ['Continue normal activities but stay alert.', 'Pack essentials and evacuate following official instructions.', 'Wait for ashfall before leaving.', 'Climb the volcano to observe the eruption safely.'],
        correctAnswer: 1
      },
      {
        id: 'q10',
        question: 'Local officials plan to allow tourists to visit a volcano still under Alert Level 2. What is the most appropriate decision based on hazard forecasting?',
        options: ['Allow it because the volcano is not yet erupting.', 'Limit access and wait for official downgrading to Alert Level 0.', 'Promote more tours for economic recovery.', 'Ignore PHIVOLCS advisories since it\'s a minor alert.'],
        correctAnswer: 1
      }
    ]
  }
];

export const EQ_STEPS: EQStep[] = [
  { id: '1', text: 'Secure heavy furniture', correctCategory: 'Before' },
  { id: '2', text: 'Prepare emergency kit', correctCategory: 'Before' },
  { id: '3', text: 'Drop, Cover, and Hold On', correctCategory: 'During' },
  { id: '4', text: 'Stay away from windows', correctCategory: 'During' },
  { id: '5', text: 'Check for injuries', correctCategory: 'After' },
  { id: '6', text: 'Inspect utilities for damage', correctCategory: 'After' },
];

export const FLOOD_SCENARIOS: FloodScenario[] = [
  { id: '1', text: 'Walking through knee-deep floodwater to get home.', isSafe: false, explanation: 'Floodwater can be contaminated, hide sharp objects, or have strong currents.' },
  { id: '2', text: 'Moving to the second floor of your house during rising water.', isSafe: true, explanation: 'Seeking higher ground is the safest action during a flood.' },
  { id: '3', text: 'Touching wet electrical appliances to turn them off.', isSafe: false, explanation: 'Risk of electrocution is extremely high. Use main breaker if dry.' },
  { id: '4', text: 'Drinking tap water immediately after a flood.', isSafe: false, explanation: 'Water sources may be contaminated. Boil or use bottled water.' },
  { id: '5', text: 'Listening to battery-operated radio for updates.', isSafe: true, explanation: 'Staying informed via reliable sources is crucial.' },
];
