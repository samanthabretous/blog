import React from "react";
import {Link} from "gatsby";
import stylesheet from "./Navbar.module.less";
import {Logo} from "../icons";
import cx from "classnames";

const Navbar = class extends React.Component {
  constructor(props) {
    super();
    this.state = {
      logoWidth: 150
    };
  }

  componentDidMount() {
    const {showProgressBar} = this.props;
    const growShrinkLogo = () => {
      let width = this.state.logoWidth;
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        width = 80;
      } else {
        width = 150;
      }
      this.setState({logoWidth: width});
    };
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
      growShrinkLogo();
      showProgressBar && runProgressBar();
    };
  }
  // componentDidMount() {
  //   // Get all "navbar-burger" elements
  //   const $navbarBurgers = Array.prototype.slice.call(
  //     document.querySelectorAll(".navbar-burger"),
  //     0
  //   );
  //   // Check if there are any navbar burgers
  //   if ($navbarBurgers.length > 0) {
  //     // Add a click event on each of them
  //     $navbarBurgers.forEach(el => {
  //       el.addEventListener("click", () => {
  //         // Get the target from the "data-target" attribute
  //         const target = el.dataset.target;
  //         const $target = document.getElementById(target);

  //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //         el.classList.toggle("is-active");
  //         $target.classList.toggle("is-active");
  //       });
  //     });
  //   }
  // }

  render() {
    const {logoWidth} = this.state;
    const {showProgressBar} = this.props;
    return (
      <nav
        className={stylesheet.navbar}
        style={{
          height: showProgressBar ? "72px" : "60px"
        }}
        role="navigation"
        aria-label="main-navigation"
      >
        {this.props.showProgressBar && (
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
              transition: `height 500ms ease`
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

        <div className={stylesheet.navbarMenu}>
          <Link className={stylesheet.item} to="/blog">
            BLOG
          </Link>
          <Link className={stylesheet.item} to="/contact">
            CONTACT
          </Link>
          {/* <a
            className={cx(stylesheet.item, stylesheet.subscribe)}
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
