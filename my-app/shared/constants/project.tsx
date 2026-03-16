import { ReactNode } from "react";
import { Tag } from "./stacks";

export interface Project {
  href: string;
  src: string;
  title: string;
}
export interface ButtonLink {
  label: string;
  url: string;
}
export interface ProjectTemplateProps {
  heroImage?: any;
  video? : string;
  description: string;
  tags: Tag[];
  image1: any;
  image2: any;
  explain: ReactNode;
  role: ReactNode;
  buttons: ButtonLink[];
}

export const projects = {
    column1: [
       {
      href: "/project/garden",
      src: "/images/projects/Garden.png",
      title: "Garden. 함께 피워내는 한국어 교육 플랫폼 ",
    },
    {
      href: "/project/maeum",
      src: "/images/projects/MaeumImage1.png",
      title: "생성형 AI 양방향 소통 APP. 마음의 창",
    },
   
  ],
  column2: [
    {
      href: "/project/bus",
      src: "/images/projects/Bus_map.jpg",
      title: "광주 버스 IOS",
    },
     {
      href: "/project/wastebank",
      src: "/images/projects/WasteBank.png",
      title: "Waste Bank 실시간 모니터링 시스템",
    },
  ],
};

export const bus = {
  explain: (
    <>
      <span className="bg-orange-100 px-1">AI 기술</span>을 활용해 
      광주광역시의 <span className="bg-orange-100 px-1">실시간 버스 위치와 도착 정보</span>를 
      제공하는 지도 기반 모빌리티 서비스입니다. 
      (주)카라멜라 인턴십 기간 동안 진행된 네이티브 iOS 앱 프로젝트로, 
      <span className="bg-orange-200 px-1">Swift와 SwiftUI</span> 기반으로 개발되었습니다.
      <br /><br />
      앱은 버스 및 정류장 정보를 검색하고 즐겨찾기 기능을 제공해 사용자가 필요한 교통 정보를 빠르게 확인할 수 있도록 했습니다. 
      또한 애자일 기반 스크럼 방식으로 개발을 진행하며 다른 파트와 협업 경험을 쌓았습니다. 
      프로젝트는 <span className="bg-orange-100 px-1">App Store</span>에 출시되었으며 이후 QA를 통해 기능을 개선했습니다.
    </>
  ),

  role: (
    <>
      iOS 프론트엔드 개발을 전담하며 
      <span className="bg-orange-200 px-1">자주 묻는 질문 페이지와 메인 검색 기능</span>을 구현했습니다.
      <br /><br />
      ScrollView와 LazyVStack을 활용해 <span className="bg-orange-100 px-1">무한 스크롤</span> 기반 검색 기능을 개발했으며, 
      검색 기록은 UserDefaults와 Codable을 활용해 객체 형태로 저장하도록 했습니다.
     <br /><br />
      서비스 특성을 고려한 캐싱 전략과 데이터 로딩 방식을 설계하며 성능 최적화를 위해 노력했습니다.
    </>
  ),
  buttons: [
  {
    label: "Notion",
    url: "https://whip-revolve-4ce.notion.site/30411b83da1780808e7fd83af980597f?pvs=74"
  },
]
};

