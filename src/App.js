import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { TextContext, DATA } from "./context";

function App() {
  const [text, setText] = useState(DATA);

  const updateText = (value, isMe) => {
    setText([...text, { id: ++text.length, response: value, isMe }]);
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
