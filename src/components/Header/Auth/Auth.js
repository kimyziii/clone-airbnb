import React from "react";
import { ReactComponent as User } from "./User.svg";
import { ReactComponent as Bar } from "./Bar.svg";

import * as S from "../../../styles/Header/Auth.style";

const Auth = () => {
  return (
    <S.Auth>
      <Bar width="20" height="20" stroke="#646464" />
      <User width="30" height="30" stroke="#646464" fill="#646464" />
    </S.Auth>
  );
};

export default Auth;
