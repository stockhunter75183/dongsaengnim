import html2canvas from 'html2canvas';

export async function generateImage(elementId: string): Promise<string | null> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('요소를 찾을 수 없음:', elementId);
    return null;
  }

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#F8F9FA',
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
    });
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('이미지 생성 실패:', error);
    return null;
  }
}
