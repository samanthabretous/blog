import React from "react";
import { motion } from "framer-motion";
import { YouTube } from "../../icons";
import stylesheet from "./welcome.module.less";
import cx from "classnames";
import COLORS from "../../utils/colors";

function Home() {
  return (
    <section className={cx(stylesheet.view, stylesheet.view1)}>
      <div className={cx(stylesheet.inner, stylesheet.homeContent)}>
        <div className={stylesheet.intro}>
          <div className={stylesheet.stroke2}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0,0 L200,0 L200,200"
                fill="none"
                stroke={COLORS.BLUE}
                strokeWidth="20"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 1] }}
                transition={{
                  duration: 0.5,
                  times: [0, 0, 1],
                  delay: 0.7,
                }}
              />
            </svg>
          </div>
          <motion.img
            className={stylesheet.image}
            src="/img/welcome-assets/welcome-photo.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
          />
          <div className={stylesheet.stroke1}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M200,200 L0,200 L0,0"
                fill="none"
                stroke={COLORS.BLUE}
                strokeWidth="20"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 1] }}
                transition={{
                  duration: 0.5,
                  times: [0, 0, 1],
                  delay: 0.3,
                }}
              />
            </svg>
          </div>
          <div className={stylesheet.tagline}>
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                overflow: "hidden",
              }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className={stylesheet.taglineH1}>Well,</h1>
            </motion.div>
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                overflow: "hidden",
              }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={stylesheet.taglineH1}>hello there</h1>
            </motion.div>
          </div>
        </div>
        <div className={stylesheet.ctaContainer}>
          <motion.a
            href="https://www.youtube.com/channel/UCBTyDqhBDleV8T4NakT_zXg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "backInOut",
            }}
            className={stylesheet.youTubeButton}
          >
            <YouTube width="15%" />
            <p>WATCH NOW</p>
          </motion.a>
          <motion.div
            className={stylesheet.arrow}
            initial={{
              y: "0%",
            }}
            animate={{
              y: "50%",
            }}
            transition={{
              duration: 0.5,
              yoyo: Infinity,
              ease: "easeOut",
            }}
          >
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50,50 L0,50 L0,0"
                fill="none"
                stroke={COLORS.BLACK}
                strokeWidth="25"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
