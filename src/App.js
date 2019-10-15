import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import TestContentful from "./pages/Contentful";
import { ProvideMsg } from "./container/useMsg";

function App() {
  return (
    <ProvideMsg>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/chat" component={Chat} />
          <Route path="/test-contentful" component={TestContentful} />
        </Switch>
      </BrowserRouter>
    </ProvideMsg>
  );
}

export default App;
