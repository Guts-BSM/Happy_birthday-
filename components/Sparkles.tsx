
import React from 'react';

export const Sparkles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: Math.random() > 0.7 ? '#fef08a' : '#ffffff', // Soft yellow or white
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.5
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.7) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(15deg); }
        }
      `}</style>
    </div>
  );
};
