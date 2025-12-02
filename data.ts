

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
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Competencies</h2>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3"></span>
              <span class="text-slate-300 font-medium">Identify various potential earthquake hazards</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3"></span>
              <span class="text-slate-300 font-medium">Analyze the effects of the different earthquake hazards</span>
            </li>
          </ul>

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
          <div class="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 py-10">
            
            <!-- Animated Visual -->
            <div class="relative group cursor-pointer mb-8">
              <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/40 transition-all duration-500"></div>
              <svg class="w-32 h-32 md:w-48 md:h-48 text-orange-500 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-orange-300 text-xs font-bold tracking-[0.2em] whitespace-nowrap uppercase">
                Seismic Event
              </div>
            </div>

            <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-[length:200%_auto] animate-gradient uppercase tracking-tighter hover:tracking-wide transition-all duration-700 cursor-default">
              Earthquakes
            </h3>

            <p class="text-2xl md:text-3xl text-slate-200 leading-normal font-light max-w-4xl">
              Are among the most <span class="inline-block font-black text-red-500 hover:scale-110 hover:text-red-400 transition-all cursor-pointer border-b-4 border-red-500/30 hover:border-red-500">DESTRUCTIVE</span> natural hazards on Earth.
            </p>

            <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all max-w-4xl text-left mt-8 shadow-xl">
              <p class="text-lg md:text-xl text-slate-300 leading-relaxed">
                Their impacts go beyond ground shaking—they can trigger <strong class="text-orange-400">multiple secondary hazards</strong> that pose threats to human life, infrastructure, and the environment.
              </p>
              <div class="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
              <p class="text-lg md:text-xl text-slate-300 leading-relaxed">
                Analyzing these effects helps communities:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5 hover:border-green-500/50 hover:text-green-400 transition-colors">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Predict Hazards</span>
                 </div>
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Minimize Casualties</span>
                 </div>
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5 hover:border-purple-500/50 hover:text-purple-400 transition-colors">
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Strengthen Resilience</span>
                 </div>
              </div>
            </div>
            
            <div class="mt-8 opacity-60 hover:opacity-100 transition-opacity text-xs text-slate-400 font-mono">
              Reference: PHIVOLCS, 2023
            </div>

          </div>
        `
      },
      {
        id: 'primary',
        title: 'Primary Hazard: Ground Shaking',
        content: `
          <div class="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 py-6">

            <!-- Header Section -->
            <div class="relative mb-6 group cursor-default">
              <h3 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-300 via-orange-500 to-red-600 uppercase tracking-tighter hover:tracking-wide transition-all duration-500">
                Ground Shaking
              </h3>
              <div class="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full group-hover:w-48 transition-all duration-500"></div>
            </div>

            <!-- Interactive Visual: Seismograph -->
            <div class="relative w-full max-w-2xl h-48 bg-black/40 rounded-xl border border-white/10 overflow-hidden group hover:border-orange-500/50 transition-colors cursor-crosshair">
               <!-- Grid lines -->
               <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 20px 20px;"></div>
               
               <!-- Static line -->
               <div class="absolute inset-0 flex items-center">
                  <div class="w-full h-0.5 bg-green-500/30"></div>
               </div>
               
               <!-- Active Seismic Wave (SVG) -->
               <svg class="absolute inset-0 w-full h-full text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] opacity-50 group-hover:opacity-100 transition-opacity" preserveAspectRatio="none" viewBox="0 0 400 100">
                 <path d="M0 50 L20 50 L30 20 L40 80 L50 30 L60 70 L70 40 L80 60 L100 50 L120 50 L130 10 L140 90 L150 20 L160 80 L180 50 L200 50 L210 30 L220 70 L240 50 L400 50" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke">
                   <animate attributeName="d" 
                      values="M0 50 L400 50; M0 50 L20 50 L30 20 L40 80 L50 30 L60 70 L70 40 L80 60 L100 50 L120 50 L130 10 L140 90 L150 20 L160 80 L180 50 L200 50 L210 30 L220 70 L240 50 L400 50; M0 50 L20 50 L30 40 L40 60 L50 45 L60 55 L400 50" 
                      dur="0.5s" 
                      repeatCount="indefinite" 
                      begin="mouseenter"
                      end="mouseleave"
                   />
                 </path>
               </svg>
               <div class="absolute bottom-2 right-4 text-xs font-mono text-orange-400 group-hover:animate-pulse">
                  <span class="group-hover:hidden">HOVER TO DETECT</span>
                  <span class="hidden group-hover:inline">SEISMIC WAVES DETECTED</span>
               </div>
            </div>

            <!-- Definition Card -->
            <div class="bg-white/5 border-l-4 border-orange-500 p-6 rounded-r-xl max-w-4xl text-left hover:bg-white/10 transition-colors w-full shadow-lg">
              <h4 class="text-xl font-bold text-orange-200 mb-2 uppercase tracking-wider">Definition</h4>
              <p class="text-xl text-slate-300 leading-relaxed">
                The <strong class="text-white">vibration of the ground</strong> caused by the sudden release of energy during an earthquake. Seismic waves radiate outward from the focus, causing structures to move violently.
              </p>
            </div>

            <!-- Effects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
              
              <!-- Card 1 -->
              <div class="bg-gradient-to-b from-white/10 to-transparent p-6 rounded-2xl border border-white/5 hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div class="bg-red-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors text-red-400 mx-auto">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 01-2-2v-2.5a2.5 2.5 0 012.5-2.5h2.5M10 9a2 2 0 00-2 2v2.5A2.5 2.5 0 0010.5 16h2.5" /></svg>
                </div>
                <h5 class="text-lg font-bold text-slate-200 mb-2 uppercase tracking-wide">Structural Damage</h5>
                <p class="text-sm text-slate-400 leading-relaxed">Weakly designed buildings, bridges, and houses collapse, especially on soft soils.</p>
              </div>

              <!-- Card 2 -->
              <div class="bg-gradient-to-b from-white/10 to-transparent p-6 rounded-2xl border border-white/5 hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div class="bg-yellow-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-colors text-yellow-400 mx-auto">
                   <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h5 class="text-lg font-bold text-slate-200 mb-2 uppercase tracking-wide">Infrastructure Fail</h5>
                <p class="text-sm text-slate-400 leading-relaxed">Roads crack, utilities fail, and transportation networks are cut off instantly.</p>
              </div>

              <!-- Card 3 -->
              <div class="bg-gradient-to-b from-white/10 to-transparent p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div class="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-400 mx-auto">
                   <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h5 class="text-lg font-bold text-slate-200 mb-2 uppercase tracking-wide">Psychological Stress</h5>
                <p class="text-sm text-slate-400 leading-relaxed">Fear, trauma, and anxiety affect survivors long after the shaking stops.</p>
              </div>

            </div>

          </div>
        `
      },
      {
        id: 'ground-rupture',
        title: 'Secondary Hazard: Ground Rupture',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Content -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 uppercase tracking-tighter leading-tight mb-8">
                    Ground Rupture
                  </h3>
                  
                  <div class="bg-white/5 border-l-8 border-purple-500 p-8 rounded-r-3xl w-full hover:bg-white/10 transition-colors mb-10">
                      <p class="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                        <strong class="text-purple-400 block mb-3 uppercase tracking-widest text-sm font-bold">Definition</strong>
                        The visible <span class="text-white font-bold">tearing or displacement</span> of the ground surface along an active fault during an earthquake.
                      </p>
                  </div>

                  <div class="space-y-6">
                      <div class="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                        <h5 class="text-2xl font-bold text-white mb-2 uppercase flex items-center"><span class="w-3 h-3 rounded-full bg-purple-500 mr-3"></span> Structural Damage</h5>
                        <p class="text-slate-300 text-lg">Buildings, bridges, and pipelines crossing fault lines are literally torn apart.</p>
                      </div>
                      <div class="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                        <h5 class="text-2xl font-bold text-white mb-2 uppercase flex items-center"><span class="w-3 h-3 rounded-full bg-purple-500 mr-3"></span> Land Use Impact</h5>
                        <p class="text-slate-300 text-lg">Fault zones become uninhabitable, limiting urban expansion.</p>
                      </div>
                  </div>
               </div>
               
               <!-- Right Column: Visual -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group h-full">
                  <div class="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/rupture/1200/1200" alt="Ground Rupture Example" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p class="text-sm text-purple-400 font-bold mb-2 tracking-widest uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-base text-white leading-snug">
                         A potential ground rupture along the West Valley Fault could damage parts of Quezon City and Taguig, affecting major infrastructures.
                       </p>
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-xs text-slate-500 font-mono uppercase tracking-widest">
                       Reference: PHIVOLCS Faultfinder Database (2023)
                    </p>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'liquefaction',
        title: 'Secondary Hazard: Liquefaction',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">

             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Content -->
               <div class="flex flex-col justify-center p-6 lg:p-10 order-2 lg:order-1">
                  <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-600 uppercase tracking-tighter leading-tight mb-8">
                    Liquefaction
                  </h3>
                  
                  <div class="bg-white/5 border-l-8 border-cyan-500 p-8 rounded-r-3xl w-full hover:bg-white/10 transition-colors mb-10">
                      <p class="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                        <strong class="text-cyan-400 block mb-3 uppercase tracking-widest text-sm font-bold">Definition</strong>
                        The process where water-saturated, loose soil <span class="text-white font-bold">behaves like a liquid</span> during intense shaking.
                      </p>
                  </div>

                  <div class="grid gap-6">
                      <div class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors flex items-start">
                        <div class="bg-cyan-500/20 p-3 rounded-xl mr-5 text-cyan-400 font-bold text-2xl w-14 h-14 flex items-center justify-center shrink-0">1</div>
                        <div>
                          <h5 class="text-xl font-bold text-white mb-2">Building Instability</h5>
                          <p class="text-slate-300 text-lg">Houses, bridges, and towers sink, tilt, or collapse as the ground gives way.</p>
                        </div>
                      </div>
                      <div class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors flex items-start">
                        <div class="bg-cyan-500/20 p-3 rounded-xl mr-5 text-cyan-400 font-bold text-2xl w-14 h-14 flex items-center justify-center shrink-0">2</div>
                        <div>
                          <h5 class="text-xl font-bold text-white mb-2">Underground Damage</h5>
                          <p class="text-slate-300 text-lg">Bursting of pipelines and sewage systems due to soil movement.</p>
                        </div>
                      </div>
                  </div>
               </div>
               
               <!-- Right Column: Visual -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group order-1 lg:order-2 h-full">
                  <div class="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/tilt/1200/1200" alt="Liquefaction Example" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p class="text-sm text-cyan-400 font-bold mb-2 tracking-widest uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-base text-white leading-snug">
                         During the 2019 Cotabato earthquakes, parts of Kidapawan experienced liquefaction, damaging roads and tilting residential buildings.
                       </p>
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-xs text-slate-500 font-mono uppercase tracking-widest">
                       Reference: PHIVOLCS Earthquake Report (2019)
                    </p>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'landslides',
        title: 'Secondary Hazard: Landslides',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Content -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-yellow-400 uppercase tracking-tighter leading-tight mb-8">
                    Landslides
                  </h3>
                  
                  <div class="bg-white/5 border-l-8 border-amber-500 p-8 rounded-r-3xl w-full hover:bg-white/10 transition-colors mb-10">
                      <p class="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                        <strong class="text-amber-400 block mb-3 uppercase tracking-widest text-sm font-bold">Definition</strong>
                        Downhill movement of rocks and soil triggered by ground shaking, especially in <span class="text-white font-bold">mountainous or steep terrains</span>.
                      </p>
                  </div>

                  <div class="grid grid-cols-2 gap-6">
                     <div class="bg-amber-950/20 p-6 rounded-2xl border border-amber-500/20">
                        <h5 class="font-bold text-amber-200 mb-2 text-lg uppercase">Burial</h5>
                        <p class="text-base text-slate-300">Entire villages can be buried, as seen in upland communities.</p>
                     </div>
                     <div class="bg-amber-950/20 p-6 rounded-2xl border border-amber-500/20">
                        <h5 class="font-bold text-amber-200 mb-2 text-lg uppercase">Isolation</h5>
                        <p class="text-base text-slate-300">Blocked roads hinder rescue and relief operations.</p>
                     </div>
                     <div class="bg-amber-950/20 p-6 rounded-2xl border border-amber-500/20 col-span-2">
                        <h5 class="font-bold text-amber-200 mb-2 text-lg uppercase">Environmental Damage</h5>
                        <p class="text-base text-slate-300">Landslides destroy vegetation, leading to erosion and loss of biodiversity.</p>
                     </div>
                  </div>
               </div>
               
               <!-- Right Column: Visual -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group h-full">
                  <div class="absolute inset-0 bg-amber-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/landslide/1200/1200" alt="Landslide Example" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p class="text-sm text-amber-400 font-bold mb-2 tracking-widest uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-base text-white leading-snug">
                         The 1990 Luzon Earthquake triggered massive landslides in Benguet, burying houses and farmlands.
                       </p>
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-xs text-slate-500 font-mono uppercase tracking-widest">
                       Reference: Lagmay, A. M. F. et al. (2020)
                    </p>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'tsunami',
        title: 'Secondary Hazard: Tsunami',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">

             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Content -->
               <div class="flex flex-col justify-center p-6 lg:p-10 order-2 lg:order-1">
                  <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-800 uppercase tracking-tighter leading-tight mb-8">
                    Tsunami
                  </h3>
                  
                  <div class="bg-white/5 border-l-8 border-blue-500 p-8 rounded-r-3xl w-full hover:bg-white/10 transition-colors mb-10">
                      <p class="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                        <strong class="text-blue-400 block mb-3 uppercase tracking-widest text-sm font-bold">Definition</strong>
                        A series of large sea waves generated by undersea earthquakes that displace <span class="text-white font-bold">huge volumes of water</span>.
                      </p>
                  </div>

                  <div class="space-y-6">
                     <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                        <h5 class="text-2xl font-bold text-blue-200 mb-2">Coastal Inundation</h5>
                        <p class="text-slate-300 text-lg">Flooding destroys homes, ports, and coastal infrastructure.</p>
                     </div>
                     <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                        <h5 class="text-2xl font-bold text-blue-200 mb-2">Loss of Lives</h5>
                        <p class="text-slate-300 text-lg">People near the shorelines have little time to evacuate.</p>
                     </div>
                  </div>
               </div>
               
               <!-- Right Column: Visual -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group order-1 lg:order-2 h-full">
                  <div class="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/tsunami/1200/1200" alt="Tsunami Example" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p class="text-sm text-blue-400 font-bold mb-2 tracking-widest uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-base text-white leading-snug">
                         The 1976 Moro Gulf Earthquake (Magnitude 7.9) caused a tsunami that killed more than 8,000 people in Mindanao.
                       </p>
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-xs text-slate-500 font-mono uppercase tracking-widest">
                       Reference: USGS (2021). Earthquake Hazards Program.
                    </p>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'fire-refs',
        title: 'Fire & Infrastructure',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Content -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-700 uppercase tracking-tighter leading-tight mb-8">
                    Fire & Infrastructure
                  </h3>
                  
                  <div class="bg-white/5 border-l-8 border-red-500 p-8 rounded-r-3xl w-full hover:bg-white/10 transition-colors mb-10">
                      <p class="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                        <strong class="text-red-400 block mb-3 uppercase tracking-widest text-sm font-bold">Definition</strong>
                        Secondary hazards caused by damaged <span class="text-white font-bold">gas lines, power systems</span>, and industrial facilities.
                      </p>
                  </div>

                  <div class="space-y-6">
                     <div class="bg-red-950/20 p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-colors">
                        <h4 class="text-2xl font-bold text-red-400 mb-2">Urban Fires</h4>
                        <p class="text-slate-300 text-lg">Breakouts spread rapidly when water lines are broken, often causing more destruction than the quake itself.</p>
                     </div>
                     <div class="bg-slate-800/50 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors">
                        <h4 class="text-2xl font-bold text-slate-200 mb-2">Pollution</h4>
                        <p class="text-slate-300 text-lg">Chemical leaks from factories contaminate the air and soil.</p>
                     </div>
                  </div>
               </div>
               
               <!-- Right Column: Visual -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group h-full">
                  <div class="absolute inset-0 bg-red-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/ruins/1200/1200" alt="Fire Damage Example" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p class="text-sm text-white font-bold mb-2 tracking-widest uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-base text-slate-200 leading-snug">
                         The 1906 San Francisco Earthquake led to widespread fires that caused more deaths than the earthquake itself.
                       </p>
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-xs text-slate-500 font-mono uppercase tracking-widest">
                       Reference: USGS (2020). San Francisco Earthquake Overview.
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
         id: 'rq1',
         question: 'What is the most effective action to take during an earthquake?',
         options: ['Run outside immediately', 'Drop, Cover, and Hold On', 'Stand in a doorway', 'Call for help'],
         correctAnswer: 1
      },
      {
         id: 'rq2',
         question: 'Which Philippine agency is responsible for monitoring earthquakes?',
         options: ['PAGASA', 'PHIVOLCS', 'NDRRMC', 'DSWD'],
         correctAnswer: 1
      },
      {
         id: 'rq3',
         question: 'Ground shaking is considered what type of earthquake hazard?',
         options: ['Primary', 'Secondary', 'Tertiary', 'Man-made'],
         correctAnswer: 0
      }
    ],
    finalQuiz: [
      {
        id: 'q1',
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
        id: 'q2',
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
        id: 'q3',
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
        id: 'q4',
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
        id: 'q5',
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
        id: 'q6',
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
        id: 'q7',
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
        id: 'q8',
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
        id: 'q9',
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
        id: 'q10',
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
    description: 'Recognize the early warning signs of tropical cyclones, floods, storm surges, landslides, and droughts to save lives.',
    topic: 'Flood',
    imageUrl: 'https://picsum.photos/seed/rain/800/400',
    readTime: 12,
    difficulty: 'Intermediate',
    objectives: [
      'Recognize signs of impending hydrometeorological hazards',
      'Differentiate between natural and scientific warning signs',
      'Understand indicators for Cyclones, Floods, and Storm Surges'
    ],
    competencies: [
      'Hazard Recognition',
      'Early Warning Awareness',
      'Disaster Preparedness'
    ],
    gameType: 'flood-choice',
    sections: [
      {
        id: 'hydro-objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Competencies</h2>
          <ul class="space-y-4 mb-8 text-slate-300">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Recognize signs of impending hydrometeorological hazards
            </li>
          </ul>
          
          <div class="bg-cyan-900/20 border border-cyan-500/20 p-6 rounded-xl">
             <h3 class="text-xl font-bold text-cyan-400 mb-2">Did You Know?</h3>
             <p class="text-slate-300 italic">"Awareness of natural warning signs saves lives — even a few minutes of early action can make a big difference."</p>
             <p class="text-slate-500 text-xs mt-2 text-right">— NDRRMC, 2023</p>
          </div>
        `
      },
      {
        id: 'hydro-intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 py-10">
            
            <div class="relative group cursor-pointer mb-8">
              <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all duration-500"></div>
              <svg class="w-32 h-32 md:w-48 md:h-48 text-blue-400 transform group-hover:scale-105 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>

            <h3 class="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 uppercase tracking-tighter hover:tracking-wide transition-all duration-700 cursor-default">
              Hydrometeorological
            </h3>
            <h4 class="text-3xl md:text-5xl font-bold text-slate-300 uppercase tracking-widest">Hazards</h4>

            <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all max-w-4xl text-left mt-8 shadow-xl">
              <p class="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
                Natural events caused by atmospheric, hydrological, or oceanographic processes. These include <span class="text-cyan-400 font-bold">tropical cyclones, floods, storm surges, droughts, and monsoons</span>.
              </p>
            </div>

          </div>
        `
      },
      {
        id: 'hydro-cyclone',
        title: 'Tropical Cyclone',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-slate-200 uppercase tracking-tighter mb-8">
                    Tropical Cyclone
                  </h3>
                  
                  <div class="grid gap-6">
                    <div class="bg-slate-800/40 p-6 rounded-2xl border border-slate-600/30">
                       <h4 class="text-xl font-bold text-cyan-400 mb-3 uppercase flex items-center"><span class="text-2xl mr-2">🍃</span> Natural Signs</h4>
                       <ul class="text-slate-300 space-y-2 text-sm">
                         <li>• Sudden drop in air pressure & increased humidity</li>
                         <li>• Dark, thick clouds in eastern sky</li>
                         <li>• Strong winds shifting rapidly</li>
                         <li>• Continuous heavy rain</li>
                       </ul>
                    </div>
                    <div class="bg-slate-800/40 p-6 rounded-2xl border border-slate-600/30">
                       <h4 class="text-xl font-bold text-blue-400 mb-3 uppercase flex items-center"><span class="text-2xl mr-2">📡</span> Scientific Signs</h4>
                       <ul class="text-slate-300 space-y-2 text-sm">
                         <li>• Satellite images showing spiraling clouds</li>
                         <li>• PAGASA weather bulletins</li>
                         <li>• Warning Signals (1-5) issued</li>
                       </ul>
                    </div>
                  </div>
               </div>
               
               <!-- Right Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group">
                  <div class="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/storm/1200/1200" alt="Cyclone" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6">
                       <p class="text-sm text-cyan-400 font-bold mb-1 uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-white text-sm">Before Typhoon Yolanda (2013), PAGASA recorded a drastic pressure drop and spiral cloud formation.</p>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'hydro-flood',
        title: 'Impending Flood',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-blue-500 uppercase tracking-tighter mb-8">
                    Flood
                  </h3>
                  
                  <div class="grid gap-6">
                    <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20">
                       <h4 class="text-xl font-bold text-blue-300 mb-3 uppercase flex items-center"><span class="text-2xl mr-2">🌧️</span> Natural Signs</h4>
                       <ul class="text-slate-300 space-y-2 text-sm">
                         <li>• Continuous heavy rainfall (hours/days)</li>
                         <li>• Rising water levels in rivers/creeks</li>
                         <li>• Overflowing canals</li>
                         <li>• Soil softening or water seeping up</li>
                       </ul>
                    </div>
                    <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20">
                       <h4 class="text-xl font-bold text-blue-300 mb-3 uppercase flex items-center"><span class="text-2xl mr-2">📊</span> Scientific Signs</h4>
                       <ul class="text-slate-300 space-y-2 text-sm">
                         <li>• Rainfall radar intensity (>50mm/hr)</li>
                         <li>• Color-coded warnings (Yellow, Orange, Red)</li>
                       </ul>
                    </div>
                  </div>
               </div>
               
               <!-- Right Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group">
                  <div class="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/flood/1200/1200" alt="Flood" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6">
                       <p class="text-sm text-blue-400 font-bold mb-1 uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-white text-sm">In Marikina, residents monitor the river water level using PAGASA’s system.</p>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'hydro-surge',
        title: 'Storm Surge',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-indigo-400 uppercase tracking-tighter mb-8">
                    Storm Surge
                  </h3>
                  
                  <div class="bg-indigo-950/30 p-8 rounded-3xl border border-indigo-500/30 mb-6">
                       <h4 class="text-2xl font-bold text-indigo-200 mb-4 uppercase">Critical Indicators</h4>
                       <ul class="space-y-4 text-slate-300">
                         <li class="flex items-center"><div class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Unusually calm sea followed by sudden rise</li>
                         <li class="flex items-center"><div class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Rapidly receding shoreline</li>
                         <li class="flex items-center"><div class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Strong winds blowing toward shore</li>
                       </ul>
                  </div>
                  <div class="bg-black/30 p-4 rounded-xl border-l-4 border-indigo-500">
                     <span class="text-indigo-400 font-bold uppercase text-xs">Scientific</span>
                     <p class="text-slate-400 text-sm">Model simulations predicting surge height based on wind/tide.</p>
                  </div>
               </div>
               
               <!-- Right Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group">
                  <div class="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/wave/1200/1200" alt="Storm Surge" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6">
                       <p class="text-sm text-indigo-400 font-bold mb-1 uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-white text-sm">During Typhoon Yolanda, storm surges up to 7 meters high devastated Tacloban City.</p>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'hydro-landslide',
        title: 'Rain-Induced Landslide',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-amber-600 uppercase tracking-tighter mb-8">
                    Landslide
                  </h3>
                  
                  <div class="grid grid-cols-2 gap-4">
                     <div class="col-span-2 bg-amber-950/30 p-6 rounded-2xl border border-amber-600/30">
                        <h4 class="text-lg font-bold text-amber-400 mb-2 uppercase">Natural Signs</h4>
                        <ul class="text-slate-300 text-sm space-y-2">
                           <li>• Cracks on ground/walls</li>
                           <li>• Tilting trees/poles</li>
                           <li>• Muddy springs appearing</li>
                           <li>• Rumbling sounds from slope</li>
                        </ul>
                     </div>
                     <div class="col-span-2 bg-amber-950/30 p-6 rounded-2xl border border-amber-600/30">
                        <h4 class="text-lg font-bold text-amber-400 mb-2 uppercase">Scientific Signs</h4>
                        <p class="text-slate-300 text-sm">Soil moisture sensors detecting saturation. Rainfall threshold exceeded.</p>
                     </div>
                  </div>
               </div>
               
               <!-- Right Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group">
                  <div class="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/mud/1200/1200" alt="Landslide" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6">
                       <p class="text-sm text-amber-500 font-bold mb-1 uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-white text-sm">The 2006 Leyte landslide was preceded by days of intense rainfall and visible ground cracks.</p>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'hydro-drought',
        title: 'Impending Drought',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-yellow-600 uppercase tracking-tighter mb-8">
                    Drought
                  </h3>
                  
                  <div class="bg-yellow-950/20 p-8 rounded-3xl border border-yellow-600/30 mb-6">
                       <h4 class="text-2xl font-bold text-yellow-500 mb-4 uppercase">Observable Signs</h4>
                       <ul class="space-y-4 text-slate-300">
                         <li class="flex items-center"><span class="text-2xl mr-3">☀️</span> Prolonged dry & hot days</li>
                         <li class="flex items-center"><span class="text-2xl mr-3">💧</span> Drying of ponds, wells, creeks</li>
                         <li class="flex items-center"><span class="text-2xl mr-3">🌾</span> Wilting crops and grass</li>
                         <li class="flex items-center"><span class="text-2xl mr-3">💨</span> Dusty air</li>
                       </ul>
                  </div>
               </div>
               
               <!-- Right Column -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative group">
                  <div class="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/40">
                    <img src="https://picsum.photos/seed/desert/1200/1200" alt="Drought" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6">
                       <p class="text-sm text-yellow-500 font-bold mb-1 uppercase">REAL WORLD EXAMPLE</p>
                       <p class="text-white text-sm">PAGASA declared an El Niño event in 2019, leading to agricultural drought in Central Luzon.</p>
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
        id: 'h1',
        question: 'What includes tropical cyclones, floods, and storm surges?',
        options: ['Geological Hazards', 'Hydrometeorological Hazards', 'Biological Hazards', 'Technological Hazards'],
        correctAnswer: 1
      },
      {
        id: 'h2',
        question: 'Which agency monitors weather disturbances in the Philippines?',
        options: ['PHIVOLCS', 'MMDA', 'PAGASA', 'DepEd'],
        correctAnswer: 2
      },
      {
        id: 'h3',
        question: 'What is a key sign of an approaching tropical cyclone?',
        options: ['Rising temperature', 'Drop in air pressure', 'Clear skies', 'Ground shaking'],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'fq1',
        question: 'The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do to forecast possible hazards?',
        options: [
          'Wait until heavy rains start before preparing.',
          'Monitor PAGASA updates and prepare for possible storm signals.',
          'Ignore the report since LPA rarely develops into a typhoon.',
          'Focus only on temperature forecasts.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq2',
        question: 'Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted from these conditions?',
        options: [
          'Clear and dry weather.',
          'Possible thunderstorm or heavy rainfall.',
          'Volcanic eruption nearby.',
          'Increasing temperature in the area.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq3',
        question: 'A social media post says, “A super typhoon will hit the Philippines tomorrow,” but PAGASA has not issued any warning. How can you verify the accuracy of this claim?',
        options: [
          'Share it immediately to alert others.',
          'Wait to see if it rains the next day.',
          'Check the official PAGASA or NDRRMC bulletins.',
          'Believe the post because it has thousands of likes.'
        ],
        correctAnswer: 2
      },
      {
        id: 'fq4',
        question: 'Your phone app shows a severe flood warning, but local authorities haven’t announced anything yet. What should you do to ensure accuracy before acting?',
        options: [
          'Compare the information with government advisories.',
          'Ignore it since there’s no official announcement.',
          'Immediately evacuate without checking.',
          'Ask friends if they heard the same news.'
        ],
        correctAnswer: 0
      },
      {
        id: 'fq5',
        question: 'After days of heavy rain, a hillside community experiences a landslide. What is the most likely cause of this hazard?',
        options: [
          'Strong winds loosened the trees.',
          'Prolonged rainfall saturated the soil, weakening its stability.',
          'Earthquake vibrations caused the slope to collapse.',
          'The land was too dry before the rain.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq6',
        question: 'Flooding occurred in a city even after only moderate rain. What could be the main contributing factor?',
        options: [
          'The city’s drainage system is clogged or inadequate.',
          'There was too much sunlight before the rain.',
          'The city is too far from the coast.',
          'Wind direction caused water to pile up.'
        ],
        correctAnswer: 0
      },
      {
        id: 'fq7',
        question: 'Weather records show that a certain province often experiences strong typhoons every last quarter of the year. What pattern can be recognized from this data?',
        options: [
          'The area is safe during any season.',
          'The province is located along the common typhoon path during monsoon months.',
          'The typhoons are random events.',
          'The frequency is caused by human activity.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq8',
        question: 'In the past five years, flash floods always occur shortly after intense rainfall lasting more than an hour. What does this pattern suggest?',
        options: [
          'The floods are caused by sea-level rise.',
          'There is a predictable relationship between rainfall intensity and flooding.',
          'Floods happen by coincidence.',
          'Rainfall has no connection to flooding.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq9',
        question: 'PAGASA raises a Tropical Cyclone Wind Signal No. 3 for your area. What should your family do first?',
        options: [
          'Go to the nearest open field to watch the winds.',
          'Secure your house, prepare a go-bag, and stay tuned to official updates.',
          'Wait for the rain to stop before preparing.',
          'Continue normal activities as long as there’s power.'
        ],
        correctAnswer: 1
      },
      {
        id: 'fq10',
        question: 'Your school is in a flood-prone area, and heavy rains have been continuous since early morning. As a student leader, what is the best decision to recommend to the principal?',
        options: [
          'Continue classes until dismissal time.',
          'Wait for official cancellation from the mayor’s office.',
          'Suspend classes early and ensure students get home safely.',
          'Ask everyone to stay and observe the rainfall pattern.'
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '3',
    title: 'Volcano-Related Hazards',
    description: 'Learn to recognize the signs of an impending eruption and understand the devastating power of pyroclastic flows, lahars, and ash fall.',
    topic: 'Volcano',
    imageUrl: 'https://picsum.photos/seed/volcano/800/400',
    readTime: 8,
    difficulty: 'Advanced',
    objectives: [
      'Explain various volcano-related hazards',
      'Recognize signs of an impending volcanic eruption',
      'Understand forecasting and evacuation planning'
    ],
    competencies: [
      'Hazard Analysis',
      'Early Warning Recognition',
      'Emergency Preparedness'
    ],
    gameType: 'none',
    sections: [
       {
        id: 'volcano-objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Competencies</h2>
          <ul class="space-y-4 mb-8 text-slate-300">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Explain various volcano-related hazards
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Recognize signs of an impending volcanic eruption
            </li>
          </ul>
          
          <div class="bg-red-900/20 border border-red-500/20 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-red-400 mb-2">Why It Matters</h3>
            <p class="text-slate-300">"Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness and preparedness." — PHIVOLCS, 2023</p>
          </div>
        `
      },
      {
        id: 'volcano-intro',
        title: 'Introduction',
        content: `
          <div class="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 py-10">
            
            <div class="relative group cursor-pointer hover:animate-pulse">
               <div class="absolute inset-0 bg-red-600/30 blur-3xl rounded-full group-hover:bg-red-500/50 transition-all duration-300"></div>
               <svg class="w-48 h-48 text-red-500 group-hover:text-yellow-500 transition-colors duration-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                 <path d="m2 22 1-1h3l9-9"/>
                 <path d="M14 10l4-1 2 2-2 7h-3l-1 1H9l-2-6"/>
                 <path d="m14 10-3-4-1 2-2-2-4 3 0 12"/>
               </svg>
            </div>

            <h3 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 uppercase tracking-tighter hover:tracking-widest transition-all duration-500 cursor-default shadow-red-500/50">
              Volcanoes
            </h3>

            <p class="text-2xl md:text-3xl text-slate-200 font-light max-w-4xl">
              Powerful systems that can both <span class="text-green-400 font-bold">create landforms</span> and cause <span class="text-red-500 font-bold border-b-4 border-red-500/50">large-scale destruction</span>.
            </p>

            <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm max-w-4xl mt-8 hover:bg-white/10 transition-all text-left">
              <p class="text-xl text-slate-300 leading-relaxed">
                 When magma, gas, and ash escape from deep within the Earth, the surrounding environment faces severe hazards. Recognizing these signs is critical for:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5">
                    <span class="text-2xl">📡</span>
                    <span>Forecasting</span>
                 </div>
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5">
                    <span class="text-2xl">🏃</span>
                    <span>Evacuation</span>
                 </div>
                 <div class="flex items-center space-x-3 text-slate-200 font-bold bg-black/20 p-3 rounded-lg border border-white/5">
                    <span class="text-2xl">❤️</span>
                    <span>Saving Lives</span>
                 </div>
              </div>
            </div>

          </div>
        `
      },
      {
        id: 'volcano-pyroclastic',
        title: 'Pyroclastic Flow & Ash Fall',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <!-- Vertical Divider -->
             <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Pyroclastic Flow -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <div class="bg-orange-950/30 border border-orange-500/30 p-6 rounded-2xl mb-6">
                    <h3 class="text-4xl md:text-6xl font-black text-orange-500 uppercase tracking-tighter mb-4">Pyroclastic Flow</h3>
                    <p class="text-xl text-slate-200 mb-4">
                       A fast-moving mixture of hot gases, ash, and volcanic rocks rushing down slopes at <span class="font-bold text-white">>100 km/h</span>. Temperatures can reach <span class="font-bold text-red-500">800°C</span>.
                    </p>
                    <ul class="space-y-2 text-slate-400 text-sm">
                      <li class="flex items-center"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Instant incineration of anything in path</li>
                      <li class="flex items-center"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Burial under thick ash deposits</li>
                    </ul>
                  </div>
                  
                  <div class="relative h-48 rounded-xl overflow-hidden group">
                     <img src="https://picsum.photos/seed/smoke/800/400" alt="Pyroclastic Flow" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div class="absolute bottom-0 left-0 bg-black/80 px-4 py-2 text-xs text-orange-300">
                        Ex: Mt Pinatubo (1991) buried towns in Pampanga.
                     </div>
                  </div>
               </div>
               
               <!-- Right Column: Ash Fall -->
               <div class="flex flex-col justify-center p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/10">
                  <div class="bg-slate-800/30 border border-slate-500/30 p-6 rounded-2xl mb-6">
                    <h3 class="text-4xl md:text-6xl font-black text-slate-400 uppercase tracking-tighter mb-4">Ash Fall</h3>
                    <p class="text-xl text-slate-200 mb-4">
                       Volcanic ash and rock fragments ejected during explosive eruptions falling to the ground.
                    </p>
                    <ul class="space-y-2 text-slate-400 text-sm">
                      <li class="flex items-center"><span class="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span> Roof collapse from heavy accumulation</li>
                      <li class="flex items-center"><span class="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span> Respiratory problems & poor visibility</li>
                    </ul>
                  </div>

                  <div class="relative h-48 rounded-xl overflow-hidden group">
                     <img src="https://picsum.photos/seed/ash/800/400" alt="Ash Fall" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale" />
                     <div class="absolute bottom-0 left-0 bg-black/80 px-4 py-2 text-xs text-slate-300">
                        Ex: Taal Volcano (2020) blanketed towns, forcing evacuation.
                     </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'volcano-lahar',
        title: 'Lahars & Lava Flows',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Lahars -->
               <div class="flex flex-col justify-center p-6 lg:p-10">
                  <h3 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600 uppercase mb-6">Lahars</h3>
                  <p class="text-2xl text-slate-200 font-light mb-8">
                    Volcanic mudflows. Mixtures of ash, rocks, and water, often triggered by <span class="font-bold text-blue-400">rain</span> or melting ice.
                  </p>
                  
                  <div class="bg-stone-900/50 p-6 rounded-xl border-l-4 border-stone-500 mb-6">
                    <h5 class="font-bold text-stone-300 uppercase mb-2">Effects</h5>
                    <p class="text-slate-400">Burial of communities, long-term river siltation, destruction of bridges.</p>
                  </div>
                   <div class="mt-auto">
                    <p class="text-xs text-slate-500 font-mono">REF: Lagmay et al. (2020)</p>
                  </div>
               </div>
               
               <!-- Right Column: Lava Flows -->
               <div class="flex flex-col justify-center p-6 lg:p-10 relative overflow-hidden group">
                  <div class="absolute inset-0">
                    <img src="https://picsum.photos/seed/lava/1200/1200" alt="Lava Flow" class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
                  </div>
                  
                  <div class="relative z-10">
                    <h3 class="text-5xl md:text-7xl font-black text-red-500 uppercase mb-6 drop-shadow-lg">Lava Flows</h3>
                    <p class="text-2xl text-white font-bold mb-4 drop-shadow-md">
                      Molten rock flowing from the crater.
                    </p>
                    <div class="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-red-500/30">
                       <p class="text-red-200">Burns everything it touches but moves slowly. Creates new land when cooled.</p>
                       <div class="mt-4 text-xs font-bold text-red-400 uppercase tracking-widest">
                         Example: Mayon Volcano
                       </div>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        `
      },
      {
        id: 'volcano-gases',
        title: 'Gases & Tsunamis',
        content: `
          <div class="h-full flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
             
             <div class="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
               
               <!-- Left Column: Gases -->
               <div class="flex flex-col justify-center p-6 lg:p-10 bg-yellow-950/10">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <h3 class="text-4xl font-black text-yellow-500 uppercase">Volcanic Gases</h3>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="bg-black/20 p-4 rounded-lg border-l-4 border-yellow-500">
                       <h5 class="text-yellow-200 font-bold">Emissions</h5>
                       <p class="text-slate-300 text-sm">Sulfur Dioxide (SO₂), Carbon Dioxide (CO₂), Hydrogen Sulfide (H₂S).</p>
                    </div>
                    <div class="bg-black/20 p-4 rounded-lg border-l-4 border-yellow-500">
                       <h5 class="text-yellow-200 font-bold">Dangers</h5>
                       <p class="text-slate-300 text-sm">Poisoning, acid rain damaging crops, atmospheric pollution.</p>
                    </div>
                  </div>
               </div>
               
               <!-- Right Column: Tsunamis -->
               <div class="flex flex-col justify-center p-6 lg:p-10 bg-blue-950/10">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 class="text-4xl font-black text-blue-500 uppercase">Volcanic Tsunamis</h3>
                  </div>
                  
                  <p class="text-xl text-slate-200 mb-6">
                    Large sea waves generated by underwater eruptions or caldera collapses.
                  </p>

                  <div class="relative h-48 rounded-xl overflow-hidden border border-blue-500/30">
                     <img src="https://picsum.photos/seed/wave/800/400" alt="Tsunami" class="w-full h-full object-cover" />
                     <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                        <p class="text-xs text-white">
                          Ex: Hunga Tonga (2022) generated a tsunami reaching the Philippines.
                        </p>
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
        id: 'v1',
        question: 'What is volcanic ash mostly composed of?',
        options: ['Burned wood', 'Jagged rock and glass', 'Soft dust', 'Coal'],
        correctAnswer: 1
      },
      {
        id: 'v2',
        question: 'Which hazard is a fast-moving mixture of hot gas and rock?',
        options: ['Lava Flow', 'Pyroclastic Flow', 'Lahar', 'Ash Fall'],
        correctAnswer: 1
      },
      {
         id: 'v3',
         question: 'What triggers a Lahar?',
         options: ['Strong winds', 'Rain or melting ice mixing with ash', 'Solar flares', 'Tectonic shifts'],
         correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'vq1',
        question: 'Scientists observe increasing ground deformation and frequent volcanic quakes near Mt. Mayon. What does this most likely indicate?',
        options: [
          'The volcano is returning to its normal state.',
          'Magma is moving upward, possibly leading to an eruption.',
          'Wind pressure is increasing on the volcano’s slopes.',
          'The volcano is cooling down.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq2',
        question: 'Residents notice a strong sulfur smell and steam rising from a nearby crater. What should be done to forecast possible volcanic activity?',
        options: [
          'Dismiss it as normal gas emission.',
          'Monitor and report the observation to PHIVOLCS.',
          'Evacuate immediately without confirmation.',
          'Wait until ashfall occurs before acting.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq3',
        question: 'A viral post claims that “Mt. Taal will erupt this weekend.” How can you verify the accuracy of this claim?',
        options: [
          'Check the latest PHIVOLCS bulletin and alert level.',
          'Believe it because it’s trending online.',
          'Wait until someone nearby confirms an explosion.',
          'Share it to warn others quickly.'
        ],
        correctAnswer: 0
      },
      {
        id: 'vq4',
        question: 'Your teacher says the volcano’s alert level has changed from 1 to 3. What does this accurately mean?',
        options: [
          'The volcano has completely erupted.',
          'There is an increased tendency toward hazardous eruption.',
          'The volcano is safe for tourism again.',
          'The volcano has already stopped releasing gas.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq5',
        question: 'After a volcanic eruption, rivers nearby experience lahar flow when it rains heavily. What is the main cause of this hazard?',
        options: [
          'Cooling magma creates more rain.',
          'Ash and debris mix with rainwater and flow downstream.',
          'Earthquakes push the water outward.',
          'Forest fires loosen the soil.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq6',
        question: 'Villages near a volcano are buried in pyroclastic materials. What caused this type of destruction?',
        options: [
          'Fast-moving currents of hot gas and volcanic fragments.',
          'Rising water levels from nearby rivers.',
          'Lava solidifying near houses.',
          'Slow buildup of volcanic gases.'
        ],
        correctAnswer: 0
      },
      {
        id: 'vq7',
        question: 'Scientists record a series of harmonic tremors followed by gas emission increases. What pattern do these data suggest?',
        options: [
          'The volcano is becoming dormant.',
          'There is a potential eruption due to magma movement.',
          'The volcano’s activity is decreasing.',
          'Weather changes are affecting the readings.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq8',
        question: 'In the past 50 years, every time the crater lake of a certain volcano changes color, an eruption follows within weeks. What does this pattern imply?',
        options: [
          'The lake color change can be ignored.',
          'It may serve as an early warning indicator of volcanic activity.',
          'The lake is affected only by seasonal rainfall.',
          'It proves that eruptions are caused by lake pollution.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq9',
        question: 'PHIVOLCS raises the alert level to 4 for a nearby volcano. As a student living 8 km from the crater, what should you and your family do?',
        options: [
          'Continue normal activities but stay alert.',
          'Pack essentials and evacuate following official instructions.',
          'Wait for ashfall before leaving.',
          'Climb the volcano to observe the eruption safely.'
        ],
        correctAnswer: 1
      },
      {
        id: 'vq10',
        question: 'Local officials plan to allow tourists to visit a volcano still under Alert Level 2. What is the most appropriate decision based on hazard forecasting?',
        options: [
          'Allow it because the volcano is not yet erupting.',
          'Limit access and wait for official downgrading to Alert Level 0.',
          'Promote more tours for economic recovery.',
          'Ignore PHIVOLCS advisories since it’s a minor alert.'
        ],
        correctAnswer: 1
      }
    ]
  }
];

export const EQ_GAME_STEPS: EQStep[] = [
  { id: 'e1', text: 'Anchor tall bookcases to the wall', correctCategory: 'Before' },
  { id: 'e2', text: 'Create a family communication plan', correctCategory: 'Before' },
  { id: 'e3', text: 'Drop, Cover, and Hold On', correctCategory: 'During' },
  { id: 'e4', text: 'Stay away from windows', correctCategory: 'During' },
  { id: 'e5', text: 'Check for gas leaks', correctCategory: 'After' },
  { id: 'e6', text: 'Listen to emergency radio', correctCategory: 'After' },
];

export const FLOOD_SCENARIOS: FloodScenario[] = [
  { id: 'f1', text: 'Driving through a puddle of unknown depth', isSafe: false, explanation: 'Never drive through water. It may be deeper than it looks or the road may be washed away.' },
  { id: 'f2', text: 'Moving to higher ground immediately', isSafe: true, explanation: 'Higher ground is your best protection against rising waters.' },
  { id: 'f3', text: 'Walking through 6 inches of moving water', isSafe: false, explanation: '6 inches of fast-moving water can knock you off your feet.' },
  { id: 'f4', text: 'Touching a wet fuse box', isSafe: false, explanation: 'Electrocution risk is extremely high in floods.' },
  { id: 'f5', text: 'Filling bathtubs with clean water before service cuts', isSafe: true, explanation: 'You may lose access to clean tap water, so storing some early is smart.' },
];
