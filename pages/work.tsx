import Image from "next/image";

import * as S from "../styles/work";

import { Banner } from "../components/Banner";
import { Button } from "../components/Button";

import Project1 from "../images/project1.png";
import Google from "../images/google.svg";
import Hypersoft from "../images/hypersoft.png";

import { Box } from "../components/Box";

export const Work = () => {
  return (
    <S.Container>
      <Box h="100px" />
      <h1>My Selected Work</h1>
      <hr />
      <Banner
        image={Project1}
        title="Portfólio"
        link="#"
        linkText="view project"
      />
      <Box h="100px" />
      <S.WorkInfo>
        <S.Info>
          <p>
            I could say I want to work at <span>289+</span> companies, but I
            only want to work at:
          </p>
        </S.Info>
        <S.Companys>
          <S.ImageWrapper>
            <Image src={Hypersoft} width={131.5} height={29.5} />
          </S.ImageWrapper>
        </S.Companys>
      </S.WorkInfo>
      <S.Hireme>
        <p>
          Got a project in mind? Let's make something awesome{" "}
          <span>together</span>.
        </p>
        <Button primary>Hire Me</Button>
      </S.Hireme>
      <Box h="100px" />
    </S.Container>
  );
};
