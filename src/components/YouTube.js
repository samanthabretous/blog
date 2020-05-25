import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import stylesheet from "./YouTube.module.less";

function YouTube({ className, url }) {
  return (
    <div className={cx(stylesheet.container, className)}>
      <iframe
        className={stylesheet.video}
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

YouTube.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default YouTube;
