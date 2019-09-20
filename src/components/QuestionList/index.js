import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 0;
  margin-top: 35px;

  li {
    list-style: none;
    background: #f6f8fa;
    border-radius: 28px;
    padding: 18px;
    color: #233257;
    margin-bottom: 16px;
    font-size: 14px;
    text-align: center;
  }
`;

const QuestionList = props => {
  return (
    <Ul>
      {props.questions.map(question => (
        <li key={question.id}>{question.content}</li>
      ))}
    </Ul>
  );
};

export default QuestionList;