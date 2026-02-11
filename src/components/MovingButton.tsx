import React, { useState, useCallback, useRef, useEffect } from 'react';

interface MovingButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MovingButton: React.FC<MovingButtonProps> = ({ children, className }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const moveButton = useCallback(() => {
    if (!buttonRef.current) return;

    const margin = 50;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const btnRect = buttonRef.current.getBoundingClientRect();
    const btnWidth = btnRect.width || 120;
    const btnHeight = btnRect.height || 45;

    const maxX = Math.max(0, vw - btnWidth - margin);
    const maxY = Math.max(0, vh - btnHeight - margin);

    const newX = Math.max(margin, Math.floor(Math.random() * maxX));
    const newY = Math.max(margin, Math.floor(Math.random() * maxY));

    setHasMoved(true);
    setStyle({
      position: 'fixed',
      left: `${newX}px`,
      top: `${newY}px`,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: `rotate(${Math.random() * 15 - 7.5}deg) scale(${0.9 + Math.random() * 0.2})`,
      pointerEvents: 'auto',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!hasMoved || !buttonRef.current) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = buttonRef.current.getBoundingClientRect();

      if (rect.right > vw || rect.bottom > vh || rect.left < 0 || rect.top < 0) {
        moveButton();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasMoved, moveButton]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={moveButton}
      onTouchStart={(e) => {
        e.preventDefault();
        moveButton();
      }}
      onFocus={moveButton}
      onClick={(e) => {
        e.preventDefault();
        moveButton();
      }}
      className={`${className} select-none touch-none whitespace-nowrap px-8 py-3 rounded-full font-bold transition-all shadow-lg ring-offset-2 hover:ring-2 ring-pink-200`}
      style={style}
    >
      {children}
    </button>
  );
};

export default MovingButton;
