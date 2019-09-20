import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextContext } from "../../context";
import { ReactComponent as IconIdea } from "../../static/icon-idea.svg";
import { ReactComponent as IconSend } from "../../static/icon-send.svg";

const Form = styled.form`
  position: relative;
  text-align: center;

  .icon-idea {
    position: absolute;
    top: 14px;
    left: 2.4rem;
  }

  input {
    background: #ffffff;
    box-shadow: 0 0 20px 0 rgba(35, 50, 87, 0.12);
    border-radius: 24px;
    padding: 18px 20px 18px 50px;
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
  }
`;

const ChatInput = props => {
  const [input, setInput] = useState("");
  const { updateText } = useContext(TextContext);

  const submitInput = e => {
    e.preventDefault();
    updateText(input, true);
    setInput("");
  };

  return (
    <Form onSubmit={submitInput}>
      <IconIdea className="icon-idea" />
      <input
        type="text"
        placeholder="可以问我任何问题噢~"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button>
        <IconSend />
      </button>
    </Form>
  );
};

export default ChatInput;
