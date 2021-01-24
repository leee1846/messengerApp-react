import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { friendsReducer } from "./reducer";

const reducer = combineReducers({
  friendReducer: friendsReducer.reducer,
});

export default configureStore({ reducer });
