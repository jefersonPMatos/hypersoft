import Image from "next/image";

import * as S from "../styles/work";

import { Banner } from "../components/Banner";
import { Button } from "../components/Button";

import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import Project4 from "../images/project4.png";
import Project5 from "../images/project5.png";
import Project6 from "../images/project6.png";

import Hypesoft from "../images/hypesoft.png";

import { Box } from "../components/Box";

export const Work = () => {
  return (
    <S.Container id="3">
      <Box h="100px" />
      <h1>My Selected Work</h1>
      <hr />
      <S.BannerWrapper>
        <Banner
          image={Project1}
          title="Eduguard - E-learning Website"
          link="#"
          linkText="view project"
        />
        <Banner
          image={Project2}
          title="Eduguard E-learning Website"
          link="#"
          linkText="view project"
        />
        <Banner
          image={Project3}
          title="Huma Marketing Agency"
          link="#"
          linkText="view project"
        />
        <Banner
          image={Project4}
          title="Huma Marketing Agency"
          link="#"
          linkText="view project"
        />
        <Banner
          image={Project5}
          title="Huma Marketing Agency"
          link="#"
          linkText="view project"
        />
        <Banner
          image={Project6}
          title="Huma Marketing Agency"
          link="#"
          linkText="view project"
        />
      </S.BannerWrapper>
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
            <Image src={Hypesoft} width={110} height={35} alt="" />
          </S.ImageWrapper>
        </S.Companys>
      </S.WorkInfo>
      <S.HireMe>
        <p>
          Got a project in mind? Let's make something awesome
          <span>together</span>.
        </p>
        <Button primary>Hire Me </Button>
      </S.HireMe>
      <Box h="100px" />
    </S.Container>
  );
};
