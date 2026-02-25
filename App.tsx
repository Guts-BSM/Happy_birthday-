
import React, { useState, useEffect } from 'react';
import { ProposalScreen } from './components/ProposalScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { IntroScreen } from './components/IntroScreen';
import { HeartRain } from './components/HeartRain';
import { Sparkles } from './components/Sparkles';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'proposal' | 'success'>('intro');
  const [loveNote, setLoveNote] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: 'Write a very short, deeply romantic, and cute marriage proposal note for a girl named Mariem from a guy named Anes. Mention a white heart 🤍 and how much he loves her. Keep it under 25 words.',
        });
        setLoveNote(response.text || "Mariem, my heart beats only for you. I love you with all my soul. Will you be mine forever? 🤍");
      } catch (error) {
        setLoveNote("Mariem, I love you more than words can express. You are my everything. 🤍");
      }
    };
    fetchNote();
  }, []);

  const changeStep = (next: 'intro' | 'proposal' | 'success') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-white text-pink-600 px-6">
      <HeartRain />
      <Sparkles />
      
      <div className={`transition-all duration-500 w-full max-w-md flex flex-col items-center z-10 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
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

      {/* Decorative floating elements with varied delays and sizes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-0">
        <i className="fas fa-heart absolute text-4xl text-white top-20 left-10 float" style={{ animationDelay: '0s' }}></i>
        <i className="fas fa-heart absolute text-5xl text-pink-200 bottom-40 right-10 float" style={{ animationDelay: '1s' }}></i>
        <i className="fas fa-heart absolute text-2xl text-pink-100 top-1/2 left-5 float" style={{ animationDelay: '2s' }}></i>
        <i className="fas fa-heart absolute text-3xl text-white bottom-20 left-20 float" style={{ animationDelay: '3.5s' }}></i>
        
        <i className="fas fa-star absolute text-3xl text-yellow-100 top-1/3 right-1/4 float" style={{ animationDelay: '2.5s' }}></i>
        <i className="fas fa-star absolute text-xl text-white top-10 right-10 float" style={{ animationDelay: '4s' }}></i>
        <i className="fas fa-star absolute text-2xl text-yellow-50 bottom-1/4 right-1/3 float" style={{ animationDelay: '1.5s' }}></i>
        
        <i className="fas fa-cloud absolute text-6xl text-white/40 bottom-10 left-1/4 float" style={{ animationDelay: '0.5s' }}></i>
        <i className="fas fa-cloud absolute text-4xl text-white/30 top-1/4 left-1/3 float" style={{ animationDelay: '5s' }}></i>
      </div>
    </div>
  );
};

export default App;
