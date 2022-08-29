import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  top: 0.1px;
  position: absolute;
  border-radius: 4px;
  z-index: 99;
  transition: all 0.3s ease;
  padding: 5px;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 4px;
  height: 50px;
  list-style-type: none;
  gap: 20px;
  margin-right: 250px;
`;

export const ListItem = styled.li`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    transition: all ease 0.3s;
    border-bottom: 2px solid #fff;
  }
`;
