
import React from 'react';
import { Lecture } from '../types';
import { ArrowLeft, BookOpen, BrainCircuit, Gamepad2, CheckCircle2, List, Clock, Award, Target } from 'lucide-react';
import { QuizComponent } from '../components/QuizComponent';
import { EarthquakeGame } from '../components/games/EarthquakeGame';
import { FloodGame } from '../components/games/FloodGame';

interface LectureViewProps {
  lecture: Lecture;
  onBack: () => void;
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, onBack }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onBack}
        className="group flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Library
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        
        {/* Hero Section */}
        <div className="relative h-64 md:h-80">
          <img 
            src={lecture.imageUrl} 
            alt={lecture.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
            <div className="p-8 md:p-10 text-white w-full">
               <div className="flex items-center space-x-3 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500/90 backdrop-blur-md text-xs font-bold uppercase tracking-wide shadow-lg">
                  {lecture.topic}
                </span>
                <span className="flex items-center text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                   <Clock className="w-3 h-3 mr-1.5" /> {lecture.readTime} min read
                </span>
               </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{lecture.title}</h1>
              <p className="text-slate-200 text-lg md:text-xl font-light opacity-90">{lecture.description}</p>
            </div>
          </div>
        </div>

        {/* Course Overview / Syllabus */}
        <div className="bg-slate-50 border-b border-slate-200 p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Objectives */}
           <div className="md:col-span-2 space-y-4">
             <div className="flex items-center text-slate-800 font-bold text-lg">
               <Target className="w-5 h-5 mr-2 text-brand-600" />
               Learning Objectives
             </div>
             <ul className="space-y-3">
               {lecture.objectives.map((obj, idx) => (
                 <li key={idx} className="flex items-start text-slate-600">
                   <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                   <span>{obj}</span>
                 </li>
               ))}
             </ul>
           </div>

           {/* Meta Sidebar (Competencies & TOC) */}
           <div className="space-y-6">
             {/* Competencies */}
             <div>
               <div className="flex items-center text-slate-800 font-bold text-sm uppercase tracking-wide mb-3">
                 <Award className="w-4 h-4 mr-2 text-brand-600" />
                 Competencies
               </div>
               <div className="flex flex-wrap gap-2">
                 {lecture.competencies.map((comp, i) => (
                   <span key={i} className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 shadow-sm">
                     {comp}
                   </span>
                 ))}
               </div>
             </div>

             {/* TOC */}
             {lecture.tableOfContents.length > 0 && (
                <div>
                  <div className="flex items-center text-slate-800 font-bold text-sm uppercase tracking-wide mb-3">
                    <List className="w-4 h-4 mr-2 text-brand-600" />
                    Table of Contents
                  </div>
                  <nav className="flex flex-col space-y-2">
                    {lecture.tableOfContents.map((item, i) => (
                      <button 
                        key={i}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-sm text-brand-600 hover:text-brand-800 hover:underline truncate transition-colors"
                      >
                        {i + 1}. {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
             )}
           </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <div className="prose prose-slate prose-lg max-w-none mb-16">
             <div className="flex items-center text-brand-600 mb-8 font-semibold uppercase tracking-wider text-sm border-b border-brand-100 pb-2">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Lesson
             </div>
             <div dangerouslySetInnerHTML={{ __html: lecture.content }} />
          </div>

          <hr className="my-12 border-slate-200" />

          {/* Interactive Section */}
          <div className="space-y-16">
             {/* Game Module */}
             {lecture.gameType !== 'none' && (
               <section className="scroll-mt-20">
                 <div className="flex items-center text-indigo-600 mb-6 font-semibold uppercase tracking-wider text-sm">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Interactive Simulation
                 </div>
                 {lecture.gameType === 'earthquake-sim' && <EarthquakeGame />}
                 {lecture.gameType === 'flood-choice' && <FloodGame />}
               </section>
             )}

             {/* Quiz Module */}
             {lecture.quiz && lecture.quiz.length > 0 && (
               <section className="scroll-mt-20">
                 <div className="flex items-center text-emerald-600 mb-6 font-semibold uppercase tracking-wider text-sm">
                    <BrainCircuit className="w-5 h-5 mr-2" />
                    Knowledge Check
                 </div>
                 <QuizComponent questions={lecture.quiz} />
               </section>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
