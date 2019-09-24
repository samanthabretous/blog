import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import "./index.module.less";
import stylesheet from "./index.module.less";
import Home from "../components/Home";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={stylesheet.homePage}>
          <Home />
        </div>
      </Layout>
    );
  }
}