export const maeum = {
  explain: (
  <>
    자폐 스펙트럼 장애(ASD) 아동은 사회적 상호작용과 의사소통에 어려움을 겪지만,
    지역 간 치료 인프라 격차와 비용 문제로 충분한 치료 기회를 얻기 어려운 경우가 많습니다.
    이러한 한계를 보완하기 위해 최근에는 디지털 기술을 활용한 디지털 치료제에 대한 연구가 활발히 이루어지고 있습니다.
    <br /><br />

    이에 따라 ASD 아동이 일상 환경에서도 지속적으로 의사소통 훈련을 할 수 있도록 모바일 기반  <span className="bg-pink-100 px-1">AI 대화 훈련 플랫폼</span>을 개발했습니다.
    치료센터에서 활용되는 놀이 치료 방식을 참고하여 질문과 추론을 통해 상호작용을 유도하는 <span className="bg-pink-100 px-1">‘스무고개’ 게임 형태의 대화 훈련</span>을 설계했습니다.
    <br /><br />

    또한 사람과의 직접적인 상호작용이 부담스러울 수 있다는 점을 고려해 
    AI 캐릭터와 대화를 연습할 수 있도록 구성했으며,
    실제 대화와 유사한 경험을 제공하기 위해 
    <span className="bg-pink-200 px-1">양방향 음성 소통 기반 인터랙션</span>을 핵심 기능으로 구현했습니다.
    <br /><br />

    해당 프로젝트는 연구 성과를 인정받아 <span className="bg-pink-100 px-1">ASK 2024 학술대회 논문 게재</span>와 <span className="bg-pink-100 px-1">SW 디지털 경진대회 금상</span>을 수상했습니다.
  </>
),

  role: (
  <>
    React Native 기반으로 iOS와 Android 동시 개발 환경을 구축해 <span className="bg-pink-100 px-1">크로스 플랫폼</span>을 구현했습니다.
    메인, 게임, 설정, 스플래시 화면 등 주요 UI를 WCAG 접근성 지침 기반으로 설계하고, 기능을 개발했습니다.
    <br /><br />

    음성 기반 대화 기능 구현을 위해 <span className="bg-pink-200 px-1">React-Native-Voice</span>를 활용해 사용자 음성을 STT로 변환하고,
    서버에서 생성된 AI 응답을 <span className="bg-pink-200 px-1">Clova TTS와 react-native-sound</span>로 출력하여 양방향 음성 소통이 가능하게 했습니다.
    <br /><br />

    그 외에는 WebView 기반 카카오 OAuth 로그인을 구현하고 토큰을 AsyncStorage에 저장해
    앱 재실행 시에도 인증 상태가 유지되도록 설계하였으며, 
     
    react-hook-form 기반 유효성 검증 구조와 Redux Toolkit 전역 상태 관리를 활용해
    회원가입 흐름을 구성했습니다. 
  </>
),
  buttons: [
  {
    label: "Notion",
    url: "https://whip-revolve-4ce.notion.site/30711b83da17800393aec265b5596778?pvs=74"
  },
  {
    label: "Medium",
    url: "https://medium.com/@chaemina8282/%EB%A7%88%EC%9D%8C%EC%9D%98-%EC%B0%BD-959db33133e3",
  },
    {
    label: "Github",
    url: "https://github.com/goodoong/maeum2_FE",
  },
]
};



export const waste = {
  explain: (
  <>
    Waste Bank 협동조합은 인도네시아 북자카르타 지역의 환경문제를 해결하는 경제적 참여 방식입니다. 
    이 협동조합은 지역의 폐기물을 수거하고, 재활용 가능한 자원을 판매해 수익을 창출하고 있습니다.
    <br /><br />

  그러나 기존의 수동 관리 방식으로는 증가하는 고객 수와 폐기물 처리를 효율적으로 관리하기 어려워,
기능을 역할별로 분리한 <span className="bg-emerald-100 px-1">실시간 모니터링 시스템</span>을 도입했습니다.
<br /><br />

    지도에서 쓰레기 위치와 수거원의 위치를 확인하고 수거 과정을 실시간으로 관리할 수 있도록 설계해 수거 프로세스의 운영 효율을 높이는 것을 목표로 하였으며,
    본 프로젝트는 국제 학술대회 <span className="bg-emerald-200 px-1">ICICT 2025</span>
    (International Conference on Information and Communication Technology) 에서 연구 및 개발의 가치를 국제적으로 인정받아 <span className="bg-emerald-200 px-1">Springer LNNS</span> 시리즈에
    논문이 게재되었습니다.
  </>
),

  role: (
  <> 
    팀장으로서 클라이언트인 <span className="bg-emerald-100 px-1"> 인도네시아 다르마자야 대학</span>과 직접 소통하며 요구사항을 파악했습니다.
    논문과 Application Form을 기반으로 Waste Bank 구조를 분석하고 유스케이스 다이어그램과 와이어프레임을 제작해
    서비스 흐름을 정리했습니다.
    <br /><br />

    React와 React Native 기반  <span className="bg-emerald-200 px-1">하이브리드 구조</span>를 설계하여, 
    네이티브 기능이 필요한 (지도, 위치 감지 등) 화면은 앱으로 구현하고
    그 외 페이지는 웹으로 개발해 <span className="bg-emerald-100 px-1">WebView</span>로 출력했습니다.
    <br /><br />

    메인 수거 모니터링 기능은 <span className="bg-emerald-100 px-1">react-native-maps</span>를 활용해
쓰레기 위치를 지도 마커로 시각화하고, <span className="bg-emerald-100 px-1">react-native-geolocation-service</span>를 사용해
수거원의 실시간 위치 추적을 구현했습니다. 
  </>
),

  buttons: [
  {
    label: "Notion",
    url: "https://whip-revolve-4ce.notion.site/WasteBankApp-30711b83da1780b2a880c6fa82825b9e?pvs=73"
  },
  {
    label: "Medium",
    url: "https://medium.com/@chaemina8282/react-native-%EC%9C%84%EC%B9%98-%EC%B6%94%EC%A0%81-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-3a74fd413623"
  },
    {
    label: "Github",
    url: "https://github.com/chaemina/WasteBankApp"
  },

]
};


