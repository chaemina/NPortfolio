export interface Project {
  href: string;
  src: string;
  title: string;
}


export const projects = {
  column1: [
    {
      href: "/project/bus",
      src: "/images/projects/Bus_map.jpg",
      title: "광주 버스 IOS",
    },
    {
      href: "/project/garden",
      src: "/images/projects/Garden.png",
      title: "Garden. 함께 피워내는 한국어 교육 플랫폼 ",
    },
  ],
  column2: [
    {
      href: "/project/maeum",
      src: "/images/projects/Maeum_main.jpg",
      title: "생성형 AI 양방향 소통 APP. 마음의 창",
    },
    {
      href: "/project/wastebank",
      src: "/images/projects/WasteBank.png",
      title: "Waste Bank 실시간 모니터링 시스템",
    },
        {
      href: "/project/caramella",
      src: "/images/projects/Caramella.png",
      title: "(주)카라멜라 인트라넷 웹 사이트",
    },
  ],
};

export const projectDescription = {
  bus: `광주 버스 iOS 애플리케이션은 (주)카라멜라 인턴십 당시 진행한 프로젝트로, iOS 프론트엔드 개발을 전담했습니다. 개발에 앞서 Swift·SwiftUI 공식 문서와 개발자 커뮤니티를 중심으로 언어 문법과 동작 원리를 학습하고, 이를 매일 정리하며 이해도를 높였습니다. 또한 웹 개발 경험을 바탕으로 아토믹 디자인과 iOS의 MVVM 패턴을 비교·분석해 플랫폼 간 구조적 차이를 이해하고, 이를 프로젝트 구조 설계에 적용했습니다.

자주 묻는 질문 페이지와 메인 페이지를 담당했으며, 버스·정류장 검색 기능과 검색 결과 저장 기능을 구현했습니다. 검색 로직에서는 무한 스크롤과 로딩 애니메이션을 적용해 대용량 데이터를 효율적으로 처리하고, 성능과 사용자 경험을 함께 개선했습니다. 또한 검색 결과 저장 과정에서 불필요한 메모리 사용을 줄이기 위해 적합한 객체 구조를 고민하고 적용했습니다.

광주 버스 iOS 애플리케이션은 현재 App Store에서 서비스 중입니다.`,
};
