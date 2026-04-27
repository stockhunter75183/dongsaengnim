// src/components/CPARecommend.tsx

interface Product {
  category: string;
  categoryColor: string;
  name: string;
  provider: string;
  description: string;
}

const productsByType: Record<string, Product[]> = {
  HTCS: [
    { category: '카드', categoryColor: '#FF6B6B', name: '토스 FLEX 신용카드', provider: '토스뱅크', description: '쇼핑·외식 5% 캐시백으로 플렉스 극대화' },
    { category: '저축', categoryColor: '#2EC4B6', name: '26주 적금 챌린지', provider: '토스뱅크', description: '매주 조금씩 늘려가는 자동 저축 습관 만들기' },
  ],
  HTCT: [
    { category: '카드', categoryColor: '#FF6B6B', name: '토스 모임통장 체크카드', provider: '토스뱅크', description: '모임비 관리와 더치페이가 한번에' },
    { category: '보험', categoryColor: '#9B59B6', name: '해외여행자 보험', provider: '토스 인슈어런스', description: '친구들과 여행 전 3초 가입, 1일 690원부터' },
  ],
  HSTS: [
    { category: '저축', categoryColor: '#2EC4B6', name: '토스 목표 저금통', provider: '토스', description: '세일로 아낀 금액만큼 자동 저축해보세요' },
    { category: '투자', categoryColor: '#3498DB', name: '소액 주식 투자', provider: '토스증권', description: '1000원부터 시작하는 주식 투자' },
  ],
  HSTT: [
    { category: '카드', categoryColor: '#FF6B6B', name: '토스 모임통장 체크카드', provider: '토스뱅크', description: '모임비 자동 정산, 공동구매 관리에 딱' },
    { category: '투자', categoryColor: '#3498DB', name: '투자 스터디 모임', provider: '토스증권', description: '친구와 함께 소액 투자 시작하기' },
  ],
  CTCS: [
    { category: '투자', categoryColor: '#3498DB', name: 'ETF 자동투자', provider: '토스증권', description: '매월 자동으로 분산투자, 계획적 자산 증식' },
    { category: '저축', categoryColor: '#2EC4B6', name: '시즌별 쇼핑 예산 적금', provider: '토스뱅크', description: '분기별 쇼핑 예산을 미리 모아두세요' },
  ],
  CTCT: [
    { category: '카드', categoryColor: '#FF6B6B', name: '토스 경조사 봉투', provider: '토스', description: '경조사비 송금과 메시지를 한번에' },
    { category: '투자', categoryColor: '#3498DB', name: '함께 투자 랭킹', provider: '토스증권', description: '친구들과 수익률 비교하며 재테크' },
  ],
  CSSS: [
    { category: '투자', categoryColor: '#3498DB', name: '예금 금리 비교', provider: '토스', description: '최고 금리 예적금을 한눈에 비교하세요' },
    { category: '투자', categoryColor: '#3498DB', name: 'CMA 통장', provider: '토스증권', description: '하루만 맡겨도 이자가 붙는 똑똑한 통장' },
  ],
  CSST: [
    { category: '저축', categoryColor: '#2EC4B6', name: '토스 목표 저금통', provider: '토스', description: '함께 목표 설정하고 저축하기' },
    { category: '투자', categoryColor: '#3498DB', name: '소액 주식 투자', provider: '토스증권', description: '1000원부터 시작하는 주식 투자' },
  ],
};

interface Props {
  typeCode: string;
}

export default function CPARecommend({ typeCode }: Props) {
  const products = productsByType[typeCode] || productsByType['CSST'];

  return (
    <div style={{
      width: '100%',
      background: 'white',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
        💰 돈생님 추천 금융상품
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px',
              background: '#F8F9FA',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#F0F0F0'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F8F9FA'; }}
          >
            {/* 카테고리 배지 */}
            <div style={{
              minWidth: '48px',
              height: '48px',
              background: product.categoryColor,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '13px',
              fontWeight: 'bold',
            }}>
              {product.category}
            </div>

            {/* 상품 정보 */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '2px' }}>
                {product.name}
              </p>
              <p style={{ fontSize: '12px', color: '#888', marginBottom: '2px' }}>
                {product.provider}
              </p>
              <p style={{ fontSize: '13px', color: '#2EC4B6' }}>
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
