import React from "react";
import * as S from "../../../styles/Header/AuthMenu.style";

const AuthMenu = (props) => {
  // AuthMenu 닫고 모달창 띄우기
  // const clickHandler = () => {
  //   props.handleSignUpOpen();
  //   props.closeAuthMenuHandler();
  // };

  return (
    <S.AuthMenu>
      <div onBlur={props.onBlur} onClick={props.modalOpenHandler}>
        회원가입
      </div>
      <div onBlur={props.onBlur} onClick={props.modalOpenHandler}>
        로그인
      </div>
    </S.AuthMenu>
  );
};

export default AuthMenu;
