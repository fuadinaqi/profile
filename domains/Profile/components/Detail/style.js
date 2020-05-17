import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  margin: 1.5rem 0;

  > strong {
    color: ${theme.primary};
  }

  > h4 {
    margin: 0.5rem 0;
  }

  > .titleDesc {
    color: ${theme.textTertiary};
    margin: 0.5rem 0;
  }
`;
