import React from "react";
import {Link} from "gatsby";
import stylesheet from "./NavbarSimple.module.less";
import cx from "classnames";

const Navbar = class extends React.Component {
  render() {
    return (
      <nav
        className={stylesheet.simpleMenuContainer}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={stylesheet.simpleMenu}>
          <Link className={stylesheet.simpleItem} to="/blog">
            BLOG
          </Link>
          <Link className={stylesheet.simpleItem} to="/contact">
            CONTACT
          </Link>
          {/* <a
            className={cx(stylesheet.simpleItem, stylesheet.simpleSubscribe)}
            href="http://eepurl.com/dF-xnP"
          >
            SUBSCRIBE
          </a> */}
        </div>
      </nav>
    );
  }
};

export default Navbar;
