import React from 'react';
import { CAT_BEST_DAY, CAT_BEST_DAY_LEFT, CAT_BEST_DAY_RIGHT } from '../../constants';

interface SuccessPageProps {
  compliments: string[];
  loadingCompliments: boolean;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ compliments, loadingCompliments }) => (
  <div className="bg-white/95 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[3rem] lg:rounded-[5rem] shadow-[0_80px_160px_rgba(34,197,94,0.3)] max-w-5xl w-full border-4 sm:border-[8px] border-white relative overflow-hidden animate-in zoom-in-95 duration-1000 mx-auto min-w-0">
    <div className="h-2 sm:h-3 bg-gradient-to-r from-pink-400 via-green-400 to-rose-400 animate-gradient-shift bg-[length:200%_auto]"></div>

    <div className="p-6 sm:p-10 lg:p-14">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-romantic text-pink-600 mb-8 sm:mb-12 text-center animate-bounce tracking-tight">
        Best Day Ever! 🐾💖
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <div className="relative">
            <img src={CAT_BEST_DAY} className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl object-cover shadow-xl border-4 border-white animate-float" alt="" />
            <span className="absolute -top-2 -right-2 text-4xl sm:text-5xl animate-wiggle">🎉</span>
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
          <blockquote className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border-2 border-pink-100 shadow-inner">
            <p className="italic text-rose-700 text-lg sm:text-xl md:text-2xl font-romantic leading-relaxed text-center lg:text-left">
              &ldquo;My heart just did the biggest zoomies in history! I&apos;m the luckiest person to have you.&rdquo;
            </p>
          </blockquote>

          <div>
            <h3 className="text-sm sm:text-base font-black text-pink-500 uppercase tracking-widest mb-4 text-center lg:text-left">
              ✨ PURR-FECTLY MATCHED ✨
            </h3>
            {loadingCompliments ? (
              <div className="flex gap-2 justify-center lg:justify-start py-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-300 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {compliments.map((comp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-pink-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <span className="text-2xl sm:text-3xl flex-shrink-0">🐾</span>
                    <span className="font-semibold text-sm sm:text-base text-gray-700 leading-snug">{comp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 pt-8 sm:pt-12 border-t-2 border-pink-100">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <img src={CAT_BEST_DAY_LEFT} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-lg -rotate-6 hover:rotate-0 transition-transform" alt="" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-romantic text-rose-500 mb-4">See you on the 14th! 💌</p>
            <div className="flex justify-center gap-6 text-3xl sm:text-4xl animate-pulse">
              <span>🍫</span><span>💎</span><span>💖</span>
            </div>
          </div>
          <img src={CAT_BEST_DAY_RIGHT} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-lg rotate-6 hover:rotate-0 transition-transform" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default SuccessPage;
