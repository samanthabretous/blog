import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export const links = [
  {
    label: "BLOG",
    pathname: "/blog",
  },
  {
    label: "FAQ",
    pathname: "/faq",
  },
  {
    label: "YOUTUBE",
    pathname: "https://www.youtube.com/channel/UCBTyDqhBDleV8T4NakT_zXg",
  },
  {
    label: "CONTACT",
    pathname: "/contact",
  },
];

function Links({ link, className }) {
  return (
    <>
      {link.pathname.startsWith("/") ? (
        <Link to={link.pathname} className={className}>
          {link.label}
        </Link>
      ) : (
        <a href={link.pathname} target="_blank" className={className}>
          {link.label}
        </a>
      )}
    </>
  );
}

Links.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Links;
