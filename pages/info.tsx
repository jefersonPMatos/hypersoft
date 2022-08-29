import * as S from "../styles/info";
import PC from "../images/pc.png";
import { Button } from "../components/Button";

import Arrow from "../images/arrow.png";
import Image from "next/image";
import { Box } from "../components/Box";

export default function Info() {
  return (
    <S.Container>
      <S.ImgWrapper>
        <S.Img src={PC} width={400} height={400} alt="" />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <S.Title>
          <h1>
            Software Engineer and Infrastructure specialist based in Brazil.
          </h1>
        </S.Title>
        <S.Description>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </S.Description>
        <S.Data>
          <span>
            <h1>1+</h1>
            <p>years of experience</p>
          </span>
          <span>
            <h1>20+</h1>
            <p>Completed Projects</p>
          </span>
        </S.Data>
        <S.ActionButtons>
          <Button primary>
            SAY HI <Box w="10px" /> <Image src={Arrow} alt="" />
          </Button>
        </S.ActionButtons>
      </S.InfoWrapper>
    </S.Container>
  );
}
