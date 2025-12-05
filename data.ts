import { Lecture, FloodScenario } from './types';

export const FLOOD_SCENARIOS: FloodScenario[] = [
  {
    id: 'f1',
    text: "You see water rising rapidly in the street. You decide to walk through it to get home.",
    isSafe: false,
    explanation: "Floodwater can hide debris, open manholes, and be contaminated. Even 6 inches of moving water can knock you down."
  },
  {
    id: 'f2',
    text: "You hear a flood warning on the radio and immediately move to higher ground.",
    isSafe: true,
    explanation: "Responding quickly to warnings saves lives. Moving to higher ground prevents being trapped by rising waters."
  },
  {
    id: 'f3',
    text: "You drive your car around a barricade because the water doesn't look deep.",
    isSafe: false,
    explanation: "Turn Around, Don't Drown! Roadbeds may be washed out, and 12 inches of water can float a small car."
  },
  {
    id: 'f4',
    text: "You prepare an emergency kit with food, water, and documents before the storm hits.",
    isSafe: true,
    explanation: "Preparedness is key. Having supplies ready ensures you can survive if isolated for days."
  },
  {
    id: 'f5',
    text: "The rain has stopped, so you go play in the floodwaters.",
    isSafe: false,
    explanation: "Floodwaters are often contaminated with sewage and chemicals. They also carry risk of disease and injury."
  }
];

