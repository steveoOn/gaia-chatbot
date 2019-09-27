import React from "react";
import { Link } from "react-router-dom";
import nanoid from "nanoid";
import { ReactComponent as IconWelcomeGaga } from "../static/icon-welcome-gaga.svg";
import { ReactComponent as IconArrow } from "../static/icon-arrow.svg";
import { Question } from "../components";
import "./Welcome.scss";

const ques = [
  { id: 1, content: "最近迭代了什么新功能?" },
  { id: 2, content: "如何配置工作流审批节点?" },
  { id: 3, content: "为什么打不上卡?" }
];

const generateId = () => {
  let newQues = [...ques];

  for (let i = 0; i < ques.length; i++) {
    let randomId = nanoid(10);
    newQues[i]["id"] = randomId;
  }
  return newQues;
};

const Welcome = () => {
  const randomIdQues = generateId();

  return (
    <div className="welcome-wrapper">
      <div className="green-bg" />
      <div className="content-wrapper">
        <IconWelcomeGaga className="icon-welcome-gaga" />
        <div className="card">
          <h1 className="welcome-h1">
            Hi，我是小盖
            <br />
            你的智能小助手~
          </h1>
          <h2 className="welcome-h2">
            我可以回答你的任何问题，你可以试着这样问问我
          </h2>
          <hr />
          <Question questions={randomIdQues} />
        </div>
        <Link to="/chat" className="to-chat">
          <IconArrow />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
