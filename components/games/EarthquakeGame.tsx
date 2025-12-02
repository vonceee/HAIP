
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
    if (mag < 4) return { title: "Minor", desc: "Often felt, but rarely causes damage.", color: "bg-blue-500/20 text-blue-200 border-blue-500/30" };
    if (mag < 6) return { title: "Moderate", desc: "Can cause damage. Furniture moves.", color: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30" };
    if (mag < 8) return { title: "Major", desc: "Serious damage. Walls crack.", color: "bg-orange-500/20 text-orange-200 border-orange-500/30" };
    return { title: "Great", desc: "Total destruction possible.", color: "bg-red-500/20 text-red-200 border-red-500/30" };
  };

  const info = getDescription(magnitude);

  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="flex flex-col md:flex-row gap-4 h-full">
        
        {/* Controls Panel */}
        <div className="w-full md:w-1/3 flex flex-col justify-between space-y-2">
          <div>
            <div className="bg-black/20 p-3 rounded-lg border border-white/5 shadow-inner">
              <div className="flex justify-between mb-1">
                <label className="text-[10px] font-semibold text-slate-300">Richter Scale</label>
                <span className="text-lg font-bold text-orange-500">{magnitude.toFixed(1)}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="9.5" 
                step="0.1"
                value={magnitude}
                onChange={(e) => setMagnitude(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            
            <div className={`mt-2 p-2 rounded-lg border ${info.color}`}>
              <h4 className="font-bold flex items-center mb-0.5 text-xs">
                <Info className="w-3 h-3 mr-1" /> {info.title}
              </h4>
              <p className="text-[10px] opacity-90 leading-tight">{info.desc}</p>
            </div>
          </div>

          <button
            onClick={() => setIsShaking(!isShaking)}
            className={`w-full py-2 rounded-lg font-bold text-white text-sm flex items-center justify-center transition-all shadow-lg ${
              isShaking 
                ? 'bg-red-600 hover:bg-red-500' 
                : 'bg-orange-600 hover:bg-orange-500'
            }`}
          >
            {isShaking ? (
              <><Square className="w-3 h-3 mr-2 fill-current" /> Stop</>
            ) : (
              <><Play className="w-3 h-3 mr-2 fill-current" /> Shake</>
            )}
          </button>
        </div>

        {/* Visual Stage */}
        <div className="w-full md:w-2/3 bg-slate-900 rounded-xl overflow-hidden relative shadow-inner border border-slate-700 min-h-[180px]">
          
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
              className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-black origin-top"
              style={{ transform: `translateX(-50%) rotate(${lampRot}deg)` }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-6 bg-yellow-600/80 rounded-b-full shadow-[0_0_15px_rgba(250,204,21,0.5)] border-t-2 border-black"></div>
            </div>

            {/* Window (Hidden on small screens inside small containers) */}
            <div className="absolute top-8 left-4 w-16 h-20 bg-sky-900 border-2 border-slate-600 shadow-sm overflow-hidden opacity-50 hidden sm:block">
               <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 bg-slate-600">
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
                 <div className="bg-sky-950"></div>
               </div>
            </div>

            {/* Picture Frame */}
            <div 
              className="absolute top-10 right-10 w-12 h-14 bg-slate-200 border-2 border-amber-900 shadow-md flex items-center justify-center overflow-hidden"
              style={{ transform: `rotate(${roomTransform.rot * 1.5}deg)` }}
            >
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-[6px] text-slate-500 font-bold">HAIP</div>
            </div>

            {/* Table */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-16 bg-amber-800 rounded-t-lg shadow-xl flex items-end justify-center">
              <div className="w-full h-1 bg-amber-950/30 mb-auto"></div>
            </div>

            {/* Objects on Table */}
            <div 
              className="absolute bottom-[88px] left-1/2 w-6 h-8 bg-blue-500 rounded-t-lg shadow-sm border border-blue-600"
              style={{ 
                transform: `translateX(calc(-50% + ${roomTransform.x * -1.2}px)) rotate(${roomTransform.rot * 2}deg)` 
              }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Overlay Warning */}
          {isShaking && magnitude >= 7.0 && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-red-600/90 text-white px-3 py-1 rounded-lg shadow-xl animate-bounce flex items-center border border-red-400">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-bold">EVACUATE!</span>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
