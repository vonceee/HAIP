
import React, { useState } from 'react';
import { FLOOD_SCENARIOS } from '../../data';
import { Waves, ThumbsUp, ThumbsDown, AlertTriangle, ArrowRight } from 'lucide-react';

export const FloodGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [waterLevel, setWaterLevel] = useState(10); // Starts low (10%)
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean, text: string } | null>(null);

  const currentScenario = FLOOD_SCENARIOS[currentIndex];

  const handleChoice = (choiceSafe: boolean) => {
    const isCorrect = choiceSafe === currentScenario.isSafe;

    if (isCorrect) {
      setFeedback({ correct: true, text: "Correct! " + currentScenario.explanation });
    } else {
      setWaterLevel(prev => Math.min(prev + 30, 100));
      setFeedback({ correct: false, text: "Wrong! " + currentScenario.explanation });
    }
  };

  const nextScenario = () => {
    setFeedback(null);
    if (waterLevel >= 100) {
      setGameOver(true);
      return;
    }

    if (currentIndex + 1 < FLOOD_SCENARIOS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameWon(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setWaterLevel(10);
    setGameOver(false);
    setGameWon(false);
    setFeedback(null);
  };

  if (gameOver) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
        <Waves className="w-12 h-12 text-red-500 mb-2" />
        <h3 className="text-lg font-bold text-red-200 mb-1">Flooded!</h3>
        <p className="text-xs text-red-300 mb-4">Water level too high.</p>
        <button onClick={resetGame} className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500">Retry</button>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
        <ThumbsUp className="w-12 h-12 text-green-500 mb-2" />
        <h3 className="text-lg font-bold text-green-200 mb-1">Survived!</h3>
        <p className="text-xs text-green-300 mb-4">Excellent work.</p>
        <button onClick={resetGame} className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-500">Replay</button>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col">
      {/* Water Level Indicator */}
      <div className="absolute left-0 bottom-0 w-1.5 h-full bg-slate-800/50">
        <div 
          className="absolute bottom-0 w-full bg-cyan-500 transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
          style={{ height: `${waterLevel}%` }}
        />
      </div>

      <div className="pl-4 pr-2 py-2 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded text-slate-400">
            {currentIndex + 1}/{FLOOD_SCENARIOS.length}
          </span>
        </div>

        <div className="bg-black/20 p-3 rounded-lg border border-white/5 mb-3 text-center flex-grow flex items-center justify-center">
          <p className="text-sm font-medium text-slate-100 leading-tight">{currentScenario.text}</p>
        </div>

        {!feedback ? (
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <button 
              onClick={() => handleChoice(true)}
              className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-green-500/20 hover:border-green-500/50 transition-all text-slate-200 hover:text-green-300 group"
            >
              <ThumbsUp className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Safe</span>
            </button>
            <button 
              onClick={() => handleChoice(false)}
              className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 transition-all text-slate-200 hover:text-red-300 group"
            >
              <AlertTriangle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Unsafe</span>
            </button>
          </div>
        ) : (
          <div className={`p-3 rounded-lg border mt-auto animate-in fade-in slide-in-from-bottom-2 ${feedback.correct ? 'bg-green-500/20 border-green-500/30 text-green-200' : 'bg-red-500/20 border-red-500/30 text-red-200'}`}>
            <div className="flex items-start mb-2">
              {feedback.correct ? <ThumbsUp className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" /> : <ThumbsDown className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />}
              <div>
                <p className="text-xs font-bold">{feedback.correct ? 'Good Job!' : 'Watch Out!'}</p>
                <p className="text-[10px] mt-0.5 text-white/90 leading-tight">{feedback.text}</p>
              </div>
            </div>
            <button 
              onClick={nextScenario}
              className="w-full flex items-center justify-center bg-white text-slate-900 py-1.5 rounded text-xs font-bold hover:bg-slate-200 transition"
            >
              Next <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
