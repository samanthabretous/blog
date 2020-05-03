import React from "react";
import { Link } from "gatsby";
import stylesheet from "./Footer.module.less";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className={stylesheet.footerContainer}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={stylesheet.footer}>
          <div className={stylesheet.footerLinks}>
            <p className={stylesheet.footerItem}>FOLLOW</p>
            <a
              className={stylesheet.footerItem}
              href="https://twitter.com/samanthabretous"
            >
              twitter
            </a>
            <a
              className={stylesheet.footerItem}
              href="https://www.linkedin.com/in/samanthabretous/"
            >
              linkedin
            </a>
            <a
              className={stylesheet.footerItem}
              href="https://github.com/samanthabretous"
            >
              github
            </a>
            <Link className={stylesheet.footerItem} to="/contact">
              contact
            </Link>
          </div>
          <div className={stylesheet.missionContainer}>
            <p className={stylesheet.mission}>
              I want to help you level up in your tech career through my
              experience. Every one deserves a career they love, all it takes is
              a little guidance.
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
