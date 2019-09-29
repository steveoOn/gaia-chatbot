import React from "react";
import "./index.scss";

const QuestionList = props => {
  return (
    <ul
      className={
        props.forChat ? "question-wrapper-for-chat" : "question-wrapper"
      }
    >
      {props.questions.map(question => (
        <li key={question.id}>{question.content}</li>
      ))}
    </ul>
  );
};

export default QuestionList;
