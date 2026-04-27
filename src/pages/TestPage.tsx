// src/pages/TestPage.tsx
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomQuestions, type Question } from '../data/questions';
import { useTestStore } from '../store/useTestStore';
import { calculateResult } from '../engine/calculateResult';

export default function TestPage() {
  const navigate = useNavigate();
  const { answers, addAnswer, setResult } = useTestStore();
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setRandomQuestions(getRandomQuestions());
  }, []);

  const handleSelect = useCallback((score: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const question = randomQuestions[currentStep];
    addAnswer({ questionId: question.id, axis: question.axis, score });

    setTimeout(() => {
      const nextStep = currentStep + 1;
      if (nextStep >= randomQuestions.length) {
        const allAnswers = [
          ...answers,
          { questionId: question.id, axis: question.axis, score },
        ];
        const result = calculateResult(allAnswers);
        setResult(result);
        navigate('/loading');
      } else {
        setCurrentStep(nextStep);
      }
      setIsTransitioning(false);
    }, 300);
  }, [currentStep, randomQuestions, isTransitioning, answers, addAnswer, setResult, navigate]);

  if (randomQuestions.length === 0) return null;
  if (currentStep >= randomQuestions.length) return null;

  const question = randomQuestions[currentStep];
  const progress = (currentStep / randomQuestions.length) * 100;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
      padding: '20px',
      fontFamily: "'Pretendard', sans-serif",
    }}>
      {/* 프로그레스 바 */}
      <div style={{
        width: '100%', height: '8px', background: '#e2e8f0',
        borderRadius: '4px', marginBottom: '8px', overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`, height: '100%',
          background: 'linear-gradient(90deg, #10b981, #06b6d4)',
          borderRadius: '4px', transition: 'width 0.3s ease',
        }} />
      </div>

      <p style={{
        textAlign: 'right', fontSize: '13px', color: '#94a3b8', marginBottom: '30px',
      }}>
        {currentStep + 1} / {randomQuestions.length}
      </p>

      {/* 돈생님 캐릭터 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="/characters/teacher-cat.png"
          alt="돈생님"
          style={{ width: '80px', height: '80px', objectFit: 'contain' }}
        />
      </div>

      {/* 질문 */}
      <div style={{
        background: 'white', borderRadius: '20px', padding: '24px',
        marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '18px', fontWeight: '600', lineHeight: '1.6', color: '#1e293b',
        }}>
          {question.text}
        </p>
      </div>

      {/* 선택지 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option.score)}
            disabled={isTransitioning}
            style={{
              padding: '18px 20px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              background: 'white',
              fontSize: '15px',
              color: '#334155',
              cursor: isTransitioning ? 'default' : 'pointer',
              textAlign: 'left',
              lineHeight: '1.5',
              transition: 'all 0.2s',
              opacity: isTransitioning ? 0.6 : 1,
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
