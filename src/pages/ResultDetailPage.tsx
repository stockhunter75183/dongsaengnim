// src/pages/ResultDetailPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';
import CPARecommend from '../components/CPARecommend';

export default function ResultDetailPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);

  if (!result) {
    navigate('/', { replace: true });
    return null;
  }

  const type = moneyTypes[result.code];
  if (!type) {
    navigate('/', { replace: true });
    return null;
  }

  const bestMatch = type.bestMatch ? moneyTypes[type.bestMatch] : null;
  const worstMatch = type.worstMatch ? moneyTypes[type.worstMatch] : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)',
      padding: '20px',
      fontFamily: "'Pretendard', sans-serif",
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img src={type.characterImage} alt={type.animal}
          style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
        <h1 style={{ fontSize: '22px', margin: '12px 0 4px' }}>
          {type.animal} — {type.name}
        </h1>
        <p style={{ fontSize: '14px', color: '#888' }}>{type.title}</p>
      </div>

      {/* 섹션 1: 상세 분석 */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '20px',
        marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>🔍 상세 분석</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
          {type.description}
        </p>
      </div>

      {/* 섹션 2: 강점 & 팁 */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '20px',
        marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>💪 강점</h2>
        <ul style={{
          fontSize: '14px', lineHeight: '1.8', color: '#444',
          paddingLeft: '20px', marginBottom: '16px',
        }}>
          {type.strengths?.map((s: string, i: number) => <li key={i}>{s}</li>)}
        </ul>
        <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>💡 돈생님의 팁</h2>
        <ul style={{
          fontSize: '14px', lineHeight: '1.8', color: '#444', paddingLeft: '20px',
        }}>
          {type.tips?.map((t: string, i: number) => <li key={i}>{t}</li>)}
        </ul>
      </div>

      {/* 섹션 3: 궁합 */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '20px',
        marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>💕 돈 궁합</h2>
        {bestMatch && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: '#f0fdf4', borderRadius: '12px', padding: '14px',
            marginBottom: '12px',
          }}>
            <img src={bestMatch.characterImage} alt={bestMatch.animal}
              style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            <div>
              <p style={{ fontSize: '13px', color: '#16a34a', fontWeight: 'bold' }}>
                ✅ 최고의 궁합
              </p>
              <p style={{ fontSize: '15px', fontWeight: '600' }}>
                {bestMatch.animal} — {bestMatch.name}
              </p>
            </div>
          </div>
        )}
        {worstMatch && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: '#fef2f2', borderRadius: '12px', padding: '14px',
          }}>
            <img src={worstMatch.characterImage} alt={worstMatch.animal}
              style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            <div>
              <p style={{ fontSize: '13px', color: '#dc2626', fontWeight: 'bold' }}>
                ⚠️ 주의할 궁합
              </p>
              <p style={{ fontSize: '15px', fontWeight: '600' }}>
                {worstMatch.animal} — {worstMatch.name}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 섹션 4: 금융상품 추천 */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '20px',
        marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <CPARecommend typeCode={result.code} />
      </div>

      {/* 돈생님 한마디 */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '20px',
        marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        display: 'flex', gap: '12px', alignItems: 'flex-start',
      }}>
        <img src="/characters/teacher-cat.png" alt="돈생님"
          style={{ width: '48px', height: '48px', objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: '13px', color: '#888', marginBottom: '4px', fontWeight: 'bold' }}>
            🐱 돈생님 한마디
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333' }}>
            {type.comment}
          </p>
        </div>
      </div>

      {/* 버튼들 */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '10px',
        marginTop: '20px', paddingBottom: '40px',
      }}>
        <button onClick={() => navigate('/match')} style={{
          padding: '16px', borderRadius: '14px', border: 'none',
          background: '#10b981', color: 'white', fontSize: '16px',
          fontWeight: 'bold', cursor: 'pointer',
        }}>
          💕 돈 궁합 보기
        </button>
        <button onClick={() => navigate('/result')} style={{
          padding: '16px', borderRadius: '14px', border: '2px solid #10b981',
          background: 'white', color: '#10b981', fontSize: '16px',
          fontWeight: 'bold', cursor: 'pointer',
        }}>
          ← 결과 요약으로
        </button>
        <button onClick={() => navigate('/')} style={{
          padding: '16px', borderRadius: '14px', border: 'none',
          background: '#f3f4f6', color: '#666', fontSize: '14px', cursor: 'pointer',
        }}>
          🔄 테스트 다시 하기
        </button>
      </div>
    </div>
  );
}
