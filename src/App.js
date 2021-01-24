import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import PageRouter from "./page/PageRouter";
import { Provider } from "react-redux";
import store from "./store/rootReducer";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageRouter />
    </Provider>
  );
};

export default App;
