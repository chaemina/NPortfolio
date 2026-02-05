import Frame from "../../organisms/Frame";
import mainImage from "../../../../public/images/projects/Bus.jpeg"
import Image from "next/image";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import LargeText from "../../atoms/LargeText";
import {projectDescription} from "../../../constants/project"
import StackTag from "../../atoms/StackTag";
import { BusTags } from "../../../constants/stacks";


const BusTemplate = () => {
    return (
    <Frame>
         <main className="h-full w-full flex flex-col justify-content items-center  ">
            {/* 대표 이미지/ 영상 */}
           <div className="w-full flex aspect-[1000/800] 2xl:w-[50%] relative">
           <Image
                src={mainImage}
                alt="bus main image"
                fill/>
            </div>
            <div className="bg-[#fcf7ed] w-full"> 
                <Container className="mt-10 md:w-[70%] space-y-5 ">
                {/* 2줄 소개 (대표기능) */}
                <LargeText className="font-thin block"> 광주광역시의 실시간 버스 위치와 도착 정보를 AI 기술로 정확하게 제공하는 어플리케이션 </LargeText>

            {/* 기간, 사용 스택 태그  */}
            <div className="flex gap-2">
            {BusTags.map((tag,idx) => (
                <StackTag key={idx} tag={tag} />
            ))}
            </div>

            {/* 개발 과정 디테일 하게 (역할, 목적, 성취 결과 ) */}
                <Text className="font-light whitespace-pre-line">
                    {projectDescription.bus}
                </Text>
            {/* 페이지 설명 + 개발 기능, 어려웠던 점 등 + 사진들  */}
                </Container>
            </div>
        </main>
    </Frame>
    )
}

export default BusTemplate;