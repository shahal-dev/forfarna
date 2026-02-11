import React from 'react';
import { CAT_MEMES } from '../../constants';

interface NotForYouPageProps {
  onBack: () => void;
}

const NotForYouPage: React.FC<NotForYouPageProps> = ({ onBack }) => (
  <div className="w-full flex flex-col items-center justify-center p-6 sm:p-12 text-center">
    <div className="max-w-lg w-full">
      <div className="mb-8">
        <img
          src={CAT_MEMES[3]}
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-2xl object-cover border-2 border-gray-700 opacity-90"
          alt="Sad cat"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-300 mb-4 tracking-tight">
        This one&apos;s not for you 😿
      </h1>
      <p className="text-gray-500 text-lg sm:text-xl mb-10 leading-relaxed">
        This Valentine&apos;s proposal was made with one special person in mind. 
        Maybe you wandered in by accident, or perhaps you&apos;re just a curious kitty passing through.
      </p>
      <p className="text-gray-600 text-sm sm:text-base mb-12">
        Either way, this corner of the internet belongs to someone else&apos;s love story. 
        Hope you find your own purr-fect match! 🐾
      </p>
      <button
        onClick={onBack}
        className="px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold border border-gray-600 transition-all hover:scale-105"
      >
        Go back to start
      </button>
    </div>
  </div>
);

export default NotForYouPage;
