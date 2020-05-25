import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import NavLink, { links } from "../Links";
import stylesheet from "./index.module.less";
import { Logo } from "../../../icons";

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
    <motion.ul className={stylesheet.ul} variants={ulVariants}>
      <motion.li
        variants={variants}
        whileTap={{ scale: 0.95 }}
        className={stylesheet.li}
      >
        <Link
          to="/"
          className={stylesheet.logoWrapper}
          title="Samantha Bretous Logo"
        >
          <Logo color="#42215E" width={150} />
        </Link>
      </motion.li>
      {links.map((link) => (
        <motion.li
          variants={variants}
          whileTap={{ scale: 0.95 }}
          key={link.label}
          className={stylesheet.li}
        >
          <NavLink link={link} className={stylesheet.link} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
