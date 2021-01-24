import React from "react";
import * as Styled from "./Friend.style";
import face from "../../image/face.jpg";

const Friend = ({ initialIntroState }) => {
  // let names = null;
  return (
    <>
      {initialIntroState.map((state) => {
        // names = Object.keys(state);
        // console.log(names);
        return (
          <Styled.Friend>
            <Styled.ImageBox>
              <Styled.Image src={face}></Styled.Image>
            </Styled.ImageBox>
            <Styled.IntroBox>
              <Styled.Name>{state.username}</Styled.Name>
              <Styled.Intro>{state.intro}</Styled.Intro>
            </Styled.IntroBox>
          </Styled.Friend>
        );
      })}
    </>
  );
};

export default Friend;
