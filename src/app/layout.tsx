import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '코드탐정단',
  description:
    '코드탐정단은 게임처럼 즐기는 코드 리뷰 플랫폼 으로써, 개발자가 의도적으로 만든 버그, 비효율 코드를 다른 사용자가 찾아내며, 실력을 겨루고 학습하는 게임화된 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
