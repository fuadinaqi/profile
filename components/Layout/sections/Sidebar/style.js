import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  width: 50px;
  height: 100%;
  /* box-shadow: 1px 0px 4px 1px #000; */

  /* @media (max-width: 1023px) {
    width: 100px;
  } */
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary};
  width: 100%;
  height: 50px;

  > img {
    width: 20px;
  }
`;

export const MenuItemContainer = styled.div`
  margin-top: 2rem;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;

  > img {
    width: 20px;
  }
`;
