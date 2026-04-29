// src/components/CPARecommend.tsx
import React from 'react';

const CPA_LINKS = {
  TOSS_SAVINGS: "https://www.tossbank.com/product-service/savings/account",
  TOSS_INVEST: "https://www.tossinvest.com/",
  TOSS_BANK: "https://www.tossbank.com/",
  TOSS_CARD: "https://www.tossbank.com/product-service/card/check-card",
  TOSS_INSURANCE: "https://tossinsu.com/",
};

const productsByType: Record<string, { id: string; name: string; description: string; link: string; tag: string }[]> = {
  HTCS: [
    { id: "p1", name: "토스증권", description: "주식·ETF 투자로 자산을 빠르게 불려보세요", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
    { id: "p2", name: "토스뱅크 체크카드", description: "소비할 때마다 캐시백 혜택을 받아보세요", link: CPA_LINKS.TOSS_CARD, tag: "카드" },
  ],
  HTCT: [
    { id: "p1", name: "토스뱅크 체크카드", description: "트렌디한 소비에 캐시백까지 챙기세요", link: CPA_LINKS.TOSS_CARD, tag: "카드" },
    { id: "p2", name: "토스증권", description: "관심 있는 브랜드에 소액 투자해보세요", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
  ],
  HSTS: [
    { id: "p1", name: "토스증권", description: "직감을 투자 감각으로! 소액부터 시작해보세요", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
    { id: "p2", name: "토스인슈어런스", description: "예상치 못한 지출에 대비하는 보험 확인", link: CPA_LINKS.TOSS_INSURANCE, tag: "보험" },
  ],
  HSTT: [
    { id: "p1", name: "토스뱅크 체크카드", description: "친구들과 함께 쓸 때 캐시백 혜택!", link: CPA_LINKS.TOSS_CARD, tag: "카드" },
    { id: "p2", name: "토스뱅크 통장", description: "함께 모으는 목표 저축을 시작해보세요", link: CPA_LINKS.TOSS_SAVINGS, tag: "저축" },
  ],
  CTCS: [
    { id: "p1", name: "토스뱅크 통장", description: "체계적으로 돈을 모으는 입출금 통장", link: CPA_LINKS.TOSS_SAVINGS, tag: "저축" },
    { id: "p2", name: "토스증권", description: "분석적인 당신에게 딱! 데이터 기반 투자", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
  ],
  CTCT: [
    { id: "p1", name: "토스증권", description: "스마트한 투자로 자산을 불려보세요", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
    { id: "p2", name: "토스뱅크 체크카드", description: "똑똑한 소비 습관에 캐시백까지", link: CPA_LINKS.TOSS_CARD, tag: "카드" },
  ],
  CSSS: [
    { id: "p1", name: "토스뱅크 통장", description: "안전하게 이자 받으며 차곡차곡 모으세요", link: CPA_LINKS.TOSS_SAVINGS, tag: "저축" },
    { id: "p2", name: "토스인슈어런스", description: "만약의 상황에 대비하는 보험 점검", link: CPA_LINKS.TOSS_INSURANCE, tag: "보험" },
  ],
  CSST: [
    { id: "p1", name: "토스뱅크 통장", description: "절약한 돈을 모아 이자까지 받아보세요", link: CPA_LINKS.TOSS_SAVINGS, tag: "저축" },
    { id: "p2", name: "토스뱅크 체크카드", description: "알뜰한 소비에 캐시백 보너스!", link: CPA_LINKS.TOSS_CARD, tag: "카드" },
  ],
};

const defaultProducts = [
  { id: "d1", name: "토스뱅크 통장", description: "매일 이자 받는 입출금 통장을 시작해보세요", link: CPA_LINKS.TOSS_SAVINGS, tag: "저축" },
  { id: "d2", name: "토스증권", description: "소액부터 시작하는 쉬운 투자", link: CPA_LINKS.TOSS_INVEST, tag: "투자" },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  투자: { bg: "#ede9fe", text: "#7c3aed" },
  카드: { bg: "#fef3c7", text: "#d97706" },
  저축: { bg: "#d1fae5", text: "#059669" },
  보험: { bg: "#dbeafe", text: "#2563eb" },
};

interface Props {
  typeCode: string;
}

export default function CPARecommend({ typeCode }: Props) {
  const products = productsByType[typeCode] || defaultProducts;

  const handleClick = (productName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cpa_click", {
        product_name: productName,
        type_code: typeCode,
      });
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: "16px", marginBottom: "14px", fontWeight: "700", color: "#1e293b" }}>
        💳 나에게 맞는 금융상품
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {products.map((product) => {
          const colors = tagColors[product.tag] || { bg: "#f1f5f9", text: "#475569" };
          return (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(product.name)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                background: "#fafbfc",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: "700", padding: "3px 8px",
                    borderRadius: "6px", background: colors.bg, color: colors.text,
                  }}>
                    {product.tag}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#1e293b" }}>
                    {product.name}
                  </span>
                </div>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.4" }}>
                  {product.description}
                </p>
              </div>
              <span style={{ fontSize: "13px", color: "#94a3b8", marginLeft: "12px", flexShrink: 0 }}>
                자세히 보기 →
              </span>
            </a>
          );
        })}
      </div>
      <p style={{ fontSize: "11px", color: "#cbd5e1", textAlign: "center", marginTop: "12px" }}>
        * 광고성 콘텐츠가 포함되어 있습니다
      </p>
    </div>
  );
}
