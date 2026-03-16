import type { Metadata } from "next";
import "./globals.css";
import PageTransitionReset from "../../shared/components/organisms/PageTransitionReset";
import { LoadingProvider } from "../../shared/context/LoadingContext";

export const metadata: Metadata = {
  title: "CHAEMINA 채민아",
  description: "FrontEnd Developer Chaemina's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="overflow-x-hidden w-full">
        <LoadingProvider>
          <PageTransitionReset />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}