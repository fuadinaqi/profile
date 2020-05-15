import { Wrapper, Helper, Container, Main } from "./style";
import Sidebar from "./sections/Sidebar";
import Photo from "./sections/Photo";

function Layout({ children }) {
  return (
    <Wrapper>
      <Helper>
        <Container>
          <Sidebar />
          <Photo />
          <Main>{children}</Main>
        </Container>
      </Helper>
    </Wrapper>
  );
}

export default Layout;
