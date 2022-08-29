import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 200px;
  height: 230px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;

  hr {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 1px;
    border: 0;
    background-color: #ed1ca6;
    width: 60px;
    margin: 10px 0;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: left;
`;

export const Link = styled.a`
  display: flex;
  width: 200px;

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

export const Title = styled.div`
  display: flex;
  justify-content: left;
  font-size: 24px;
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: left;
`;
