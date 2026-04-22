import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';

export default function MatchPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);

  useEffect(() => {
    if (!result) navigate('/');
  }, [result, navigate]);

  if (!result) return null;

  const myType = moneyTypes[result.code];
  if (!myType) return <div>오류가 발생했어요.</div>;

  const bestType = moneyTypes[myType.bestMatch];
  const worstType = moneyTypes[myType.worstMatch];

  // 궁합 점수 계산 (간단 버전)
  const getCompatibility = (code1: string, code2: string) => {
    let match = 0;
    for (let i = 0; i < 4; i++) {
      if (code1[i] === code2[i]) match++;
    }
    // 같은 글자가 많으면 비슷한 타입 (중간 궁합)
    // bestMatch는 높은 점수, worstMatch는 낮은 점수
    if (code2 === myType.bestMatch) return 95;
    if (code2 === myType.worstMatch) return 25;
    return 50 + match * 10;
  };

  // 모든 유형과의 궁합 리스트
  const allMatches = Object.values(moneyTypes)
    .filter((t) => t.code !== result.code)
    .map((t) => ({
      ...t,
      score: getCompatibility(result.code, t.code),
    }))
    .sort((a, b) => b.score - a.score);

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#FF6B6B';
    if (score >= 60) return '#FFD93D';
    if (score >= 40) return '#6BCBFF';
    return '#B0BEC5';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return '💕 환상의 짝꿍';
    if (score >= 70) return '😊 잘 맞는 사이';
    if (score >= 50) return '🤝 무난한 관계';
    if (score >= 30) return '😅 노력이 필요해';
    return '💥 극과 극';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', paddingBottom: '40px' }}>
      {/* 상단 헤더 */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        padding: '24px 20px', color: 'white', textAlign: 'center',
      }}>
        <div style={{ fontSize: '36px', marginBottom: '4px' }}>💰</div>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '4px' }}>돈 궁합</h1>
        <p style={{ fontSize: '14px', opacity: 0.9 }}>
          {myType.emoji} {myType.name}의 돈 궁합은?
        </p>
      </div>

      <div style={{ padding: '20px' }}>

        {/* 최고 궁합 */}
        {bestType && (
          <div style={{
            background: 'white', borderRadius: '16px', padding: '20px',
            marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '2px solid #FF6B6B',
          }}>
            <div style={{
              display: 'inline-block', padding: '4px 10px', background: '#FF6B6B',
              color: 'white', borderRadius: '8px', fontSize: '12px',
              fontWeight: 'bold', marginBottom: '12px',
            }}>
              💕 최고의 궁합
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              {/* 나 */}
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '32px', marginBottom: '4px' }}>{myType.emoji}</div>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{myType.name}</p>
                <p style={{ fontSize: '10px', color: '#888' }}>#{result.code}</p>
              </div>

              {/* 하트 */}
              <div style={{
                fontSize: '28px', animation: 'heartbeat 1s infinite',
              }}>
                ❤️
              </div>

              {/* 상대 */}
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '32px', marginBottom: '4px' }}>{bestType.emoji}</div>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{bestType.name}</p>
                <p style={{ fontSize: '10px', color: '#888' }}>#{bestType.code}</p>
              </div>
            </div>

            {/* 궁합 점수 바 */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>궁합 점수</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#FF6B6B' }}>95%</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: '#F0F0F0', borderRadius: '5px' }}>
                <div style={{
                  width: '95%', height: '100%', borderRadius: '5px',
                  background: 'linear-gradient(90deg, #FF6B6B, #FF8E53)',
                }} />
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              서로 다른 소비 성향이 오히려 시너지를 만들어요!
              {myType.code[2] !== bestType.code[2]
                ? ' 한 명이 쓰고 한 명이 모으는 완벽한 밸런스!'
                : ' 비슷한 금전 감각으로 갈등이 적어요!'}
            </p>
          </div>
        )}

        {/* 최악 궁합 */}
        {worstType && (
          <div style={{
            background: 'white', borderRadius: '16px', padding: '20px',
            marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '2px solid #B0BEC5',
          }}>
            <div style={{
              display: 'inline-block', padding: '4px 10px', background: '#B0BEC5',
              color: 'white', borderRadius: '8px', fontSize: '12px',
              fontWeight: 'bold', marginBottom: '12px',
            }}>
              💥 주의할 궁합
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '32px', marginBottom: '4px' }}>{myType.emoji}</div>
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{myType.name}</p>
              </div>
              <div style={{ fontSize: '28px' }}>⚡</div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '32px', marginBottom: '4px' }}>{worstType.emoji}</div>
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{worstType.name}</p>
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>궁합 점수</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#B0BEC5' }}>25%</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: '#F0F0F0', borderRadius: '5px' }}>
                <div style={{
                  width: '25%', height: '100%', borderRadius: '5px',
                  background: '#B0BEC5',
                }} />
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              소비 가치관이 달라 충돌할 수 있어요. 하지만 서로를 이해하려는 노력이 있다면 오히려 성장할 수 있는 관계!
            </p>
          </div>
        )}

        {/* 전체 궁합 리스트 */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            📋 전체 유형별 궁합
          </h3>
          {allMatches.map((match, index) => (
            <div key={match.code} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 0',
              borderBottom: index < allMatches.length - 1 ? '1px solid #F0F0F0' : 'none',
            }}>
              <span style={{ fontSize: '24px' }}>{match.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>
                  {match.name}
                </p>
                <p style={{ fontSize: '11px', color: '#888' }}>
                  {getScoreLabel(match.score)}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  fontSize: '16px', fontWeight: 'bold',
                  color: getScoreColor(match.score),
                }}>
                  {match.score}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 버튼들 */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => navigate('/result')} style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: 'white', color: '#333', border: '1px solid #DDD',
            borderRadius: '12px', cursor: 'pointer',
          }}>
            ← 결과로
          </button>
          <button onClick={() => navigate('/')} style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: '#FF6B6B', color: 'white', border: 'none',
            borderRadius: '12px', cursor: 'pointer',
          }}>
            다시 하기
          </button>
        </div>
      </div>

      {/* 하트 애니메이션 */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
