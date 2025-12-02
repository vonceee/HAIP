import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
}

export const QuizComponent: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <div className="bg-white/5 p-8 rounded-xl shadow-lg text-center border border-white/10 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-4">Quiz Completed!</h3>
        <p className="text-lg text-slate-300 mb-6">
          You scored <span className="font-bold text-emerald-400">{score}</span> out of {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors shadow-lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-200">Knowledge Check</h3>
        <span className="text-sm text-slate-400">Question {currentQuestionIndex + 1} / {questions.length}</span>
      </div>

      <h4 className="text-xl font-medium text-white mb-6">{currentQuestion.question}</h4>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-lg border transition-all ";
          
          if (isAnswered) {
             if (index === currentQuestion.correctAnswer) {
               buttonClass += "border-green-500/50 bg-green-500/20 text-green-200";
             } else if (index === selectedAnswer) {
               buttonClass += "border-red-500/50 bg-red-500/20 text-red-200";
             } else {
               buttonClass += "border-white/5 bg-white/5 text-slate-500 opacity-50";
             }
          } else {
            buttonClass += "border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 text-slate-200";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle className="w-5 h-5 text-green-400" />}
                {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && <XCircle className="w-5 h-5 text-red-400" />}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};