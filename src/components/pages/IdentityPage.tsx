import React from 'react';

interface IdentityPageProps {
  onConfirm: () => void;
  onNope: () => void;
}

const IdentityPage: React.FC<IdentityPageProps> = ({ onConfirm, onNope }) => (
  <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3.5rem] shadow-[0_40px_100px_rgba(255,140,160,0.25)] text-center max-w-xl w-full border border-white/80 animate-in zoom-in duration-1000 min-w-0">
    <div className="relative inline-block mb-8 sm:mb-12 group">
      <div className="absolute -inset-4 bg-gradient-to-tr from-pink-400 to-rose-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <img src={'/images/shahal_looking.png'} className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-full mx-auto border-4 sm:border-8 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Huh cat" />
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-4xl sm:text-6xl md:text-8xl animate-bounce">🧐</div>
    </div>
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-pink-600 mb-4 sm:mb-6 font-romantic tracking-tight">Access Denied!</h1>
    <p className="text-gray-600 mb-10 sm:mb-14 text-lg sm:text-xl md:text-2xl font-medium px-2 sm:px-6 leading-relaxed">
      Security Protocol: Please confirm that you are the most precious girl in existence.
    </p>
    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto">
      <button
        onClick={onConfirm}
        className="group relative w-full bg-gradient-to-br from-pink-500 to-rose-400 text-white font-black py-5 sm:py-6 rounded-[1.25rem] sm:rounded-[1.5rem] shadow-[0_15px_30px_rgba(244,114,182,0.3)] transition-all transform hover:scale-[1.03] active:scale-95 text-xl sm:text-2xl"
      >
        <span className="relative z-10">That&apos;s Me! ❤️</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-[1.5rem]"></div>
      </button>
      <button
        onClick={onNope}
        className="bg-white/60 text-gray-400 hover:text-gray-600 hover:bg-white/80 border border-dashed border-gray-300 backdrop-blur-sm text-xs sm:text-sm md:text-base font-medium py-3 px-6 rounded-full transition-all"
      >
        Nope, I&apos;m just a random kitty 😿
      </button>
    </div>
  </div>
);

export default IdentityPage;
