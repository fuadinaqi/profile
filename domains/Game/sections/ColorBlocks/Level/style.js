import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  > h3 {
    cursor: pointer;
  }

  > h2 {
    text-align: center;
  }

  > p {
    transition: 1s;
    text-align: center;
  }

  > .percentage {
    margin: 1em 0;
  }

  .gap {
    height: 5px;
    margin: 1em 0;
  }
`;

export const P = styled.p`
  transition: 0.5s;
  text-align: center;
  ${(props) =>
    props.triggerBig &&
    `
    font-size: 3rem;
    color: #2fc482;
    line-height: 1;

    > strong.title {
      font-size: 1rem;
    }
  `};

  > button {
    margin: 1em auto;
  }
`;

export const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 100px)`};
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px ${theme.main};
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
