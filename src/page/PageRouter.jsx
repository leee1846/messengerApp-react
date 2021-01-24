import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../component/nav/Nav";
import FriendsPage from "./FriendsPage";
import ChatPage from "./ChatPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={FriendsPage} />
        <Route path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default PageRouter;
