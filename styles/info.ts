import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 100px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
`;

export const ImgWrapper = styled.div`
  border-radius: 5px;
  -webkit-box-shadow: 18px 21px 0px 1px #fff;
  box-shadow: 18px 21px 0px 1px #fff;
`;

export const Img = styled(Image)``;

export const Title = styled.div`
  display: flex;
  width: 600px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
  }
`;

export const Description = styled.div`
  width: 550px;
  height: 96px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  color: #a5a5a5;
  flex-wrap: wrap;
`;

export const Data = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: "Inter";

  h1 {
    color: #ed1ca6;
    font-size: 40px;
    font-weight: 400;
  }

  p {
    font-size: 12px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    gap: 10px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;
