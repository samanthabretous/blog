import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import links from "../links";
import stylesheet from "./index.module.less";

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItems() {
  return (
    <motion.ul variants={ulVariants}>
      {links.map((link) => (
        <motion.li
          variants={variants}
          whileTap={{ scale: 0.95 }}
          key={link.label}
        >
          <Link to={link.pathname} className={stylesheet.link}>
            {link.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
