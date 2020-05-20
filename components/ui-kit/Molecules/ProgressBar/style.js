import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  margin: 1rem 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h4 {
    margin-bottom: 0.5rem;

    &.primary {
      color: ${theme.primary};
    }
  }
`;
