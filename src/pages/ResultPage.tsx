// src/pages/ResultPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);
  const [showToast, setShowToast] = useState(false);

  // 알림 메시지 제어
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (!result) {
    navigate('/');
    return null;
  }

  const type = moneyTypes[result.code];
  if (!type) return null;

  const tempColor =
    result.temperature >= 70 ? '#FF6B6B' :
    result.temperature >= 40 ? '#FFD93D' :
    '#6BCBFF';

  const shareUrl = "https://dongsaengnim.vercel.app";
  const shareText = `나의 소비 동물은 [${type.animal}]! 🌡️ 소비 온도: ${result.temperature}도\n\n지금 테스트 하기:\n${shareUrl}`;

  // 핵심: PC와 모바일을 구분해서 작동하는 공유 함수
  const handleSmartShare = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
      // 1. 모바일: 카톡/텔레가 있는 시스템 공유창 열기
      try {
        await navigator.share({ text: shareText });
      } catch (e) {
        if ((e as Error).name !== 'AbortError') handleDirectCopy();
      }
    } else {
      // 2. PC: 시스템창 무시하고 바로 복사 (이미지 속 그 화면 안 뜨게 함)
      handleDirectCopy();
    }
  };

  const handleDirectCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setShowToast(true); // "복사되었습니다" 알림 띄우기
    } catch (err) {
      alert('복사에 실패했습니다. 주소창의 링크를 복사해 주세요.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '20px',
      fontFamily: "'Pretendard', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      
      {/* 화면 상단 커스텀 알림 (Toast) */}
      {showToast && (
        <div style={{
          position: 'fixed', top: '30px', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.85)', color: 'white', padding: '12px 24px',
          borderRadius: '30px', fontSize: '14px', zIndex: 1000, fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)', animation: 'fadeInOut 2s ease-in-out'
        }}>
          ✅ 결과가 복사되었습니다! 원하는 곳에 붙여넣으세요.
        </div>
      )}

      {/* 온도 섹션 */}
      <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '30px' }}>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: tempColor, margin: '0' }}>{result.temperature}°</p>
        <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>나의 소비 온도</p>
      </div>

      {/* 캐릭터 섹션 */}
      <img src={type.characterImage} alt={type.animal} style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '20px' }} />

      {/* 타이틀 섹션 */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', margin: '0' }}>{type.animal} — {type.name}</h1>
        <p style={{ fontSize: '15px', color: '#64748b', marginTop: '6px' }}>{type.title}</p>
        <div style={{ display: 'inline-block', marginTop: '12px', padding: '6px 16px', background: '#e2e8f0', color: '#475569', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>#{result.code}</div>
      </div>

      {/* 분석 카드 */}
      <div style={{ width: '100%', maxWidth: '400px', background: 'white', borderRadius: '20px', padding: '24px', marginBottom: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', boxSizing: 'border-box' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155', margin: '0' }}>{type.description}</p>
      </div>

      {/* 돈생님 코멘트 */}
      <div style={{ width: '100%', maxWidth: '400px', background: '#fefce8', borderRadius: '20px', padding: '16px 20px', marginBottom: '30px', display: 'flex', gap: '12px', alignItems: 'flex-start', border: '1px solid #fef08a', boxSizing: 'border-box' }}>
        <img src="/characters/teacher-cat.png" alt="돈생님" style={{ width: '44px', height: '44px', objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: '12px', color: '#a16207', fontWeight: 'bold', marginBottom: '4px' }}>🐱 돈생님 한마디</p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#713f12', margin: 0 }}>"{type.comment}"</p>
        </div>
      </div>

      {/* 버튼 액션 섹션 */}
      <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/result/detail')} style={{ flex: 1, padding: '16px', borderRadius: '16px', border: 'none', background: '#10b981', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>상세 보기</button>
          <button onClick={() => navigate('/match')} style={{ flex: 1, padding: '16px', borderRadius: '16px', border: 'none', background: '#f43f5e', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>돈 궁합 보기</button>
        </div>

        {/* [메인 버튼] 모바일/PC에 따라 똑똑하게 작동 */}
        <button 
          onClick={handleSmartShare} 
          style={{ 
            width: '100%', padding: '16px', borderRadius: '16px', border: 'none', 
            background: '#fbbf24', color: '#451a03', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' 
          }}
        >
          📤 { /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "카톡/텔레로 결과 보내기" : "결과 메시지 복사하기" }
        </button>

        <button onClick={() => navigate('/')} style={{ width: '100%', padding: '14px', borderRadius: '16px', border: 'none', background: '#f1f5f9', color: '#94a3b8', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>🔄 다시 테스트하기</button>
      </div>

      {/* 애니메이션 스타일 */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -20px); }
          15% { opacity: 1; transform: translate(-50%, 0); }
          85% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -20px); }
        }
      `}</style>
    </div>
  );
}