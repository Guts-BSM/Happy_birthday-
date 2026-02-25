
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
    <div className="text-center z-10 flex flex-col items-center py-12">
      <div className="space-y-2 mb-10">
        <h1 className="text-6xl font-romantic font-bold text-pink-600 drop-shadow-sm">Hello, Mariem</h1>
        <p className="text-xs text-pink-300 font-bold uppercase tracking-[0.4em] pl-1">A surprise from Anes ❤️</p>
      </div>
      
      <p className="text-2xl text-pink-400 mb-14 max-w-xs font-semibold leading-relaxed px-4">
        I have a very special question waiting for you... 🤍
      </p>

      <button 
        onClick={handleClick}
        className="bg-pink-500 text-white font-bold px-16 py-6 rounded-full shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] hover:shadow-pink-300/50 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-4 border-b-4 border-pink-700 group text-xl"
      >
        <span>Open Heart</span>
        <i className="fas fa-envelope-open-heart group-hover:rotate-12 transition-transform text-2xl"></i>
      </button>
    </div>
  );
};
