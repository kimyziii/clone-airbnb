import React from "react";
import * as S from "../../../styles/Header/AuthMenu.style";

const AuthMenu = (props) => {
  return (
    <S.AuthMenu>
      <button onClick={props.handleSignUpClick}>회원가입</button>
      <button>로그인</button>
    </S.AuthMenu>
  );
};

export default AuthMenu;
