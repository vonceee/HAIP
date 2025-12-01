import React, { useState, useMemo } from 'react';
import { LECTURES } from '../data';
import { LectureCard } from '../components/LectureCard';
import { Search, Filter, Shield, Target } from 'lucide-react';
import { HazardTopic } from '../types';

interface HomeProps {
  onNavigate: (lectureId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<HazardTopic | 'All'>('All');

  const filteredLectures = useMemo(() => {
    return LECTURES.filter(lecture => {
      const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            lecture.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic = selectedTopic === 'All' || lecture.topic === selectedTopic;
      return matchesSearch && matchesTopic;
    });
  }, [searchTerm, selectedTopic]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero / Dashboard Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-slate-200 pb-8">
        <div>
          <div className="flex items-center text-brand-600 font-bold tracking-widest text-xs uppercase mb-2">
            <Shield className="w-4 h-4 mr-2" />
            Disaster Preparedness Training
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Mission Select
          </h1>
          <p className="text-slate-500 mt-2 text-lg max-w-lg">
            Choose a hazard protocol below to begin your training simulation.
          </p>
        </div>
        
        <div className="hidden md:block text-right">
           <div className="text-3xl font-bold text-slate-300">{LECTURES.length}</div>
           <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Modules</div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search missions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto p-1">
          {(['All', 'Earthquake', 'Flood', 'Volcano'] as const).map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
                selectedTopic === topic 
                  ? 'bg-slate-900 text-white shadow-lg transform scale-105' 
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredLectures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLectures.map(lecture => (
            <LectureCard 
              key={lecture.id} 
              lecture={lecture} 
              onClick={onNavigate} 
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300">
          <Target className="w-16 h-16 text-slate-300 mb-4" />
          <p className="text-slate-500 text-lg font-medium">No missions found matching criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedTopic('All'); }}
            className="mt-4 text-brand-600 font-bold hover:underline uppercase tracking-wide text-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};