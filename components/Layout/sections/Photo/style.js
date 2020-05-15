import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 90vh;
  top: -3vh;
  background-color: ${theme.main};

  @media (max-width: 1024px) {
    display: none;
  }
`;
