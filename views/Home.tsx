import React, { useState, useMemo } from 'react';
import { LECTURES } from '../data';
import { LectureCard } from '../components/LectureCard';
import { Search, Filter } from 'lucide-react';
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
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Be Prepared. <span className="text-brand-600">Stay Safe.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore our interactive library of disaster preparedness guides. Learn critical survival skills through engaging lessons and simulations.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="w-5 h-5 text-slate-400 hidden md:block" />
          {(['All', 'Earthquake', 'Flood', 'Volcano'] as const).map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedTopic === topic 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">No lessons found matching your criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedTopic('All'); }}
            className="mt-4 text-brand-600 font-medium hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
