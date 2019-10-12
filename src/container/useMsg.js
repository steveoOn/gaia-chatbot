import React, { useContext, useState } from "react";

const msgContext = React.createContext();

const welcomeMsg = [
  {
    id: 1,
    response: "<span>我是小盖，请问有什么可以帮到您的吗？</span>",
    isMe: false
  }
];

export function ProvideMsg(props) {
  const value = useProvideMsg();
  return (
    <msgContext.Provider value={value}>{props.children}</msgContext.Provider>
  );
}

export function useMsg() {
  return useContext(msgContext);
}

function useProvideMsg() {
  const [text, setText] = useState(welcomeMsg);

  const updateTextMe = meText => {
    // id 使用 ++text.length 会修改 context.text 的长度，换成 text.length + 1 可解决
    let newText = { id: text.length + 1, response: meText, isMe: true };
    setText([...text, newText]);
  };
  const updateTextRes = (resText, meText) => {
    // id 使用 ++text.length 会修改 context.text 的长度，换成 text.length + 1 可解决
    let newTextRes = { id: text.length + 2, response: resText, isMe: false };
    let newTextMe = { id: text.length + 1, response: meText, isMe: true };
    setText([...text, newTextMe, newTextRes]);
  };
  return { text, updateTextMe, updateTextRes };
}
