
import React, { useEffect, useState } from 'react';

export const SuccessScreen: React.FC = () => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHearts(true), 300);
  }, []);

  return (
    <div className="text-center z-10 flex flex-col items-center justify-center p-4 sm:p-8 min-h-screen w-full">
      <img src="/success.gif" alt="celebration confetti" className="w-20 sm:w-28 h-20 sm:h-28 mb-2 sm:mb-4 rounded-full" />
      <div className="mb-6 sm:mb-8 relative scale-75 sm:scale-100 flex justify-center items-center origin-top">
        <div className="text-6xl sm:text-7xl animate-bounce mr-4" style={{animationDuration: '1s'}}>🎉</div>
        <div className="text-5xl sm:text-6xl animate-spin" style={{animationDuration: '2s'}}>👯</div>
        <div className="text-6xl sm:text-7xl animate-bounce ml-4" style={{animationDuration: '1.3s'}}>✨</div>
      </div>

      <h1 className="text-4xl sm:text-7xl font-romantic font-bold text-blue-600 mb-2 sm:mb-4 drop-shadow-xl animate-bounce">
        DEAR FRIENDS FOREVER! 💙
      </h1>
      <h2 className="text-3xl sm:text-5xl font-romantic font-bold text-blue-500 mb-6 sm:mb-8 drop-shadow-xl">🎂 Happy Birthday! 🎂</h2>
      
      <div className="bg-white/95 backdrop-blur-md p-6 sm:p-12 rounded-3xl sm:rounded-[4rem] shadow-[0_35px_80px_-20px_rgba(59,130,246,0.4)] w-full max-w-sm border-2 border-blue-50 relative group">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full border-2 border-white shadow-lg text-xs sm:text-sm font-bold text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          Happy Birthday 🎉
        </div>
        <p className="text-lg sm:text-3xl text-blue-600 font-romantic mb-6 sm:mb-8 font-bold leading-relaxed">
          🌟 Thank you for being an incredible friend! 🌟<br/><br/><span className="text-sm sm:text-2xl">Having you in my life means everything. May your day be filled with joy and laughter. 🎊✨</span>
        </p>
        <div className="flex justify-center gap-3 sm:gap-6 text-3xl sm:text-5xl mb-4 sm:mb-6">
          <span className="animate-bounce" style={{animationDuration: '1s'}}>🎈</span>
          <span className="animate-bounce" style={{animationDuration: '1.3s'}}>🎁</span>
          <span className="animate-bounce" style={{animationDuration: '1.6s'}}>🎉</span>
          <span className="animate-bounce" style={{animationDuration: '1.9s'}}>⭐</span>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 opacity-90 px-4 w-full">
        <p className="text-blue-600 font-bold uppercase tracking-[0.3em] sm:tracking-[0.6em] text-xs sm:text-sm flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
          <span className="hidden sm:inline h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></span>
          YOUR DEAR FRIEND 👯 ANES
          <span className="hidden sm:inline h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
        </p>
        <p className="text-blue-500 font-bold text-sm sm:text-lg">🌟 Forever in my heart 💙 🌟</p>
      </div>

      {showHearts && (
         <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            {[...Array(60)].map((_, i) => {
              const emojis = ['🎉', '🎊', '🎈', '⭐', '✨', '💙', '👯', '🌟', '🎁'];
              const emoji = emojis[i % emojis.length];
              return (
              <div 
                key={i}
                className="absolute animate-explode"
                style={{
                  '--tx': `${(Math.random() - 0.5) * 1600}px`,
                  '--ty': `${(Math.random() - 0.5) * 1600}px`,
                  '--rot': `${Math.random() * 1080}deg`,
                  animation: `explode 4s forwards ${Math.random() * 0.5}s cubic-bezier(0.1, 0.8, 0.3, 1)`
                } as any}
              >
                <div className="text-5xl font-bold drop-shadow-lg">{emoji}</div>
              </div>
            );
            })}
         </div>
      )}
      
      <style>{`
        @keyframes explode {
          0% { transform: translate(0, 0) rotate(0) scale(0); opacity: 0; }
          15% { opacity: 1; transform: scale(1.8); }
          100% { transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(0.3); opacity: 0; }
        }
        .cursor-heart:hover { transform: scale(1.3); filter: drop-shadow(0 0 15px rgba(59,130,246,0.6)); }
      `}</style>
    </div>
  );
};
