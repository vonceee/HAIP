
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
          <h3>I. INTRODUCTION</h3>
          <p class="mb-6 text-lg">Earthquakes are among the most destructive natural hazards on Earth. Their impacts go beyond ground shaking—they can trigger multiple secondary hazards that pose threats to human life, infrastructure, and the environment.</p>
          <p class="mb-8 text-lg">Analyzing these effects helps communities <strong>predict secondary hazards</strong>, <strong>minimize casualties</strong>, and <strong>strengthen disaster resilience</strong>.</p>
          
          <div class="bg-blue-500/10 border-l-4 border-blue-500 p-4 text-sm text-blue-200">
            <strong>Reference:</strong> Philippine Institute of Volcanology and Seismology (PHIVOLCS, 2023). <em>Earthquake Hazards</em>.
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
          <h2 class="text-xl font-bold text-slate-200 mb-4">Moving Water is Deadly</h2>
          <p class="mb-4">Flooding is the most common natural disaster. It can happen anywhere, but is most common in low-lying areas or near bodies of water.</p>
          
          <h3 class="text-lg font-semibold text-cyan-400 mt-6 mb-2">Turn Around, Don't Drown!</h3>
          <p>Never drive through flooded roadways. Just 12 inches of moving water can carry away a small car, and 6 inches can knock an adult off their feet.</p>
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
          <h2 class="text-xl font-bold text-slate-200 mb-4">Nature's Fury</h2>
          <p class="mb-4">Volcanoes spew hot, dangerous gases, ash, lava, and rock that are powerfully destructive. Eruptions can be explosive or effusive (flowing).</p>
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
