import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { chatReducer, introReducer } from "./reducer";

const reducer = combineReducers({
  chatReducer: chatReducer.reducer,
  introReducer: introReducer.reducer,
});

export default configureStore({ reducer });
