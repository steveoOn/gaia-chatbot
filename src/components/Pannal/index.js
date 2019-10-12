import React from "react";
import { Question } from "..";
import "./index.scss";
import { generateId } from "../../container/generateId";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";

const ques = [
  { id: 1, content: "最近迭代了什么新功能?" },
  { id: 2, content: "如何配置工作流审批节点?" },
  { id: 3, content: "为什么打不上卡?" },
  { id: 4, content: "如何配置蓝牙和 WiFi 打卡?" },
  { id: 5, content: "苏州落户政策怎么样?" }
];

const Pannal = props => {
  const randomIdQues = generateId(ques);

  return (
    <div className="pannal-wrapper">
      <header className="title">
        <IconIdea onClick={props.ideaClick} />
        <h2>有什么想问的问题吗？</h2>
        <span />
      </header>
      <Question questions={randomIdQues} forChat />
    </div>
  );
};

export default Pannal;