import { useEffect, useState } from 'react';

interface ThermometerProps {
  temperature: number; // 0~100
}

export default function Thermometer({ temperature }: ThermometerProps) {
  const [animatedTemp, setAnimatedTemp] = useState(0);

  useEffect(() => {
    // 0에서 목표 온도까지 애니메이션
    let current = 0;
    const target = temperature;
    const duration = 1500; // 1.5초
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedTemp(Math.round(current));
    }, interval);

    return () => clearInterval(timer);
  }, [temperature]);

  // 온도에 따른 색상
  const getColor = (temp: number) => {
    if (temp >= 80) return '#FF4444';
    if (temp >= 60) return '#FF8C42';
    if (temp >= 40) return '#FFD93D';
    if (temp >= 20) return '#6BCBFF';
    return '#4A90D9';
  };

  const color = getColor(animatedTemp);
  const fillHeight = (animatedTemp / 100) * 200; // 최대 높이 200px

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      {/* 온도 숫자 */}
      <div style={{
        fontSize: '48px', fontWeight: 'bold', color: color,
        transition: 'color 0.3s ease',
      }}>
        {animatedTemp}°
      </div>

      {/* 온도계 본체 */}
      <div style={{ position: 'relative', width: '60px', height: '240px' }}>
        {/* 온도계 유리관 */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          width: '28px', height: '200px', bottom: '40px',
          background: '#E8E8E8', borderRadius: '14px',
          overflow: 'hidden', border: '2px solid #DDD',
        }}>
          {/* 채워지는 부분 */}
          <div style={{
            position: 'absolute', bottom: 0, width: '100%',
            height: `${fillHeight}px`,
            background: `linear-gradient(to top, ${color}, ${color}dd)`,
            borderRadius: '0 0 12px 12px',
            transition: 'height 0.1s ease, background 0.3s ease',
          }} />

          {/* 눈금 표시 */}
          {[20, 40, 60, 80].map((mark) => (
            <div key={mark} style={{
              position: 'absolute',
              bottom: `${(mark / 100) * 200}px`,
              width: '100%', height: '1px',
              background: 'rgba(255,255,255,0.5)',
            }}>
              <span style={{
                position: 'absolute', right: '-28px',
                fontSize: '9px', color: '#AAA', top: '-6px',
              }}>
                {mark}
              </span>
            </div>
          ))}
        </div>

        {/* 온도계 구슬 (하단 원형) */}
        <div style={{
          position: 'absolute', bottom: '0', left: '50%',
          transform: 'translateX(-50%)',
          width: '44px', height: '44px', borderRadius: '50%',
          background: color, border: '2px solid #DDD',
          transition: 'background 0.3s ease',
          boxShadow: `0 0 12px ${color}66`,
        }} />
      </div>

      {/* 온도 라벨 */}
      <div style={{
        fontSize: '13px', color: '#888', textAlign: 'center',
        marginTop: '4px',
      }}>
        {animatedTemp >= 80 ? '🔥 과열 소비!' :
         animatedTemp >= 60 ? '😊 따뜻한 소비' :
         animatedTemp >= 40 ? '😌 적정 온도' :
         animatedTemp >= 20 ? '🧊 쿨한 절약' :
         '🥶 극한 절약'}
      </div>

      {/* 온도 바 (가로형 보조) */}
      <div style={{
        width: '200px', height: '8px', background: '#E8E8E8',
        borderRadius: '4px', overflow: 'hidden', marginTop: '8px',
      }}>
        <div style={{
          width: `${animatedTemp}%`, height: '100%',
          background: `linear-gradient(90deg, #4A90D9, #6BCBFF, #FFD93D, #FF8C42, #FF4444)`,
          borderRadius: '4px',
          transition: 'width 0.1s ease',
        }} />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        width: '200px', fontSize: '10px', color: '#AAA',
      }}>
        <span>절약</span>
        <span>소비</span>
      </div>
    </div>
  );
}
