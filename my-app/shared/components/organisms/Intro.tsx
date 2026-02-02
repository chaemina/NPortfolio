import LargeText from "../atoms/LargeText";
import Container from "../atoms/Container";
import Image from "next/image";
import Profile from "../../../public/images/PImage.png"

const Intro = () => {
    return (
        <Container className="w-full flex flex-col justify-center items-center  mt-[60px] md:mt-[100px] lg:mt-[180px]">
        <div className="w-full lg:w-[49%] mb-5">
            <Image src={Profile} alt="ProfileImage" className="w-[20%] rounded-full" />
        </div>
        <div className="w-full lg:w-[49%] mb-5">
             <LargeText>
               Hi there, I’m a developer majoring in Software Engineering at Chonnam National University. View my biography for a more detailed look at what I’ve done.
            </LargeText>
         </div>
        </Container>
    )
}

export default Intro;