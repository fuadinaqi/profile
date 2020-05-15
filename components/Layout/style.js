import styled, { keyframes } from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  position: absolute;
  display: table;
  overflow: hidden;
  height: 100%;
  width: 100%;

  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Helper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  background-color: ${theme.main};

  @media (min-width: 1024px) {
    max-height: 85vh;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 100%;
  }
`;

export const UpperMain = styled.div`
  overflow-y: auto;
  width: calc(100% - 50px);
`;

export const Main = styled.main`
  width: calc(100% - 50px);
  overflow-y: auto;
  padding: 1rem;

  animation: 0.5s ${fadeIn} ease-in-out;

  @media (min-width: 1024px) {
    width: calc(100% - 450px);
    padding: 3rem;
  }

  @media (max-width: 1023px) {
    overflow-y: unset;
    width: 100%;
  }
`;
