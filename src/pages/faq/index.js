import React, { useState } from "react";
import cx from "classnames";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer";
import PlusIcon from "../../icons/Plus";
import stylesheet from "./faq.module.less";
import questions from "./questions";

const QuestionSection = ({ sectionName, sectionQuestions }) => {
  const [openedAnswers, setOpenedAnswers] = useState([]);
  const toggleOpen = (index) => {
    const numberInArray = openedAnswers.indexOf(index);
    if (numberInArray !== -1) {
      openedAnswers.splice(numberInArray, 1);
      setOpenedAnswers([...openedAnswers]);
    } else {
      setOpenedAnswers([...openedAnswers, index]);
    }
  };
  return (
    <article className={stylesheet.section}>
      <h3 className={stylesheet.sectionName}>{sectionName}</h3>
      <div className={stylesheet.sectionQuestions}>
        <div className={stylesheet.expand}>
          <button
            onClick={() => {
              // add all indexes to openAnswer
              return setOpenedAnswers(
                Array.from(Array(sectionQuestions.length).keys())
              );
            }}
          >
            {openedAnswers.length !== sectionQuestions.length
              ? "Expand all"
              : "Collapse all"}
          </button>
        </div>
        {sectionQuestions.map((question, index) => (
          <div className={stylesheet.container} key={question.question}>
            <div
              className={stylesheet.questionContainer}
              onClick={() => {
                toggleOpen(index);
              }}
            >
              <p className={stylesheet.question}>{question.question}</p>
              <PlusIcon
                color="#3EBDB4"
                className={cx(stylesheet.icon, {
                  [stylesheet.iconExpanded]: openedAnswers.includes(index),
                })}
              />
            </div>
            <div
              className={cx(stylesheet.answer, {
                [stylesheet.expanded]: openedAnswers.includes(index),
              })}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

const FAQPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className={stylesheet.hero}>
        <div className={stylesheet.titleContainer}>
          <p className={stylesheet.subTitle}>F.A.Q</p>
          <h1 className={stylesheet.title}>
            Here are some common questions people ask me.
          </h1>
        </div>
      </div>
      <div className={stylesheet.content}>
        {Object.keys(questions).map((question) => (
          <QuestionSection
            key={question}
            sectionName={question}
            sectionQuestions={questions[question]}
          />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default FAQPage;
