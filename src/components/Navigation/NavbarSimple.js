import React from "react";
import { Link } from "gatsby";
import stylesheet from "./NavbarSimple.module.less";
import links from "./links";
import HamburgerMenu from "./HamburgerMenu";

function NavbarSimple() {
  if (typeof window !== "undefined" && window.innerWidth < 500) {
    return <HamburgerMenu />;
  }
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

export default NavbarSimple;
