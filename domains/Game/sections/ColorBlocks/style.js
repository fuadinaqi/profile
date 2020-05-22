import styled from "styled-components";

export const Container = styled.div`
  > h3 {
    cursor: pointer;
  }

  > .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;

    > strong {
      margin-top: 1rem;
    }
  }

  > hr {
    margin: 1rem 0;
  }
`;
