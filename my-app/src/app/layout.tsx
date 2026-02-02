import type { Metadata } from "next";
import "./globals.css";
import PageTransitionReset from "../../shared/components/organisms/PageTransitionReset";

export const metadata: Metadata = {
  title: "CHAEMINA 채민아",
  description: "FrontEnd Developer Chaemina's Portfolio",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <PageTransitionReset/>
       <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
