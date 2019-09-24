import React, {useState} from "react";
import PropTypes from "prop-types";

import stylesheet from "./CookiePopUp.module.less";

const cookieName = "com.samanthabretous_COOKIE_CONSENT";
const cookieLifeSpan = 365; // days

/**
 * Set a cookie
 * @param cname - cookie name
 * @param cvalue - cookie value
 * @param exdays - expiry in days
 */
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/**
 * Get a cookie
 * @param cname - cookie name
 * @returns string
 */
const getCookie = cname => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const CookiePopUp = ({cookie, className}) => {
  const [shouldShowPopUp, setShouldShowPopUp] = useState(
    !getCookie(cookieName)
  );

  const hidePopUp = () => {
    setCookie(cookieName, true, cookieLifeSpan);
    setShouldShowPopUp(!getCookie(cookieName));
  };

  return (
    shouldShowPopUp && (
      <div
        className={stylesheet.cookieJar}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="cookiePopUp"
      >
        <p className={stylesheet.cookiesCopy}>
          This website uses cookies to ensure you get the best experience on our
          website.
          <a className={stylesheet.policyLink}> Learn more</a>
        </p>
        <button onClick={hidePopUp} className={stylesheet.consentBtn}>
          GOT IT
        </button>
      </div>
    )
  );
};

CookiePopUp.propTypes = {
  cookie: PropTypes.node,
  className: PropTypes.string
};

export default CookiePopUp;
