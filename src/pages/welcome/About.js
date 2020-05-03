import React from "react";
import stylesheet from "./welcome.module.less";
import cx from "classnames";

function About() {
  return (
    <section className={cx(stylesheet.view, stylesheet.view3)}>
      <div className={cx(stylesheet.inner, stylesheet.about)}>
        <h2>OMG! THANKS FOR STOPPING BY.</h2>
        <p>
          Hi, I'm Samantha, a New York City UX Engineer, mentor and professional
          binge watcher. I truly believe that anyone can learn how to code with
          some patience and hard work. So I'm here to help guide you through
          your tech career. Seriously, looking forward to connecting with you
          soon!
        </p>
      </div>
    </section>
  );
}

export default About;
