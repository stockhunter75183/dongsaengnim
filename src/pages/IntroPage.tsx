// src/pages/IntroPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';

export default function IntroPage() {
  const navigate = useNavigate();
  const reset = useTestStore((s) => s.reset);

  const handleStart = () => {
    reset();
    navigate('/test');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #2EC4B6 0%, #0B3D91 100%)',
      color: 'white',
      textAlign: 'center',
    }}>
      {/* 돈생님 고양이 캐릭터 */}
      <img
        src="/characters/teacher-cat.png"
        alt="돈생님"
        style={{
          width: '140px',
          height: '140px',
          objectFit: 'contain',
          marginBottom: '16px',
        }}
      />

      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
        돈생님
      </h1>
      <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '32px' }}>
        나의 소비 온도는 몇 도?<br />
        12가지 질문으로 알아보는 나의 소비 동물!
      </p>

      <button
        onClick={handleStart}
        style={{
          padding: '16px 48px',
          fontSize: '18px',
          fontWeight: 'bold',
          background: 'white',
          color: '#2EC4B6',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
        }}
      >
        테스트 시작하기 →
      </button>
    </div>
  );
}
