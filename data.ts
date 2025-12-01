
import { Lecture, EQStep, FloodScenario } from './types';

export const LECTURES: Lecture[] = [
  {
    id: '1',
    title: 'Earthquake Preparedness 101',
    description: 'Learn the fundamental steps to survival. Test different magnitudes in our interactive Shake Simulator.',
    topic: 'Earthquake',
    imageUrl: 'https://picsum.photos/seed/quake/800/400',
    readTime: 5,
    difficulty: 'Beginner',
    objectives: [
      'Identify the immediate actions to take during shaking',
      'Understand the risks of falling objects',
      'Learn how to secure furniture and appliances',
      'Recognize different earthquake magnitudes'
    ],
    competencies: [
      'Risk Assessment',
      'Emergency Response',
      'Home Safety'
    ],
    tableOfContents: [
      { title: 'Understanding Earthquakes', id: 'understanding' },
      { title: 'Drop, Cover, and Hold On', id: 'drop-cover-hold' },
      { title: 'Securing Your Space', id: 'securing' }
    ],
    gameType: 'earthquake-sim',
    content: `
      <h2 id="understanding">Understanding Earthquakes</h2>
      <p>Earthquakes are sudden rolling or shaking events caused by movement under the earth's surface. They happen along cracks in the earth's crust called faults.</p>
      
      <h3 id="drop-cover-hold">Drop, Cover, and Hold On</h3>
      <p>This is the most critical action to take during shaking:</p>
      <ul>
        <li><strong>DROP</strong> where you are, onto your hands and knees.</li>
        <li><strong>COVER</strong> your head and neck with one arm and hand.</li>
        <li><strong>HOLD ON</strong> until the shaking stops.</li>
      </ul>

      <h3 id="securing">Securing Your Space</h3>
      <p>Most injuries in earthquakes are caused by falling objects. Secure heavy furniture to walls and move heavy items to lower shelves.</p>
    `,
    quiz: [
      {
        id: 'q1',
        question: 'What is the first thing you should do when shaking starts?',
        options: ['Run outside', 'Drop to the ground', 'Stand in a doorway', 'Call 911'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'Which of these is a hazard during an earthquake?',
        options: ['Unsecured bookshelves', 'Soft pillows', 'Carpeted floors', 'Plastic cups'],
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
    tableOfContents: [
      { title: 'The Power of Water', id: 'power-of-water' },
      { title: 'Turn Around, Don\'t Drown!', id: 'turn-around' },
      { title: 'Electrical Hazards', id: 'electrical' }
    ],
    gameType: 'flood-choice',
    content: `
      <h2 id="power-of-water">The Power of Water</h2>
      <p>Flooding is the most common natural disaster. It can happen anywhere, but is most common in low-lying areas or near bodies of water.</p>
      
      <h3 id="turn-around">Turn Around, Don't Drown!</h3>
      <p>Never drive through flooded roadways. Just 12 inches of moving water can carry away a small car, and 6 inches can knock an adult off their feet.</p>

      <h3 id="electrical">Electrical Hazards</h3>
      <p>Never touch electrical equipment if you are wet or standing in water. If your home is flooding, turn off power at the main breaker if it is safe to do so.</p>
    `,
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
    tableOfContents: [
      { title: 'Volcanic Hazards', id: 'hazards' },
      { title: 'Ashfall Safety', id: 'ashfall' }
    ],
    gameType: 'none',
    content: `
      <h2 id="hazards">Volcanic Hazards</h2>
      <p>Volcanoes spew hot, dangerous gases, ash, lava, and rock that are powerfully destructive.</p>
      
      <h3 id="ashfall">Ashfall</h3>
      <p>Volcanic ash is jagged particles of rock and natural glass. It creates breathing problems and can damage engines. Wear N95 masks if available.</p>
    `,
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
