import Image, { StaticImageData } from "next/image";

import * as S from "./styles";

import { Box } from "../Box";

import Arrow from "../../images/arrow.png";

type Props = {
  icon: StaticImageData;
  title: string;
  link: string;
  linkText: string;
};

export const Card = ({ icon, title, link, linkText }: Props) => {
  return (
    <S.Container>
      <S.Icon>
        <Image src={icon} width={30} height={30} />
      </S.Icon>
      <Box h="50px" />

      <S.Title>{title}</S.Title>
      <hr />
      <S.ActionButton>
        <S.Link href={link}>
          <span>{linkText}</span>
          <Image src={Arrow} />
        </S.Link>
      </S.ActionButton>
    </S.Container>
  );
};
