import React from "react";
import { motion } from "framer-motion";
import { Question } from "..";
import "./index.scss";
import { generateId } from "../../container/generateId";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";
import { useMsg } from "../../container/useMsg";
import { getAnswer } from "../../container/getAnswer";

const ques = [
  { id: 1, content: "最近迭代了什么新功能?" },
  { id: 2, content: "如何配置工作流审批节点?" },
  { id: 3, content: "为什么打不上卡?" },
  { id: 4, content: "如何配置蓝牙和 WiFi 打卡?" },
  { id: 5, content: "苏州落户政策怎么样?" }
];

const Pannal = props => {
  const { updateTextMe, updateTextRes } = useMsg();

  const randomIdQues = generateId(ques);

  const selectList = async e => {
    let text = e.target.innerText;
    updateTextMe(text);
    const answer = await getAnswer(`/api/chat?question=${text}&SessionId=1`);
    if (answer) updateTextRes(answer, text);
  };

  return (
    <motion.div className="pannal-wrapper">
      <header className="title">
        <IconIdea />
        <h2>有什么想问的问题吗？</h2>
        <motion.div
          className="drag-handler"
          whileTap={{ y: 5 }}
          onTap={props.ideaClick}
        >
          <span />
        </motion.div>
      </header>
      <Question questions={randomIdQues} onSelectList={selectList} forChat />
    </motion.div>
  );
};

export default Pannal;
