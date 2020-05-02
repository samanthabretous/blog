import React from "react";
import {Link} from "gatsby";
import {Logo} from "../icons";
import NavbarSimple from "../components/NavbarSimple";

import stylesheet from "./Home.module.less";

const Home = () => {
  return (
    <section className={stylesheet.homeSection}>
      <NavbarSimple />
      <Link
        to="/"
        className={stylesheet.logoWrapper}
        title="Samantha Bretous Logo"
      >
        <Logo width={200} color="#ffd45a" />
      </Link>
      <h1 className={stylesheet.blurb}>
        Helping create stronger software engineers through my story
      </h1>
      <p className={stylesheet.about}>
        I’m a UX Engineer based in New York City. I’m passionate about side
        projects and helping developers who look like me progress in tech.
      </p>
      <p className={stylesheet.about}>
        By day I love to code and DIY. At night I sleep. Come chat with me on{" "}
        <a
          className={stylesheet.twitter}
          href="https://twitter.com/samanthabretous"
        >
          Twitter
        </a>
        .
      </p>
    </section>
  );
};

export default Home;
