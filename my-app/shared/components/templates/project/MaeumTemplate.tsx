import ProjectTemplate from "../../templates/ProjectTemplate";

import MaeumImage1  from "../../../../public/images/projects/Maeum_main.jpg"
import MaeumImage2  from "../../../../public/images/projects/MaeumImage2.png"
import {maeum} from "../../../constants/project"
import { MaeumTags } from "../../../constants/stacks";
import Frame from "../../organisms/Frame";
const videoStart = 60

const MaeumTemplate = () => {
  return (
    <Frame>
    <ProjectTemplate
      description="대화형 AI 기반 상호작용 게임을 통해 ASD(자폐 스펙트럼 장애) 아동의 의사소통 능력 훈련을 지원하는 양방향 음성 소통 플랫폼"
      video="https://www.youtube.com/embed/Xs86UbhY9k8?start=60&rel=0&modestbranding=1"
      tags={MaeumTags}
      image1={MaeumImage1}
      image2={MaeumImage2}
      explain = {maeum.explain}
      role = {maeum.role}
      buttons = {maeum.buttons}
    />
    </Frame>
  );
};

export default MaeumTemplate;