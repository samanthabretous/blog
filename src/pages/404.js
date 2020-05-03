import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { Logo } from "../icons";
import NavbarSimple from "../components/Navigation/NavbarSimple";

import stylesheet from "./404.module.less";

const NotFoundPage = () => (
  <Layout>
    <div className={stylesheet.container}>
      <NavbarSimple />
      <Link
        to="/"
        className={stylesheet.logoWrapper}
        title="Samantha Bretous Logo"
      >
        <Logo width={200} color="#ffd45a" />
      </Link>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
