import { createSlice } from "@reduxjs/toolkit";
import face from "../image/face.jpg";

const initialState = [
  {
    id: 1,
    username: "jake",
    message: "라라라ㅏ라라ㅏㄹ",
  },
  {
    id: 2,
    username: "james",
    message: "라라라ㅏ라라ㅏㄹ3",
  },
  {
    id: 3,
    username: "jake",
    message: "라라라ㅏ라라ㅏㄹ2",
  },
];

export const friendsReducer = createSlice({
  name: "friends",
  initialState,
  reducers: {
    sendMessage: (state, { payload }) => [...state, payload.newContent],
  },
});

export const { sendMessage } = friendsReducer.actions;
