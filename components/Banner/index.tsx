import Image, { StaticImageData } from "next/image";
import * as S from "./styles";

import Arrow from "../../images/arrow.png";

type Props = {
  image: StaticImageData;
  title: string;
  link: string;
  linkText: string;
};

export const Banner = ({ image, title, link, linkText }: Props) => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src={image} />
      </S.ImageWrapper>
      <span>
        <S.Title>{title}</S.Title>
        <S.Link href={link}>
          <span>{linkText}</span>
          <Image src={Arrow} />
        </S.Link>
      </span>
    </S.Container>
  );
};
