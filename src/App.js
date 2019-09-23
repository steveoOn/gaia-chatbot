import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { TextContext } from "./context";

const defaultChat = [
  {
    id: 1,
    response: "<span>我是小盖，请问有什么可以帮到您的吗？</span>",
    isMe: false
  }
];

function App() {
  const [text, setText] = useState(defaultChat);

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

  return (
    <TextContext.Provider
      value={{
        text,
        updateTextMe,
        updateTextRes
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </TextContext.Provider>
  );
}

export default App;
