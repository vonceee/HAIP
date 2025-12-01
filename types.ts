
export type HazardTopic = 'Earthquake' | 'Flood' | 'Volcano' | 'General';

export type GameType = 'earthquake-sim' | 'flood-choice' | 'none';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface TocItem {
  title: string;
  id: string;
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  topic: HazardTopic;
  imageUrl: string;
  content: string; // HTML content
  readTime: number; // minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: string[];
  competencies: string[];
  tableOfContents: TocItem[];
  quiz?: QuizQuestion[];
  gameType: GameType;
}

// Game specific types
export interface EQStep {
  id: string;
  text: string;
  correctCategory: 'Before' | 'During' | 'After';
}

export interface FloodScenario {
  id: string;
  text: string;
  isSafe: boolean;
  explanation: string;
}
