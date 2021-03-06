import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  > strong {
    display: flex;
    flex-wrap: wrap;
    color: ${theme.primary};

    > span {
      margin: 0 1rem;
      color: ${theme.textSecondary};
    }
  }

  > p {
    margin-top: 2rem;
  }
`;
