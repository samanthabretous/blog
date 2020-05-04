import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import Hamburger from "./Hamburger";
import MenuItems from "./MenuItems";
import stylesheet from "./index.module.less";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90vw 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90vw 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={stylesheet.hamburgerMenu}
    >
      <motion.div className={stylesheet.background} variants={sidebar} />
      <MenuItems />
      <Hamburger toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
