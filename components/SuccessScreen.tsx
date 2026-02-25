
import React, { useEffect, useState } from 'react';

export const SuccessScreen: React.FC = () => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHearts(true), 300);
  }, []);

  return (
    <div className="text-center z-10 flex flex-col items-center p-4 py-16">
      <div className="mb-14 relative scale-110">
        <div className="bg-yellow-400 text-white p-6 rounded-full shadow-2xl border-4 border-white rotate-12 animate-bounce z-20 text-5xl">
           💍
        </div>
      </div>

      <h1 className="text-7xl font-romantic font-bold text-pink-600 mb-12 drop-shadow-xl animate-bounce">
        I KNEW IT! 🤍
      </h1>
      
      <div className="bg-white/95 backdrop-blur-md p-12 rounded-[4rem] shadow-[0_35px_80px_-20px_rgba(236,72,153,0.4)] max-w-sm border-2 border-pink-50 relative group">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-2.5 rounded-full border-2 border-white shadow-lg text-sm font-bold text-white uppercase tracking-[0.3em]">
          Forever Yours
        </div>
        <p className="text-3xl text-pink-600 font-romantic mb-8 font-bold leading-relaxed">
          "I will love you, cherish you, and protect you for the rest of our lives, my beautiful Mariem."
        </p>
        <div className="flex justify-center gap-8 text-4xl">
          <i className="fas fa-heart text-white drop-shadow-[0_4px_10px_rgba(236,72,153,0.3)] hover:scale-125 transition-transform cursor-heart"></i>
          <i className="fas fa-heart text-pink-500 animate-pulse scale-125"></i>
          <i className="fas fa-heart text-white drop-shadow-[0_4px_10px_rgba(236,72,153,0.3)] hover:scale-125 transition-transform cursor-heart"></i>
        </div>
      </div>

      <div className="mt-20 opacity-90">
        <p className="text-pink-500 font-bold uppercase tracking-[0.6em] text-sm flex items-center gap-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300"></span>
          ANES ❤️ MARIEM
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300"></span>
        </p>
      </div>

      {showHearts && (
         <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i}
                className="absolute animate-explode"
                // Fixed syntax error: changed 1s to `${Math.random()}s` to avoid invalid JS numeric suffix
                style={{
                  '--tx': `${(Math.random() - 0.5) * 1400}px`,
                  '--ty': `${(Math.random() - 0.5) * 1400}px`,
                  '--rot': `${Math.random() * 1080}deg`,
                  animation: `explode 3s forwards ${Math.random()}s cubic-bezier(0.1, 0.8, 0.3, 1)`
                } as any}
              >
                <i className={`fas fa-heart ${i % 3 === 0 ? 'text-white' : i % 3 === 1 ? 'text-pink-400' : 'text-pink-100'} text-4xl shadow-xl`}></i>
              </div>
            ))}
         </div>
      )}
      
      <style>{`
        @keyframes explode {
          0% { transform: translate(0, 0) rotate(0) scale(0); opacity: 0; }
          20% { opacity: 1; transform: scale(1.5); }
          100% { transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(0.4); opacity: 0; }
        }
        .cursor-heart:hover { transform: scale(1.3); filter: drop-shadow(0 0 15px rgba(236,72,153,0.6)); }
      `}</style>
    </div>
  );
};
