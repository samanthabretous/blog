import React from "react";
import Loadable from "react-loadable";

import Layout from "../../components/Layout";
import stylesheet from "./index.module.less";
import Navbar from "../../components/Navigation/Navbar";

const TextAreaContent = Loadable({
  loader: () => import("./Textarea"), // imports the component with the three.js and allows use of it safely
  loading: () => <div>Loading...</div>,
});

export default function TextareaPage() {
  return (
    <Layout>
      <Navbar />
      <div className={stylesheet.container}>
        <div className={stylesheet.content}>
          <TextAreaContent />
        </div>
      </div>
    </Layout>
  );
}
