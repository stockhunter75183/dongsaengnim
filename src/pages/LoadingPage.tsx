import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const messages = [
  '소비 패턴을 분석하고 있어요...',
  '당신의 돈 성격을 계산 중...',
  '소비 온도를 측정하고 있어요...',
  '거의 다 됐어요!',
];

export default function LoadingPage() {
  const navigate = useNavigate();
  const [msgIndex, setMsgIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => navigate('/result'), 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  // 메시지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // 점 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh',
      background: 'linear-gradient(160deg, #2EC4B6 0%, #1A8A7F 40%, #0B3D91 100%)',
      color: 'white', textAlign: 'center', padding: '24px',
    }}>
      {/* 온도계 애니메이션 */}
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '40px', marginBottom: '32px',
        animation: 'pulse 1.5s infinite, float 2s ease-in-out infinite',
      }}>
        🌡️
      </div>

      {/* 프로그레스 바 */}
      <div style={{
        width: '200px', height: '4px', background: 'rgba(255,255,255,0.2)',
        borderRadius: '2px', overflow: 'hidden', marginBottom: '24px',
      }}>
        <div style={{
          height: '100%', background: 'white', borderRadius: '2px',
          animation: 'loading 3.5s ease-in-out forwards',
        }} />
      </div>

      {/* 메시지 */}
      <p style={{
        fontSize: '16px', fontWeight: '600', marginBottom: '8px',
        minHeight: '24px',
      }}>
        {messages[msgIndex]}
      </p>
      <p style={{
        fontSize: '24px', letterSpacing: '4px', opacity: 0.6,
        minWidth: '40px',
      }}>
        {dots}
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -10px; }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
