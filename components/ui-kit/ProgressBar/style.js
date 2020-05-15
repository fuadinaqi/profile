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

export const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  border-radius: 10px;
  background-color: ${theme.textSecondary};
`;

export const BarValue = styled.div`
  height: 5px;
  border-radius: 10px;
  transition: 1s cubic-bezier(0.12, -0.01, 0, 0.99);
  width: ${(props) => `${props.percentage}%`};
  background-color: ${theme.primary};
`;
