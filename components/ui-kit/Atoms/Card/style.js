import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: 1rem;
  border-radius: 0.5em;
  background-color: #292929;
  box-shadow: 0px 0px 5px 0px #000000;
  cursor: pointer;

  :hover {
    background-color: #3a3a3a;
  }

  :active {
    background-color: #3a3a3a;
  }
`;
