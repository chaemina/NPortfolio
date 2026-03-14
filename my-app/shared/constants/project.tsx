import { ReactNode } from "react";
import { Tag } from "./stacks";

export interface Project {
  href: string;
  src: string;
  title: string;
}

export interface ProjectTemplateProps {
  heroImage: any;
  description: string;
  tags: Tag[];
  image1: any;
  image2: any;
  explain: ReactNode;
  role: ReactNode;
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
  )
};