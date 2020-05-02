import React, { useRef, useState, useEffect } from "react";

import Layout from "../../components/Layout";
import stylesheet from "./index.module.less";
import Navbar from "../../components/Navbar";

export default function TextInput() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  useEffect(() => {
    setTimeout(() => setCopySuccess(""), 3000);
  }, [copySuccess]);
  return (
    <Layout>
      <Navbar />
      <div className={stylesheet.container}>
        <div className={stylesheet.content}>
          <form>
            <textarea
              ref={textAreaRef}
              className={stylesheet.textarea}
              rows="15"
              cols="75"
              type="text"
            />
            {document.queryCommandSupported("copy") && (
              <div className={stylesheet.buttonContainer}>
                <input
                  type="button"
                  value="Copy"
                  className={stylesheet.button}
                  onClick={copyToClipboard}
                />
                <input
                  type="reset"
                  defaultValue="Reset"
                  className={stylesheet.button}
                />
                <p className={stylesheet.copySucess}>{copySuccess}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
}
