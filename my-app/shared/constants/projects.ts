export interface ProjectType {
  title: string;
  description: string;
  image?: string; 
  github?: string;
  figma?: string;
  roles?: string[]; 
}

export const projects: ProjectType[] = [
  {
    title: "함께 피워내는 한국어 교육 플랫폼 Garden",
    description: "한류 문화를 기반으로 한국어 학습의 장벽을 극복하고, 외국인들에게 다양한 방식의 학습 환경을 제공합니다.",
    github: "https://github.com/chaemina/garden",
    figma: "https://www.figma.com/file/xxxx",
    roles: [
      "UI/UX 디자인 - Figma에서 UI/UX 설계",
      "TechLeader - master 브랜치 PR 관리, Issue/PR 템플릿 자동화",
      "회원 가입, 로그인 기능 구현 - mui 컴포넌트 + useForm",
      "토큰 관리 및 세션 처리",
      "마이페이지 프로필, 개인정보조회/수정 기능 구현",
      "영상 시청 서비스 구현 (React Player, 무한 스크롤)",
    ],
  },
  {
    title: "(주) 카라멜라 사내 인트라넷",
    description: "사내 인트라넷 사이트로 기존에 사용하던 Jira Service Desk의 역할을 대체합니다.",
    github: "https://github.com/chaemina/intranet",
    figma: "https://www.figma.com/file/yyyy",
    roles: [
      "UI/UX 설계",
      "API 문서 작성",
      "프론트엔드 페이지 전체 개발 (Next.js 앱 라우터)",
    ],
  },
  {
    title: "광주버스 - AI광주버스",
    description: "광주광역시의 실시간 버스 위치와 도착 정보를 AI 기술로 정확하게 제공합니다.",
    github: "https://github.com/chaemina/ai-gwangju-bus",
    roles: [
      "자주 묻는 질문 페이지 구현 (Tab View, 애니메이션)",
      "검색 기능 및 검색 결과 저장",
      "Lottie Loading 컴포넌트 적용",
    ],
  },
  {
    title: "스무고개의 여행 마음의 창",
    description: "대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 대답하는 기술을 익히도록 돕는 플랫폼입니다.",
    github: "https://github.com/chaemina/ma-eum-ui",
    roles: [
      "UI/UX 설계 (WCAG 접근성, 모바일 환경, 주요 사용자 고려)",
      "React Native 프로젝트 세팅 (iOS/Android 동시 개발)",
      "공통 컴포넌트 개발 (Dimensions, Scale 함수 재사용)",
      "프로토타입 구현 (Splash, 설정, 회원정보, 메인 페이지)",
      "로그인/회원가입 기능 구현 (WebView Kakao 연동, Redux Toolkit)",
      "회원정보 조회 및 수정 기능 구현",
      "메인 게임 기능 구현 (STT, TTS, 양방향 음성 소통)",
      "Lottie Splash View 및 Login View 적용",
    ],
  },
  {
    title: "Waste Bank App",
    description: "geolocation을 통한 실시간 위치 확인으로 Waste Bank 운영 효율성을 향상시키는 쓰레기 수집 모니터링 애플리케이션입니다.",
    github: "https://github.com/chaemina/waste-bank-app",
    roles: [
      "UI/UX 설계 (접근성 개선)",
      "프로젝트 세팅 (React, React Native, Typescript, styled-components)",
      "앱 개발 (React Native Maps, geolocation-community)",
      "웹 배포 (React Native WebView 활용, Vercel 배포)",
      "웹뷰 통신 구현 (postMessage, 토큰 관리, 네비게이션)",
    ],
  },
];
