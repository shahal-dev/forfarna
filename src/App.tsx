import React, { useState, useEffect } from 'react';
import BackgroundDecor from './components/BackgroundDecor';
import SparkleTrail from './components/SparkleTrail';
import AppStyles from './components/AppStyles';
import { IdentityPage, QuizPage, ProposalPage, SuccessPage, NotForYouPage } from './components/pages';
import { QuizStage } from './types';
import { generateCompliments } from './services/geminiService';

function getInitialState(): { step: 'IDENTITY' | 'QUIZ' | 'PROPOSAL' | 'SUCCESS' | 'NOT_FOR_YOU'; quizStage: QuizStage } {
  const path = window.location.pathname;
  if (path.startsWith('/quiz/')) {
    const n = parseInt(path.split('/')[2] || '1', 10);
    return { step: 'QUIZ', quizStage: (n >= 1 && n <= 4 ? n : 1) as QuizStage };
  }
  if (path === '/proposal') return { step: 'PROPOSAL', quizStage: 1 };
  if (path === '/success') return { step: 'SUCCESS', quizStage: 1 };
  if (path === '/not-for-you') return { step: 'NOT_FOR_YOU', quizStage: 1 };
  return { step: 'IDENTITY', quizStage: 1 };
}

const App: React.FC = () => {
  const initial = getInitialState();
  const [step, setStep] = useState<'IDENTITY' | 'QUIZ' | 'PROPOSAL' | 'SUCCESS' | 'NOT_FOR_YOU'>(initial.step);
  const [quizStage, setQuizStage] = useState<QuizStage>(initial.quizStage);
  const [compliments, setCompliments] = useState<string[]>([]);
  const [loadingCompliments, setLoadingCompliments] = useState(false);

  // Keep URL in sync with current page
  useEffect(() => {
    const path = step === 'IDENTITY' ? '/' : step === 'QUIZ' ? `/quiz/${quizStage}` : step === 'NOT_FOR_YOU' ? '/not-for-you' : `/${step.toLowerCase()}`;
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path);
    }
  }, [step, quizStage]);

  useEffect(() => {
    if (step === 'PROPOSAL' || step === 'SUCCESS') {
      setLoadingCompliments(true);
      generateCompliments('My Sweetheart').then((res) => {
        setCompliments(res);
        setLoadingCompliments(false);
      });
    }
  }, [step]);

  const nextQuiz = () => {
    if (quizStage < 4) {
      setQuizStage((prev) => (prev + 1) as QuizStage);
    } else {
      setStep('PROPOSAL');
    }
  };

  return (
    <div className={`min-h-screen w-full min-w-0 flex flex-col items-center justify-center p-3 sm:p-6 md:p-12 relative overflow-x-hidden transition-all duration-1000 ${step === 'NOT_FOR_YOU' ? 'bg-black' : 'selection:bg-pink-200'}`}>
      {step !== 'NOT_FOR_YOU' && (
        <>
          <BackgroundDecor />
          <SparkleTrail />
        </>
      )}

      <main className="w-full max-w-7xl mx-auto flex items-center justify-center py-10 sm:py-14 md:py-20 px-2 sm:px-4 min-w-0">
        {step === 'IDENTITY' && <IdentityPage onConfirm={() => setStep('QUIZ')} onNope={() => setStep('NOT_FOR_YOU')} />}
        {step === 'QUIZ' && <QuizPage stage={quizStage} onNext={nextQuiz} />}
        {step === 'PROPOSAL' && <ProposalPage onYes={() => setStep('SUCCESS')} />}
        {step === 'SUCCESS' && (
          <SuccessPage compliments={compliments} loadingCompliments={loadingCompliments} />
        )}
        {step === 'NOT_FOR_YOU' && <NotForYouPage onBack={() => setStep('IDENTITY')} />}
      </main>

      {step !== 'NOT_FOR_YOU' && <AppStyles />}
    </div>
  );
};

export default App;
