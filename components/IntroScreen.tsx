
import React from 'react';
import { playPop } from '../utils/sounds';

interface IntroScreenProps {
  onNext: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  const handleClick = () => {
    playPop();
    onNext();
  };

  return (
    <div className="text-center z-10 flex flex-col items-center justify-center py-4 sm:py-12 h-full w-full">
      <img src="/intro.gif" alt="celebration" className="w-16 sm:w-24 h-16 sm:h-24 mb-2 sm:mb-4 rounded-full" />
      <div className="space-y-2 mb-6 sm:mb-10 animate-bounce" style={{animationDuration: '2s'}}>
        <div className="text-4xl sm:text-6xl mb-2 sm:mb-4 animate-spin" style={{animationDuration: '3s'}}>✨</div>
        <h1 className="text-4xl sm:text-6xl font-romantic font-bold text-blue-600 drop-shadow-sm">Hello, Mariem</h1>
        <p className="text-xs sm:text-sm text-blue-300 font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] pl-1">A message from Anes 💙</p>
      </div>
      
      <p className="text-lg sm:text-2xl text-blue-400 mb-8 sm:mb-14 max-w-xs sm:max-w-md font-semibold leading-relaxed px-4">
        I have something special to ask you... 🎁✨
      </p>

      <button 
        onClick={handleClick}
        className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white font-bold px-8 sm:px-16 py-4 sm:py-6 rounded-full shadow-[0_15px_35px_-5px_rgba(59,130,246,0.5)] hover:shadow-blue-300/50 hover:-translate-y-2 transition-all active:scale-95 flex items-center gap-2 sm:gap-4 border-b-4 border-blue-700 group text-sm sm:text-xl animate-pulse"
      >
        <span className="hidden sm:inline">💌 Open Message 💌</span>
        <span className="sm:hidden">💌 Message 💌</span>
        <i className="fas fa-envelope-open-heart group-hover:rotate-12 group-hover:scale-125 transition-transform text-lg sm:text-2xl"></i>
      </button>
    </div>
  );
};
