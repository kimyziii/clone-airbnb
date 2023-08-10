import React from "react";
import * as S from "../../styles/Modal/Backdrop.style";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.handleSignUpClose}></S.Backdrop>;
};

export default Backdrop;
