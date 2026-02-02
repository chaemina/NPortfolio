import Container from "../../atoms/Container"
import Title from "../../atoms/Title"
import Text from "../../atoms/Text"
import Caption from "../../atoms/Caption"
import Button from "../../atoms/Button"

const Footer = () => {
    return (
        <>
       <footer className="bg-black">
        <Container>
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-[24px] mt-[16px]">
              <Title className="font-light text-white">
                Want to work with me? I'd love to hear from you.
              </Title>
              <Button href="mailto:chaemina82@naver.com" className="!w-fit inline-flex font-light border border-gray-700 text-white transition-colors duration-200 ease-out hover:border-white">
                Get in touch
              </Button>
            </div>

            <div>
              <Text className="text-white mb-[16px]">채민아</Text>
              <div className="flex flex-col md:flex-row flex-wrap gap-y-[8px] mb-[12px]">
                <Caption className="flex-1 text-white font-light">
                  +82 10-2103-6106
                </Caption>
                <Caption className="flex-1 text-white font-light">
                    <a href="https://github.com/chaemina">github</a>
                </Caption>
                <Caption className="flex-1 text-white font-light">
                    <a href="https://medium.com/@chaemina8282">medium</a> 
                </Caption>
                <Caption className="flex-1 text-gray-400 font-light">
                  Developed by Mina
                </Caption>
              </div>
            </div>
          </div>
      </Container>
      </footer>
      </>
    )
}

export default Footer;