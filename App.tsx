import React, { useState, useEffect } from 'react';
import { ProposalScreen } from './components/ProposalScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { IntroScreen } from './components/IntroScreen';
import { HeartRain } from './components/HeartRain';
import { Sparkles } from './components/Sparkles';

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'proposal' | 'success'>('intro');
  const [loveNote, setLoveNote] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Use a predefined friendship note
    const note = "You are an amazing friend and I'm so lucky to have you in my life.";
    setLoveNote(note);
  }, []);

  const changeStep = (next: 'intro' | 'proposal' | 'success') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white text-blue-600 px-0">
      <HeartRain />
      <Sparkles />
      
      <div className={`transition-all duration-500 w-full h-full max-w-6xl flex flex-col items-center justify-center z-10 px-4 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {step === 'intro' && (
          <IntroScreen onNext={() => changeStep('proposal')} />
        )}

        {step === 'proposal' && (
          <ProposalScreen onYes={() => changeStep('success')} note={loveNote} />
        )}

        {step === 'success' && (
          <SuccessScreen />
        )}
      </div>

      {/* Decorative floating elements with varied delays and sizes - responsive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-0">
        <i className="fas fa-heart absolute text-2xl sm:text-4xl text-white top-10 sm:top-20 left-5 sm:left-10 float" style={{ animationDelay: '0s' }}></i>
        <i className="fas fa-heart absolute text-3xl sm:text-5xl text-blue-200 bottom-20 sm:bottom-40 right-5 sm:right-10 float" style={{ animationDelay: '1s' }}></i>
        <i className="fas fa-heart absolute text-xl sm:text-2xl text-blue-100 top-1/2 left-2 sm:left-5 float" style={{ animationDelay: '2s' }}></i>
        <i className="fas fa-heart absolute text-2xl sm:text-3xl text-white bottom-10 sm:bottom-20 left-10 sm:left-20 float" style={{ animationDelay: '3.5s' }}></i>
        
        <i className="fas fa-star absolute text-2xl sm:text-3xl text-yellow-100 top-1/3 right-1/4 float" style={{ animationDelay: '2.5s' }}></i>
        <i className="fas fa-star absolute text-lg sm:text-xl text-white top-5 sm:top-10 right-5 sm:right-10 float" style={{ animationDelay: '4s' }}></i>
        <i className="fas fa-star absolute text-xl sm:text-2xl text-yellow-50 bottom-1/4 right-1/3 float" style={{ animationDelay: '1.5s' }}></i>
        
        <i className="fas fa-cloud absolute text-4xl sm:text-6xl text-white/40 bottom-5 sm:bottom-10 left-1/4 float" style={{ animationDelay: '0.5s' }}></i>
        <i className="fas fa-cloud absolute text-2xl sm:text-4xl text-white/30 top-1/4 left-1/3 float" style={{ animationDelay: '5s' }}></i>
      </div>
    </div>
  );
};

export default App;
