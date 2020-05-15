import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, MenuBar, MenuItemContainer, MenuItem } from "./style";
import { menu } from "./data";
import { getInitialActive } from "./utils";

function Sidebar() {
  const router = useRouter();
  const [active, setActive] = useState(getInitialActive(router.pathname));

  function onClickMenu(name) {
    return function () {
      setActive(name);
    };
  }

  return (
    <Container>
      <MenuBar>
        <img src="/images/menu.svg" alt="hamburger" />
      </MenuBar>
      <MenuItemContainer>
        {menu.map(({ id, name }) => {
          const src = name === active ? `/images/${name}-active.svg` : `/images/${name}.svg`;
          const href = name === "profile" ? "/" : `/${name}`;
          return (
            <Link href={href} key={id}>
              <a>
                <MenuItem onClick={onClickMenu(name)}>
                  <img src={src} alt={name} />
                </MenuItem>
              </a>
            </Link>
          );
        })}
      </MenuItemContainer>
      <div />
    </Container>
  );
}

export default Sidebar;
