import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  > strong {
    color: ${theme.primary};
  }

  > .location {
    color: ${theme.textTertiary};
  }
`;
