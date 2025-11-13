export interface ProjectType {
  title: string;
  description: string;
  image?: string;
  github?: string;
  figma?: string;
  medium?: string;
  application?: string;
  roles?: string[];
  techStack?: string[]; 
  achievements?: string[];
}

export const projects: ProjectType[] = [
  {
    title: "함께 피워내는 한국어 교육 플랫폼 Garden",
    description: "한류 문화를 기반으로 한국어 학습의 장벽을 극복하고, 외국인들에게 다양한 방식의 학습 환경을 제공합니다.",
    techStack: ["vite","React", "JavaScript", "ReactQuery", "axios","tailwindxss","jotai"],
    github: "https://github.com/Step3-kakao-tech-campus/Team18_FE/tree/Evaluation",
    figma: "https://www.figma.com/design/DG91eB8oq3T7VnFJ6u8Nww/Watching?node-id=0-1&t=BEzFFQ8KCaQ3cm4W-1",
    medium: "https://medium.com/@chaemina8282/%ED%95%9C%EA%B5%AD%EC%96%B4-%EA%B5%90%EC%9C%A1-%ED%94%8C%EB%9E%AB%ED%8F%BC-garden-b4b1217537f7",
    roles: [
   "Figma를 활용해 전체 화면과 컴포넌트를 설계하며 UI/UX 구조를 구체화했습니다.\n개발 과정에서는 Tech Leader로서 master 브랜치의 PR을 관리하고, Issue 및 PR 템플릿을 생성해 자동화 환경을 구축했습니다.\n\n웹 프론트엔드 개발을 담당했으며, 주요 구현 기능은 다음과 같습니다.\n회원 가입과 로그인 기능은 MUI UI 컴포넌트와 useForm, Controller를 활용해 실시간 유효성 검사를 적용했습니다.\n에러 발생 시 필드와 토스트 메시지를 통해 사용자에게 명확하게 피드백을 제공했습니다.\n\n토큰 관리와 세션 처리에서는 로그인 성공 시 액세스 토큰을 응답 헤더로, 리프레시 토큰을 쿠키로 발급하여 백엔드에서 Stateless 방식으로 처리했습니다.\n또한 Axios 응답 인터셉터를 통해 토큰 만료 시 refresh 요청을 수행하고, 새 토큰을 로컬 스토리지에 저장한 뒤 이전 요청을 자동으로 재실행하도록 구현했습니다.\n\n마이페이지에서는 로그인 시 발급받은 UID를 기반으로 해당 사용자의 프로필과 개인정보를 조회할 수 있도록 했으며,\n개인정보 수정 시 기존 비밀번호 검증 후 FormData 형식으로 정보를 수정하고 프로필 이미지도 등록할 수 있게 했습니다.\n\n또한 영상 리스트를 무한 스크롤 방식으로 구현하여 사용자가 끊김 없이 콘텐츠를 탐색할 수 있도록 했습니다. React Player를 활용해 영상 시청 서비스를 구현했으며, getCurrentTime 속성을 기반으로 자막이 재생 시점에 맞게 표시되도록 했습니다. 이와 함께, 사용자가 최근에 시청한 10개의 영상을 보관하고 다시 확인할 수 있는 ‘최근 시청 영상 보관함’ 기능도 제공했습니다."
],
    image : "images/Garden.png"
  },
  {
    title: "(주) 카라멜라 사내 인트라넷",
    description: "사내 인트라넷 사이트로 기존에 사용하던 Jira Service Desk의 역할을 대체합니다.",
    techStack: ["Next.js", "JavaScript", "mui","react-hook-form"],
    github: "https://github.com/chaemina/caramella_toyproject",
    figma: "https://www.figma.com/design/ZjA3X89i5nWszAUfxGnmbr/caramella?node-id=0-1&t=3POERBYS9mGuBQ06-1",
    roles: [
      "프로젝트의 전 과정을 주도적으로 담당했습니다.\n기획 단계부터 Figma를 활용한 UI/UX 설계와 API 문서 작성까지 직접 수행했으며,\n\n프론트엔드 개발에서는 Next.js의 App Router를 기반으로 전체 페이지를 구현했습니다.\n\n또한 서버 배포 전에는 API 연동 테스트를 위해 MSW(Mock Service Worker)를 활용하여 안정적인 개발 환경을 구축했습니다."
    ],
     image : "images/Caramella.png"
  },
  {
    title: "광주버스 - AI광주버스",
    description: "광주광역시의 실시간 버스 위치와 도착 정보를 AI 기술로 정확하게 제공합니다.",
    techStack: ["Swift","Swift UI"],
    achievements : ["App Store 출시"],
    application: "https://apps.apple.com/kr/app/%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4-ai%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4/id6475945653",
    medium:"https://medium.com/@chaemina8282/swift%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EA%B0%9C%EB%B0%9C-73b7ca4255f0",
    roles: [
  "iOS 앱 개발에서 프론트엔드를 담당하며, 주요 페이지로 자주 묻는 질문(FAQ) 화면과 메인 검색 화면을 구현했습니다.\n\n자주 묻는 질문 페이지에서는 onTapGesture와 withAnimation 속성을 활용해 탭이 직선으로 이동함과 동시에 내용이 자연스럽게 전환되도록 했습니다.\n\n메인 검색 화면에서는 TextField의 onChange 이벤트로 입력 변화를 감지하고, 입력값이 없을 때는 검색어를 초기화하도록 했으며, onSubmit을 통해 검색 버튼 클릭 시 입력값이 전달되도록 구현했습니다.\n\n검색 기능의 성능을 높이기 위해 서버에서 데이터를 10개 단위로 불러오고, 추가 데이터가 있을 경우 반환된 배열에 이어붙이는 방식으로 처리했습니다.\n\n무한 스크롤은 ScrollView와 LazyVStack을 활용해 구현했으며, DispatchQueue.main.async를 사용해 비동기적으로 데이터를 처리했습니다.\n\n검색 결과는 UserDefault를 통해 객체 배열 형태로 저장하여, 앱을 종료해도 기록이 유지되도록 했습니다.\n\n마지막으로, 로딩 화면에는 Lottie 애니메이션을 적용해 JSON 파일 기반으로 픽셀 깨짐 없이 부드러운 로딩 컴포넌트를 구현했습니다.",
],
     image : "images/Bus.jpeg"
  },
  {
    title: "스무고개의 여행 마음의 창",
    description: "대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 대답하는 기술을 익히도록 돕는 플랫폼입니다.",
    techStack: ["ReactNative", "JavaScript", "axios", "tanstack-query", "redux-toolkit","react-native-permissions"],
    achievements: ["한국정보처리학회 ASK 2024", "2024 디지털 경진대회(SW 부문) 금상"],
    github: "https://github.com/goodoong/maeum2_FE/tree/main",
    application: "https://www.youtube.com/watch?v=Xs86UbhY9k8",
    medium: "https://medium.com/@chaemina8282/%EC%A0%91%EA%B7%BC%EC%84%B1-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-cf0b78b36611",
   roles: [
  "UI/UX 설계 단계에서는 WCAG 접근성 지침을 고려하여 버튼 색상과 순서를 통일하고, 전색맹 사용자를 고려했으며 대비 기준을 WCAG 2.0 AA 이상으로 준수했습니다.\n모바일 환경을 고려하여 터치 대상 최소 높이와 너비를 9mm로 설정하고, 타이틀은 18~32pt, 본문은 16~18pt로 적용했습니다.\n주요 사용인 아동을 고려해 버튼 수를 최소화하고, 음성 출력 자막을 제공하며 온보딩 튜토리얼을 구성했습니다.\n\n프로젝트 세팅 단계에서는 React Native를 활용해 iOS와 Android 동시 개발 환경을 구성했습니다.\n공통 컴포넌트 개발 시 모바일 디바이스별 반응형 컴포넌트를 구현하고, Scale 함수를 재사용했습니다.\n\n프론트엔드 개발을 담당하며, 프로토타입 구현에서는 Splash, 설정, 회원정보, 메인 페이지 프로토타입을 제작했습니다.\n\n구현한 기능으로는 로그인과 회원가입 기능이 있으며, WebView를 통해 카카오 계정과 연동하고 서버에서 회원 여부를 판단하도록 했습니다.\nRebux Toolkit을 활용해 보호자 정보 입력 후 전역 상태를 저장하고, 문자 인증 및 아이 정보 통합을 처리했습니다.\n로그인 성공 시 토큰을 async-storage에 저장하여 앱 종료 후에도 유지되도록 했으며, 회원 가입 성공 시 1회 튜토리얼을 제공했습니다.\n\n회원정보 조회 및 수정은 FlatList로 정보를 출력하고, 수정 시 토큰을 재발급하여 로그아웃 처리했습니다.\n\n메인 게임 기능에서는 react-native-permissions로 접근 권한 동의를 획득하고, 음성 질문/대답 시 React Native Voice로 STT 변환을 수행했습니다.\n서버 메시지를 추출 후 Clova TTS API를 활용해 음성 출력을 구현하며 양방향 음성 소통 기능을 완성했습니다.\n\n또한 Lottie를 활용하여 Splash View와 Login View에서 ‘마음의 창’ Lottie JSON 애니메이션을 출력했습니다.",
],
     image : "images/Maeum.png"
  },
  {
    title: "Waste Bank App",
    description: "geolocation을 통한 실시간 위치 확인으로 Waste Bank 운영 효율성을 향상시키는 쓰레기 수집 모니터링 애플리케이션입니다.",
    techStack: ["React", "ReactNative", "WebView", "TypeScript", "CSS-in-JS", "axios","Google Maps", ],
    achievements: ["Springer LNNS & ICICT 2025"],
    github: "https://github.com/chaemina/WasteBankApp/tree/dev",
    application : "https://wb-tutorial.vercel.app/",
   roles: [
  "팀장으로서 UI/UX 설계를 진행하며, 클라이언트가 제공한 디자인을 기반으로 접근성을 개선한 UI/UX를 제안했습니다.\n\n프론트엔드 개발을 담당하며 프로젝트 세팅 단계에서는 하이브리드 애플리케이션 환경을 구성했습니다. 웹은 React, 앱은 React Native를 사용했고, TypeScript와 styled-components를 공통으로 적용했습니다.\n\n앱 개발에서는 React Native Maps 라이브러리를 활용해 Google Maps를 적용하고, 쓰레기 위치와 사용자 위치를 표시했습니다. 또한 실제 디바이스에서 수거원의 실시간 위치를 감지하기 위해 geolocation-community 라이브러리를 사용했습니다.\n\n웹 배포 시에는 네이티브 기능을 제외하고 웹에서 구현했으며, 앱에서 React Native WebView로 띄우기 위해 Vercel을 통해 웹을 배포했습니다.\n\n웹뷰 통신 기능도 구현하여, 웹뷰에서 postMessage를 전송하면 React Native에서 타입과 내용을 수신하고 토큰 저장 및 네비게이션 이동을 관리하도록 했습니다."
],
     image : "images/WasteBank.png"
  },
];
