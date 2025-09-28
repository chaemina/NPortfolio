export interface ProjectType {
  title: string;
  description: string;
  image?: string; 
  github?: string;
  figma?: string;
  application?: string;
  roles?: string[]; 
}

export const projects: ProjectType[] = [
  {
    title: "함께 피워내는 한국어 교육 플랫폼 Garden",
    description: "한류 문화를 기반으로 한국어 학습의 장벽을 극복하고, 외국인들에게 다양한 방식의 학습 환경을 제공합니다.",
    github: "https://github.com/Step3-kakao-tech-campus/Team18_FE/tree/Evaluation",
    figma: "https://www.figma.com/design/DG91eB8oq3T7VnFJ6u8Nww/Watching?node-id=0-1&t=BEzFFQ8KCaQ3cm4W-1",
    roles: [
  "UI/UX 설계: Figma에서 전체 화면과 컴포넌트 설계",
  "TechLeader 역할: master 브랜치 PR 관리, Issue/PR 템플릿 생성 및 자동화",
  "회원 가입/로그인 기능 구현: MUI UI 컴포넌트와 useForm/Controller를 활용하여 실시간 유효성 검사 적용",
  "에러 처리: 필드와 토스트 메시지를 통해 사용자에게 명확하게 표시",
  "토큰 관리 및 세션 처리: 로그인 성공 시 액세스 토큰은 응답 헤더, 리프레쉬 토큰은 쿠키로 발급, 백엔드에서 Stateless 처리",
  "토큰 만료 처리: Axios 응답 인터셉터를 통해 refresh 요청 후 새 토큰을 로컬 스토리지에 저장하고 이전 요청 재실행",
  "마이페이지 프로필/개인정보 조회: 로그인 시 발급받은 UID를 활용하여 해당 사용자 정보만 조회 가능",
  "개인정보 수정 기능: 기존 비밀번호 검증 후 FormData 형태로 수정 가능, 프로필 이미지 등록 포함",
  "영상 시청 서비스: React Player를 사용하여 영상 재생, getCurrentTime 속성 기반 자막 표시",
  "최근 시청 영상: 최근 시청한 10개 영상 보관함 제공",
],
    image : "images/Garden.png"
  },
  {
    title: "(주) 카라멜라 사내 인트라넷",
    description: "사내 인트라넷 사이트로 기존에 사용하던 Jira Service Desk의 역할을 대체합니다.",
    github: "https://github.com/chaemina/caramella_toyproject",
    figma: "https://www.figma.com/design/ZjA3X89i5nWszAUfxGnmbr/caramella?node-id=0-1&t=3POERBYS9mGuBQ06-1",
    roles: [
      "Figma에서 UI/UX 설계",
      "API 문서 작성",
      "프론트엔드 페이지 전체 개발 (Next.js 앱 라우터)",
      "서버 배포 전, api 연결 테스트를 위해 msw를 사용"
    ],
     image : "images/Caramella.png"
  },
  {
    title: "광주버스 - AI광주버스",
    description: "광주광역시의 실시간 버스 위치와 도착 정보를 AI 기술로 정확하게 제공합니다.",
    application: "https://apps.apple.com/kr/app/%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4-ai%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4/id6475945653",
    roles: [
  "자주 묻는 질문 페이지 구현: onTapGesture와 withAnimation 속성을 활용해 직선 이동과 동시에 내용이 변화하는 Tab View 구현",
  "메인 페이지 검색 기능 구현: TextField onChange로 입력 변화를 감지하고, null값일 때 검색값 초기화, onSubmit으로 검색 버튼 클릭 시 입력값 전달",
  "검색 성능 최적화: 서버에서 데이터를 10개씩 불러오고, 추가 데이터가 있을 경우 반환되는 배열에 추가",
  "무한 스크롤 구현: ScrollView와 LazyVStack 활용, DispatchQueue.main.async로 비동기 처리",
  "검색 결과 저장: UserDefault를 사용해 검색 기록을 객체 배열로 저장하고, 앱 종료 후에도 유지",
  "Lottie Loading 적용: JSON 파일 기반으로 픽셀 깨짐 없이 로딩 컴포넌트 구현",
],
     image : "images/Bus.jpeg"
  },
  {
    title: "스무고개의 여행 마음의 창",
    description: "대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 대답하는 기술을 익히도록 돕는 플랫폼입니다.",
    github: "https://github.com/ddookddook/maeum2_FE/tree/feat_mina",
    application: "https://www.youtube.com/watch?v=Xs86UbhY9k8",
   roles: [
  "UI/UX 설계 - WCAG 접근성 지침 고려: 버튼 색상 순서 통일, 전색맹인 고려, 대비 WCAG 2.0 AA 이상 준수",
  "모바일 환경 고려: 터치 대상 최소 높이/너비 9mm, 타이틀 18~32pt, 본문 16~18pt",
  "주요 사용자 고려: 버튼 수 최소화, 음성 출력 자막 제공, 온보딩 튜토리얼 제공",

  "프로젝트 세팅: React Native로 iOS/Android 동시 개발 환경 구성",

  "공통 컴포넌트 개발: 모바일 디바이스별 반응형 컴포넌트 구현, Scale 함수 재사용",

  "프로토타입 구현: Splash, 설정, 회원정보, 메인 페이지 프로토타입 제작",

  "로그인/회원가입 기능: WebView로 카카오 계정 연동, 서버에서 회원 여부 판단",
  "Rebux Toolkit으로 보호자 정보 입력 후 전역 상태 저장, 문자 인증 및 아이 정보 통합",
  "로그인 성공 시 토큰 async-storage에 저장, 앱 종료 후에도 유지",
  "회원 가입 성공 시 1회 튜토리얼 제공",

  "회원정보 조회 및 수정: FlatList로 회원 정보 출력, 수정 시 토큰 재발급으로 로그아웃 처리",

  "메인 게임 기능: react-native-permissions로 접근 권한 동의 획득",
  "음성 질문/대답 시 React Native Voice로 STT 변환",
  "서버 메시지 추출 후 Clova TTS API로 음성 출력, 양방향 음성 소통 구현",

  "Lottie 활용: Splash View, Login View에서 마음의 창 Lottie JSON 출력",
],
     image : "images/Maeum.png"
  },
  {
    title: "Waste Bank App",
    description: "geolocation을 통한 실시간 위치 확인으로 Waste Bank 운영 효율성을 향상시키는 쓰레기 수집 모니터링 애플리케이션입니다.",
    github: "https://github.com/chaemina/WasteBankApp/tree/feat_mina",
    application : "https://wb-tutorial.vercel.app/",
   roles: [
  "UI/UX 설계: 클라이언트 제공 디자인 기반으로 접근성 개선 UI/UX 제안",

  "프로젝트 세팅: 하이브리드 Application 환경 구성 (웹 React + 앱 React Native)",
  "TypeScript와 styled-components 공통 사용",

  "앱 개발: React Native Maps 라이브러리로 Google Maps 사용, 쓰레기 위치 및 사용자 위치 표시",
  "실제 디바이스에서 수거관 실시간 위치 감지를 위해 geolocation-community 라이브러리 사용",

  "웹 배포: 네이티브 기능 제외 후 웹 구현",
  "앱에서 React Native WebView로 띄우기 위해 Vercel 웹 배포 진행",

  "웹뷰 통신 구현: 웹뷰에서 postMessage 전송, React Native에서 타입과 내용 수신 후 토큰 저장 및 네비게이션 이동 관리"
],
     image : "images/WasteBank.png"
  },
];
