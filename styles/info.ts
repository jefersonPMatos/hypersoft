import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div``;

export const Img = styled(Image)``;

export const Title = styled.div`
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
  }
`;

export const Description = styled.div`
  width: 550px;
  height: 96px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  flex-wrap: wrap;
`;

export const Data = styled.div``;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;
