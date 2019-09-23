import React, { useContext } from "react";
// import styled from "styled-components";
import { Layout, ChatList, ChatInput } from "../components";
import { TextContext } from "../context";

const Chat = props => {
  const { text } = useContext(TextContext);
  // console.log("text is:", text);

  return (
    <Layout>
      <ChatList chats={text} />
      <ChatInput />
    </Layout>
  );
};

export default Chat;
