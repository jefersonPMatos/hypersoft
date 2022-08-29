import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  width: 280px;
  height: 270px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;

  span {
    background-color: #fff;
    border-radius: 0 0 5px 5px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  border-radius: 5px;
`;

export const Title = styled.div`
  padding: 10px 20px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
`;

export const Link = styled.a`
  padding: 0px 20px;
  display: flex;
  width: 200px;
  margin-bottom: 10px;

  span {
    display: none;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    color: #ed1ca6;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }

  &:hover {
    span {
      display: flex;
    }
  }
`;
