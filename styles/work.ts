import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Inter";
    font-weight: 400;
  }

  hr {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 2px;
    border: 0;
    background-color: #ed1ca6;
    width: 60px;
    margin-top: -10px;
    margin-bottom: 50px;
  }
`;

export const WorkInfo = styled.div`
  display: flex;
`;

export const Info = styled.div`
  width: 350px;
  font-size: 18px;
  span {
    color: #ed1ca6;
  }
`;
export const Companys = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 5px;
  padding: 20px;
  background-color: #000;
`;

export const Hireme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid red;
  width: 1150px;
  height: 300px;

  p {
    font-family: "Inter";
    font-size: 24px;
    width: 400px;

    span {
      color: #ed1ca6;
    }
  }
`;
