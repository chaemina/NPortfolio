import Frame from "../organisms/Frame";
import Image from "next/image";
import LargeText from "../atoms/LargeText";
import StackTag from "../atoms/StackTag";
import Title from "../atoms/Title";
import { ProjectTemplateProps } from "../../constants/project";

const ProjectTemplate = ({
  heroImage,
  description,
  tags,
  image1,image2,
  explain, role
}: ProjectTemplateProps) => {
  return (
    <Frame>
      <main className="w-full">
        <div className="w-full 2xl:w-[80%] mx-auto px-8 pt-24 pb-24 flex flex-col gap-10 items-center">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 items-center">
            <div className="w-full">
              <Image src={heroImage} alt="project hero image" />
            </div>

            <div className="w-full flex flex-col gap-4">
              <LargeText className="text-gray-500 leading-relaxed">
                {description}
              </LargeText>

              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, idx) => (
                  <StackTag key={idx} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT IMAGES */}
            <div className="w-[80%]">
              <Image src={image1} alt={`project image 1`}/>
            </div>
            <div className="w-full p-5 lg:p-20">
                <Title>{explain}</Title>
            </div>
            
            <div className="w-full flex lg:flex-row flex-col">
             <div className="w-full lg:w-1/2">
              <Image src={image2} alt={`project image 2`}/>
            </div>
            <div className="w-full lg:w-1/2 p-5 lg:p-20">
                <Title>{role}</Title>
            </div>
            </div>
        
        </div>
      </main>
    </Frame>
  );
};

export default ProjectTemplate;