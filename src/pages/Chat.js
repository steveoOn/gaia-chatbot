import React, { useState } from "react";
import styled from "styled-components";
import { Layout, ChatList, ChatInput } from "../components";

const DATA = [
  { id: 1, response: "Hi，我是小盖", isMe: false },
  { id: 2, response: "有什么可以帮到您的吗？", isMe: true },
  {
    id: 3,
    response:
      "全自动的呢，但是现在是非工作时间，除非紧急，建议亲亲上班时间再问呢 [可怜]",
    isMe: false
  }
];

const Chat = props => {
  const [newText, setNewText] = useState("");

  return (
    <Layout>
      <ChatList chats={DATA} />
      <ChatInput />
    </Layout>
  );
};

export default Chat;
