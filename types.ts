
export type AppStep = 'IDENTITY' | 'QUIZ' | 'PROPOSAL' | 'SUCCESS';

export type QuizStage = 1 | 2 | 3;

export interface CatMeme {
  url: string;
  alt: string;
}

export interface Position {
  x: number;
  y: number;
}
