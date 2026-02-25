
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
    setYesScale(prev => Math.min(8, prev + 0.35));
    setNoCount(prev => prev + 1);
  };

  const handleYes = () => {
    playSuccess();
    onYes();
  };

  return (
    <div className="text-center z-10 w-full min-h-screen flex flex-col justify-center items-center relative select-none p-4" ref={containerRef}>
      <img src="/proposal.gif" alt="friends" className="w-14 sm:w-20 h-14 sm:h-20 mb-2 sm:mb-4 rounded-full opacity-80" />
      <div className="bg-white/85 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(59,130,246,0.25)] mb-8 sm:mb-14 border-2 border-white/60 w-full max-w-sm mx-auto relative z-10 group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute -top-3 -right-3 text-3xl sm:text-4xl animate-bounce" style={{animationDuration: '1.5s'}}>👯</div>
        <div className="absolute -bottom-3 -left-3 text-3xl sm:text-4xl animate-bounce" style={{animationDuration: '2s'}}>👯</div>
        <h2 className="text-2xl sm:text-4xl font-romantic font-bold mb-4 sm:mb-6 text-blue-600">My Mariem,</h2>
        <p className="text-base sm:text-xl mb-6 sm:mb-10 text-blue-700 leading-relaxed font-bold drop-shadow-sm">
          It has been amazing to know someone like you and have you in my life. You are an incredible friend and I would never forget you. Promise you won't forget me too. 🌟
        </p>
        <p className="text-xl sm:text-3xl font-bold text-blue-600 font-romantic leading-tight">
          Will you promise to stay my friend forever? 🤝💙
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 items-center w-full relative">
        <button 
          onClick={handleYes}
          style={{ 
            transform: `scale(${yesScale})`, 
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 sm:py-6 px-8 sm:px-16 rounded-full shadow-[0_15px_45px_-10px_rgba(59,130,246,0.8)] z-50 hover:from-blue-600 hover:to-cyan-600 active:scale-95 text-lg sm:text-3xl transition-all border-b-4 border-blue-800"
        >
          YES, I PROMISE! 💙 <i className="fas fa-hands ml-2 animate-bounce hidden sm:inline"></i>
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
          className="bg-white/70 text-gray-400 font-bold py-2 sm:py-4 px-6 sm:px-12 rounded-full border-2 border-white shadow-xl backdrop-blur-sm whitespace-nowrap text-xs sm:text-lg"
        >
          {noCount > 8 ? "Come ooooon! 🥺💙" : noCount > 4 ? "Tryyy again! 😄" : "Nah, maybe... 🤔"}
        </button>
      </div>
      
      {noCount > 3 && (
        <p className="absolute bottom-6 text-blue-300 font-bold italic animate-pulse pointer-events-none tracking-widest uppercase text-xs">
          {noCount > 12 ? "You're stuck with me! 😄💙" : "One more click away, dear friend! 👯‍♀️"}
        </p>
      )}
    </div>
  );
};
