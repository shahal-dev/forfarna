import React, { useEffect, useState } from 'react';
import { FLOWERS } from '../constants';

const BackgroundDecor: React.FC = () => {
  const [items, setItems] = useState<{ id: number; icon: string; x: number; y: number; delay: number; duration: number; size: number }[]>([]);

  const updateItems = () => {
    const width = window.innerWidth;
    let count = 25;
    if (width >= 1536) count = 80;
    else if (width >= 1024) count = 60;
    else if (width >= 768) count = 40;

    const newItems = Array.from({ length: count }).map((_, i) => ({
      id: i,
      icon: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * -30,
      duration: 20 + Math.random() * 30,
      size: (width < 768 ? 14 : 22) + Math.random() * (width < 768 ? 16 : 32),
    }));
    setItems(newItems);
  };

  useEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#fff0f3] via-[#fff5f7] to-[#ffe5ec]">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute opacity-20 sm:opacity-30 select-none transition-opacity duration-1000"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            animation: `float-up ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(115vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        body { 
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="24">🐾</text></svg>'), auto; 
          overscroll-behavior: none;
        }
      `}</style>
    </div>
  );
};

export default BackgroundDecor;
