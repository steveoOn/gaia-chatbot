import React, { useContext, useState } from "react";
import { Layout, ChatList, ChatInput, Pannal } from "../components";
import { TextContext } from "../context";

const Chat = () => {
  const [isPannalOpen, setIsPannalOpen] = useState(false);
  const { text } = useContext(TextContext);

  const tagglePannal = () => {
    setIsPannalOpen(!isPannalOpen);
  };

  return (
    <Layout>
      <ChatList chats={text} />
      <ChatInput quesClick={tagglePannal} />
      {isPannalOpen && (
        <Pannal ideaClick={tagglePannal} isPannalOpen={isPannalOpen} />
      )}
    </Layout>
  );
};

export default Chat;
