
import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  char: string;
}

const SparkleTrail: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const chars = ['✨', '💖', '🐾', '⭐', '🌸'];
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newSparkle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        char: chars[Math.floor(Math.random() * chars.length)]
      };

      setSparkles(prev => [...prev.slice(-15), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {sparkles.map(s => (
        <span
          key={s.id}
          className="absolute text-xl animate-sparkle-fade"
          style={{ left: s.x, top: s.y, transform: 'translate(-50%, -50%)' }}
        >
          {s.char}
        </span>
      ))}
      <style>{`
        @keyframes sparkle-fade {
          0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
          100% { transform: translate(-50%, -100px) scale(1.5) rotate(180deg); opacity: 0; }
        }
        .animate-sparkle-fade {
          animation: sparkle-fade 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SparkleTrail;
