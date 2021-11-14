import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer";
import stylesheet from "./mentorship.module.less";

const MentorshipPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className={stylesheet.hero}>
        <div className={stylesheet.titleContainer}>
          <p className={stylesheet.eyebrow}>MENTORSHIP</p>
          <h1 className={stylesheet.title}>
            Inspiring the next generation of software engineers.
          </h1>
          <h2 className={stylesheet.subheading}>
            Are you trying to break into tech but don't know where to start? Or
            a software engineer that feels stuck in their career. If so, I can
            help you out.
          </h2>
          <a
            className={stylesheet.button}
            href="https://tidycal.com/samanthabretous/60-minute-meeting"
            target="_blank"
            rel="noreferrer"
          >
            Book an Intro Call
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default MentorshipPage;
