import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  > a {
    width: 100%;

    > div.card {
      margin-bottom: 1rem;
      text-align: center;
      user-select: none;
    }
  }
`;
