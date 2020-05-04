import React from "react";
import { Link } from "gatsby";
import stylesheet from "./NavbarSimple.module.less";
import links from "./links";
import HamburgerMenu from "./HamburgerMenu";
import useWindowDimensions from "../../hooks/window-dimensions";

function NavbarSimple() {
  const { width } = useWindowDimensions();
  if (width < 500) {
    return <HamburgerMenu />;
  } else {
    return (
      <nav
        className={stylesheet.simpleMenuContainer}
        role="navigation"
        aria-label="main-navigation"
      >
        <ul className={stylesheet.simpleMenu}>
          {links.map((link) => (
            <li className={stylesheet.simpleItem} key={link.label}>
              <Link to={link.pathname} className={stylesheet.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavbarSimple;
