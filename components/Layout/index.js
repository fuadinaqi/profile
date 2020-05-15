import { Wrapper, Helper, Container } from "./style";
import Sidebar from "./sections/Sidebar";

function Layout({ children }) {
  return (
    <Wrapper>
      <Helper>
        <Container>
          <Sidebar />
          <main>{children}</main>
        </Container>
      </Helper>
    </Wrapper>
  );
}

export default Layout;
