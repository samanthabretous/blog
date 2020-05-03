import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import stylesheet from "./welcome.module.less";
import EmailListForm from "../../components/EmailListForm";
import Modal from "../../components/Modal";
import Home from "./Home";
import Links from "./Links";
import About from "./About";

function Welcome({ data }) {
  const [showModal, setShowModal] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [lastScrollPosition, setLastScrollPosition] = useState();
  const [showFirstView, setShowFirstView] = useState();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        console.log(v);
      }),
    [yRange]
  );

  return (
    <>
      <div className={stylesheet.root}>
        <Home />
        <Links setShowModal={setShowModal} />
        <About />
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <EmailListForm pathname="/welcome" />
      </Modal>
    </>
  );
}

export default Welcome;
