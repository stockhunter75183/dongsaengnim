interface Product {
  name: string;
  company: string;
  description: string;
  tag: string;
  color: string;
}

const productMap: Record<string, Product[]> = {
  HTCS: [
    { name: '토스 먼저 이자 받는 예금', company: '토스뱅크', description: '매월 이자를 먼저 받아서 소비에 활용 가능!', tag: '예금', color: '#3182F6' },
    { name: '카카오페이 26주 적금', company: '카카오뱅크', description: '매주 소액 저축으로 습관 만들기', tag: '적금', color: '#FEE500' },
  ],
  HTCT: [
    { name: '토스 모임통장', company: '토스뱅크', description: '친구들과 함께 모으는 모임통장', tag: '모임', color: '#3182F6' },
    { name: '카카오페이 저금통', company: '카카오뱅크', description: '잔돈 자동 저축으로 부담 없이 시작', tag: '저축', color: '#FEE500' },
  ],
  HSTS: [
    { name: '토스 목표 저금통', company: '토스', description: '목표 금액 설정하고 자동 저축', tag: '저축', color: '#3182F6' },
    { name: 'CMA 통장', company: '증권사', description: '자유입출금 + 예금보다 높은 이자', tag: '투자', color: '#00C853' },
  ],
  HSTT: [
    { name: '토스 모임통장', company: '토스뱅크', description: '모임비 관리에 최적화된 통장', tag: '모임', color: '#3182F6' },
    { name: '주간 자동이체 적금', company: '시중은행', description: '매주 소액씩 자동 저축', tag: '적금', color: '#FF9800' },
  ],
  CTCS: [
    { name: 'ETF 자동투자', company: '토스증권', description: '매월 자동으로 ETF에 분산투자', tag: '투자', color: '#3182F6' },
    { name: '파킹통장', company: '토스뱅크', description: '쓰기 전까지 이자가 붙는 통장', tag: '예금', color: '#00C853' },
  ],
  CTCT: [
    { name: '토스 함께 투자하기', company: '토스증권', description: '친구와 함께 소액 투자 시작', tag: '투자', color: '#3182F6' },
    { name: '경조사 예산 통장', company: '시중은행', description: '연간 경조사비를 미리 준비', tag: '저축', color: '#FF9800' },
  ],
  CSSS: [
    { name: 'ISA 계좌', company: '증권사', description: '절세 혜택으로 투자 수익 극대화', tag: '절세', color: '#7C4DFF' },
    { name: 'ETF 분산투자', company: '토스증권', description: '저축을 넘어 투자로! 리스크 분산', tag: '투자', color: '#3182F6' },
  ],
  CSST: [
    { name: '토스 목표 저금통', company: '토스', description: '함께 목표 설정하고 저축하기', tag: '저축', color: '#3182F6' },
    { name: '소액 주식 투자', company: '토스증권', description: '1000원부터 시작하는 주식 투자', tag: '투자', color: '#00C853' },
  ],
};

export default function CPARecommend({ typeCode }: { typeCode: string }) {
  const products = productMap[typeCode] || productMap['CSST'];

  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
        💰 돈생님 추천 금융상품
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map((product, index) => (
          <div key={index} style={{
            background: 'white', borderRadius: '16px', padding: '16px',
            border: '1px solid #E8E8E8', display: 'flex', alignItems: 'center', gap: '14px',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              background: product.color, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'white', fontSize: '14px',
              fontWeight: 'bold', flexShrink: 0,
            }}>
              {product.tag}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '2px' }}>{product.name}</p>
              <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>{product.company}</p>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.4 }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
