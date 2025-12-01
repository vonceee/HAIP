
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
          <h2 class="text-2xl font-bold text-brand-700 mb-6">Competencies</h2>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3"></span>
              <span class="text-slate-700 font-medium">Identify various potential earthquake hazards</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3"></span>
              <span class="text-slate-700 font-medium">Analyze the effects of the different earthquake hazards</span>
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-brand-700 mb-6">Course Objectives</h2>
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <ul class="space-y-4 text-slate-700">
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
          <p class="mb-4">Earthquakes are among the most destructive natural hazards on Earth. Their impacts go beyond ground shaking—they can trigger multiple secondary hazards that pose threats to human life, infrastructure, and the environment. Understanding these potential hazards is essential for developing predictive skills and effective disaster preparedness.</p>
          <p class="mb-6">Earthquakes create a chain of destructive processes that affect people, the environment, and infrastructure. Analyzing these effects helps communities <strong>predict secondary hazards</strong>, <strong>minimize casualties</strong>, and <strong>strengthen disaster resilience</strong>.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-sm text-blue-800">
            <strong>Reference:</strong> Philippine Institute of Volcanology and Seismology (PHIVOLCS, 2023). <em>Earthquake Hazards</em>. Retrieved from <a href="https://www.phivolcs.dost.gov.ph" target="_blank" class="underline">https://www.phivolcs.dost.gov.ph</a>
          </div>
        `
      },
      {
        id: 'primary',
        title: 'Primary Earthquake Hazards',
        content: `
          <h3>II. PRIMARY EARTHQUAKE HAZARDS</h3>
          <h4 class="text-lg font-bold text-slate-800 mt-4">GROUND SHAKING</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> The vibration of the ground caused by the sudden release of energy during an earthquake.</li>
            <li><strong>Cause:</strong> Seismic waves radiate outward from the focus and make structures move.</li>
          </ul>

          <h5 class="font-semibold text-slate-700 mt-2">EFFECTS ANALYSIS</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Structural Damage:</strong> Weakly designed buildings, bridges, and houses collapse, especially on soft soils.</li>
            <li><strong>Infrastructure Disruption:</strong> Roads crack, utilities fail, and transportation networks are cut off.</li>
            <li><strong>Psychological Stress:</strong> Fear and trauma affect survivors long after the earthquake.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-6">
            <p><strong>Example:</strong> The 1990 Luzon Earthquake (Magnitude 7.8) caused severe shaking in Baguio City, leading to the collapse of multiple hotels and schools. <em>(PHIVOLCS, 2020; USGS, 2021)</em></p>
          </div>
        `
      },
      {
        id: 'secondary-geo',
        title: 'Secondary Hazards: Ground & Soil',
        content: `
          <h3>III. SECONDARY EARTHQUAKE HAZARDS</h3>
          
          <h4 class="text-lg font-bold text-slate-800 mt-6">1. Ground Rupture</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> The visible tearing or displacement of the ground surface along an active fault during an earthquake.</li>
          </ul>

          <h5 class="font-semibold text-slate-700">Effects Analysis:</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Direct Structural Damage:</strong> Buildings, bridges, and pipelines crossing fault lines are torn apart.</li>
            <li><strong>Land Use Impact:</strong> Fault zones become uninhabitable, limiting urban expansion and zoning.</li>
            <li><strong>Economic Consequences:</strong> Relocation and reconstruction costs increase drastically.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-8">
            <p><strong>Example:</strong> A potential ground rupture along the West Valley Fault could damage parts of Quezon City and Taguig, affecting major infrastructures. <em>(Reference: PHIVOLCS Faultfinder Database, 2023)</em></p>
          </div>

          <h4 class="text-lg font-bold text-slate-800 mt-6">2. Liquefaction</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> The process where water-saturated, loose soil behaves like a liquid during intense shaking.</li>
          </ul>

          <h5 class="font-semibold text-slate-700">Effects Analysis:</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Building Instability:</strong> Houses, bridges, and towers sink, tilt, or collapse.</li>
            <li><strong>Underground Damage:</strong> Bursting of pipelines and sewage systems due to soil movement.</li>
            <li><strong>Economic Disruption:</strong> Industrial zones built on reclaimed or soft land experience high recovery costs.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-6">
            <p><strong>Example:</strong> During the 2019 Cotabato earthquakes, parts of Kidapawan experienced liquefaction, damaging roads and tilting residential buildings. <em>(Reference: PHIVOLCS Earthquake Report, 2019)</em></p>
          </div>
        `
      },
      {
        id: 'secondary-hydro',
        title: 'Secondary Hazards: Landslides & Tsunami',
        content: `
          <h4 class="text-lg font-bold text-slate-800 mt-2">3. Landslides</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> Downhill movement of rocks and soil triggered by ground shaking, especially in mountainous or steep terrains.</li>
          </ul>

          <h5 class="font-semibold text-slate-700">Effects Analysis:</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Burial of Settlements:</strong> Entire villages can be buried, as seen in upland communities of Luzon.</li>
            <li><strong>Isolation of Areas:</strong> Blocked roads hinder rescue and relief operations.</li>
            <li><strong>Environmental Damage:</strong> Landslides destroy vegetation, leading to erosion and loss of biodiversity.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-8">
            <p><strong>Example:</strong> The 1990 Luzon Earthquake triggered massive landslides in Benguet, burying houses and farmlands. <em>(Reference: Lagmay, A. M. F. et al., 2020)</em></p>
          </div>

          <h4 class="text-lg font-bold text-slate-800 mt-6">4. Tsunami</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.</li>
          </ul>

          <h5 class="font-semibold text-slate-700">Effects Analysis:</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Coastal Inundation:</strong> Flooding destroys homes, ports, and coastal infrastructure.</li>
            <li><strong>Loss of Lives:</strong> People near the shorelines have little time to evacuate.</li>
            <li><strong>Environmental Impact:</strong> Saltwater contamination damages crops and freshwater sources.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-6">
            <p><strong>Example:</strong> The 1976 Moro Gulf Earthquake (Magnitude 7.9) caused a tsunami that killed more than 8,000 people in Mindanao. <em>(Reference: USGS, 2021)</em></p>
          </div>
        `
      },
      {
        id: 'fire-refs',
        title: 'Fire & Infrastructure Failures',
        content: `
          <h4 class="text-lg font-bold text-slate-800 mt-2">5. Fire and Infrastructure Failures</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Definition:</strong> Secondary hazards caused by damaged gas lines, power systems, and industrial facilities during or after earthquakes.</li>
          </ul>

          <h5 class="font-semibold text-slate-700">Effects Analysis:</h5>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Urban Fires:</strong> Breakouts spread rapidly when water lines are broken.</li>
            <li><strong>Pollution:</strong> Chemical leaks from factories contaminate the air and soil.</li>
            <li><strong>Extended Recovery:</strong> Fire-damaged areas require longer rebuilding periods.</li>
          </ul>

          <div class="bg-slate-100 p-4 rounded-lg mb-8">
            <p><strong>Example:</strong> The 1906 San Francisco Earthquake led to widespread fires that caused more deaths than the earthquake itself. <em>(Reference: USGS, 2020)</em></p>
          </div>

          <h3 class="mt-8 border-t pt-4">REFERENCES</h3>
          <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-600">
            <li><strong>PHIVOLCS.</strong> (2023). <em>Earthquake Hazards and FaultFinder</em>. Department of Science and Technology.</li>
            <li><strong>U.S. Geological Survey (USGS).</strong> (2021). <em>Earthquake Hazards Program</em>.</li>
            <li><strong>Lagmay, A. M. F. et al.</strong> (2020). <em>Multi-hazard Mapping for Disaster Risk Reduction in the Philippines</em>. Philippine Journal of Science, 149(S1), 49–64.</li>
            <li><strong>PHIVOLCS.</strong> (2019). <em>Cotabato Earthquake Series Report</em>.</li>
            <li><strong>UNDRR.</strong> (2022). <em>Global Assessment Report on Disaster Risk Reduction</em>.</li>
          </ol>
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
          <h2 class="text-2xl font-bold text-brand-700 mb-6">Course Objectives</h2>
          <ul class="space-y-4 mb-8 text-slate-700">
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
        title: 'The Dangers of Flooding',
        content: `
          <h2 id="power-of-water">The Power of Water</h2>
          <p>Flooding is the most common natural disaster. It can happen anywhere, but is most common in low-lying areas or near bodies of water.</p>
          
          <h3 id="turn-around">Turn Around, Don't Drown!</h3>
          <p>Never drive through flooded roadways. Just 12 inches of moving water can carry away a small car, and 6 inches can knock an adult off their feet.</p>

          <h3 id="electrical">Electrical Hazards</h3>
          <p>Never touch electrical equipment if you are wet or standing in water. If your home is flooding, turn off power at the main breaker if it is safe to do so.</p>
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
          <h2 class="text-2xl font-bold text-brand-700 mb-6">Course Objectives</h2>
          <ul class="space-y-4 mb-8 text-slate-700">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Identify volcanic hazards including ash and lava
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Protect respiratory health during ashfall
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Understand evacuation zones and alerts
            </li>
          </ul>
        `
      },
      {
        id: 'volcano-intro',
        title: 'Volcanic Hazards',
        content: `
          <h2 id="hazards">Volcanic Hazards</h2>
          <p>Volcanoes spew hot, dangerous gases, ash, lava, and rock that are powerfully destructive.</p>
          
          <h3 id="ashfall">Ashfall</h3>
          <p>Volcanic ash is jagged particles of rock and natural glass. It creates breathing problems and can damage engines. Wear N95 masks if available.</p>
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
