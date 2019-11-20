import React, {useEffect} from "react";
import Layout from "../components/Layout";
import "./index.module.less";
import stylesheet from "./index.module.less";
import Home from "../components/Home";

const IndexPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#42215E";
    // componentWillUnmount
    return () => {
      document.body.style.backgroundColor = "#FFFFFF";
    };
  }, []);
  return (
    <Layout>
      <div className={stylesheet.homePage}>
        <Home />
      </div>
    </Layout>
  );
};

export default IndexPage;
