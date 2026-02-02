import LargeText from "../atoms/LargeText";
import Button from "../atoms/Button";

const About = () => {
  return (
    <div className="w-full flex justify-end mt-[60px] md:mt-[100px] lg:mt-[180px]">
      <div className="w-full lg:w-[50%] flex flex-col">
        <LargeText>
         I build digital experiences that connect everyone in a variety of ways.
        </LargeText>
        <Button href="/about" className="!w-fit inline-flex mt-[16px] md:mt-[24px] bg-[#EBEBEB] font-light rounded-4xl justify-start transition-colors duration-200 ease-out hover:bg-gray-300"> About me </Button>
      </div>
    </div>
  );
};

export default About;
