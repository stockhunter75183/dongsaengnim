export async function shareResult(typeCode: string, typeName: string, temperature: number) {
  const text = `나의 소비 온도는 ${temperature}°! 나는 "${typeName}" 유형이래요 🌡️ 너도 테스트 해볼래?`;
  const url = window.location.origin;

  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    return 'copied';
  } catch (error) {
    return 'failed';
  }
}

export async function shareImage(dataUrl: string, typeName: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `dongsaengnim-${typeName}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return 'downloaded';
}
