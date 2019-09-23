import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextContext } from "../../context";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";
import { ReactComponent as IconSend } from "../../static/icon-send.svg";
import { ReactComponent as IconBottomGaga } from "../../static/icon-bottom-gaga.svg";

const Form = styled.form`
  position: relative;
  text-align: center;

  .icon-idea {
    position: absolute;
    top: 14px;
    left: 2.4rem;
  }

  .icon-bottom-gaga {
    position: absolute;
    top: -3.5rem;
    left: 2rem;
  }

  input {
    background: #ffffff;
    box-shadow: 0 0 20px 0 rgba(35, 50, 87, 0.12);
    border-radius: 24px;
    padding: 18px 20px 18px 50px;
    -webkit-appearance: none;
    border: none;
    width: 72%;
    outline: none;
  }

  button {
    border: none;
    padding: 0;
    position: absolute;
    top: 16px;
    right: 2.4rem;
    background: none;
    outline: none;
  }
`;

const ChatInput = props => {
  const [input, setInput] = useState("");
  const { text, updateText } = useContext(TextContext);

  const submitInput = async e => {
    e.preventDefault();
    // console.log("from ChatInput context text is:", text);
    // console.log("after updateText:", text);
    updateText({ id: ++text.length, response: input, isMe: true });
    // try {
    //   await updateText(input, true);
    //   const res = await fetch(
    //     `http://localhost:8010/proxy/api/chat?question=${input}&SessionId=1`
    //   );
    //   data = await res.text();
    //   console.log("data is:", data);
    //   // await updateText(data, false);
    // } catch (err) {
    //   throw err;
    // }
  };

  return (
    <Form onSubmit={submitInput}>
      <IconBottomGaga className="icon-bottom-gaga" />
      <IconIdea className="icon-idea" />
      <input
        type="text"
        placeholder="可以问我任何问题噢~"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={submitInput}>
        <IconSend />
      </button>
    </Form>
  );
};

export default ChatInput;
