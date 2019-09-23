import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { TextContext } from "./context";
// import console = require("console");

const defaultChat = [
  {
    id: 1,
    response: "<span>我是小盖，请问有什么可以帮到您的吗？</span>",
    isMe: false
  }
];
console.log(defaultChat.length);

function App() {
  const [text, setText] = useState(defaultChat);
  console.log(text.length);

  const updateText = obj => {
    console.log("from app obj is:", obj);
    debugger;
    setText(text => [...text, obj]);
    // text.push(obj);
    console.log(text);
  };

  return (
    <TextContext.Provider
      value={{
        text,
        updateText
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
