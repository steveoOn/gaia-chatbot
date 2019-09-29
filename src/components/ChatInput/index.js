import React, { useState, useContext } from "react";
import "./index.scss";
import { TextContext } from "../../context";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";
import { ReactComponent as IconSend } from "../../static/icon-send.svg";
import { ReactComponent as IconBottomGaga } from "../../static/icon-bottom-gaga.svg";

const ChatInput = props => {
  const [input, setInput] = useState("");
  const { updateTextMe, updateTextRes } = useContext(TextContext);

  const submitInput = async e => {
    e.preventDefault();
    if (!input) return;
    updateTextMe(input);
    try {
      const res = await fetch(`/api/chat?question=${input}&SessionId=1`);
      const data = await res.text();
      console.log("data is:", data);
      if (data) updateTextRes(data, input);
      setInput("");
    } catch (err) {
      throw err;
    }
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
