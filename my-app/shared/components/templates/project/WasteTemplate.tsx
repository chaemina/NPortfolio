import ProjectTemplate from "../../templates/ProjectTemplate";

import Waste1 from "../../../../public/images/projects/Waste1.png"
import Waste2 from "../../../../public/images/projects/Waste2.png"
import {maeum} from "../../../constants/project"
import Slider from "../../organisms/Slider";
import { WasteTags } from "../../../constants/stacks";
import Frame from "../../organisms/Frame";
const videoStart = 336

const wasteSliderItems = [
  { image: "/images/projects/Waste3.png", title: "", content: "" },
  { image: "/images/projects/Waste4.png", title: "", content: "" },
  { image: "/images/projects/Waste5.png", title: "", content: "" },
];

const WasteTemplate = () => {
  return (
    <Frame>    
        <ProjectTemplate
      description="위치 기반 실시간 모니터링을 통해 Waste Bank 운영 효율을 향상시키는 애플리케이션"
      video={`https://www.youtube.com/embed/ffF9OGOU7h4?start=${videoStart}&rel=0&modestbranding=1`}
      tags={WasteTags}
      image1={Waste1}
      image2={Waste2}
      explain = {maeum.explain}
      role = {maeum.role}
      buttons = {maeum.buttons}
    />
    <div className="w-full">
        <Slider items={wasteSliderItems} />
    </div>
    </Frame>
  );
};

export default WasteTemplate;