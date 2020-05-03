import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import cx from "classnames";
import ReactDOMServer from "react-dom/server";
import CodeBlock from "./CodeBlock";
import CodeBlockInline from "./CodeBlockInline";
import { MDXProvider } from "@mdx-js/react";
import stylesheet from "./Content.module.less";

export const HTMLContent = ({ content, className }) => {
  const components = {
    h3: (props) => <h3 {...props} className={stylesheet.headerAnchor} />,
    img: (props) => <img {...props} className={stylesheet.image} />,
    a: (props) => <a {...props} className={stylesheet.anchor} />,
    code: CodeBlock,
    inlineCode: CodeBlockInline,
  };

  const mdxContent = (
    <MDXProvider components={components}>
      <MDXRenderer>{content}</MDXRenderer>
    </MDXProvider>
  );
  return <div className={cx(stylesheet.copy, className)}>{mdxContent}</div>;
};

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
