import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore';
import { moneyTypes } from '../data/types';
import Thermometer from '../components/Thermometer';
import { shareResult, shareImage } from '../utils/share';
import { generateImage } from '../utils/generateImage';

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useTestStore((s) => s.result);
  const [shareMsg, setShareMsg] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!result) navigate('/');
  }, [result, navigate]);

  if (!result) return null;

  const type = moneyTypes[result.code];
  if (!type) return <div>결과를 불러오는 중 오류가 발생했어요.</div>;

  const handleShare = async () => {
    const status = await shareResult(result.code, type.name, result.temperature);
    if (status === 'copied') {
      setShareMsg('링크가 복사됐어요! 친구에게 붙여넣기 하세요 📋');
      setTimeout(() => setShareMsg(''), 3000);
    }
  };

  const handleImageShare = async () => {
    setIsGenerating(true);
    // 약간의 딜레이를 줘서 렌더링 완료 보장
    await new Promise((r) => setTimeout(r, 500));
    const dataUrl = await generateImage('result-card');
    setIsGenerating(false);

    if (dataUrl) {
      const status = await shareImage(dataUrl, type.name);
      if (status === 'downloaded') {
        setShareMsg('이미지가 저장됐어요! 📸');
        setTimeout(() => setShareMsg(''), 3000);
      }
    } else {
      setShareMsg('이미지 생성에 실패했어요 😢');
      setTimeout(() => setShareMsg(''), 3000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', padding: '20px', background: '#F8F9FA',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* 결과 카드 (이미지 캡처 대상) */}
      <div id="result-card" style={{
        width: '100%', maxWidth: '400px', background: '#F8F9FA',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{ marginTop: '10px', marginBottom: '24px' }}>
          <Thermometer temperature={result.temperature} />
        </div>

        <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>나의 소비 온도</p>

        <div style={{ fontSize: '40px', marginBottom: '8px' }}>{type.emoji}</div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>{type.name}</h1>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '16px', textAlign: 'center' }}>{type.title}</p>

        <div style={{
          display: 'inline-block', padding: '8px 16px', background: '#2EC4B6',
          color: 'white', borderRadius: '20px', fontSize: '14px',
          fontWeight: 'bold', marginBottom: '24px',
        }}>
          #{result.code}
        </div>

        <div style={{
          width: '100%', background: 'white', borderRadius: '16px',
          padding: '20px', marginBottom: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#333' }}>{type.description}</p>
        </div>

        <div style={{
          width: '100%', background: '#FFF9E6', borderRadius: '16px',
          padding: '16px 20px', marginBottom: '16px', border: '1px solid #FFE08A',
        }}>
          <p style={{ fontSize: '14px', color: '#B8860B' }}>💬 돈생님 한마디: {type.comment}</p>
        </div>

        <p style={{ fontSize: '11px', color: '#CCC', textAlign: 'center' }}>
          dongsaengnim.app | 나의 소비 MBTI 테스트
        </p>
      </div>

      {/* === 여기부터 버튼 영역 (캡처 대상 밖) === */}
      <div style={{ width: '100%', maxWidth: '400px', marginTop: '16px' }}>

        {/* 공유 버튼 */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <button
            type="button"
            onClick={handleShare}
            style={{
              flex: 1, padding: '14px', fontSize: '14px', fontWeight: 'bold',
              background: '#FEE500', color: '#3C1E1E', border: 'none',
              borderRadius: '12px', cursor: 'pointer',
            }}
          >
            🔗 링크 공유
          </button>
          <button
            type="button"
            onClick={handleImageShare}
            disabled={isGenerating}
            style={{
              flex: 1, padding: '14px', fontSize: '14px', fontWeight: 'bold',
              background: '#7C4DFF', color: 'white', border: 'none',
              borderRadius: '12px', cursor: 'pointer',
              opacity: isGenerating ? 0.6 : 1,
            }}
          >
            {isGenerating ? '생성 중...' : '📸 이미지 저장'}
          </button>
        </div>

        {/* 공유 메시지 */}
        {shareMsg && (
          <div style={{
            padding: '10px 16px', background: '#E8F5E9', borderRadius: '8px',
            fontSize: '13px', color: '#2E7D32', marginBottom: '12px', textAlign: 'center',
          }}>
            {shareMsg}
          </div>
        )}

        {/* 네비게이션 버튼 */}
        <button type="button" onClick={() => navigate('/result/detail')} style={{
          padding: '14px', fontSize: '15px', fontWeight: 'bold',
          background: '#2EC4B6', color: 'white', border: 'none',
          borderRadius: '12px', cursor: 'pointer', width: '100%', marginBottom: '10px',
        }}>
          📊 상세 분석 & 금융상품 추천 보기
        </button>

        <button type="button" onClick={() => navigate('/match')} style={{
          padding: '14px', fontSize: '15px', fontWeight: 'bold',
          background: '#FF6B6B', color: 'white', border: 'none',
          borderRadius: '12px', cursor: 'pointer', width: '100%', marginBottom: '10px',
        }}>
          💕 돈 궁합 보기
        </button>

        <button type="button" onClick={() => navigate('/')} style={{
          padding: '14px', fontSize: '15px',
          background: 'transparent', color: '#888', border: '1px solid #DDD',
          borderRadius: '12px', cursor: 'pointer', width: '100%',
        }}>
          테스트 다시 하기
        </button>
      </div>
    </div>
  );
}
