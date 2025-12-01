
import React from 'react';
import { Lecture } from '../types';
import { Clock, BarChart, ChevronRight, Gamepad2, Award } from 'lucide-react';

interface LectureCardProps {
  lecture: Lecture;
  onClick: (id: string) => void;
}

const TOPIC_COLORS: Record<string, string> = {
  'Earthquake': 'bg-orange-100 text-orange-800',
  'Flood': 'bg-blue-100 text-blue-800',
  'Volcano': 'bg-red-100 text-red-800',
  'General': 'bg-slate-100 text-slate-800',
};

export const LectureCard: React.FC<LectureCardProps> = ({ lecture, onClick }) => {
  return (
    <div 
      onClick={() => onClick(lecture.id)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={lecture.imageUrl} 
          alt={lecture.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${TOPIC_COLORS[lecture.topic] || TOPIC_COLORS.General}`}>
            {lecture.topic}
          </span>
        </div>
        {lecture.gameType !== 'none' && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white p-1.5 rounded-full" title="Interactive Game Included">
            <Gamepad2 className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {lecture.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {lecture.description}
        </p>
        
        {/* Competencies Preview */}
        {lecture.competencies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
             {lecture.competencies.slice(0, 2).map((comp, i) => (
               <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                 <Award className="w-3 h-3 mr-1" /> {comp}
               </span>
             ))}
             {lecture.competencies.length > 2 && (
               <span className="text-[10px] text-slate-400 py-0.5">+ {lecture.competencies.length - 2} more</span>
             )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex space-x-4 text-xs text-slate-400 font-medium">
            <div className="flex items-center text-slate-600">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {lecture.readTime} min
            </div>
            <div className="flex items-center">
              <BarChart className="w-3.5 h-3.5 mr-1" />
              {lecture.difficulty}
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};
