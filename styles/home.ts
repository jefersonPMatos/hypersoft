import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  position: absolute;
  flex-direction: column;
  height: 100vh;
  width: 758px;
  left: 210px;
`;

export const Personal = styled.div`
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
  color: #a5a5a5;
  margin-bottom: 20px;
`;

export const Photo = styled.div`
  position: absolute;
  left: 730px;
  top: 146px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  gap: 8px;

  span {
    display: flex;
    gap: 8px;
  }
`;

export const Img = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
