import React, { useContext } from "react";
import { Layout, ChatList, ChatInput } from "../components";
import { TextContext } from "../context";

const Chat = () => {
  const { text } = useContext(TextContext);

  return (
    <Layout>
      <ChatList chats={text} />
      <ChatInput />
    </Layout>
  );
};

export default Chat;
