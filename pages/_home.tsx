import * as S from "../styles/home";

import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";

import profile from "../images/photo.png";

import Ball from "../images/ball.svg";
import Be from "../images/be.svg";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";

export const Home = () => {
  return (
    <>
      <Navbar />

      <S.Container id="1">
        <Box h="100vh" w="40vw" bg="#7D00FF" />
        <Box w="60vw" />
        <S.Photo>
          <S.Img src={profile} width={500} height={600} alt="" />
        </S.Photo>
        <S.Wrapper>
          <S.Personal>
            <h1>
              Hello, i'm Jeferson, a<br /> Web developer FullStack.
            </h1>
          </S.Personal>
          <S.Description>
            <p>
              My name is Jeferson and I enjoy creating things that live on the
              internet. My interest in web development started when I decided to
              try editing custom Blogspot themes — turns out hacking together a
              custom reblog button taught me a lot about HTML & CSS!
            </p>
          </S.Description>
          <S.ActionButtons>
            <Button primary>HIRE ME</Button>
            <Button>VIEW WORK</Button>
          </S.ActionButtons>

          <S.SocialMedia>
            Follow me on:
            <span>
              <Button w="35px" h="35px">
                <S.Img src={Ball} width={15} height={15} alt="" />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Be} width={15} height={15} alt="" />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Facebook} width={15} height={15} alt="" />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Twitter} width={15} height={15} alt="" />
              </Button>
            </span>
          </S.SocialMedia>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
