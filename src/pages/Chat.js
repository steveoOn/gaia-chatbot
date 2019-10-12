import React, { useState } from "react";
import { Layout, ChatList, ChatInput, Pannal } from "../components";
import { useMsg } from "../container/useMsg";

const Chat = () => {
  const [isPannalOpen, setIsPannalOpen] = useState(false);
  const { text } = useMsg();
  // console.log("text from useMsg", text);

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
