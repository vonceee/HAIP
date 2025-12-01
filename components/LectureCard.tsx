import React from 'react';
import { Lecture } from '../types';
import { Clock, BarChart, ChevronRight, Gamepad2, PlayCircle } from 'lucide-react';

interface LectureCardProps {
  lecture: Lecture;
  onClick: (id: string) => void;
}

const TOPIC_STYLES: Record<string, string> = {
  'Earthquake': 'bg-orange-500',
  'Flood': 'bg-blue-500',
  'Volcano': 'bg-red-500',
  'General': 'bg-slate-500',
};

export const LectureCard: React.FC<LectureCardProps> = ({ lecture, onClick }) => {
  return (
    <div 
      onClick={() => onClick(lecture.id)}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden cursor-pointer flex flex-col h-full transform hover:-translate-y-2"
    >
      {/* Tactical Header Bar */}
      <div className={`h-1.5 w-full ${TOPIC_STYLES[lecture.topic] || TOPIC_STYLES.General}`} />

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img 
          src={lecture.imageUrl} 
          alt={lecture.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Play Overlay (Visible on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/50">
             <PlayCircle className="w-10 h-10 text-white fill-current" />
          </div>
        </div>

        {/* Topic Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10">
            {lecture.topic}
          </span>
        </div>

        {/* Game Indicator */}
        {lecture.gameType !== 'none' && (
          <div className="absolute bottom-4 right-4 bg-emerald-500 text-white p-1.5 rounded shadow-lg animate-pulse" title="Simulation Active">
            <Gamepad2 className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col relative">
        <div className="flex-1">
           <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors uppercase">
            {lecture.title}
          </h3>
          <p className="text-slate-500 text-sm mb-6 line-clamp-2 font-medium">
            {lecture.description}
          </p>
        </div>
        
        {/* Tech Stats */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Duration</span>
            <div className="flex items-center text-slate-700 font-bold text-sm">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
              {lecture.readTime}m
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Difficulty</span>
            <div className="flex items-center text-slate-700 font-bold text-sm">
              <BarChart className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
              {lecture.difficulty}
            </div>
          </div>
        </div>
        
        {/* Hover "Start" Call to Action */}
        <div className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-3 px-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-widest">Deploy</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};