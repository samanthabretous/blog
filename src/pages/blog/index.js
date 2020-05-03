import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <BlogRoll />
        <Footer />
      </Layout>
    );
  }
}
