
import React, { useState, useMemo } from 'react';
import { LECTURES } from '../data';
import { LectureCard } from '../components/LectureCard';
import { Search, Shield, Target } from 'lucide-react';
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
    <div className="relative w-full min-h-full">
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animate-drift {
          animation: drift 10s infinite linear;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
           animation-delay: 6s;
        }
      `}</style>

      {/* Background Visual Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Technical Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px),
                              linear-gradient(to bottom, #475569 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Ambient Animated Gradient Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-blob animation-delay-4000" />

        {/* Drifting Particles */}
        <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-slate-400 rounded-full animate-drift opacity-0" />
        <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-blue-400 rounded-full animate-drift animation-delay-2000 opacity-0" />
        <div className="absolute top-[80%] left-[40%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-drift animation-delay-6000 opacity-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero / Dashboard Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-slate-200 pb-8">
          <div>
            <div className="flex items-center text-brand-600 font-bold tracking-widest text-xs uppercase mb-2">
              <Shield className="w-4 h-4 mr-2" />
              Disaster Preparedness Training
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase relative">
              <span className="relative z-10">Mission Select</span>
              <div className="absolute -bottom-2 left-0 w-1/3 h-3 bg-brand-200/50 -skew-x-12 -z-10" />
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
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-sm border border-slate-200">
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

          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto p-1 custom-scrollbar">
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
          <div className="flex flex-col items-center justify-center py-20 bg-slate-50/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-300">
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
    </div>
  );
};
