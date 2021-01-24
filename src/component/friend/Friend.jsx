import React from "react";
import * as Styled from "./Friend.style";
import face from "../../image/face.jpg";

const Friend = () => {
  return (
    <>
      <Styled.Friend>
        <Styled.ImageBox>
          <Styled.Image src={face}></Styled.Image>
        </Styled.ImageBox>
        <Styled.IntroBox>
          <Styled.Name>이경준</Styled.Name>
          <Styled.Intro>안녕하시렵니까?</Styled.Intro>
        </Styled.IntroBox>
      </Styled.Friend>
      <Styled.Friend>
        <Styled.ImageBox>
          <Styled.Image src={face}></Styled.Image>
        </Styled.ImageBox>
        <Styled.IntroBox>
          <Styled.Name>이경준2</Styled.Name>
          <Styled.Intro>안녕하시렵니까?</Styled.Intro>
        </Styled.IntroBox>
      </Styled.Friend>
    </>
  );
};

export default Friend;
