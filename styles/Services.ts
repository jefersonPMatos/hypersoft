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
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
