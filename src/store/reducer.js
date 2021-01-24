import { createSlice } from "@reduxjs/toolkit";
import face from "../image/face.jpg";

const initialState = [
  {
    id: 1,
    image: face,
  },
  {
    id: 2,
    image: face,
  },
  {
    id: 3,
    image: face,
  },
];

export const friendsReducer = createSlice({
  name: "friends",
  initialState,
  reducers: {
    increase(state) {
      return state;
    },
  },
});

export const { increase } = friendsReducer.actions;
