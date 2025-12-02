
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
          <h3>II. PRIMARY EARTHQUAKE HAZARDS</h3>
          <h4 class="text-xl font-bold text-slate-200 mt-6">GROUND SHAKING</h4>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-lg">
            <li><strong>Definition:</strong> The vibration of the ground caused by the sudden release of energy during an earthquake.</li>
            <li><strong>Cause:</strong> Seismic waves radiate outward from the focus and make structures move.</li>
          </ul>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-300">
            <li><strong>Structural Damage:</strong> Weakly designed buildings, bridges, and houses collapse.</li>
            <li><strong>Infrastructure Disruption:</strong> Roads crack, utilities fail.</li>
            <li><strong>Psychological Stress:</strong> Fear and trauma affect survivors.</li>
          </ul>
        `
      },
      {
        id: 'ground-rupture',
        title: 'Secondary Hazard: Ground Rupture',
        content: `
          <h3>III. SECONDARY HAZARDS</h3>
          
          <h4 class="text-xl font-bold text-slate-200 mt-2">1. Ground Rupture</h4>
          <p class="mb-4"><strong>Definition:</strong> The visible tearing or displacement of the ground surface along an active fault.</p>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-slate-300">
            <li><strong>Direct Structural Damage:</strong> Buildings and pipelines crossing fault lines are torn apart.</li>
            <li><strong>Land Use Impact:</strong> Fault zones become uninhabitable.</li>
          </ul>

          <div class="bg-white/10 p-4 rounded-lg">
            <p><strong>Example:</strong> A potential ground rupture along the West Valley Fault could damage parts of Quezon City and Taguig.</p>
          </div>
        `
      },
      {
        id: 'liquefaction',
        title: 'Secondary Hazard: Liquefaction',
        content: `
          <h4 class="text-xl font-bold text-slate-200 mt-2">2. Liquefaction</h4>
          <p class="mb-4"><strong>Definition:</strong> The process where water-saturated, loose soil behaves like a liquid during intense shaking.</p>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-slate-300">
            <li><strong>Building Instability:</strong> Houses, bridges, and towers sink, tilt, or collapse.</li>
            <li><strong>Underground Damage:</strong> Bursting of pipelines and sewage systems.</li>
            <li><strong>Economic Disruption:</strong> Industrial zones built on reclaimed land experience high recovery costs.</li>
          </ul>
        `
      },
      {
        id: 'landslides',
        title: 'Secondary Hazard: Landslides',
        content: `
          <h4 class="text-xl font-bold text-slate-200 mt-2">3. Landslides</h4>
          <p class="mb-4"><strong>Definition:</strong> Downhill movement of rocks and soil triggered by ground shaking, especially in mountainous terrains.</p>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-slate-300">
            <li><strong>Burial of Settlements:</strong> Entire villages can be buried.</li>
            <li><strong>Isolation of Areas:</strong> Blocked roads hinder rescue.</li>
            <li><strong>Environmental Damage:</strong> Loss of biodiversity and vegetation.</li>
          </ul>
        `
      },
      {
        id: 'tsunami',
        title: 'Secondary Hazard: Tsunami',
        content: `
          <h4 class="text-xl font-bold text-slate-200 mt-2">4. Tsunami</h4>
          <p class="mb-4"><strong>Definition:</strong> A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.</p>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-slate-300">
            <li><strong>Coastal Inundation:</strong> Flooding destroys homes and ports.</li>
            <li><strong>Loss of Lives:</strong> Little time to evacuate near shorelines.</li>
            <li><strong>Environmental Impact:</strong> Saltwater contamination damages crops.</li>
          </ul>

           <div class="bg-white/10 p-4 rounded-lg">
            <p><strong>Example:</strong> The 1976 Moro Gulf Earthquake (Magnitude 7.9) caused a tsunami that killed more than 8,000 people.</p>
          </div>
        `
      },
      {
        id: 'fire-refs',
        title: 'Fire & Infrastructure',
        content: `
          <h4 class="text-xl font-bold text-slate-200 mt-2">5. Fire and Infrastructure Failures</h4>
          <p class="mb-4"><strong>Definition:</strong> Secondary hazards caused by damaged gas lines and power systems.</p>

          <h5 class="font-semibold text-slate-400 uppercase tracking-wider">Effects Analysis</h5>
          <ul class="list-disc pl-5 space-y-3 mb-6 text-slate-300">
            <li><strong>Urban Fires:</strong> Spread rapidly when water lines are broken.</li>
            <li><strong>Pollution:</strong> Chemical leaks contaminate air and soil.</li>
          </ul>

          <div class="mt-8 border-t border-white/20 pt-4">
            <h5 class="text-sm font-bold text-slate-500 mb-2">KEY REFERENCES</h5>
             <ul class="text-xs text-slate-500 space-y-1">
              <li>PHIVOLCS. (2023). Earthquake Hazards and FaultFinder.</li>
              <li>U.S. Geological Survey (USGS). (2021). Earthquake Hazards Program.</li>
              <li>Lagmay, A. M. F. et al. (2020). Multi-hazard Mapping in the Philippines.</li>
             </ul>
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What causes Ground Shaking during an earthquake?',
        options: ['Heavy winds', 'Seismic waves radiating from the focus', 'Volcanic smoke', 'Ocean tides'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'Which of the following is a secondary earthquake hazard?',
        options: ['Ground Shaking', 'Tsunami', 'Heavy Rain', 'Typhoon'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'What phenomenon causes loose, water-saturated soil to behave like a liquid?',
        options: ['Liquefaction', 'Ground Rupture', 'Tsunami', 'Erosion'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '2',
    title: 'Flood Safety: Rising Waters',
    description: 'Understand the dangers of flash floods and how to navigate rising water scenarios.',
    topic: 'Flood',
    imageUrl: 'https://picsum.photos/seed/flood/800/400',
    readTime: 4,
    difficulty: 'Intermediate',
    objectives: [
      'Recognize the signs of flash flooding',
      'Understand the power of moving water',
      'Identify electrical hazards during floods',
      'Plan safe evacuation routes'
    ],
    competencies: [
      'Situational Awareness',
      'Decision Making',
      'Electrical Safety'
    ],
    gameType: 'flood-choice',
    sections: [
      {
        id: 'flood-objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Course Objectives</h2>
          <ul class="space-y-4 mb-8 text-slate-300">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Recognize the signs of flash flooding
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Understand the power of moving water
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Identify electrical hazards during floods
            </li>
          </ul>
        `
      },
      {
        id: 'flood-intro',
        title: 'The Power of Water',
        content: `
          <div class="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 py-10">
            
            <!-- Animated Visual -->
            <div class="relative group cursor-pointer mb-4">
              <div class="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full group-hover:bg-cyan-500/40 transition-all duration-1000"></div>
              <svg class="w-40 h-40 text-cyan-400 transform group-hover:translate-y-2 transition-transform duration-1000 ease-in-out drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                 <svg class="w-16 h-16 text-white/50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                 </svg>
              </div>
            </div>

            <h3 class="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-700 uppercase tracking-tighter drop-shadow-lg">
              Flood
            </h3>

            <p class="text-3xl md:text-5xl text-white font-bold max-w-3xl leading-tight transform hover:scale-105 transition-transform duration-300">
              "Turn Around, <br/> <span class="text-red-500 inline-block">Don't Drown!</span>"
            </p>
            
            <div class="bg-blue-900/30 border border-blue-500/30 p-8 rounded-3xl backdrop-blur-sm max-w-3xl mt-8 hover:bg-blue-900/40 transition-colors">
              <p class="text-xl text-slate-200 leading-relaxed">
                 Flooding is the most common natural disaster. Just <span class="text-cyan-400 font-black text-3xl mx-2 inline-block animate-pulse">6 inches</span> of moving water can knock you off your feet.
              </p>
            </div>
          </div>
        `
      },
      {
        id: 'flood-hazards',
        title: 'Electrical Hazards',
        content: `
          <h2 class="text-xl font-bold text-slate-200 mb-4">Invisible Dangers</h2>
          
          <h3 class="text-lg font-semibold text-yellow-400 mt-4 mb-2">Electricity & Water</h3>
          <p class="mb-4">Never touch electrical equipment if you are wet or standing in water. If your home is flooding, turn off power at the main breaker if it is safe to do so.</p>
          
          <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-300">
             <li>Do not walk through standing water if power lines are down nearby.</li>
             <li>Unplug appliances if water levels are rising but haven't reached outlets yet.</li>
          </ul>
        `
      }
    ],
    quiz: [
      {
        id: 'f1',
        question: 'How much moving water is needed to knock a person down?',
        options: ['2 feet', '6 inches', '1 inch', '3 feet'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '3',
    title: 'Volcanic Eruptions',
    description: 'Ash, lava, and pyroclastic flows. Learn what to do if you live near a volcano.',
    topic: 'Volcano',
    imageUrl: 'https://picsum.photos/seed/volcano/800/400',
    readTime: 6,
    difficulty: 'Advanced',
    objectives: [
      'Identify volcanic hazards including ash and lava',
      'Protect respiratory health during ashfall',
      'Understand evacuation zones and alerts'
    ],
    competencies: [
      'Hazard Identification',
      'Personal Protection',
      'Crisis Management'
    ],
    gameType: 'none',
    sections: [
       {
        id: 'volcano-objectives',
        title: 'Learning Objectives',
        content: `
          <h2 class="text-2xl font-bold text-brand-500 mb-6">Course Objectives</h2>
          <ul class="space-y-4 mb-8 text-slate-300">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Identify volcanic hazards including ash and lava
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Protect respiratory health during ashfall
            </li>
          </ul>
        `
      },
      {
        id: 'volcano-intro',
        title: 'Volcanic Hazards',
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

            <p class="text-3xl text-slate-200 font-thin tracking-wide uppercase mt-4">
              Nature's <span class="font-black text-red-500 text-5xl inline-block transform hover:scale-125 hover:rotate-6 transition-transform cursor-pointer shadow-black drop-shadow-md">EXPLOSIVE</span> Fury.
            </p>

            <div class="grid grid-cols-3 gap-4 mt-12 w-full max-w-2xl">
              <div class="bg-red-950/40 border border-red-500/30 p-6 rounded-2xl flex flex-col items-center hover:bg-red-900/60 transition-colors group cursor-crosshair">
                 <span class="text-4xl mb-2 group-hover:-translate-y-2 transition-transform">🌫️</span>
                 <span class="text-red-200 font-bold uppercase tracking-widest">Ash</span>
              </div>
              <div class="bg-orange-950/40 border border-orange-500/30 p-6 rounded-2xl flex flex-col items-center hover:bg-orange-900/60 transition-colors group cursor-crosshair">
                 <span class="text-4xl mb-2 group-hover:-translate-y-2 transition-transform">🌋</span>
                 <span class="text-orange-200 font-bold uppercase tracking-widest">Lava</span>
              </div>
              <div class="bg-yellow-950/40 border border-yellow-500/30 p-6 rounded-2xl flex flex-col items-center hover:bg-yellow-900/60 transition-colors group cursor-crosshair">
                 <span class="text-4xl mb-2 group-hover:-translate-y-2 transition-transform">💨</span>
                 <span class="text-yellow-200 font-bold uppercase tracking-widest">Gas</span>
              </div>
            </div>

          </div>
        `
      },
      {
        id: 'volcano-ash',
        title: 'Ashfall Dangers',
        content: `
          <h3 class="text-lg font-semibold text-slate-200 mb-2">Ashfall</h3>
          <p class="mb-4">Volcanic ash is jagged particles of rock and natural glass. It is NOT soft like wood ash.</p>
          
          <ul class="list-disc pl-5 space-y-3 text-slate-300">
             <li>Creates breathing problems (silicosis).</li>
             <li>Can collapse roofs when wet and heavy.</li>
             <li>Damages engines and electronics.</li>
          </ul>
          
          <div class="bg-red-900/20 p-4 border border-red-500/30 rounded mt-4">
            <strong>Safety Tip:</strong> Wear N95 masks and goggles if ash is falling.
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'v1',
        question: 'What is volcanic ash made of?',
        options: ['Burnt wood', 'Rock and glass particles', 'Soft dust', 'Coal'],
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
