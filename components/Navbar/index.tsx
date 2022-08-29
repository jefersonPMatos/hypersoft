import Link from "next/link";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.List>
          <S.ListItem>
            <Link href="/about">
              <a>about</a>
            </Link>
          </S.ListItem>

          <S.ListItem>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link href="/works">
              <a>works</a>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
    </S.Container>
  );
};
