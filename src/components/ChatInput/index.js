import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextContext } from "../../context";

const Form = styled.form``;

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
      <input
        type="text"
        placeholder="可以问我任何问题噢~"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
    </Form>
  );
};

export default ChatInput;
