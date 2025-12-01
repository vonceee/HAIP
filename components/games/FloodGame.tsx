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
      <div className="bg-red-50 p-8 rounded-xl border border-red-200 text-center">
        <Waves className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-red-800 mb-2">Flooded!</h3>
        <p className="text-red-700 mb-6">The water level got too high. Remember, safety choices matter.</p>
        <button onClick={resetGame} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">Try Again</button>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center">
        <ThumbsUp className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">You Survived!</h3>
        <p className="text-green-700 mb-6">Excellent decision making. You stayed dry and safe.</p>
        <button onClick={resetGame} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Play Again</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
      {/* Water Level Indicator */}
      <div className="absolute left-0 bottom-0 w-2 h-full bg-slate-100">
        <div 
          className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500 ease-in-out" 
          style={{ height: `${waterLevel}%` }}
        />
      </div>

      <div className="pl-6 p-6">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center">
            <Waves className="w-5 h-5 text-blue-500 mr-2" />
            Flood Survival Challenge
          </h3>
          <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
            Level {currentIndex + 1}/{FLOOD_SCENARIOS.length}
          </span>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6 text-center min-h-[120px] flex items-center justify-center">
          <p className="text-xl font-medium text-slate-800">{currentScenario.text}</p>
        </div>

        {!feedback ? (
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleChoice(true)}
              className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-green-100 bg-green-50 hover:bg-green-100 hover:border-green-300 transition-all text-green-800 group"
            >
              <ThumbsUp className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold">Safe Action</span>
            </button>
            <button 
              onClick={() => handleChoice(false)}
              className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-red-100 bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all text-red-800 group"
            >
              <AlertTriangle className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold">Unsafe / Dangerous</span>
            </button>
          </div>
        ) : (
          <div className={`p-4 rounded-lg border mb-4 animate-in fade-in slide-in-from-bottom-2 ${feedback.correct ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <div className="flex items-start">
              {feedback.correct ? <ThumbsUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0" /> : <ThumbsDown className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />}
              <div>
                <p className="font-bold">{feedback.correct ? 'Good Job!' : 'Watch Out!'}</p>
                <p className="text-sm mt-1">{feedback.text}</p>
              </div>
            </div>
            <button 
              onClick={nextScenario}
              className="mt-4 w-full flex items-center justify-center bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900 transition"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
