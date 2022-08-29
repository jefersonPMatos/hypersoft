import * as S from "../styles/info";
import PC from "../images/pc.png";
import { Button } from "../components/Button";

export const Info = () => {
  return (
    <S.Container>
      <S.Img src={PC} />
      <S.Title>
        Software Engineer and Infrastructure specialist based in Brazil.
      </S.Title>
      <S.Description>
        Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
        finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
        enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
        commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
        interdum interdum.
      </S.Description>
      <S.Data>
        <h1>17+</h1>
        <p>years of experience</p>
        <h1>325+</h1>
        <p>Completed Projects</p>
      </S.Data>
      <S.ActionButtons>
        <Button>SAY HI</Button>
      </S.ActionButtons>
    </S.Container>
  );
};
