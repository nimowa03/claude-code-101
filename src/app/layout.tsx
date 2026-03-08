import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MakeGrowth — 만드는 건 쉬워졌습니다. 그 다음을 탐구합니다.",
  description:
    "수익화 초입에 있는 빌더와 크리에이터를 위한 가이드. 만들기만 하는 사람에서 수익을 만드는 사람으로.",
  openGraph: {
    title: "MakeGrowth",
    description: "만드는 건 쉬워졌습니다. 그 다음을 탐구합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
