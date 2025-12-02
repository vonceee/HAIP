

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
  sectionIndex: number; // Changed from id to sectionIndex for pagination
}

export interface LectureSection {
  id: string;
  title: string;
  content: string; // HTML content for this specific section
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  topic: HazardTopic;
  imageUrl: string;
  readTime: number; // minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: string[];
  competencies: string[];
  sections: LectureSection[]; // Replaced 'content' string with sections
  refresherQuiz?: QuizQuestion[]; // Pre-assessment quiz for dashboard
  finalQuiz?: QuizQuestion[]; // Comprehensive quiz for end of lecture
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