import { Lecture, EQStep, FloodScenario } from './types';

export const LECTURES: Lecture[] = [
  {
    id: '1',
    title: 'Earthquake Hazards & Effects',
    description: 'A comprehensive guide to primary and secondary earthquake hazards, including ground shaking, liquefaction, and tsunamis.',
    topic: 'Earthquake',
    imageUrl: 'https://i.imgur.com/uI1W4uP.jpeg',
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
              <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase tracking-tighter drop-shadow-2xl">
                Earthquakes
              </h3>
            </div>
            
            <div class="max-w-6xl mx-auto px-4 w-full">
               <!-- Primary Content Card -->
               <div class="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.15)]">
                  <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] group-hover:bg-orange-500/20 transition-all"></div>
                  
                  <p class="text-3xl md:text-4xl text-slate-100 font-light leading-snug relative z-10 text-center mb-6">
                    <span class="font-black text-orange-400">Earthquakes</span> are among the most destructive natural hazards on Earth.
                  </p>
                  
                  <p class="text-2xl md:text-3xl text-slate-300 font-light leading-snug relative z-10 text-center mb-8">
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
              <h3 class="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Ground Shaking
              </h3>
              
              <div class="grid grid-cols-1 gap-6 items-center">
                 <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-500">
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
                       <div class="absolute inset-0 flex items-center w-[200%]" style="animation: seismic-scroll 3s linear infinite">
                          <svg class="w-1/2 h-full text-orange-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="0.8" vector-effect="non-scaling-stroke" />
                          </svg>
                          <svg class="w-1/2 h-full text-orange-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="0.8" vector-effect="non-scaling-stroke" />
                          </svg>
                       </div>
                       
                       <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-0"></div>

                       <span class="text-orange-500 font-mono text-xs z-10 bg-black/90 px-3 py-1.5 rounded border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center gap-2">
                          <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                          </span>
                          LIVE SEISMOGRAPH
                       </span>
                    </div>
                 </div>

                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                       <h4 class="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          Seismic Waves
                       </h4>
                       <ul class="space-y-4">
                          <li class="flex items-start group">
                             <div class="bg-orange-500/20 px-2 py-1 rounded mr-3 text-orange-400 font-bold text-[10px] w-16 text-center mt-0.5 group-hover:scale-110 transition-transform">P-WAVES</div>
                             <p class="text-slate-300 text-sm">Primary waves. Fastest, compressional motion. Usually felt as a sudden jolt.</p>
                          </li>
                          <li class="flex items-start group">
                             <div class="bg-red-500/20 px-2 py-1 rounded mr-3 text-red-400 font-bold text-[10px] w-16 text-center mt-0.5 group-hover:scale-110 transition-transform">S-WAVES</div>
                             <p class="text-slate-300 text-sm">Secondary waves. Slower but stronger side-to-side motion. Causes significant damage.</p>
                          </li>
                          <li class="flex items-start group">
                             <div class="bg-purple-500/20 px-2 py-1 rounded mr-3 text-purple-400 font-bold text-[10px] w-16 text-center mt-0.5 group-hover:scale-110 transition-transform">SURFACE</div>
                             <p class="text-slate-300 text-sm">Travel along the Earth's surface. The most destructive rolling motion.</p>
                          </li>
                       </ul>
                    </div>

                    <div class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                       <h4 class="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                          Intensity Factors
                       </h4>
                       <div class="space-y-5">
                          <div class="group">
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Magnitude</span>
                                <span class="text-orange-500 group-hover:scale-110 transition-transform origin-right">Energy Released</span>
                             </div>
                             <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-3/4"></div></div>
                             <p class="text-slate-500 text-[10px] mt-1">The total amount of energy released at the source.</p>
                          </div>
                          <div class="group">
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Distance</span>
                                <span class="text-orange-500 group-hover:scale-110 transition-transform origin-right">Proximity</span>
                             </div>
                             <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-1/2"></div></div>
                             <p class="text-slate-500 text-[10px] mt-1">Closer to the epicenter = Stronger shaking.</p>
                          </div>
                          <div class="group">
                             <div class="flex justify-between text-xs font-bold uppercase mb-1">
                                <span class="text-slate-400">Soil Type</span>
                                <span class="text-red-500 animate-pulse group-hover:scale-110 transition-transform origin-right">Critical Risk</span>
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
            <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-12 text-center uppercase drop-shadow-sm">
              Effects Analysis
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-stretch">
              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-orange-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
                 <div class="mb-8 text-orange-500/80 group-hover:text-orange-400 transition-colors transform group-hover:scale-110 group-hover:rotate-3 duration-500 origin-bottom-left">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0zM12 9a2 2 0 100-4 2 2 0 000 4z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21h6" />
                    </svg>
                 </div>
                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Structural<br/>Damage</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Weakly designed buildings, bridges, and houses collapse, especially on <span class="text-orange-300 font-bold">soft soils</span>.</p>
              </div>

              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-red-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>
                 <div class="mb-8 text-red-500/80 group-hover:text-red-400 transition-colors transform group-hover:skew-x-6 duration-500 origin-center">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Infrastructure<br/>Disruption</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Roads crack, utilities fail, and <span class="text-red-300 font-bold">transportation networks</span> are cut off.</p>
              </div>

              <div class="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col">
                 <div class="absolute -right-10 -top-10 bg-purple-500/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                 <div class="mb-8 text-purple-500/80 group-hover:text-purple-400 transition-colors transform group-hover:scale-105 duration-500 animate-[pulse_3s_ease-in-out_infinite]">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                 </div>
                 <h4 class="text-2xl font-black text-white mb-4 uppercase tracking-tight">Psychological<br/>Stress</h4>
                 <p class="text-slate-300 leading-relaxed text-lg flex-grow">Fear and trauma affect survivors <span class="text-purple-300 font-bold">long after</span> the earthquake.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'ground-rupture',
        title: 'Ground Rupture',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-6">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase leading-none mb-4 transition-all duration-500 hover:tracking-widest cursor-default">Ground Rupture</h3>
                        <p class="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                        The visible tearing or displacement of the ground surface along an active fault during an earthquake.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                       <div class="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer">
                          <div class="text-orange-400 font-bold text-base uppercase mb-2 group-hover:text-orange-300 transition-colors">Vertical Offset</div>
                          <div class="text-slate-300 text-sm leading-snug group-hover:text-white">One side lifts higher than the other, creating steep scarps.</div>
                       </div>
                       <div class="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer">
                          <div class="text-orange-400 font-bold text-base uppercase mb-2 group-hover:text-orange-300 transition-colors">Horizontal Shift</div>
                          <div class="text-slate-300 text-sm leading-snug group-hover:text-white">Ground moves sideways, severing roads and utility lines.</div>
                       </div>
                    </div>

                    <div class="bg-white/5 border border-white/10 p-5 rounded-3xl hover:border-orange-500/30 transition-colors duration-300">
                        <h4 class="text-lg font-bold text-orange-400 mb-3 uppercase tracking-wide flex items-center">
                           <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
                           Effects Analysis
                        </h4>
                        <ul class="space-y-3 text-slate-300 text-base">
                          <li class="flex items-start p-2 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default">
                             <span class="text-red-500 mr-3 mt-1">►</span>
                             <span><strong>Structural Tearing:</strong> Foundations split apart instantly.</span>
                          </li>
                          <li class="flex items-start p-2 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default">
                             <span class="text-red-500 mr-3 mt-1">►</span>
                             <span><strong>Uninhabitable Zones:</strong> Permanent no-build zones.</span>
                          </li>
                        </ul>
                    </div>
                    
                    <div class="bg-orange-950/40 border border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-sm mb-1 group-hover:text-orange-200">Safety Protocol: The 5-Meter Rule</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Permanent structures are strictly prohibited within <span class="text-white font-bold bg-orange-600/50 px-1 rounded">5 meters</span> on both sides of the active fault trace.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/mz2zqMV.jpeg" alt="Bohol Rupture" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness%20Presentation%20ADB%2028May2013.pdf" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Ground rupture in Bohol following the 2013 earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/nSEuU4D.jpeg" alt="Cotabato Rupture" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.youtube.com/watch?v=tSeflXdLrJE" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Surface rupture observed in North Cotabato after the 2019 earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/MkMEKQH.jpeg" alt="Surigao Cracks" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://temblor.net/earthquake-insights/fault-that-caused-a-july-quake-in-the-philippines-still-in-question-14355/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Cracks in the road caused by ground rupture in Surigao during the 2017 earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/lgVgC4n.jpeg" alt="Negros Fissure" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://rpnradio.com/davao-multiple-ground-rupture-naranasan-sa-kalsada-ng-purok-silad-sa-barangay-macambol-mati/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Extensive ground fissure in Negros Oriental after the 2012 earthquake.</p>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Liquefaction</h3>
                    <p class="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
                      The process where water-saturated, loose soil behaves like a liquid during intense shaking.
                    </p>

                    <div class="grid grid-cols-3 gap-3 mb-8">
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer">
                        <div class="text-2xl mb-2 group-hover:rotate-12 transition-transform duration-500">🏖️</div>
                        <div class="text-xs md:text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200">Loose Soil</div>
                      </div>
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer">
                        <div class="text-2xl mb-2 group-hover:animate-bounce">💧</div>
                        <div class="text-xs md:text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200">Water</div>
                      </div>
                      <div class="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer">
                        <div class="text-2xl mb-2 group-hover:animate-spin">〰️</div>
                        <div class="text-xs md:text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200">Shaking</div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-cyan-950/30 border border-cyan-500/20 p-6 rounded-2xl group hover:border-cyan-500/40 transition-all hover:bg-cyan-900/30">
                        <h4 class="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300">Critical Impacts</h4>
                        <ul class="space-y-3 text-slate-300 text-lg">
                          <li class="flex items-start p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default"><span class="text-cyan-500 mr-2">►</span> Building Instability: Structures sink or tilt.</li>
                          <li class="flex items-start p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default"><span class="text-cyan-500 mr-2">►</span> Underground Damage: Pipes burst due to soil movement.</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bg-blue-950/40 border border-blue-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-blue-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-blue-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-blue-300 font-bold uppercase text-sm mb-1 group-hover:text-blue-200">Safety Protocol: Structural Check</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Evacuate immediately if you notice floor tilting or water seeping through cracks. Move to <span class="text-white font-bold bg-blue-600/50 px-1 rounded">stable, high ground</span>.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/ejDazPW.jpeg" alt="Dagupan Liquefaction" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.nzsee.org.nz/db/2011/043.pdf" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Buildings sinking and tilting in Dagupan City following the 1990 Luzon earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/XkdS1Sh.jpeg" alt="Sand Boils" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.researchgate.net/figure/Documented-liquefaction-after-the-2022-Mw-70-Northwestern-Luzon-Earthquake-A-An_fig8_368335398" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Evidence of liquefaction in the form of sand boils erupting from the ground in Pampanga.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-48 overflow-hidden relative">
                         <img src="https://i.imgur.com/m7ErQuv.jpeg" alt="Road Cracks" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.youtube.com/watch?v=-kqCBSEI4QE" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">A road cracked and displaced by liquefaction effects during a major earthquake.</p>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                 <div class="space-y-8">
                    <div>
                       <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Landslides</h3>
                       <p class="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
                          Downhill movement of rocks and soil triggered by <span class="text-emerald-400 font-bold">ground shaking</span>, especially in mountainous terrains.
                       </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(120,113,108,0.2)] group cursor-pointer">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Burial of Settlements</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Entire villages can be buried, as seen in upland communities of Luzon.</p>
                          </div>
                       </div>
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(120,113,108,0.2)] group cursor-pointer">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Isolation of Areas</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Blocked roads hinder rescue and relief operations.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-emerald-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-emerald-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-emerald-300 font-bold uppercase text-sm mb-1 group-hover:text-emerald-200">Safety Protocol: Listen & Look</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Stay alert for unusual sounds like trees cracking. If near a stream, move to <span class="text-white font-bold bg-emerald-600/50 px-1 rounded">higher ground</span> if water flow suddenly changes.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/21135449/landslide-philippines.jpg" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">The aftermath of a massive landslide that buried a mining village in Maco, Davao de Oro.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://floodlist.com/wp-content/uploads/2022/10/Landslide-Philippines-Civil-Defense-Northern-Mindanao-Region-10-1536x1152.jpg" alt="Naga City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://floodlist.com/asia/philippines-northern-mindanao-october-2022" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Rescuers searching through the debris of a major landslide in Naga City, Cebu.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/21140213/landslide-philippines-2.jpg" alt="Itogon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Large-scale slope failure in Itogon, Benguet, triggered by Typhoon Ompong.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://blogs.agu.org/landslideblog/files/2022/07/22_07-Philippines-2.jpg" alt="Guinsaugon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://blogs.agu.org/landslideblog/2022/07/28/abra-earthquake-1/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">An aerial view of the catastrophic landslide that covered the village of Guinsaugon in Southern Leyte.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://files01.pna.gov.ph/category-list/2021/05/19/lslide-gsc.jpg" alt="Baybay City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.pna.gov.ph/articles/1140765" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Devastation caused by landslides in Baybay City following Tropical Storm Agaton.</p>
                        </div>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Tsunami</h3>
                        <p class="text-2xl text-slate-300 mb-8 font-light">
                        A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.
                        </p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                            <div class="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/40"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>
                            <div>
                            <h4 class="text-blue-300 font-bold group-hover:text-blue-200">Coastal Inundation</h4>
                            <p class="text-slate-400 text-sm group-hover:text-slate-300">Flooding destroys homes, ports, and infrastructure.</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                            <div class="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/40"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>
                            <div>
                            <h4 class="text-blue-300 font-bold group-hover:text-blue-200">Loss of Lives</h4>
                            <p class="text-slate-400 text-sm group-hover:text-slate-300">People near shorelines have little time to evacuate.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-950/40 border border-indigo-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-indigo-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <div>
                             <h4 class="text-indigo-300 font-bold uppercase text-sm mb-1 group-hover:text-indigo-200">Safety Protocol: High Ground</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                If you are near the coast and feel a strong earthquake, move to <span class="text-white font-bold bg-indigo-600/50 px-1 rounded">high ground</span> immediately. Do not wait for warning.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.travelandtourworld.com/wp-content/uploads/2025/10/tsunami.jpeg" alt="Tsunami Wreckage" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.travelandtourworld.com/news/article/davao-philippines-struck-by-6-9-aftershock-after-major-7-4-earthquake-tsunami-warning-issued-impact-on-tourism-and-emergency-response/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Wreckage of houses and boats washed ashore after a tsunami event.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://i.imgur.com/Vs1VkOm.jpeg" alt="Evacuation Drill" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://reopen.media/en-gb/articles/7-4-magnitude-earthquake-hits-philippines-tsunami-warning" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Residents participating in a community evacuation drill.</p>
                      </div>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Fire & Failures</h3>
                        <p class="text-2xl text-slate-300 mb-8 font-light">
                        Secondary hazards caused by damaged gas lines, power systems, and industrial facilities.
                        </p>
                    </div>
                    
                    <div class="bg-red-950/30 border border-red-500/20 p-6 rounded-2xl hover:bg-red-900/30 transition-colors duration-300">
                        <ul class="space-y-4 text-slate-300">
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-ping"></span>Urban Fires spread rapidly when water lines break.</li>
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-ping"></span>Chemical leaks contaminate air and soil.</li>
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-ping"></span>Fire-damaged areas require longer rebuilding.</li>
                        </ul>
                    </div>

                    <div class="bg-red-950/40 border border-red-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-red-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-red-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-red-300 font-bold uppercase text-sm mb-1 group-hover:text-red-200">Safety Protocol: Gas & Power</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Check for gas leaks immediately after shaking stops. If you smell gas, turn off the main valve and <span class="text-white font-bold bg-red-600/50 px-1 rounded">leave</span>.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.leytesamardailynews.com/wp-content/uploads/2025/02/tacloban-firermn-1536x1152.jpg" alt="Chemical Factory Fire" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.leytesamardailynews.com/fire-in-tacloban-quakes-in-hernani/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">A major fire engulfing a chemical factory in the aftermath of an earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.geoengineer.org/storage/news/2509/featured_image/8703/featured_image.jpeg" alt="Collapsed Building Smoke" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.geoengineer.org/news/massive-earthquake-struck-philippines" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-sm text-slate-200 font-bold mb-1">Smoke rising from a collapsed building structure following a seismic event.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'q1',
        question: 'Which type of seismic wave causes the most damage to structures?',
        options: ['P-Waves', 'S-Waves', 'Surface Waves', 'Micro-tremors'],
        correctAnswer: 2
      },
      {
        id: 'q2',
        question: 'What is the most effective immediate action during an earthquake?',
        options: ['Run outside', 'Drop, Cover, and Hold On', 'Stand in a doorway', 'Call emergency services'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'Liquefaction mostly occurs in which type of soil?',
        options: ['Solid Bedrock', 'Dry Clay', 'Loose, water-saturated sand', 'Compact Gravel'],
        correctAnswer: 2
      }
    ],
    finalQuiz: [
      {
        id: 'fq1',
        question: 'Your school is located near an active fault line. Scientists detect several minor tremors in the past week. As a student leader, what is the best action your class should take?',
        options: [
          'Ignore the tremors since they are small.',
          'Wait for a government warning before acting.',
          'Conduct a safety drill and check evacuation routes.',
          'Continue regular activities since no major quake has happened yet.'
        ],
        correctAnswer: 2
      },
      {
        id: 'fq2',
        question: 'Barangay officials receive a report of unusual ground vibration without an identified source. What should they do first to forecast possible earthquake risks?',
        options: [
          'Check social media for rumors.',
          'Wait for aftershocks.',
          'Coordinate with PHIVOLCS to verify seismic data.',
          'Immediately evacuate all residents without confirmation.'
        ],
        correctAnswer: 2
      },
      {
        id: 'fq3',
        question: 'A student reads an online post claiming a major earthquake will occur on a specific date. What is the most accurate way to validate this information?',
        options: [
          'Share the post to alert others.',
          'Check PHIVOLCS or USGS for official forecasts.',
          'Ask friends if they heard the same news.',
          'Assume it\'s true since it went viral.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq4',
        question: 'An earthquake detection app shows a magnitude 4.0 tremor nearby, but your friends say they felt nothing. How can you determine if the report is accurate?',
        options: [
          'Delete the app for being unreliable.',
          'Compare data from other official monitoring centers.',
          'Believe your friends instead of the app.',
          'Assume the app has a bug.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq5',
        question: 'After an earthquake, several areas near rivers experience liquefaction. What caused this phenomenon?',
        options: [
          'The river water overflowed due to heavy rain.',
          'Strong shaking increased water pressure in loose soil.',
          'The ground fault directly opened under the river.',
          'Underground lava caused soil movement.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq6',
        question: 'In a city built on reclaimed land, buildings suffer more damage during an earthquake than those on solid rock. What best explains this difference?',
        options: [
          'Reclaimed land has stronger soil.',
          'Solid rock amplifies seismic waves.',
          'Soft soil increases shaking intensity.',
          'Both areas have equal risk.'
        ],
        correctAnswer: 2
      },
      {
        id: 'fq7',
        question: 'PHIVOLCS records a series of small tremors near a volcano over several weeks. What pattern could this indicate?',
        options: [
          'The volcano might be entering a rest period.',
          'A possible larger seismic event or eruption.',
          'Random natural movements with no risk.',
          'A decrease in tectonic activity.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq8',
        question: 'A hazard map shows that areas with soft soil near fault lines experienced more ground rupture in the past. What pattern can you recognize from this data?',
        options: [
          'Hard soil areas are more dangerous.',
          'Fault lines and soft soil together increase hazard risk.',
          'Distance to the sea affects rupture frequency.',
          'Past ruptures don’t affect future hazards.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq9',
        question: 'You are part of the school\'s disaster committee. A mild quake happens while class is ongoing. What is the most appropriate decision?',
        options: [
          'Stay seated and continue the lesson.',
          'Evacuate calmly and follow the earthquake drill procedure.',
          'Run outside immediately without coordination.',
          'Wait for aftershocks before moving.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq10',
        question: 'Your barangay is planning to build new housing near a known fault line. What is the best decision to recommend based on hazard forecasting?',
        options: [
          'Approve construction since earthquakes can’t be predicted.',
          'Continue construction but skip building permits.',
          'Relocate the site to a safer distance from the fault.',
          'Ignore hazard maps since they are only estimates.'
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Hydrometeorological Hazards',
    description: 'Learn about hazards caused by atmospheric, hydrological, or oceanographic processes like cyclones, floods, and droughts.',
    topic: 'Flood',
    imageUrl: 'https://i.imgur.com/mL67Bpp.jpeg',
    readTime: 12,
    difficulty: 'Beginner',
    objectives: [
      'Recognize signs of impending hydrometeorological hazards',
      'Distinguish between natural signs and scientific forecasting',
      'Understand the impact of floods, cyclones, and storm surges'
    ],
    competencies: [
      'Hazard Recognition',
      'Early Warning Analysis',
      'Disaster Preparedness'
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
                Distinguish between natural signs and scientific forecasting
              </li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center justify-center min-h-full py-10">
            <div class="bg-cyan-950/40 border border-cyan-500/20 p-8 rounded-3xl max-w-4xl w-full text-center backdrop-blur-md">
               <h3 class="text-3xl md:text-5xl font-black text-cyan-400 mb-8 uppercase">Hydrometeorological Hazards</h3>
               <p class="text-xl text-slate-300 leading-relaxed mb-8">
                 Natural events caused by atmospheric, hydrological, or oceanographic processes. These include <span class="text-white font-bold">tropical cyclones, floods, storm surges, droughts, and monsoons</span>.
               </p>
               <div class="bg-black/30 p-6 rounded-2xl italic text-lg text-cyan-200">
                 "Awareness of natural warning signs saves lives — even a few minutes of early action can make a big difference."
                 <div class="text-sm font-bold text-cyan-500 mt-2 not-italic">— National Disaster Risk Reduction and Management Council (NDRRMC)</div>
               </div>
            </div>
          </div>
        `
      },
      {
        id: 'cyclone',
        title: 'Tropical Cyclone',
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
             <div class="bg-white/5 p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-start">
                <h3 class="text-3xl font-black text-white mb-6 uppercase flex items-center">
                   <span class="bg-blue-500/20 p-2 rounded-lg mr-3"><svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></span>
                   Natural Signs
                </h3>
                <ul class="space-y-4 text-lg text-slate-300">
                   <li class="flex items-start"><span class="text-blue-500 mr-2">►</span> Sudden drop in air pressure & increased humidity</li>
                   <li class="flex items-start"><span class="text-blue-500 mr-2">►</span> Dark, thick clouds in the eastern sky</li>
                   <li class="flex items-start"><span class="text-blue-500 mr-2">►</span> Strong winds shifting directions rapidly</li>
                   <li class="flex items-start"><span class="text-blue-500 mr-2">►</span> Continuous heavy rain</li>
                </ul>
             </div>
             <div class="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/20 h-full flex flex-col justify-start">
                <h3 class="text-3xl font-black text-blue-300 mb-6 uppercase flex items-center">
                   <span class="bg-blue-500/20 p-2 rounded-lg mr-3"><svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></span>
                   Scientific Forecasting
                </h3>
                <ul class="space-y-4 text-lg text-blue-100">
                   <li class="flex items-start"><span class="text-blue-400 mr-2">►</span> PAGASA satellite images showing spiral clouds</li>
                   <li class="flex items-start"><span class="text-blue-400 mr-2">►</span> Weather bulletins announcing depressions</li>
                   <li class="flex items-start"><span class="text-blue-400 mr-2">►</span> Warning signals (Signal Nos. 1–5)</li>
                </ul>
                <div class="mt-8 p-4 bg-black/20 rounded-xl text-sm text-slate-400 italic">
                   "Before Typhoon Yolanda (2013), PAGASA recorded a drastic pressure drop and spiral cloud formation."
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'flood',
        title: 'Flood',
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
             <div class="bg-white/5 p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-start">
                <h3 class="text-3xl font-black text-white mb-6 uppercase">Natural Signs</h3>
                <ul class="space-y-4 text-lg text-slate-300">
                   <li>Continuous heavy rainfall for hours</li>
                   <li>Rising water levels in rivers and creeks</li>
                   <li>Overflowing canals or drainage</li>
                   <li>Soil softening or water seeping from ground</li>
                </ul>
             </div>
             <div class="bg-cyan-900/20 p-8 rounded-3xl border border-cyan-500/20 h-full flex flex-col justify-start">
                <h3 class="text-3xl font-black text-cyan-300 mb-6 uppercase">Scientific Signs</h3>
                <ul class="space-y-4 text-lg text-cyan-100">
                   <li>PAGASA rainfall radar (>50mm/hr)</li>
                   <li>Color-coded warnings (Yellow, Orange, Red)</li>
                   <li>Flood forecasting system alerts</li>
                </ul>
             </div>
          </div>
        `
      },
      {
        id: 'storm-surge',
        title: 'Storm Surge',
        content: `
          <div class="flex flex-col h-full justify-start space-y-8">
             <div class="bg-indigo-900/30 border border-indigo-500/20 p-8 rounded-3xl">
                <h3 class="text-3xl font-black text-indigo-300 mb-6 uppercase">Natural Signs</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-slate-200">
                   <div class="bg-black/20 p-4 rounded-xl">Unusually calm sea followed by sudden rise</div>
                   <div class="bg-black/20 p-4 rounded-xl">Strong winds blowing toward shore</div>
                   <div class="bg-black/20 p-4 rounded-xl">Rapidly receding shoreline</div>
                   <div class="bg-black/20 p-4 rounded-xl">Dark clouds near the coast</div>
                </div>
             </div>
             <div class="bg-black/20 p-6 rounded-2xl border-l-4 border-indigo-500">
                <h4 class="text-indigo-400 font-bold uppercase mb-2">Real World Example</h4>
                <p class="text-slate-300 text-lg">During Typhoon Yolanda, storm surges up to 7 meters high devastated Tacloban City.</p>
             </div>
          </div>
        `
      },
      {
        id: 'landslide-hydro',
        title: 'Rain-Induced Landslide',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2">
                 <div class="space-y-8">
                    <div>
                       <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Landslide Signs</h3>
                       <p class="text-2xl text-slate-300 font-light">triggered by intense rainfall.</p>
                    </div>

                    <div class="space-y-4">
                       <div class="bg-stone-900/40 p-5 rounded-2xl border border-stone-600/30 hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                          <h4 class="text-stone-300 font-bold uppercase mb-2 group-hover:text-white">Natural Indicators</h4>
                          <ul class="space-y-2 text-slate-400">
                             <li class="hover:translate-x-1 transition-transform">• Cracks appearing on ground or walls</li>
                             <li class="hover:translate-x-1 transition-transform">• Tilting of trees or poles</li>
                             <li class="hover:translate-x-1 transition-transform">• Sudden appearance of muddy springs</li>
                             <li class="hover:translate-x-1 transition-transform">• Rumbling sounds from slopes</li>
                          </ul>
                       </div>
                       <div class="bg-emerald-900/20 p-5 rounded-2xl border border-emerald-500/20 hover:bg-emerald-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                          <h4 class="text-emerald-300 font-bold uppercase mb-2 group-hover:text-emerald-200">Scientific Indicators</h4>
                          <ul class="space-y-2 text-emerald-100">
                             <li class="hover:translate-x-1 transition-transform">• Soil moisture saturation sensors</li>
                             <li class="hover:translate-x-1 transition-transform">• Rainfall threshold exceeded</li>
                             <li class="hover:translate-x-1 transition-transform">• Ground deformation monitoring</li>
                          </ul>
                       </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/21135449/landslide-philippines.jpg" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Maco, Davao de Oro Landslide</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://floodlist.com/wp-content/uploads/2022/10/Landslide-Philippines-Civil-Defense-Northern-Mindanao-Region-10-1536x1152.jpg" alt="Naga City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://floodlist.com/asia/philippines-northern-mindanao-october-2022" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Naga City, Cebu Rescue Operations</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://blogs.agu.org/landslideblog/files/2022/07/22_07-Philippines-2.jpg" alt="Guinsaugon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://blogs.agu.org/landslideblog/2022/07/28/abra-earthquake-1/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Guinsaugon, Southern Leyte Catastrophe</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'drought',
        title: 'Drought',
        content: `
          <div class="flex flex-col h-full justify-start space-y-8">
             <div class="bg-orange-900/20 border border-orange-500/20 p-8 rounded-3xl text-center">
                <h3 class="text-4xl font-black text-orange-300 mb-6 uppercase">Drought Signs</h3>
                <div class="grid grid-cols-2 gap-4 text-left text-lg text-slate-300">
                   <div>• Prolonged dry/hot days</div>
                   <div>• Wilting crops and grass</div>
                   <div>• Drying of small water bodies</div>
                   <div>• Dusty air</div>
                </div>
                <div class="mt-8 pt-6 border-t border-orange-500/30 text-orange-200">
                   <p class="font-bold">Scientific: El Niño Advisory</p>
                   <p class="text-sm opacity-80">Decreased water levels in dams (e.g., Angat Dam).</p>
                </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      { id: 'hq1', question: 'What is a sign of an impending flood?', options: ['Clear skies', 'Rising river levels', 'Low humidity', 'Strong winds'], correctAnswer: 1 },
      { id: 'hq2', question: 'Which agency issues tropical cyclone warnings?', options: ['PHIVOLCS', 'PAGASA', 'DSWD', 'DepEd'], correctAnswer: 1 },
      { id: 'hq3', question: 'What characterizes a storm surge?', options: ['Receding shoreline', 'Heavy rain only', 'Ground shaking', 'Fire'], correctAnswer: 0 }
    ],
    finalQuiz: [
      { id: 'fhq1', question: 'A low-pressure area enters PAR. What should officials do?', options: ['Wait for rain', 'Monitor PAGASA updates', 'Ignore it', 'Focus on temp'], correctAnswer: 1 },
      { id: 'fhq2', question: 'Rapid cloud buildup and pressure drop indicate what?', options: ['Clear weather', 'Possible storm', 'Volcano', 'Heatwave'], correctAnswer: 1 },
      { id: 'fhq3', question: 'How to verify a "Super Typhoon" rumor?', options: ['Share it', 'Wait for rain', 'Check PAGASA bulletin', 'Believe likes'], correctAnswer: 2 },
      { id: 'fhq4', question: 'Flood warning on app but no official news. Action?', options: ['Compare with govt advisory', 'Ignore', 'Evacuate immediately', 'Ask friends'], correctAnswer: 0 },
      { id: 'fhq5', question: 'Landslide occurs after days of rain. Cause?', options: ['Strong winds', 'Soil saturation', 'Earthquake', 'Dry land'], correctAnswer: 1 },
      { id: 'fhq6', question: 'Flooding with moderate rain. Cause?', options: ['Clogged drainage', 'Sunlight', 'Distance to coast', 'Wind'], correctAnswer: 0 },
      { id: 'fhq7', question: 'Typhoons happen every last quarter. Pattern?', options: ['Safe season', 'Common path during monsoon', 'Random', 'Human activity'], correctAnswer: 1 },
      { id: 'fhq8', question: 'Flash floods after intense rain. Pattern?', options: ['Sea level', 'Rainfall intensity relation', 'Coincidence', 'No connection'], correctAnswer: 1 },
      { id: 'fhq9', question: 'Signal No. 3 raised. Family action?', options: ['Watch winds', 'Secure house & prepare go-bag', 'Wait for rain stop', 'Normal activity'], correctAnswer: 1 },
      { id: 'fhq10', question: 'Heavy rain since morning in flood area. School action?', options: ['Continue class', 'Wait for mayor', 'Suspend early & safety', 'Observe'], correctAnswer: 2 }
    ]
  },
  {
    id: '3',
    title: 'Volcano-Related Hazards',
    description: 'Understand volcanic eruptions, ash fall, lahars, and pyroclastic flows.',
    topic: 'Volcano',
    imageUrl: 'https://i.imgur.com/eQVYVP2.jpeg',
    readTime: 15,
    difficulty: 'Advanced',
    objectives: [
      'Explain various volcano-related hazards',
      'Recognize signs of an impending volcanic eruption',
      'Understand the danger of pyroclastic flows and lahars'
    ],
    competencies: [
      'Hazard Identification',
      'Warning Sign Recognition',
      'Evacuation Planning'
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
               <li class="flex items-center"><svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Explain various volcano-related hazards</li>
               <li class="flex items-center"><svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Recognize signs of impending eruption</li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center justify-center min-h-full py-10">
             <div class="bg-red-950/40 border border-red-500/20 p-8 rounded-3xl max-w-4xl text-center backdrop-blur-md">
                <h3 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 uppercase mb-8">Volcano Hazards</h3>
                <p class="text-xl text-slate-300 mb-6 leading-relaxed">
                   Volcanoes create landforms but cause large-scale destruction. Recognizing hazards like <span class="text-red-400 font-bold">magma, gas, and ash</span> is critical for saving lives.
                </p>
                <p class="text-lg italic text-red-200">"Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness." — PHIVOLCS</p>
             </div>
          </div>
        `
      },
      {
        id: 'pyroclastic',
        title: 'Pyroclastic Flow',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Pyroclastic Flow</h3>
                    <p class="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                       A fast-moving mixture of hot gases, ash, and volcanic rocks that rush down the slopes of a volcano at speeds over <span class="text-red-400 font-bold">100 km/h</span>.
                    </p>
                    
                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-red-950/30 border border-red-500/20 p-5 rounded-2xl flex items-start hover:bg-red-900/30 transition-all duration-300 hover:scale-[1.02] group">
                          <div class="bg-red-500/20 p-3 rounded-lg mr-4 group-hover:bg-red-500/40 transition-colors">
                             <svg class="w-6 h-6 text-red-400 group-hover:text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-red-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Extreme Heat</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Temperatures can reach up to <span class="text-white font-bold">800°C</span>, causing instant incineration.</p>
                          </div>
                       </div>
                       <div class="bg-red-950/30 border border-red-500/20 p-5 rounded-2xl flex items-start hover:bg-red-900/30 transition-all duration-300 hover:scale-[1.02] group">
                          <div class="bg-red-500/20 p-3 rounded-lg mr-4 group-hover:bg-red-500/40 transition-colors">
                             <svg class="w-6 h-6 text-red-400 group-hover:text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-red-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Massive Destruction</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Burial of areas under thick deposits of ash and rock; destruction of forests and crops.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-xl">
                       <p class="text-red-200 italic text-lg">"The 1991 Mount Pinatubo eruption produced pyroclastic flows that buried towns in Pampanga and Zambales."</p>
                       <p class="text-red-400 text-sm mt-2 font-bold uppercase">— PHIVOLCS, 2020</p>
                    </div>

                    <div class="bg-orange-950/40 border border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-sm mb-1 group-hover:text-orange-200">Safety Protocol: Evacuation</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Pyroclastic flows are faster than vehicles. Evacuate immediately upon <span class="text-white font-bold bg-orange-600/50 px-1 rounded">Alert Level 3 or 4</span>. Stay out of valleys.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg" alt="Mayon Pyroclastic Flow" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://en.wikipedia.org/wiki/File:Pyroclastic_flows_at_Mayon_Volcano.jpg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Mayon Volcano (Philippines), known for its classic cone and frequent pyroclastic density currents.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.si.edu/gallery/photos/GVP-00956.jpg" alt="Mayon Flow 2" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.si.edu/gallery/ShowImage.cfm?photo=GVP-00956" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Pyroclastic flow descending the slopes of Mayon Volcano.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'ash-fall',
        title: 'Ash Fall',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Ash Fall (Tephra)</h3>
                    <p class="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                       Volcanic ash and rock fragments ejected during explosive eruptions that fall to the ground.
                    </p>

                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-600/30 hover:bg-slate-800/70 transition-colors">
                       <h4 class="font-bold text-white mb-4 uppercase flex items-center">
                          <span class="w-2 h-2 bg-slate-400 rounded-full mr-3 animate-pulse"></span>
                          Effects Analysis
                       </h4>
                       <ul class="text-slate-300 space-y-3 text-lg">
                          <li class="flex items-start"><span class="text-slate-500 mr-2">►</span> Roof collapse due to heavy ash accumulation</li>
                          <li class="flex items-start"><span class="text-slate-500 mr-2">►</span> Reduced air quality causing respiratory problems</li>
                          <li class="flex items-start"><span class="text-slate-500 mr-2">►</span> Flight cancellations due to low visibility</li>
                          <li class="flex items-start"><span class="text-slate-500 mr-2">►</span> Contamination of water supplies</li>
                       </ul>
                    </div>

                    <div class="bg-slate-900/40 border-l-4 border-slate-500 p-5 rounded-r-xl">
                       <p class="text-slate-300 italic text-lg">"The 2020 Taal Volcano eruption blanketed nearby towns with thick ash, forcing mass evacuations."</p>
                       <p class="text-slate-500 text-sm mt-2 font-bold uppercase">— PHIVOLCS, 2021</p>
                    </div>

                    <div class="bg-slate-900/40 border border-slate-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-slate-800/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-slate-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-slate-300 font-bold uppercase text-sm mb-1 group-hover:text-white">Safety Protocol: Mask Up</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Wear N95 masks or cover mouth/nose with damp cloth. Close windows and doors to prevent ash entry.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://1cms-img.imgix.net/Aerial-view.jpg?auto=compress" alt="Taal Ash" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.onenews.ph/articles/the-hazards-of-volcanic-ash-being-rock-and-natural-glass-particles" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Examples from Taal Volcano (Philippines), showing heavy ash fall.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://www.traveldailymedia.com/assets/2020/01/taal-volcano-eruption.jpg" alt="Taal Eruption" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.traveldailymedia.com/philippines-taal-volcano-ash-fall-suspends-flights-in-manila/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Taal Volcano ash fall suspending flights in Manila.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'lahar',
        title: 'Lahars',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-stone-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Lahars (Mudflows)</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-light leading-relaxed">
                       Mixtures of volcanic ash, rocks, and water flowing down river valleys, often triggered by rain or melting ice.
                    </p>
                    
                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Community Burial</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Burial of communities and farmlands; long-term river siltation.</p>
                          </div>
                       </div>
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white">Infrastructure Loss</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300">Destruction of bridges and transportation infrastructure.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-stone-900/40 border border-stone-500/30 p-6 rounded-2xl border-l-4 border-l-stone-400">
                       <p class="text-stone-300 italic text-lg">"Post-eruption lahars from Mount Pinatubo continued for years after 1991, affecting Pampanga and Tarlac."</p>
                       <p class="text-stone-500 text-sm mt-2 font-bold uppercase">— Lagmay et al., 2020</p>
                    </div>

                    <div class="bg-stone-950/40 border border-stone-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-stone-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-stone-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-stone-300 font-bold uppercase text-sm mb-1 group-hover:text-stone-200">Safety Protocol: Avoid Valleys</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Lahars follow river valleys. Move to <span class="text-white font-bold bg-stone-600/50 px-1 rounded">high ground</span> immediately when rain starts near volcanic deposits.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://pubs.usgs.gov/fs/1997/fs114-97/resources/lourdes.jpg" alt="Pinatubo Lahar" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://pubs.usgs.gov/fs/1997/fs114-97/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Destructive lahars from Mount Pinatubo (Philippines).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcanofoundation.org/wp-content/uploads/2021/07/lhar-devastation-eruption-mount-pinatubo-philippines.jpg" alt="Lahar Devastation" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcanofoundation.org/building-risk-knowledge/hazards/lahars/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Building risk knowledge: Lahar devastation.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'lava-flows',
        title: 'Lava Flows',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Lava Flows</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-light leading-relaxed">
                       Molten rock that flows from the crater during a non-explosive eruption.
                    </p>

                    <div class="bg-orange-900/20 border border-orange-500/20 p-6 rounded-2xl">
                       <h4 class="font-bold text-orange-400 mb-4 uppercase flex items-center">Effects</h4>
                       <ul class="space-y-3 text-lg text-slate-300">
                          <li class="flex items-start"><span class="text-orange-500 mr-2">►</span> Burns everything it touches but moves slowly</li>
                          <li class="flex items-start"><span class="text-orange-500 mr-2">►</span> Destroys farmland and infrastructure</li>
                          <li class="flex items-start"><span class="text-orange-500 mr-2">►</span> Creates new land when it cools</li>
                       </ul>
                    </div>

                    <div class="bg-orange-950/40 border-l-4 border-orange-500 p-5 rounded-r-xl">
                       <p class="text-orange-200 italic text-lg">"The Mayon Volcano’s eruptions often produce lava flows that threaten nearby barangays in Albay."</p>
                       <p class="text-orange-400 text-sm mt-2 font-bold uppercase">— PHIVOLCS, 2023</p>
                    </div>

                    <div class="bg-orange-950/40 border border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-sm mb-1 group-hover:text-orange-200">Safety Protocol: Evacuate Calmly</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                Lava moves slowly. You typically have time to <span class="text-white font-bold bg-orange-600/50 px-1 rounded">walk away</span> from the path of flow. Follow designated evacuation routes.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcanodiscovery.de/uploads/pics/2018/02/DSC_4213.jpg" alt="Mayon Lava" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.volcanodiscovery.com/es/mayon/news/67715/Mayon-volcano-Philippines-lava-flows-remain-active-resumption-of-explosive-activity.html" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Lava flows from Mayon Volcano (Philippines).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://static.temblor.net/wp-content/uploads/2018/01/mayon-volcano-eruption.jpg" alt="Mayon Eruption" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://temblor.net/volcano-insights/mayon-volcano-forces-evacuation-of-nearly-40000-people-6128/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Mayon Volcano forces evacuation.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'volcanic-gases',
        title: 'Volcanic Gases',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Volcanic Gases</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-light leading-relaxed">
                       Emissions of gases such as sulfur dioxide (SO₂), carbon dioxide (CO₂), and hydrogen sulfide (H₂S) released before, during, or after eruptions.
                    </p>

                    <div class="bg-yellow-900/20 border border-yellow-500/20 p-6 rounded-2xl">
                       <h4 class="font-bold text-yellow-400 mb-4 uppercase flex items-center">Effects</h4>
                       <ul class="space-y-3 text-lg text-slate-300">
                          <li class="flex items-start"><span class="text-yellow-500 mr-2">►</span> Poisoning of animals and humans in low-lying areas</li>
                          <li class="flex items-start"><span class="text-yellow-500 mr-2">►</span> Acid rain formation damaging crops and water</li>
                          <li class="flex items-start"><span class="text-yellow-500 mr-2">►</span> Atmospheric pollution contributing to global cooling</li>
                       </ul>
                    </div>
                    
                    <div class="bg-yellow-950/40 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                       <p class="text-yellow-200 italic text-lg">"Taal Volcano releases sulfur dioxide plumes, monitored by PHIVOLCS to estimate eruption probability."</p>
                       <p class="text-yellow-400 text-sm mt-2 font-bold uppercase">— PHIVOLCS Gas Monitoring Bulletin, 2023</p>
                    </div>

                    <div class="bg-yellow-950/40 border border-yellow-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-yellow-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-yellow-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-yellow-300 font-bold uppercase text-sm mb-1 group-hover:text-yellow-200">Safety Protocol: Mask & Seal</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                If you smell rotten eggs (sulfur), <span class="text-white font-bold bg-yellow-600/50 px-1 rounded">cover your face</span> and seal windows. Move to higher ground if gases accumulate.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://files01.pna.gov.ph/category-list/2021/10/15/img20211015220021.jpg" alt="Taal Vog" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.pna.gov.ph/articles/1156851" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Volcanic smog (vog) from Taal Volcano.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.si.edu/images/bulletin/273070/273070_BGVN_022.jpg" alt="Gas Emission" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.si.edu/showreport.cfm?doi=10.5479/si.GVP.BGVN202110-273070" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Gas monitoring at Taal Volcano.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'volcanic-tsunami',
        title: 'Volcanic Tsunami',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[calc(100vh-250px)] relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default">Volcanic Tsunami</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-light leading-relaxed">
                       Large sea waves generated by underwater eruptions, landslides, or caldera collapses.
                    </p>

                    <div class="bg-indigo-900/20 border border-indigo-500/20 p-6 rounded-2xl">
                       <h4 class="font-bold text-indigo-400 mb-4 uppercase flex items-center">Effects</h4>
                       <ul class="space-y-3 text-lg text-slate-300">
                          <li class="flex items-start"><span class="text-indigo-500 mr-2">►</span> Flooding of coastal communities</li>
                          <li class="flex items-start"><span class="text-indigo-500 mr-2">►</span> Destruction of ports and fishing areas</li>
                          <li class="flex items-start"><span class="text-indigo-500 mr-2">►</span> Risk to nearby islands and coastal cities</li>
                       </ul>
                    </div>

                    <div class="bg-indigo-950/40 border-l-4 border-indigo-500 p-5 rounded-r-xl">
                       <p class="text-indigo-200 italic text-lg">"The 2022 Hunga Tonga–Hunga Ha’apai eruption generated a tsunami that reached the Philippines."</p>
                       <p class="text-indigo-400 text-sm mt-2 font-bold uppercase">— USGS, 2022</p>
                    </div>

                    <div class="bg-indigo-950/40 border border-indigo-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-indigo-900/40 transition-colors duration-500 group">
                        <div class="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                             <svg class="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-indigo-300 font-bold uppercase text-sm mb-1 group-hover:text-indigo-200">Safety Protocol: Immediate Evacuation</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                If you feel a strong quake near the coast or see sudden sea level changes, <span class="text-white font-bold bg-indigo-600/50 px-1 rounded">evacuate inland</span> immediately.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller auto-scroll-container overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://nhess.copernicus.org/articles/20/549/2020/nhess-20-549-2020-f11-thumb.jpg" alt="Anak Krakatau Tsunami" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://nhess.copernicus.org/articles/20/549/2020/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Example of a major volcanic tsunami (2018).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.oregonstate.edu/sites/volcano.oregonstate.edu/files/tongaquake.jpg" alt="Tonga Tsunami" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.oregonstate.edu/volcanogenic-tsunamis" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20" title="View Source">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-sm text-slate-200 font-bold mb-1">Hunga Tonga–Hunga Ha’apai eruption generated a tsunami.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      { id: 'vq1', question: 'What is a pyroclastic flow?', options: ['Water flood', 'Hot gas & rock mix', 'Lava river', 'Ash cloud'], correctAnswer: 1 },
      { id: 'vq2', question: 'Lahars are often triggered by?', options: ['Wind', 'Rain', 'Sun', 'Snow'], correctAnswer: 1 },
      { id: 'vq3', question: 'What gas smells like rotten eggs?', options: ['Sulfur Dioxide', 'Oxygen', 'Carbon Dioxide', 'Helium'], correctAnswer: 0 }
    ],
    finalQuiz: [
      { id: 'vfq1', question: 'Ground deformation and quakes near Mayon indicate?', options: ['Normal state', 'Magma moving up', 'Wind pressure', 'Cooling'], correctAnswer: 1 },
      { id: 'vfq2', question: 'Sulfur smell and steam rising. Action?', options: ['Dismiss', 'Monitor & Report', 'Evacuate now', 'Wait for ash'], correctAnswer: 1 },
      { id: 'vfq3', question: 'Verify "Taal erupting this weekend" post?', options: ['Check PHIVOLCS', 'Believe trending', 'Wait for explosion', 'Share'], correctAnswer: 0 },
      { id: 'vfq4', question: 'Alert level 1 to 3 means?', options: ['Erupted', 'Increased hazardous tendency', 'Safe', 'Stopped gas'], correctAnswer: 1 },
      { id: 'vfq5', question: 'River lahar after rain. Cause?', options: ['Cooling magma', 'Ash/debris mix with rain', 'Quakes', 'Fires'], correctAnswer: 1 },
      { id: 'vfq6', question: 'Villages buried in hot gas/fragments. Hazard?', options: ['Pyroclastic flow', 'Flood', 'Lava', 'Gas buildup'], correctAnswer: 0 },
      { id: 'vfq7', question: 'Harmonic tremors + gas increase. Pattern?', options: ['Dormant', 'Potential eruption', 'Decreasing', 'Weather'], correctAnswer: 1 },
      { id: 'vfq8', question: 'Crater lake color change followed by eruption pattern. Imply?', options: ['Ignore', 'Early warning', 'Seasonal', 'Pollution'], correctAnswer: 1 },
      { id: 'vfq9', question: 'Alert Level 4. You live 8km away. Action?', options: ['Stay alert', 'Evacuate', 'Wait for ash', 'Climb'], correctAnswer: 1 },
      { id: 'vfq10', question: 'Tourist visit during Alert Level 2. Decision?', options: ['Allow', 'Limit & Wait', 'Promote', 'Ignore'], correctAnswer: 1 }
    ]
  }
];

export const FLOOD_SCENARIOS: FloodScenario[] = [
  {
    id: '1',
    text: 'Heavy rain causes rapid water rise. You are on the ground floor.',
    isSafe: false,
    explanation: 'Move to a higher floor or roof immediately. Ground floors flood quickly.',
  },
  {
    id: '2',
    text: 'You see water flowing over a road. It looks shallow.',
    isSafe: false,
    explanation: 'Never walk or drive through moving water. It can sweep you away.',
  },
  {
    id: '3',
    text: 'Floodwaters enter your home. You turn off the main power from a dry spot.',
    isSafe: true,
    explanation: 'Cutting power prevents electrocution, but ensure you are dry.',
  },
  {
    id: '4',
    text: 'You follow designated evacuation routes to higher ground.',
    isSafe: true,
    explanation: 'Designated routes are checked for safety. Shortcuts may be blocked.',
  },
  {
    id: '5',
    text: 'The rain stops. You return home immediately.',
    isSafe: false,
    explanation: 'Wait for official "All Clear". Hazards may persist.',
  }
];