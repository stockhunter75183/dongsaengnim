import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';
import CPARecommend from '../components/CPARecommend';

export default function ResultDetailPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);

 useEffect(() => {
  if (!result) navigate('/');
}, [result, navigate]);

if (!result) return null;


  const type = moneyTypes[result.code];
  if (!type) return <div>오류가 발생했어요.</div>;

  const tempColor =
    result.temperature >= 70 ? '#FF6B6B' :
    result.temperature >= 40 ? '#FFD93D' : '#6BCBFF';

  // 축별 해석
  const axisLabels = {
    HC: result.axisScores.HC <= 6
      ? { icon: '🔥', label: '뜨거운 소비', desc: '충동적이고 즉흥적인 소비 성향' }
      : { icon: '🧊', label: '차가운 계획', desc: '계획적이고 신중한 소비 성향' },
    TS: result.axisScores.TS <= 6
      ? { icon: '✨', label: '트렌드 추구', desc: '유행과 감성을 중시하는 소비' }
      : { icon: '🔧', label: '실용 추구', desc: '가성비와 내구성을 중시하는 소비' },
    CS: result.axisScores.CS <= 6
      ? { icon: '💸', label: '소비 지향', desc: '현재의 행복에 투자하는 스타일' }
      : { icon: '🏦', label: '저축 지향', desc: '미래의 안정을 위해 모으는 스타일' },
    ST: result.axisScores.ST <= 6
      ? { icon: '🧘', label: '솔로 소비', desc: '혼자 판단하고 결정하는 소비' }
      : { icon: '👥', label: '함께 소비', desc: '사람들과 나누고 공유하는 소비' },
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', paddingBottom: '40px' }}>
      {/* 상단 헤더 */}
      <div style={{
        background: 'linear-gradient(135deg, #2EC4B6 0%, #0B3D91 100%)',
        padding: '24px 20px', color: 'white', textAlign: 'center',
      }}>
        <div style={{ fontSize: '36px', marginBottom: '4px' }}>{type.emoji}</div>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '4px' }}>{type.name}</h1>
        <div style={{
          display: 'inline-block', padding: '4px 12px', background: 'rgba(255,255,255,0.2)',
          borderRadius: '12px', fontSize: '14px', marginBottom: '8px',
        }}>
          소비 온도 <span style={{ fontWeight: 'bold', color: tempColor }}>{result.temperature}°</span>
        </div>
      </div>

      <div style={{ padding: '20px' }}>

        {/* 섹션 1: 축별 분석 */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            📊 나의 소비 성향 분석
          </h3>
          {Object.entries(axisLabels).map(([key, val]) => {
            const score = result.axisScores[key as keyof typeof result.axisScores];
            const percent = ((score - 3) / 6) * 100;
            return (
              <div key={key} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{val.icon} {val.label}</span>
                  <span style={{ fontSize: '12px', color: '#888' }}>{val.desc}</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E8E8E8', borderRadius: '4px' }}>
                  <div style={{
                    width: `${percent}%`, height: '100%', borderRadius: '4px',
                    background: 'linear-gradient(90deg, #2EC4B6, #0B3D91)',
                    transition: 'width 0.5s ease',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 섹션 2: 나의 장점 */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
            💪 나의 소비 장점
          </h3>
          {type.strengths.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 0', borderBottom: i < type.strengths.length - 1 ? '1px solid #F0F0F0' : 'none',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#E8F8F5', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '14px', fontWeight: 'bold',
                color: '#2EC4B6', flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: '14px', color: '#333', lineHeight: 1.5 }}>{s}</p>
            </div>
          ))}
        </div>

        {/* 섹션 3: 돈 관리 팁 */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
            💡 돈생님의 맞춤 팁
          </h3>
          {type.tips.map((tip, i) => (
            <div key={i} style={{
              background: '#F8F9FA', borderRadius: '12px', padding: '14px',
              marginBottom: i < type.tips.length - 1 ? '10px' : '0',
            }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.6 }}>
                {i === 0 ? '🥇 ' : i === 1 ? '🥈 ' : '🥉 '}{tip}
              </p>
            </div>
          ))}
        </div>

        {/* 섹션 4: 금융상품 추천 */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <CPARecommend typeCode={result.code} />
        </div>

        {/* 돈생님 코멘트 */}
        <div style={{
          background: '#FFF9E6', borderRadius: '16px', padding: '16px 20px',
          marginBottom: '24px', border: '1px solid #FFE08A',
        }}>
          <p style={{ fontSize: '14px', color: '#B8860B', lineHeight: 1.6 }}>
            💬 돈생님 한마디: {type.comment}
          </p>
        </div>

        {/* 버튼들 */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
          <button onClick={() => navigate('/result')} style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: 'white', color: '#333', border: '1px solid #DDD',
            borderRadius: '12px', cursor: 'pointer',
          }}>
            ← 결과 요약
          </button>
          <button onClick={() => navigate('/')} style={{
            flex: 1, padding: '14px', fontSize: '15px', fontWeight: 'bold',
            background: '#2EC4B6', color: 'white', border: 'none',
            borderRadius: '12px', cursor: 'pointer',
          }}>
            다시 하기
          </button>
        </div>
      </div>
    </div>
  );
}
