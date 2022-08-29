import Image from "next/image";

import * as S from "./styles";

import Hypesoft from "../../images/hypersoft.png";
import { Box } from "../../components/Box";

export default function Footer() {
  return (
    <S.Container>
      <Box h="100px" />
      <Image src={Hypesoft} width={263} height={59} alt="" />
      <p>Made with ❤️ by Jeff P. Matos</p>
      <Box h="100px" />
    </S.Container>
  );
}
