import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAEMINA 채민아",
  description: "FrontEnd Developer Chaemina's Portfolio",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="overflow-x-hidden w-full h-screen">{children}</body>
    </html>
  );
}
