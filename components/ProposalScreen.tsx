
import React, { useState, useRef } from 'react';
import { playBubble, playSuccess } from '../utils/sounds';

interface ProposalScreenProps {
  onYes: () => void;
  note: string;
}

export const ProposalScreen: React.FC<ProposalScreenProps> = ({ onYes, note }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    playBubble();

    const container = containerRef.current.getBoundingClientRect();
    const btnWidth = 120;
    const btnHeight = 60;

    const padding = 20;
    const maxX = container.width - btnWidth - padding;
    const maxY = container.height - btnHeight - padding;

    const newX = Math.max(padding, Math.random() * maxX);
    const newY = Math.max(padding, Math.random() * maxY);

    setNoPosition({ x: newX, y: newY });
    setNoScale(prev => Math.max(0.2, prev - 0.1));
    setYesScale(prev => Math.min(3.5, prev + 0.25));
    setNoCount(prev => prev + 1);
  };

  const handleYes = () => {
    playSuccess();
    onYes();
  };

  return (
    <div className="text-center z-10 w-full h-[85vh] flex flex-col justify-center items-center relative select-none" ref={containerRef}>
      <div className="bg-white/85 backdrop-blur-xl p-10 rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(236,72,153,0.25)] mb-14 border-2 border-white/60 max-w-sm w-full mx-auto relative z-10 group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        <h2 className="text-4xl font-romantic font-bold mb-6 text-pink-500">My Mariem,</h2>
        <p className="text-2xl mb-10 text-pink-700 leading-relaxed font-bold italic drop-shadow-sm">
          "{note}"
        </p>
        <p className="text-3xl font-bold text-pink-600 font-romantic leading-tight">
          Will you be my wife and make me the luckiest man in the world?
        </p>
      </div>

      <div className="flex flex-col gap-10 items-center w-full relative h-48">
        <button 
          onClick={handleYes}
          style={{ 
            transform: `scale(${yesScale})`, 
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-6 px-16 rounded-full shadow-[0_15px_45px_-10px_rgba(236,72,153,0.8)] z-50 hover:from-pink-600 hover:to-rose-600 active:scale-95 text-3xl transition-all border-b-4 border-rose-800"
        >
          YES! <i className="fas fa-heart-circle-check ml-2 animate-pulse"></i>
        </button>

        <button 
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          style={{ 
            position: noPosition.x === 0 ? 'relative' : 'absolute',
            left: noPosition.x === 0 ? 'auto' : `${noPosition.x}px`,
            top: noPosition.y === 0 ? 'auto' : `${noPosition.y}px`,
            transform: `scale(${noScale})`,
            transition: 'all 0.25s cubic-bezier(0.19, 1, 0.22, 1)',
            zIndex: 40
          }}
          className="bg-white/70 text-gray-400 font-bold py-4 px-12 rounded-full border-2 border-white shadow-xl backdrop-blur-sm whitespace-nowrap text-lg"
        >
          {noCount > 8 ? "You must say yes! 💖" : noCount > 4 ? "Getting harder? 🤭" : "No"}
        </button>
      </div>
      
      {noCount > 3 && (
        <p className="absolute bottom-6 text-pink-300 font-bold italic animate-pulse pointer-events-none tracking-widest uppercase text-xs">
          {noCount > 12 ? "Destiny says Yes! 💍" : "I'm not letting you go! ❤️"}
        </p>
      )}
    </div>
  );
};
