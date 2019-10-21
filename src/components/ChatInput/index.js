import React, { useState } from "react";
import "./index.scss";
import { useMsg } from "../../container/useMsg";
import { getAnswer } from "../../container/getAnswer";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";
import { ReactComponent as IconSend } from "../../static/icon-send.svg";
import { ReactComponent as IconBottomGaga } from "../../static/icon-bottom-gaga.svg";

const ChatInput = props => {
  const [input, setInput] = useState("");
  const { updateTextMe, updateTextRes } = useMsg();

  const submitInput = async e => {
    e.preventDefault();
    if (!input) return;
    updateTextMe(input);
    setInput("");
    const answer = await getAnswer(`/api/chat?question=${input}&SessionId=1`);
    if (answer) updateTextRes(answer, input);
  };

  return (
    <form className="input-form-wrapper" onSubmit={submitInput}>
      <IconBottomGaga className="icon-bottom-gaga" />
      <IconIdea className="btn-question" onClick={props.quesClick} />
      <input
        type="text"
        placeholder="可以问我任何问题噢~"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <IconSend className="btn-submit" onClick={submitInput} />
    </form>
  );
};

export default ChatInput;
