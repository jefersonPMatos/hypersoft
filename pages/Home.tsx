import Head from "next/head";
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <S.Container id="1">
        <Box h="100vh" w="40vw" bg="#7D00FF" />
        <Box w="60vw" />
        <S.Photo>
          <S.Img src={profile} width={500} height={600} />
        </S.Photo>
        <S.Wrapper>
          <S.Personal>
            <h1>
              Hello, i'm Jeferson, a<br /> Web developer FullStack.
            </h1>
          </S.Personal>
          <S.Description>
            <p>
              Product Designer, UI/UX Designer, and developer based in Brazil.
              Over the past 17 years, as an art director and designer, I’ve
              worked with big companies and up-and-coming startups.
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
                <S.Img src={Ball} width={15} height={15} />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Be} width={15} height={15} fill="#000" />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Facebook} width={15} height={15} />
              </Button>
              <Button w="35px" h="35px">
                <S.Img src={Twitter} width={15} height={15} />
              </Button>
            </span>
          </S.SocialMedia>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
