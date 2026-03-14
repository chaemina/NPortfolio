import Frame from "../../organisms/Frame";
import BusImage1 from "../../../../public/images/projects/BusImage1.jpeg";
import BusImage2 from "../../../../public/images/projects/BusImage2.jpg"
import BusHero from "../../../../public/images/projects/BusHero.png"
import Image from "next/image";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import LargeText from "../../atoms/LargeText";
import { projectDescription } from "../../../constants/project";
import StackTag from "../../atoms/StackTag";
import { BusTags } from "../../../constants/stacks";

const BusTemplate = () => {

  return (
    <Frame>
      <main className="w-full">

        <div className="w-full 2xl:w-[80%] mx-auto px-8 pt-24 pb-24 flex flex-col gap-10 items-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 items-center">
            <div className="w-full ">
              <Image
                src={BusHero}
                alt="bus main image"
              />
            </div>
            {/* TEXT */}
            <div className="flex flex-col gap-4">
              <LargeText className="text-gray-500 leading-relaxed">
                AI 기술을 활용해 광주광역시의 실시간 버스 위치와
                도착 정보를 제공하는 지도 기반 모빌리티 서비스
              </LargeText>

              <div className="flex gap-2 flex-wrap">
                {BusTags.map((tag, idx) => (
                  <StackTag key={idx} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-[80%]">
              <Image
                src={BusImage1}
                alt="bus main image"
              />
            </div>
        </div>
      </main>
    </Frame>
  );
};

export default BusTemplate;