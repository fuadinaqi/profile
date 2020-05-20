import styled from "styled-components";
import theme from "theme";

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
