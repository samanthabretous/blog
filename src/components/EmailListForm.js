import React, { useState } from "react";
import PropTypes from "prop-types";
import stylesheet from "./EmailListForm.module.less";
import addToMailchimp from "gatsby-plugin-mailchimp";

const EmailListForm = ({ pathname }) => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [showSuccess, setShowSuccess] = useState("");
  const [showError, setShowError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(
      email,
      { FNAME: fname, PATHNAME: pathname },
      process.env.MAILCHIMP_LIST_URL
    )
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          if (msg.includes("subscribed")) {
            setShowError(
              "Looks like you have already subscribe, you lucky dog"
            );
          }
          if (msg.includes("not valid")) {
            setShowError("Opps looks like you didn't enter the right email");
          }
        } else {
          setShowSuccess("You are so awesome! Thanks for subscribing.");
        }
      })
      .catch((err) => {
        setShowError("Looks like you have already subscribe, you lucky dog");
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleFnameChange = (event) => {
    setFname(event.currentTarget.value);
  };

  return (
    <>
      {!showSuccess.length && !showError.length && (
        <form onSubmit={handleSubmit} className={stylesheet.EmailListForm}>
          <h3>Subscribe to my email list!</h3>
          <div className={stylesheet.wrapper}>
            <input
              placeholder="Email address"
              name="email"
              type="email"
              required
              onChange={handleEmailChange}
            />
            <input
              placeholder="First name"
              name="email"
              type="text"
              required
              onChange={handleFnameChange}
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      )}
      {!!showSuccess.length && (
        <div className={stylesheet.complete}>
          <h3>{showSuccess}</h3>
        </div>
      )}
      {!!showError.length && (
        <div className={stylesheet.complete}>
          <h3>{showError}</h3>
        </div>
      )}
    </>
  );
};

EmailListForm.propsTypes = {
  pathname: PropTypes.string.isRequired,
};

export default EmailListForm;
