import styled from "styled-components";

const Container = styled.div``;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
