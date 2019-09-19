import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;

const ChatInput = props => {
  const [text, setText] = useState("");

  return (
    <Form>
      <input
        type="text"
        placeholder="可以问我任何问题噢~"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </Form>
  );
};

export default ChatInput;
