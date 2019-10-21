import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

const QuestionList = props => {
  return (
    <ul
      className={
        props.forChat ? "question-wrapper-for-chat" : "question-wrapper"
      }
    >
      {props.questions.map(question => (
        <motion.li
          key={question.id}
          onClick={props.onSelectList}
          whileTap={{ scale: 0.9 }}
        >
          {question.content}
        </motion.li>
      ))}
    </ul>
  );
};

export default QuestionList;
