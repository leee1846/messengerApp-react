import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../component/nav/Nav";
import Friends from "./../component/friends/Friends";
import Chat from "./../component/chat/Chat";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Friends} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default PageRouter;
