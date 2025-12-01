import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { LectureView } from './views/LectureView';
import { LECTURES } from './data';

type ViewState = 'home' | 'lecture';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedLectureId, setSelectedLectureId] = useState<string | null>(null);

  const navigateToLecture = (id: string) => {
    setSelectedLectureId(id);
    setCurrentView('lecture');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedLectureId(null);
    window.scrollTo(0, 0);
  };

  const selectedLecture = selectedLectureId 
    ? LECTURES.find(l => l.id === selectedLectureId) 
    : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header onHomeClick={navigateToHome} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <Home onNavigate={navigateToLecture} />
        )}

        {currentView === 'lecture' && selectedLecture && (
          <LectureView 
            lecture={selectedLecture} 
            onBack={navigateToHome} 
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">HAIP - Hazard Awareness Interactive Portal</p>
          <p>© {new Date().getFullYear()} Disaster Education Initiative. Public Access.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
