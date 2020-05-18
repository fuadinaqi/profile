import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  > .item {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    > img {
      margin-right: 1rem;
    }

    a {
      color: ${theme.primary};
      white-space: nowrap;
    }
  }
`;
