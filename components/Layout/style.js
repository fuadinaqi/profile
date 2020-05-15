import styled from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  position: absolute;
  display: table;
  overflow: hidden;
  height: 100%;
  width: 100%;
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

export const Main = styled.main`
  width: calc(100% - 450px);
  height: 100%;
  overflow-y: auto;
  padding: 3rem;
`;
