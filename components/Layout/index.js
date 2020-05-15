import useWindowWidth from "hooks/useWindowWidth";
import { Wrapper, Helper, Container, UpperMain, Main } from "./style";
import Sidebar from "./sections/Sidebar";
import Photo from "./sections/Photo";

function Child({ children }) {
  const { name } = useWindowWidth();

  if (!name) return "";

  if (name !== "large") {
    return (
      <UpperMain>
        <Photo />
        <Main>{children}</Main>
      </UpperMain>
    );
  }

  return (
    <>
      <Photo />
      <Main>{children}</Main>
    </>
  );
}

function Layout(props) {
  return (
    <Wrapper>
      <Helper>
        <Container>
          <Sidebar />
          <Child {...props} />
        </Container>
      </Helper>
    </Wrapper>
  );
}

export default Layout;
