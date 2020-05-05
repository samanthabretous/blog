import React from "react";
import { Link } from "gatsby";
import stylesheet from "./NavbarSimple.module.less";
import links from "./links";
import HamburgerMenu from "./HamburgerMenu";

function NavbarSimple() {
  return (
    <>
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
      <HamburgerMenu />
    </>
  );
}

export default NavbarSimple;
