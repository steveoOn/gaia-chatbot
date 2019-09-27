import React, { useContext } from "react";
import { Layout, ChatList, ChatInput, Pannal } from "../components";
import { TextContext } from "../context";

const Chat = () => {
  const { text } = useContext(TextContext);

  return (
    <Layout>
      <ChatList chats={text} />
      <ChatInput />
      <Pannal />
    </Layout>
  );
};

export default Chat;
