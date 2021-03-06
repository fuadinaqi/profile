import styled from "styled-components";

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
`;

export const P = styled.p`
  transition: 1s;
  text-align: center;
  ${(props) =>
    props.triggerBig &&
    `
    font-size: 5rem;
    color: #2fc482;
    line-height: 1;

    > strong.title {
      font-size: 1rem;
    }
  `};
`;

export const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 100px)`};
`;
