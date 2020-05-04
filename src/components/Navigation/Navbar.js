import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import stylesheet from "./Navbar.module.less";
import { Logo } from "../../icons";
import links from "./links";
import HamburgerMenu from "./HamburgerMenu";
import useWindowDimensions from "../../hooks/window-dimensions";

function Navbar({ showProgressBar }) {
  const [logoWidth, setLogoWidth] = useState(150);
  const [navHeight, setNavHeight] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    const growShrinkLogo = () => {
      let width = logoWidth;
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        width = 80;
      } else {
        width = 150;
      }
      setLogoWidth(width);
    };

    window.onscroll = function() {
      growShrinkLogo();
    };
  }, [logoWidth]);

  useEffect(() => {
    const runProgressBar = () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    };
    window.onscroll = function() {
      showProgressBar && runProgressBar();
    };
  }, [showProgressBar]);

  useEffect(() => {
    if (showProgressBar) {
      setNavHeight("72px");
    } else {
      setNavHeight("60px");
    }
  }, [showProgressBar]);

  return (
    <>
      <div
        className={stylesheet.navbar}
        role="navigation"
        aria-label="main-navigation"
        style={{
          height: navHeight,
        }}
      >
        {showProgressBar && (
          <div className={stylesheet.progressContainer}>
            <div className={stylesheet.progressBar} id="myBar"></div>
          </div>
        )}
        <div>
          <Link
            to="/"
            className={stylesheet.logoWrapper}
            title="Samantha Bretous Logo"
            style={{
              height: logoWidth === 150 ? 150 : 60,
              transition: `height 500ms ease`,
            }}
          >
            <Logo color="#42215E" width={logoWidth} />
          </Link>
          <Link
            to="/"
            className={stylesheet.website}
            title="samanthabretous.com"
          >
            samanthabretous.com
          </Link>
        </div>
        {width > 500 && (
          <nav>
            <ul className={stylesheet.navbarMenu}>
              {links.map((link) => (
                <li className={stylesheet.item} key={link.label}>
                  <Link to={link.pathname} className={stylesheet.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      {width < 500 && <HamburgerMenu />}
    </>
  );
}

export default Navbar;