export const LECTURES: Lecture[] = [
  {
    id: 'l1',
    title: 'Earthquake Preparedness',
    description: 'Master the "Drop, Cover, and Hold On" protocol and learn how to secure your environment against seismic activity.',
    topic: 'Earthquake',
    imageUrl: 'https://images.unsplash.com/photo-1594775021204-82d6d3d4b2e0?q=80&w=2070&auto=format&fit=crop',
    readTime: 15,
    difficulty: 'Beginner',
    objectives: ['Identify safe spots', 'Learn Drop, Cover, Hold On', 'Understand magnitude scales'],
    competencies: ['Rapid Response', 'Structural Awareness', 'Self-Preservation'],
    gameType: 'earthquake-sim',
    sections: [
      {
        id: 'eq-intro',
        title: 'Understanding Earthquakes',
        content: `
          <div class="space-y-6">
            <p class="text-xl leading-relaxed text-slate-200">
              An earthquake is a sudden, rapid shaking of the ground caused by the breaking and shifting of subterranean rock as it releases strain that has accumulated over a long time.
            </p>
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 class="text-xl font-bold text-orange-400 mb-4">Key Characteristics</h3>
              <ul class="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Foreshocks:</strong> Smaller earthquakes that happen in the same place as the larger earthquake that follows.</li>
                <li><strong>Mainshock:</strong> The largest, main earthquake.</li>
                <li><strong>Aftershocks:</strong> Smaller earthquakes that occur afterwards in the same place as the mainshock.</li>
              </ul>
            </div>
            <p class="text-lg text-slate-300">
              Earthquakes strike suddenly, violently, and without warning. Identifying potential hazards ahead of time and advance planning can reduce the dangers of serious injury or loss of life.
            </p>
          </div>
        `
      },
      {
        id: 'eq-action',
        title: 'Immediate Action Protocol',
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-orange-900/20 p-6 rounded-2xl border border-orange-500/30 text-center">
              <div class="text-4xl mb-4">⬇️</div>
              <h3 class="text-xl font-black text-orange-400 uppercase mb-2">Drop</h3>
              <p class="text-sm text-slate-300">Drop to your hands and knees. This position protects you from being knocked down and allows you to stay low and crawl to shelter.</p>
            </div>
            <div class="bg-orange-900/20 p-6 rounded-2xl border border-orange-500/30 text-center">
              <div class="text-4xl mb-4">🛡️</div>
              <h3 class="text-xl font-black text-orange-400 uppercase mb-2">Cover</h3>
              <p class="text-sm text-slate-300">Cover your head and neck with one arm and hand. Crawl underneath a sturdy table or desk for shelter.</p>
            </div>
            <div class="bg-orange-900/20 p-6 rounded-2xl border border-orange-500/30 text-center">
              <div class="text-4xl mb-4">✊</div>
              <h3 class="text-xl font-black text-orange-400 uppercase mb-2">Hold On</h3>
              <p class="text-sm text-slate-300">Hold on until the shaking stops. If your shelter moves, move with it.</p>
            </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'q1',
        question: "What is the first thing you should do when shaking starts?",
        options: ["Run outside", "Drop, Cover, and Hold On", "Stand in a doorway", "Call 911"],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: "If you are in bed during an earthquake, what should you do?",
        options: ["Roll onto the floor", "Stay there and cover your head with a pillow", "Run to the nearest exit", "Get under the bed"],
        correctAnswer: 1
      }
    ],
    finalQuiz: [
      {
        id: 'fq1',
        question: "Which of the following is NOT a recommended action during an earthquake?",
        options: ["Staying indoors if you are already inside", "Driving to a bridge or overpass for shelter", "Moving away from windows", "Dropping to your hands and knees"],
        correctAnswer: 1
      },
      {
        id: 'fq2',
        question: "After the shaking stops, what should you be prepared for?",
        options: ["Tsunamis (if near coast)", "Aftershocks", "Gas leaks", "All of the above"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'l2',
    title: 'Flood Safety & Awareness',
    description: 'Recognize the early warning signs of flooding and understand the dangers of rising water levels.',
    topic: 'Flood',
    imageUrl: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?q=80&w=2070&auto=format&fit=crop',
    readTime: 12,
    difficulty: 'Intermediate',
    objectives: ['Recognize flood types', 'Understand warning systems', 'Evacuation protocols'],
    competencies: ['Situational Awareness', 'Route Planning', 'Risk Assessment'],
    gameType: 'flood-choice',
    sections: [
      {
        id: 'flood-intro',
        title: 'Introduction to Floods',
        content: `
           <div class="space-y-6">
             <p class="text-xl text-slate-200">Flooding is a temporary overflow of water onto land that is normally dry. Floods are the most common natural disaster in the United States.</p>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
                   <h4 class="font-bold text-blue-300 mb-2">Flash Floods</h4>
                   <p class="text-sm text-slate-400">Can develop within minutes or hours of heavy rainfall or a dam failure. They strike with little warning.</p>
                </div>
                <div class="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
                   <h4 class="font-bold text-blue-300 mb-2">River Floods</h4>
                   <p class="text-sm text-slate-400">Occur when water levels rise over the top of river banks. This flooding can happen in all river and stream channels.</p>
                </div>
             </div>
           </div>
        `
      },
      {
        id: 'flood-natural',
        title: 'Flood: Natural Signs',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl font-fredoka font-black text-white mb-6 uppercase drop-shadow-md">Natural Signs</h3>
                <div class="space-y-6">
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌧️</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Continuous heavy rainfall for hours or days</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌊</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Rising water levels in rivers and creeks</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🚧</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Overflowing canals or drainage systems</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">💧</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Soil softening or water seeping from ground</p>
                   </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://image.telanganatoday.com/wp-content/uploads/2024/07/rains_V_jpg--816x480-4g.webp?sw=1440&dsz=816x480&iw=615&p=false&r=2" alt="Continuous Rain" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://image.telanganatoday.com/wp-content/uploads/2024/07/rains_V_jpg--816x480-4g.webp?sw=1440&dsz=816x480&iw=615&p=false&r=2" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Continuous heavy rainfall causing street flooding.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://www.ausableriver.org/sites/default/files/images/JohnsBrook_0146.JPG" alt="Rising Rivers" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Rising water levels in rivers and creeks.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
      },
      {
        id: 'flood-scientific',
        title: 'Flood: Scientific Signs',
        content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl font-fredoka font-black text-cyan-300 mb-6 uppercase drop-shadow-md">Scientific Signs</h3>
                <div class="space-y-6">
                   <div class="bg-cyan-900/30 p-6 rounded-[2rem] border border-cyan-500/30 flex items-center hover:bg-cyan-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">📡</span>
                      <p class="text-xl text-cyan-100 font-quicksand font-bold">PAGASA rainfall radar showing high intensity (>50mm/hr)</p>
                   </div>
                   <div class="bg-cyan-900/30 p-6 rounded-[2rem] border border-cyan-500/30 flex items-center hover:bg-cyan-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🚥</span>
                      <p class="text-xl text-cyan-100 font-quicksand font-bold">Color-coded warnings (Yellow, Orange, Red Alerts)</p>
                   </div>
                   <div class="bg-cyan-900/30 p-6 rounded-[2rem] border border-cyan-500/30 flex items-center hover:bg-cyan-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🖥️</span>
                      <p class="text-xl text-cyan-100 font-quicksand font-bold">Flood forecasting and warning system alerts</p>
                   </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://images.gmanews.tv/webpics/2024/07/640_452691315_909690291202625_9015264689503478115_n_2024_07_24_17_11_28.jpg" alt="Rainfall Radar" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Rainfall monitoring radar indicating high intensity.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/inTD1MO.jpeg" alt="Color Coded Warnings" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">DOST-PAGASA rainfall warning system (Yellow, Orange, Red).</p>
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
        id: 'fq1',
        question: "What does a 'Flash Flood Warning' mean?",
        options: ["Flooding is possible", "Flooding is happening or imminent", "It will rain tomorrow", "Stay tuned for updates"],
        correctAnswer: 1
      },
      {
        id: 'fq2',
        question: "How much moving water does it take to knock an adult down?",
        options: ["6 inches", "12 inches", "2 feet", "3 feet"],
        correctAnswer: 0
      }
    ],
    finalQuiz: [
      {
        id: 'final-fq1',
        question: "Why is it dangerous to walk through floodwaters?",
        options: ["You might get wet", "Water might ruin your shoes", "Contamination, debris, and swift currents", "It's illegal"],
        correctAnswer: 2
      },
      {
        id: 'final-fq2',
        question: "Which color alert usually signifies the highest level of danger in rainfall warnings?",
        options: ["Yellow", "Orange", "Red", "Blue"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'l3',
    title: 'Volcanic Eruption Survival',
    description: 'Learn about volcanic ashfall, pyroclastic flows, and the exclusion zones to respect during activity.',
    topic: 'Volcano',
    imageUrl: 'https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?q=80&w=2070&auto=format&fit=crop',
    readTime: 18,
    difficulty: 'Advanced',
    objectives: ['Identify alert levels', 'Protect breathing', 'Evacuation readiness'],
    competencies: ['Respiratory Protection', 'Zone Awareness', 'Emergency Supplies'],
    gameType: 'none',
    sections: [
       {
        id: 'volcano-intro',
        title: 'Volcanic Hazards',
        content: `
          <div class="space-y-6">
            <p class="text-xl text-slate-200">Volcanic eruptions can produce ash, toxic gases, flash floods of hot water and debris called lahars, lava flows, and fast-moving currents of hot gas and rock called pyroclastic flows.</p>
            <div class="bg-red-900/20 p-6 rounded-2xl border border-red-500/30">
               <h3 class="text-xl font-bold text-red-400 mb-4">Key Dangers</h3>
               <ul class="list-disc pl-6 space-y-2 text-slate-300">
                 <li><strong>Ashfall:</strong> Heavy ash can collapse roofs and cause respiratory issues.</li>
                 <li><strong>Pyroclastic Flow:</strong> Extremely hot gas and matter that moves at high speeds. Impossible to outrun.</li>
                 <li><strong>Lahars:</strong> Mudflows that can devastate river valleys.</li>
               </ul>
            </div>
          </div>
        `
      },
      {
        id: 'volcano-prep',
        title: 'Preparation & Safety',
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 class="text-lg font-bold text-red-300 mb-3">Before Eruption</h3>
                <ul class="space-y-2 text-slate-400 text-sm">
                   <li>• Know your community's warning systems.</li>
                   <li>• Get N95 masks for every family member.</li>
                   <li>• Have a shelter-in-place plan.</li>
                </ul>
             </div>
             <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 class="text-lg font-bold text-red-300 mb-3">During Ashfall</h3>
                <ul class="space-y-2 text-slate-400 text-sm">
                   <li>• Stay indoors, close windows/doors/dampers.</li>
                   <li>• Wear long sleeves and pants if outside.</li>
                   <li>• Use goggles to protect eyes.</li>
                </ul>
             </div>
          </div>
        `
      }
    ],
    refresherQuiz: [
      {
        id: 'vq1',
        question: "What is the best respiratory protection against volcanic ash?",
        options: ["Surgical mask", "Cloth mask", "N95 Respirator", "Holding your breath"],
        correctAnswer: 2
      }
    ],
    finalQuiz: [
      {
        id: 'fvq1',
        question: "What is a lahar?",
        options: ["A lava flow", "A mudflow caused by volcanic debris and water", "An earthquake", "A gas cloud"],
        correctAnswer: 1
      }
    ]
  }
];