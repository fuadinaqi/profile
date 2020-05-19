import styled, { keyframes, css } from "styled-components";
import theme from "theme";

export const Container = styled.div`
  > h3 {
    cursor: pointer;
  }

  > h2 {
    text-align: center;
  }

  > button {
    display: flex;
    margin: 1rem auto;
  }
`;

export const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 100px)`};
`;

function animatedBgColor({ defaultBg, correctBg, wrongBg, correct }) {
  const currentBg = correct ? correctBg : wrongBg;

  return keyframes`
    0% {
      background-color: ${defaultBg};
    }
    50% {
      background-color: ${correct !== undefined ? currentBg : defaultBg};
    }
    100% {
      background-color: ${defaultBg};
    }
  `;
}

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: solid 1px #ffffff;
  cursor: pointer;
  user-select: none;
  background-color: #000000;
  animation: 0.5s
    ${(props) =>
      animatedBgColor({
        defaultBg: "#000000",
        correctBg: theme.primary,
        wrongBg: "red",
        correct: props.correct,
      })}
    ease-in-out infinite;
  box-sizing: border-box;
`;
