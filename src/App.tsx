import React, { useState, useEffect } from 'react';
import BackgroundDecor from './components/BackgroundDecor';
import SparkleTrail from './components/SparkleTrail';
import ProgressBar from './components/ProgressBar';
import AppStyles from './components/AppStyles';
import { IdentityPage, QuizPage, ProposalPage, SuccessPage } from './components/pages';
import { AppStep, QuizStage } from './types';
import { generateCompliments } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('IDENTITY');
  const [quizStage, setQuizStage] = useState<QuizStage>(1);
  const [name] = useState('My Sweetheart');
  const [compliments, setCompliments] = useState<string[]>([]);
  const [loadingCompliments, setLoadingCompliments] = useState(false);

  useEffect(() => {
    if (step === 'PROPOSAL' || step === 'SUCCESS') {
      setLoadingCompliments(true);
      generateCompliments(name).then((res) => {
        setCompliments(res);
        setLoadingCompliments(false);
      });
    }
  }, [step, name]);

  const nextQuiz = () => {
    if (quizStage < 3) {
      setQuizStage((prev) => (prev + 1) as QuizStage);
    } else {
      setStep('PROPOSAL');
    }
  };

  return (
    <div className="min-h-screen w-full min-w-0 flex flex-col items-center justify-center p-3 sm:p-6 md:p-12 relative selection:bg-pink-200 overflow-x-hidden transition-all duration-1000">
      <BackgroundDecor />
      <SparkleTrail />

      {step !== 'IDENTITY' && step !== 'SUCCESS' && (
        <ProgressBar step={step} quizStage={quizStage} />
      )}

      <main className="w-full max-w-7xl mx-auto flex items-center justify-center py-6 sm:py-10 px-2 sm:px-4 min-w-0">
        {step === 'IDENTITY' && <IdentityPage onConfirm={() => setStep('QUIZ')} />}
        {step === 'QUIZ' && (
          <QuizPage stage={quizStage} onNext={nextQuiz} />
        )}
        {step === 'PROPOSAL' && <ProposalPage onYes={() => setStep('SUCCESS')} />}
        {step === 'SUCCESS' && (
          <SuccessPage
            compliments={compliments}
            loadingCompliments={loadingCompliments}
          />
        )}
      </main>

      <AppStyles />
    </div>
  );
};

export default App;
