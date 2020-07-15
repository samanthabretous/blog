import React, { useRef, useState, useEffect } from "react";

import stylesheet from "./index.module.less";

export default function Textarea() {
  const [copySuccess, setCopySuccess] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [readTime, setReadTime] = useState("");
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  function calcReadTime(text) {
    const wordsPerMinute = 200; // Average case.
    let result;

    let wordCount = text.split(/\s/g).length; // Split by words
    if (wordCount > 0) {
      result = Math.ceil(wordCount / wordsPerMinute);
    }
    setReadTime(result - 1);
  }

  function handleOnChange(event) {
    calcReadTime(event.target.value);
    setTextAreaValue(event.target.textAreaRef);
  }

  useEffect(() => {
    setTimeout(() => setCopySuccess(""), 3000);
  }, [copySuccess]);
  return (
    <div>
      <form>
        <textarea
          ref={textAreaRef}
          className={stylesheet.textarea}
          rows="15"
          cols="75"
          type="text"
          onChange={handleOnChange}
        />
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
      </form>
      <p className={stylesheet.readTime}>Read time: ~{readTime} mins</p>
    </div>
  );
}
