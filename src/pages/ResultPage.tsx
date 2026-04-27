// src/pages/ResultPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);

  if (!result) {
    navigate('/');
    return null;
  }

  const type = moneyTypes[result.code];

  if (!type) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>결과를 불러오는 중 오류가 발생했어요.</p>
        <button onClick={() => navigate('/')}>처음으로 돌아가기</button>
      </div>
    );
  }

  const tempColor =
    result.temperature >= 70 ? '#FF6B6B' :
    result.temperature >= 40 ? '#FFD93D' :
    '#6BCBFF';

  // [100% 성공 보장 공유 로직]
  // 텔레그램 전송 버튼 먹통을 방지하기 위해 텍스트를 아주 단순하게 구성합니다.
  const shareUrl = "https://dongsaengnim.vercel.app";
  const shareText = `나의 소비 동물은 [${type.animal}]! 🌡️ 소비 온도: ${result.temperature}도\n\n지금 테스트 하기:\n${shareUrl}`;

  const handleShare = async () => {
    // 1. 모바일 시스템 공유 시도
    if (navigator.share) {
      try {
        await navigator.share({
          text: shareText, // URL 필드를 따로 쓰지 않고 text에 합쳐서 보내는 것이 가장 안전합니다.
        });
        return;
      } catch (e) {
        // 사용자가 취소한 게 아니라 에러가 난 경우에만 클립보드로 넘어감
        if ((e as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('공유 메시지가 복사되었습니다!\n원하는 곳에 붙여넣기(Paste) 해주세요.');
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
      boxSizing: 'border-box'
    }}>
      {/* 온도 표시 */}
      <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '30px' }}>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: tempColor, margin: '0' }}>
          {result.temperature}°
        </p>
        <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>나의 소비 온도</p>
      </div>

      {/* 캐릭터 이미지 */}
      <img
        src={type.characterImage}
        alt={type.animal}
        style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '20px' }}
      />

      {/* 유형 이름 */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', margin: '0' }}>
          {type.animal} — {type.name}
        </h1>
        <p style={{ fontSize: '15px', color: '#64748b', marginTop: '6px' }}>{type.title}</p>
        
        <div style={{
          display: 'inline-block',
          marginTop: '12px',
          padding: '6px 16px',
          background: '#e2e8f0',
          color: '#475569',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '700'
        }}>
          #{result.code}
        </div>
      </div>

      {/* 설명 카드 */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'white',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '16px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        boxSizing: 'border-box'
      }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155', margin: '0' }}>
          {type.description}
        </p>
      </div>

      {/* 돈생님 코멘트 */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: '#fefce8',
        borderRadius: '20px',
        padding: '16px 20px',
        marginBottom: '30px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        border: '1px solid #fef08a',
        boxSizing: 'border-box'
      }}>
        <img src="/characters/teacher-cat.png" alt="돈생님"
          style={{ width: '44px', height: '44px', objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: '12px', color: '#a16207', fontWeight: 'bold', marginBottom: '4px' }}>🐱 돈생님 한마디</p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#713f12', margin: 0 }}>"{type.comment}"</p>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => navigate('/result/detail')}
            style={{
              flex: 1, padding: '16px', borderRadius: '16px', border: 'none',
              background: '#10b981', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
            }}
          >
            상세 보기
          </button>
          <button
            onClick={() => navigate('/match')}
            style={{
              flex: 1, padding: '16px', borderRadius: '16px', border: 'none',
              background: '#f43f5e', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
            }}
          >
            돈 궁합 보기
          </button>
        </div>

        {/* 메인 공유 버튼 */}
        <button
          onClick={handleShare}
          style={{
            width: '100%', padding: '16px', borderRadius: '16px', border: 'none',
            background: '#fbbf24', color: '#451a03', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
          }}
        >
          📤 결과 공유하기
        </button>

        {/* 링크 복사 전용 버튼 (가장 확실한 보험) */}
        <button
          onClick={copyToClipboard}
          style={{
            width: '100%', padding: '14px', borderRadius: '16px', border: '1px solid #cbd5e1',
            background: 'white', color: '#64748b', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
          }}
        >
          🔗 링크만 복사하기
        </button>

        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%', padding: '14px', borderRadius: '16px', border: 'none',
            background: '#f1f5f9', color: '#94a3b8', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '10px'
          }}
        >
          🔄 다시 테스트하기
        </button>
      </div>
    </div>
  );
}