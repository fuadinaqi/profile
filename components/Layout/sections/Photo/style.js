import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 90vh;
  top: -3vh;
  background-color: ${theme.main};

  > img {
    opacity: 0.4;
    position: relative;
  }

  @media (max-width: 1024px) {
    /* display: none; */
    width: 300px;
    height: 300px;
    border-radius: 100%;
    top: 0;
    margin: 0 auto;

    > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background: #434f30;
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    text-align: center;
  }

  > .text-wrapper {
    padding: 0 1rem;
    background-color: #ffffff;

    > h3.primary {
      color: ${theme.primary};
      margin-bottom: 0;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
