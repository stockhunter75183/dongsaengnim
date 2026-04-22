import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { useTestStore } from '../store/useTestStore';
import { calculateResult } from '../engine/calculateResult';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const navigate = useNavigate();
  const { currentStep, answers, addAnswer, setResult } = useTestStore();
  const [selected, setSelected] = useState<number | null>(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (currentStep >= questions.length) {
      const result = calculateResult(answers);
      setResult(result);
      navigate('/loading');
    }
  }, [currentStep, answers, setResult, navigate]);

  if (currentStep >= questions.length) return null;

  const question = questions[currentStep];
  const progress = (currentStep / questions.length) * 100;

  const handleSelect = (score: number) => {
    if (selected !== null) return; // 중복 클릭 방지
    setSelected(score);
    setFade(false);

    setTimeout(() => {
      addAnswer({ questionId: question.id, axis: question.axis, score });
      setSelected(null);
      setFade(true);
    }, 300);
  };

  return (
    <div style={{
      minHeight: '100vh', padding: '0', background: 'white',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 상단 고정 영역 */}
      <div style={{
        padding: '16px 20px 0 20px', background: 'white',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        {/* 진행바 */}
        <div style={{
          width: '100%', height: '6px', background: '#F0F0F0',
          borderRadius: '3px', marginBottom: '16px', overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: 'linear-gradient(90deg, #2EC4B6, #0B3D91)',
            borderRadius: '3px', transition: 'width 0.4s ease',
          }} />
        </div>

        {/* 질문 번호 */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: '4px',
        }}>
          <span style={{
            fontSize: '13px', color: '#2EC4B6', fontWeight: '700',
          }}>
            Q{currentStep + 1}
          </span>
          <span style={{ fontSize: '12px', color: '#BBB' }}>
            {currentStep + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* 질문 영역 */}
      <div style={{
        flex: 1, padding: '20px 20px 32px 20px',
        display: 'flex', flexDirection: 'column',
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}>
        <h2 style={{
          fontSize: '22px', fontWeight: '700', marginBottom: '32px',
          lineHeight: 1.5, color: '#222', wordBreak: 'keep-all',
        }}>
          {question.text}
        </h2>

        {/* 선택지 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {question.options.map((option, index) => {
            const isSelected = selected === option.score;
            return (
              <button
                key={index}
                onClick={() => handleSelect(option.score)}
                style={{
                  padding: '18px 20px', fontSize: '15px',
                  background: isSelected ? '#E8F8F5' : '#FAFAFA',
                  border: isSelected ? '2px solid #2EC4B6' : '2px solid #F0F0F0',
                  borderRadius: '16px', cursor: 'pointer',
                  textAlign: 'left', lineHeight: 1.6,
                  color: '#333', fontWeight: isSelected ? '600' : '400',
                  transition: 'all 0.2s ease',
                  wordBreak: 'keep-all',
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
