import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { ProvideMsg } from "./container/useMsg";

function App() {
  return (
    <ProvideMsg>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </ProvideMsg>
  );
}

export default App;
