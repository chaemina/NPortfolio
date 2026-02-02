"use client";

import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { useActiveRoute } from "../../../hooks/useActiveRoute";

const Header = () => {
  const isProject = useActiveRoute("/project");
  const isAbout = useActiveRoute("/about");

  return (
    <header>
      <Container className="flex justify-between">
        <Title className="font-bold">
          <Button href="/main">
            ChaeMina
          </Button>
        </Title>

        <div className="flex space-x-[16px] md:space-x-[24px]">
        <Title className="font-bold">
            <Button
              href="/project"
              className={isProject ? "underline decoration-2 underline-offset-13" : ""}
            >
              Project
            </Button>
          </Title>

          <Title className="font-bold">
            <Button
              href="/about"
              className={isAbout ? "underline  decoration-2 underline-offset-13" : ""}
            >
              About
            </Button>
          </Title>
        </div>
      </Container>
    </header>
  );
};

export default Header;
