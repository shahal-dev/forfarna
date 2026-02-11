import React from 'react';
import { AppStep, QuizStage } from '../types';

interface ProgressBarProps {
  step: AppStep;
  quizStage: QuizStage;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, quizStage }) => {
  const progress = step === 'PROPOSAL' ? 4 : quizStage;
  const percentage = Math.round((progress / 4) * 100);

  return (
    <div className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] max-w-lg z-50 animate-in fade-in slide-in-from-top duration-1000">
      <div className="flex justify-between items-center mb-2 px-1 text-pink-500 font-bold text-xs uppercase tracking-widest">
        <span>The Trial of Love</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 bg-pink-100 rounded-full overflow-hidden border border-white/50 shadow-sm backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(244,114,182,0.4)]"
          style={{ width: `${progress * 25}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
