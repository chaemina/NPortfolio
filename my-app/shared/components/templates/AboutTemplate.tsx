import Frame from "../organisms/Frame";
import BioTemplate from "./BioTemplate";
import Intro from "../organisms/Intro";

const AboutTemplate = () => {
    return (
    <Frame>
         <main className="h-full w-full flex flex-col ">
          {/* 사진 +  소개  */}
          <Intro/>

          {/* bg-gray? 경력 bio */}
          <BioTemplate/>
        </main>
    </Frame>
    )
}

export default AboutTemplate;