import ProjectTemplate from "../../templates/ProjectTemplate";

import BusImage1 from "../../../../public/images/projects/BusImage1.jpeg";
import BusImage2 from "../../../../public/images/projects/BusImage2.jpg";
import BusHero from "../../../../public/images/projects/BusHero.png";
import {bus} from "../../../constants/project"
import { BusTags } from "../../../constants/stacks";
import Frame from "../../organisms/Frame";

const GardenTemplate = () => {
  return (
    <Frame>
    <ProjectTemplate
      heroImage={BusHero}
      description="AI 기술을 활용해 광주광역시의 실시간 버스 위치와 도착 정보를 제공하는 지도 기반 모빌리티 서비스"
      tags={BusTags}
      image1={BusImage1}
      image2={BusImage2}
      explain = {bus.explain}
      role = {bus.role}
      buttons = {bus.buttons}
    />
    </Frame>
  );
};

export default GardenTemplate;