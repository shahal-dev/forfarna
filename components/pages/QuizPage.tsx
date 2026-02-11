import React from 'react';
import { QuizStage } from '../../types';
import { QUIZ_CONTENT } from '../../quizContent';

interface QuizPageProps {
  stage: QuizStage;
  onNext: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ stage, onNext }) => {
  const content = QUIZ_CONTENT[stage];

  return (
    <div className="bg-white/70 backdrop-blur-3xl p-6 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] shadow-3xl text-center max-w-4xl w-full border border-white/80 animate-in slide-in-from-right duration-700 min-w-0 overflow-hidden">
      <div className="mb-8 sm:mb-12 inline-block">
        <span className="bg-white/50 text-pink-500 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-pink-100 shadow-sm backdrop-blur-sm">
          The Trial — Phase {stage}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <div className="relative group flex-shrink-0 order-2 lg:order-1">
          <div className="absolute -inset-4 sm:-inset-8 bg-pink-100 rounded-[2rem] sm:rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <img src={content.m} className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full object-cover rounded-[2rem] sm:rounded-[2.5rem] mx-auto shadow-2xl border-4 border-white transition-all duration-700 group-hover:scale-105 group-hover:rotate-2" alt="" />
        </div>
        <div className="text-center lg:text-left order-1 lg:order-2 min-w-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-8 sm:mb-12 leading-tight">
            {content.q}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={onNext} className="flex-1 bg-white hover:bg-pink-50 text-pink-500 font-bold py-4 sm:py-6 px-4 sm:px-6 rounded-xl sm:rounded-2xl border-2 border-pink-100 transition-all hover:scale-[1.02] shadow-sm text-base sm:text-lg md:text-xl min-w-0">
              {content.b1}
            </button>
            <button onClick={onNext} className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 sm:py-6 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl transition-all hover:scale-[1.02] text-base sm:text-lg md:text-xl min-w-0">
              {content.b2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
