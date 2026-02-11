import { QuizStage } from './types';
import { CAT_MEMES } from './constants';

export interface QuizStepContent {
  q: string;
  m: string;
  b1: string;
  b2: string;
}

export const QUIZ_CONTENT: Record<QuizStage, QuizStepContent> = {
  1: {
    q: "Do you agree that our love is scientifically the most 'Purr-fect' thing in history?",
    m: CAT_MEMES[1],
    b1: "Yes, obviously! 🐾",
    b2: "Meow-thematically True! 📈"
  },
  2: {
    q: "Will you legally admit that you are officially the most beautiful girl in this (and every) dimension?",
    m: CAT_MEMES[4],
    b1: "I admit it! ✨",
    b2: "Guilty as charged! 💖"
  },
  3: {
    q: "Finally, do you promise to stay your wonderful, amazing self forever and ever?",
    m: CAT_MEMES[0],
    b1: "I Promise! 🤙",
    b2: "Pinky Promise! 🌸"
  }
};
