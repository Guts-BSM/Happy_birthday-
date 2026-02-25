
import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: string;
  duration: string;
  size: string;
  opacity: number;
  type: 'white' | 'pink' | 'lightPink';
}

export const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now();
      const rand = Math.random();
      const type = rand > 0.7 ? 'white' : rand > 0.4 ? 'pink' : 'lightPink';
      
      const newHeart: Heart = {
        id,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 4 + 4}s`,
        size: `${Math.random() * 15 + 10}px`,
        opacity: Math.random() * 0.4 + 0.2,
        type
      };

      setHearts(prev => [...prev.slice(-30), newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, 8000);
    };

    const interval = setInterval(createHeart, 400);
    return () => clearInterval(interval);
  }, []);

  const getColor = (type: string) => {
    switch(type) {
      case 'white': return 'text-white';
      case 'pink': return 'text-pink-300';
      case 'lightPink': return 'text-pink-100';
      default: return 'text-pink-200';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <i
          key={heart.id}
          className={`fas fa-heart absolute top-[-50px] animate-fall ${getColor(heart.type)}`}
          style={{
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
            animation: `fall ${heart.duration} linear forwards`
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
