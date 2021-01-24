import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import PageRouter from "./page/PageRouter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageRouter />
    </>
  );
};

export default App;
