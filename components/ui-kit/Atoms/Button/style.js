import styled from "styled-components";
import theme from "theme";

export const StyledButton = styled.button`
  border: none;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.primary};
  font-size: 1rem;
  cursor: pointer;
`;
