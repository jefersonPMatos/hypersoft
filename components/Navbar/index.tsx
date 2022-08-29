import { Link } from "react-scroll";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.List>
          <S.ListItem>
            <Link to="1" smooth={true}>
              about
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="2" smooth={true}>
              Services
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="3" smooth={true}>
              works
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="4" smooth={true}>
              contact
            </Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
    </S.Container>
  );
};
