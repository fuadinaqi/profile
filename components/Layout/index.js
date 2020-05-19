import { useState, createContext } from "react";
import useWindowWidth from "hooks/useWindowWidth";
import { Wrapper, Helper, Container, UpperMain, Main } from "./style";
import Sidebar from "./sections/Sidebar";
import Photo from "./sections/Photo";

export const LayoutContext = createContext();

function Child({ withPhoto, children }) {
  const { name } = useWindowWidth();

  if (!name) return "";

  if (name !== "large") {
    return (
      <UpperMain>
        {withPhoto && <Photo />}
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
  const [withPhoto, setWithPhoto] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        setWithPhoto,
      }}
    >
      <Wrapper>
        <Helper>
          <Container>
            <Sidebar />
            <Child withPhoto={withPhoto} {...props} />
          </Container>
        </Helper>
      </Wrapper>
    </LayoutContext.Provider>
  );
}

export default Layout;
