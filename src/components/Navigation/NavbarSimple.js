import React from "react";
import { Link } from "gatsby";
import stylesheet from "./NavbarSimple.module.less";
import NavLink, { links } from "./Links";
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
              <NavLink link={link} className={stylesheet.link} />
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenu />
    </>
  );
}

export default NavbarSimple;
