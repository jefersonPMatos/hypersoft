import styled, { css } from "styled-components";

export const Container = styled.button<{
  primary: boolean;
  fs: string;
  w: string;
  h: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  cursor: pointer;
  font-size: ${(props) => props.fs || "14px"};
  border: none;
  border-radius: 5px;
  padding: 0px, 32px, 0px, 32px;
  transition: all 0.4s ease;
  width: ${(props) => props.w || "125px"};
  height: ${(props) => props.h || "50px"};
  ${(props) => {
    if (props.primary) {
      return css`
        background: #7d00ff;
        color: #fff;
        border: none;

        &:hover {
          opacity: 0.8;
        }
      `;
    } else {
      return css`
        background: #fff;
        color: #000;
        &:hover {
          opacity: 0.8;
          background: #7d00ff;
          color: #fff;
        }
      `;
    }
  }}
`;
