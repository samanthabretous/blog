import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import CookiePopUp from "./CookiePopUp";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      {/* <CookiePopUp /> */}
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
