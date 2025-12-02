
import React, { useState, useEffect, useRef } from 'react';
import { Activity, Play, Square, AlertTriangle, Info } from 'lucide-react';

export const EarthquakeGame: React.FC = () => {
  const [magnitude, setMagnitude] = useState(3.0);
  const [isShaking, setIsShaking] = useState(false);
  
  // Transform states for the room animation
  const [roomTransform, setRoomTransform] = useState({ x: 0, y: 0, rot: 0 });
  const [lampRot, setLampRot] = useState(0);

  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (isShaking) {
        // Random vibration calculation based on magnitude
        const intensity = Math.pow(1.8, magnitude) * 0.5;
        
        const x = (Math.random() - 0.5) * intensity;
        const y = (Math.random() - 0.5) * intensity;
        const rot = (Math.random() - 0.5) * (intensity * 0.1);

        setRoomTransform({ x, y, rot });
        
        // Lamp swings with momentum
        setLampRot(prev => {
          const target = (Math.random() - 0.5) * intensity * 2;
          return prev + (target - prev) * 0.1;
        });

        requestRef.current = requestAnimationFrame(animate);
      } else {
        // Reset to center
        setRoomTransform({ x: 0, y: 0, rot: 0 });
        setLampRot(prev => prev * 0.9); // Dampening
        if (Math.abs(lampRot) > 0.1) {
          requestRef.current = requestAnimationFrame(animate);
        }
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isShaking, magnitude, lampRot]);

  const getDescription = (mag: number) => {
    if (mag < 4) return { title: "Minor", desc: "Often felt, but rarely causes damage. Hanging objects may swing.", color: "bg-blue-500/20 text-blue-200 border-blue-500/30" };
    if (mag < 6) return { title: "Moderate", desc: "Can cause damage. Furniture moves.", color: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30" };
    if (mag < 8) return { title: "Major", desc: "Serious damage. Heavy furniture overturns. Walls crack.", color: "bg-orange-500/20 text-orange-200 border-orange-500/30" };
    return { title: "Great", desc: "Total destruction possible. Massive structural failure.", color: "bg-red-500/20 text-red-200 border-red-500/30" };
  };

  const info = getDescription(magnitude);

  return (
    <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/10 backdrop-blur-sm w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* Controls Panel */}
        <div className="w-full md:w-1/3 space-y-4 md:space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center mb-1">
              <Activity className="w-5 h-5 mr-2 text-orange-500" />
              Shake Simulator
            </h3>
            <p className="text-xs text-slate-400">Adjust magnitude to test intensity.</p>
          </div>

          <div className="bg-black/20 p-4 rounded-lg border border-white/5 shadow-inner">
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">Magnitude (Richter)</label>
              <span className="text-xl font-bold text-orange-500">{magnitude.toFixed(1)}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="9.5" 
              step="0.1"
              value={magnitude}
              onChange={(e) => setMagnitude(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          <div className={`p-3 rounded-lg border ${info.color}`}>
            <h4 className="font-bold flex items-center mb-1 text-sm">
              <Info className="w-3 h-3 mr-2" /> {info.title}
            </h4>
            <p className="text-xs opacity-90">{info.desc}</p>
          </div>

          <button
            onClick={() => setIsShaking(!isShaking)}
            className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center transition-all shadow-lg ${
              isShaking 
                ? 'bg-red-600 hover:bg-red-500' 
                : 'bg-orange-600 hover:bg-orange-500'
            }`}
          >
            {isShaking ? (
              <><Square className="w-4 h-4 mr-2 fill-current" /> Stop</>
            ) : (
              <><Play className="w-4 h-4 mr-2 fill-current" /> Simulate Shake</>
            )}
          </button>
        </div>

        {/* Visual Stage */}
        <div className="w-full md:w-2/3 h-64 md:h-80 bg-slate-900 rounded-xl overflow-hidden relative shadow-inner border border-slate-700">
          
          {/* Room Container */}
          <div 
            className="absolute inset-0 bg-slate-800 origin-bottom transition-transform duration-75"
            style={{ 
              transform: `translate(${roomTransform.x}px, ${roomTransform.y}px) rotate(${roomTransform.rot}deg)` 
            }}
          >
            {/* Wall Paint */}
            <div className="absolute top-0 left-0 right-0 h-3/4 bg-slate-700 border-b border-slate-600"></div>
            
            {/* Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-slate-800"></div>

            {/* Ceiling Lamp */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-black origin-top"
              style={{ transform: `translateX(-50%) rotate(${lampRot}deg)` }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-10 bg-yellow-600/80 rounded-b-full shadow-[0_0_20px_rgba(250,204,21,0.5)] border-t-4 border-black"></div>
            </div>

            {/* Window */}
            <div className="absolute top-12 left-8 w-24 h-32 bg-sky-900 border-4 border-slate-600 shadow-sm overflow-hidden opacity-50 hidden md:block">
               <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 bg-slate-600">
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
               </div>
            </div>

            {/* Picture Frame */}
            <div 
              className="absolute top-16 right-16 w-16 h-20 md:w-20 md:h-24 bg-slate-200 border-4 border-amber-900 shadow-md flex items-center justify-center overflow-hidden"
              style={{ transform: `rotate(${roomTransform.rot * 1.5}deg)` }}
            >
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-[8px] text-slate-500 font-bold">HAIP</div>
            </div>

            {/* Table */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-800 rounded-t-lg shadow-xl flex items-end justify-center">
              <div className="w-full h-2 bg-amber-950/30 mb-auto"></div>
            </div>

            {/* Objects on Table */}
            <div 
              className="absolute bottom-[136px] left-1/2 w-8 h-12 bg-blue-500 rounded-t-lg shadow-sm border border-blue-600"
              style={{ 
                transform: `translateX(calc(-50% + ${roomTransform.x * -1.2}px)) rotate(${roomTransform.rot * 2}deg)` 
              }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full opacity-80"></div>
            </div>
            
            {/* Person/Character */}
            <div 
              className="absolute bottom-8 right-12 w-12 h-28 bg-indigo-600 rounded-full shadow-lg flex flex-col items-center"
               style={{ 
                transform: `translateX(${roomTransform.x * -0.5}px)` 
              }}
            >
              <div className="w-8 h-8 bg-indigo-400 rounded-full -mt-4"></div>
              {isShaking && (
                <div className="absolute top-4 w-16 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              )}
            </div>

          </div>

          {/* Overlay Warning */}
          {isShaking && magnitude >= 7.0 && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-4 rounded-xl shadow-2xl animate-bounce flex items-center border border-red-400">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                  <span className="text-lg md:text-xl font-bold">EVACUATE!</span>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
