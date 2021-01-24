import React, { useState, useEffect } from "react";
import Friend from "./../component/friend/Friend";
import { useSelector, useDispatch } from "react-redux";
import { firstIntro } from "../store/reducer";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");
  const [newIntro, setNewIntro] = useState("");

  const initialIntroState = useSelector((state) => state.introReducer);

  // useEffect(() => {
  //   setNewUsername(window.prompt("이름을 입력하세요"));
  //   setNewIntro(window.prompt("한줄소개를 입력하세요"));
  // }, []);

  // useEffect(() => {
  //   const newUser = { username: newUsername, intro: newIntro };
  //   dispatch(firstIntro({ newUser }));
  //   console.log(initialIntroState);
  // }, [newIntro]);

  return (
    <div>
      <Friend initialIntroState={initialIntroState} />
    </div>
  );
};

export default FriendsPage;
