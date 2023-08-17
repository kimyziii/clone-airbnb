import React from "react";
import * as S from "../../../styles/Header/AuthMenu.style";

const AuthMenu = (props) => {
  return (
    <S.AuthMenu onBlur={props.blurHandler}>
      <div onClick={props.modalOpenHandler}>회원가입</div>
      <div onClick={props.modalOpenHandler}>로그인</div>
    </S.AuthMenu>
  );
};

export default AuthMenu;
