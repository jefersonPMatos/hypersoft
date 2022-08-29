import Image from "next/image";

import * as S from "../styles/footer";

import Hypesoft from "../images/hypersoft.png";
import { Box } from "../components/Box";

export const Footer = () => {
  return (
    <S.Container>
      <Box h="100px" />
      <Image src={Hypesoft} width={263} height={59} />
      <p>Made with ❤️ by Jeff P. Matos</p>
      <Box h="100px" />
    </S.Container>
  );
};
