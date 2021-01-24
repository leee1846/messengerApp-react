import { createSlice } from "@reduxjs/toolkit";
import face from "../image/face.jpg";

const initialChatState = [
  {
    id: 1,
    username: "jake",
    message: "라라라ㅏ라라ㅏㄹ",
  },
  {
    id: 2,
    username: "jake",
    message: "라라라ㅏ라라ㅏㄹ3",
  },
  {
    id: 3,
    username: "jake",
    message: "라라라ㅏ라라ㅏㄹ2",
  },
];

export const chatReducer = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    sendMessage: (state, { payload }) => [...state, payload.newContent],
  },
});

const initialIntroState = [
  {
    username: "jake",
    intro: "안녕하시렵니까?",
  },
  {
    username: "james",
    intro: "안녕하시렵니까???",
  },
];

export const introReducer = createSlice({
  name: "intro",
  initialState: initialIntroState,
  reducers: {
    firstIntro: (state, { payload }) => [...state, payload.newUser],
  },
});

export const { sendMessage } = chatReducer.actions;
export const { firstIntro } = introReducer.actions;
