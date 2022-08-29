import * as S from "./styles";

type Props = {
  jc?: string;
  ac?: string;
  ai?: string;
  w?: string;
  h?: string;
  pt?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  bg?: string;
  r?: string;
  children?: any;
};

export const Box = ({ children, ...rest }: Props) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
