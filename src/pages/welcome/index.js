import React, { useEffect, useState, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stylesheet from "./welcome.module.less";
import EmailListForm from "../../components/EmailListForm";
import Modal from "../../components/Modal";
import { wrap } from "@popmotion/popcorn";
import Home from "./Home";
import Links from "./Links";
import About from "./About";

function Welcome({ data }) {
  const [showModal, setShowModal] = useState(false);

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
