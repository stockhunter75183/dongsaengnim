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
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', padding: '24px',
      background: 'linear-gradient(160deg, #2EC4B6 0%, #1A8A7F 40%, #0B3D91 100%)',
      color: 'white', textAlign: 'center',
    }}>
      {/* 상단 장식 */}
      <div style={{
        position: 'absolute', top: '10%', left: '10%',
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '15%',
        width: '40px', height: '40px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
      }} />

      {/* 로고 영역 */}
      <div style={{
        width: '100px', height: '100px', borderRadius: '28px',
        background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '56px', marginBottom: '24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}>
        🌡️
      </div>

      <h1 style={{
        fontSize: '32px', fontWeight: '800', marginBottom: '8px',
        letterSpacing: '-0.5px',
      }}>
        돈생님
      </h1>

      <p style={{
        fontSize: '15px', opacity: 0.85, marginBottom: '8px',
        lineHeight: 1.6,
      }}>
        나의 소비 온도는 몇 도?
      </p>
      <p style={{
        fontSize: '13px', opacity: 0.6, marginBottom: '40px',
      }}>
        12가지 질문으로 알아보는 나만의 소비 MBTI
      </p>

      {/* 시작 버튼 */}
      <button onClick={handleStart} style={{
        padding: '16px 0', fontSize: '17px', fontWeight: '700',
        background: 'white', color: '#2EC4B6', border: 'none',
        borderRadius: '16px', cursor: 'pointer', width: '100%',
        maxWidth: '300px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        letterSpacing: '0.5px',
      }}>
        테스트 시작하기
      </button>

      {/* 참여수 (가짜 소셜프루프) */}
      <p style={{
        fontSize: '12px', opacity: 0.5, marginTop: '20px',
      }}>
        지금까지 12,847명이 참여했어요
      </p>

      {/* 하단 */}
      <div style={{
        position: 'absolute', bottom: '24px',
        fontSize: '11px', opacity: 0.3,
      }}>
        © 2025 돈생님
      </div>
    </div>
  );
}
