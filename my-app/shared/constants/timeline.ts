export type TimelineItem = {
  title: string;
  org?: string;
  displayDate: string;
  type?: "career" | "experience" | "award" | "qualification" | "education";
  link?: string;
  start?: string; 
  end?: string;   
};

export const career: TimelineItem[] = [
  {
    type: "career",
    title: "개발팀 인턴",
    org: "(주) 카라멜라",
    displayDate: "2023.12.26 ~ 2024.02.21",
    start: "2023-12-26",
    end: "2024-02-21",
  },
];

export const experiences: TimelineItem[] = [
  {
    type: "experience",
    title: "Hipython 팀원",
    org: "2022 KIV 월드프렌즈코리아 IT봉사단",
    displayDate: "2022.06 ~ 2022.08",
    start: "2022-06-01",
    end: "2022-08-31",
  },
  {
    type: "experience",
    title: "디지털 새싹 캠프 서포터즈",
    org: "(주) 키움인",
    displayDate: "2022.10 ~ 2023.01",
  },
  {
    type: "experience",
    title: "홍보부 부장",
    org: "소프트웨어공학과 학생회 Swing",
    displayDate: "2023.03 ~ 2024.02",
    start: "2023-03-01",
    end: "2024-02-29",
  },
  {
    type: "experience",
    title: "Py-ting 팀장",
    org: "2023 KIV 월드프렌즈코리아 IT봉사단",
    displayDate: "2023.07 ~ 2023.08",
    start: "2023-07-01",
    end: "2023-08-31",
  },
  {
    type: "experience",
    title: "Web FrontEnd",
    org: "카카오테크 캠퍼스",
    displayDate: "2023.04 ~ 2023.10",
    start: "2023-04-01",
    end: "2023-10-31",
  },
  {
    type: "experience",
    title: "한국정보처리학회 ASK 2024 논문 게재",
    displayDate: "2024.05.28",
    start: "2024-05-28",
  },
  {
    type: "experience",
    title: "소봉이들 팀장",
    org: "코드클럽 한국위원회 대학생 봉사단",
    displayDate: "2024.05 ~ 2024.08",
    start: "2024-05-01",
    end: "2024-08-31",
  },
  {
    type: "experience",
    title: "홀씨 팀장",
    org: "2024 KIV 월드프렌즈코리아 IT봉사단",
    displayDate: "2024.06 ~ 2024.08",
    start: "2024-06-01",
    end: "2024-08-31",
  },
  {
    type: "experience",
    title: "소봉이들 회장",
    org: "소프트웨어 중심대학 사업단 동아리",
    displayDate: "2023.03 ~ 2024.12",
    start: "2023-03-01",
    end: "2024-12-31",
  },
  {
    type: "experience",
    title: "소봉이들 팀장",
    org: "2024 청년울타리 교육 봉사",
    displayDate: "2024.12",
    start: "2024-12-01",
    end: "2024-12-31",
  },
  {
    type: "experience",
    title: "코코몽 팀장",
    org: "2025 KIV 월드프렌즈코리아 IT 봉사단",
    displayDate: "2025.07 ~ 2025.08",
    start: "2025-07-01",
    end: "2025-08-31",
  },  
  {
    type: "experience",
    title: "ICICT 2025 - Springer LNNS 시리즈 논문 게재",
    displayDate: "2025.10.01",
    start: "2025-10-1",
  },
];

export const awards: TimelineItem[] = [
  {
    type: "award",
    title: "장려상",
    org: "공과대학 2022 동계방학 기업직무분석 경진대회",
    displayDate: "2023.02.09",
    start: "2023-02-09",
  },
  {
    type: "award",
    title:
      "우수상 (활동영상부문)",
    org: "KIV 월드프렌즈코리아 IT봉사단 성과발표대회",
    displayDate: "2023.11.30",
    start: "2023-11-30",
  },
  {
    type: "award",
    title:
      "금상",
    org: "SW동아리 발굴 및 지원 프로그램 최종결과발표회",
    displayDate: "2023.12.08",
    start: "2023-12-08",
  },
  {
    type: "award",
    title:
      "금상",
    org: "2024 교내 디지털경진대회(SW부문)",
    displayDate: "2024.06.07",
    start: "2024-06-07",
  },
   {
    type: "award",
    title:
      "동상",
    org: "SW동아리 발굴 및 지원 프로그램 최종결과발표회",
    displayDate: "2024.12",
    start: "2024-12",
  },
  {
    type: "award",
    title: "International Volunteer Award",
    org: "Hangai University",
    displayDate: "2025.08.15",
    start: "2025-08-15",
  },
];

export const qualifications: TimelineItem[] = [
  { type: "qualification", title: "ADsP (데이터 분석 준전문가)", displayDate: "" },
  { type: "qualification", title: "정보 처리 기사", displayDate: "" },
];

export const education: TimelineItem[] = [
  {
    type: "education",
    title: "전남대학교 소프트웨어공학과 재학",
    displayDate: "2021 - 2026(졸업예정)",
    start: "2021-03-10",
  },
  {
    type: "education",
    title: "수완고등학교",
    displayDate: "2018 - 2020",
    start: "2018-03-01",
    end: "2021-02-28",
  },
];

export const timelineAll: TimelineItem[] = [
  ...career,
  ...experiences,
  ...awards,
  ...qualifications,
  ...education,
];