export const garden = {
  explain: (
<>
한국어는 세계적으로 빠르게 성장하고 있는 언어 중 하나로, 한류의 확산과 함께
해외에서 한국어 학습에 대한 관심이 지속적으로 증가하고 있지만 기존 한국어 교육 과정은 문법 위주 커리큘럼이 많아
학습자의 관심사를 반영하지 못한다는 한계가 있습니다.
<br /><br />

이에 따라 <span className="bg-green-100 px-1">관심사 기반 한류 콘텐츠</span> 를 활용해 외국인을 대상으로 한국어를 학습할 수 있도록 하는 <span className="bg-green-100 px-1">영상 스트리밍 웹 서비스</span>를 설계했습니다.
<br /><br />

Garden은 한국어 영상 서비스 / 멘토 멘티 서비스 / 채팅 서비스 기능을 제공합니다.
</>
),
  role: (
<>
  계정 관리, 마이페이지, 메인 영상 서비스 기능의 프론트엔드 개발을 담당했습니다. Axios 인스턴스와 인터셉터를 활용해 <span className="bg-green-100 px-1">토큰 기반 인증 구조</span>를 구현하고,
  Access Token 만료 시 Refresh 요청을 통해 토큰을 재발급한 뒤 기존 요청을 재시도하도록 설계했습니다.
  <br /><br />

  회원가입, 로그인, 개인정보 수정 기능에서는
  <span className="bg-green-100 px-1">React Hook Form</span>과 <span className="bg-green-100 px-1">MUI 컴포넌트</span>를 활용해
  폼 상태 관리와 실시간 유효성 검사를 구현했습니다. 또한 사용자 UID 기반 프로필 조회 구조를 설계하고 <span className="bg-green-100 px-1">TanStack Query</span>의 useMutation을 활용해
  사용자 정보 수정 기능을 구현했습니다.
  <br /><br />

  메인 영상 서비스는 useInfiniteQuery와 react-intersection-observer를 활용해 <span className="bg-green-200 px-1">무한 스크롤</span>로 구현했습니다.
  또한 로그인 시 <span className="bg-green-100 px-1">사용자의 관심사 기반 추천 영상</span>과 최근 시청 영상 기능을 제공하고, React Player로 영상 재생과 한국어·영어 자막 기능을 구현했습니다.
</>
),

  buttons: [
  {
    label: "Notion",
    url: "https://whip-revolve-4ce.notion.site/Garden-30711b83da17808b937df32807a13124"
  },
  {
    label: "Medium",
    url: "https://medium.com/@chaemina8282/%ED%95%9C%EA%B5%AD%EC%96%B4-%EA%B5%90%EC%9C%A1-%ED%94%8C%EB%9E%AB%ED%8F%BC-garden-b4b1217537f7"
  },
    {
    label: "Github",
    url: "https://github.com/Step3-kakao-tech-campus/Team18_FE"
  },

]
};