import ProjectTemplate from "../../templates/ProjectTemplate";

import Garden1 from "../../../../public/images/projects/Garden1.png"
import Garden2 from "../../../../public/images/projects/Garden2.jpeg"
import {garden} from "../../../constants/project"
import { GardenTags } from "../../../constants/stacks";
import Frame from "../../organisms/Frame";

const GardenTemplate = () => {
  return (
    <Frame>
    <ProjectTemplate
      video="/files/gardenPT.pdf"
      description="관심사 기반 K-컨텐츠를 통한 한국어 학습 플랫폼"
      tags={GardenTags}
      image1={Garden1}
      image2={Garden2}
      explain = {garden.explain}
      role = {garden.role}
      buttons = {garden.buttons}
    />
    </Frame>
  );
};

export default GardenTemplate;