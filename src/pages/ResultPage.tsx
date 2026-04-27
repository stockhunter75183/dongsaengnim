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
    return <div>결과를 불러오는 중 오류가 발생했어요. 다시 시도해주세요.</div>;
  }

  const tempColor =
    result.temperature >= 70 ? '#FF6B6B' :
    result.temperature >= 40 ? '#FFD93D' :
    '#6BCBFF';

  const handleShare = async () => {
    const shareText = `나의 소비 유형은 "${type.animal} — ${type.name}"이래! 🌡️ 소비 온도 ${result.temperature}°\n너도 테스트 해봐!\nhttps://dongsaengnim.vercel.app`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: '돈생님 - 나의 소비 온도 테스트',
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('링크가 복사되었어요! 붙여넣기로 공유하세요.');
      }
    } catch (e) {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('링크가 복사되었어요! 붙여넣기로 공유하세요.');
      } catch {
        alert('공유에 실패했어요. 링크를 직접 복사해주세요.');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
      padding: '20px',
      fontFamily: "'Pretendard', sans-serif",
    }}>
      {/* 온도 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{
          fontSize: '48px', fontWeight: 'bold', color: tempColor, margin: '0',
        }}>
          {result.temperature}°
        </p>
        <p style={{ fontSize: '14px', color: '#888' }}>나의 소비 온도</p>
      </div>

      {/* 캐릭터 이미지 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={type.characterImage}
          alt={type.animal}
          style={{ width: '180px', height: '180px', objectFit: 'contain' }}
        />
      </div>

      {/* 유형 이름 */}
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <h1 style={{ fontSize: '24px', margin: '0' }}>
          {type.animal} — {type.name}
        </h1>
        <p style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>
          {type.title}
        </p>
      </div>

      {/* 유형 태그 */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          display: 'inline-block',
          background: '#e0f2fe',
          color: '#0284c7',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
        }}>
          {type.emoji} {type.name}
        </div>
      </div>

      {/* 설명 카드 */}
      <div style={{
        width: '100%',
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
      }}>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#333' }}>
          {type.description}
        </p>
      </div>

      {/* 돈생님 한마디 */}
      <div style={{
        background: '#fffde7',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '24px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <img src="/characters/teacher-cat.png" alt="돈생님"
          style={{ width: '48px', height: '48px', objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: '13px', color: '#888', marginBottom: '4px', fontWeight: 'bold' }}>
            돈생님 한마디
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', margin: 0 }}>
            {type.comment}
          </p>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px' }}>
        {/* 상세보기 + 궁합보기 */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => navigate('/result/detail')}
            style={{
              flex: 1, padding: '16px', borderRadius: '14px', border: 'none',
              background: '#10b981', color: 'white', fontSize: '16px',
              fontWeight: 'bold', cursor: 'pointer',
            }}
          >
            상세 보기
          </button>
          <button
            onClick={() => navigate('/match')}
            style={{
              flex: 1, padding: '16px', borderRadius: '14px', border: 'none',
              background: '#f87171', color: 'white', fontSize: '16px',
              fontWeight: 'bold', cursor: 'pointer',
            }}
          >
            돈 궁합 보기
          </button>
        </div>

        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '14px',
            border: 'none',
            background: '#FEE500',
            color: '#3C1E1E',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          📤 결과 공유하기
        </button>

        {/* 다시하기 */}
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '14px',
            border: '2px solid #e2e8f0',
            background: 'white',
            color: '#666',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          🔄 테스트 다시 하기
        </button>
      </div>
    </div>
  );
}
