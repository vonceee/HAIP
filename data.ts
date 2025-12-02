

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
          <div class="flex flex-col items-center text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 py-12">
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-4 group cursor-pointer hover:scale-105 transition-transform duration-500">
              <!-- Animated Visual Icon (Seismic Pulse) -->
              <div class="relative flex-shrink-0">
                <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/40 transition-all duration-500"></div>
                <svg class="w-24 h-24 md:w-32 md:h-32 text-orange-500 transform group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase tracking-tighter drop-shadow-2xl">
                Earthquakes
              </h3>
            </div>
            
            <div class="max-w-6xl mx-auto space-y-10 px-6">
               <!-- Primary Content Card -->
               <div class="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)]">
                  <div class="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] group-hover:bg-orange-500/20 transition-all"></div>
                  
                  <p class="text-3xl md:text-4xl text-slate-100 font-light leading-relaxed relative z-10 text-justify md:text-center mb-10">
                    <span class="font-black text-orange-400">Earthquakes</span> are among the most destructive natural hazards on Earth.
                  </p>
                  
                  <p class="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed relative z-10 text-justify md:text-center">
                    Their impacts go beyond ground shaking—they trigger a chain of <span class="font-bold text-white">secondary hazards</span> that pose immediate threats to human life, infrastructure, and the environment.
                  </p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 relative z-10">
                     <div class="bg-black/30 p-6 rounded-2xl border border-orange-500/10 hover:border-orange-500/40 transition-colors group/badge cursor-default hover:-translate-y-2 duration-300">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white">Predict</div>
                        <div class="text-slate-300 text-lg">Anticipate potential secondary hazards before they strike.</div>
                     </div>
                     <div class="bg-black/30 p-6 rounded-2xl border border-orange-500/10 hover:border-orange-500/40 transition-colors group/badge cursor-default hover:-translate-y-2 duration-300 delay-100">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white">Minimize</div>
                        <div class="text-slate-300 text-lg">Reduce casualties through strategic planning.</div>
                     </div>
                     <div class="bg-black/30 p-6 rounded-2xl border border-orange-500/10 hover:border-orange-500/40 transition-colors group/badge cursor-default hover:-translate-y-2 duration-300 delay-200">
                        <div class="text-orange-500 font-black uppercase text-sm mb-2 tracking-widest group-hover/badge:text-white">Strengthen</div>
                        <div class="text-slate-300 text-lg">Build long-term disaster resilience.</div>
                     </div>
                  </div>

                  <div class="mt-12 pt-12 border-t border-white/5">
                     <p class="text-2xl text-slate-400 font-medium italic">
                       "Analyzing these effects is crucial for developing predictive skills and effective disaster preparedness."
                     </p>
                     <p class="text-sm text-orange-500/60 mt-4 uppercase tracking-widest font-bold">
                       Reference: PHIVOLCS (2023)
                     </p>
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
          <div class="flex flex-col space-y-12 animate-in fade-in duration-700 py-6">
            
            <div class="relative z-10">
              <h3 class="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                Ground Shaking
              </h3>
              
              <div class="grid grid-cols-1 gap-8 items-center">
                 <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <p class="text-2xl text-slate-200 leading-relaxed mb-6 font-light">
                      The vibration of the ground caused by the sudden release of energy during an earthquake.
                    </p>
                    <div class="h-32 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden relative border border-white/10">
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6">
                <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 uppercase">Ground Rupture</h3>
                <p class="text-2xl text-slate-300 mb-8 font-light">
                  The visible tearing or displacement of the ground surface along an active fault during an earthquake.
                </p>
                
                <div class="space-y-6">
                  <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h4 class="text-lg font-bold text-orange-400 mb-2 uppercase tracking-wide">Effects Analysis</h4>
                    <ul class="list-disc list-inside space-y-2 text-slate-300">
                      <li>Direct damage to buildings crossing fault lines.</li>
                      <li>Land becomes uninhabitable, limiting expansion.</li>
                      <li>Drastic relocation and reconstruction costs.</li>
                    </ul>
                  </div>
                </div>
             </div>

             <div class="flex flex-col justify-center h-full lg:px-12">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                   <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToS-znEiOO7d1W94qFPB_ZXpGwqZg7gFRHroWyeWwDAJ9sJgX0xuAyLVGuMtoe" alt="Ground Rupture Example" class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "A potential ground rupture along the West Valley Fault could damage parts of Quezon City."
                      </p>
                      <p class="text-[10px] text-orange-500 font-bold mt-1 uppercase tracking-widest">
                        Ref: PHIVOLCS Faultfinder Database (2023)
                      </p>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6">
                <h3 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 mb-6 uppercase">Liquefaction</h3>
                <p class="text-2xl text-slate-300 mb-8 font-light">
                  The process where water-saturated, loose soil behaves like a liquid during intense shaking.
                </p>
                
                <div class="space-y-6">
                  <div class="bg-cyan-950/30 border border-cyan-500/20 p-6 rounded-2xl">
                    <h4 class="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide">Critical Impacts</h4>
                    <ul class="space-y-3 text-slate-300 text-lg">
                      <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Building Instability: Structures sink or tilt.</li>
                      <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Underground Damage: Pipes burst due to soil movement.</li>
                      <li class="flex items-start"><span class="text-cyan-500 mr-2">►</span> Economic Disruption: High recovery costs for industrial zones.</li>
                    </ul>
                  </div>
                </div>
             </div>

             <div class="flex flex-col justify-center h-full lg:px-12">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                   <img src="https://picsum.photos/seed/liquefaction/800/600" alt="Liquefaction Example" class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "During 2019 Cotabato earthquakes, Kidapawan experienced liquefaction damaging roads."
                      </p>
                      <p class="text-[10px] text-cyan-500 font-bold mt-1 uppercase tracking-widest">
                        Ref: PHIVOLCS Earthquake Report (2019)
                      </p>
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
                   <img src="https://picsum.photos/seed/landslide/800/600" alt="Landslide Example" class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 sepia hover:sepia-0" />
                   <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10">
                      <p class="text-sm text-slate-300 italic">
                        "The 1990 Luzon Earthquake triggered massive landslides in Benguet."
                      </p>
                      <p class="text-[10px] text-stone-500 font-bold mt-1 uppercase tracking-widest">
                        Ref: Lagmay, A. M. F. et al. (2020)
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
                   <img src="https://picsum.photos/seed/tsunami/800/600" alt="Tsunami Example" class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 bg-blue-900" />
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
                   <img src="https://picsum.photos/seed/fire/800/600" alt="Fire Example" class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 hue-rotate-15" />
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
                   <p class="text-2xl text-slate-200 font-light">Abnormal rise of water generated by a storm, over and above the predicted astronomical tide.</p>
                   
                   <div class="bg-indigo-950/40 p-6 rounded-2xl border border-indigo-500/20">
                      <h4 class="text-xl font-bold text-indigo-300 mb-4">Critical Signs</h4>
                      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <li class="flex items-center bg-black/20 p-3 rounded-lg"><span class="text-2xl mr-3">🌊</span> Unusually calm sea followed by sudden rise</li>
                         <li class="flex items-center bg-black/20 p-3 rounded-lg"><span class="text-2xl mr-3">🌬️</span> Strong winds blowing toward shore</li>
                         <li class="flex items-center bg-black/20 p-3 rounded-lg"><span class="text-2xl mr-3">📉</span> Rapidly receding shoreline</li>
                         <li class="flex items-center bg-black/20 p-3 rounded-lg"><span class="text-2xl mr-3">☁️</span> Low-pressure readings</li>
                      </ul>
                   </div>
                </div>
                
                <div class="relative rounded-2xl overflow-hidden border border-white/10 group">
                   <img src="https://picsum.photos/seed/surge/400/600" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Storm Surge" />
                   <div class="absolute inset-0 flex items-center justify-center p-4 bg-black/60 hover:bg-transparent transition-colors">
                      <p class="text-center font-bold text-white drop-shadow-md">"Typhoon Yolanda storm surges reached up to 7 meters."</p>
                   </div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'landslide-rain',
        title: 'Rain-Induced Landslide',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
             <div class="flex flex-col justify-start space-y-6">
                <h3 class="text-4xl font-black text-emerald-400 uppercase">Landslide</h3>
                <p class="text-lg text-slate-300">Movement of rock, debris, or earth down a slope.</p>
                
                <div class="space-y-3">
                   <div class="flex items-start">
                      <div class="bg-emerald-500/20 p-2 rounded mr-4 mt-1"><span class="block w-2 h-2 bg-emerald-500 rounded-full"></span></div>
                      <div>
                         <div class="font-bold text-emerald-200">Cracks</div>
                         <div class="text-sm text-slate-400">Appearing on ground or walls.</div>
                      </div>
                   </div>
                   <div class="flex items-start">
                      <div class="bg-emerald-500/20 p-2 rounded mr-4 mt-1"><span class="block w-2 h-2 bg-emerald-500 rounded-full"></span></div>
                      <div>
                         <div class="font-bold text-emerald-200">Tilting</div>
                         <div class="text-sm text-slate-400">Trees, poles, or fences shifting.</div>
                      </div>
                   </div>
                   <div class="flex items-start">
                      <div class="bg-emerald-500/20 p-2 rounded mr-4 mt-1"><span class="block w-2 h-2 bg-emerald-500 rounded-full"></span></div>
                      <div>
                         <div class="font-bold text-emerald-200">Muddy Springs</div>
                         <div class="text-sm text-slate-400">Sudden appearance of water/mud.</div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div class="h-64 lg:h-full bg-slate-800 rounded-3xl overflow-hidden border border-white/10 relative">
                 <img src="https://picsum.photos/seed/mudslide/600/600" class="w-full h-full object-cover opacity-60" />
                 <div class="absolute bottom-4 left-4 right-4 bg-black/80 p-3 rounded-lg backdrop-blur-sm">
                    <div class="text-xs text-emerald-400 font-bold uppercase mb-1">Historical Case</div>
                    <div class="text-sm text-white">2006 Leyte Landslide preceded by days of intense rainfall.</div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'drought',
        title: 'Drought',
        content: `
          <div class="flex flex-col h-full items-center justify-center text-center space-y-8">
             <h3 class="text-5xl font-black text-amber-400 uppercase tracking-widest">Drought</h3>
             <div class="w-24 h-1 bg-amber-500 rounded-full"></div>
             
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
                <div class="bg-amber-950/30 p-8 rounded-3xl border border-amber-500/20 hover:bg-amber-900/40 transition-colors">
                   <h4 class="text-2xl font-bold text-amber-200 mb-4">Signs</h4>
                   <ul class="text-left space-y-3 text-slate-300">
                     <li>• Prolonged dry/hot days</li>
                     <li>• Drying water bodies (ponds, wells)</li>
                     <li>• Wilting crops & grass</li>
                     <li>• Dusty air</li>
                   </ul>
                </div>
                <div class="bg-amber-950/30 p-8 rounded-3xl border border-amber-500/20 hover:bg-amber-900/40 transition-colors">
                   <h4 class="text-2xl font-bold text-amber-200 mb-4">Forecasting</h4>
                   <ul class="text-left space-y-3 text-slate-300">
                     <li>• El Niño advisory from PAGASA</li>
                     <li>• Low rainfall forecasts</li>
                     <li>• Decreased dam water levels</li>
                   </ul>
                </div>
             </div>
             
             <p class="text-slate-400 italic text-sm mt-8">Ref: PAGASA (2020) Climate Monitoring Bulletin</p>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'f-r1',
        question: 'Which hazard involves an abnormal rise of sea water due to a storm?',
        options: ['Tsunami', 'Storm Surge', 'High Tide', 'Flood'],
        correctAnswer: 1
      },
      {
        id: 'f-r2',
        question: 'Who issues signals for Tropical Cyclones in the Philippines?',
        options: ['PHIVOLCS', 'PAGASA', 'MMDA', 'DepEd'],
        correctAnswer: 1
      },
      {
        id: 'f-r3',
        question: 'What color alert represents the highest rainfall warning?',
        options: ['Yellow', 'Orange', 'Red', 'Blue'],
        correctAnswer: 2
      }
    ],
    finalQuiz: [
      {
        id: 'f-q1',
        question: 'The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do?',
        options: ['Wait until heavy rains start.', 'Monitor PAGASA updates and prepare.', 'Ignore the report.', 'Focus only on temperature.'],
        correctAnswer: 1
      },
      {
        id: 'f-q2',
        question: 'Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted?',
        options: ['Clear weather', 'Possible thunderstorm or heavy rainfall', 'Volcanic eruption', 'Increasing temperature'],
        correctAnswer: 1
      },
      {
        id: 'f-q3',
        question: 'A social media post says "Super typhoon tomorrow" but PAGASA has not issued a warning. How to verify?',
        options: ['Share immediately', 'Wait for rain', 'Check official PAGASA bulletins', 'Believe the post'],
        correctAnswer: 2
      },
      {
        id: 'f-q4',
        question: 'Your phone app shows a flood warning, but local authorities haven’t announced it. What to do?',
        options: ['Compare with government advisories', 'Ignore it', 'Evacuate immediately', 'Ask friends'],
        correctAnswer: 0
      },
      {
        id: 'f-q5',
        question: 'After days of heavy rain, a hillside community experiences a landslide. Likely cause?',
        options: ['Strong winds', 'Prolonged rainfall saturated the soil', 'Earthquake', 'Dry land'],
        correctAnswer: 1
      },
      {
        id: 'f-q6',
        question: 'Flooding occurred in a city after moderate rain. Contributing factor?',
        options: ['Clogged drainage system', 'Too much sunlight', 'Far from coast', 'Wind direction'],
        correctAnswer: 0
      },
      {
        id: 'f-q7',
        question: 'Weather records show a province experiences typhoons every last quarter. What pattern is this?',
        options: ['Safe area', 'Located along common typhoon path', 'Random events', 'Human activity'],
        correctAnswer: 1
      },
      {
        id: 'f-q8',
        question: 'Flash floods always occur shortly after intense rainfall lasting >1 hour. Pattern suggestion?',
        options: ['Sea-level rise', 'Predictable relationship between rainfall intensity and flooding', 'Coincidence', 'No connection'],
        correctAnswer: 1
      },
      {
        id: 'f-q9',
        question: 'PAGASA raises Signal No. 3. What should your family do first?',
        options: ['Watch winds outside', 'Secure house, prepare go-bag, stay tuned', 'Wait for rain to stop', 'Continue normal activities'],
        correctAnswer: 1
      },
      {
        id: 'f-q10',
        question: 'School is in flood-prone area, heavy rains since morning. Decision?',
        options: ['Continue classes', 'Wait for mayor', 'Suspend classes early and ensure safety', 'Observe rain'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '3',
    title: 'Volcanic Eruptions',
    description: 'Learn about volcanic hazards like lahars, pyroclastic flows, and ashfall, and how to recognize impending eruptions.',
    topic: 'Volcano',
    imageUrl: 'https://picsum.photos/seed/volcano/800/400',
    readTime: 15,
    difficulty: 'Advanced',
    objectives: [
      'Explain various volcano-related hazards',
      'Recognize signs of an impending volcanic eruption',
      'Understand alert levels and evacuation protocols'
    ],
    competencies: [
      'Geological Hazard Awareness',
      'Emergency Response',
      'Community Safety'
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
                Understand alert levels and evacuation protocols
              </li>
            </ul>
          </div>
        `
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-700 py-10">
             <div class="relative">
                <div class="absolute inset-0 bg-red-600/20 blur-3xl rounded-full animate-pulse"></div>
                <svg class="w-32 h-32 text-red-500 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             
             <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-red-600 to-orange-400 uppercase tracking-tighter drop-shadow-2xl">
               Volcanoes
             </h3>
             
             <p class="text-2xl text-slate-200 font-light max-w-3xl leading-relaxed">
               Powerful natural systems that can both create landforms and cause large-scale destruction.
             </p>

             <div class="bg-red-950/40 p-6 rounded-2xl border border-red-500/20 max-w-2xl">
                <p class="text-slate-300 italic">"Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness and preparedness."</p>
                <div class="mt-2 text-xs text-red-400 font-bold uppercase">— PHIVOLCS, 2023</div>
             </div>
          </div>
        `
      },
      {
        id: 'pyroclastic',
        title: 'Pyroclastic Flow',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
             <div class="flex flex-col justify-start space-y-6">
                <h3 class="text-5xl font-black text-orange-500 uppercase leading-none">Pyroclastic<br/><span class="text-white">Flow</span></h3>
                <div class="flex items-center space-x-4">
                   <span class="bg-red-600 text-white px-3 py-1 rounded font-bold text-xs uppercase">Extreme Hazard</span>
                   <span class="text-orange-400 font-mono text-sm">> 800°C Temperature</span>
                </div>
                <p class="text-xl text-slate-300 font-light">
                   A fast-moving mixture of hot gases, ash, and volcanic rocks rushing down slopes at >100 km/h.
                </p>
                <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <h4 class="text-lg font-bold text-orange-400 mb-2 uppercase">Deadly Effects</h4>
                   <ul class="space-y-2 text-slate-400">
                      <li>• Instant incineration of anything in path</li>
                      <li>• Burial under thick deposits</li>
                      <li>• Destruction of forests & settlements</li>
                   </ul>
                </div>
             </div>
             <div class="relative h-80 lg:h-full rounded-3xl overflow-hidden shadow-2xl group border border-orange-500/20">
                <img src="https://picsum.photos/seed/pyro/600/800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                   <p class="text-white font-bold text-sm">Example: Mt. Pinatubo (1991)</p>
                   <p class="text-slate-400 text-xs">Buried towns in Pampanga and Zambales.</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'ashfall',
        title: 'Ash Fall',
        content: `
          <div class="flex flex-col h-full space-y-8">
             <div class="flex items-end justify-between border-b border-white/10 pb-6">
                <h3 class="text-5xl font-black text-gray-400 uppercase">Ash Fall</h3>
                <span class="text-gray-500 font-mono uppercase tracking-widest">Tephra Fall</span>
             </div>
             
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-1 md:col-span-2 space-y-6">
                   <p class="text-2xl text-slate-300 font-light">Volcanic ash and rock fragments ejected during explosive eruptions that fall to the ground.</p>
                   
                   <div class="grid grid-cols-2 gap-4">
                      <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                         <div class="text-gray-300 font-bold mb-1">Roof Collapse</div>
                         <div class="text-gray-500 text-xs">Due to heavy accumulation.</div>
                      </div>
                      <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                         <div class="text-gray-300 font-bold mb-1">Respiratory Issues</div>
                         <div class="text-gray-500 text-xs">Reduced air quality.</div>
                      </div>
                      <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                         <div class="text-gray-300 font-bold mb-1">Water Contamination</div>
                         <div class="text-gray-500 text-xs">Pollutes supplies.</div>
                      </div>
                      <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                         <div class="text-gray-300 font-bold mb-1">Visibility Zero</div>
                         <div class="text-gray-500 text-xs">Flight cancellations.</div>
                      </div>
                   </div>
                </div>
                <div class="bg-gray-900 rounded-2xl p-6 border border-gray-800 flex flex-col justify-end relative overflow-hidden group">
                   <img src="https://picsum.photos/seed/ash/400/600" class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                   <div class="relative z-10">
                      <div class="text-white font-bold">Taal Volcano (2020)</div>
                      <div class="text-gray-400 text-xs">Blanketed nearby towns.</div>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            <div class="flex flex-col justify-start space-y-6">
               <h3 class="text-4xl font-black text-stone-400 uppercase">Lahars</h3>
               <p class="text-lg text-slate-300">Volcanic mudflows: mixtures of ash, rocks, and water flowing down river valleys.</p>
               <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-600/30">
                  <h4 class="text-stone-300 font-bold uppercase mb-2">Triggers</h4>
                  <div class="flex space-x-4 mb-4">
                     <span class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded text-sm border border-blue-500/30">Rainfall</span>
                     <span class="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded text-sm border border-cyan-500/30">Melting Ice</span>
                  </div>
                  <h4 class="text-stone-300 font-bold uppercase mb-2">Impact</h4>
                  <ul class="list-disc list-inside text-slate-400 text-sm">
                     <li>Burial of communities & farmlands</li>
                     <li>Long-term river siltation</li>
                     <li>Destruction of bridges</li>
                  </ul>
               </div>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
               <img src="https://picsum.photos/seed/mud/800/600" class="w-full h-full object-cover" />
            </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'v-r1',
        question: 'What is a mixture of hot gases, ash, and rocks rushing down a volcano?',
        options: ['Lava Flow', 'Pyroclastic Flow', 'Lahar', 'Ash Fall'],
        correctAnswer: 1
      },
      {
        id: 'v-r2',
        question: 'Which hazard is caused by volcanic debris mixing with water?',
        options: ['Lahar', 'Magma', 'Tsunami', 'Fissure'],
        correctAnswer: 0
      },
      {
        id: 'v-r3',
        question: 'What gas is commonly monitored to predict eruptions?',
        options: ['Oxygen', 'Sulfur Dioxide (SO2)', 'Nitrogen', 'Helium'],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'v-q1',
        question: 'Scientists observe increasing ground deformation and frequent volcanic quakes. Indicate?',
        options: ['Normal state', 'Magma moving upward, possible eruption', 'Wind pressure', 'Cooling down'],
        correctAnswer: 1
      },
      {
        id: 'v-q2',
        question: 'Strong sulfur smell and steam rising from crater. Forecast action?',
        options: ['Dismiss', 'Monitor and report to PHIVOLCS', 'Evacuate immediately', 'Wait for ash'],
        correctAnswer: 1
      },
      {
        id: 'v-q3',
        question: 'Viral post says "Eruption this weekend". Verify?',
        options: ['Check PHIVOLCS bulletin', 'Believe trending', 'Wait for explosion', 'Share quickly'],
        correctAnswer: 0
      },
      {
        id: 'v-q4',
        question: 'Alert level changed from 1 to 3. Meaning?',
        options: ['Completely erupted', 'Increased tendency toward hazardous eruption', 'Safe for tourism', 'Stopped releasing gas'],
        correctAnswer: 1
      },
      {
        id: 'v-q5',
        question: 'River nearby experiences lahar when raining. Cause?',
        options: ['Cooling magma', 'Ash/debris mix with rainwater', 'Earthquakes', 'Forest fires'],
        correctAnswer: 1
      },
      {
        id: 'v-q6',
        question: 'Villages buried in pyroclastic materials. Cause?',
        options: ['Fast-moving currents of hot gas/fragments', 'Rising river water', 'Solidifying lava', 'Slow gas buildup'],
        correctAnswer: 0
      },
      {
        id: 'v-q7',
        question: 'Harmonic tremors followed by gas emission increase. Suggests?',
        options: ['Dormant', 'Potential eruption (magma movement)', 'Decreasing activity', 'Weather changes'],
        correctAnswer: 1
      },
      {
        id: 'v-q8',
        question: 'Crater lake changes color before every eruption in past 50 years. Imply?',
        options: ['Ignore', 'Early warning indicator', 'Seasonal rainfall', 'Lake pollution'],
        correctAnswer: 1
      },
      {
        id: 'v-q9',
        question: 'Alert level 4. Student lives 8km away. Decision?',
        options: ['Continue normal', 'Pack and evacuate per instructions', 'Wait for ash', 'Climb to observe'],
        correctAnswer: 1
      },
      {
        id: 'v-q10',
        question: 'Tourists want to visit volcano under Alert Level 2. Decision?',
        options: ['Allow', 'Limit access and wait for Alert Level 0', 'Promote tours', 'Ignore advisories'],
        correctAnswer: 1
      }
    ]
  }
];

export const EQ_STEPS: EQStep[] = [
  { id: '1', text: 'Drop, Cover, and Hold On', correctCategory: 'During' },
  { id: '2', text: 'Secure heavy furniture', correctCategory: 'Before' },
  { id: '3', text: 'Check for injuries', correctCategory: 'After' },
  { id: '4', text: 'Prepare an emergency kit', correctCategory: 'Before' },
  { id: '5', text: 'Stay away from windows', correctCategory: 'During' },
  { id: '6', text: 'Evacuate to safe area', correctCategory: 'After' }
];

export const FLOOD_SCENARIOS: FloodScenario[] = [
  { id: '1', text: 'Walking through knee-deep moving water', isSafe: false, explanation: 'Moving water can knock you down.' },
  { id: '2', text: 'Evacuating to higher ground early', isSafe: true, explanation: 'Always evacuate before water rises.' },
  { id: '3', text: 'Driving across a flooded bridge', isSafe: false, explanation: 'Bridge could collapse or car could float.' },
  { id: '4', text: 'Switching off main power', isSafe: true, explanation: 'Prevents electrical shock hazards.' },
  { id: '5', text: 'Drinking tap water after flood', isSafe: false, explanation: 'Water may be contaminated.' }
];