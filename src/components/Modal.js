import React from "react";
import PropTypes from "prop-types";
import stylesheet from "./Modal.module.less";

export default function Modal({ children, onClose, show }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className={stylesheet.modal}>
        <button
          className={stylesheet.close}
          onClick={(e) => onClose && onClose(e)}
        >
          close
        </button>
        <div className={stylesheet.content}>{children}</div>
      </div>
      <div className={stylesheet.overlay} />
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
