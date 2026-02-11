import React from 'react';
import MovingButton from '../MovingButton';
import { HER_PHOTO_PLACEHOLDER } from '../../constants';

interface ProposalPageProps {
  onYes: () => void;
}

const ProposalPage: React.FC<ProposalPageProps> = ({ onYes }) => (
  <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-6 z-10 overflow-hidden">
    <div className="bg-white/30 backdrop-blur-[60px] p-3 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[4rem] shadow-[0_60px_120px_rgba(255,50,120,0.15)] text-center max-w-4xl w-full max-h-[min(95vh,95dvh)] border border-white/60 animate-in slide-in-from-bottom-24 duration-1000 overflow-hidden flex flex-col justify-center shrink-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 items-center flex-1 min-h-0 content-center">
        <div className="relative group mx-auto w-full max-w-[120px] sm:max-w-[180px] md:max-w-[220px] flex-shrink-0">
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-rose-500/20 to-pink-300/20 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity"></div>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-4 border-white transition-all duration-700 group-hover:scale-[1.03] aspect-square">
            <img src={HER_PHOTO_PLACEHOLDER} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute -bottom-3 -right-3 text-4xl sm:text-5xl animate-pulse drop-shadow-xl z-20 pointer-events-none">🌹</div>
          <div className="absolute -top-3 -left-3 text-4xl sm:text-5xl drop-shadow-xl animate-float z-20 pointer-events-none">😻</div>
        </div>

        <div className="text-center md:text-left space-y-4 sm:space-y-6 min-w-0 flex flex-col justify-center">
          <div>
            <h3 className="text-pink-400 font-black uppercase tracking-[0.25em] text-xs sm:text-sm mb-2 sm:mb-4 animate-pulse">The Final Moment</h3>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-romantic text-rose-600 leading-tight tracking-tighter drop-shadow-lg mb-4 sm:mb-6">
              Will you be my Valentine?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <button
              onClick={onYes}
              className="relative group w-full sm:w-auto overflow-hidden bg-green-500 text-white text-xl sm:text-3xl md:text-4xl font-black py-4 sm:py-6 px-8 sm:px-14 rounded-full shadow-[0_12px_0_rgb(21,128,61)] active:shadow-none active:translate-y-3 transition-all transform hover:scale-105 shrink-0"
            >
              <span className="relative z-10">YES! ❤️</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <div className="min-h-[44px] flex items-center justify-center" aria-hidden="true">
              {/* No button is rendered outside this box so it can move freely */}
            </div>
          </div>
          <p className="font-romantic text-lg sm:text-xl md:text-2xl text-pink-400 italic opacity-80 leading-snug">
            My heart has been yours from the start... ✨
          </p>
        </div>
      </div>
    </div>
    <MovingButton className="z-[1000] bg-white/90 text-red-400 text-base sm:text-xl font-black border-2 border-red-50 shadow-xl backdrop-blur-md">
      No 😿
    </MovingButton>
  </div>
);

export default ProposalPage;
