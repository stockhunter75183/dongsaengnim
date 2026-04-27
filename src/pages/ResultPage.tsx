// src/pages/ResultPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);

  // 결과가 없으면 (직접 URL 접근 등) 홈으로
  if (!result) {
    navigate('/');
    return null;
  }

  console.log('결과 코드:', result.code, '매칭 유형:', moneyTypes[result.code]);
  const type = moneyTypes[result.code.trim().toUpperCase()];

  // 혹시 코드가 매칭 안 되면 기본값
  if (!type) {
    return <div>결과를 불러오는 중 오류가 발생했어요. 다시 시도해주세요.</div>;
  }

  // 온도에 따른 색상
  const tempColor =
    result.temperature >= 70 ? '#FF6B6B' :
    result.temperature >= 40 ? '#FFD93D' :
    '#6BCBFF';

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      background: '#F8F9FA',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* 소비 온도 */}
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: tempColor,
        marginTop: '20px',
      }}>
        {result.temperature}°
      </div>
      <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px' }}>
        나의 소비 온도
      </p>

      {/* 캐릭터 이미지 */}
      <img
        src={type.characterImage}
        alt={type.animal}
        style={{
          width: '180px',
          height: '180px',
          objectFit: 'contain',
          marginBottom: '8px',
        }}
      />

      {/* 유형 이름 (동물 + 유형명) */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
        {type.animal} — {type.name}
      </h1>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '16px', textAlign: 'center' }}>
        {type.title}
      </p>

      {/* 코드 배지 */}
      <div style={{
        display: 'inline-block',
        padding: '8px 16px',
        background: '#2EC4B6',
        color: 'white',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '24px',
      }}>
    {type.emoji} {type.name}
      </div>

      {/* 설명 카드 */}
      <div style={{
        width: '100%',
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#333' }}>
          {type.description}
        </p>
      </div>

      {/* 돈생님 코멘트 (고양이 이미지 + 말풍선) */}
      <div style={{
        width: '100%',
        background: '#FFF9E6',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '24px',
        border: '1px solid #FFE08A',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <img
            src="/characters/teacher-cat.png"
            alt="돈생님"
            style={{
              width: '48px',
              height: '48px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ fontSize: '12px', color: '#B8860B', fontWeight: 'bold', marginBottom: '4px' }}>
              돈생님 한마디
            </p>
            <p style={{ fontSize: '14px', color: '#B8860B', lineHeight: 1.5 }}>
              "{type.comment}"
            </p>
          </div>
        </div>
      </div>

      {/* 버튼들 */}
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <button
          onClick={() => navigate('/result/detail')}
          style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: '#2EC4B6', color: 'white', border: 'none',
            borderRadius: '12px', cursor: 'pointer',
          }}
        >
          상세 보기
        </button>
        <button
          onClick={() => navigate('/match')}
          style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: '#FF6B6B', color: 'white', border: 'none',
            borderRadius: '12px', cursor: 'pointer',
          }}
        >
          돈 궁합 보기
        </button>
      </div>

      {/* 다시하기 */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '16px', padding: '14px', fontSize: '15px',
          background: 'transparent', color: '#888', border: '1px solid #DDD',
          borderRadius: '12px', cursor: 'pointer', width: '100%',
        }}
      >
        테스트 다시 하기
      </button>
    </div>
  );
}
